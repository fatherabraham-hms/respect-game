import { z } from "zod";
import { solidityPackedKeccak256 } from "ethers";
import { zExecStatusStr, zPropId, zProposedMsg, zValidVoteTypeStr, zVoteTypeStr } from "./orec.js";
import { zGroupNum, zPropType } from "./fractal.js";
import { propId } from "orec/utils";
import { zBytesLikeToBytes, zEthAddress, zTxHash } from "./eth.js";
import { zTimestamp } from "./common.js";
export const zPropContent = zProposedMsg;
export const zPropAttachmentBase = z.object({
    propType: zPropType,
    propTitle: z.string().optional(),
    propDescription: z.string().optional(),
    salt: z.string().optional(),
});
export const zRespectBreakoutAttachment = zPropAttachmentBase.extend({
    propType: z.literal(zPropType.Enum.respectBreakout),
    groupNum: zGroupNum
});
export const zRespectAccountAttachment = zPropAttachmentBase.extend({
    propType: z.literal(zPropType.Enum.respectAccount),
    mintReason: z.string(),
    mintTitle: z.string(),
    groupNum: zGroupNum.optional(),
    version: z.number().int().gt(0).optional()
});
export const zBurnRespectAttachment = zPropAttachmentBase.extend({
    propType: z.literal(zPropType.Enum.burnRespect),
    burnReason: z.string()
});
export const zCustomSignalAttachment = zPropAttachmentBase.extend({
    propType: z.literal(zPropType.Enum.customSignal),
    link: z.string().optional()
});
export const zTickAttachment = zPropAttachmentBase.extend({
    propType: z.literal(zPropType.Enum.tick),
    link: z.string().optional()
});
export const zCustomCallAttachment = zPropAttachmentBase.extend({
    propType: z.literal(zPropType.Enum.customCall)
});
export const zPropAttachment = z.union([
    zRespectBreakoutAttachment,
    zRespectAccountAttachment,
    zBurnRespectAttachment,
    zCustomSignalAttachment,
    zTickAttachment,
    zCustomCallAttachment
]);
export const zVoteWeight = z.coerce.number().int().gte(0);
export const zVote = z.object({
    ts: zTimestamp.optional(),
    txHash: zTxHash.optional(),
    proposalId: zPropId,
    voter: zEthAddress,
    weight: zVoteWeight,
    vote: zVoteTypeStr,
    memo: z.string().optional()
});
function propIdMatchesContent(prop) {
    const pid = propId(prop.content);
    return prop.id === pid;
}
const propIdErr = { message: "proposal content does not match its id" };
function attachPropIdMatchesContent(zType) {
    return zType.refine(propIdMatchesContent, { message: "proposal content does not match its id" });
}
function propMemoMatchesAttachment(prop) {
    const memo = zBytesLikeToBytes.parse(prop.content.memo);
    return memo === attachmentId(prop.attachment);
}
const memoErr = { message: "proposal memo does not match its attachment" };
function attachPropMemoMatchesAttachment(zType) {
    return zType.refine(propMemoMatchesAttachment, memoErr);
}
function attachPropRefinements(zType) {
    return attachPropMemoMatchesAttachment(attachPropIdMatchesContent(zType));
}
export const zProposalBase = z.object({
    id: zPropId,
    content: zPropContent.optional(),
    attachment: zPropAttachment.optional(),
    createTs: zTimestamp.optional().describe("Unix timestamp. Should match onchain createTime of proposal"),
    createTxHash: zTxHash.optional().describe("Hash of transaction which created this proposal"),
    executeTxHash: zTxHash.optional().describe("Hash of transaction which executed this proposal"),
    status: zExecStatusStr.optional()
});
export const zStoredProposalBase = zProposalBase.required({
    createTs: true,
    status: true
});
export const zProposalBaseFull = zProposalBase.required({
    content: true,
    attachment: true,
});
// NOTE: this currently does not check validity of createTs, createTxHash, executeTxHash
export const zProposalBaseFullValid = attachPropRefinements(zProposalBaseFull);
export const zRespectBreakout = zProposalBaseFull.extend({
    attachment: zRespectBreakoutAttachment
});
export const zRespectBreakoutValid = zRespectBreakout
    .refine(propIdMatchesContent, propIdErr).refine(propMemoMatchesAttachment, memoErr)
    .brand();
