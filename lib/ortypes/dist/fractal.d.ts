import { z } from "zod";
export { zGroupNum, GroupNum, zRankNum } from "./respect1155.js";
export declare const PropTypeValues: readonly ["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"];
export declare const zPropType: z.ZodEnum<["respectBreakout", "respectAccount", "burnRespect", "tick", "customSignal", "customCall"]>;
export type PropType = z.infer<typeof zPropType>;
export declare const zRankings: z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">;
export type Rankings = z.infer<typeof zRankings>;
export declare const zValueToRanking: z.ZodEffects<z.ZodBigInt, number, bigint>;
export declare const zBreakoutMintRequest: z.ZodEffects<z.ZodEffects<z.ZodObject<{
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
}, unknown>;
//# sourceMappingURL=fractal.d.ts.map