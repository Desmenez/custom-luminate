import { z } from 'zod';
export declare const GetBasePlansWhereInput: z.ZodObject<{
    ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    isActive: z.ZodOptional<z.ZodBoolean>;
    subjectId: z.ZodOptional<z.ZodString>;
    basePlanTypes: z.ZodOptional<z.ZodArray<z.ZodNativeEnum<{
        FOUNDATION: "FOUNDATION";
        CORE: "CORE";
        ENTRANCE: "ENTRANCE";
        ONET: "ONET";
        POSN: "POSN";
    }>, "many">>;
    basePlanStyle: z.ZodOptional<z.ZodNativeEnum<{
        FOUNDATION: "FOUNDATION";
        CORE: "CORE";
        ENTRANCE: "ENTRANCE";
        ONET: "ONET";
        POSN: "POSN";
    }>>;
    basePlanClassType: z.ZodOptional<z.ZodNativeEnum<{
        FOUNDATION: "FOUNDATION";
        CORE: "CORE";
        ENTRANCE: "ENTRANCE";
        ONET: "ONET";
        POSN: "POSN";
    }>>;
    basePlanStudyMajor: z.ZodOptional<z.ZodNativeEnum<{
        FOUNDATION: "FOUNDATION";
        CORE: "CORE";
        ENTRANCE: "ENTRANCE";
        ONET: "ONET";
        POSN: "POSN";
    }>>;
    basePlanStudyYear: z.ZodOptional<z.ZodNativeEnum<{
        FOUNDATION: "FOUNDATION";
        CORE: "CORE";
        ENTRANCE: "ENTRANCE";
        ONET: "ONET";
        POSN: "POSN";
    }>>;
    basePlanStudySemester: z.ZodOptional<z.ZodNativeEnum<{
        FOUNDATION: "FOUNDATION";
        CORE: "CORE";
        ENTRANCE: "ENTRANCE";
        ONET: "ONET";
        POSN: "POSN";
    }>>;
    school: z.ZodOptional<z.ZodString>;
    basePlanTcasExamSubjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    tutorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    grades: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    semester: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    subjectIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    isSuggested: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
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
}>;
export type GetBasePlansWhereInput = z.infer<typeof GetBasePlansWhereInput>;
export declare const GetBasePlansOrderByInput: z.ZodObject<{
    name: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    description: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    isActive: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    createdAt: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    updatedAt: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    deletedAt: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
}, "strip", z.ZodTypeAny, {
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
}>;
export type GetBasePlansOrderByInput = z.infer<typeof GetBasePlansOrderByInput>;
export declare const GetBasePlansQueryParams: z.ZodObject<{
    where: z.ZodOptional<z.ZodObject<{
        ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        name: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        isActive: z.ZodOptional<z.ZodBoolean>;
        subjectId: z.ZodOptional<z.ZodString>;
        basePlanTypes: z.ZodOptional<z.ZodArray<z.ZodNativeEnum<{
            FOUNDATION: "FOUNDATION";
            CORE: "CORE";
            ENTRANCE: "ENTRANCE";
            ONET: "ONET";
            POSN: "POSN";
        }>, "many">>;
        basePlanStyle: z.ZodOptional<z.ZodNativeEnum<{
            FOUNDATION: "FOUNDATION";
            CORE: "CORE";
            ENTRANCE: "ENTRANCE";
            ONET: "ONET";
            POSN: "POSN";
        }>>;
        basePlanClassType: z.ZodOptional<z.ZodNativeEnum<{
            FOUNDATION: "FOUNDATION";
            CORE: "CORE";
            ENTRANCE: "ENTRANCE";
            ONET: "ONET";
            POSN: "POSN";
        }>>;
        basePlanStudyMajor: z.ZodOptional<z.ZodNativeEnum<{
            FOUNDATION: "FOUNDATION";
            CORE: "CORE";
            ENTRANCE: "ENTRANCE";
            ONET: "ONET";
            POSN: "POSN";
        }>>;
        basePlanStudyYear: z.ZodOptional<z.ZodNativeEnum<{
            FOUNDATION: "FOUNDATION";
            CORE: "CORE";
            ENTRANCE: "ENTRANCE";
            ONET: "ONET";
            POSN: "POSN";
        }>>;
        basePlanStudySemester: z.ZodOptional<z.ZodNativeEnum<{
            FOUNDATION: "FOUNDATION";
            CORE: "CORE";
            ENTRANCE: "ENTRANCE";
            ONET: "ONET";
            POSN: "POSN";
        }>>;
        school: z.ZodOptional<z.ZodString>;
        basePlanTcasExamSubjects: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        tutorIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        grades: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        semester: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
        subjectIds: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        isSuggested: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
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
    orderBy: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        description: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        isActive: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        createdAt: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        updatedAt: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
        deletedAt: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    }, "strip", z.ZodTypeAny, {
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
}, "strip", z.ZodTypeAny, {
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
export type GetBasePlansQueryParams = z.infer<typeof GetBasePlansQueryParams>;
export declare const GetBasePlansResponse: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    subject: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    subject: {
        id: string;
        name: string;
    };
}, {
    id: string;
    name: string;
    subject: {
        id: string;
        name: string;
    };
}>, "many">;
export type GetBasePlansResponse = z.infer<typeof GetBasePlansResponse>;
//# sourceMappingURL=query.d.ts.map