export const zRespectAccount = zProposalBaseFull.extend({
    attachment: zRespectAccountAttachment
});
export const zRespectAccountValid = zRespectAccount
    .refine(propIdMatchesContent, propIdErr).refine(propMemoMatchesAttachment, memoErr)
    .brand();
export const zBurnRespect = zProposalBaseFull.extend({
    attachment: zBurnRespectAttachment
});
export const zBurnRespectValid = zBurnRespect
    .refine(propIdMatchesContent, propIdErr).refine(propMemoMatchesAttachment, memoErr)
    .brand();
export const zCustomSignal = zProposalBaseFull.extend({
    attachment: zCustomSignalAttachment
});
export const zCustomSignalValid = zCustomSignal
    .refine(propIdMatchesContent, propIdErr).refine(propMemoMatchesAttachment, memoErr)
    .brand();
export const zCustomCall = zProposalBaseFull.extend({
    attachment: zCustomCallAttachment
});
export const zCustomCallValid = zCustomCall
    .refine(propIdMatchesContent, propIdErr).refine(propMemoMatchesAttachment, memoErr)
    .brand();
export const zTick = zProposalBaseFull.extend({
    attachment: zTickAttachment
});
export const zTickValid = zTick
    .refine(propIdMatchesContent, propIdErr).refine(propMemoMatchesAttachment, memoErr)
    .brand();
