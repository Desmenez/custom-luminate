import { z } from 'zod';
export declare const LiveSessionCreateInput: z.ZodObject<{
    description: z.ZodString;
    liveCourseId: z.ZodString;
    name: z.ZodString;
    isTrialSession: z.ZodBoolean;
    exerciseId: z.ZodNullable<z.ZodString>;
    startTime: z.ZodString;
    endTime: z.ZodString;
}, "strip", z.ZodTypeAny, {
    description: string;
    liveCourseId: string;
    name: string;
    startTime: string;
    endTime: string;
    isTrialSession: boolean;
    exerciseId: string | null;
}, {
    description: string;
    liveCourseId: string;
    name: string;
    startTime: string;
    endTime: string;
    isTrialSession: boolean;
    exerciseId: string | null;
}>;
export type LiveSessionCreateInput = z.infer<typeof LiveSessionCreateInput>;
export declare const LiveSessionCreateResponse: z.ZodObject<{
    id: z.ZodString;
    sheetUploadUrl: z.ZodObject<{
        url: z.ZodString;
        token: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        url: string;
        token: string;
    }, {
        url: string;
        token: string;
    }>;
}, "strip", z.ZodTypeAny, {
    id: string;
    sheetUploadUrl: {
        url: string;
        token: string;
    };
}, {
    id: string;
    sheetUploadUrl: {
        url: string;
        token: string;
    };
}>;
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
    startTime: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>>;
    endTime: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodDate]>, string, string | Date>>;
    isTrialSession: z.ZodOptional<z.ZodBoolean>;
    isSheetUploaded: z.ZodOptional<z.ZodBoolean>;
    exerciseId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    description?: string | undefined;
    name?: string | undefined;
    startTime?: string | undefined;
    endTime?: string | undefined;
    isTrialSession?: boolean | undefined;
    isSheetUploaded?: boolean | undefined;
    exerciseId?: string | null | undefined;
}, {
    description?: string | undefined;
    name?: string | undefined;
    startTime?: string | Date | undefined;
    endTime?: string | Date | undefined;
    isTrialSession?: boolean | undefined;
    isSheetUploaded?: boolean | undefined;
    exerciseId?: string | null | undefined;
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