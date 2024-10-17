import { z } from "zod";
export declare const zUrl: z.ZodString;
export type Url = z.infer<typeof zUrl>;
export declare const zTimestamp: z.ZodNumber;
export type Timestamp = z.infer<typeof zTimestamp>;
export declare class InvalidArgumentError extends Error {
    constructor(message: string);
}
//# sourceMappingURL=common.d.ts.map