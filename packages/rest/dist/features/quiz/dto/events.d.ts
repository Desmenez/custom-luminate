import { z } from 'zod';
export declare const QuizServerStudentEventType: {
    readonly QUIZ_UPDATE: "SERVER_QUIZ_UPDATE";
    readonly SHOW_RANK: "SERVER_SHOW_RANK";
    readonly INCOMING_MESSAGE: "SERVER_INCOMING_MESSAGE";
};
export type QuizServerStudentEventType = (typeof QuizServerStudentEventType)[keyof typeof QuizServerStudentEventType];
export declare const QuizServerStudentQuizUpdate: z.ZodObject<{
    type: z.ZodLiteral<"SERVER_QUIZ_UPDATE">;
    liveSession: z.ZodObject<{
        endTime: z.ZodString;
        isQuizClosed: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        endTime: string;
        isQuizClosed: boolean;
    }, {
        endTime: string;
        isQuizClosed: boolean;
    }>;
    updates: z.ZodArray<z.ZodObject<{
        quizId: z.ZodString;
        quiz: z.ZodNullable<z.ZodObject<{
            type: z.ZodNativeEnum<{
                CHOICE: "CHOICE";
                TEXT: "TEXT";
            }>;
            id: z.ZodString;
            createdAt: z.ZodDate;
            liveSessionId: z.ZodString;
            config: z.ZodUnknown;
            solution: z.ZodUnknown;
            isAcceptingAnswers: z.ZodBoolean;
            studentAnswers: z.ZodArray<z.ZodObject<{
                liveSessionId: z.ZodString;
                studentId: z.ZodString;
                liveSessionQuizId: z.ZodString;
                answer: z.ZodType<(string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[], z.ZodTypeDef, (string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]>;
                correct: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }, {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        }, {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        }>>;
    }, "strip", z.ZodTypeAny, {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        } | null;
    }, {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        } | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "SERVER_QUIZ_UPDATE";
    liveSession: {
        endTime: string;
        isQuizClosed: boolean;
    };
    updates: {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        } | null;
    }[];
}, {
    type: "SERVER_QUIZ_UPDATE";
    liveSession: {
        endTime: string;
        isQuizClosed: boolean;
    };
    updates: {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        } | null;
    }[];
}>;
export type QuizServerStudentQuizUpdate = z.infer<typeof QuizServerStudentQuizUpdate>;
export declare const QuizServerStudentShowRank: z.ZodObject<{
    type: z.ZodLiteral<"SERVER_SHOW_RANK">;
    scores: z.ZodArray<z.ZodObject<{
        studentId: z.ZodString;
        score: z.ZodNumber;
        rank: z.ZodNumber;
        student: z.ZodNullable<z.ZodObject<{
            displayName: z.ZodString;
            profileUrl: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            profileUrl: string | null;
            displayName: string;
        }, {
            profileUrl: string | null;
            displayName: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        studentId: string;
        score: number;
        rank: number;
        student: {
            profileUrl: string | null;
            displayName: string;
        } | null;
    }, {
        studentId: string;
        score: number;
        rank: number;
        student: {
            profileUrl: string | null;
            displayName: string;
        } | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "SERVER_SHOW_RANK";
    scores: {
        studentId: string;
        score: number;
        rank: number;
        student: {
            profileUrl: string | null;
            displayName: string;
        } | null;
    }[];
}, {
    type: "SERVER_SHOW_RANK";
    scores: {
        studentId: string;
        score: number;
        rank: number;
        student: {
            profileUrl: string | null;
            displayName: string;
        } | null;
    }[];
}>;
export type QuizServerStudentShowRank = z.infer<typeof QuizServerStudentShowRank>;
export declare const QuizServerStudentIncomingMessage: z.ZodObject<{
    type: z.ZodLiteral<"SERVER_INCOMING_MESSAGE">;
    update: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        message: z.ZodString;
        avatar: z.ZodNullable<z.ZodString>;
        timestamp: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    }, {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "SERVER_INCOMING_MESSAGE";
    update: {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    };
}, {
    type: "SERVER_INCOMING_MESSAGE";
    update: {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    };
}>;
export type QuizServerStudentIncomingMessage = z.infer<typeof QuizServerStudentIncomingMessage>;
export declare const QuizServerStudentEvent: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"SERVER_QUIZ_UPDATE">;
    liveSession: z.ZodObject<{
        endTime: z.ZodString;
        isQuizClosed: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        endTime: string;
        isQuizClosed: boolean;
    }, {
        endTime: string;
        isQuizClosed: boolean;
    }>;
    updates: z.ZodArray<z.ZodObject<{
        quizId: z.ZodString;
        quiz: z.ZodNullable<z.ZodObject<{
            type: z.ZodNativeEnum<{
                CHOICE: "CHOICE";
                TEXT: "TEXT";
            }>;
            id: z.ZodString;
            createdAt: z.ZodDate;
            liveSessionId: z.ZodString;
            config: z.ZodUnknown;
            solution: z.ZodUnknown;
            isAcceptingAnswers: z.ZodBoolean;
            studentAnswers: z.ZodArray<z.ZodObject<{
                liveSessionId: z.ZodString;
                studentId: z.ZodString;
                liveSessionQuizId: z.ZodString;
                answer: z.ZodType<(string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[], z.ZodTypeDef, (string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]>;
                correct: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }, {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        }, {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        }>>;
    }, "strip", z.ZodTypeAny, {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        } | null;
    }, {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        } | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "SERVER_QUIZ_UPDATE";
    liveSession: {
        endTime: string;
        isQuizClosed: boolean;
    };
    updates: {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        } | null;
    }[];
}, {
    type: "SERVER_QUIZ_UPDATE";
    liveSession: {
        endTime: string;
        isQuizClosed: boolean;
    };
    updates: {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        } | null;
    }[];
}>, z.ZodObject<{
    type: z.ZodLiteral<"SERVER_SHOW_RANK">;
    scores: z.ZodArray<z.ZodObject<{
        studentId: z.ZodString;
        score: z.ZodNumber;
        rank: z.ZodNumber;
        student: z.ZodNullable<z.ZodObject<{
            displayName: z.ZodString;
            profileUrl: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            profileUrl: string | null;
            displayName: string;
        }, {
            profileUrl: string | null;
            displayName: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        studentId: string;
        score: number;
        rank: number;
        student: {
            profileUrl: string | null;
            displayName: string;
        } | null;
    }, {
        studentId: string;
        score: number;
        rank: number;
        student: {
            profileUrl: string | null;
            displayName: string;
        } | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "SERVER_SHOW_RANK";
    scores: {
        studentId: string;
        score: number;
        rank: number;
        student: {
            profileUrl: string | null;
            displayName: string;
        } | null;
    }[];
}, {
    type: "SERVER_SHOW_RANK";
    scores: {
        studentId: string;
        score: number;
        rank: number;
        student: {
            profileUrl: string | null;
            displayName: string;
        } | null;
    }[];
}>, z.ZodObject<{
    type: z.ZodLiteral<"SERVER_INCOMING_MESSAGE">;
    update: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        message: z.ZodString;
        avatar: z.ZodNullable<z.ZodString>;
        timestamp: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    }, {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "SERVER_INCOMING_MESSAGE";
    update: {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    };
}, {
    type: "SERVER_INCOMING_MESSAGE";
    update: {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    };
}>]>;
export type QuizServerStudentEvent = z.infer<typeof QuizServerStudentEvent>;
export declare const QuizClientStudentEventType: {
    readonly QUIZ_UPDATE: "CLIENT_QUIZ_UPDATE";
    readonly SHOW_RANK: "CLIENT_SHOW_RANK";
    readonly INCOMING_MESSAGE: "CLIENT_INCOMING_MESSAGE";
};
export type QuizClientStudentEventType = (typeof QuizClientStudentEventType)[keyof typeof QuizClientStudentEventType];
export declare const QuizClientStudentQuizUpdate: z.ZodObject<{
    type: z.ZodLiteral<"CLIENT_QUIZ_UPDATE">;
    updates: z.ZodArray<z.ZodObject<{
        quizId: z.ZodString;
        quiz: z.ZodNullable<z.ZodObject<{
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
        }>>;
    }, "strip", z.ZodTypeAny, {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            isMyAnswerCorrect: boolean | null;
            config?: unknown;
            solution?: unknown;
            myAnswer?: unknown;
        } | null;
    }, {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            isMyAnswerCorrect: boolean | null;
            config?: unknown;
            solution?: unknown;
            myAnswer?: unknown;
        } | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "CLIENT_QUIZ_UPDATE";
    updates: {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            isMyAnswerCorrect: boolean | null;
            config?: unknown;
            solution?: unknown;
            myAnswer?: unknown;
        } | null;
    }[];
}, {
    type: "CLIENT_QUIZ_UPDATE";
    updates: {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            isMyAnswerCorrect: boolean | null;
            config?: unknown;
            solution?: unknown;
            myAnswer?: unknown;
        } | null;
    }[];
}>;
export type QuizClientStudentQuizUpdate = z.infer<typeof QuizClientStudentQuizUpdate>;
export declare const QuizClientStudentShowRank: z.ZodObject<{
    type: z.ZodLiteral<"CLIENT_SHOW_RANK">;
    rank: z.ZodNumber;
    student: z.ZodNullable<z.ZodObject<{
        displayName: z.ZodString;
        profileUrl: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        profileUrl: string | null;
        displayName: string;
    }, {
        profileUrl: string | null;
        displayName: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "CLIENT_SHOW_RANK";
    rank: number;
    student: {
        profileUrl: string | null;
        displayName: string;
    } | null;
}, {
    type: "CLIENT_SHOW_RANK";
    rank: number;
    student: {
        profileUrl: string | null;
        displayName: string;
    } | null;
}>;
export type QuizClientStudentShowRank = z.infer<typeof QuizClientStudentShowRank>;
export declare const QuizClientStudentIncomingMessage: z.ZodObject<{
    type: z.ZodLiteral<"CLIENT_INCOMING_MESSAGE">;
    update: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        message: z.ZodString;
        avatar: z.ZodNullable<z.ZodString>;
        timestamp: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    }, {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "CLIENT_INCOMING_MESSAGE";
    update: {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    };
}, {
    type: "CLIENT_INCOMING_MESSAGE";
    update: {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    };
}>;
export type QuizClientStudentIncomingMessage = z.infer<typeof QuizClientStudentIncomingMessage>;
export declare const QuizClientStudentEvent: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"CLIENT_QUIZ_UPDATE">;
    updates: z.ZodArray<z.ZodObject<{
        quizId: z.ZodString;
        quiz: z.ZodNullable<z.ZodObject<{
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
        }>>;
    }, "strip", z.ZodTypeAny, {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            isMyAnswerCorrect: boolean | null;
            config?: unknown;
            solution?: unknown;
            myAnswer?: unknown;
        } | null;
    }, {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            isMyAnswerCorrect: boolean | null;
            config?: unknown;
            solution?: unknown;
            myAnswer?: unknown;
        } | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "CLIENT_QUIZ_UPDATE";
    updates: {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            isMyAnswerCorrect: boolean | null;
            config?: unknown;
            solution?: unknown;
            myAnswer?: unknown;
        } | null;
    }[];
}, {
    type: "CLIENT_QUIZ_UPDATE";
    updates: {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            isMyAnswerCorrect: boolean | null;
            config?: unknown;
            solution?: unknown;
            myAnswer?: unknown;
        } | null;
    }[];
}>, z.ZodObject<{
    type: z.ZodLiteral<"CLIENT_SHOW_RANK">;
    rank: z.ZodNumber;
    student: z.ZodNullable<z.ZodObject<{
        displayName: z.ZodString;
        profileUrl: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        profileUrl: string | null;
        displayName: string;
    }, {
        profileUrl: string | null;
        displayName: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "CLIENT_SHOW_RANK";
    rank: number;
    student: {
        profileUrl: string | null;
        displayName: string;
    } | null;
}, {
    type: "CLIENT_SHOW_RANK";
    rank: number;
    student: {
        profileUrl: string | null;
        displayName: string;
    } | null;
}>, z.ZodObject<{
    type: z.ZodLiteral<"CLIENT_INCOMING_MESSAGE">;
    update: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        message: z.ZodString;
        avatar: z.ZodNullable<z.ZodString>;
        timestamp: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    }, {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "CLIENT_INCOMING_MESSAGE";
    update: {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    };
}, {
    type: "CLIENT_INCOMING_MESSAGE";
    update: {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    };
}>]>;
export type QuizClientStudentEvent = z.infer<typeof QuizClientStudentEvent>;
export declare const QuizTutorEventType: {
    readonly LEADERBOARD_UPDATE: "LEADERBOARD_UPDATE";
    readonly QUIZ_UPDATE: "QUIZ_UPDATE";
    readonly INCOMING_MESSAGE: "INCOMING_MESSAGE";
};
export type QuizTutorEventType = (typeof QuizTutorEventType)[keyof typeof QuizTutorEventType];
export declare const QuizTutorLeaderboardUpdate: z.ZodObject<{
    type: z.ZodLiteral<"LEADERBOARD_UPDATE">;
    scores: z.ZodArray<z.ZodObject<{
        studentId: z.ZodString;
        score: z.ZodNumber;
        rank: z.ZodNumber;
        student: z.ZodNullable<z.ZodObject<{
            displayName: z.ZodString;
            profileUrl: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            profileUrl: string | null;
            displayName: string;
        }, {
            profileUrl: string | null;
            displayName: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        studentId: string;
        score: number;
        rank: number;
        student: {
            profileUrl: string | null;
            displayName: string;
        } | null;
    }, {
        studentId: string;
        score: number;
        rank: number;
        student: {
            profileUrl: string | null;
            displayName: string;
        } | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "LEADERBOARD_UPDATE";
    scores: {
        studentId: string;
        score: number;
        rank: number;
        student: {
            profileUrl: string | null;
            displayName: string;
        } | null;
    }[];
}, {
    type: "LEADERBOARD_UPDATE";
    scores: {
        studentId: string;
        score: number;
        rank: number;
        student: {
            profileUrl: string | null;
            displayName: string;
        } | null;
    }[];
}>;
export type QuizTutorLeaderboardUpdate = z.infer<typeof QuizTutorLeaderboardUpdate>;
export declare const QuizTutorQuizUpdate: z.ZodObject<{
    type: z.ZodLiteral<"QUIZ_UPDATE">;
    updates: z.ZodArray<z.ZodObject<{
        quizId: z.ZodString;
        quiz: z.ZodNullable<z.ZodObject<{
            type: z.ZodNativeEnum<{
                CHOICE: "CHOICE";
                TEXT: "TEXT";
            }>;
            id: z.ZodString;
            createdAt: z.ZodDate;
            liveSessionId: z.ZodString;
            config: z.ZodUnknown;
            solution: z.ZodUnknown;
            isAcceptingAnswers: z.ZodBoolean;
            studentAnswers: z.ZodArray<z.ZodObject<{
                liveSessionId: z.ZodString;
                studentId: z.ZodString;
                liveSessionQuizId: z.ZodString;
                answer: z.ZodType<(string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[], z.ZodTypeDef, (string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]>;
                correct: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }, {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        }, {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        }>>;
    }, "strip", z.ZodTypeAny, {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        } | null;
    }, {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        } | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "QUIZ_UPDATE";
    updates: {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        } | null;
    }[];
}, {
    type: "QUIZ_UPDATE";
    updates: {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        } | null;
    }[];
}>;
export type QuizTutorQuizUpdate = z.infer<typeof QuizTutorQuizUpdate>;
export declare const QuizTutorIncomingMessage: z.ZodObject<{
    type: z.ZodLiteral<"INCOMING_MESSAGE">;
    update: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        message: z.ZodString;
        avatar: z.ZodNullable<z.ZodString>;
        timestamp: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    }, {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "INCOMING_MESSAGE";
    update: {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    };
}, {
    type: "INCOMING_MESSAGE";
    update: {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    };
}>;
export type QuizTutorIncomingMessage = z.infer<typeof QuizTutorIncomingMessage>;
export declare const QuizTutorEvent: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"LEADERBOARD_UPDATE">;
    scores: z.ZodArray<z.ZodObject<{
        studentId: z.ZodString;
        score: z.ZodNumber;
        rank: z.ZodNumber;
        student: z.ZodNullable<z.ZodObject<{
            displayName: z.ZodString;
            profileUrl: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            profileUrl: string | null;
            displayName: string;
        }, {
            profileUrl: string | null;
            displayName: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        studentId: string;
        score: number;
        rank: number;
        student: {
            profileUrl: string | null;
            displayName: string;
        } | null;
    }, {
        studentId: string;
        score: number;
        rank: number;
        student: {
            profileUrl: string | null;
            displayName: string;
        } | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "LEADERBOARD_UPDATE";
    scores: {
        studentId: string;
        score: number;
        rank: number;
        student: {
            profileUrl: string | null;
            displayName: string;
        } | null;
    }[];
}, {
    type: "LEADERBOARD_UPDATE";
    scores: {
        studentId: string;
        score: number;
        rank: number;
        student: {
            profileUrl: string | null;
            displayName: string;
        } | null;
    }[];
}>, z.ZodObject<{
    type: z.ZodLiteral<"QUIZ_UPDATE">;
    updates: z.ZodArray<z.ZodObject<{
        quizId: z.ZodString;
        quiz: z.ZodNullable<z.ZodObject<{
            type: z.ZodNativeEnum<{
                CHOICE: "CHOICE";
                TEXT: "TEXT";
            }>;
            id: z.ZodString;
            createdAt: z.ZodDate;
            liveSessionId: z.ZodString;
            config: z.ZodUnknown;
            solution: z.ZodUnknown;
            isAcceptingAnswers: z.ZodBoolean;
            studentAnswers: z.ZodArray<z.ZodObject<{
                liveSessionId: z.ZodString;
                studentId: z.ZodString;
                liveSessionQuizId: z.ZodString;
                answer: z.ZodType<(string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[], z.ZodTypeDef, (string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]>;
                correct: z.ZodBoolean;
            }, "strip", z.ZodTypeAny, {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }, {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        }, {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        }>>;
    }, "strip", z.ZodTypeAny, {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        } | null;
    }, {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        } | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "QUIZ_UPDATE";
    updates: {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        } | null;
    }[];
}, {
    type: "QUIZ_UPDATE";
    updates: {
        quizId: string;
        quiz: {
            type: "CHOICE" | "TEXT";
            id: string;
            createdAt: Date;
            liveSessionId: string;
            isAcceptingAnswers: boolean;
            studentAnswers: {
                answer: ((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) & (((string | number | boolean) | {
                    [key: string]: (string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[];
                } | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | ((string | number | boolean) | any | any)[])[])[])[])[])[])[])[])[])[])[]) | undefined);
                liveSessionId: string;
                studentId: string;
                liveSessionQuizId: string;
                correct: boolean;
            }[];
            config?: unknown;
            solution?: unknown;
        } | null;
    }[];
}>, z.ZodObject<{
    type: z.ZodLiteral<"INCOMING_MESSAGE">;
    update: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        message: z.ZodString;
        avatar: z.ZodNullable<z.ZodString>;
        timestamp: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    }, {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "INCOMING_MESSAGE";
    update: {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    };
}, {
    type: "INCOMING_MESSAGE";
    update: {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    };
}>]>;
export type QuizTutorEvent = z.infer<typeof QuizTutorEvent>;
//# sourceMappingURL=events.d.ts.map