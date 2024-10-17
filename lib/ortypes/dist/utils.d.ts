import { z } from "zod";
export declare function resultArrayToObj<T extends z.AnyZodObject>(val: unknown, baseZObj: T): unknown;
export declare function preprocessResultOrObj<T extends z.AnyZodObject>(baseZObj: T): z.ZodEffects<T, T["_output"], unknown>;
//# sourceMappingURL=utils.d.ts.map