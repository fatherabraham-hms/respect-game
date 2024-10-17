import { Signer, ContractTransactionReceipt } from "ethers";
import { BurnRespectRequest, CustomCallRequest, CustomSignalRequest, Proposal, RespectAccountRequest, RespectBreakoutRequest, TickRequest, VoteRequest, VoteWithPropRequest, VoteType, Vote, GetProposalsSpec, GetAwardsSpec, ExecError, GetVotesSpec } from "ortypes/orclient.js";
import { ORContext as ORContextOrig, ConfigWithOrnode } from "ortypes/orContext.js";
import { ORNodePropStatus } from "ortypes/ornode.js";
import { EthAddress, PropId } from "ortypes";
import { RespectAwardMt, RespectFungibleMt, TokenId } from "ortypes/respect1155.js";
import { Erc1155Mt } from "ortypes/erc1155.js";
export declare class ORContext extends ORContextOrig<ConfigWithOrnode> {
}
export interface Config {
    propConfirms: number;
    otherConfirms: number;
    propSubmitRetries: number;
    propResubmitInterval: number;
}
export declare const defaultConfig: Config;
export interface OnchainActionRes {
    txReceipt: ContractTransactionReceipt;
}
export interface ProposeRes extends OnchainActionRes {
    proposal: Proposal;
    status: ORNodePropStatus;
}
export type ExecRes = OnchainActionRes & {
    execStatus: "Executed";
} | OnchainActionRes & {
    execStatus: "ExecutionFailed";
    execError?: ExecError;
};
/**
 * Client for ORDAO system.
 */
