import { Respect1155, Respect1155Interface } from "respect1155-sc/typechain-types/contracts/Respect1155.js";
import { Respect1155__factory } from "respect1155-sc/typechain-types/index.js";
import { z } from "zod";
export { TransferBatchEvent, TransferSingleEvent } from "respect1155-sc/typechain-types/@openzeppelin/contracts/token/ERC1155/IERC1155.js";
export * from "respect1155-sc/typechain-types/common.js";
export type Contract = Respect1155;
export declare const Factory: typeof Respect1155__factory;
export type Interface = Respect1155Interface;
export declare const zGroupNum: z.ZodNumber;
export type GroupNum = z.infer<typeof zGroupNum>;
export declare const zRankNum: z.ZodNumber;
export declare const zMeetingNum: z.ZodNumber;
export type MeetingNum = z.infer<typeof zMeetingNum>;
export declare const zPeriodNum: z.ZodNumber;
export type PeriodNum = z.infer<typeof zPeriodNum>;
export declare const zTokenId: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
export type TokenId = z.infer<typeof zTokenId>;
export declare const zTokenIdNoPrefix: z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>, string, unknown>;
export declare const zFungibleTokenId: z.ZodLiteral<string>;
export declare const zFungibleTokenIdNoPrefix: z.ZodEffects<z.ZodLiteral<string>, string, unknown>;
export declare const zFungibleTokenIdNum: z.ZodLiteral<0n>;
export declare const zTokenIdNum: z.ZodEffects<z.ZodBigInt, bigint, bigint>;
export type TokenIdNum = z.infer<typeof zTokenIdNum>;
export declare const zMintType: z.ZodNumber;
export type MintType = z.infer<typeof zMintType>;
export declare const zBreakoutMintType: z.ZodLiteral<0>;
export type BreakoutMintType = z.infer<typeof zBreakoutMintType>;
export declare const zUnspecifiedMintType: z.ZodLiteral<1>;
export declare const zTokenIdData: z.ZodEffects<z.ZodObject<{
    periodNumber: z.ZodNumber;
    owner: z.ZodEffects<z.ZodString, string, string>;
    mintType: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    periodNumber: number;
    owner: string;
    mintType: number;
}, {
    periodNumber: number;
    owner: string;
    mintType: number;
}>, {
    periodNumber: number;
    owner: string;
    mintType: number;
}, {
    periodNumber: number;
    owner: string;
    mintType: number;
}>;
export type TokenIdData = z.infer<typeof zTokenIdData>;
export type CMintRespectGroupArgs = Parameters<Respect1155["mintRespectGroup"]>;
export type CMintRespectArgs = Parameters<Respect1155["mintRespect"]>;
export type CBurnRespectArgs = Parameters<Respect1155['burnRespect']>;
export declare const zMintRequestBase: z.ZodObject<{
    id: z.ZodEffects<z.ZodBigInt, bigint, bigint>;
    value: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    value: bigint;
    id: bigint;
}, {
    value: bigint;
    id: bigint;
}>;
export declare const zMintRequest: z.ZodEffects<z.ZodObject<{
    id: z.ZodEffects<z.ZodBigInt, bigint, bigint>;
    value: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    value: bigint;
    id: bigint;
}, {
    value: bigint;
    id: bigint;
}>, {
    value: bigint;
    id: bigint;
}, unknown>;
export type MintRequest = z.infer<typeof zMintRequest>;
export declare const zMintRespectGroupArgsBase: z.ZodObject<{
    mintRequests: z.ZodArray<z.ZodEffects<z.ZodObject<{
        id: z.ZodEffects<z.ZodBigInt, bigint, bigint>;
        value: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        value: bigint;
        id: bigint;
    }, {
        value: bigint;
        id: bigint;
    }>, {
        value: bigint;
        id: bigint;
    }, unknown>, "many">;
    data: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
}, "strip", z.ZodTypeAny, {
    data: string | Uint8Array;
    mintRequests: {
        value: bigint;
        id: bigint;
    }[];
}, {
    data: string | Uint8Array;
    mintRequests: unknown[];
}>;
export declare const zMintRespectGroupArgs: z.ZodEffects<z.ZodObject<{
    mintRequests: z.ZodArray<z.ZodEffects<z.ZodObject<{
        id: z.ZodEffects<z.ZodBigInt, bigint, bigint>;
        value: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        value: bigint;
        id: bigint;
    }, {
        value: bigint;
        id: bigint;
    }>, {
        value: bigint;
        id: bigint;
    }, unknown>, "many">;
    data: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
}, "strip", z.ZodTypeAny, {
    data: string | Uint8Array;
    mintRequests: {
        value: bigint;
        id: bigint;
    }[];
}, {
    data: string | Uint8Array;
    mintRequests: unknown[];
}>, {
    data: string | Uint8Array;
    mintRequests: {
        value: bigint;
        id: bigint;
    }[];
}, unknown>;
export type MintRespectGroupArgs = z.infer<typeof zMintRespectGroupArgs>;
export declare const zMintRespectArgsBase: z.ZodObject<{
    request: z.ZodEffects<z.ZodObject<{
        id: z.ZodEffects<z.ZodBigInt, bigint, bigint>;
        value: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        value: bigint;
        id: bigint;
    }, {
        value: bigint;
        id: bigint;
    }>, {
        value: bigint;
        id: bigint;
    }, unknown>;
    data: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
}, "strip", z.ZodTypeAny, {
    data: string | Uint8Array;
    request: {
        value: bigint;
        id: bigint;
    };
}, {
    data: string | Uint8Array;
    request?: unknown;
}>;
export declare const zMintRespectArgs: z.ZodEffects<z.ZodObject<{
    request: z.ZodEffects<z.ZodObject<{
        id: z.ZodEffects<z.ZodBigInt, bigint, bigint>;
        value: z.ZodBigInt;
    }, "strip", z.ZodTypeAny, {
        value: bigint;
        id: bigint;
    }, {
        value: bigint;
        id: bigint;
    }>, {
        value: bigint;
        id: bigint;
    }, unknown>;
    data: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
}, "strip", z.ZodTypeAny, {
    data: string | Uint8Array;
    request: {
        value: bigint;
        id: bigint;
    };
}, {
    data: string | Uint8Array;
    request?: unknown;
}>, {
    data: string | Uint8Array;
    request: {
        value: bigint;
        id: bigint;
    };
}, unknown>;
export type MintRespectArgs = z.infer<typeof zMintRespectArgs>;
export declare const zBurnRespectArgsBase: z.ZodObject<{
    tokenId: z.ZodEffects<z.ZodBigInt, bigint, bigint>;
    data: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
}, "strip", z.ZodTypeAny, {
    data: string | Uint8Array;
    tokenId: bigint;
}, {
    data: string | Uint8Array;
    tokenId: bigint;
}>;
export declare const zBurnRespectArgs: z.ZodEffects<z.ZodObject<{
    tokenId: z.ZodEffects<z.ZodBigInt, bigint, bigint>;
    data: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
}, "strip", z.ZodTypeAny, {
    data: string | Uint8Array;
    tokenId: bigint;
}, {
    data: string | Uint8Array;
    tokenId: bigint;
}>, {
    data: string | Uint8Array;
    tokenId: bigint;
}, unknown>;
export type BurnRespectArgs = z.infer<typeof zBurnRespectArgs>;
/**
 * Metadata for fungible respect
 */
