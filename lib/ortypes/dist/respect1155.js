import { ZeroAddress, zeroPadBytes } from "ethers";
import { isTokenIdValid } from "respect1155-sc/utils/tokenId.js";
import { Respect1155__factory } from "respect1155-sc/typechain-types/index.js";
import { zBigNumberish, zBytes32, zBytesLike, zEthAddress, zTxHash } from "./eth.js";
import { z } from "zod";
import { preprocessResultOrObj } from "./utils.js";
import { zErc1155Mt } from "./erc1155.js";
import { zTimestamp } from "./common.js";
export * from "respect1155-sc/typechain-types/common.js";
export const Factory = Respect1155__factory;
export const zGroupNum = z.coerce.number().int().gt(0);
export const zRankNum = z.number().int().lte(6).gt(0);
export const zMeetingNum = z.coerce.number().int().gt(0);
export const zPeriodNum = z.coerce.number().int().gte(0);
export const zTokenId = zBytes32.refine(val => {
    return isTokenIdValid(val);
});
export const zTokenIdNoPrefix = z.preprocess(val => `0x${val}`, zTokenId);
export const zFungibleTokenId = z.literal(zeroPadBytes("0x00", 32));
export const zFungibleTokenIdNoPrefix = z.preprocess(val => `0x${val}`, zFungibleTokenId);
export const zFungibleTokenIdNum = z.literal(0n);
export const zTokenIdNum = z.bigint().refine(val => {
    return isTokenIdValid(val);
});
export const zMintType = z.coerce.number().int().gte(0);
export const zBreakoutMintType = z.literal(0);
export const zUnspecifiedMintType = z.literal(1);
export const zTokenIdData = z.object({
    periodNumber: zPeriodNum,
    owner: zEthAddress,
    mintType: zMintType
}).refine(val => {
    return val.owner !== ZeroAddress;
});
export const zMintRequestBase = z.object({
    id: zTokenIdNum,
    value: zBigNumberish.gt(0n)
});
export const zMintRequest = preprocessResultOrObj(zMintRequestBase);
export const zMintRespectGroupArgsBase = z.object({
    mintRequests: z.array(zMintRequest),
    data: zBytesLike
});
export const zMintRespectGroupArgs = preprocessResultOrObj(zMintRespectGroupArgsBase);
// This is just a compile time check that zMintRespectGroupArgs above match latest contract
const mintRespectGroupVerify = zMintRespectGroupArgs.refine((val) => {
    const args = [
        val.mintRequests,
        val.data,
    ];
    return true;
}, "Zod type does not match type from contract interface");
export const zMintRespectArgsBase = z.object({
    request: zMintRequest,
    data: zBytesLike
});
export const zMintRespectArgs = preprocessResultOrObj(zMintRespectArgsBase);
const mintRespectVerify = zMintRespectArgs.refine((val) => {
    const args = [
        val.request,
        val.data
    ];
    return true;
});
export const zBurnRespectArgsBase = z.object({
    tokenId: zTokenIdNum,
    data: zBytesLike
});
export const zBurnRespectArgs = preprocessResultOrObj(zBurnRespectArgsBase);
const burnRespectVerify = zBurnRespectArgs.refine((val) => {
    const args = [
        val.tokenId,
        val.data
    ];
    return true;
});
/**
 * Metadata for fungible respect
 */
export const zRespectFungibleMt = zErc1155Mt.extend({
    decimals: z.literal(0)
});
export const zBurnData = z.object({
    burnTxHash: zTxHash.optional(),
    burnReason: z.string().optional(),
});
export const zRespectAwardProps = z.object({
    tokenId: zTokenId,
    recipient: zEthAddress,
    mintType: zMintType,
    mintTs: zTimestamp.optional(),
    mintTxHash: zTxHash.optional(),
    denomination: z.number().int().gte(0),
    periodNumber: zPeriodNum,
    groupNum: zGroupNum.optional(),
    level: zRankNum.optional(),
    reason: z.string().optional(),
    title: z.string().optional(),
    burn: zBurnData.nullable().optional(),
    mintProposalId: zBytes32.optional()
});
export const zRespectAwardPropsPretty = zRespectAwardProps
    .omit({ mintTs: true })
    .extend({ mintDateTime: z.string().datetime().optional() });
export const zRespectAwardMt = zErc1155Mt
    .omit({ decimals: true })
    .required({ name: true })
    .extend({
    properties: zRespectAwardProps
});
export const zRespectAwardPrettyMt = zRespectAwardMt.extend({
    properties: zRespectAwardPropsPretty
});
export const zRespectAwardMtToPretty = zRespectAwardMt.transform(val => {
    const mintTs = val.properties.mintTs;
    const pretty = {
        ...val,
        properties: {
            ...val.properties,
            mintDateTime: mintTs !== undefined ? new Date(mintTs * 1000).toISOString() : undefined
        }
    };
    return pretty;
}).pipe(zRespectAwardPrettyMt);
export * from "respect1155-sc/utils/tokenId.js";
