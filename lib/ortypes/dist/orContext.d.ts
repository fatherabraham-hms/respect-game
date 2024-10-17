import { ContractRunner, Signer } from "ethers";
import { OrecContract as Orec } from "./orec.js";
import { EthAddress } from "./eth.js";
import { IORNode } from "./iornode.js";
import { Contract as FractalRespect } from "./fractalRespect.js";
import { Contract as Respect1155 } from "./respect1155.js";
import { OnchainProp, PropId } from "./orec.js";
import { Url } from "./common.js";
import { ErrorDecoder } from 'ethers-decode-error';
export declare class OnchainPropNotFound extends Error {
    name: string;
    constructor(propId: PropId);
}
export interface State {
    orec: Orec;
    newRespect: Respect1155;
    oldRespect: FractalRespect;
    ornode?: IORNode;
}
export interface StateWithOrnode extends State {
    ornode: IORNode;
}
export interface Config {
    orec: EthAddress | Orec;
    newRespect: EthAddress | Respect1155;
    ornode?: IORNode;
    contractRunner?: ContractRunner | Url;
}
export interface ConfigWithOrnode extends Config {
    ornode: IORNode;
}
export type StateForConfig<CT extends Config> = CT extends ConfigWithOrnode ? StateWithOrnode : State;
/**
 * Class for holding context for ORDAO (smart contract, urls, addresses composing the ORDAO system).
 */
export declare class ORContext<CT extends Config> {
    private _st;
    private _oldRespectAddr?;
    private _newRespectAddr?;
    private _orecAddr?;
    private _runner;
    private _errDecoder;
    constructor(state: StateForConfig<CT>, runner: ContractRunner, validate?: boolean);
    validate(): Promise<void>;
    private static _determineRunner;
    static create<CT_ extends Config>(config: CT_): Promise<ORContext<CT_>>;
    switchSigner(signer: Signer): void;
    connect(signer: Signer): ORContext<CT>;
    get orec(): Orec;
    get newRespect(): Respect1155;
    get ornode(): StateForConfig<CT>['ornode'];
    get oldRespect(): FractalRespect;
    get fungibleId(): bigint;
    get runner(): ContractRunner;
    get errorDecoder(): ErrorDecoder;
    getOrecAddr(): Promise<EthAddress>;
    getOldRespectAddr(): Promise<EthAddress>;
    getNewRespectAddr(): Promise<EthAddress>;
    getProposalFromChain(id: PropId): Promise<OnchainProp>;
    tryGetPropFromChain(id: PropId): Promise<OnchainProp | undefined>;
}
//# sourceMappingURL=orContext.d.ts.map