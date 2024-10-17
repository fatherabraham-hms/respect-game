import { z } from "zod";
export declare const zPropContent: z.ZodEffects<z.ZodObject<{
    addr: z.ZodEffects<z.ZodString, string, string>;
    cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
}, "strip", z.ZodTypeAny, {
    addr: string;
    cdata: string | Uint8Array;
    memo: string | Uint8Array;
}, {
    addr: string;
    cdata: string | Uint8Array;
    memo: string | Uint8Array;
}>, {
    addr: string;
    cdata: string | Uint8Array;
    memo: string | Uint8Array;
}, unknown>;
export type PropContent = z.infer<typeof zPropContent>;
export declare const zPropAttachmentBase: z.ZodObject<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    propTitle: z.ZodOptional<z.ZodString>;
    propDescription: z.ZodOptional<z.ZodString>;
    salt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    propType: "burnRespect" | "respectBreakout" | "respectAccount" | "tick" | "customSignal" | "customCall";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
}, {
    propType: "burnRespect" | "respectBreakout" | "respectAccount" | "tick" | "customSignal" | "customCall";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
}>;
export type PropAttachmentBase = z.infer<typeof zPropAttachmentBase>;
export declare const zRespectBreakoutAttachment: z.ZodObject<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    propTitle: z.ZodOptional<z.ZodString>;
    propDescription: z.ZodOptional<z.ZodString>;
    salt: z.ZodOptional<z.ZodString>;
}, {
    propType: z.ZodLiteral<"respectBreakout">;
    groupNum: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    groupNum: number;
    propType: "respectBreakout";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
}, {
    groupNum: number;
    propType: "respectBreakout";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
}>;
export type RespectBreakoutAttachment = z.infer<typeof zRespectBreakoutAttachment>;
export declare const zRespectAccountAttachment: z.ZodObject<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    propTitle: z.ZodOptional<z.ZodString>;
    propDescription: z.ZodOptional<z.ZodString>;
    salt: z.ZodOptional<z.ZodString>;
}, {
    propType: z.ZodLiteral<"respectAccount">;
    mintReason: z.ZodString;
    mintTitle: z.ZodString;
    groupNum: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    propType: "respectAccount";
    mintReason: string;
    mintTitle: string;
    groupNum?: number | undefined;
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
    version?: number | undefined;
}, {
    propType: "respectAccount";
    mintReason: string;
    mintTitle: string;
    groupNum?: number | undefined;
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
    version?: number | undefined;
}>;
export type RespectAccountAttachment = z.infer<typeof zRespectAccountAttachment>;
export declare const zBurnRespectAttachment: z.ZodObject<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    propTitle: z.ZodOptional<z.ZodString>;
    propDescription: z.ZodOptional<z.ZodString>;
    salt: z.ZodOptional<z.ZodString>;
}, {
    propType: z.ZodLiteral<"burnRespect">;
    burnReason: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    burnReason: string;
    propType: "burnRespect";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
}, {
    burnReason: string;
    propType: "burnRespect";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
}>;
export type BurnRespectAttachment = z.infer<typeof zBurnRespectAttachment>;
export declare const zCustomSignalAttachment: z.ZodObject<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    propTitle: z.ZodOptional<z.ZodString>;
    propDescription: z.ZodOptional<z.ZodString>;
    salt: z.ZodOptional<z.ZodString>;
}, {
    propType: z.ZodLiteral<"customSignal">;
    link: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    propType: "customSignal";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
    link?: string | undefined;
}, {
    propType: "customSignal";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
    link?: string | undefined;
}>;
export type CustomSignalAttachment = z.infer<typeof zCustomSignalAttachment>;
export declare const zTickAttachment: z.ZodObject<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    propTitle: z.ZodOptional<z.ZodString>;
    propDescription: z.ZodOptional<z.ZodString>;
    salt: z.ZodOptional<z.ZodString>;
}, {
    propType: z.ZodLiteral<"tick">;
    link: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    propType: "tick";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
    link?: string | undefined;
}, {
    propType: "tick";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
    link?: string | undefined;
}>;
export type TickAttachment = z.infer<typeof zTickAttachment>;
export declare const zCustomCallAttachment: z.ZodObject<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    propTitle: z.ZodOptional<z.ZodString>;
    propDescription: z.ZodOptional<z.ZodString>;
    salt: z.ZodOptional<z.ZodString>;
}, {
    propType: z.ZodLiteral<"customCall">;
}>, "strip", z.ZodTypeAny, {
    propType: "customCall";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
}, {
    propType: "customCall";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
}>;
export type CustomCallAttachment = z.infer<typeof zCustomCallAttachment>;
export declare const zPropAttachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    propTitle: z.ZodOptional<z.ZodString>;
    propDescription: z.ZodOptional<z.ZodString>;
    salt: z.ZodOptional<z.ZodString>;
}, {
    propType: z.ZodLiteral<"respectBreakout">;
    groupNum: z.ZodNumber;
}>, "strip", z.ZodTypeAny, {
    groupNum: number;
    propType: "respectBreakout";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
}, {
    groupNum: number;
    propType: "respectBreakout";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    propTitle: z.ZodOptional<z.ZodString>;
    propDescription: z.ZodOptional<z.ZodString>;
    salt: z.ZodOptional<z.ZodString>;
}, {
    propType: z.ZodLiteral<"respectAccount">;
    mintReason: z.ZodString;
    mintTitle: z.ZodString;
    groupNum: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    propType: "respectAccount";
    mintReason: string;
    mintTitle: string;
    groupNum?: number | undefined;
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
    version?: number | undefined;
}, {
    propType: "respectAccount";
    mintReason: string;
    mintTitle: string;
    groupNum?: number | undefined;
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
    version?: number | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    propTitle: z.ZodOptional<z.ZodString>;
    propDescription: z.ZodOptional<z.ZodString>;
    salt: z.ZodOptional<z.ZodString>;
}, {
    propType: z.ZodLiteral<"burnRespect">;
    burnReason: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    burnReason: string;
    propType: "burnRespect";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
}, {
    burnReason: string;
    propType: "burnRespect";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    propTitle: z.ZodOptional<z.ZodString>;
    propDescription: z.ZodOptional<z.ZodString>;
    salt: z.ZodOptional<z.ZodString>;
}, {
    propType: z.ZodLiteral<"customSignal">;
    link: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    propType: "customSignal";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
    link?: string | undefined;
}, {
    propType: "customSignal";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
    link?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    propTitle: z.ZodOptional<z.ZodString>;
    propDescription: z.ZodOptional<z.ZodString>;
    salt: z.ZodOptional<z.ZodString>;
}, {
    propType: z.ZodLiteral<"tick">;
    link: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    propType: "tick";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
    link?: string | undefined;
}, {
    propType: "tick";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
    link?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    propTitle: z.ZodOptional<z.ZodString>;
    propDescription: z.ZodOptional<z.ZodString>;
    salt: z.ZodOptional<z.ZodString>;
}, {
    propType: z.ZodLiteral<"customCall">;
}>, "strip", z.ZodTypeAny, {
    propType: "customCall";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
}, {
    propType: "customCall";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
}>]>;
export type PropAttachment = z.infer<typeof zPropAttachment>;
export declare const zVoteWeight: z.ZodNumber;
export type VoteWeight = z.infer<typeof zVoteWeight>;
export declare const zVote: z.ZodObject<{
    ts: z.ZodOptional<z.ZodNumber>;
    txHash: z.ZodOptional<z.ZodString>;
    proposalId: z.ZodEffects<z.ZodString, string, string>;
    voter: z.ZodEffects<z.ZodString, string, string>;
    weight: z.ZodNumber;
    vote: z.ZodEnum<["None", "Yes", "No"]>;
    memo: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    weight: number;
    proposalId: string;
    voter: string;
    vote: "None" | "Yes" | "No";
    memo?: string | undefined;
    ts?: number | undefined;
    txHash?: string | undefined;
}, {
    weight: number;
    proposalId: string;
    voter: string;
    vote: "None" | "Yes" | "No";
    memo?: string | undefined;
    ts?: number | undefined;
    txHash?: string | undefined;
}>;
export type Vote = z.infer<typeof zVote>;
export type ZProposalType = typeof zProposalBaseFull | typeof zRespectBreakout | typeof zRespectAccount | typeof zBurnRespect | typeof zCustomSignal | typeof zCustomCall | typeof zTick | typeof zProposalFull;
export declare const zProposalBase: z.ZodObject<{
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodOptional<z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>>;
    attachment: z.ZodOptional<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    } | undefined;
    attachment?: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    attachment?: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>;
