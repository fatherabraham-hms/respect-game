import { Orec, Orec__factory } from "orec/typechain-types";
import { z } from "zod";
import { Bytes } from "./eth.js";
export type OrecContract = Orec;
export { Orec__factory };
export declare const OrecFactory: typeof Orec__factory;
export type MessageStruct = Orec.MessageStruct;
export type VoteStruct = Orec.VoteStruct;
export type VoteStructOut = Orec.VoteStructOutput;
export { ProposalCreatedEvent, ExecutedEvent, ExecutionFailedEvent, EmptyVoteInEvent, WeightedVoteInEvent, SignalEvent } from "orec/typechain-types/contracts/Orec.js";
export * from "orec/typechain-types/common.js";
export declare enum Stage {
    Voting = 0,
    Veto = 1,
    Execution = 2,
    Expired = 3
}
export declare const zStage: z.ZodEffects<z.ZodNativeEnum<typeof Stage>, Stage, unknown>;
export declare enum VoteStatus {
    Passing = 0,
    Failing = 1,
    Passed = 2,
    Failed = 3
}
export declare const zVoteStatus: z.ZodEffects<z.ZodNativeEnum<typeof VoteStatus>, VoteStatus, unknown>;
export declare enum ExecStatus {
    NotExecuted = 0,
    Executed = 1,
    ExecutionFailed = 2
}
export declare const zExecStatus: z.ZodEffects<z.ZodNativeEnum<typeof ExecStatus>, ExecStatus, unknown>;
export declare const zExecStatusStr: z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>;
export type ExecStatusStr = z.infer<typeof zExecStatusStr>;
export declare const execStatusMap: Record<ExecStatus, ExecStatusStr>;
export declare const zExecStatusToStr: z.ZodPipeline<z.ZodEffects<z.ZodEffects<z.ZodNativeEnum<typeof ExecStatus>, ExecStatus, unknown>, "NotExecuted" | "Executed" | "ExecutionFailed", unknown>, z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>>;
export declare const zPropId: z.ZodEffects<z.ZodString, string, string>;
export type PropId = z.infer<typeof zPropId>;
export declare enum VoteType {
    None = 0,
    Yes = 1,
    No = 2
}
export declare const zVoteType: z.ZodEffects<z.ZodNativeEnum<typeof VoteType>, VoteType, unknown>;
export declare const zVoteTypeStr: z.ZodEnum<["None", "Yes", "No"]>;
export type VoteTypeStr = z.infer<typeof zVoteTypeStr>;
export declare const zValidVoteTypeStr: z.ZodEnum<["Yes", "No"]>;
export declare const voteTypeMap: Record<VoteType, VoteTypeStr>;
export declare const zVoteTypeToStr: z.ZodPipeline<z.ZodEffects<z.ZodEffects<z.ZodNativeEnum<typeof VoteType>, VoteType, unknown>, "None" | "Yes" | "No", unknown>, z.ZodEnum<["None", "Yes", "No"]>>;
export declare const strToVtMap: Record<VoteTypeStr, VoteType>;
export declare const zStrToVoteType: z.ZodPipeline<z.ZodEffects<z.ZodEnum<["None", "Yes", "No"]>, VoteType, "None" | "Yes" | "No">, z.ZodEffects<z.ZodNativeEnum<typeof VoteType>, VoteType, unknown>>;
export declare enum KnownSignalTypes {
    Tick = 0
}
export declare const zKnownSignalTypes: z.ZodEffects<z.ZodNativeEnum<typeof KnownSignalTypes>, KnownSignalTypes.Tick, unknown>;
export declare const zSignalType: z.ZodNumber;
export declare const zCustomSignalType: z.ZodNumber;
export declare const zTickSignalType: z.ZodLiteral<number>;
export declare const zBytesToVoteMemo: z.ZodPipeline<z.ZodEffects<z.ZodEffects<z.ZodString, string, string>, string, string>, z.ZodString>;
export declare const zMemoToBytes: z.ZodPipeline<z.ZodEffects<z.ZodString, string, string>, z.ZodEffects<z.ZodString, string, string>>;
export declare function encodeVoteMemo(memo?: string): Bytes;
export declare function decodeVoteMemo(memoBytes: Bytes): string;
export type CCustomSignalArgs = Parameters<Orec['signal']>;
export type CMessage = Orec.MessageStruct;
export type CProposalState = Omit<Awaited<ReturnType<Orec["proposals"]>>, keyof [bigint, bigint, bigint, bigint]>;
export declare const zVoteWeight: z.ZodBigInt;
export type VoteWeight = z.infer<typeof zVoteWeight>;
export type CVote = Omit<Awaited<ReturnType<Orec["getLiveVote"]>>, keyof [bigint, bigint]>;
export declare const zVoteBase: z.ZodObject<{
    vtype: z.ZodEffects<z.ZodNativeEnum<typeof VoteType>, VoteType, unknown>;
    weight: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    vtype: VoteType;
    weight: bigint;
}, {
    weight: bigint;
    vtype?: unknown;
}>;
export declare const zVote: z.ZodEffects<z.ZodObject<{
    vtype: z.ZodEffects<z.ZodNativeEnum<typeof VoteType>, VoteType, unknown>;
    weight: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    vtype: VoteType;
    weight: bigint;
}, {
    weight: bigint;
    vtype?: unknown;
}>, {
    vtype: VoteType;
    weight: bigint;
}, unknown>;
export type Vote = z.infer<typeof zVote>;
export declare const zSignalArgsBase: z.ZodObject<{
    signalType: z.ZodNumber;
    data: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
}, "strip", z.ZodTypeAny, {
    data: string | Uint8Array;
    signalType: number;
}, {
    data: string | Uint8Array;
    signalType: number;
}>;
export declare const zSignalArgs: z.ZodEffects<z.ZodObject<{
    signalType: z.ZodNumber;
    data: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodType<Uint8Array, z.ZodTypeDef, Uint8Array>]>, string | Uint8Array, string | Uint8Array>;
}, "strip", z.ZodTypeAny, {
    data: string | Uint8Array;
    signalType: number;
}, {
    data: string | Uint8Array;
    signalType: number;
}>, {
    data: string | Uint8Array;
    signalType: number;
}, unknown>;
export type CustomSignalArgs = z.infer<typeof zSignalArgs>;
export declare const zPropStateBase: z.ZodObject<{
    createTime: z.ZodBigInt;
    yesWeight: z.ZodBigInt;
    noWeight: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    createTime: bigint;
    yesWeight: bigint;
    noWeight: bigint;
}, {
    createTime: bigint;
    yesWeight: bigint;
    noWeight: bigint;
}>;
export declare const zProposalState: z.ZodEffects<z.ZodObject<{
    createTime: z.ZodBigInt;
    yesWeight: z.ZodBigInt;
    noWeight: z.ZodBigInt;
}, "strip", z.ZodTypeAny, {
    createTime: bigint;
    yesWeight: bigint;
    noWeight: bigint;
}, {
    createTime: bigint;
    yesWeight: bigint;
    noWeight: bigint;
}>, {
    createTime: bigint;
    yesWeight: bigint;
    noWeight: bigint;
}, unknown>;
export type ProposalState = z.infer<typeof zProposalState>;
export declare const zProposedMsgBase: z.ZodObject<{
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
}>;
export declare const zProposedMsg: z.ZodEffects<z.ZodObject<{
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
export type ProposedMsg = z.infer<typeof zProposedMsg>;
export declare const zOnchainProp: z.ZodObject<z.objectUtil.extendShape<{
    createTime: z.ZodBigInt;
    yesWeight: z.ZodBigInt;
    noWeight: z.ZodBigInt;
}, {
    id: z.ZodEffects<z.ZodString, string, string>;
    stage: z.ZodEffects<z.ZodNativeEnum<typeof Stage>, Stage, unknown>;
    voteStatus: z.ZodEffects<z.ZodNativeEnum<typeof VoteStatus>, VoteStatus, unknown>;
    createTime: z.ZodDate;
}>, "strip", z.ZodTypeAny, {
    createTime: Date;
    yesWeight: bigint;
    noWeight: bigint;
    id: string;
    stage: Stage;
    voteStatus: VoteStatus;
}, {
    createTime: Date;
    yesWeight: bigint;
    noWeight: bigint;
    id: string;
    stage?: unknown;
    voteStatus?: unknown;
}>;
export type OnchainProp = z.infer<typeof zOnchainProp>;
export { MIN_1, HOUR_1, DAY_1, DAY_6, WEEK_1, propId } from "orec/utils";
//# sourceMappingURL=orec.d.ts.map