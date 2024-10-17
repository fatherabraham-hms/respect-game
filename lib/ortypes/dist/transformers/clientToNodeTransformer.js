import { zBurnRespectRequest, zCustomCallRequest, zCustomSignalRequest, zRespectAccountRequest, zRespectBreakoutRequest, zTickRequest, zGetProposalsSpec as zCGetProposalsSpec, zGetAwardsSpec as zCGetAwardsSpec, zGetVotesSpec as zCGetVotesSpec, } from "../orclient.js";
import { idOfBurnRespectAttach, idOfCustomCallAttach, idOfCustomSignalAttach, idOfRespectAccountAttachV1, idOfRespectBreakoutAttach, zBurnRespectValid, zCustomCallValid, zCustomSignalValid, zRespectAccountValid, zRespectBreakoutValid, zTickValid, zGetProposalsSpec, zGetAwardsSpec, zGetVotesSpec } from "../ornode.js";
import { OrecFactory, zTickSignalType, strToVtMap, zStrToVoteType } from "../orec.js";
import { Factory as Respect1155Factory, zBreakoutMintType, zMintRespectArgs, zUnspecifiedMintType } from "../respect1155.js";
import { propId } from "orec/utils";
import { addCustomIssue } from "../zErrorHandling.js";
import { zBreakoutMintRequest, zGroupNum, zPropType, zRankNum } from "../fractal.js";
import { zBigNumberish, zBigNumberishToBigint } from "../eth.js";
import { packTokenId } from "respect1155-sc/utils/tokenId.js";
const respectInterface = Respect1155Factory.createInterface();
const orecInterface = OrecFactory.createInterface();
const _rewards = [
    55n, 34n, 21n, 13n, 8n, 5n
];
export const zRankNumToValue = zRankNum.transform((rankNum, ctx) => {
    try {
        const rankIndex = rankNum - 1;
        return _rewards[rankIndex];
    }
    catch (err) {
        addCustomIssue(rankNum, ctx, err, "exception in zRankNumToValue");
    }
}).pipe(zBigNumberish.gt(0n));
export const clientToOrecVoteMap = strToVtMap;
export const zCVoteTypeToOrec = zStrToVoteType;
function mkzCRespectBreakoutToMintArgs(orctx) {
    return zRespectBreakoutRequest.transform(async (val, ctx) => {
        try {
            const periodNumber = val.meetingNum === undefined
                ? await orctx.ornode.getPeriodNum()
                : val.meetingNum - 1;
            const mintReqs = [];
            for (const [i, addr] of val.rankings.entries()) {
                const value = zRankNumToValue.parse(i + 1);
                const id = packTokenId({
                    owner: addr,
                    mintType: zBreakoutMintType.value,
                    periodNumber
                });
                mintReqs.push({
                    value, id: zBigNumberishToBigint.parse(id)
                });
            }
            const r = {
                mintRequests: mintReqs,
                data: "0x"
            };
            return r;
        }
        catch (err) {
            // TODO: pass the parent err in some way, instead of passing it through message...
            addCustomIssue(val, ctx, err, "exception in zCRespectBreakoutToMintArgs");
        }
    }).pipe(zBreakoutMintRequest);
}
function mkzCRespectBreakoutToProposal(orctx) {
    const _zCRespectBreakoutToMintArgs = mkzCRespectBreakoutToMintArgs(orctx);
    return zRespectBreakoutRequest.transform(async (val, ctx) => {
        try {
            const mintArgs = await _zCRespectBreakoutToMintArgs.parseAsync(val);
            const cdata = respectInterface.encodeFunctionData("mintRespectGroup", [mintArgs.mintRequests, mintArgs.data]);
            const addr = await orctx.getNewRespectAddr();
            const attachment = {
                propType: zPropType.Enum.respectBreakout,
                groupNum: zGroupNum.parse(val.groupNum),
                propTitle: val.metadata?.propTitle,
                propDescription: val.metadata?.propDescription
            };
            const memo = idOfRespectBreakoutAttach(attachment);
            const content = { addr, cdata, memo };
            const id = propId(content);
            const r = {
                id,
                content,
                attachment
            };
            return r;
        }
        catch (err) {
            addCustomIssue(val, ctx, {
                message: "exception in zCRespectBreakoutReqToProposal",
                cause: err
            });
        }
    }).pipe(zRespectBreakoutValid);
}
function mkzCRespectAccountReqToMintArgs(orctx) {
    return zRespectAccountRequest.transform(async (val, ctx) => {
        try {
            const periodNumber = val.meetingNum === undefined
                ? await orctx.ornode.getPeriodNum()
                : val.meetingNum - 1;
            const mintType = val.mintType === undefined
                ? zUnspecifiedMintType.value
                : val.mintType;
            const id = packTokenId({
                owner: val.account,
                mintType,
                periodNumber
            });
            const mintReq = {
                id: zBigNumberishToBigint.parse(id),
                value: val.value
            };
            const r = {
                request: mintReq,
                data: "0x"
            };
            return r;
        }
        catch (err) {
            addCustomIssue(val, ctx, {
                message: "exception in zCRespectAccountReqToMintArgs",
                cause: err
            });
        }
    }).pipe(zMintRespectArgs);
}
function mkzCRespAccountReqToProposal(orctx) {
    const _zCRespectAccountReqToMintArgs = mkzCRespectAccountReqToMintArgs(orctx);
    return zRespectAccountRequest.transform(async (val, ctx) => {
        try {
            const mintArgs = await _zCRespectAccountReqToMintArgs.parseAsync(val);
            const cdata = respectInterface.encodeFunctionData("mintRespect", [mintArgs.request, mintArgs.data]);
            const addr = await orctx.getNewRespectAddr();
            const attachment = {
                propType: zPropType.Enum.respectAccount,
                mintReason: val.reason,
                mintTitle: val.title,
                propTitle: val.metadata?.propTitle,
                propDescription: val.metadata?.propDescription,
                groupNum: val.groupNum,
                version: 2
            };
            const memo = idOfRespectAccountAttachV1(attachment);
            const content = { addr, cdata, memo };
            const id = propId(content);
            const r = {
                id,
                content,
                attachment
            };
            return r;
        }
        catch (err) {
            addCustomIssue(val, ctx, {
                message: "exception in zCRespectAccountReqToProposal",
                cause: err
            });
        }
    }).pipe(zRespectAccountValid);
}
function mkzCBurnRespReqToProposal(orctx) {
    return zBurnRespectRequest.transform(async (val, ctx) => {
        try {
            const args = {
                tokenId: zBigNumberishToBigint.parse((val.tokenId)),
                data: "0x"
            };
            const cdata = respectInterface.encodeFunctionData("burnRespect", [args.tokenId, args.data]);
            const addr = await orctx.getNewRespectAddr();
            const attachment = {
                propType: zPropType.Enum.burnRespect,
                burnReason: val.reason,
                propTitle: val.metadata?.propTitle,
                propDescription: val.metadata?.propDescription
            };
            const memo = idOfBurnRespectAttach(attachment);
            const content = { addr, cdata, memo };
            const id = propId(content);
            const r = {
                id,
                content,
                attachment
            };
            return r;
        }
        catch (err) {
            addCustomIssue(val, ctx, {
                message: "exception in zCBurnRespReqToProposal",
                cause: err
            });
        }
    }).pipe(zBurnRespectValid);
}
function mkzCCustomSignalReqToProposal(orctx) {
    return zCustomSignalRequest.transform(async (val, ctx) => {
        try {
            const args = {
                signalType: val.signalType,
                data: val.data
            };
            const cdata = orecInterface.encodeFunctionData("signal", [args.signalType, args.data]);
            const addr = await orctx.getOrecAddr();
            const attachment = {
                propType: zPropType.Enum.customSignal,
                link: val.link,
                propTitle: val.metadata?.propTitle,
                propDescription: val.metadata?.propDescription
            };
            const memo = idOfCustomSignalAttach(attachment);
            const content = { addr, cdata, memo };
            const id = propId(content);
            const r = {
                id,
                content,
                attachment
            };
            return r;
        }
        catch (err) {
            addCustomIssue(val, ctx, {
                message: "exception in zCCustomSignalReqToProposal",
                cause: err
            });
        }
    }).pipe(zCustomSignalValid);
}
function mkzTickReqToProposal(orctx) {
    return zTickRequest.transform(async (val, ctx) => {
        try {
            const args = {
                signalType: zTickSignalType.value,
                data: val.data === undefined ? "0x" : val.data
            };
            const cdata = orecInterface.encodeFunctionData("signal", [args.signalType, args.data]);
            const addr = await orctx.getOrecAddr();
            const attachment = {
                propType: zPropType.Enum.tick,
                link: val.link,
                propTitle: val.metadata?.propTitle,
                propDescription: val.metadata?.propDescription
            };
            const memo = idOfCustomSignalAttach(attachment);
            const content = { addr, cdata, memo };
            const id = propId(content);
            const r = {
                id,
                content,
                attachment
            };
            return r;
        }
        catch (err) {
            addCustomIssue(val, ctx, {
                message: "exception in zCTickReqToProposal",
                cause: err
            });
        }
    }).pipe(zTickValid);
}
function mkzCCustomCallReqToProposal(orctx) {
    return zCustomCallRequest.transform(async (val, ctx) => {
        try {
            const attachment = {
                propType: zPropType.Enum.customCall,
                propTitle: val.metadata?.propTitle,
                propDescription: val.metadata?.propDescription
            };
            const memo = idOfCustomCallAttach(attachment);
            const content = {
                addr: val.address,
                cdata: val.cdata,
                memo
            };
            const id = propId(content);
            const r = {
                id,
                content,
                attachment
            };
            return r;
        }
        catch (err) {
            addCustomIssue(val, ctx, {
                message: "exception in zCCustomCallReqToProposal",
                cause: err
            });
        }
    }).pipe(zCustomCallValid);
}
// zCGetProposalSepc is strict, so this checks that no unknown fields are specified
export const zCGetProposalsSpecToNodeSpec = zCGetProposalsSpec.transform(spec => {
    const r = {
        before: spec.before !== undefined ? spec.before.valueOf() / 1000 : undefined,
        limit: spec.limit,
        execStatusFilter: spec.execStatFilter
    };
    return r;
}).pipe(zGetProposalsSpec);
export const zCGetAwardsSpecToNodeSpec = zCGetAwardsSpec.transform(spec => {
    const r = {
        ...spec,
        before: spec.before !== undefined ? spec.before.valueOf() / 1000 : undefined
    };
    return r;
}).pipe(zGetAwardsSpec);
export const zCGetVotesSpecToNodeSpec = zCGetVotesSpec.transform(spec => {
    const r = {
        ...spec,
        before: spec.before !== undefined ? spec.before.valueOf() / 1000 : undefined,
    };
    return r;
}).pipe(zGetVotesSpec);
// const zCGetProposalsSpecToNode = zCGetProposalsSpec.transform(spec => {
//   const nspec: GetProposalsSpec = {
//     untilTime: spec.untilTime
//   }
// })
export class ClientToNodeTransformer {
    constructor(context) {
        this._ctx = context;
        this._zCRespBreakoutReqToProposal = mkzCRespectBreakoutToProposal(this._ctx);
        this._zCRespAccountReqToProposal = mkzCRespAccountReqToProposal(this._ctx);
        this._zCBurnRespReqToProposal = mkzCBurnRespReqToProposal(this._ctx);
        this._zCCustomSignalReqToProposal = mkzCCustomSignalReqToProposal(this._ctx);
        this._zCTickReqToProposal = mkzTickReqToProposal(this._ctx);
        this._zCCustomCallReqToProposal = mkzCCustomCallReqToProposal(this._ctx);
    }
    transformGetProposalsSpec(spec) {
        return zCGetProposalsSpecToNodeSpec.parse(spec);
    }
    transformGetAwardsSpec(spec) {
        return zCGetAwardsSpecToNodeSpec.parse(spec);
    }
    transformGetVotesSpec(spec) {
        return zCGetVotesSpecToNodeSpec.parse(spec);
    }
    async transformRespectBreakout(req) {
        return await this._zCRespBreakoutReqToProposal.parseAsync(req);
    }
    async transformRespectAccount(req) {
        return await this._zCRespAccountReqToProposal.parseAsync(req);
    }
    async transformBurnRespect(req) {
        return await this._zCBurnRespReqToProposal.parseAsync(req);
    }
    async transformCustomSignal(req) {
        return await this._zCCustomSignalReqToProposal.parseAsync(req);
    }
    async transformTick(req) {
        return await this._zCTickReqToProposal.parseAsync(req);
    }
    async transformCustomCall(req) {
        return await this._zCCustomCallReqToProposal.parseAsync(req);
    }
    transformVoteType(vt) {
        return zCVoteTypeToOrec.parse(vt);
    }
}
