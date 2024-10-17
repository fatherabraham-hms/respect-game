import { z } from "zod";
export declare const zNativeCurrency: z.ZodObject<{
    name: z.ZodString;
    symbol: z.ZodString;
    decimals: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    name: string;
    decimals: number;
}, {
    symbol: string;
    name: string;
    decimals: number;
}>;
export declare const zChainInfo: z.ZodObject<{
    chainId: z.ZodEffects<z.ZodString, string, string>;
    rpcUrls: z.ZodArray<z.ZodString, "many">;
    chainName: z.ZodString;
    blockExplorerUrl: z.ZodString;
    nativeCurrency: z.ZodDefault<z.ZodObject<{
        name: z.ZodString;
        symbol: z.ZodString;
        decimals: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        symbol: string;
        name: string;
        decimals: number;
    }, {
        symbol: string;
        name: string;
        decimals: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    chainId: string;
    rpcUrls: string[];
    chainName: string;
    blockExplorerUrl: string;
    nativeCurrency: {
        symbol: string;
        name: string;
        decimals: number;
    };
}, {
    chainId: string;
    rpcUrls: string[];
    chainName: string;
    blockExplorerUrl: string;
    nativeCurrency?: {
        symbol: string;
        name: string;
        decimals: number;
    } | undefined;
}>;
export type ChainInfo = z.infer<typeof zChainInfo>;
//# sourceMappingURL=chainInfo.d.ts.map