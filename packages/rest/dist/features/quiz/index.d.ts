import { z } from 'zod';
export * from './dto';
export declare const quizContract: {
    getQuizzes: {
        query: z.ZodObject<{
            liveSessionId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveSessionId: string;
        }, {
            liveSessionId: string;
        }>;
        summary: "Get quizzes by live session id";
        responses: {
            200: z.ZodArray<z.ZodObject<{
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
            }, "strip", z.ZodTypeAny, {
                type: "CHOICE" | "TEXT";
                id: string;
                createdAt: Date;
                liveSessionId: string;
                isAcceptingAnswers: boolean;
                config?: unknown;
                solution?: unknown;
            }, {
                type: "CHOICE" | "TEXT";
                id: string;
                createdAt: Date;
                liveSessionId: string;
                isAcceptingAnswers: boolean;
                config?: unknown;
                solution?: unknown;
            }>, "many">;
        };
        method: "GET";
        path: "";
    };
    getQuizzesForStudent: {
        query: z.ZodObject<{
            liveSessionId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveSessionId: string;
        }, {
            liveSessionId: string;
        }>;
        summary: "Get quizzes for student";
        responses: {
            200: z.ZodArray<z.ZodObject<{
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
            }>, "many">;
        };
        method: "GET";
        path: "/for-student";
    };
    createQuiz: {
        summary: "Create live session quiz";
        responses: {
            200: z.ZodObject<{
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
            }, "strip", z.ZodTypeAny, {
                type: "CHOICE" | "TEXT";
                id: string;
                createdAt: Date;
                liveSessionId: string;
                isAcceptingAnswers: boolean;
                config?: unknown;
                solution?: unknown;
            }, {
                type: "CHOICE" | "TEXT";
                id: string;
                createdAt: Date;
                liveSessionId: string;
                isAcceptingAnswers: boolean;
                config?: unknown;
                solution?: unknown;
            }>;
        };
        method: "POST";
        body: z.ZodObject<Pick<{
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
        path: "";
    };
    updateQuiz: {
        summary: "Update quiz";
        responses: {
            200: z.ZodObject<{
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
            }, "strip", z.ZodTypeAny, {
                type: "CHOICE" | "TEXT";
                id: string;
                createdAt: Date;
                liveSessionId: string;
                isAcceptingAnswers: boolean;
                config?: unknown;
                solution?: unknown;
            }, {
                type: "CHOICE" | "TEXT";
                id: string;
                createdAt: Date;
                liveSessionId: string;
                isAcceptingAnswers: boolean;
                config?: unknown;
                solution?: unknown;
            }>;
            404: null;
        };
        method: "PATCH";
        body: z.ZodObject<Pick<{
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
        path: "/:quizId";
    };
    deleteQuiz: {
        summary: "Delete quiz";
        responses: {
            200: null;
        };
        method: "DELETE";
        body: null;
        path: "/:quizId";
    };
    respondQuiz: {
        summary: "Respond to quiz";
        responses: {
            200: z.ZodObject<{
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
        };
        method: "POST";
        body: z.ZodObject<{
            answer: z.ZodUnknown;
        }, "strip", z.ZodTypeAny, {
            answer?: unknown;
        }, {
            answer?: unknown;
        }>;
        path: "/:quizId/respond";
    };
    subscribeStudentEvents: {
        query: z.ZodObject<{
            liveSessionId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveSessionId: string;
        }, {
            liveSessionId: string;
        }>;
        responses: {
            200: z.ZodNever;
        };
        method: "GET";
        path: "/subscribe-student-events";
    };
    subscribeTutorEvents: {
        query: z.ZodObject<{
            liveSessionId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveSessionId: string;
        }, {
            liveSessionId: string;
        }>;
        responses: {
            200: z.ZodNever;
        };
        method: "GET";
        path: "/subscribe-tutor-events";
    };
    showStudentRank: {
        query: z.ZodObject<{
            liveSessionId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveSessionId: string;
        }, {
            liveSessionId: string;
        }>;
        responses: {
            200: null;
        };
        method: "POST";
        body: null;
        path: "/show-student-rank";
    };
    endAllQuiz: {
        query: z.ZodObject<{
            liveSessionId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            liveSessionId: string;
        }, {
            liveSessionId: string;
        }>;
        responses: {
            200: null;
        };
        method: "POST";
        body: null;
        path: "/end-all-quiz";
    };
};
//# sourceMappingURL=index.d.ts.map