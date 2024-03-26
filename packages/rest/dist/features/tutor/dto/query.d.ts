import { z } from 'zod';
export declare const GetTutorsResponse: z.ZodArray<z.ZodNullable<z.ZodObject<{
    name: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
}, {
    id: string;
    name: string;
}>>, "many">;
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
export type GetTutorInfoResponse = z.infer<typeof GetTutorInfoResponse>;
export declare const GetTutorCardsResponse: z.ZodArray<z.ZodObject<Omit<{
    id: z.ZodString;
    tutorId: z.ZodString;
    imageUrl: z.ZodString;
    altText: z.ZodNullable<z.ZodString>;
    order: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "createdAt" | "updatedAt">, "strip", z.ZodTypeAny, {
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
export type GetTutorCardsResponse = z.infer<typeof GetTutorCardsResponse>;
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
//# sourceMappingURL=query.d.ts.map