export declare class ORClient {
    private _ctx;
    private _nodeToClient;
    private _clientToNode;
    private _cfg;
    constructor(context: ORContext, cfg?: Config);
    /**
     * Return new instance that authors OREC transactions as `signer`.
     * @param signer - ethers.Signer implementation that should be used to sign transactions
     * @returns - new instance of ORClient.
     */
    connect(signer: Signer): ORClient;
    /**
     * Context for ORDAO. From it you can get components of ORDAO:
     * * Smart contracts;
     * * Contract runner;
     * * Used endpoints (for ORNode and Ethereum RPC API)
     */
    get context(): ORContext;
    /**
     * Returns proposal by its id.
     * @param id - proposal id
     *
     * @example
     * await c.getProposal("0x2f5e1602a2e1ccc9cf707bc57361ae6587cd87e8ae27105cae38c0db12f4fab1")
     */
    getProposal(id: PropId): Promise<Proposal>;
    /**
     * Returns a list of proposals ordered from latest to oldest
     *
     * @param spec - specification for query:
     * * `before` - newest possible creation date for proposal. If specified, only proposals which were created up to this date will be returned;
     * * `limit` - maximum number of proposals to return. If not specified, it's up to ornode implementation.
     * * `execStatFilter` - list of ExecutionStatus values. Proposals which have execution status other than any of values in this list, will be filtered out. If undefined, then no filtering based on execution status is done.
     * * `voteStatFilter` - list of VoteStatus values. Proposals which have vote status other than any of values specified in the list will be filtered out (not returned). If undefined - no filtering based on vote status is done.
     * * `stageFilter` - list of Stage values. Proposals which are in stage other than any of stages specified in this list will be filtered out. If undefined - no filtering based on proposal stage is done.
     * @returns List of proposals
     *
     * @example
     * await c.getProposals()
     */
    getProposals(spec?: GetProposalsSpec): Promise<Proposal[]>;
    /**
     * Vote on a proposal.
     * @param propId - id of a proposal to vote on.
     * @param vote - what to vote for.
     * * 'Yes' - vote for proposals;
     * * 'No' - vote against;
     * @param memo - memo text string to submit with proposal.
     *
     * @remarks Note that memo string with go with calldata of transaction, so longer string will cost more.
     *
     * @example
     * await c.vote("0x2f5e1602a2e1ccc9cf707bc57361ae6587cd87e8ae27105cae38c0db12f4fab1", "Yes")
     */
    vote(propId: PropId, vote: VoteType, memo?: string): Promise<OnchainActionRes>;
    /**
     * Vote on a proposal.
     * @param request - parameters for a vote as an object. See {@link ORClient#vote}.
     * @returns hash of submitted transaction
     *
     * @remarks Note that memo string with go with calldata of transaction, so longer string will cost more.
     *
     * @example
     * await c.vote({
         propId: "0x2f5e1602a2e1ccc9cf707bc57361ae6587cd87e8ae27105cae38c0db12f4fab1",
         vote: "Yes",
         memo: "Optional memo"
       })
     */
    vote(request: VoteRequest): Promise<OnchainActionRes>;
    /**
     * Execute a passed proposal. Will fail if proposal is not passed yet.
     * @param propId - id of proposal to execute.
     *
     * @example
     * await c.execute("0x2f5e1602a2e1ccc9cf707bc57361ae6587cd87e8ae27105cae38c0db12f4fab1")
     */
    execute(propId: PropId): Promise<ExecRes>;
    /**
     * Create a proposal to award respect game participants of a single breakout room, based on results of that breakout room.
     * @param request - breakout room results, plus optional metadata.
     * @param vote - vote to submit with the result. Default: `{ vote: "Yes" }`.
     * @returns resulting proposal and its status.
     *
     * @remarks
     * The respect amounts to award are calculated automatically based on rankings:
     * * Level 6 - 55
     * * Level 5 - 34
     * * Level 4 - 21
     * * Level 3 - 13
     * * Level 2 - 8
     * * Level 1 - 5
     *
     * The actual onchain proposal is just for minting Respect according to distribution above.
     *
     * If `vote` parameter is not specified "Yes" vote is submitted.
     * If you want to make this proposal but don't want to vote for it, specify `{ vote: "None" }`.
     *
     * @example
     *
       await c.proposeBreakoutResult(
         {
           meetingNum: 1,
           groupNum: 1,
           rankings: [
             "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
             "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
             "0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC",
             "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
           ]
         },
         {
           memo: "Some memo",
           vote: "Yes"
         }
       )
     */
    proposeBreakoutResult(request: RespectBreakoutRequest, vote?: VoteWithPropRequest): Promise<ProposeRes>;
    /**
     * Propose to mint a single Respect award to a single account.
     *
     * @param req - specification for the Respect award, plus optional metadata.
     * @param vote - vote to submit with the result. Default: `{ vote: "Yes" }`.
     * @returns resulting proposal and its status.
     *
     * @remarks
     * If `vote` parameter is not specified "Yes" vote is submitted.
     * If you want to make this proposal but don't want to vote for it, specify `{ vote: "None" }`.
     *
     * @example
     * await c.proposeRespectTo({
         meetingNum: 1,
         mintType: 1,
         account: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
         value: 10n,
         title: "Reward Title",
         reason: "Reward reason"
      })
     */
    proposeRespectTo(req: RespectAccountRequest, vote?: VoteWithPropRequest): Promise<ProposeRes>;
    /**
     * Create a proposal to burn a single Respect award.
     * @param req - specification for the award to burn, plus optional metadata.
     * @param vote - vote to submit with the result. Default: `{ vote: "Yes" }`.
     * @returns resulting proposal and its status.
     *
     * @remarks
     * If `vote` parameter is not specified "Yes" vote is submitted.
     * If you want to make this proposal but don't want to vote for it, specify `{ vote: "None" }`.
     *
     * @example
     * await c.proposeBurnRespect(
     *   {
     *     tokenId: "0x000000010000000000000000f39fd6e51aad88f6f4ce6ab8827279cfffb92266",
     *     reason: "some optional reason"
     *   },
     *   {
     *       memo: "Some memo",
     *       vote: "Yes"
     *   }
     * );
     */
    proposeBurnRespect(req: BurnRespectRequest, vote?: VoteWithPropRequest): Promise<ProposeRes>;
    /**
     * Create a proposal to issue a custom signal event from OREC contract.
     */
    proposeCustomSignal(req: CustomSignalRequest, vote?: VoteWithPropRequest): Promise<ProposeRes>;
    /**
     * Create a proposal to issue a tick signal. Tick signals increment the period / meeting number returned by orclient (see {@link ORClient#getPeriodNum}).
     *
     * @param req - optional metadata to submit with a tick signal
     * @param vote - vote to submit with the result. Default: `{ vote: "Yes" }`.
     * @returns resulting proposal and its status.
     *
     * @remarks
     * If `vote` parameter is not specified "Yes" vote is submitted.
     * If you want to make this proposal but don't want to vote for it, specify `{ vote: "None" }`.
     *
     * @example
     * await c.proposeTick();
     */
    proposeTick(req?: TickRequest, vote?: VoteWithPropRequest): Promise<ProposeRes>;
    /**
     * Create a proposal to an EVM call to some contract.
     *
     * @param req - specification for the EVM message to send.
     * @param vote - vote to submit with the result. Default: `{ vote: "Yes" }`.
     * @returns resulting proposal and its status.
     *
     * @remarks
     * If `vote` parameter is not specified "Yes" vote is submitted.
     * If you want to make this proposal but don't want to vote for it, specify `{ vote: "None" }`.
     */
    proposeCustomCall(req: CustomCallRequest, vote?: VoteWithPropRequest): Promise<ProposeRes>;
    /**
     * Get amount of old Respect an account has.
     */
    getOldRespectOf(account: EthAddress): Promise<bigint>;
    /**
     * Get amount of Respect an account has.
     */
    getRespectOf(account: EthAddress): Promise<bigint>;
    /**
     * Get period number (incremented using ticks see {@link ORClient#proposeTick}).
     */
    getPeriodNum(): Promise<number>;
    /**
     * Get next meeting number (which is current period number + 1).
     */
    getNextMeetingNum(): Promise<number>;
    /**
     * Get last meeting number (which is equal to current period number).
     */
    getLastMeetingNum(): Promise<number>;
    /**
     * Get metadata of specific token. The token can be fungible Respect token or Respect award token (NTT).
     *
     * @param tokenId - id of a token.
     *
     * @remarks
     * If `tokenId` is an id of a burned token, this function might return a metadata for token which is burned onchain.
     */
    getToken(tokenId: TokenId): Promise<Erc1155Mt>;
    /**
     * Get metadata of specific Respect award NTT.
     *
     * @param tokenId - id of a token.
     *
     * @remarks
     * If `tokenId` is an id of a burned token, this function might return a metadata for token which is burned onchain.
     */
    getAward(tokenId: TokenId): Promise<RespectAwardMt>;
    /**
     * Get metadata of fungible non-transferrable Respect token.
     */
    getRespectMetadata(): Promise<RespectFungibleMt>;
    /**
     * Get information on votes submitted on proposals. Votes returned are sorted from newest to oldest.
     *
     * @param spec - specification for a query
     * * `before` - newest possible date of a vote. If specified, only votes made up to this date will be returned.
     * * `limit` - maximum number of objects to return. If not specified it is up to implementation of ornode.
     * * `propFilter` - list of proposal ids. If specified, then only votes on proposals in this list are returned.
     * * `voterFilter` - list of ethereum addresses. If specified, only votes from this list of accounts are returned.
     * * `minWeight` - minimum vote weight. If specified, only votes which have equal or greater weight are returned.
     * * `voteType` - Yes / No. If specified only votes of specified type are returned.
     *
     * @example
     * await c.getVotes({
        voterFilter: [ "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", "0xcd3B766CCDd6AE721141F452C550Ca635964ce71" ],
        propFilter: [ "0xcc55ee4f4b5d61a9b90b5a5d915d8e7edede19e26b1a68be043d837654313760" ],
        limit: 10,
        minWeight: 1
      })
     */
    getVotes(spec?: GetVotesSpec): Promise<Vote[]>;
    /**
     * Get metadata of Respect award NTTs, sorted from latest to oldest.
     *
     * @param spec - specification for a query
     * * `before` - newest mint date for a token. If specified, only tokens which were created up to this date will be returned;
     * * `limit` - maximum number of tokens to return. If not specified, it's up to ornode implementation.
     * * `recipient` - recipient of the awards. If specified only awards which belong to this account are returned.
     * * `burned` - whether to return burned tokens or not. Default: false.
     *
     * @returns list of token metadata objects sorted by mint datetime from latest to oldest.
     *
     * @remarks
     * * By default this function does not return burned awards. Set `burned` in the spec to true to change this behaviour.
     *
     * @example
     * await c.getAwards() // Return latest awards unfiltered
     * await c.getAwards({ before: new Date("2024-08-30T11:42:59.000Z"), limit: 50 }) // Return up to 50 awards that happened before the specified date
     * await c.getAwards({ recipient: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266" }) // Get latest awards belonging to specified accounts
     */
    getAwards(spec?: GetAwardsSpec): Promise<RespectAwardMt[]>;
    getVoteLength(): Promise<number>;
    getVetoLength(): Promise<number>;
    getMinWeight(): Promise<number>;
    getMaxLiveYesVotes(): Promise<number>;
    private _submitProposal;
    private _submitPropToOrnode;
    private _submitPropToChain;
    private _submitPropTx;
    private _handleTxPromise;
    private _execEventFromReceipt;
}
//# sourceMappingURL=orclient.d.ts.map