export * from './dto';
export declare const bannerContract: {
    getBanners: {
        query: import("zod").ZodObject<{
            orderBy: import("zod").ZodOptional<import("zod").ZodObject<{
                createdAt: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                updatedAt: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                isActive: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                order: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
            }, "strip", import("zod").ZodTypeAny, {
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
            where: import("zod").ZodOptional<import("zod").ZodObject<{
                name: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                name?: string | undefined;
            }, {
                name?: string | undefined;
            }>>;
        }, "strip", import("zod").ZodTypeAny, {
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
        responses: {
            200: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                createdAt: import("zod").ZodDate;
                updatedAt: import("zod").ZodDate;
                isActive: import("zod").ZodBoolean;
                imageUrl: import("zod").ZodNullable<import("zod").ZodString>;
                altText: import("zod").ZodNullable<import("zod").ZodString>;
                linkUrl: import("zod").ZodNullable<import("zod").ZodString>;
                order: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
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
        };
        method: "GET";
        path: string;
    };
};
//# sourceMappingURL=index.d.ts.map