export type ProposalBase = z.infer<typeof zProposalBase>;
export declare const zStoredProposalBase: z.ZodObject<{
    status: z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodOptional<z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>>;
    attachment: z.ZodOptional<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>>;
    createTs: z.ZodNumber;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "NotExecuted" | "Executed" | "ExecutionFailed";
    id: string;
    createTs: number;
    content?: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    } | undefined;
    attachment?: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    status: "NotExecuted" | "Executed" | "ExecutionFailed";
    id: string;
    createTs: number;
    content?: unknown;
    attachment?: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>;
export declare const zProposalBaseFull: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>;
export type ProposalBaseFull = z.infer<typeof zProposalBaseFull>;
export declare const zProposalBaseFullValid: z.ZodEffects<z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}> | z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}> | z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}> | z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}> | z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}> | z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}> | z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}> | z.ZodEffects<z.ZodUnion<[z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>]>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}> | z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>]>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}> | z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}> | z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}> | z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}> | z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}> | z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}> | z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}> | z.ZodEffects<z.ZodEffects<z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>;
export declare const zRespectBreakout: z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>;
export type RespectBreakout = z.infer<typeof zRespectBreakout>;
export declare const zRespectBreakoutValid: z.ZodBranded<z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, "respectBreakoutValid">;
export type RespectBreakoutValid = z.infer<typeof zRespectBreakoutValid>;
export declare const zRespectAccount: z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>;
export type RespectAccount = z.infer<typeof zRespectAccount>;
export declare const zRespectAccountValid: z.ZodBranded<z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, "RespectAccountValid">;
export type RespectAccountValid = z.infer<typeof zRespectAccountValid>;
export declare const zBurnRespect: z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>;
export type BurnRespect = z.infer<typeof zBurnRespect>;
export declare const zBurnRespectValid: z.ZodBranded<z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, "zBurnRespectValid">;
export type BurnRespectValid = z.infer<typeof zBurnRespectValid>;
export declare const zCustomSignal: z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>;
export type CustomSignal = z.infer<typeof zCustomSignal>;
export declare const zCustomSignalValid: z.ZodBranded<z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, "CustomSignalValid">;
export type CustomSignalValid = z.infer<typeof zCustomSignalValid>;
export declare const zCustomCall: z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>;
export type CustomCall = z.infer<typeof zCustomCall>;
export declare const zCustomCallValid: z.ZodBranded<z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, "CustomCallValid">;
export type CustomCallValid = z.infer<typeof zCustomCallValid>;
export declare const zTick: z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>;
export type Tick = z.infer<typeof zTick>;
export declare const zTickValid: z.ZodBranded<z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, "TickValid">;
export type TickValid = z.infer<typeof zTickValid>;
export declare const zProposal: z.ZodUnion<[z.ZodObject<{
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodOptional<z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>>;
    attachment: z.ZodOptional<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    } | undefined;
    attachment?: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    attachment?: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>]>;
