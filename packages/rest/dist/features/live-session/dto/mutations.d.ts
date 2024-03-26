import { z } from 'zod';
export declare const LiveSessionCreateInput: z.ZodObject<Pick<{
    id: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    startTime: z.ZodDate;
    endTime: z.ZodDate;
    streamInputId: z.ZodString;
    streamKey: z.ZodString;
    videoId: z.ZodNullable<z.ZodString>;
    liveCourseId: z.ZodString;
    isQuizClosed: z.ZodBoolean;
    isTrialSession: z.ZodBoolean;
    sheetUrl: z.ZodNullable<z.ZodString>;
    exerciseId: z.ZodNullable<z.ZodString>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, "description" | "liveCourseId" | "name" | "startTime" | "endTime" | "isTrialSession">, "strip", z.ZodTypeAny, {
    description: string;
    liveCourseId: string;
    name: string;
    startTime: Date;
    endTime: Date;
    isTrialSession: boolean;
}, {
    description: string;
    liveCourseId: string;
    name: string;
    startTime: Date;
    endTime: Date;
    isTrialSession: boolean;
}>;
export type LiveSessionCreateInput = z.infer<typeof LiveSessionCreateInput>;
export declare const LiveSessionWhere: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export declare const LiveSessionUpdateInput: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    startTime: z.ZodOptional<z.ZodDate>;
    endTime: z.ZodOptional<z.ZodDate>;
}, "strip", z.ZodTypeAny, {
    description?: string | undefined;
    name?: string | undefined;
    startTime?: Date | undefined;
    endTime?: Date | undefined;
}, {
    description?: string | undefined;
    name?: string | undefined;
    startTime?: Date | undefined;
    endTime?: Date | undefined;
}>;
export type LiveSessionUpdateInput = z.infer<typeof LiveSessionUpdateInput>;
export declare const UpdateRecentLiveSessionTimestampQueryParams: z.ZodObject<{
    liveSessionId: z.ZodString;
    seconds: z.ZodNumber;
    videoLengthSeconds: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    liveSessionId: string;
    videoLengthSeconds: number;
    seconds: number;
}, {
    liveSessionId: string;
    videoLengthSeconds: number;
    seconds: number;
}>;
//# sourceMappingURL=mutations.d.ts.map