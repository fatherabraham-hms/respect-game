import { z } from "zod";
export declare const zTokenId: z.ZodEffects<z.ZodString, string, string>;
export type TokenId = z.infer<typeof zTokenId>;
/**
 * ERC1155 metadata. https://eips.ethereum.org/EIPS/eip-1155#metadata
 */
export declare const zErc1155Mt: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    decimals: z.ZodOptional<z.ZodNumber>;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    properties: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    decimals?: number | undefined;
    description?: string | undefined;
    image?: string | undefined;
    properties?: {} | undefined;
}, {
    name?: string | undefined;
    decimals?: number | undefined;
    description?: string | undefined;
    image?: string | undefined;
    properties?: {} | undefined;
}>;
/**
 * ERC1155 metadata. https://eips.ethereum.org/EIPS/eip-1155#metadata
 */
export type Erc1155Mt = z.infer<typeof zErc1155Mt>;
//# sourceMappingURL=erc1155.d.ts.map