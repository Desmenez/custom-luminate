import { z } from 'zod';
export declare const CreateLiveCoursePackageBody: z.ZodObject<Pick<{
    id: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    liveCourseId: z.ZodString;
    title: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    price: z.ZodNumber;
    duration: z.ZodNumber;
    packageType: z.ZodNativeEnum<{
        LIVECOURSE_ONLY: "LIVECOURSE_ONLY";
        WITH_SUBSCRIPTION: "WITH_SUBSCRIPTION";
    }>;
    durationUnit: z.ZodNativeEnum<{
        DAY: "DAY";
        MONTH: "MONTH";
    }>;
    isActive: z.ZodBoolean;
    hasShipping: z.ZodBoolean;
}, "description" | "liveCourseId" | "price" | "title" | "duration" | "packageType" | "durationUnit">, "strip", z.ZodTypeAny, {
    description: string | null;
    liveCourseId: string;
    price: number;
    title: string;
    duration: number;
    packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
    durationUnit: "DAY" | "MONTH";
}, {
    description: string | null;
    liveCourseId: string;
    price: number;
    title: string;
    duration: number;
    packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
    durationUnit: "DAY" | "MONTH";
}>;
export type CreateLiveCoursePackageBody = z.infer<typeof CreateLiveCoursePackageBody>;
export declare const UpdateLiveCoursePackageBody: z.ZodObject<{
    id: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    price: z.ZodOptional<z.ZodNumber>;
    title: z.ZodOptional<z.ZodString>;
    duration: z.ZodOptional<z.ZodNumber>;
    packageType: z.ZodOptional<z.ZodNativeEnum<{
        LIVECOURSE_ONLY: "LIVECOURSE_ONLY";
        WITH_SUBSCRIPTION: "WITH_SUBSCRIPTION";
    }>>;
    durationUnit: z.ZodOptional<z.ZodNativeEnum<{
        DAY: "DAY";
        MONTH: "MONTH";
    }>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    description?: string | null | undefined;
    price?: number | undefined;
    title?: string | undefined;
    duration?: number | undefined;
    packageType?: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION" | undefined;
    durationUnit?: "DAY" | "MONTH" | undefined;
}, {
    id: string;
    description?: string | null | undefined;
    price?: number | undefined;
    title?: string | undefined;
    duration?: number | undefined;
    packageType?: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION" | undefined;
    durationUnit?: "DAY" | "MONTH" | undefined;
}>;
export type UpdateLiveCoursePackageBody = z.infer<typeof UpdateLiveCoursePackageBody>;
export declare const DeleteLiveCoursePackageBody: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export type DeleteLiveCoursePackageBody = z.infer<typeof DeleteLiveCoursePackageBody>;
//# sourceMappingURL=mutation.d.ts.map