import { ContractTransactionResponse, TransactionReceipt } from "ethers";
import { DecodedError } from "ortypes";
import { Proposal as NProp } from "ortypes/ornode.js";
export declare class NotImplemented extends Error {
    constructor(message: string);
}
export declare class TxFailed extends Error {
    decodedError?: DecodedError;
    receipt?: TransactionReceipt;
    constructor(response: ContractTransactionResponse, receipt: TransactionReceipt | null, message?: string);
    constructor(cause: unknown, decodedErr?: DecodedError, message?: string);
}
/**
 * Thrown if orclient failed to push proposal to ornode
 */
export declare class PutProposalFailure extends Error {
    constructor(nprop: NProp, cause: any, msg?: string);
}
//# sourceMappingURL=errors.d.ts.map