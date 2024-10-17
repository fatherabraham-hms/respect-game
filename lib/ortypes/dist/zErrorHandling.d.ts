import { RefinementCtx, ZodCustomIssue } from "zod";
import { Optional } from "utility-types";
export type CustomIssueArgs = Optional<Omit<ZodCustomIssue, "code">, "path"> & {
    cause?: any;
};
export declare function addCustomIssue(parsedVal: unknown, ctx: RefinementCtx, cause: unknown, message?: string): void;
export declare function addCustomIssue(parsedVal: unknown, ctx: RefinementCtx, message: string): void;
export declare function addCustomIssue(parsedVal: unknown, ctx: RefinementCtx, customData: CustomIssueArgs): void;
//# sourceMappingURL=zErrorHandling.d.ts.map