import { ZodType, z } from "zod";
import { PropType, zPropType } from "./fractal.js";
import { ErrorType } from "ethers-decode-error";
export declare const zProposalMetadata: z.ZodObject<{
    propTitle: z.ZodOptional<z.ZodString>;
    propDescription: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    propTitle?: string | undefined;
    propDescription?: string | undefined;
}, {
    propTitle?: string | undefined;
    propDescription?: string | undefined;
}>;
export type ProposalMetadata = z.infer<typeof zProposalMetadata>;
export declare const zDecodedPropBase: z.ZodObject<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    metadata: z.ZodObject<{
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    propType: "burnRespect" | "respectBreakout" | "respectAccount" | "tick" | "customSignal" | "customCall";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
}, {
    propType: "burnRespect" | "respectBreakout" | "respectAccount" | "tick" | "customSignal" | "customCall";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
}>;
export type DecodedPropBase = z.infer<typeof zDecodedPropBase>;
export declare const zVoteType: z.ZodEnum<["None", "Yes", "No"]>;
export type VoteType = z.infer<typeof zVoteType>;
export declare const zValidVoteType: z.ZodEnum<["Yes", "No"]>;
export type ValidVoteType = z.infer<typeof zValidVoteType>;
export declare const zStage: z.ZodEnum<["Voting", "Veto", "Execution", "Expired"]>;
export type Stage = z.infer<typeof zStage>;
export declare const zVoteStatus: z.ZodEnum<["Passing", "Failing", "Passed", "Failed"]>;
export type VoteStatus = z.infer<typeof zVoteStatus>;
export declare const zExecStatus: z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>;
export type ExecStatus = z.infer<typeof zExecStatus>;
export declare const zVoteWeight: z.ZodNumber;
export type VoteWeight = z.infer<typeof zVoteWeight>;
export declare const zVoteRequest: z.ZodObject<{
    propId: z.ZodEffects<z.ZodString, string, string>;
    vote: z.ZodEnum<["None", "Yes", "No"]>;
    memo: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    vote: "None" | "Yes" | "No";
    propId: string;
    memo?: string | undefined;
}, {
    vote: "None" | "Yes" | "No";
    propId: string;
    memo?: string | undefined;
}>;
export type VoteRequest = z.infer<typeof zVoteRequest>;
export declare const zVote: z.ZodObject<{
    proposalId: z.ZodEffects<z.ZodString, string, string>;
    voter: z.ZodEffects<z.ZodString, string, string>;
    vote: z.ZodEnum<["None", "Yes", "No"]>;
    weight: z.ZodNumber;
    memo: z.ZodOptional<z.ZodString>;
    date: z.ZodOptional<z.ZodDate>;
    txHash: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    weight: number;
    proposalId: string;
    voter: string;
    vote: "None" | "Yes" | "No";
    date?: Date | undefined;
    memo?: string | undefined;
    txHash?: string | undefined;
}, {
    weight: number;
    proposalId: string;
    voter: string;
    vote: "None" | "Yes" | "No";
    date?: Date | undefined;
    memo?: string | undefined;
    txHash?: string | undefined;
}>;
export type Vote = z.infer<typeof zVote>;
export declare const zVoteWithProp: z.ZodObject<z.objectUtil.extendShape<Omit<{
    propId: z.ZodEffects<z.ZodString, string, string>;
    vote: z.ZodEnum<["None", "Yes", "No"]>;
    memo: z.ZodOptional<z.ZodString>;
}, "propId">, {
    vote: z.ZodDefault<z.ZodEnum<["None", "Yes", "No"]>>;
}>, "strip", z.ZodTypeAny, {
    vote: "None" | "Yes" | "No";
    memo?: string | undefined;
}, {
    memo?: string | undefined;
    vote?: "None" | "Yes" | "No" | undefined;
}>;
export type VoteWithProp = z.infer<typeof zVoteWithProp>;
export declare const zVoteWithPropRequest: z.ZodObject<{
    memo: z.ZodOptional<z.ZodString>;
    vote: z.ZodOptional<z.ZodDefault<z.ZodEnum<["None", "Yes", "No"]>>>;
}, "strip", z.ZodTypeAny, {
    memo?: string | undefined;
    vote?: "None" | "Yes" | "No" | undefined;
}, {
    memo?: string | undefined;
    vote?: "None" | "Yes" | "No" | undefined;
}>;
export type VoteWithPropRequest = z.infer<typeof zVoteWithPropRequest>;
export declare const zBreakoutResult: z.ZodObject<{
    groupNum: z.ZodNumber;
    rankings: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
}, "strip", z.ZodTypeAny, {
    groupNum: number;
    rankings: string[];
}, {
    groupNum: number;
    rankings: string[];
}>;
export type BreakoutResult = z.infer<typeof zBreakoutResult>;
export declare const zRespectBreakoutRequest: z.ZodObject<z.objectUtil.extendShape<{
    groupNum: z.ZodNumber;
    rankings: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
}, {
    meetingNum: z.ZodOptional<z.ZodNumber>;
    metadata: z.ZodOptional<z.ZodObject<{
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }>>;
}>, "strip", z.ZodTypeAny, {
    groupNum: number;
    rankings: string[];
    metadata?: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    } | undefined;
    meetingNum?: number | undefined;
}, {
    groupNum: number;
    rankings: string[];
    metadata?: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    } | undefined;
    meetingNum?: number | undefined;
}>;
export type RespectBreakoutRequest = z.infer<typeof zRespectBreakoutRequest>;
export declare const zRespectBreakout: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    metadata: z.ZodObject<{
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }>;
}, {
    groupNum: z.ZodNumber;
    rankings: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
}>, {
    propType: z.ZodLiteral<"respectBreakout">;
    meetingNum: z.ZodNumber;
    mintData: z.ZodEffects<z.ZodString, string, string>;
}>, "strip", z.ZodTypeAny, {
    groupNum: number;
    propType: "respectBreakout";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    rankings: string[];
    meetingNum: number;
    mintData: string;
}, {
    groupNum: number;
    propType: "respectBreakout";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    rankings: string[];
    meetingNum: number;
    mintData: string;
}>;
export type RespectBreakout = z.infer<typeof zRespectBreakout>;
export declare const zRespectAccount: z.ZodObject<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    metadata: z.ZodObject<{
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }>;
}, {
    propType: z.ZodLiteral<"respectAccount">;
    meetingNum: z.ZodNumber;
    mintType: z.ZodNumber;
    groupNum: z.ZodOptional<z.ZodNumber>;
    account: z.ZodEffects<z.ZodString, string, string>;
    value: z.ZodBigInt;
    title: z.ZodString;
    reason: z.ZodString;
    tokenId: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
}>, "strip", z.ZodTypeAny, {
    value: bigint;
    mintType: number;
    tokenId: string;
    reason: string;
    title: string;
    propType: "respectAccount";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    meetingNum: number;
    account: string;
    groupNum?: number | undefined;
}, {
    value: bigint;
    mintType: number;
    tokenId: string;
    reason: string;
    title: string;
    propType: "respectAccount";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    meetingNum: number;
    account: string;
    groupNum?: number | undefined;
}>;
export type RespectAccount = z.infer<typeof zRespectAccount>;
export declare const zRespectAccountRequest: z.ZodObject<{
    value: z.ZodBigInt;
    mintType: z.ZodOptional<z.ZodNumber>;
    groupNum: z.ZodOptional<z.ZodNumber>;
    reason: z.ZodString;
    title: z.ZodString;
    metadata: z.ZodOptional<z.ZodObject<{
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }>>;
    meetingNum: z.ZodOptional<z.ZodNumber>;
    account: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    value: bigint;
    reason: string;
    title: string;
    account: string;
    mintType?: number | undefined;
    groupNum?: number | undefined;
    metadata?: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    } | undefined;
    meetingNum?: number | undefined;
}, {
    value: bigint;
    reason: string;
    title: string;
    account: string;
    mintType?: number | undefined;
    groupNum?: number | undefined;
    metadata?: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    } | undefined;
    meetingNum?: number | undefined;
}>;
export type RespectAccountRequest = z.infer<typeof zRespectAccountRequest>;
export declare const zBurnRespect: z.ZodObject<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    metadata: z.ZodObject<{
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }>;
}, {
    propType: z.ZodLiteral<"burnRespect">;
    tokenId: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    reason: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    tokenId: string;
    reason: string;
    propType: "burnRespect";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
}, {
    tokenId: string;
    reason: string;
    propType: "burnRespect";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
}>;
export type BurnRespect = z.infer<typeof zBurnRespect>;
export declare const zBurnRespectRequest: z.ZodObject<{
    tokenId: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    reason: z.ZodString;
    metadata: z.ZodOptional<z.ZodObject<{
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    tokenId: string;
    reason: string;
    metadata?: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    } | undefined;
}, {
    tokenId: string;
    reason: string;
    metadata?: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    } | undefined;
}>;
export type BurnRespectRequest = z.infer<typeof zBurnRespectRequest>;
export declare const zCustomSignal: z.ZodObject<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    metadata: z.ZodObject<{
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }>;
}, {
    propType: z.ZodLiteral<"customSignal">;
    signalType: z.ZodNumber;
    data: z.ZodEffects<z.ZodString, string, string>;
    link: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    data: string;
    signalType: number;
    propType: "customSignal";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    link?: string | undefined;
}, {
    data: string;
    signalType: number;
    propType: "customSignal";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    link?: string | undefined;
}>;
export type CustomSignal = z.infer<typeof zCustomSignal>;
export declare const zCustomSignalRequest: z.ZodObject<{
    data: z.ZodEffects<z.ZodString, string, string>;
    signalType: z.ZodNumber;
    link: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodObject<{
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    data: string;
    signalType: number;
    link?: string | undefined;
    metadata?: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    } | undefined;
}, {
    data: string;
    signalType: number;
    link?: string | undefined;
    metadata?: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    } | undefined;
}>;
export type CustomSignalRequest = z.infer<typeof zCustomSignalRequest>;
export declare const zTick: z.ZodObject<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    metadata: z.ZodObject<{
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }>;
}, {
    propType: z.ZodLiteral<"tick">;
    link: z.ZodOptional<z.ZodString>;
    data: z.ZodEffects<z.ZodString, string, string>;
}>, "strip", z.ZodTypeAny, {
    data: string;
    propType: "tick";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    link?: string | undefined;
}, {
    data: string;
    propType: "tick";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    link?: string | undefined;
}>;
export type Tick = z.infer<typeof zTick>;
export declare const zTickRequest: z.ZodObject<{
    data: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    link: z.ZodOptional<z.ZodString>;
    metadata: z.ZodOptional<z.ZodObject<{
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    data?: string | undefined;
    link?: string | undefined;
    metadata?: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    } | undefined;
}, {
    data?: string | undefined;
    link?: string | undefined;
    metadata?: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    } | undefined;
}>;
export type TickRequest = z.infer<typeof zTickRequest>;
export declare const zCustomCall: z.ZodObject<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    metadata: z.ZodObject<{
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }>;
}, {
    propType: z.ZodLiteral<"customCall">;
    cdata: z.ZodEffects<z.ZodString, string, string>;
    address: z.ZodEffects<z.ZodString, string, string>;
}>, "strip", z.ZodTypeAny, {
    cdata: string;
    propType: "customCall";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    address: string;
}, {
    cdata: string;
    propType: "customCall";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    address: string;
}>;
export type CustomCall = z.infer<typeof zCustomCall>;
export declare const zCustomCallRequest: z.ZodObject<Omit<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    metadata: z.ZodObject<{
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }>;
}, {
    propType: z.ZodLiteral<"customCall">;
    cdata: z.ZodEffects<z.ZodString, string, string>;
    address: z.ZodEffects<z.ZodString, string, string>;
}>, "propType">, "strip", z.ZodTypeAny, {
    cdata: string;
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    address: string;
}, {
    cdata: string;
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    address: string;
}>;
export type CustomCallRequest = z.infer<typeof zCustomCallRequest>;
export declare const zDecodedProposal: z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    metadata: z.ZodObject<{
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }>;
}, {
    propType: z.ZodLiteral<"customCall">;
    cdata: z.ZodEffects<z.ZodString, string, string>;
    address: z.ZodEffects<z.ZodString, string, string>;
}>, "strip", z.ZodTypeAny, {
    cdata: string;
    propType: "customCall";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    address: string;
}, {
    cdata: string;
    propType: "customCall";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    address: string;
}>, z.ZodObject<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    metadata: z.ZodObject<{
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }>;
}, {
    propType: z.ZodLiteral<"tick">;
    link: z.ZodOptional<z.ZodString>;
    data: z.ZodEffects<z.ZodString, string, string>;
}>, "strip", z.ZodTypeAny, {
    data: string;
    propType: "tick";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    link?: string | undefined;
}, {
    data: string;
    propType: "tick";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    link?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    metadata: z.ZodObject<{
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }>;
}, {
    propType: z.ZodLiteral<"customSignal">;
    signalType: z.ZodNumber;
    data: z.ZodEffects<z.ZodString, string, string>;
    link: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    data: string;
    signalType: number;
    propType: "customSignal";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    link?: string | undefined;
}, {
    data: string;
    signalType: number;
    propType: "customSignal";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    link?: string | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    metadata: z.ZodObject<{
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }>;
}, {
    propType: z.ZodLiteral<"burnRespect">;
    tokenId: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    reason: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    tokenId: string;
    reason: string;
    propType: "burnRespect";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
}, {
    tokenId: string;
    reason: string;
    propType: "burnRespect";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
}>, z.ZodObject<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    metadata: z.ZodObject<{
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }>;
}, {
    propType: z.ZodLiteral<"respectAccount">;
    meetingNum: z.ZodNumber;
    mintType: z.ZodNumber;
    groupNum: z.ZodOptional<z.ZodNumber>;
    account: z.ZodEffects<z.ZodString, string, string>;
    value: z.ZodBigInt;
    title: z.ZodString;
    reason: z.ZodString;
    tokenId: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
}>, "strip", z.ZodTypeAny, {
    value: bigint;
    mintType: number;
    tokenId: string;
    reason: string;
    title: string;
    propType: "respectAccount";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    meetingNum: number;
    account: string;
    groupNum?: number | undefined;
}, {
    value: bigint;
    mintType: number;
    tokenId: string;
    reason: string;
    title: string;
    propType: "respectAccount";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    meetingNum: number;
    account: string;
    groupNum?: number | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
    metadata: z.ZodObject<{
        propTitle: z.ZodOptional<z.ZodString>;
        propDescription: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }, {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    }>;
}, {
    groupNum: z.ZodNumber;
    rankings: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
}>, {
    propType: z.ZodLiteral<"respectBreakout">;
    meetingNum: z.ZodNumber;
    mintData: z.ZodEffects<z.ZodString, string, string>;
}>, "strip", z.ZodTypeAny, {
    groupNum: number;
    propType: "respectBreakout";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    rankings: string[];
    meetingNum: number;
    mintData: string;
}, {
    groupNum: number;
    propType: "respectBreakout";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    rankings: string[];
    meetingNum: number;
    mintData: string;
}>]>;
export type DecodedProposal = z.infer<typeof zDecodedProposal>;
export declare const zExecErrorType: z.ZodNativeEnum<typeof ErrorType>;
export type ExecErrorType = z.infer<typeof zExecErrorType>;
export declare const zExecError: z.ZodObject<{
    type: z.ZodNativeEnum<typeof ErrorType>;
    data: z.ZodNullable<z.ZodString>;
    name: z.ZodNullable<z.ZodString>;
    reason: z.ZodNullable<z.ZodString>;
    args: z.ZodArray<z.ZodAny, "many">;
    signature: z.ZodNullable<z.ZodString>;
    selector: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: ErrorType;
    data: string | null;
    name: string | null;
    reason: string | null;
    args: any[];
    signature: string | null;
    selector: string | null;
}, {
    type: ErrorType;
    data: string | null;
    name: string | null;
    reason: string | null;
    args: any[];
    signature: string | null;
    selector: string | null;
}>;
export type ExecError = z.infer<typeof zExecError>;
export declare const zUnknownExecError: z.ZodObject<{
    retVal: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    retVal: string;
}, {
    retVal: string;
}>;
export declare const zOnchainProp: z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
    createTime: z.ZodBigInt;
    yesWeight: z.ZodBigInt;
    noWeight: z.ZodBigInt;
}, {
    id: z.ZodEffects<z.ZodString, string, string>;
    stage: z.ZodEffects<z.ZodNativeEnum<typeof import("./orec.js").Stage>, import("./orec.js").Stage, unknown>;
    voteStatus: z.ZodEffects<z.ZodNativeEnum<typeof import("./orec.js").VoteStatus>, import("./orec.js").VoteStatus, unknown>;
    createTime: z.ZodDate;
}>, {
    voteStatus: z.ZodEnum<["Passing", "Failing", "Passed", "Failed"]>;
    stage: z.ZodEnum<["Voting", "Veto", "Execution", "Expired"]>;
    execError: z.ZodOptional<z.ZodObject<{
        type: z.ZodNativeEnum<typeof ErrorType>;
        data: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        reason: z.ZodNullable<z.ZodString>;
        args: z.ZodArray<z.ZodAny, "many">;
        signature: z.ZodNullable<z.ZodString>;
        selector: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: ErrorType;
        data: string | null;
        name: string | null;
        reason: string | null;
        args: any[];
        signature: string | null;
        selector: string | null;
    }, {
        type: ErrorType;
        data: string | null;
        name: string | null;
        reason: string | null;
        args: any[];
        signature: string | null;
        selector: string | null;
    }>>;
}>, "strip", z.ZodTypeAny, {
    createTime: Date;
    yesWeight: bigint;
    noWeight: bigint;
    id: string;
    stage: "Voting" | "Veto" | "Execution" | "Expired";
    voteStatus: "Passing" | "Failing" | "Passed" | "Failed";
    execError?: {
        type: ErrorType;
        data: string | null;
        name: string | null;
        reason: string | null;
        args: any[];
        signature: string | null;
        selector: string | null;
    } | undefined;
}, {
    createTime: Date;
    yesWeight: bigint;
    noWeight: bigint;
    id: string;
    stage: "Voting" | "Veto" | "Execution" | "Expired";
    voteStatus: "Passing" | "Failing" | "Passed" | "Failed";
    execError?: {
        type: ErrorType;
        data: string | null;
        name: string | null;
        reason: string | null;
        args: any[];
        signature: string | null;
        selector: string | null;
    } | undefined;
}>;
export declare const zProposal: z.ZodObject<{
    status: z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>;
    createTime: z.ZodDate;
    yesWeight: z.ZodOptional<z.ZodBigInt>;
    noWeight: z.ZodOptional<z.ZodBigInt>;
    addr: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    cdata: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>>;
    memo: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>>;
    id: z.ZodEffects<z.ZodString, string, string>;
    stage: z.ZodEnum<["Voting", "Veto", "Execution", "Expired"]>;
    voteStatus: z.ZodEnum<["Passing", "Failing", "Passed", "Failed"]>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
    execError: z.ZodOptional<z.ZodObject<{
        type: z.ZodNativeEnum<typeof ErrorType>;
        data: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        reason: z.ZodNullable<z.ZodString>;
        args: z.ZodArray<z.ZodAny, "many">;
        signature: z.ZodNullable<z.ZodString>;
        selector: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: ErrorType;
        data: string | null;
        name: string | null;
        reason: string | null;
        args: any[];
        signature: string | null;
        selector: string | null;
    }, {
        type: ErrorType;
        data: string | null;
        name: string | null;
        reason: string | null;
        args: any[];
        signature: string | null;
        selector: string | null;
    }>>;
    decoded: z.ZodOptional<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        metadata: z.ZodObject<{
            propTitle: z.ZodOptional<z.ZodString>;
            propDescription: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }>;
    }, {
        propType: z.ZodLiteral<"customCall">;
        cdata: z.ZodEffects<z.ZodString, string, string>;
        address: z.ZodEffects<z.ZodString, string, string>;
    }>, "strip", z.ZodTypeAny, {
        cdata: string;
        propType: "customCall";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        address: string;
    }, {
        cdata: string;
        propType: "customCall";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        address: string;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        metadata: z.ZodObject<{
            propTitle: z.ZodOptional<z.ZodString>;
            propDescription: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
        data: z.ZodEffects<z.ZodString, string, string>;
    }>, "strip", z.ZodTypeAny, {
        data: string;
        propType: "tick";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        link?: string | undefined;
    }, {
        data: string;
        propType: "tick";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        metadata: z.ZodObject<{
            propTitle: z.ZodOptional<z.ZodString>;
            propDescription: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        signalType: z.ZodNumber;
        data: z.ZodEffects<z.ZodString, string, string>;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        data: string;
        signalType: number;
        propType: "customSignal";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        link?: string | undefined;
    }, {
        data: string;
        signalType: number;
        propType: "customSignal";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        metadata: z.ZodObject<{
            propTitle: z.ZodOptional<z.ZodString>;
            propDescription: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
        reason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        tokenId: string;
        reason: string;
        propType: "burnRespect";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
    }, {
        tokenId: string;
        reason: string;
        propType: "burnRespect";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        metadata: z.ZodObject<{
            propTitle: z.ZodOptional<z.ZodString>;
            propDescription: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        meetingNum: z.ZodNumber;
        mintType: z.ZodNumber;
        groupNum: z.ZodOptional<z.ZodNumber>;
        account: z.ZodEffects<z.ZodString, string, string>;
        value: z.ZodBigInt;
        title: z.ZodString;
        reason: z.ZodString;
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    }>, "strip", z.ZodTypeAny, {
        value: bigint;
        mintType: number;
        tokenId: string;
        reason: string;
        title: string;
        propType: "respectAccount";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        meetingNum: number;
        account: string;
        groupNum?: number | undefined;
    }, {
        value: bigint;
        mintType: number;
        tokenId: string;
        reason: string;
        title: string;
        propType: "respectAccount";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        meetingNum: number;
        account: string;
        groupNum?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        metadata: z.ZodObject<{
            propTitle: z.ZodOptional<z.ZodString>;
            propDescription: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }>;
    }, {
        groupNum: z.ZodNumber;
        rankings: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
    }>, {
        propType: z.ZodLiteral<"respectBreakout">;
        meetingNum: z.ZodNumber;
        mintData: z.ZodEffects<z.ZodString, string, string>;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        rankings: string[];
        meetingNum: number;
        mintData: string;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        rankings: string[];
        meetingNum: number;
        mintData: string;
    }>]>>;
}, "strip", z.ZodTypeAny, {
    status: "NotExecuted" | "Executed" | "ExecutionFailed";
    createTime: Date;
    id: string;
    stage: "Voting" | "Veto" | "Execution" | "Expired";
    voteStatus: "Passing" | "Failing" | "Passed" | "Failed";
    yesWeight?: bigint | undefined;
    noWeight?: bigint | undefined;
    addr?: string | undefined;
    cdata?: string | Uint8Array | undefined;
    memo?: string | Uint8Array | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
    execError?: {
        type: ErrorType;
        data: string | null;
        name: string | null;
        reason: string | null;
        args: any[];
        signature: string | null;
        selector: string | null;
    } | undefined;
    decoded?: {
        groupNum: number;
        propType: "respectBreakout";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        rankings: string[];
        meetingNum: number;
        mintData: string;
    } | {
        value: bigint;
        mintType: number;
        tokenId: string;
        reason: string;
        title: string;
        propType: "respectAccount";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        meetingNum: number;
        account: string;
        groupNum?: number | undefined;
    } | {
        tokenId: string;
        reason: string;
        propType: "burnRespect";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
    } | {
        data: string;
        signalType: number;
        propType: "customSignal";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        link?: string | undefined;
    } | {
        data: string;
        propType: "tick";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        link?: string | undefined;
    } | {
        cdata: string;
        propType: "customCall";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        address: string;
    } | undefined;
}, {
    status: "NotExecuted" | "Executed" | "ExecutionFailed";
    createTime: Date;
    id: string;
    stage: "Voting" | "Veto" | "Execution" | "Expired";
    voteStatus: "Passing" | "Failing" | "Passed" | "Failed";
    yesWeight?: bigint | undefined;
    noWeight?: bigint | undefined;
    addr?: string | undefined;
    cdata?: string | Uint8Array | undefined;
    memo?: string | Uint8Array | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
    execError?: {
        type: ErrorType;
        data: string | null;
        name: string | null;
        reason: string | null;
        args: any[];
        signature: string | null;
        selector: string | null;
    } | undefined;
    decoded?: {
        groupNum: number;
        propType: "respectBreakout";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        rankings: string[];
        meetingNum: number;
        mintData: string;
    } | {
        value: bigint;
        mintType: number;
        tokenId: string;
        reason: string;
        title: string;
        propType: "respectAccount";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        meetingNum: number;
        account: string;
        groupNum?: number | undefined;
    } | {
        tokenId: string;
        reason: string;
        propType: "burnRespect";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
    } | {
        data: string;
        signalType: number;
        propType: "customSignal";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        link?: string | undefined;
    } | {
        data: string;
        propType: "tick";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        link?: string | undefined;
    } | {
        cdata: string;
        propType: "customCall";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        address: string;
    } | undefined;
}>;
export type Proposal = z.infer<typeof zProposal>;
export declare const zProposalMsgFull: z.ZodObject<{
    status: z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>;
    createTime: z.ZodDate;
    yesWeight: z.ZodOptional<z.ZodBigInt>;
    noWeight: z.ZodOptional<z.ZodBigInt>;
    addr: z.ZodEffects<z.ZodString, string, string>;
    cdata: z.ZodEffects<z.ZodUnion<[z.ZodString, ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    memo: z.ZodEffects<z.ZodUnion<[z.ZodString, ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
    id: z.ZodEffects<z.ZodString, string, string>;
    stage: z.ZodEnum<["Voting", "Veto", "Execution", "Expired"]>;
    voteStatus: z.ZodEnum<["Passing", "Failing", "Passed", "Failed"]>;
    createTxHash: z.ZodOptional<z.ZodString>;
    executeTxHash: z.ZodOptional<z.ZodString>;
    execError: z.ZodOptional<z.ZodObject<{
        type: z.ZodNativeEnum<typeof ErrorType>;
        data: z.ZodNullable<z.ZodString>;
        name: z.ZodNullable<z.ZodString>;
        reason: z.ZodNullable<z.ZodString>;
        args: z.ZodArray<z.ZodAny, "many">;
        signature: z.ZodNullable<z.ZodString>;
        selector: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: ErrorType;
        data: string | null;
        name: string | null;
        reason: string | null;
        args: any[];
        signature: string | null;
        selector: string | null;
    }, {
        type: ErrorType;
        data: string | null;
        name: string | null;
        reason: string | null;
        args: any[];
        signature: string | null;
        selector: string | null;
    }>>;
    decoded: z.ZodOptional<z.ZodUnion<[z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        metadata: z.ZodObject<{
            propTitle: z.ZodOptional<z.ZodString>;
            propDescription: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }>;
    }, {
        propType: z.ZodLiteral<"customCall">;
        cdata: z.ZodEffects<z.ZodString, string, string>;
        address: z.ZodEffects<z.ZodString, string, string>;
    }>, "strip", z.ZodTypeAny, {
        cdata: string;
        propType: "customCall";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        address: string;
    }, {
        cdata: string;
        propType: "customCall";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        address: string;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        metadata: z.ZodObject<{
            propTitle: z.ZodOptional<z.ZodString>;
            propDescription: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }>;
    }, {
        propType: z.ZodLiteral<"tick">;
        link: z.ZodOptional<z.ZodString>;
        data: z.ZodEffects<z.ZodString, string, string>;
    }>, "strip", z.ZodTypeAny, {
        data: string;
        propType: "tick";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        link?: string | undefined;
    }, {
        data: string;
        propType: "tick";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        metadata: z.ZodObject<{
            propTitle: z.ZodOptional<z.ZodString>;
            propDescription: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }>;
    }, {
        propType: z.ZodLiteral<"customSignal">;
        signalType: z.ZodNumber;
        data: z.ZodEffects<z.ZodString, string, string>;
        link: z.ZodOptional<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        data: string;
        signalType: number;
        propType: "customSignal";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        link?: string | undefined;
    }, {
        data: string;
        signalType: number;
        propType: "customSignal";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        link?: string | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        metadata: z.ZodObject<{
            propTitle: z.ZodOptional<z.ZodString>;
            propDescription: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }>;
    }, {
        propType: z.ZodLiteral<"burnRespect">;
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
        reason: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        tokenId: string;
        reason: string;
        propType: "burnRespect";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
    }, {
        tokenId: string;
        reason: string;
        propType: "burnRespect";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
    }>, z.ZodObject<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        metadata: z.ZodObject<{
            propTitle: z.ZodOptional<z.ZodString>;
            propDescription: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }>;
    }, {
        propType: z.ZodLiteral<"respectAccount">;
        meetingNum: z.ZodNumber;
        mintType: z.ZodNumber;
        groupNum: z.ZodOptional<z.ZodNumber>;
        account: z.ZodEffects<z.ZodString, string, string>;
        value: z.ZodBigInt;
        title: z.ZodString;
        reason: z.ZodString;
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>;
    }>, "strip", z.ZodTypeAny, {
        value: bigint;
        mintType: number;
        tokenId: string;
        reason: string;
        title: string;
        propType: "respectAccount";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        meetingNum: number;
        account: string;
        groupNum?: number | undefined;
    }, {
        value: bigint;
        mintType: number;
        tokenId: string;
        reason: string;
        title: string;
        propType: "respectAccount";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        meetingNum: number;
        account: string;
        groupNum?: number | undefined;
    }>, z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<{
        propType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
        metadata: z.ZodObject<{
            propTitle: z.ZodOptional<z.ZodString>;
            propDescription: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }, {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        }>;
    }, {
        groupNum: z.ZodNumber;
        rankings: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
    }>, {
        propType: z.ZodLiteral<"respectBreakout">;
        meetingNum: z.ZodNumber;
        mintData: z.ZodEffects<z.ZodString, string, string>;
    }>, "strip", z.ZodTypeAny, {
        groupNum: number;
        propType: "respectBreakout";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        rankings: string[];
        meetingNum: number;
        mintData: string;
    }, {
        groupNum: number;
        propType: "respectBreakout";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        rankings: string[];
        meetingNum: number;
        mintData: string;
    }>]>>;
}, "strip", z.ZodTypeAny, {
    status: "NotExecuted" | "Executed" | "ExecutionFailed";
    createTime: Date;
    addr: string;
    cdata: string | Uint8Array;
    memo: string | Uint8Array;
    id: string;
    stage: "Voting" | "Veto" | "Execution" | "Expired";
    voteStatus: "Passing" | "Failing" | "Passed" | "Failed";
    yesWeight?: bigint | undefined;
    noWeight?: bigint | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
    execError?: {
        type: ErrorType;
        data: string | null;
        name: string | null;
        reason: string | null;
        args: any[];
        signature: string | null;
        selector: string | null;
    } | undefined;
    decoded?: {
        groupNum: number;
        propType: "respectBreakout";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        rankings: string[];
        meetingNum: number;
        mintData: string;
    } | {
        value: bigint;
        mintType: number;
        tokenId: string;
        reason: string;
        title: string;
        propType: "respectAccount";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        meetingNum: number;
        account: string;
        groupNum?: number | undefined;
    } | {
        tokenId: string;
        reason: string;
        propType: "burnRespect";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
    } | {
        data: string;
        signalType: number;
        propType: "customSignal";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        link?: string | undefined;
    } | {
        data: string;
        propType: "tick";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        link?: string | undefined;
    } | {
        cdata: string;
        propType: "customCall";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        address: string;
    } | undefined;
}, {
    status: "NotExecuted" | "Executed" | "ExecutionFailed";
    createTime: Date;
    addr: string;
    cdata: string | Uint8Array;
    memo: string | Uint8Array;
    id: string;
    stage: "Voting" | "Veto" | "Execution" | "Expired";
    voteStatus: "Passing" | "Failing" | "Passed" | "Failed";
    yesWeight?: bigint | undefined;
    noWeight?: bigint | undefined;
    createTxHash?: string | undefined;
    executeTxHash?: string | undefined;
    execError?: {
        type: ErrorType;
        data: string | null;
        name: string | null;
        reason: string | null;
        args: any[];
        signature: string | null;
        selector: string | null;
    } | undefined;
    decoded?: {
        groupNum: number;
        propType: "respectBreakout";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        rankings: string[];
        meetingNum: number;
        mintData: string;
    } | {
        value: bigint;
        mintType: number;
        tokenId: string;
        reason: string;
        title: string;
        propType: "respectAccount";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        meetingNum: number;
        account: string;
        groupNum?: number | undefined;
    } | {
        tokenId: string;
        reason: string;
        propType: "burnRespect";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
    } | {
        data: string;
        signalType: number;
        propType: "customSignal";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        link?: string | undefined;
    } | {
        data: string;
        propType: "tick";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        link?: string | undefined;
    } | {
        cdata: string;
        propType: "customCall";
        metadata: {
            propTitle?: string | undefined;
            propDescription?: string | undefined;
        };
        address: string;
    } | undefined;
}>;
export type ProposalMsgFull = z.infer<typeof zProposalMsgFull>;
export declare const zGetVotesSpec: z.ZodObject<{
    before: z.ZodOptional<z.ZodDate>;
    limit: z.ZodOptional<z.ZodNumber>;
    propFilter: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
    voterFilter: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
    minWeight: z.ZodOptional<z.ZodNumber>;
    voteType: z.ZodOptional<z.ZodEnum<["Yes", "No"]>>;
}, "strict", z.ZodTypeAny, {
    before?: Date | undefined;
    limit?: number | undefined;
    propFilter?: string[] | undefined;
    voterFilter?: string[] | undefined;
    minWeight?: number | undefined;
    voteType?: "Yes" | "No" | undefined;
}, {
    before?: Date | undefined;
    limit?: number | undefined;
    propFilter?: string[] | undefined;
    voterFilter?: string[] | undefined;
    minWeight?: number | undefined;
    voteType?: "Yes" | "No" | undefined;
}>;
export type GetVotesSpec = z.infer<typeof zGetVotesSpec>;
export declare const zGetProposalsSpec: z.ZodObject<{
    before: z.ZodOptional<z.ZodDate>;
    limit: z.ZodOptional<z.ZodNumber>;
    execStatFilter: z.ZodOptional<z.ZodArray<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>, "many">>;
    voteStatFilter: z.ZodOptional<z.ZodArray<z.ZodEnum<["Passing", "Failing", "Passed", "Failed"]>, "many">>;
    stageFilter: z.ZodOptional<z.ZodArray<z.ZodEnum<["Voting", "Veto", "Execution", "Expired"]>, "many">>;
}, "strict", z.ZodTypeAny, {
    before?: Date | undefined;
    limit?: number | undefined;
    execStatFilter?: ("NotExecuted" | "Executed" | "ExecutionFailed")[] | undefined;
    voteStatFilter?: ("Passing" | "Failing" | "Passed" | "Failed")[] | undefined;
    stageFilter?: ("Voting" | "Veto" | "Execution" | "Expired")[] | undefined;
}, {
    before?: Date | undefined;
    limit?: number | undefined;
    execStatFilter?: ("NotExecuted" | "Executed" | "ExecutionFailed")[] | undefined;
    voteStatFilter?: ("Passing" | "Failing" | "Passed" | "Failed")[] | undefined;
    stageFilter?: ("Voting" | "Veto" | "Execution" | "Expired")[] | undefined;
}>;
/**
 * Some description
 */
export type GetProposalsSpec = z.infer<typeof zGetProposalsSpec>;
export declare const zGetAwardsSpec: z.ZodObject<{
    before: z.ZodOptional<z.ZodDate>;
    limit: z.ZodOptional<z.ZodNumber>;
    recipient: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    burned: z.ZodOptional<z.ZodBoolean>;
}, "strict", z.ZodTypeAny, {
    recipient?: string | undefined;
    before?: Date | undefined;
    limit?: number | undefined;
    burned?: boolean | undefined;
}, {
    recipient?: string | undefined;
    before?: Date | undefined;
    limit?: number | undefined;
    burned?: boolean | undefined;
}>;
export type GetAwardsSpec = z.infer<typeof zGetAwardsSpec>;
export declare function isPropMsgFull(prop: Proposal): prop is ProposalMsgFull;
/**
 * Converts to ProposalMsgFull without parsing, if possible.
 * Use this instead of zProposalMsgFull.parse to avoid parsing twice
 */
export declare function toPropMsgFull(prop: Proposal | ProposalMsgFull): ProposalMsgFull;
export type PropOfPropType<T extends PropType> = T extends typeof zPropType.Enum.respectBreakout ? RespectBreakout : (T extends typeof zPropType.enum.respectAccount ? RespectAccount : (T extends typeof zPropType.Enum.burnRespect ? BurnRespect : (T extends typeof zPropType.Enum.customSignal ? CustomSignal : (T extends typeof zPropType.Enum.customCall ? CustomCall : (T extends typeof zPropType.Enum.tick ? Tick : never)))));
//# sourceMappingURL=orclient.d.ts.map