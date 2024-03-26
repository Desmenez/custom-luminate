import { z } from 'zod';
export declare const QuizTextSchema: {
    type: "TEXT";
    config: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    solution: z.ZodObject<{
        correctAnswer: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        correctAnswer: string;
    }, {
        correctAnswer: string;
    }>;
    answer: z.ZodObject<{
        answer: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        answer: string;
    }, {
        answer: string;
    }>;
};
export declare const QuizChoiceSchema: {
    type: "CHOICE";
    config: z.ZodObject<{
        numberOfChoice: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        numberOfChoice: number;
    }, {
        numberOfChoice: number;
    }>;
    solution: z.ZodObject<{
        correctChoice: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        correctChoice: number;
    }, {
        correctChoice: number;
    }>;
    answer: z.ZodObject<{
        choice: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        choice: number;
    }, {
        choice: number;
    }>;
};
export declare const QuizSchemas: {
    TEXT: {
        type: "TEXT";
        config: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        solution: z.ZodObject<{
            correctAnswer: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            correctAnswer: string;
        }, {
            correctAnswer: string;
        }>;
        answer: z.ZodObject<{
            answer: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            answer: string;
        }, {
            answer: string;
        }>;
    };
    CHOICE: {
        type: "CHOICE";
        config: z.ZodObject<{
            numberOfChoice: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            numberOfChoice: number;
        }, {
            numberOfChoice: number;
        }>;
        solution: z.ZodObject<{
            correctChoice: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            correctChoice: number;
        }, {
            correctChoice: number;
        }>;
        answer: z.ZodObject<{
            choice: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            choice: number;
        }, {
            choice: number;
        }>;
    };
};
export declare function parseQuizConfig<TType extends keyof typeof QuizSchemas>(type: TType, payload: unknown): z.TypeOf<{
    TEXT: {
        type: "TEXT";
        config: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        solution: z.ZodObject<{
            correctAnswer: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            correctAnswer: string;
        }, {
            correctAnswer: string;
        }>;
        answer: z.ZodObject<{
            answer: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            answer: string;
        }, {
            answer: string;
        }>;
    };
    CHOICE: {
        type: "CHOICE";
        config: z.ZodObject<{
            numberOfChoice: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            numberOfChoice: number;
        }, {
            numberOfChoice: number;
        }>;
        solution: z.ZodObject<{
            correctChoice: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            correctChoice: number;
        }, {
            correctChoice: number;
        }>;
        answer: z.ZodObject<{
            choice: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            choice: number;
        }, {
            choice: number;
        }>;
    };
}[TType]["config"]>;
export declare function parseQuizSolution<TType extends keyof typeof QuizSchemas>(type: TType, payload: unknown): z.TypeOf<{
    TEXT: {
        type: "TEXT";
        config: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        solution: z.ZodObject<{
            correctAnswer: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            correctAnswer: string;
        }, {
            correctAnswer: string;
        }>;
        answer: z.ZodObject<{
            answer: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            answer: string;
        }, {
            answer: string;
        }>;
    };
    CHOICE: {
        type: "CHOICE";
        config: z.ZodObject<{
            numberOfChoice: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            numberOfChoice: number;
        }, {
            numberOfChoice: number;
        }>;
        solution: z.ZodObject<{
            correctChoice: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            correctChoice: number;
        }, {
            correctChoice: number;
        }>;
        answer: z.ZodObject<{
            choice: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            choice: number;
        }, {
            choice: number;
        }>;
    };
}[TType]["solution"]>;
export declare function parseQuizAnswer<TType extends keyof typeof QuizSchemas>(type: TType, payload: unknown): z.TypeOf<{
    TEXT: {
        type: "TEXT";
        config: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
        solution: z.ZodObject<{
            correctAnswer: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            correctAnswer: string;
        }, {
            correctAnswer: string;
        }>;
        answer: z.ZodObject<{
            answer: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            answer: string;
        }, {
            answer: string;
        }>;
    };
    CHOICE: {
        type: "CHOICE";
        config: z.ZodObject<{
            numberOfChoice: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            numberOfChoice: number;
        }, {
            numberOfChoice: number;
        }>;
        solution: z.ZodObject<{
            correctChoice: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            correctChoice: number;
        }, {
            correctChoice: number;
        }>;
        answer: z.ZodObject<{
            choice: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            choice: number;
        }, {
            choice: number;
        }>;
    };
}[TType]["answer"]>;
//# sourceMappingURL=payload.d.ts.map