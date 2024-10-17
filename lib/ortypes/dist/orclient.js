import { z } from "zod";
import { zGroupNum, zPropType, zRankings } from "./fractal.js";
import { zCustomSignalType, zOnchainProp as zNOnchainProp, zPropId, zProposedMsgBase } from "./orec.js";
import { zMeetingNum, zMintType, zTokenId } from "./respect1155.js";
import { zBytes, zEthAddress, zTxHash, zUint } from "./eth.js";
import { ErrorType } from "ethers-decode-error";
export const zProposalMetadata = z.object({
    propTitle: z.string().optional(),
    propDescription: z.string().optional()
});
export const zDecodedPropBase = z.object({
    propType: zPropType,
    metadata: zProposalMetadata
});
export const zVoteType = z.enum(["None", "Yes", "No"]);
export const zValidVoteType = z.enum(["Yes", "No"]);
export const zStage = z.enum(["Voting", "Veto", "Execution", "Expired"]);
export const zVoteStatus = z.enum(["Passing", "Failing", "Passed", "Failed"]);
export const zExecStatus = z.enum(["NotExecuted", "Executed", "ExecutionFailed"]);
export const zVoteWeight = z.number().int().gte(0);
export const zVoteRequest = z.object({
    propId: zPropId,
    vote: zVoteType,
    memo: z.string().optional()
});
export const zVote = z.object({
    proposalId: zPropId,
    voter: zEthAddress,
    vote: zVoteType,
    weight: zVoteWeight,
    memo: z.string().optional(),
    date: z.date().optional(),
    txHash: zTxHash.optional(),
});
export const zVoteWithProp = zVoteRequest
    .omit({ propId: true })
    .extend({ vote: zVoteType.default("Yes") });
export const zVoteWithPropRequest = zVoteWithProp.partial({ vote: true });
export const zBreakoutResult = z.object({
    groupNum: zGroupNum,
    rankings: zRankings
});
export const zRespectBreakoutRequest = zBreakoutResult.extend({
    meetingNum: zMeetingNum.optional(),
    metadata: zProposalMetadata.optional()
});
export const zRespectBreakout = zDecodedPropBase.merge(zBreakoutResult).extend({
    propType: z.literal(zPropType.Enum.respectBreakout),
    meetingNum: zMeetingNum,
    mintData: zBytes
});
export const zRespectAccount = zDecodedPropBase.extend({
    propType: z.literal(zPropType.Enum.respectAccount),
    meetingNum: zMeetingNum,
    mintType: zMintType,
    groupNum: zGroupNum.optional(),
    account: zEthAddress,
    value: zUint,
    title: z.string(),
    reason: z.string(),
    tokenId: zTokenId
});
// const respectAccountRequestEx = {
//   meetingNum: 1,
//   mintType: 1,
//   account: "0x0165878A594ca255338adfa4d48449f69242Eb8F",
//   value: 10n,
//   title
// }
export const zRespectAccountRequest = zRespectAccount
    .omit({ propType: true, tokenId: true })
    .partial({ mintType: true, meetingNum: true, metadata: true });
export const zBurnRespect = zDecodedPropBase.extend({
    propType: z.literal(zPropType.Enum.burnRespect),
    tokenId: zTokenId,
    reason: z.string()
});
export const zBurnRespectRequest = zBurnRespect
    .omit({ propType: true })
    .partial({ metadata: true });
export const zCustomSignal = zDecodedPropBase.extend({
    propType: z.literal(zPropType.Enum.customSignal),
    signalType: zCustomSignalType,
    data: zBytes,
    link: z.string().optional()
});
export const zCustomSignalRequest = zCustomSignal
    .omit({ propType: true })
    .partial({ metadata: true });
export const zTick = zDecodedPropBase.extend({
    propType: z.literal(zPropType.Enum.tick),
    link: z.string().optional(),
    data: zBytes
});
export const zTickRequest = zTick
    .omit({ propType: true })
    .partial({ metadata: true, data: true });
export const zCustomCall = zDecodedPropBase.extend({
    propType: z.literal(zPropType.Enum.customCall),
    cdata: zBytes,
    address: zEthAddress
});
export const zCustomCallRequest = zCustomCall.omit({ propType: true });
export const zDecodedProposal = z.union([
    zCustomCall,
    zTick,
    zCustomSignal,
    zBurnRespect,
    zRespectAccount,
    zRespectBreakout
]);
export const zExecErrorType = z.nativeEnum(ErrorType);
export const zExecError = z.object({
    type: zExecErrorType,
    data: z.string().nullable(),
    name: z.string().nullable(),
    reason: z.string().nullable(),
    args: z.array(z.any()),
    signature: z.string().nullable(),
    selector: z.string().nullable(),
});
export const zUnknownExecError = z.object({
    retVal: zBytes
});
export const zOnchainProp = zNOnchainProp.extend({
    voteStatus: zVoteStatus,
    stage: zStage,
    execError: zExecError.optional(),
});
export const zProposal = zOnchainProp.merge(zProposedMsgBase.partial()).extend({
    status: zExecStatus,
    decoded: zDecodedProposal.optional(),
    createTxHash: zTxHash.optional().describe("Hash of transaction which created this proposal"),
    executeTxHash: zTxHash.optional().describe("Hash of transaction which executed this proposal")
}).partial({
    noWeight: true,
    yesWeight: true,
});
export const zProposalMsgFull = zProposal.required({
    addr: true,
    cdata: true,
    memo: true,
});
export const zGetVotesSpec = z.object({
    before: z.date().optional(),
    limit: z.number().int().gt(0).optional(),
    propFilter: z.array(zPropId).optional(),
    voterFilter: z.array(zEthAddress).optional(),
    minWeight: zVoteWeight.optional(),
    voteType: zValidVoteType.optional()
}).strict();
export const zGetProposalsSpec = z.object({
    before: z.date().optional(),
    limit: z.number().int().gt(0).optional(),
    execStatFilter: z.array(zExecStatus).optional(),
    voteStatFilter: z.array(zVoteStatus).optional(),
    stageFilter: z.array(zStage).optional()
}).strict();
export const zGetAwardsSpec = z.object({
    before: z.date().optional(),
    limit: z.number().int().gt(0).optional(),
    recipient: zEthAddress.optional(),
    burned: z.boolean().optional()
}).strict();
export function isPropMsgFull(prop) {
    return prop.addr !== undefined && prop.cdata !== undefined && prop.memo !== undefined;
}
/**
 * Converts to ProposalMsgFull without parsing, if possible.
 * Use this instead of zProposalMsgFull.parse to avoid parsing twice
 */
export function toPropMsgFull(prop) {
    return isPropMsgFull(prop) ? prop : zProposalMsgFull.parse(prop);
}
