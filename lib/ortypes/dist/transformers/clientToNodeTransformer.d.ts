import { ZodTypeAny, z } from "zod";
import { BurnRespectRequest, CustomCallRequest, CustomSignalRequest, RespectAccountRequest, RespectBreakoutRequest, TickRequest, VoteType as CVoteType, GetProposalsSpec as CGetProposalsSpec, GetAwardsSpec as CGetAwardsSpec, GetVotesSpec as CGetVotesSpec } from "../orclient.js";
import { BurnRespect, CustomCall, CustomSignal, RespectAccount, RespectBreakout, TickValid, GetProposalsSpec, GetAwardsSpec, GetVotesSpec } from "../ornode.js";
import { ConfigWithOrnode, ORContext as OrigORContext } from "../orContext.js";
import { VoteType } from "../orec.js";
type ORContext = OrigORContext<ConfigWithOrnode>;
export declare const zRankNumToValue: z.ZodPipeline<z.ZodEffects<z.ZodNumber, bigint | undefined, number>, z.ZodBigInt>;
export declare const clientToOrecVoteMap: Record<"None" | "Yes" | "No", VoteType>;
export declare const zCVoteTypeToOrec: z.ZodPipeline<z.ZodEffects<z.ZodEnum<["None", "Yes", "No"]>, VoteType, "None" | "Yes" | "No">, z.ZodEffects<z.ZodNativeEnum<typeof VoteType>, VoteType, unknown>>;
export declare const zCGetProposalsSpecToNodeSpec: z.ZodPipeline<z.ZodEffects<z.ZodObject<{
    before: z.ZodOptional<z.ZodDate>;
    limit: z.ZodOptional<z.ZodNumber>;
    execStatFilter: z.ZodOptional<z.ZodArray<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>, "many">>;
    voteStatFilter: z.ZodOptional<z.ZodArray<z.ZodEnum<["Passing", "Failing", "Passed", "Failed"]>, "many">>;
    stageFilter: z.ZodOptional<z.ZodArray<z.ZodEnum<["Voting", "Veto", "Execution", "Expired"]>, "many">>;
}, "strict", ZodTypeAny, {
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
}>, {
    before?: number | undefined;
    limit?: number | undefined;
    execStatusFilter?: ("NotExecuted" | "Executed" | "ExecutionFailed")[] | undefined;
}, {
    before?: Date | undefined;
    limit?: number | undefined;
    execStatFilter?: ("NotExecuted" | "Executed" | "ExecutionFailed")[] | undefined;
    voteStatFilter?: ("Passing" | "Failing" | "Passed" | "Failed")[] | undefined;
    stageFilter?: ("Voting" | "Veto" | "Execution" | "Expired")[] | undefined;
}>, z.ZodObject<{
    before: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    execStatusFilter: z.ZodOptional<z.ZodArray<z.ZodEnum<["NotExecuted", "Executed", "ExecutionFailed"]>, "many">>;
}, "strict", ZodTypeAny, {
    before?: number | undefined;
    limit?: number | undefined;
    execStatusFilter?: ("NotExecuted" | "Executed" | "ExecutionFailed")[] | undefined;
}, {
    before?: number | undefined;
    limit?: number | undefined;
    execStatusFilter?: ("NotExecuted" | "Executed" | "ExecutionFailed")[] | undefined;
}>>;
export declare const zCGetAwardsSpecToNodeSpec: z.ZodPipeline<z.ZodEffects<z.ZodObject<{
    before: z.ZodOptional<z.ZodDate>;
    limit: z.ZodOptional<z.ZodNumber>;
    recipient: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    burned: z.ZodOptional<z.ZodBoolean>;
}, "strict", ZodTypeAny, {
    recipient?: string | undefined;
    before?: Date | undefined;
    limit?: number | undefined;
    burned?: boolean | undefined;
}, {
    recipient?: string | undefined;
    before?: Date | undefined;
    limit?: number | undefined;
    burned?: boolean | undefined;
}>, {
    recipient?: string | undefined;
    before?: number | undefined;
    limit?: number | undefined;
    burned?: boolean | undefined;
}, {
    recipient?: string | undefined;
    before?: Date | undefined;
    limit?: number | undefined;
    burned?: boolean | undefined;
}>, z.ZodObject<{
    before: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    recipient: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    burned: z.ZodOptional<z.ZodBoolean>;
}, "strict", ZodTypeAny, {
    recipient?: string | undefined;
    before?: number | undefined;
    limit?: number | undefined;
    burned?: boolean | undefined;
}, {
    recipient?: string | undefined;
    before?: number | undefined;
    limit?: number | undefined;
    burned?: boolean | undefined;
}>>;
export declare const zCGetVotesSpecToNodeSpec: z.ZodPipeline<z.ZodEffects<z.ZodObject<{
    before: z.ZodOptional<z.ZodDate>;
    limit: z.ZodOptional<z.ZodNumber>;
    propFilter: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
    voterFilter: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
    minWeight: z.ZodOptional<z.ZodNumber>;
    voteType: z.ZodOptional<z.ZodEnum<["Yes", "No"]>>;
}, "strict", ZodTypeAny, {
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
}>, {
    before?: number | undefined;
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
}>, z.ZodObject<{
    before: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    propFilter: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
    voterFilter: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
    minWeight: z.ZodOptional<z.ZodNumber>;
    voteType: z.ZodOptional<z.ZodEnum<["Yes", "No"]>>;
}, "strict", ZodTypeAny, {
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
}>>;
export declare class ClientToNodeTransformer {
    private _ctx;
    private _zCRespBreakoutReqToProposal;
    private _zCRespAccountReqToProposal;
    private _zCBurnRespReqToProposal;
    private _zCCustomSignalReqToProposal;
    private _zCTickReqToProposal;
    private _zCCustomCallReqToProposal;
    constructor(context: ORContext);
    transformGetProposalsSpec(spec: CGetProposalsSpec): GetProposalsSpec;
    transformGetAwardsSpec(spec: CGetAwardsSpec): GetAwardsSpec;
    transformGetVotesSpec(spec: CGetVotesSpec): GetVotesSpec;
    transformRespectBreakout(req: RespectBreakoutRequest): Promise<RespectBreakout>;
    transformRespectAccount(req: RespectAccountRequest): Promise<RespectAccount>;
    transformBurnRespect(req: BurnRespectRequest): Promise<BurnRespect>;
    transformCustomSignal(req: CustomSignalRequest): Promise<CustomSignal>;
    transformTick(req: TickRequest): Promise<TickValid>;
    transformCustomCall(req: CustomCallRequest): Promise<CustomCall>;
    transformVoteType(vt: CVoteType): VoteType;
}
export {};
//# sourceMappingURL=clientToNodeTransformer.d.ts.map