import { z } from 'zod';
export declare const LinkType: z.ZodEnum<["NO_LINK", "WEB_LINK", "COURSE_LINK"]>;
export type LinkType = z.infer<typeof LinkType>;
export declare const CreateBannerBodies: z.ZodObject<{
    name: z.ZodString;
    isActive: z.ZodBoolean;
    order: z.ZodOptional<z.ZodNumber>;
    webLink: z.ZodOptional<z.ZodString>;
    courseLink: z.ZodOptional<z.ZodString>;
    linkType: z.ZodOptional<z.ZodEnum<["NO_LINK", "WEB_LINK", "COURSE_LINK"]>>;
    altText: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    isActive: boolean;
    order?: number | undefined;
    webLink?: string | undefined;
    courseLink?: string | undefined;
    linkType?: "NO_LINK" | "WEB_LINK" | "COURSE_LINK" | undefined;
    altText?: string | undefined;
}, {
    name: string;
    isActive: boolean;
    order?: number | undefined;
    webLink?: string | undefined;
    courseLink?: string | undefined;
    linkType?: "NO_LINK" | "WEB_LINK" | "COURSE_LINK" | undefined;
    altText?: string | undefined;
}>;
export type CreateBannerBodies = z.infer<typeof CreateBannerBodies>;
export declare const DeleteBannerBodies: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type DeleteBannerBodies = z.infer<typeof DeleteBannerBodies>;
export declare const UpdateBannerBodies: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    order: z.ZodOptional<z.ZodNumber>;
    webLink: z.ZodOptional<z.ZodString>;
    courseLink: z.ZodOptional<z.ZodString>;
    linkType: z.ZodOptional<z.ZodEnum<["NO_LINK", "WEB_LINK", "COURSE_LINK"]>>;
    altText: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name?: string | undefined;
    isActive?: boolean | undefined;
    order?: number | undefined;
    webLink?: string | undefined;
    courseLink?: string | undefined;
    linkType?: "NO_LINK" | "WEB_LINK" | "COURSE_LINK" | undefined;
    altText?: string | undefined;
}, {
    id: string;
    name?: string | undefined;
    isActive?: boolean | undefined;
    order?: number | undefined;
    webLink?: string | undefined;
    courseLink?: string | undefined;
    linkType?: "NO_LINK" | "WEB_LINK" | "COURSE_LINK" | undefined;
    altText?: string | undefined;
}>;
export type UpdateBannerBodies = z.infer<typeof UpdateBannerBodies>;
export declare const OnUploadBannerCompleteBodies: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type OnUploadBannerCompleteBodies = z.infer<typeof OnUploadBannerCompleteBodies>;
export declare const CreateBannerResponse: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
    ok: z.ZodLiteral<true>;
    value: z.ZodIntersection<z.ZodObject<Omit<{
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
    }>, z.ZodObject<{
        getBannerUploadUrl: z.ZodObject<{
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
        getBannerUploadUrl: {
            url: string;
            token: string;
        };
    }, {
        getBannerUploadUrl: {
            url: string;
            token: string;
        };
    }>>;
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
    } & {
        getBannerUploadUrl: {
            url: string;
            token: string;
        };
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
    } & {
        getBannerUploadUrl: {
            url: string;
            token: string;
        };
    };
    ok: true;
}>, z.ZodObject<{
    ok: z.ZodLiteral<false>;
    error: z.ZodDiscriminatedUnion<"code", [z.ZodObject<{
        code: z.ZodLiteral<"NO_BANNER_CREATED">;
    }, "strip", z.ZodTypeAny, {
        code: "NO_BANNER_CREATED";
    }, {
        code: "NO_BANNER_CREATED";
    }>]>;
}, "strip", z.ZodTypeAny, {
    error: {
        code: "NO_BANNER_CREATED";
    };
    ok: false;
}, {
    error: {
        code: "NO_BANNER_CREATED";
    };
    ok: false;
}>]>;
export type CreateBannerResponse = z.infer<typeof CreateBannerResponse>;
export declare const UpdateBannerResponse: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
    ok: z.ZodLiteral<true>;
    value: z.ZodIntersection<z.ZodObject<Omit<{
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
    }>, z.ZodObject<{
        getBannerUploadUrl: z.ZodObject<{
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
        getBannerUploadUrl: {
            url: string;
            token: string;
        };
    }, {
        getBannerUploadUrl: {
            url: string;
            token: string;
        };
    }>>;
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
    } & {
        getBannerUploadUrl: {
            url: string;
            token: string;
        };
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
    } & {
        getBannerUploadUrl: {
            url: string;
            token: string;
        };
    };
    ok: true;
}>, z.ZodObject<{
    ok: z.ZodLiteral<false>;
    error: z.ZodDiscriminatedUnion<"code", [z.ZodObject<{
        code: z.ZodLiteral<"NO_BANNER_UPDATED">;
    }, "strip", z.ZodTypeAny, {
        code: "NO_BANNER_UPDATED";
    }, {
        code: "NO_BANNER_UPDATED";
    }>]>;
}, "strip", z.ZodTypeAny, {
    error: {
        code: "NO_BANNER_UPDATED";
    };
    ok: false;
}, {
    error: {
        code: "NO_BANNER_UPDATED";
    };
    ok: false;
}>]>;
export type UpdateBannerResponse = z.infer<typeof UpdateBannerResponse>;
export declare const DeleteBannerResponse: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
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
        code: z.ZodLiteral<"NO_BANNER_DELETED">;
    }, "strip", z.ZodTypeAny, {
        code: "NO_BANNER_DELETED";
    }, {
        code: "NO_BANNER_DELETED";
    }>]>;
}, "strip", z.ZodTypeAny, {
    error: {
        code: "NO_BANNER_DELETED";
    };
    ok: false;
}, {
    error: {
        code: "NO_BANNER_DELETED";
    };
    ok: false;
}>]>;
export type DeleteBannerResponse = z.infer<typeof DeleteBannerResponse>;
export declare const OnUploadBannerCompleteResponse: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
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
        code: z.ZodLiteral<"NO_BANNER_UPDATED">;
    }, "strip", z.ZodTypeAny, {
        code: "NO_BANNER_UPDATED";
    }, {
        code: "NO_BANNER_UPDATED";
    }>]>;
}, "strip", z.ZodTypeAny, {
    error: {
        code: "NO_BANNER_UPDATED";
    };
    ok: false;
}, {
    error: {
        code: "NO_BANNER_UPDATED";
    };
    ok: false;
}>]>;
export type OnUploadBannerCompleteResponse = z.infer<typeof OnUploadBannerCompleteResponse>;
//# sourceMappingURL=mutation.d.ts.map