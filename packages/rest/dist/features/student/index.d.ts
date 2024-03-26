export * from './dto';
export declare const studentContract: {
    getStudentsByLiveCourseId: {
        query: import("zod").ZodObject<{
            liveCourseId: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            liveCourseId: string;
        }, {
            liveCourseId: string;
        }>;
        responses: {
            200: import("zod").ZodArray<import("zod").ZodObject<{
                user: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    firstName: import("zod").ZodString;
                    lastName: import("zod").ZodString;
                    username: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
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
                package: import("zod").ZodObject<{
                    id: import("zod").ZodString;
                    packageType: import("zod").ZodNativeEnum<{
                        LIVECOURSE_ONLY: "LIVECOURSE_ONLY";
                        WITH_SUBSCRIPTION: "WITH_SUBSCRIPTION";
                    }>;
                    duration: import("zod").ZodNumber;
                    durationUnit: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
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
                receiveMethod: import("zod").ZodString;
                shippingAddress: import("zod").ZodObject<{
                    address: import("zod").ZodString;
                    postalCode: import("zod").ZodString;
                    province: import("zod").ZodString;
                    phone: import("zod").ZodString;
                    subdistrict: import("zod").ZodString;
                    district: import("zod").ZodString;
                }, "strip", import("zod").ZodTypeAny, {
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
            }, "strip", import("zod").ZodTypeAny, {
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
        };
        method: "GET";
        path: "";
    };
};
//# sourceMappingURL=index.d.ts.map