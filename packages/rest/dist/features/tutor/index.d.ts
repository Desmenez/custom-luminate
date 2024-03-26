export * from './dto';
export declare const tutorContract: {
    getTutors: {
        responses: {
            200: import("zod").ZodArray<import("zod").ZodNullable<import("zod").ZodObject<{
                name: import("zod").ZodString;
                id: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
                name: string;
            }, {
                id: string;
                name: string;
            }>>, "many">;
        };
        method: "GET";
        path: "";
    };
    getTutorInfo: {
        pathParams: import("zod").ZodObject<{
            tutorId: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            tutorId: string;
        }, {
            tutorId: string;
        }>;
        responses: {
            200: import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                tutorIconUrl: import("zod").ZodNullable<import("zod").ZodString>;
                displayName: import("zod").ZodNullable<import("zod").ZodString>;
                experience: import("zod").ZodNullable<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
                name: string;
                displayName: string | null;
                tutorIconUrl: string | null;
                experience: string | null;
            }, {
                id: string;
                name: string;
                displayName: string | null;
                tutorIconUrl: string | null;
                experience: string | null;
            }>;
        };
        method: "GET";
        path: "/:tutorId";
    };
    getTutorCards: {
        responses: {
            200: import("zod").ZodArray<import("zod").ZodObject<Omit<{
                id: import("zod").ZodString;
                tutorId: import("zod").ZodString;
                imageUrl: import("zod").ZodString;
                altText: import("zod").ZodNullable<import("zod").ZodString>;
                order: import("zod").ZodString;
                createdAt: import("zod").ZodDate;
                updatedAt: import("zod").ZodDate;
            }, "createdAt" | "updatedAt">, "strip", import("zod").ZodTypeAny, {
                id: string;
                tutorId: string;
                imageUrl: string;
                altText: string | null;
                order: string;
            }, {
                id: string;
                tutorId: string;
                imageUrl: string;
                altText: string | null;
                order: string;
            }>, "many">;
        };
        method: "GET";
        path: "/card";
    };
    getStudentGraph: {
        query: import("zod").ZodObject<{
            days: import("zod").ZodUnion<[import("zod").ZodLiteral<1>, import("zod").ZodLiteral<7>, import("zod").ZodLiteral<30>]>;
            endDate: import("zod").ZodDate;
        }, "strip", import("zod").ZodTypeAny, {
            endDate: Date;
            days: 30 | 1 | 7;
        }, {
            endDate: Date;
            days: 30 | 1 | 7;
        }>;
        responses: {
            200: import("zod").ZodObject<{
                startDate: import("zod").ZodString;
                endDate: import("zod").ZodString;
                newStudents: import("zod").ZodNumber;
                newStudentsIncreasePercent: import("zod").ZodNumber;
                totalStudents: import("zod").ZodNumber;
                points: import("zod").ZodArray<import("zod").ZodObject<{
                    date: import("zod").ZodString;
                    newStudents: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    date: string;
                    newStudents: number;
                }, {
                    date: string;
                    newStudents: number;
                }>, "many">;
            }, "strip", import("zod").ZodTypeAny, {
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
        };
        method: "GET";
        path: "/student-graph";
    };
    getUpcomingSessions: {
        responses: {
            200: import("zod").ZodArray<import("zod").ZodObject<{
                courseId: import("zod").ZodString;
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                startTime: import("zod").ZodString;
                endTime: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
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
        };
        method: "GET";
        path: "/upcoming-sessions";
    };
};
//# sourceMappingURL=index.d.ts.map