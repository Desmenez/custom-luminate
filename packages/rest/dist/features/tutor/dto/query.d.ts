import { z } from 'zod';
export declare const GetTutorsResponse: z.ZodArray<z.ZodObject<{
    name: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
}, {
    id: string;
    name: string;
}>, "many">;
export type GetTutorsResponse = z.infer<typeof GetTutorsResponse>;
export declare const GetTutorInfoPathParams: z.ZodObject<{
    tutorId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tutorId: string;
}, {
    tutorId: string;
}>;
export type GetTutorInfoPathParams = z.infer<typeof GetTutorInfoPathParams>;
export declare const GetTutorInfoResponse: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    tutorIconUrl: z.ZodNullable<z.ZodString>;
    displayName: z.ZodNullable<z.ZodString>;
    experience: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    displayName: string | null;
    name: string;
    tutorIconUrl: string | null;
    experience: string | null;
}, {
    id: string;
    displayName: string | null;
    name: string;
    tutorIconUrl: string | null;
    experience: string | null;
}>;
export type GetTutorInfoResponse = z.infer<typeof GetTutorInfoResponse>;
export declare const GetStudentGraphQuery: z.ZodObject<{
    days: z.ZodUnion<[z.ZodLiteral<1>, z.ZodLiteral<7>, z.ZodLiteral<30>]>;
    endDate: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    endDate: Date;
    days: 30 | 1 | 7;
}, {
    endDate: Date;
    days: 30 | 1 | 7;
}>;
export type GetStudentGraphQuery = z.infer<typeof GetStudentGraphQuery>;
export declare const StudentGraphDataPoint: z.ZodObject<{
    date: z.ZodString;
    newStudents: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    date: string;
    newStudents: number;
}, {
    date: string;
    newStudents: number;
}>;
export type StudentGraphDataPoint = z.infer<typeof StudentGraphDataPoint>;
export declare const GetStudentGraphResponse: z.ZodObject<{
    startDate: z.ZodString;
    endDate: z.ZodString;
    newStudents: z.ZodNumber;
    newStudentsIncreasePercent: z.ZodNumber;
    totalStudents: z.ZodNumber;
    points: z.ZodArray<z.ZodObject<{
        date: z.ZodString;
        newStudents: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        date: string;
        newStudents: number;
    }, {
        date: string;
        newStudents: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    startDate: string;
    endDate: string;
    newStudents: number;
    newStudentsIncreasePercent: number;
    totalStudents: number;
    points: {
        date: string;
        newStudents: number;
    }[];
}, {
    startDate: string;
    endDate: string;
    newStudents: number;
    newStudentsIncreasePercent: number;
    totalStudents: number;
    points: {
        date: string;
        newStudents: number;
    }[];
}>;
export type GetStudentGraphResponse = z.infer<typeof GetStudentGraphResponse>;
export declare const TutorUpcomingSession: z.ZodObject<{
    courseId: z.ZodString;
    id: z.ZodString;
    name: z.ZodString;
    startTime: z.ZodString;
    endTime: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    startTime: string;
    endTime: string;
    courseId: string;
}, {
    id: string;
    name: string;
    startTime: string;
    endTime: string;
    courseId: string;
}>;
export type TutorUpcomingSession = z.infer<typeof TutorUpcomingSession>;
export declare const GetUpcomingSessionsResponse: z.ZodArray<z.ZodObject<{
    courseId: z.ZodString;
    id: z.ZodString;
    name: z.ZodString;
    startTime: z.ZodString;
    endTime: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    startTime: string;
    endTime: string;
    courseId: string;
}, {
    id: string;
    name: string;
    startTime: string;
    endTime: string;
    courseId: string;
}>, "many">;
export type GetUpcomingSessionsResponse = z.infer<typeof GetUpcomingSessionsResponse>;
export declare const GetTutorCardsQueryOrderBy: z.ZodObject<{
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
export type GetTutorCardsQueryOrderBy = z.infer<typeof GetTutorCardsQueryOrderBy>;
export declare const GetTutorCardsQueryWhere: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    tutorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    tutorIds?: string[] | undefined;
}, {
    name?: string | undefined;
    tutorIds?: string[] | undefined;
}>;
export type GetTutorCardsQueryWhere = z.infer<typeof GetTutorCardsQueryWhere>;
export declare const GetTutorCardsQueries: z.ZodObject<{
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
        tutorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        tutorIds?: string[] | undefined;
    }, {
        name?: string | undefined;
        tutorIds?: string[] | undefined;
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
        tutorIds?: string[] | undefined;
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
        tutorIds?: string[] | undefined;
    } | undefined;
    skip?: number | undefined;
    take?: number | undefined;
}>;
export type GetTutorCardsQueries = z.infer<typeof GetTutorCardsQueries>;
export declare const GetTutorCardParamID: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type GetTutorCardParamID = z.infer<typeof GetTutorCardParamID>;
export declare const GetTutorCardParams: z.ZodObject<{
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
export type GetTutorCardParams = z.infer<typeof GetTutorCardParams>;
export declare const CountTutorCardQueryWhere: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    tutorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    tutorIds?: string[] | undefined;
    isActive?: boolean | undefined;
}, {
    name?: string | undefined;
    tutorIds?: string[] | undefined;
    isActive?: boolean | undefined;
}>;
export type CountTutorCardQueryWhere = z.infer<typeof CountTutorCardQueryWhere>;
export declare const CountTutorCardQueries: z.ZodObject<{
    where: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        tutorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        isActive: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
        tutorIds?: string[] | undefined;
        isActive?: boolean | undefined;
    }, {
        name?: string | undefined;
        tutorIds?: string[] | undefined;
        isActive?: boolean | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    where?: {
        name?: string | undefined;
        tutorIds?: string[] | undefined;
        isActive?: boolean | undefined;
    } | undefined;
}, {
    where?: {
        name?: string | undefined;
        tutorIds?: string[] | undefined;
        isActive?: boolean | undefined;
    } | undefined;
}>;
export type CountTutorCardQueries = z.infer<typeof CountTutorCardQueries>;
export declare const GetTutorCardUploadUrlQueries: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type GetTutorCardUploadUrlQueries = z.infer<typeof GetTutorCardUploadUrlQueries>;
export declare const TutorCardFileUploadDetails: z.ZodObject<{
    url: z.ZodString;
    token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
    token: string;
}, {
    url: string;
    token: string;
}>;
export type TutorCardFileUploadDetails = z.infer<typeof TutorCardFileUploadDetails>;
export declare const TutorCardEnhance: z.ZodIntersection<z.ZodObject<Omit<{
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
    tutorName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    tutorName: string;
}, {
    tutorName: string;
}>>;
export type TutorCardEnhance = z.infer<typeof TutorCardEnhance>;
export declare const GetTutorCardsResponse: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
    ok: z.ZodLiteral<true>;
    value: z.ZodIntersection<z.ZodObject<{
        result: z.ZodArray<z.ZodIntersection<z.ZodObject<Omit<{
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
            tutorName: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            tutorName: string;
        }, {
            tutorName: string;
        }>>, "many">;
    }, "strip", z.ZodTypeAny, {
        result: ({
            id: string;
            tutorId: string;
            isActive: boolean;
            imageUrl: string | null;
            altText: string | null;
            order: number | null;
        } & {
            tutorName: string;
        })[];
    }, {
        result: ({
            id: string;
            tutorId: string;
            isActive: boolean;
            imageUrl: string | null;
            altText: string | null;
            order: number | null;
        } & {
            tutorName: string;
        })[];
    }>, z.ZodObject<{
        total: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        total: number;
    }, {
        total: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    value: {
        result: ({
            id: string;
            tutorId: string;
            isActive: boolean;
            imageUrl: string | null;
            altText: string | null;
            order: number | null;
        } & {
            tutorName: string;
        })[];
    } & {
        total: number;
    };
    ok: true;
}, {
    value: {
        result: ({
            id: string;
            tutorId: string;
            isActive: boolean;
            imageUrl: string | null;
            altText: string | null;
            order: number | null;
        } & {
            tutorName: string;
        })[];
    } & {
        total: number;
    };
    ok: true;
}>, z.ZodObject<{
    ok: z.ZodLiteral<false>;
    error: z.ZodDiscriminatedUnion<"code", [z.ZodObject<{
        code: z.ZodLiteral<"TUTOR_CARD_NOT_FOUND">;
    }, "strip", z.ZodTypeAny, {
        code: "TUTOR_CARD_NOT_FOUND";
    }, {
        code: "TUTOR_CARD_NOT_FOUND";
    }>]>;
}, "strip", z.ZodTypeAny, {
    error: {
        code: "TUTOR_CARD_NOT_FOUND";
    };
    ok: false;
}, {
    error: {
        code: "TUTOR_CARD_NOT_FOUND";
    };
    ok: false;
}>]>;
export type GetTutorCardsResponse = z.infer<typeof GetTutorCardsResponse>;
export declare const GetTutorCardResponse: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
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
        tutorName: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        tutorName: string;
    }, {
        tutorName: string;
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
        tutorName: string;
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
        tutorName: string;
    };
    ok: true;
}>, z.ZodObject<{
    ok: z.ZodLiteral<false>;
    error: z.ZodDiscriminatedUnion<"code", [z.ZodObject<{
        code: z.ZodLiteral<"TUTOR_CARD_NOT_FOUND">;
    }, "strip", z.ZodTypeAny, {
        code: "TUTOR_CARD_NOT_FOUND";
    }, {
        code: "TUTOR_CARD_NOT_FOUND";
    }>]>;
}, "strip", z.ZodTypeAny, {
    error: {
        code: "TUTOR_CARD_NOT_FOUND";
    };
    ok: false;
}, {
    error: {
        code: "TUTOR_CARD_NOT_FOUND";
    };
    ok: false;
}>]>;
export type GetTutorCardResponse = z.infer<typeof GetTutorCardResponse>;
export declare const CountTutorCardResponse: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
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
        code: z.ZodLiteral<"TUTOR_CARD_NOT_FOUND">;
    }, "strip", z.ZodTypeAny, {
        code: "TUTOR_CARD_NOT_FOUND";
    }, {
        code: "TUTOR_CARD_NOT_FOUND";
    }>]>;
}, "strip", z.ZodTypeAny, {
    error: {
        code: "TUTOR_CARD_NOT_FOUND";
    };
    ok: false;
}, {
    error: {
        code: "TUTOR_CARD_NOT_FOUND";
    };
    ok: false;
}>]>;
export type CountTutorCardResponse = z.infer<typeof CountTutorCardResponse>;
export declare const GetTutorCardUploadUrlResponse: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
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
        code: z.ZodLiteral<"TUTOR_CARD_NOT_FOUND">;
    }, "strip", z.ZodTypeAny, {
        code: "TUTOR_CARD_NOT_FOUND";
    }, {
        code: "TUTOR_CARD_NOT_FOUND";
    }>]>;
}, "strip", z.ZodTypeAny, {
    error: {
        code: "TUTOR_CARD_NOT_FOUND";
    };
    ok: false;
}, {
    error: {
        code: "TUTOR_CARD_NOT_FOUND";
    };
    ok: false;
}>]>;
export type GetTutorCardUploadUrlResponse = z.infer<typeof GetTutorCardUploadUrlResponse>;
//# sourceMappingURL=query.d.ts.map