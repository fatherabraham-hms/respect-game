import { z } from "zod";
export declare const zContractMetadata: z.ZodObject<{
    name: z.ZodString;
    symbol: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    banner_image: z.ZodOptional<z.ZodString>;
    featured_image: z.ZodOptional<z.ZodString>;
    external_link: z.ZodOptional<z.ZodString>;
    collaborators: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    symbol?: string | undefined;
    description?: string | undefined;
    image?: string | undefined;
    banner_image?: string | undefined;
    featured_image?: string | undefined;
    external_link?: string | undefined;
    collaborators?: string[] | undefined;
}, {
    name: string;
    symbol?: string | undefined;
    description?: string | undefined;
    image?: string | undefined;
    banner_image?: string | undefined;
    featured_image?: string | undefined;
    external_link?: string | undefined;
    collaborators?: string[] | undefined;
}>;
export type ContractMetadata = z.infer<typeof zContractMetadata>;
//# sourceMappingURL=erc7572.d.ts.map