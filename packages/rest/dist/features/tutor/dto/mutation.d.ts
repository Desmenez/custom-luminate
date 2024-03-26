import { z } from 'zod';
export declare const CreateTutorCardBodies: z.ZodObject<{
    tutorId: z.ZodString;
    isActive: z.ZodBoolean;
    order: z.ZodOptional<z.ZodNumber>;
    altText: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    tutorId: string;
    isActive: boolean;
    order?: number | undefined;
    altText?: string | undefined;
}, {
    tutorId: string;
    isActive: boolean;
    order?: number | undefined;
    altText?: string | undefined;
}>;
export type CreateTutorCardBodies = z.infer<typeof CreateTutorCardBodies>;
export declare const DeleteTutorCardBodies: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type DeleteTutorCardBodies = z.infer<typeof DeleteTutorCardBodies>;
export declare const UpdateTutorCardBodies: z.ZodObject<{
    id: z.ZodString;
    tutorId: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    order: z.ZodOptional<z.ZodNumber>;
    altText: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    tutorId?: string | undefined;
    isActive?: boolean | undefined;
    order?: number | undefined;
    altText?: string | undefined;
}, {
    id: string;
    tutorId?: string | undefined;
    isActive?: boolean | undefined;
    order?: number | undefined;
    altText?: string | undefined;
}>;
export type UpdateTutorCardBodies = z.infer<typeof UpdateTutorCardBodies>;
export declare const OnUploadTutorCardCompleteBodies: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type OnUploadTutorCardCompleteBodies = z.infer<typeof OnUploadTutorCardCompleteBodies>;
export declare const CreateTutorCardResponse: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
    ok: z.ZodLiteral<true>;
    value: z.ZodIntersection<z.ZodObject<Omit<{
        id: z.ZodString;
        isActive: z.ZodBoolean;
        tutorId: z.ZodString;
        imageUrl: z.ZodNullable<z.ZodString>;
        altText: z.ZodNullable<z.ZodString>;
        order: z.ZodNullable<z.ZodNumber>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, "createdAt" | "updatedAt">, "strip", z.ZodTypeAny, {
        id: string;
        tutorId: string;
        isActive: boolean;
        imageUrl: string | null;
        altText: string | null;
        order: number | null;
    }, {
        id: string;
        tutorId: string;
        isActive: boolean;
        imageUrl: string | null;
        altText: string | null;
        order: number | null;
    }>, z.ZodObject<{
        getTutorCardUploadUrl: z.ZodObject<{
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
        getTutorCardUploadUrl: {
            url: string;
            token: string;
        };
    }, {
        getTutorCardUploadUrl: {
            url: string;
            token: string;
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    value: {
        id: string;
        tutorId: string;
        isActive: boolean;
        imageUrl: string | null;
        altText: string | null;
        order: number | null;
    } & {
        getTutorCardUploadUrl: {
            url: string;
            token: string;
        };
    };
    ok: true;
}, {
    value: {
        id: string;
        tutorId: string;
        isActive: boolean;
        imageUrl: string | null;
        altText: string | null;
        order: number | null;
    } & {
        getTutorCardUploadUrl: {
            url: string;
            token: string;
        };
    };
    ok: true;
}>, z.ZodObject<{
    ok: z.ZodLiteral<false>;
    error: z.ZodDiscriminatedUnion<"code", [z.ZodObject<{
        code: z.ZodLiteral<"NO_TUTOR_CARD_CREATED">;
    }, "strip", z.ZodTypeAny, {
        code: "NO_TUTOR_CARD_CREATED";
    }, {
        code: "NO_TUTOR_CARD_CREATED";
    }>]>;
}, "strip", z.ZodTypeAny, {
    error: {
        code: "NO_TUTOR_CARD_CREATED";
    };
    ok: false;
}, {
    error: {
        code: "NO_TUTOR_CARD_CREATED";
    };
    ok: false;
}>]>;
export type CreateTutorCardResponse = z.infer<typeof CreateTutorCardResponse>;
export declare const UpdateTutorCardResponse: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
    ok: z.ZodLiteral<true>;
    value: z.ZodIntersection<z.ZodObject<Omit<{
        id: z.ZodString;
        isActive: z.ZodBoolean;
        tutorId: z.ZodString;
        imageUrl: z.ZodNullable<z.ZodString>;
        altText: z.ZodNullable<z.ZodString>;
        order: z.ZodNullable<z.ZodNumber>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, "createdAt" | "updatedAt">, "strip", z.ZodTypeAny, {
        id: string;
        tutorId: string;
        isActive: boolean;
        imageUrl: string | null;
        altText: string | null;
        order: number | null;
    }, {
        id: string;
        tutorId: string;
        isActive: boolean;
        imageUrl: string | null;
        altText: string | null;
        order: number | null;
    }>, z.ZodObject<{
        getTutorCardUploadUrl: z.ZodObject<{
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
        getTutorCardUploadUrl: {
            url: string;
            token: string;
        };
    }, {
        getTutorCardUploadUrl: {
            url: string;
            token: string;
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    value: {
        id: string;
        tutorId: string;
        isActive: boolean;
        imageUrl: string | null;
        altText: string | null;
        order: number | null;
    } & {
        getTutorCardUploadUrl: {
            url: string;
            token: string;
        };
    };
    ok: true;
}, {
    value: {
        id: string;
        tutorId: string;
        isActive: boolean;
        imageUrl: string | null;
        altText: string | null;
        order: number | null;
    } & {
        getTutorCardUploadUrl: {
            url: string;
            token: string;
        };
    };
    ok: true;
}>, z.ZodObject<{
    ok: z.ZodLiteral<false>;
    error: z.ZodDiscriminatedUnion<"code", [z.ZodObject<{
        code: z.ZodLiteral<"NO_TUTOR_CARD_UPDATED">;
    }, "strip", z.ZodTypeAny, {
        code: "NO_TUTOR_CARD_UPDATED";
    }, {
        code: "NO_TUTOR_CARD_UPDATED";
    }>]>;
}, "strip", z.ZodTypeAny, {
    error: {
        code: "NO_TUTOR_CARD_UPDATED";
    };
    ok: false;
}, {
    error: {
        code: "NO_TUTOR_CARD_UPDATED";
    };
    ok: false;
}>]>;
export type UpdateTutorCardResponse = z.infer<typeof UpdateTutorCardResponse>;
export declare const DeleteTutorCardResponse: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
    ok: z.ZodLiteral<true>;
    value: z.ZodObject<Omit<{
        id: z.ZodString;
        isActive: z.ZodBoolean;
        tutorId: z.ZodString;
        imageUrl: z.ZodNullable<z.ZodString>;
        altText: z.ZodNullable<z.ZodString>;
        order: z.ZodNullable<z.ZodNumber>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, "createdAt" | "updatedAt">, "strip", z.ZodTypeAny, {
        id: string;
        tutorId: string;
        isActive: boolean;
        imageUrl: string | null;
        altText: string | null;
        order: number | null;
    }, {
        id: string;
        tutorId: string;
        isActive: boolean;
        imageUrl: string | null;
        altText: string | null;
        order: number | null;
    }>;
}, "strip", z.ZodTypeAny, {
    value: {
        id: string;
        tutorId: string;
        isActive: boolean;
        imageUrl: string | null;
        altText: string | null;
        order: number | null;
    };
    ok: true;
}, {
    value: {
        id: string;
        tutorId: string;
        isActive: boolean;
        imageUrl: string | null;
        altText: string | null;
        order: number | null;
    };
    ok: true;
}>, z.ZodObject<{
    ok: z.ZodLiteral<false>;
    error: z.ZodDiscriminatedUnion<"code", [z.ZodObject<{
        code: z.ZodLiteral<"NO_TUTOR_CARD_DELETED">;
    }, "strip", z.ZodTypeAny, {
        code: "NO_TUTOR_CARD_DELETED";
    }, {
        code: "NO_TUTOR_CARD_DELETED";
    }>]>;
}, "strip", z.ZodTypeAny, {
    error: {
        code: "NO_TUTOR_CARD_DELETED";
    };
    ok: false;
}, {
    error: {
        code: "NO_TUTOR_CARD_DELETED";
    };
    ok: false;
}>]>;
export type DeleteTutorCardResponse = z.infer<typeof DeleteTutorCardResponse>;
export declare const OnUploadTutorCardCompleteResponse: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
    ok: z.ZodLiteral<true>;
    value: z.ZodObject<Omit<{
        id: z.ZodString;
        isActive: z.ZodBoolean;
        tutorId: z.ZodString;
        imageUrl: z.ZodNullable<z.ZodString>;
        altText: z.ZodNullable<z.ZodString>;
        order: z.ZodNullable<z.ZodNumber>;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, "createdAt" | "updatedAt">, "strip", z.ZodTypeAny, {
        id: string;
        tutorId: string;
        isActive: boolean;
        imageUrl: string | null;
        altText: string | null;
        order: number | null;
    }, {
        id: string;
        tutorId: string;
        isActive: boolean;
        imageUrl: string | null;
        altText: string | null;
        order: number | null;
    }>;
}, "strip", z.ZodTypeAny, {
    value: {
        id: string;
        tutorId: string;
        isActive: boolean;
        imageUrl: string | null;
        altText: string | null;
        order: number | null;
    };
    ok: true;
}, {
    value: {
        id: string;
        tutorId: string;
        isActive: boolean;
        imageUrl: string | null;
        altText: string | null;
        order: number | null;
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
export type OnUploadTutorCardCompleteResponse = z.infer<typeof OnUploadTutorCardCompleteResponse>;
//# sourceMappingURL=mutation.d.ts.map