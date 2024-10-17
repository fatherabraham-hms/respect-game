import { Proposal, VoteType, Stage, ExecStatus, VoteStatus, ExecError } from "../orclient.js";
import { StoredProposal as NProposal } from "../ornode.js";
import { z } from "zod";
import { ConfigWithOrnode, ORContext as OrigORContext } from "../orContext.js";
import { Optional } from "utility-types";
import { VoteType as NVoteType, Stage as NStage, VoteStatus as NVoteStatus } from "../orec.js";
type ORContext = OrigORContext<ConfigWithOrnode>;
export declare const stageMap: Record<NStage, Stage>;
export declare const voteStatusMap: Record<NVoteStatus, VoteStatus>;
export declare const zNAttachmentToMetadata: z.ZodPipeline<z.ZodEffects<z.ZodObject<{
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
}>, {
    propTitle?: string | undefined;
    propDescription?: string | undefined;
}, {
    propType: "burnRespect" | "respectBreakout" | "respectAccount" | "tick" | "customSignal" | "customCall";
    propTitle?: string | undefined;
    propDescription?: string | undefined;
    salt?: string | undefined;
}>, z.ZodObject<{
    propTitle: z.ZodOptional<z.ZodString>;
    propDescription: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    propTitle?: string | undefined;
    propDescription?: string | undefined;
}, {
    propTitle?: string | undefined;
    propDescription?: string | undefined;
}>>;
export declare const zMintArgsToRespectBreakout: z.ZodPipeline<z.ZodEffects<z.ZodEffects<z.ZodEffects<z.ZodObject<{
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
}, unknown>, {
    data: string | Uint8Array;
    mintRequests: {
        value: bigint;
        id: bigint;
    }[];
}, unknown>, Optional<{
    groupNum: number;
    propType: "respectBreakout";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    rankings: string[];
    meetingNum: number;
    mintData: string;
}, "groupNum"> | undefined, unknown>, z.ZodObject<{
    groupNum: z.ZodOptional<z.ZodNumber>;
    propType: z.ZodLiteral<"respectBreakout">;
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
    rankings: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
    meetingNum: z.ZodNumber;
    mintData: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    propType: "respectBreakout";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    rankings: string[];
    meetingNum: number;
    mintData: string;
    groupNum?: number | undefined;
}, {
    propType: "respectBreakout";
    metadata: {
        propTitle?: string | undefined;
        propDescription?: string | undefined;
    };
    rankings: string[];
    meetingNum: number;
    mintData: string;
    groupNum?: number | undefined;
}>>;
export declare const orecToClientVTMap: Record<NVoteType, VoteType>;
export declare const zNVoteTypeToClient: z.ZodPipeline<z.ZodEffects<z.ZodEffects<z.ZodNativeEnum<typeof NVoteType>, NVoteType, unknown>, "None" | "Yes" | "No", unknown>, z.ZodEnum<["None", "Yes", "No"]>>;
export declare const zNVoteToClient: z.ZodPipeline<z.ZodEffects<z.ZodObject<{
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
}>, {
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
    memo?: string | undefined;
    ts?: number | undefined;
    txHash?: string | undefined;
}>, z.ZodObject<{
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
}>>;
export declare class NodeToClientTransformer {
    private _ctx;
    private _zNProposalToDecodedProp;
    constructor(context: ORContext);
    getExecStatus(nodeProp: NProposal): Promise<{
        status: ExecStatus;
        execError?: ExecError;
    }>;
    transformProp(nodeProp: NProposal): Promise<Proposal>;
}
export {};
//# sourceMappingURL=nodeToClientTransformer.d.ts.map