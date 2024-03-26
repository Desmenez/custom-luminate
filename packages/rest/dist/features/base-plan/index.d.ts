export * from './dto';
export declare const basePlanContract: {
    getIsCanAccessViaLiveCourse: {
        query: import("zod").ZodObject<{
            id: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        responses: {
            200: import("zod").ZodObject<{
                canAccess: import("zod").ZodBoolean;
            }, "strip", import("zod").ZodTypeAny, {
                canAccess: boolean;
            }, {
                canAccess: boolean;
            }>;
        };
        method: "GET";
        path: "/is-can-access-via-live-course";
    };
    getBasePlans: {
        query: import("zod").ZodObject<{
            where: import("zod").ZodOptional<import("zod").ZodObject<{
                ids: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                name: import("zod").ZodOptional<import("zod").ZodString>;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                isActive: import("zod").ZodOptional<import("zod").ZodBoolean>;
                subjectId: import("zod").ZodOptional<import("zod").ZodString>;
                basePlanTypes: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodNativeEnum<{
                    FOUNDATION: "FOUNDATION";
                    CORE: "CORE";
                    ENTRANCE: "ENTRANCE";
                    ONET: "ONET";
                    POSN: "POSN";
                }>, "many">>;
                basePlanStyle: import("zod").ZodOptional<import("zod").ZodNativeEnum<{
                    FOUNDATION: "FOUNDATION";
                    CORE: "CORE";
                    ENTRANCE: "ENTRANCE";
                    ONET: "ONET";
                    POSN: "POSN";
                }>>;
                basePlanClassType: import("zod").ZodOptional<import("zod").ZodNativeEnum<{
                    FOUNDATION: "FOUNDATION";
                    CORE: "CORE";
                    ENTRANCE: "ENTRANCE";
                    ONET: "ONET";
                    POSN: "POSN";
                }>>;
                basePlanStudyMajor: import("zod").ZodOptional<import("zod").ZodNativeEnum<{
                    FOUNDATION: "FOUNDATION";
                    CORE: "CORE";
                    ENTRANCE: "ENTRANCE";
                    ONET: "ONET";
                    POSN: "POSN";
                }>>;
                basePlanStudyYear: import("zod").ZodOptional<import("zod").ZodNativeEnum<{
                    FOUNDATION: "FOUNDATION";
                    CORE: "CORE";
                    ENTRANCE: "ENTRANCE";
                    ONET: "ONET";
                    POSN: "POSN";
                }>>;
                basePlanStudySemester: import("zod").ZodOptional<import("zod").ZodNativeEnum<{
                    FOUNDATION: "FOUNDATION";
                    CORE: "CORE";
                    ENTRANCE: "ENTRANCE";
                    ONET: "ONET";
                    POSN: "POSN";
                }>>;
                school: import("zod").ZodOptional<import("zod").ZodString>;
                basePlanTcasExamSubjects: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                tutorIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                grades: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodNumber, "many">>;
                semester: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodNumber, "many">>;
                subjectIds: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
                isSuggested: import("zod").ZodOptional<import("zod").ZodBoolean>;
            }, "strip", import("zod").ZodTypeAny, {
                ids?: string[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                isActive?: boolean | undefined;
                subjectId?: string | undefined;
                basePlanTypes?: ("FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN")[] | undefined;
                basePlanStyle?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                basePlanClassType?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                basePlanStudyMajor?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                basePlanStudyYear?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                basePlanStudySemester?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                school?: string | undefined;
                basePlanTcasExamSubjects?: string[] | undefined;
                tutorIds?: string[] | undefined;
                grades?: number[] | undefined;
                semester?: number[] | undefined;
                subjectIds?: string[] | undefined;
                isSuggested?: boolean | undefined;
            }, {
                ids?: string[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                isActive?: boolean | undefined;
                subjectId?: string | undefined;
                basePlanTypes?: ("FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN")[] | undefined;
                basePlanStyle?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                basePlanClassType?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                basePlanStudyMajor?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                basePlanStudyYear?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                basePlanStudySemester?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                school?: string | undefined;
                basePlanTcasExamSubjects?: string[] | undefined;
                tutorIds?: string[] | undefined;
                grades?: number[] | undefined;
                semester?: number[] | undefined;
                subjectIds?: string[] | undefined;
                isSuggested?: boolean | undefined;
            }>>;
            orderBy: import("zod").ZodOptional<import("zod").ZodObject<{
                name: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                description: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                isActive: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                createdAt: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                updatedAt: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
                deletedAt: import("zod").ZodOptional<import("zod").ZodEnum<["asc", "desc"]>>;
            }, "strip", import("zod").ZodTypeAny, {
                name?: "asc" | "desc" | undefined;
                description?: "asc" | "desc" | undefined;
                isActive?: "asc" | "desc" | undefined;
                createdAt?: "asc" | "desc" | undefined;
                updatedAt?: "asc" | "desc" | undefined;
                deletedAt?: "asc" | "desc" | undefined;
            }, {
                name?: "asc" | "desc" | undefined;
                description?: "asc" | "desc" | undefined;
                isActive?: "asc" | "desc" | undefined;
                createdAt?: "asc" | "desc" | undefined;
                updatedAt?: "asc" | "desc" | undefined;
                deletedAt?: "asc" | "desc" | undefined;
            }>>;
        }, "strip", import("zod").ZodTypeAny, {
            where?: {
                ids?: string[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                isActive?: boolean | undefined;
                subjectId?: string | undefined;
                basePlanTypes?: ("FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN")[] | undefined;
                basePlanStyle?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                basePlanClassType?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                basePlanStudyMajor?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                basePlanStudyYear?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                basePlanStudySemester?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                school?: string | undefined;
                basePlanTcasExamSubjects?: string[] | undefined;
                tutorIds?: string[] | undefined;
                grades?: number[] | undefined;
                semester?: number[] | undefined;
                subjectIds?: string[] | undefined;
                isSuggested?: boolean | undefined;
            } | undefined;
            orderBy?: {
                name?: "asc" | "desc" | undefined;
                description?: "asc" | "desc" | undefined;
                isActive?: "asc" | "desc" | undefined;
                createdAt?: "asc" | "desc" | undefined;
                updatedAt?: "asc" | "desc" | undefined;
                deletedAt?: "asc" | "desc" | undefined;
            } | undefined;
        }, {
            where?: {
                ids?: string[] | undefined;
                name?: string | undefined;
                description?: string | undefined;
                isActive?: boolean | undefined;
                subjectId?: string | undefined;
                basePlanTypes?: ("FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN")[] | undefined;
                basePlanStyle?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                basePlanClassType?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                basePlanStudyMajor?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                basePlanStudyYear?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                basePlanStudySemester?: "FOUNDATION" | "CORE" | "ENTRANCE" | "ONET" | "POSN" | undefined;
                school?: string | undefined;
                basePlanTcasExamSubjects?: string[] | undefined;
                tutorIds?: string[] | undefined;
                grades?: number[] | undefined;
                semester?: number[] | undefined;
                subjectIds?: string[] | undefined;
                isSuggested?: boolean | undefined;
            } | undefined;
            orderBy?: {
                name?: "asc" | "desc" | undefined;
                description?: "asc" | "desc" | undefined;
                isActive?: "asc" | "desc" | undefined;
                createdAt?: "asc" | "desc" | undefined;
                updatedAt?: "asc" | "desc" | undefined;
                deletedAt?: "asc" | "desc" | undefined;
            } | undefined;
        }>;
        responses: {
            200: import("zod").ZodArray<import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                subject: import("zod").ZodObject<{
                    code: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
                    code: string;
                }, {
                    code: string;
                }>;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
                name: string;
                subject: {
                    code: string;
                };
            }, {
                id: string;
                name: string;
                subject: {
                    code: string;
                };
            }>, "many">;
        };
        method: "GET";
        path: "";
    };
};
//# sourceMappingURL=index.d.ts.map