export type Proposal = z.infer<typeof zProposal>;
export declare const zStoredProposal: z.ZodUnion<[z.ZodObject<{
    status: z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodOptional<z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>>;
    attachment: z.ZodOptional<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>>;
    createTs: z.ZodNumber;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "NotExecuted" | "Executed" | "ExecutionFailed";
    id: string;
    createTs: number;
    content?: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    } | undefined;
    attachment?: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    status: "NotExecuted" | "Executed" | "ExecutionFailed";
    id: string;
    createTs: number;
    content?: unknown;
    attachment?: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<{
    status: z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
    createTs: z.ZodNumber;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "NotExecuted" | "Executed" | "ExecutionFailed";
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    createTs: number;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    status: "NotExecuted" | "Executed" | "ExecutionFailed";
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    createTs: number;
    content?: unknown;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<{
    status: z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>;
    createTs: z.ZodNumber;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "NotExecuted" | "Executed" | "ExecutionFailed";
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    createTs: number;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    status: "NotExecuted" | "Executed" | "ExecutionFailed";
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    createTs: number;
    content?: unknown;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<{
    status: z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
    createTs: z.ZodNumber;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "NotExecuted" | "Executed" | "ExecutionFailed";
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    createTs: number;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    status: "NotExecuted" | "Executed" | "ExecutionFailed";
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    createTs: number;
    content?: unknown;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<{
    status: z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
    createTs: z.ZodNumber;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "NotExecuted" | "Executed" | "ExecutionFailed";
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    createTs: number;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    status: "NotExecuted" | "Executed" | "ExecutionFailed";
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    createTs: number;
    content?: unknown;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<{
    status: z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
    createTs: z.ZodNumber;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "NotExecuted" | "Executed" | "ExecutionFailed";
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    createTs: number;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    status: "NotExecuted" | "Executed" | "ExecutionFailed";
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    createTs: number;
    content?: unknown;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<{
    status: z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
    createTs: z.ZodNumber;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "NotExecuted" | "Executed" | "ExecutionFailed";
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    createTs: number;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    status: "NotExecuted" | "Executed" | "ExecutionFailed";
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    createTs: number;
    content?: unknown;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>]>;
export type StoredProposal = z.infer<typeof zStoredProposal>;
export declare const zProposalFull: z.ZodUnion<[z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>]>;
export type ProposalFull = z.infer<typeof zProposalFull>;
export declare const zProposalValid: z.ZodBranded<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, "ProposalValid"> | z.ZodBranded<z.ZodEffects<z.ZodUnion<[z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>]>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, "ProposalValid"> | z.ZodBranded<z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, "ProposalValid"> | z.ZodBranded<z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, "ProposalValid"> | z.ZodBranded<z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, "ProposalValid"> | z.ZodBranded<z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, "ProposalValid"> | z.ZodBranded<z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, "ProposalValid"> | z.ZodBranded<z.ZodEffects<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, "ProposalValid"> | z.ZodBranded<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, "ProposalValid"> | z.ZodBranded<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, "ProposalValid"> | z.ZodBranded<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, "ProposalValid"> | z.ZodBranded<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, "ProposalValid"> | z.ZodBranded<z.ZodEffects<z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, "ProposalValid"> | z.ZodBranded<z.ZodEffects<z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, "ProposalValid"> | z.ZodBranded<z.ZodEffects<z.ZodEffects<z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, "ProposalValid"> | z.ZodBranded<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    status: z.ZodOptional<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    content: z.ZodEffects<z.ZodObject<{
        addr: z.ZodEffects<z.ZodString, string, string>;
        cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
        memo: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    }, "strip", z.ZodTypeAny, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }>, {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    }, unknown>;
    attachment: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectBreakout">;
        groupNum: z.ZodNumber;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        mintReason: z.ZodString;
        mintTitle: z.ZodString;
        groupNum: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodNumber>;
    }>, "strip", z.ZodTypeAny, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }, {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        burnReason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }, {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>]>;
    createTs: z.ZodOptional<z.ZodNumber>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
}, {
    attachment: z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
        salt: z.ZodOptional<z.ZodString>;
    }, {
        propType: z.ZodLiteral<"customCall">;
    }>, "strip", z.ZodTypeAny, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }, {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>]>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    content: {
        addr: string;
        cdata: string | Uint8Array;
        memo: string | Uint8Array;
    };
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}, {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    } | {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    } | {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    } | {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        groupNum: number;
        propType: "respectBreakout";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "respectAccount";
        mintReason: string;
        mintTitle: string;
        groupNum?: number | undefined;
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        version?: number | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        burnReason: string;
        propType: "burnRespect";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "customSignal";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "customCall";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
} | {
    id: string;
    attachment: {
        propType: "tick";
        propTitle?: string | undefined;
        propDescription?: string | undefined;
        salt?: string | undefined;
        link?: string | undefined;
    };
    status?: "NotExecuted" | "Executed" | "ExecutionFailed" | undefined;
    content?: unknown;
    createTs?: number | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
}>, "ProposalValid">;
export type ProposalValid = z.infer<typeof zProposalValid>;
export declare const zORNodePropStatus: z.ZodEnum<["ProposalExists", "ProposalStored"]>;
export type ORNodePropStatus = z.infer<typeof zORNodePropStatus>;
export declare const zErrorType: z.ZodEnum<["ProposalNotFound", "ProposalNotCreated", "ProposalInvalid", "TokenNotFound"]>;
export type ErrorType = z.infer<typeof zErrorType>;
export declare const zGetVotesSpec: z.ZodObject<{
    before: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    propFilter: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
    voterFilter: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
    minWeight: z.ZodOptional<z.ZodNumber>;
    voteType: z.ZodOptional<z.ZodEnum<["Yes", "No"]>>;
}, "strict", z.ZodTypeAny, {
    before?: number | undefined;
    limit?: number | undefined;
    propFilter?: string[] | undefined;
    voterFilter?: string[] | undefined;
    minWeight?: number | undefined;
    voteType?: "Yes" | "No" | undefined;
}, {
    before?: number | undefined;
    limit?: number | undefined;
    propFilter?: string[] | undefined;
    voterFilter?: string[] | undefined;
    minWeight?: number | undefined;
    voteType?: "Yes" | "No" | undefined;
}>;
export type GetVotesSpec = z.infer<typeof zGetVotesSpec>;
export declare const zGetProposalsSpec: z.ZodObject<{
    before: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    execStatusFilter: z.ZodOptional<z.ZodArray<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>, "many">>;
}, "strict", z.ZodTypeAny, {
    before?: number | undefined;
    limit?: number | undefined;
    execStatusFilter?: ("NotExecuted" | "Executed" | "ExecutionFailed")[] | undefined;
}, {
    before?: number | undefined;
    limit?: number | undefined;
    execStatusFilter?: ("NotExecuted" | "Executed" | "ExecutionFailed")[] | undefined;
}>;
export type GetProposalsSpec = z.infer<typeof zGetProposalsSpec>;
export declare const zGetAwardsSpec: z.ZodObject<{
    before: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    recipient: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    burned: z.ZodOptional<z.ZodBoolean>;
}, "strict", z.ZodTypeAny, {
    recipient?: string | undefined;
    before?: number | undefined;
    limit?: number | undefined;
    burned?: boolean | undefined;
}, {
    recipient?: string | undefined;
    before?: number | undefined;
    limit?: number | undefined;
    burned?: boolean | undefined;
}>;
export type GetAwardsSpec = z.infer<typeof zGetAwardsSpec>;
export declare function idOfRespectBreakoutAttach(attachment: RespectBreakoutAttachment): string;
export declare function idOfRespectAccountAttachV1(attachment: RespectAccountAttachment): string;
export declare function idOfRespectAccountAttachV0(attachment: RespectAccountAttachment): string;
export declare function idOfBurnRespectAttach(attachment: BurnRespectAttachment): string;
export declare function idOfCustomSignalAttach(attachment: CustomSignalAttachment | TickAttachment): string;
export declare function idOfCustomCallAttach(attachment: CustomCallAttachment): string;
export declare function attachmentId(attachment: PropAttachment): string;
export declare function propContentEq(c1: PropContent, c2: PropContent): boolean;
export declare function propValidlEq(p1: ProposalValid, p2: ProposalValid): boolean;
//# sourceMappingURL=ornode.d.ts.map