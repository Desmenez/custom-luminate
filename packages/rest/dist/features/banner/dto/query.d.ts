import { z } from 'zod';
export declare const GetBannersQueryOrderBy: z.ZodObject<{
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
export type GetBannersQueryOrderBy = z.infer<typeof GetBannersQueryOrderBy>;
export declare const GetBannersQuryWhere: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
}, {
    name?: string | undefined;
}>;
export type GetBannersQuryWhere = z.infer<typeof GetBannersQuryWhere>;
export declare const GetBannersQueries: z.ZodObject<{
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
    skip: z.ZodOptional<z.ZodNumber>;
    take: z.ZodOptional<z.ZodNumber>;
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
    skip?: number | undefined;
    take?: number | undefined;
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
    skip?: number | undefined;
    take?: number | undefined;
}>;
export type GetBannersQueries = z.infer<typeof GetBannersQueries>;
export declare const GetBannerParamID: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type GetBannerParamID = z.infer<typeof GetBannerParamID>;
export declare const GetBannerParams: z.ZodObject<{
    where: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
}, "strip", z.ZodTypeAny, {
    where: {
        id: string;
    };
}, {
    where: {
        id: string;
    };
}>;
export type GetBannerParams = z.infer<typeof GetBannerParams>;
export declare const CountBannerInput: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    isActive?: boolean | undefined;
}, {
    name?: string | undefined;
    isActive?: boolean | undefined;
}>;
export type CountBannerInput = z.infer<typeof CountBannerInput>;
export declare const CountBannerQueries: z.ZodObject<{
    where: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        isActive: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        isActive?: boolean | undefined;
    }, {
        name?: string | undefined;
        isActive?: boolean | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    where?: {
        name?: string | undefined;
        isActive?: boolean | undefined;
    } | undefined;
}, {
    where?: {
        name?: string | undefined;
        isActive?: boolean | undefined;
    } | undefined;
}>;
export type CountBannerQueries = z.infer<typeof CountBannerQueries>;
export declare const GetBannerUploadUrlQueries: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type GetBannerUploadUrlQueries = z.infer<typeof GetBannerUploadUrlQueries>;
export declare const BannerFileUploadDetails: z.ZodObject<{
    url: z.ZodString;
    token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
    token: string;
}, {
    url: string;
    token: string;
}>;
export type BannerFileUploadDetails = z.infer<typeof BannerFileUploadDetails>;
export declare const BannerEnhance: z.ZodObject<Omit<{
    id: z.ZodString;
    name: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    isActive: z.ZodBoolean;
    linkType: z.ZodNativeEnum<{
        NO_LINK: "NO_LINK";
        WEB_LINK: "WEB_LINK";
        COURSE_LINK: "COURSE_LINK";
    }>;
    webLink: z.ZodNullable<z.ZodString>;
    courseLink: z.ZodNullable<z.ZodString>;
    imageUrl: z.ZodNullable<z.ZodString>;
    altText: z.ZodNullable<z.ZodString>;
    order: z.ZodNullable<z.ZodNumber>;
}, "createdAt" | "updatedAt">, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    isActive: boolean;
    imageUrl: string | null;
    altText: string | null;
    order: number | null;
    linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
    webLink: string | null;
    courseLink: string | null;
}, {
    id: string;
    name: string;
    isActive: boolean;
    imageUrl: string | null;
    altText: string | null;
    order: number | null;
    linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
    webLink: string | null;
    courseLink: string | null;
}>;
export type BannerEnhance = z.infer<typeof BannerEnhance>;
export declare const GetBannersResponse: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
    ok: z.ZodLiteral<true>;
    value: z.ZodIntersection<z.ZodObject<{
        result: z.ZodArray<z.ZodObject<Omit<{
            id: z.ZodString;
            name: z.ZodString;
            createdAt: z.ZodDate;
            updatedAt: z.ZodDate;
            isActive: z.ZodBoolean;
            linkType: z.ZodNativeEnum<{
                NO_LINK: "NO_LINK";
                WEB_LINK: "WEB_LINK";
                COURSE_LINK: "COURSE_LINK";
            }>;
            webLink: z.ZodNullable<z.ZodString>;
            courseLink: z.ZodNullable<z.ZodString>;
            imageUrl: z.ZodNullable<z.ZodString>;
            altText: z.ZodNullable<z.ZodString>;
            order: z.ZodNullable<z.ZodNumber>;
        }, "createdAt" | "updatedAt">, "strip", z.ZodTypeAny, {
            id: string;
            name: string;
            isActive: boolean;
            imageUrl: string | null;
            altText: string | null;
            order: number | null;
            linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
            webLink: string | null;
            courseLink: string | null;
        }, {
            id: string;
            name: string;
            isActive: boolean;
            imageUrl: string | null;
            altText: string | null;
            order: number | null;
            linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
            webLink: string | null;
            courseLink: string | null;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        result: {
            id: string;
            name: string;
            isActive: boolean;
            imageUrl: string | null;
            altText: string | null;
            order: number | null;
            linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
            webLink: string | null;
            courseLink: string | null;
        }[];
    }, {
        result: {
            id: string;
            name: string;
            isActive: boolean;
            imageUrl: string | null;
            altText: string | null;
            order: number | null;
            linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
            webLink: string | null;
            courseLink: string | null;
        }[];
    }>, z.ZodObject<{
        total: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        total: number;
    }, {
        total: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    value: {
        result: {
            id: string;
            name: string;
            isActive: boolean;
            imageUrl: string | null;
            altText: string | null;
            order: number | null;
            linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
            webLink: string | null;
            courseLink: string | null;
        }[];
    } & {
        total: number;
    };
    ok: true;
}, {
    value: {
        result: {
            id: string;
            name: string;
            isActive: boolean;
            imageUrl: string | null;
            altText: string | null;
            order: number | null;
            linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
            webLink: string | null;
            courseLink: string | null;
        }[];
    } & {
        total: number;
    };
    ok: true;
}>, z.ZodObject<{
    ok: z.ZodLiteral<false>;
    error: z.ZodDiscriminatedUnion<"code", [z.ZodObject<{
        code: z.ZodLiteral<"BANNER_NOT_FOUND">;
    }, "strip", z.ZodTypeAny, {
        code: "BANNER_NOT_FOUND";
    }, {
        code: "BANNER_NOT_FOUND";
    }>]>;
}, "strip", z.ZodTypeAny, {
    error: {
        code: "BANNER_NOT_FOUND";
    };
    ok: false;
}, {
    error: {
        code: "BANNER_NOT_FOUND";
    };
    ok: false;
}>]>;
export type GetBannersResponse = z.infer<typeof GetBannersResponse>;
export declare const GetBannerResponse: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
    ok: z.ZodLiteral<true>;
    value: z.ZodObject<Omit<{
        id: z.ZodString;
        name: z.ZodString;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
        isActive: z.ZodBoolean;
        linkType: z.ZodNativeEnum<{
            NO_LINK: "NO_LINK";
            WEB_LINK: "WEB_LINK";
            COURSE_LINK: "COURSE_LINK";
        }>;
        webLink: z.ZodNullable<z.ZodString>;
        courseLink: z.ZodNullable<z.ZodString>;
        imageUrl: z.ZodNullable<z.ZodString>;
        altText: z.ZodNullable<z.ZodString>;
        order: z.ZodNullable<z.ZodNumber>;
    }, "createdAt" | "updatedAt">, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        isActive: boolean;
        imageUrl: string | null;
        altText: string | null;
        order: number | null;
        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
        webLink: string | null;
        courseLink: string | null;
    }, {
        id: string;
        name: string;
        isActive: boolean;
        imageUrl: string | null;
        altText: string | null;
        order: number | null;
        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
        webLink: string | null;
        courseLink: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    value: {
        id: string;
        name: string;
        isActive: boolean;
        imageUrl: string | null;
        altText: string | null;
        order: number | null;
        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
        webLink: string | null;
        courseLink: string | null;
    };
    ok: true;
}, {
    value: {
        id: string;
        name: string;
        isActive: boolean;
        imageUrl: string | null;
        altText: string | null;
        order: number | null;
        linkType: "NO_LINK" | "WEB_LINK" | "COURSE_LINK";
        webLink: string | null;
        courseLink: string | null;
    };
    ok: true;
}>, z.ZodObject<{
    ok: z.ZodLiteral<false>;
    error: z.ZodDiscriminatedUnion<"code", [z.ZodObject<{
        code: z.ZodLiteral<"BANNER_NOT_FOUND">;
    }, "strip", z.ZodTypeAny, {
        code: "BANNER_NOT_FOUND";
    }, {
        code: "BANNER_NOT_FOUND";
    }>]>;
}, "strip", z.ZodTypeAny, {
    error: {
        code: "BANNER_NOT_FOUND";
    };
    ok: false;
}, {
    error: {
        code: "BANNER_NOT_FOUND";
    };
    ok: false;
}>]>;
export type GetBannerResponse = z.infer<typeof GetBannerResponse>;
export declare const CountBannerResponse: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
    ok: z.ZodLiteral<true>;
    value: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    value: number;
    ok: true;
}, {
    value: number;
    ok: true;
}>, z.ZodObject<{
    ok: z.ZodLiteral<false>;
    error: z.ZodDiscriminatedUnion<"code", [z.ZodObject<{
        code: z.ZodLiteral<"BANNER_NOT_FOUND">;
    }, "strip", z.ZodTypeAny, {
        code: "BANNER_NOT_FOUND";
    }, {
        code: "BANNER_NOT_FOUND";
    }>]>;
}, "strip", z.ZodTypeAny, {
    error: {
        code: "BANNER_NOT_FOUND";
    };
    ok: false;
}, {
    error: {
        code: "BANNER_NOT_FOUND";
    };
    ok: false;
}>]>;
export type CountBannerResponse = z.infer<typeof BannerFileUploadDetails>;
export declare const GetBannerUploadUrlResponse: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
    ok: z.ZodLiteral<true>;
    value: z.ZodObject<{
        url: z.ZodString;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        token: string;
    }, {
        url: string;
        token: string;
    }>;
}, "strip", z.ZodTypeAny, {
    value: {
        url: string;
        token: string;
    };
    ok: true;
}, {
    value: {
        url: string;
        token: string;
    };
    ok: true;
}>, z.ZodObject<{
    ok: z.ZodLiteral<false>;
    error: z.ZodDiscriminatedUnion<"code", [z.ZodObject<{
        code: z.ZodLiteral<"BANNER_NOT_FOUND">;
    }, "strip", z.ZodTypeAny, {
        code: "BANNER_NOT_FOUND";
    }, {
        code: "BANNER_NOT_FOUND";
    }>]>;
}, "strip", z.ZodTypeAny, {
    error: {
        code: "BANNER_NOT_FOUND";
    };
    ok: false;
}, {
    error: {
        code: "BANNER_NOT_FOUND";
    };
    ok: false;
}>]>;
export type GetBannerUploadUrlResponse = z.infer<typeof GetBannerUploadUrlResponse>;
//# sourceMappingURL=query.d.ts.map