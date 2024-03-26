import { z } from 'zod';
export declare const GetStudentsQueryParams: z.ZodObject<{
    liveCourseId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    liveCourseId: string;
}, {
    liveCourseId: string;
}>;
export type GetStudentsQueryParams = z.infer<typeof GetStudentsQueryParams>;
export declare const Student: z.ZodObject<{
    user: z.ZodObject<{
        id: z.ZodString;
        firstName: z.ZodString;
        lastName: z.ZodString;
        username: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        username: string;
        firstName: string;
        lastName: string;
    }, {
        id: string;
        username: string;
        firstName: string;
        lastName: string;
    }>;
    package: z.ZodObject<{
        id: z.ZodString;
        packageType: z.ZodNativeEnum<{
            LIVECOURSE_ONLY: "LIVECOURSE_ONLY";
            WITH_SUBSCRIPTION: "WITH_SUBSCRIPTION";
        }>;
        duration: z.ZodNumber;
        durationUnit: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        duration: number;
        packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
        durationUnit: string;
    }, {
        id: string;
        duration: number;
        packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
        durationUnit: string;
    }>;
    receiveMethod: z.ZodString;
    shippingAddress: z.ZodObject<{
        address: z.ZodString;
        postalCode: z.ZodString;
        province: z.ZodString;
        phone: z.ZodString;
        subdistrict: z.ZodString;
        district: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        phone: string;
        address: string;
        province: string;
        district: string;
        subdistrict: string;
        postalCode: string;
    }, {
        phone: string;
        address: string;
        province: string;
        district: string;
        subdistrict: string;
        postalCode: string;
    }>;
}, "strip", z.ZodTypeAny, {
    receiveMethod: string;
    shippingAddress: {
        phone: string;
        address: string;
        province: string;
        district: string;
        subdistrict: string;
        postalCode: string;
    };
    user: {
        id: string;
        username: string;
        firstName: string;
        lastName: string;
    };
    package: {
        id: string;
        duration: number;
        packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
        durationUnit: string;
    };
}, {
    receiveMethod: string;
    shippingAddress: {
        phone: string;
        address: string;
        province: string;
        district: string;
        subdistrict: string;
        postalCode: string;
    };
    user: {
        id: string;
        username: string;
        firstName: string;
        lastName: string;
    };
    package: {
        id: string;
        duration: number;
        packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
        durationUnit: string;
    };
}>;
export type Student = z.infer<typeof Student>;
export declare const GetStudentsResponse: z.ZodArray<z.ZodObject<{
    user: z.ZodObject<{
        id: z.ZodString;
        firstName: z.ZodString;
        lastName: z.ZodString;
        username: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        username: string;
        firstName: string;
        lastName: string;
    }, {
        id: string;
        username: string;
        firstName: string;
        lastName: string;
    }>;
    package: z.ZodObject<{
        id: z.ZodString;
        packageType: z.ZodNativeEnum<{
            LIVECOURSE_ONLY: "LIVECOURSE_ONLY";
            WITH_SUBSCRIPTION: "WITH_SUBSCRIPTION";
        }>;
        duration: z.ZodNumber;
        durationUnit: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        duration: number;
        packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
        durationUnit: string;
    }, {
        id: string;
        duration: number;
        packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
        durationUnit: string;
    }>;
    receiveMethod: z.ZodString;
    shippingAddress: z.ZodObject<{
        address: z.ZodString;
        postalCode: z.ZodString;
        province: z.ZodString;
        phone: z.ZodString;
        subdistrict: z.ZodString;
        district: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        phone: string;
        address: string;
        province: string;
        district: string;
        subdistrict: string;
        postalCode: string;
    }, {
        phone: string;
        address: string;
        province: string;
        district: string;
        subdistrict: string;
        postalCode: string;
    }>;
}, "strip", z.ZodTypeAny, {
    receiveMethod: string;
    shippingAddress: {
        phone: string;
        address: string;
        province: string;
        district: string;
        subdistrict: string;
        postalCode: string;
    };
    user: {
        id: string;
        username: string;
        firstName: string;
        lastName: string;
    };
    package: {
        id: string;
        duration: number;
        packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
        durationUnit: string;
    };
}, {
    receiveMethod: string;
    shippingAddress: {
        phone: string;
        address: string;
        province: string;
        district: string;
        subdistrict: string;
        postalCode: string;
    };
    user: {
        id: string;
        username: string;
        firstName: string;
        lastName: string;
    };
    package: {
        id: string;
        duration: number;
        packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
        durationUnit: string;
    };
}>, "many">;
export type GetStudentsResponse = z.infer<typeof GetStudentsResponse>;
//# sourceMappingURL=query.d.ts.map