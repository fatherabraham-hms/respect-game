import { JsonRpcProvider, WebSocketProvider } from "ethers";
import { OrecFactory } from "./orec.js";
import { isEthAddr, zEthNonZeroAddress } from "./eth.js";
import { Factory as FractalRespectFactory } from "./fractalRespect.js";
import { Factory as Respect1155Factory } from "./respect1155.js";
import { z } from "zod";
import { zProposalState, zStage, zVoteStatus } from "./orec.js";
import { InvalidArgumentError } from "./common.js";
import { expect } from "chai";
import { ErrorDecoder } from 'ethers-decode-error';
export class OnchainPropNotFound extends Error {
    constructor(propId) {
        const msg = `Proposal with id ${propId} does not exist`;
        super(msg);
        this.name = "OnchainPropNotFound";
    }
}
/**
 * Class for holding context for ORDAO (smart contract, urls, addresses composing the ORDAO system).
 */
export class ORContext {
    constructor(state, runner, validate = true) {
        this._st = state;
        this._runner = runner;
        this._errDecoder = ErrorDecoder.create([
            // TODO: this function accepts interfaces, so you should not need to copy fragments
            // But for some reason it does not work (throws r.filter is not a function). I think it is this line:
            // https://github.com/superical/ethers-decode-error/blob/5ba3ce49bcb5cd2824fc25014a00cd1e4f96ede1/src/error-decoder.ts#L116
            // `instanceof` check fails because interface is being created by a different constructor function than ErrorDecoder uses.
            // There's a problem with ethers / typechain commonjs vs ESM versions.
            // Maybe I have a commonjs version of interface created by hardhat
            // and ErrorDecoder is expecting esm?
            new Array(...state.orec.interface.fragments),
            new Array(...state.newRespect.interface.fragments),
        ]);
        if (validate) {
            this.validate();
        }
    }
    async validate() {
        // Check if orec is responsive
        const oldRespAddr = await this.getOldRespectAddr();
        // Check if respect address in orec matches passed oldRespectAddr
        z.literal(await this._st.orec.respectContract()).parse(oldRespAddr);
        // Check if new Respect is responsive
        const owner = await this._st.newRespect.owner();
        // Check if owner of newRespect is Orec
        const orecAddr = await this.getOrecAddr();
        expect(orecAddr).to.be.equal(owner);
        // Check oldRespect contract
        const balance = await this._st.oldRespect.balanceOf("0x5fc8a2626F6Caf00c4Af06436c12C831a2f61c66");
        z.coerce.number().parse(balance);
        console.log("orContext validation successful");
    }
    static _determineRunner(config) {
        let runner;
        if (config.contractRunner) {
            if (typeof config.contractRunner === 'string') {
                // const url = zUrl.parse(config.contractRunner);
                const url = new URL(config.contractRunner);
                console.log("Provider protocol: ", url.protocol, ", full url: ", url.toString());
                if (url.protocol === 'https:' || url.protocol === 'http:') {
                    runner = new JsonRpcProvider(url.toString());
                }
                else if (url.protocol === 'wss:') {
                    runner = new WebSocketProvider(url.toString());
                }
                else {
                    throw new Error("Unknown protocol in URL for provider");
                }
            }
            else {
                runner = config.contractRunner;
            }
        }
        else {
            if (!isEthAddr(config.orec)) {
                runner = config.orec.runner;
            }
            else if (!isEthAddr(config.newRespect)) {
                runner = config.newRespect.runner;
            }
        }
        if (!runner) {
            throw new InvalidArgumentError("Could not determine contract runner");
        }
        return runner;
    }
    static async create(config) {
        const runner = this._determineRunner(config);
        const network = await runner.provider?.getNetwork();
        console.debug("provider.getNetwork().chainId: ", network?.chainId);
        const orec = isEthAddr(config.orec)
            ? OrecFactory.connect(config.orec, runner)
            : config.orec;
        const newRespect = isEthAddr(config.newRespect)
            ? Respect1155Factory.connect(config.newRespect, runner)
            : config.newRespect;
        const oldRespAddr = zEthNonZeroAddress.parse(await orec.respectContract());
        console.debug("oldRespectAddr: ", oldRespAddr);
        const oldRespect = FractalRespectFactory.connect(oldRespAddr, runner);
        const st = {
            orec, newRespect, oldRespect,
            ornode: config.ornode,
        };
        const ctx = new ORContext(st, runner, false);
        ctx._oldRespectAddr = oldRespAddr;
        await ctx.validate();
        // console.debug("This is new 4");
        return ctx;
    }
    // callTest() {
    //   testVersion();
    // }
    switchSigner(signer) {
        this._st.orec = this._st.orec.connect(signer);
    }
    connect(signer) {
        return new ORContext({ ...this._st, orec: this._st.orec.connect(signer) }, this._runner, false);
    }
    get orec() {
        return this._st.orec;
    }
    get newRespect() {
        return this._st.newRespect;
    }
    get ornode() {
        return this._st.ornode;
    }
    get oldRespect() {
        return this._st.oldRespect;
    }
    get fungibleId() {
        return 0n;
    }
    get runner() {
        return this._runner;
    }
    get errorDecoder() {
        return this._errDecoder;
    }
    async getOrecAddr() {
        if (this._orecAddr === undefined) {
            this._orecAddr = await this._st.orec.getAddress();
        }
        return this._orecAddr;
    }
    async getOldRespectAddr() {
        if (this._oldRespectAddr === undefined) {
            this._oldRespectAddr = await this._st.oldRespect.getAddress();
        }
        return this._oldRespectAddr;
    }
    async getNewRespectAddr() {
        if (this._newRespectAddr === undefined) {
            this._newRespectAddr = await this._st.newRespect.getAddress();
        }
        return this._newRespectAddr;
    }
    async getProposalFromChain(id) {
        const prop = await this.tryGetPropFromChain(id);
        if (prop === undefined) {
            throw new OnchainPropNotFound(id);
        }
        else {
            return prop;
        }
    }
    async tryGetPropFromChain(id) {
        const pstate = await this._st.orec.proposals(id);
        if (pstate.createTime === 0n) {
            return undefined;
        }
        else {
            const propState = zProposalState.parse(pstate);
            const stage = zStage.parse(await this._st.orec.getStage(id));
            const voteStatus = zVoteStatus.parse(await this._st.orec.getVoteStatus(id));
            const r = {
                id: id,
                createTime: new Date(Number(propState.createTime) * 1000),
                yesWeight: propState.yesWeight,
                noWeight: propState.noWeight,
                stage,
                voteStatus,
            };
            return r;
        }
    }
}
