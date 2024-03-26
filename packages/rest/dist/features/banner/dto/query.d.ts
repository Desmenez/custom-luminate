import { z } from 'zod';
export declare const GetBannerOrderByInput: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    updatedAt: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    isActive: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    order: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
}, "strip", z.ZodTypeAny, {
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    isActive?: "asc" | "desc" | undefined;
    order?: "asc" | "desc" | undefined;
}, {
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    isActive?: "asc" | "desc" | undefined;
    order?: "asc" | "desc" | undefined;
}>;
export type GetBannerOrderByInput = z.infer<typeof GetBannerOrderByInput>;
export declare const GetBannerWhereInput: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
}, {
    name?: string | undefined;
}>;
export type GetBannerWhereInput = z.infer<typeof GetBannerWhereInput>;
export declare const GetBannerQueryParams: z.ZodObject<{
    orderBy: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        updatedAt: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        isActive: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        order: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    }, "strip", z.ZodTypeAny, {
        createdAt?: "asc" | "desc" | undefined;
        updatedAt?: "asc" | "desc" | undefined;
        isActive?: "asc" | "desc" | undefined;
        order?: "asc" | "desc" | undefined;
    }, {
        createdAt?: "asc" | "desc" | undefined;
        updatedAt?: "asc" | "desc" | undefined;
        isActive?: "asc" | "desc" | undefined;
        order?: "asc" | "desc" | undefined;
    }>>;
    where: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
    }, {
        name?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    orderBy?: {
        createdAt?: "asc" | "desc" | undefined;
        updatedAt?: "asc" | "desc" | undefined;
        isActive?: "asc" | "desc" | undefined;
        order?: "asc" | "desc" | undefined;
    } | undefined;
    where?: {
        name?: string | undefined;
    } | undefined;
}, {
    orderBy?: {
        createdAt?: "asc" | "desc" | undefined;
        updatedAt?: "asc" | "desc" | undefined;
        isActive?: "asc" | "desc" | undefined;
        order?: "asc" | "desc" | undefined;
    } | undefined;
    where?: {
        name?: string | undefined;
    } | undefined;
}>;
export type GetBannerQueryParams = z.infer<typeof GetBannerQueryParams>;
export declare const GetBannerResponse: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    isActive: z.ZodBoolean;
    imageUrl: z.ZodNullable<z.ZodString>;
    altText: z.ZodNullable<z.ZodString>;
    linkUrl: z.ZodNullable<z.ZodString>;
    order: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    imageUrl: string | null;
    altText: string | null;
    order: string;
    linkUrl: string | null;
}, {
    id: string;
    name: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    imageUrl: string | null;
    altText: string | null;
    order: string;
    linkUrl: string | null;
}>, "many">;
//# sourceMappingURL=query.d.ts.map