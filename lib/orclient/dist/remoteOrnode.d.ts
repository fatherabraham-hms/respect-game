import { ContractMetadata, IORNode, PropId, ProposalInvalid, ProposalNotCreated, ProposalNotFound } from "ortypes";
import { GetProposalsSpec, GetAwardsSpec, ORNodePropStatus, StoredProposal as Proposal, ProposalFull, Vote, GetVotesSpec } from "ortypes/ornode.js";
import { OrnodeClient } from "./ornodeClient/index.js";
import { RespectAwardMt, RespectFungibleMt, TokenId } from "ortypes/respect1155.js";
export declare class OrnodeUnknownErrResponse extends Error {
    fullErr: any;
    constructor(msg: string, fullErr: any);
}
export declare class OrnodeRequestFailed extends Error {
    cause: unknown;
    constructor(msg: string, cause: unknown);
}
export declare function discriminateError(error: any): ProposalNotCreated | OrnodeUnknownErrResponse | ProposalNotFound | ProposalInvalid;
export declare class RemoteOrnode implements IORNode {
    ornodeClient: OrnodeClient;
    constructor(url: string);
    putProposal(proposal: ProposalFull): Promise<ORNodePropStatus>;
    getProposal(id: PropId): Promise<Proposal>;
    getProposals(spec?: GetProposalsSpec): Promise<Proposal[]>;
    getPeriodNum(): Promise<number>;
    getToken(tokenId: TokenId): Promise<RespectFungibleMt | RespectAwardMt>;
    getAward(tokenId: TokenId): Promise<RespectAwardMt>;
    getVotes(spec?: GetVotesSpec): Promise<Vote[]>;
    getRespectMetadata(): Promise<RespectFungibleMt>;
    getRespectContractMt(): Promise<ContractMetadata>;
    getAwards(spec?: GetAwardsSpec): Promise<RespectAwardMt[]>;
    private _makeOrnodeRequest;
}
//# sourceMappingURL=remoteOrnode.d.ts.map