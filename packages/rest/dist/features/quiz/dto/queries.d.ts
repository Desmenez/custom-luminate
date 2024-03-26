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
//# sourceMappingURL=queries.d.ts.map