export declare const zRespectFungibleMt: z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodOptional<z.ZodString>;
    decimals: z.ZodOptional<z.ZodNumber>;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    properties: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, {
    decimals: z.ZodLiteral<0>;
}>, "strip", z.ZodTypeAny, {
    decimals: 0;
    name?: string | undefined;
    description?: string | undefined;
    image?: string | undefined;
    properties?: {} | undefined;
}, {
    decimals: 0;
    name?: string | undefined;
    description?: string | undefined;
    image?: string | undefined;
    properties?: {} | undefined;
}>;
/**
 * Metadata for fungible respect
 */
export type RespectFungibleMt = z.infer<typeof zRespectFungibleMt>;
export declare const zBurnData: z.ZodObject<{
    burnTxHash: z.ZodOptional<z.ZodString>;
    burnReason: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    burnTxHash?: string | undefined;
    burnReason?: string | undefined;
}, {
    burnTxHash?: string | undefined;
    burnReason?: string | undefined;
}>;
export type BurnData = z.infer<typeof zBurnData>;
export declare const zRespectAwardProps: z.ZodObject<{
    tokenId: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    recipient: z.ZodEffects<z.ZodString, string, string>;
    mintType: z.ZodNumber;
    mintTs: z.ZodOptional<z.ZodNumber>;
    mintTxHash: z.ZodOptional<z.ZodString>;
    denomination: z.ZodNumber;
    periodNumber: z.ZodNumber;
    groupNum: z.ZodOptional<z.ZodNumber>;
    level: z.ZodOptional<z.ZodNumber>;
    reason: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    burn: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        burnTxHash: z.ZodOptional<z.ZodString>;
        burnReason: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        burnTxHash?: string | undefined;
        burnReason?: string | undefined;
    }, {
        burnTxHash?: string | undefined;
        burnReason?: string | undefined;
    }>>>;
    mintProposalId: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
}, "strip", z.ZodTypeAny, {
    periodNumber: number;
    mintType: number;
    tokenId: string;
    recipient: string;
    denomination: number;
    mintTs?: number | undefined;
    mintTxHash?: string | undefined;
    groupNum?: number | undefined;
    level?: number | undefined;
    reason?: string | undefined;
    title?: string | undefined;
    burn?: {
        burnTxHash?: string | undefined;
        burnReason?: string | undefined;
    } | null | undefined;
    mintProposalId?: string | undefined;
}, {
    periodNumber: number;
    mintType: number;
    tokenId: string;
    recipient: string;
    denomination: number;
    mintTs?: number | undefined;
    mintTxHash?: string | undefined;
    groupNum?: number | undefined;
    level?: number | undefined;
    reason?: string | undefined;
    title?: string | undefined;
    burn?: {
        burnTxHash?: string | undefined;
        burnReason?: string | undefined;
    } | null | undefined;
    mintProposalId?: string | undefined;
}>;
export declare const zRespectAwardPropsPretty: z.ZodObject<z.objectUtil.extendShape<Omit<{
    tokenId: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    recipient: z.ZodEffects<z.ZodString, string, string>;
    mintType: z.ZodNumber;
    mintTs: z.ZodOptional<z.ZodNumber>;
    mintTxHash: z.ZodOptional<z.ZodString>;
    denomination: z.ZodNumber;
    periodNumber: z.ZodNumber;
    groupNum: z.ZodOptional<z.ZodNumber>;
    level: z.ZodOptional<z.ZodNumber>;
    reason: z.ZodOptional<z.ZodString>;
    title: z.ZodOptional<z.ZodString>;
    burn: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        burnTxHash: z.ZodOptional<z.ZodString>;
        burnReason: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        burnTxHash?: string | undefined;
        burnReason?: string | undefined;
    }, {
        burnTxHash?: string | undefined;
        burnReason?: string | undefined;
    }>>>;
    mintProposalId: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
}, "mintTs">, {
    mintDateTime: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    periodNumber: number;
    mintType: number;
    tokenId: string;
    recipient: string;
    denomination: number;
    mintTxHash?: string | undefined;
    groupNum?: number | undefined;
    level?: number | undefined;
    reason?: string | undefined;
    title?: string | undefined;
    burn?: {
        burnTxHash?: string | undefined;
        burnReason?: string | undefined;
    } | null | undefined;
    mintProposalId?: string | undefined;
    mintDateTime?: string | undefined;
}, {
    periodNumber: number;
    mintType: number;
    tokenId: string;
    recipient: string;
    denomination: number;
    mintTxHash?: string | undefined;
    groupNum?: number | undefined;
    level?: number | undefined;
    reason?: string | undefined;
    title?: string | undefined;
    burn?: {
        burnTxHash?: string | undefined;
        burnReason?: string | undefined;
    } | null | undefined;
    mintProposalId?: string | undefined;
    mintDateTime?: string | undefined;
}>;
export declare const zRespectAwardMt: z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    properties: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, {
    properties: z.ZodObject<{
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
        recipient: z.ZodEffects<z.ZodString, string, string>;
        mintType: z.ZodNumber;
        mintTs: z.ZodOptional<z.ZodNumber>;
        mintTxHash: z.ZodOptional<z.ZodString>;
        denomination: z.ZodNumber;
        periodNumber: z.ZodNumber;
        groupNum: z.ZodOptional<z.ZodNumber>;
        level: z.ZodOptional<z.ZodNumber>;
        reason: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        burn: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            burnTxHash: z.ZodOptional<z.ZodString>;
            burnReason: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        }, {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        }>>>;
        mintProposalId: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        periodNumber: number;
        mintType: number;
        tokenId: string;
        recipient: string;
        denomination: number;
        mintTs?: number | undefined;
        mintTxHash?: string | undefined;
        groupNum?: number | undefined;
        level?: number | undefined;
        reason?: string | undefined;
        title?: string | undefined;
        burn?: {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        } | null | undefined;
        mintProposalId?: string | undefined;
    }, {
        periodNumber: number;
        mintType: number;
        tokenId: string;
        recipient: string;
        denomination: number;
        mintTs?: number | undefined;
        mintTxHash?: string | undefined;
        groupNum?: number | undefined;
        level?: number | undefined;
        reason?: string | undefined;
        title?: string | undefined;
        burn?: {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        } | null | undefined;
        mintProposalId?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    name: string;
    properties: {
        periodNumber: number;
        mintType: number;
        tokenId: string;
        recipient: string;
        denomination: number;
        mintTs?: number | undefined;
        mintTxHash?: string | undefined;
        groupNum?: number | undefined;
        level?: number | undefined;
        reason?: string | undefined;
        title?: string | undefined;
        burn?: {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        } | null | undefined;
        mintProposalId?: string | undefined;
    };
    description?: string | undefined;
    image?: string | undefined;
}, {
    name: string;
    properties: {
        periodNumber: number;
        mintType: number;
        tokenId: string;
        recipient: string;
        denomination: number;
        mintTs?: number | undefined;
        mintTxHash?: string | undefined;
        groupNum?: number | undefined;
        level?: number | undefined;
        reason?: string | undefined;
        title?: string | undefined;
        burn?: {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        } | null | undefined;
        mintProposalId?: string | undefined;
    };
    description?: string | undefined;
    image?: string | undefined;
}>;
export type RespectAwardMt = z.infer<typeof zRespectAwardMt>;
export declare const zRespectAwardPrettyMt: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    properties: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, {
    properties: z.ZodObject<{
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
        recipient: z.ZodEffects<z.ZodString, string, string>;
        mintType: z.ZodNumber;
        mintTs: z.ZodOptional<z.ZodNumber>;
        mintTxHash: z.ZodOptional<z.ZodString>;
        denomination: z.ZodNumber;
        periodNumber: z.ZodNumber;
        groupNum: z.ZodOptional<z.ZodNumber>;
        level: z.ZodOptional<z.ZodNumber>;
        reason: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        burn: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            burnTxHash: z.ZodOptional<z.ZodString>;
            burnReason: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        }, {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        }>>>;
        mintProposalId: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        periodNumber: number;
        mintType: number;
        tokenId: string;
        recipient: string;
        denomination: number;
        mintTs?: number | undefined;
        mintTxHash?: string | undefined;
        groupNum?: number | undefined;
        level?: number | undefined;
        reason?: string | undefined;
        title?: string | undefined;
        burn?: {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        } | null | undefined;
        mintProposalId?: string | undefined;
    }, {
        periodNumber: number;
        mintType: number;
        tokenId: string;
        recipient: string;
        denomination: number;
        mintTs?: number | undefined;
        mintTxHash?: string | undefined;
        groupNum?: number | undefined;
        level?: number | undefined;
        reason?: string | undefined;
        title?: string | undefined;
        burn?: {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        } | null | undefined;
        mintProposalId?: string | undefined;
    }>;
}>, {
    properties: z.ZodObject<z.objectUtil.extendShape<Omit<{
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
        recipient: z.ZodEffects<z.ZodString, string, string>;
        mintType: z.ZodNumber;
        mintTs: z.ZodOptional<z.ZodNumber>;
        mintTxHash: z.ZodOptional<z.ZodString>;
        denomination: z.ZodNumber;
        periodNumber: z.ZodNumber;
        groupNum: z.ZodOptional<z.ZodNumber>;
        level: z.ZodOptional<z.ZodNumber>;
        reason: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        burn: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            burnTxHash: z.ZodOptional<z.ZodString>;
            burnReason: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        }, {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        }>>>;
        mintProposalId: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "mintTs">, {
        mintDateTime: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        periodNumber: number;
        mintType: number;
        tokenId: string;
        recipient: string;
        denomination: number;
        mintTxHash?: string | undefined;
        groupNum?: number | undefined;
        level?: number | undefined;
        reason?: string | undefined;
        title?: string | undefined;
        burn?: {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        } | null | undefined;
        mintProposalId?: string | undefined;
        mintDateTime?: string | undefined;
    }, {
        periodNumber: number;
        mintType: number;
        tokenId: string;
        recipient: string;
        denomination: number;
        mintTxHash?: string | undefined;
        groupNum?: number | undefined;
        level?: number | undefined;
        reason?: string | undefined;
        title?: string | undefined;
        burn?: {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        } | null | undefined;
        mintProposalId?: string | undefined;
        mintDateTime?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    name: string;
    properties: {
        periodNumber: number;
        mintType: number;
        tokenId: string;
        recipient: string;
        denomination: number;
        mintTxHash?: string | undefined;
        groupNum?: number | undefined;
        level?: number | undefined;
        reason?: string | undefined;
        title?: string | undefined;
        burn?: {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        } | null | undefined;
        mintProposalId?: string | undefined;
        mintDateTime?: string | undefined;
    };
    description?: string | undefined;
    image?: string | undefined;
}, {
    name: string;
    properties: {
        periodNumber: number;
        mintType: number;
        tokenId: string;
        recipient: string;
        denomination: number;
        mintTxHash?: string | undefined;
        groupNum?: number | undefined;
        level?: number | undefined;
        reason?: string | undefined;
        title?: string | undefined;
        burn?: {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        } | null | undefined;
        mintProposalId?: string | undefined;
        mintDateTime?: string | undefined;
    };
    description?: string | undefined;
    image?: string | undefined;
}>;
export type RespectAwardPrettyMt = z.infer<typeof zRespectAwardPrettyMt>;
export declare const zRespectAwardMtToPretty: z.ZodPipeline<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    properties: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, {
    properties: z.ZodObject<{
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
        recipient: z.ZodEffects<z.ZodString, string, string>;
        mintType: z.ZodNumber;
        mintTs: z.ZodOptional<z.ZodNumber>;
        mintTxHash: z.ZodOptional<z.ZodString>;
        denomination: z.ZodNumber;
        periodNumber: z.ZodNumber;
        groupNum: z.ZodOptional<z.ZodNumber>;
        level: z.ZodOptional<z.ZodNumber>;
        reason: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        burn: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            burnTxHash: z.ZodOptional<z.ZodString>;
            burnReason: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        }, {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        }>>>;
        mintProposalId: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        periodNumber: number;
        mintType: number;
        tokenId: string;
        recipient: string;
        denomination: number;
        mintTs?: number | undefined;
        mintTxHash?: string | undefined;
        groupNum?: number | undefined;
        level?: number | undefined;
        reason?: string | undefined;
        title?: string | undefined;
        burn?: {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        } | null | undefined;
        mintProposalId?: string | undefined;
    }, {
        periodNumber: number;
        mintType: number;
        tokenId: string;
        recipient: string;
        denomination: number;
        mintTs?: number | undefined;
        mintTxHash?: string | undefined;
        groupNum?: number | undefined;
        level?: number | undefined;
        reason?: string | undefined;
        title?: string | undefined;
        burn?: {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        } | null | undefined;
        mintProposalId?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    name: string;
    properties: {
        periodNumber: number;
        mintType: number;
        tokenId: string;
        recipient: string;
        denomination: number;
        mintTs?: number | undefined;
        mintTxHash?: string | undefined;
        groupNum?: number | undefined;
        level?: number | undefined;
        reason?: string | undefined;
        title?: string | undefined;
        burn?: {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        } | null | undefined;
        mintProposalId?: string | undefined;
    };
    description?: string | undefined;
    image?: string | undefined;
}, {
    name: string;
    properties: {
        periodNumber: number;
        mintType: number;
        tokenId: string;
        recipient: string;
        denomination: number;
        mintTs?: number | undefined;
        mintTxHash?: string | undefined;
        groupNum?: number | undefined;
        level?: number | undefined;
        reason?: string | undefined;
        title?: string | undefined;
        burn?: {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        } | null | undefined;
        mintProposalId?: string | undefined;
    };
    description?: string | undefined;
    image?: string | undefined;
}>, {
    name: string;
    properties: {
        periodNumber: number;
        mintType: number;
        tokenId: string;
        recipient: string;
        denomination: number;
        mintTxHash?: string | undefined;
        groupNum?: number | undefined;
        level?: number | undefined;
        reason?: string | undefined;
        title?: string | undefined;
        burn?: {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        } | null | undefined;
        mintProposalId?: string | undefined;
        mintDateTime?: string | undefined;
    };
    description?: string | undefined;
    image?: string | undefined;
}, {
    name: string;
    properties: {
        periodNumber: number;
        mintType: number;
        tokenId: string;
        recipient: string;
        denomination: number;
        mintTs?: number | undefined;
        mintTxHash?: string | undefined;
        groupNum?: number | undefined;
        level?: number | undefined;
        reason?: string | undefined;
        title?: string | undefined;
        burn?: {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        } | null | undefined;
        mintProposalId?: string | undefined;
    };
    description?: string | undefined;
    image?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    properties: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, {
    properties: z.ZodObject<{
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
        recipient: z.ZodEffects<z.ZodString, string, string>;
        mintType: z.ZodNumber;
        mintTs: z.ZodOptional<z.ZodNumber>;
        mintTxHash: z.ZodOptional<z.ZodString>;
        denomination: z.ZodNumber;
        periodNumber: z.ZodNumber;
        groupNum: z.ZodOptional<z.ZodNumber>;
        level: z.ZodOptional<z.ZodNumber>;
        reason: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        burn: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            burnTxHash: z.ZodOptional<z.ZodString>;
            burnReason: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        }, {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        }>>>;
        mintProposalId: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        periodNumber: number;
        mintType: number;
        tokenId: string;
        recipient: string;
        denomination: number;
        mintTs?: number | undefined;
        mintTxHash?: string | undefined;
        groupNum?: number | undefined;
        level?: number | undefined;
        reason?: string | undefined;
        title?: string | undefined;
        burn?: {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        } | null | undefined;
        mintProposalId?: string | undefined;
    }, {
        periodNumber: number;
        mintType: number;
        tokenId: string;
        recipient: string;
        denomination: number;
        mintTs?: number | undefined;
        mintTxHash?: string | undefined;
        groupNum?: number | undefined;
        level?: number | undefined;
        reason?: string | undefined;
        title?: string | undefined;
        burn?: {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        } | null | undefined;
        mintProposalId?: string | undefined;
    }>;
}>, {
    properties: z.ZodObject<z.objectUtil.extendShape<Omit<{
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
        recipient: z.ZodEffects<z.ZodString, string, string>;
        mintType: z.ZodNumber;
        mintTs: z.ZodOptional<z.ZodNumber>;
        mintTxHash: z.ZodOptional<z.ZodString>;
        denomination: z.ZodNumber;
        periodNumber: z.ZodNumber;
        groupNum: z.ZodOptional<z.ZodNumber>;
        level: z.ZodOptional<z.ZodNumber>;
        reason: z.ZodOptional<z.ZodString>;
        title: z.ZodOptional<z.ZodString>;
        burn: z.ZodOptional<z.ZodNullable<z.ZodObject<{
            burnTxHash: z.ZodOptional<z.ZodString>;
            burnReason: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        }, {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        }>>>;
        mintProposalId: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "mintTs">, {
        mintDateTime: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        periodNumber: number;
        mintType: number;
        tokenId: string;
        recipient: string;
        denomination: number;
        mintTxHash?: string | undefined;
        groupNum?: number | undefined;
        level?: number | undefined;
        reason?: string | undefined;
        title?: string | undefined;
        burn?: {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        } | null | undefined;
        mintProposalId?: string | undefined;
        mintDateTime?: string | undefined;
    }, {
        periodNumber: number;
        mintType: number;
        tokenId: string;
        recipient: string;
        denomination: number;
        mintTxHash?: string | undefined;
        groupNum?: number | undefined;
        level?: number | undefined;
        reason?: string | undefined;
        title?: string | undefined;
        burn?: {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        } | null | undefined;
        mintProposalId?: string | undefined;
        mintDateTime?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    name: string;
    properties: {
        periodNumber: number;
        mintType: number;
        tokenId: string;
        recipient: string;
        denomination: number;
        mintTxHash?: string | undefined;
        groupNum?: number | undefined;
        level?: number | undefined;
        reason?: string | undefined;
        title?: string | undefined;
        burn?: {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        } | null | undefined;
        mintProposalId?: string | undefined;
        mintDateTime?: string | undefined;
    };
    description?: string | undefined;
    image?: string | undefined;
}, {
    name: string;
    properties: {
        periodNumber: number;
        mintType: number;
        tokenId: string;
        recipient: string;
        denomination: number;
        mintTxHash?: string | undefined;
        groupNum?: number | undefined;
        level?: number | undefined;
        reason?: string | undefined;
        title?: string | undefined;
        burn?: {
            burnTxHash?: string | undefined;
            burnReason?: string | undefined;
        } | null | undefined;
        mintProposalId?: string | undefined;
        mintDateTime?: string | undefined;
    };
    description?: string | undefined;
    image?: string | undefined;
}>>;
export * from "respect1155-sc/utils/tokenId.js";
//# sourceMappingURL=respect1155.d.ts.map