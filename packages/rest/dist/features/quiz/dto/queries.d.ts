import { z } from 'zod';
export declare const LiveSessionQuizForStudent: z.ZodObject<{
    id: z.ZodString;
    liveSessionId: z.ZodString;
    type: z.ZodNativeEnum<{
        CHOICE: "CHOICE";
        TEXT: "TEXT";
    }>;
    config: z.ZodUnknown;
    solution: z.ZodNullable<z.ZodUnknown>;
    myAnswer: z.ZodNullable<z.ZodUnknown>;
    isAcceptingAnswers: z.ZodBoolean;
    isMyAnswerCorrect: z.ZodNullable<z.ZodBoolean>;
    createdAt: z.ZodDate;
}, "strip", z.ZodTypeAny, {
    type: "CHOICE" | "TEXT";
    id: string;
    createdAt: Date;
    liveSessionId: string;
    isAcceptingAnswers: boolean;
    isMyAnswerCorrect: boolean | null;
    config?: unknown;
    solution?: unknown;
    myAnswer?: unknown;
}, {
    type: "CHOICE" | "TEXT";
    id: string;
    createdAt: Date;
    liveSessionId: string;
    isAcceptingAnswers: boolean;
    isMyAnswerCorrect: boolean | null;
    config?: unknown;
    solution?: unknown;
    myAnswer?: unknown;
}>;
export type LiveSessionQuizForStudent = z.infer<typeof LiveSessionQuizForStudent>;
export declare const RespondQuizResponse: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
    ok: z.ZodLiteral<true>;
    value: z.ZodObject<{
        id: z.ZodString;
        liveSessionId: z.ZodString;
        type: z.ZodNativeEnum<{
            CHOICE: "CHOICE";
            TEXT: "TEXT";
        }>;
        config: z.ZodUnknown;
        solution: z.ZodNullable<z.ZodUnknown>;
        myAnswer: z.ZodNullable<z.ZodUnknown>;
        isAcceptingAnswers: z.ZodBoolean;
        isMyAnswerCorrect: z.ZodNullable<z.ZodBoolean>;
        createdAt: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        type: "CHOICE" | "TEXT";
        id: string;
        createdAt: Date;
        liveSessionId: string;
        isAcceptingAnswers: boolean;
        isMyAnswerCorrect: boolean | null;
        config?: unknown;
        solution?: unknown;
        myAnswer?: unknown;
    }, {
        type: "CHOICE" | "TEXT";
        id: string;
        createdAt: Date;
        liveSessionId: string;
        isAcceptingAnswers: boolean;
        isMyAnswerCorrect: boolean | null;
        config?: unknown;
        solution?: unknown;
        myAnswer?: unknown;
    }>;
}, "strip", z.ZodTypeAny, {
    value: {
        type: "CHOICE" | "TEXT";
        id: string;
        createdAt: Date;
        liveSessionId: string;
        isAcceptingAnswers: boolean;
        isMyAnswerCorrect: boolean | null;
        config?: unknown;
        solution?: unknown;
        myAnswer?: unknown;
    };
    ok: true;
}, {
    value: {
        type: "CHOICE" | "TEXT";
        id: string;
        createdAt: Date;
        liveSessionId: string;
        isAcceptingAnswers: boolean;
        isMyAnswerCorrect: boolean | null;
        config?: unknown;
        solution?: unknown;
        myAnswer?: unknown;
    };
    ok: true;
}>, z.ZodObject<{
    ok: z.ZodLiteral<false>;
    error: z.ZodDiscriminatedUnion<"code", [z.ZodObject<{
        code: z.ZodLiteral<"QUIZ_NOT_FOUND">;
    }, "strip", z.ZodTypeAny, {
        code: "QUIZ_NOT_FOUND";
    }, {
        code: "QUIZ_NOT_FOUND";
    }>, z.ZodObject<{
        code: z.ZodLiteral<"NOT_ACCEPTING_ANSWERS">;
    }, "strip", z.ZodTypeAny, {
        code: "NOT_ACCEPTING_ANSWERS";
    }, {
        code: "NOT_ACCEPTING_ANSWERS";
    }>, z.ZodObject<{
        code: z.ZodLiteral<"ALREADY_RESPONSED">;
    }, "strip", z.ZodTypeAny, {
        code: "ALREADY_RESPONSED";
    }, {
        code: "ALREADY_RESPONSED";
    }>]>;
}, "strip", z.ZodTypeAny, {
    error: {
        code: "QUIZ_NOT_FOUND";
    } | {
        code: "NOT_ACCEPTING_ANSWERS";
    } | {
        code: "ALREADY_RESPONSED";
    };
    ok: false;
}, {
    error: {
        code: "QUIZ_NOT_FOUND";
    } | {
        code: "NOT_ACCEPTING_ANSWERS";
    } | {
        code: "ALREADY_RESPONSED";
    };
    ok: false;
}>]>;
//# sourceMappingURL=queries.d.ts.map