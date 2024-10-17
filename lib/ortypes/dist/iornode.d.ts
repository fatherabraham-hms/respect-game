import { PropId } from "./orec.js";
import { ErrorType, ORNodePropStatus, Proposal, ProposalFull, StoredProposal, GetAwardsSpec, GetProposalsSpec, GetVotesSpec, Vote } from "./ornode.js";
import { RespectAwardMt, RespectFungibleMt } from "./respect1155.js";
import { TokenId } from "./erc1155.js";
import { ContractMetadata } from "./erc7572.js";
export interface IORNode {
    /**
     * Upload a content of a proposal, which is already created onchain.
     *
     * ORNode checks if proposal with same id was created onchain, otherwise it throws ProposalNotCreated.
     *
     */
    putProposal: (proposal: ProposalFull) => Promise<ORNodePropStatus>;
    /**
     * Should return only proposals which have been submitted onchain
     */
    getProposal: (id: PropId) => Promise<StoredProposal>;
    getProposals: (spec?: GetProposalsSpec) => Promise<StoredProposal[]>;
    getPeriodNum: () => Promise<number>;
    getToken: (tokenId: TokenId) => Promise<RespectFungibleMt | RespectAwardMt>;
    getAward: (tokenId: TokenId) => Promise<RespectAwardMt>;
    getAwards: (spec?: GetAwardsSpec) => Promise<RespectAwardMt[]>;
    getVotes: (spec?: GetVotesSpec) => Promise<Vote[]>;
    getRespectMetadata: () => Promise<RespectFungibleMt>;
    getRespectContractMt: () => Promise<ContractMetadata>;
}
export declare class ProposalNotFound extends Error {
    name: ErrorType;
    statusCode: number;
    constructor(propId: PropId);
}
export declare class ProposalNotCreated extends Error {
    name: ErrorType;
    constructor(proposal: Proposal);
}
export declare class ProposalInvalid extends Error {
    name: ErrorType;
    cause: string;
    statusCode: number;
    constructor(proposal: Proposal, cause: any);
}
export declare class TokenNotFound extends Error {
    name: ErrorType;
    statusCode: number;
    constructor(tokenId: TokenId);
}
//# sourceMappingURL=iornode.d.ts.map