export const zProposal = z.union([
    zProposalBase,
    zProposalBaseFull,
    zRespectBreakout,
    zRespectAccount,
    zBurnRespect,
    zCustomSignal,
    zTick,
    zCustomCall
]);
export const zStoredProposal = z.union([
    zStoredProposalBase,
    zRespectBreakout.required({ status: true, createTs: true }),
    zRespectAccount.required({ status: true, createTs: true }),
    zBurnRespect.required({ status: true, createTs: true }),
    zCustomSignal.required({ status: true, createTs: true }),
    zTick.required({ status: true, createTs: true }),
    zCustomCall.required({ status: true, createTs: true })
]);
export const zProposalFull = z.union([
    zProposalBaseFull,
    zRespectBreakout,
    zRespectAccount,
    zBurnRespect,
    zCustomSignal,
    zTick,
    zCustomCall
]);
export const zProposalValid = attachPropRefinements(zProposalFull).brand();
export const zORNodePropStatus = z.enum(["ProposalExists", "ProposalStored"]);
export const zErrorType = z.enum([
    "ProposalNotFound",
    "ProposalNotCreated",
    "ProposalInvalid",
    "TokenNotFound"
]);
export const zGetVotesSpec = z.object({
    before: zTimestamp.optional(),
    limit: z.number().int().gt(0).optional(),
    propFilter: z.array(zPropId).optional(),
    voterFilter: z.array(zEthAddress).optional(),
    minWeight: zVoteWeight.optional(),
    voteType: zValidVoteTypeStr.optional()
}).strict();
export const zGetProposalsSpec = z.object({
    before: zTimestamp.optional(),
    limit: z.number().int().gt(0).optional(),
    execStatusFilter: z.array(zExecStatusStr).optional()
}).strict();
export const zGetAwardsSpec = z.object({
    before: zTimestamp.optional(),
    limit: z.number().int().gt(0).optional(),
    recipient: zEthAddress.optional(),
    burned: z.boolean().optional()
}).strict();
export function idOfRespectBreakoutAttach(attachment) {
    const a = {
        ...attachment,
        propTitle: attachment.propTitle ?? "",
        propDescription: attachment.propDescription ?? "",
        salt: attachment.salt ?? ""
    };
    return solidityPackedKeccak256(["string", "string", "string", "string", "uint"], [a.propType, a.propTitle, a.propDescription, a.salt, a.groupNum]);
}
export function idOfRespectAccountAttachV1(attachment) {
    const a = {
        ...attachment,
        propTitle: attachment.propTitle ?? "",
        propDescription: attachment.propDescription ?? "",
        salt: attachment.salt ?? "",
        groupNum: attachment.groupNum ?? 0
    };
    return solidityPackedKeccak256(["string", "string", "string", "string", "string", "string", "uint"], [a.propType, a.propTitle, a.propDescription, a.salt, a.mintReason, a.mintTitle, a.groupNum]);
}
export function idOfRespectAccountAttachV0(attachment) {
    const a = {
        ...attachment,
        propTitle: attachment.propTitle ?? "",
        propDescription: attachment.propDescription ?? "",
        salt: attachment.salt ?? ""
    };
    return solidityPackedKeccak256(["string", "string", "string", "string", "string", "string"], [a.propType, a.propTitle, a.propDescription, a.salt, a.mintReason, a.mintTitle]);
}
export function idOfBurnRespectAttach(attachment) {
    const a = {
        ...attachment,
        propTitle: attachment.propTitle ?? "",
        propDescription: attachment.propDescription ?? "",
        salt: attachment.salt ?? ""
    };
    return solidityPackedKeccak256(["string", "string", "string", "string", "string"], [a.propType, a.propTitle, a.propDescription, a.salt, a.burnReason]);
}
export function idOfCustomSignalAttach(attachment) {
    const a = {
        ...attachment,
        link: attachment.link ?? "",
        propTitle: attachment.propTitle ?? "",
        propDescription: attachment.propDescription ?? "",
        salt: attachment.salt ?? ""
    };
    return solidityPackedKeccak256(["string", "string", "string", "string", "string"], [a.propType, a.propTitle, a.propDescription, a.salt, a.link]);
}
export function idOfCustomCallAttach(attachment) {
    const a = {
        ...attachment,
        propTitle: attachment.propTitle ?? "",
        propDescription: attachment.propDescription ?? "",
        salt: attachment.salt ?? ""
    };
    return solidityPackedKeccak256(["string", "string", "string", "string"], [a.propType, a.propTitle, a.propDescription, a.salt]);
}
export function attachmentId(attachment) {
    switch (attachment.propType) {
        case 'respectBreakout':
            return idOfRespectBreakoutAttach(attachment);
        case 'respectAccount': {
            if (attachment.version === undefined) {
                return idOfRespectAccountAttachV0(attachment);
            }
            else if (attachment.version === 2) {
                return idOfRespectAccountAttachV1(attachment);
            }
            else {
                throw new Error("Invalid version value for RespectAccount attachment");
            }
        }
        case 'burnRespect':
            return idOfBurnRespectAttach(attachment);
        case 'customSignal':
            return idOfCustomSignalAttach(attachment);
        case 'tick':
            return idOfCustomSignalAttach(attachment);
        case 'customCall':
            return idOfCustomCallAttach(attachment);
        default:
            const exhaustiveCheck = attachment;
            throw new Error('exhaustive check failed');
    }
}
export function propContentEq(c1, c2) {
    if (c1.addr !== c2.addr) {
        return false;
    }
    const cd1 = zBytesLikeToBytes.parse(c1.cdata);
    const cd2 = zBytesLikeToBytes.parse(c2.cdata);
    if (cd1 !== cd2) {
        return false;
    }
    const m1 = zBytesLikeToBytes.parse(c1.memo);
    const m2 = zBytesLikeToBytes.parse(c2.memo);
    return m1 === m2;
}
export function propValidlEq(p1, p2) {
    // We know that proposals are valid. That means that memos contain hashes of attachments.
    // So if p1.content === p2.content, then attachments are equal too.
    return propContentEq(p1.content, p2.content);
}
