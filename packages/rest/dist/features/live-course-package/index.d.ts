export declare const liveCoursePackageContract: {
    createLiveCoursePackage: {
        responses: {
            200: import("zod").ZodObject<{
                id: import("zod").ZodString;
                createdAt: import("zod").ZodDate;
                updatedAt: import("zod").ZodDate;
                liveCourseId: import("zod").ZodString;
                title: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                price: import("zod").ZodNumber;
                duration: import("zod").ZodNumber;
                packageType: import("zod").ZodNativeEnum<{
                    LIVECOURSE_ONLY: "LIVECOURSE_ONLY";
                    WITH_SUBSCRIPTION: "WITH_SUBSCRIPTION";
                }>;
                durationUnit: import("zod").ZodNativeEnum<{
                    DAY: "DAY";
                    MONTH: "MONTH";
                }>;
                isActive: import("zod").ZodBoolean;
                hasShipping: import("zod").ZodBoolean;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
                description: string | null;
                liveCourseId: string;
                hasShipping: boolean;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                price: number;
                title: string;
                duration: number;
                packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
                durationUnit: "DAY" | "MONTH";
            }, {
                id: string;
                description: string | null;
                liveCourseId: string;
                hasShipping: boolean;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                price: number;
                title: string;
                duration: number;
                packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
                durationUnit: "DAY" | "MONTH";
            }>;
        };
        method: "POST";
        body: import("zod").ZodObject<Pick<{
            id: import("zod").ZodString;
            createdAt: import("zod").ZodDate;
            updatedAt: import("zod").ZodDate;
            liveCourseId: import("zod").ZodString;
            title: import("zod").ZodString;
            description: import("zod").ZodNullable<import("zod").ZodString>;
            price: import("zod").ZodNumber;
            duration: import("zod").ZodNumber;
            packageType: import("zod").ZodNativeEnum<{
                LIVECOURSE_ONLY: "LIVECOURSE_ONLY";
                WITH_SUBSCRIPTION: "WITH_SUBSCRIPTION";
            }>;
            durationUnit: import("zod").ZodNativeEnum<{
                DAY: "DAY";
                MONTH: "MONTH";
            }>;
            isActive: import("zod").ZodBoolean;
            hasShipping: import("zod").ZodBoolean;
        }, "description" | "liveCourseId" | "price" | "title" | "duration" | "packageType" | "durationUnit">, "strip", import("zod").ZodTypeAny, {
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
        path: "";
    };
    updateLiveCoursePackage: {
        responses: {
            200: import("zod").ZodObject<{
                id: import("zod").ZodString;
                createdAt: import("zod").ZodDate;
                updatedAt: import("zod").ZodDate;
                liveCourseId: import("zod").ZodString;
                title: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                price: import("zod").ZodNumber;
                duration: import("zod").ZodNumber;
                packageType: import("zod").ZodNativeEnum<{
                    LIVECOURSE_ONLY: "LIVECOURSE_ONLY";
                    WITH_SUBSCRIPTION: "WITH_SUBSCRIPTION";
                }>;
                durationUnit: import("zod").ZodNativeEnum<{
                    DAY: "DAY";
                    MONTH: "MONTH";
                }>;
                isActive: import("zod").ZodBoolean;
                hasShipping: import("zod").ZodBoolean;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
                description: string | null;
                liveCourseId: string;
                hasShipping: boolean;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                price: number;
                title: string;
                duration: number;
                packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
                durationUnit: "DAY" | "MONTH";
            }, {
                id: string;
                description: string | null;
                liveCourseId: string;
                hasShipping: boolean;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                price: number;
                title: string;
                duration: number;
                packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
                durationUnit: "DAY" | "MONTH";
            }>;
        };
        method: "PATCH";
        body: import("zod").ZodObject<{
            id: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            price: import("zod").ZodOptional<import("zod").ZodNumber>;
            title: import("zod").ZodOptional<import("zod").ZodString>;
            duration: import("zod").ZodOptional<import("zod").ZodNumber>;
            packageType: import("zod").ZodOptional<import("zod").ZodNativeEnum<{
                LIVECOURSE_ONLY: "LIVECOURSE_ONLY";
                WITH_SUBSCRIPTION: "WITH_SUBSCRIPTION";
            }>>;
            durationUnit: import("zod").ZodOptional<import("zod").ZodNativeEnum<{
                DAY: "DAY";
                MONTH: "MONTH";
            }>>;
        }, "strip", import("zod").ZodTypeAny, {
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
        path: "";
    };
    deleteLiveCoursePackage: {
        responses: {
            200: import("zod").ZodObject<{
                id: import("zod").ZodString;
                createdAt: import("zod").ZodDate;
                updatedAt: import("zod").ZodDate;
                liveCourseId: import("zod").ZodString;
                title: import("zod").ZodString;
                description: import("zod").ZodNullable<import("zod").ZodString>;
                price: import("zod").ZodNumber;
                duration: import("zod").ZodNumber;
                packageType: import("zod").ZodNativeEnum<{
                    LIVECOURSE_ONLY: "LIVECOURSE_ONLY";
                    WITH_SUBSCRIPTION: "WITH_SUBSCRIPTION";
                }>;
                durationUnit: import("zod").ZodNativeEnum<{
                    DAY: "DAY";
                    MONTH: "MONTH";
                }>;
                isActive: import("zod").ZodBoolean;
                hasShipping: import("zod").ZodBoolean;
            }, "strip", import("zod").ZodTypeAny, {
                id: string;
                description: string | null;
                liveCourseId: string;
                hasShipping: boolean;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                price: number;
                title: string;
                duration: number;
                packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
                durationUnit: "DAY" | "MONTH";
            }, {
                id: string;
                description: string | null;
                liveCourseId: string;
                hasShipping: boolean;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                price: number;
                title: string;
                duration: number;
                packageType: "LIVECOURSE_ONLY" | "WITH_SUBSCRIPTION";
                durationUnit: "DAY" | "MONTH";
            }>;
        };
        method: "DELETE";
        body: import("zod").ZodObject<{
            id: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        path: "";
    };
};
//# sourceMappingURL=index.d.ts.map