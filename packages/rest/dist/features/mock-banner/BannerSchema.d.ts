import { z } from "zod";
export declare const BannerSchema: z.ZodObject<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    altText: z.ZodString;
    imageUrl: z.ZodString;
    linkUrl: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    imageUrl: string;
    altText: string;
    linkUrl: string;
}, {
    id: string;
    createdAt: Date;
    imageUrl: string;
    altText: string;
    linkUrl: string;
}>;
export type Banner = z.infer<typeof BannerSchema>;
//# sourceMappingURL=BannerSchema.d.ts.map