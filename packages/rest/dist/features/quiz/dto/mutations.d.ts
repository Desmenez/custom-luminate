import { z } from 'zod';
export declare const CreateQuizInput: z.ZodObject<Pick<{
    id: z.ZodString;
    liveSessionId: z.ZodString;
    type: z.ZodNativeEnum<{
        CHOICE: "CHOICE";
        TEXT: "TEXT";
    }>;
    config: z.ZodUnknown;
    solution: z.ZodUnknown;
    isAcceptingAnswers: z.ZodBoolean;
    createdAt: z.ZodDate;
}, "type" | "liveSessionId" | "config" | "solution" | "isAcceptingAnswers">, "strip", z.ZodTypeAny, {
    type: "CHOICE" | "TEXT";
    liveSessionId: string;
    isAcceptingAnswers: boolean;
    config?: unknown;
    solution?: unknown;
}, {
    type: "CHOICE" | "TEXT";
    liveSessionId: string;
    isAcceptingAnswers: boolean;
    config?: unknown;
    solution?: unknown;
}>;
export type CreateQuizInput = z.infer<typeof CreateQuizInput>;
export declare const UpdateQuizInput: z.ZodObject<Pick<{
    id: z.ZodString;
    liveSessionId: z.ZodString;
    type: z.ZodNativeEnum<{
        CHOICE: "CHOICE";
        TEXT: "TEXT";
    }>;
    config: z.ZodUnknown;
    solution: z.ZodUnknown;
    isAcceptingAnswers: z.ZodBoolean;
    createdAt: z.ZodDate;
}, "isAcceptingAnswers">, "strip", z.ZodTypeAny, {
    isAcceptingAnswers: boolean;
}, {
    isAcceptingAnswers: boolean;
}>;
export type UpdateQuizInput = z.infer<typeof UpdateQuizInput>;
export declare const DeleteQuizInput: z.ZodObject<{
    quizId: z.ZodString;
    liveSessionId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    liveSessionId: string;
    quizId: string;
}, {
    liveSessionId: string;
    quizId: string;
}>;
export type DeleteQuizInput = z.infer<typeof DeleteQuizInput>;
export declare const RespondQuizInput: z.ZodObject<{
    answer: z.ZodUnknown;
}, "strip", z.ZodTypeAny, {
    answer?: unknown;
}, {
    answer?: unknown;
}>;
export type RespondQuizInput = z.infer<typeof RespondQuizInput>;
//# sourceMappingURL=mutations.d.ts.map