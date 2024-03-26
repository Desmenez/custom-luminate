import { z } from 'zod';
export declare const PaymentLiveCourseFeature: {
    readonly LIVE: "LIVE";
    readonly ONSITE: "ONSITE";
    readonly ONLINE: "ONLINE";
    readonly FUNDAMENTAL: "FUNDAMENTAL";
    readonly RECORDING: "RECORDING";
    readonly EXERCISE: "EXERCISE";
    readonly EXAM: "EXAM";
    readonly QUIZ: "QUIZ";
    readonly SUBSCRIPTION: "SUBSCRIPTION";
};
export type PaymentLiveCourseFeature = (typeof PaymentLiveCourseFeature)[keyof typeof PaymentLiveCourseFeature];
export declare const PaymentPackageOnlineOption: z.ZodObject<{
    price: z.ZodNumber;
    features: z.ZodArray<z.ZodNativeEnum<{
        readonly LIVE: "LIVE";
        readonly ONSITE: "ONSITE";
        readonly ONLINE: "ONLINE";
        readonly FUNDAMENTAL: "FUNDAMENTAL";
        readonly RECORDING: "RECORDING";
        readonly EXERCISE: "EXERCISE";
        readonly EXAM: "EXAM";
        readonly QUIZ: "QUIZ";
        readonly SUBSCRIPTION: "SUBSCRIPTION";
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    price: number;
    features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
}, {
    price: number;
    features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
}>;
export declare const PaymentPackageOnsiteOption: z.ZodObject<{
    price: z.ZodNumber;
    features: z.ZodArray<z.ZodNativeEnum<{
        readonly LIVE: "LIVE";
        readonly ONSITE: "ONSITE";
        readonly ONLINE: "ONLINE";
        readonly FUNDAMENTAL: "FUNDAMENTAL";
        readonly RECORDING: "RECORDING";
        readonly EXERCISE: "EXERCISE";
        readonly EXAM: "EXAM";
        readonly QUIZ: "QUIZ";
        readonly SUBSCRIPTION: "SUBSCRIPTION";
    }>, "many">;
    availableSeats: z.ZodNumber;
    onsiteAddress: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    onsiteAddress: string | null;
    price: number;
    features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
    availableSeats: number;
}, {
    onsiteAddress: string | null;
    price: number;
    features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
    availableSeats: number;
}>;
export declare const PaymentPackageInfo: z.ZodObject<{
    liveCourseId: z.ZodString;
    type: z.ZodNativeEnum<{
        LIVE: "LIVE";
        FUSION: "FUSION";
        TAPE: "TAPE";
        ONSITE: "ONSITE";
    }>;
    name: z.ZodString;
    courseCoverUrl: z.ZodNullable<z.ZodString>;
    courseStickerUrl: z.ZodNullable<z.ZodString>;
    startDate: z.ZodString;
    endDate: z.ZodString;
    registrationDeadline: z.ZodString;
    startingPrice: z.ZodNumber;
    learningTypeOptions: z.ZodObject<{
        online: z.ZodNullable<z.ZodObject<{
            price: z.ZodNumber;
            features: z.ZodArray<z.ZodNativeEnum<{
                readonly LIVE: "LIVE";
                readonly ONSITE: "ONSITE";
                readonly ONLINE: "ONLINE";
                readonly FUNDAMENTAL: "FUNDAMENTAL";
                readonly RECORDING: "RECORDING";
                readonly EXERCISE: "EXERCISE";
                readonly EXAM: "EXAM";
                readonly QUIZ: "QUIZ";
                readonly SUBSCRIPTION: "SUBSCRIPTION";
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            price: number;
            features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
        }, {
            price: number;
            features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
        }>>;
        onsite: z.ZodNullable<z.ZodObject<{
            price: z.ZodNumber;
            features: z.ZodArray<z.ZodNativeEnum<{
                readonly LIVE: "LIVE";
                readonly ONSITE: "ONSITE";
                readonly ONLINE: "ONLINE";
                readonly FUNDAMENTAL: "FUNDAMENTAL";
                readonly RECORDING: "RECORDING";
                readonly EXERCISE: "EXERCISE";
                readonly EXAM: "EXAM";
                readonly QUIZ: "QUIZ";
                readonly SUBSCRIPTION: "SUBSCRIPTION";
            }>, "many">;
            availableSeats: z.ZodNumber;
            onsiteAddress: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            onsiteAddress: string | null;
            price: number;
            features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
            availableSeats: number;
        }, {
            onsiteAddress: string | null;
            price: number;
            features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
            availableSeats: number;
        }>>;
    }, "strip", z.ZodTypeAny, {
        online: {
            price: number;
            features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
        } | null;
        onsite: {
            onsiteAddress: string | null;
            price: number;
            features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
            availableSeats: number;
        } | null;
    }, {
        online: {
            price: number;
            features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
        } | null;
        onsite: {
            onsiteAddress: string | null;
            price: number;
            features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
            availableSeats: number;
        } | null;
    }>;
    addonOptions: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        price: z.ZodNumber;
        durationDays: z.ZodNumber;
        features: z.ZodArray<z.ZodNativeEnum<{
            readonly LIVE: "LIVE";
            readonly ONSITE: "ONSITE";
            readonly ONLINE: "ONLINE";
            readonly FUNDAMENTAL: "FUNDAMENTAL";
            readonly RECORDING: "RECORDING";
            readonly EXERCISE: "EXERCISE";
            readonly EXAM: "EXAM";
            readonly QUIZ: "QUIZ";
            readonly SUBSCRIPTION: "SUBSCRIPTION";
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        price: number;
        durationDays: number;
        features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
    }, {
        id: string;
        name: string;
        price: number;
        durationDays: number;
        features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
    }>, "many">;
    receiveMaterialOptions: z.ZodObject<{
        shipping: z.ZodNullable<z.ZodObject<{
            price: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            price: number;
        }, {
            price: number;
        }>>;
        pickup: z.ZodNullable<z.ZodObject<{
            pickupAddress: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            pickupAddress: string | null;
        }, {
            pickupAddress: string | null;
        }>>;
    }, "strip", z.ZodTypeAny, {
        shipping: {
            price: number;
        } | null;
        pickup: {
            pickupAddress: string | null;
        } | null;
    }, {
        shipping: {
            price: number;
        } | null;
        pickup: {
            pickupAddress: string | null;
        } | null;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    liveCourseId: string;
    name: string;
    courseCoverUrl: string | null;
    courseStickerUrl: string | null;
    startDate: string;
    endDate: string;
    registrationDeadline: string;
    startingPrice: number;
    learningTypeOptions: {
        online: {
            price: number;
            features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
        } | null;
        onsite: {
            onsiteAddress: string | null;
            price: number;
            features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
            availableSeats: number;
        } | null;
    };
    addonOptions: {
        id: string;
        name: string;
        price: number;
        durationDays: number;
        features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
    }[];
    receiveMaterialOptions: {
        shipping: {
            price: number;
        } | null;
        pickup: {
            pickupAddress: string | null;
        } | null;
    };
}, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    liveCourseId: string;
    name: string;
    courseCoverUrl: string | null;
    courseStickerUrl: string | null;
    startDate: string;
    endDate: string;
    registrationDeadline: string;
    startingPrice: number;
    learningTypeOptions: {
        online: {
            price: number;
            features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
        } | null;
        onsite: {
            onsiteAddress: string | null;
            price: number;
            features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
            availableSeats: number;
        } | null;
    };
    addonOptions: {
        id: string;
        name: string;
        price: number;
        durationDays: number;
        features: ("LIVE" | "ONSITE" | "ONLINE" | "FUNDAMENTAL" | "RECORDING" | "EXERCISE" | "EXAM" | "QUIZ" | "SUBSCRIPTION")[];
    }[];
    receiveMaterialOptions: {
        shipping: {
            price: number;
        } | null;
        pickup: {
            pickupAddress: string | null;
        } | null;
    };
}>;
export type PaymentPackageInfo = z.infer<typeof PaymentPackageInfo>;
export declare const PaymentBooking: z.ZodObject<{
    id: z.ZodString;
    liveCourseId: z.ZodString;
    type: z.ZodNativeEnum<{
        LIVE: "LIVE";
        FUSION: "FUSION";
        TAPE: "TAPE";
        ONSITE: "ONSITE";
    }>;
    name: z.ZodString;
    courseCoverUrl: z.ZodNullable<z.ZodString>;
    courseStickerUrl: z.ZodNullable<z.ZodString>;
    startDate: z.ZodString;
    endDate: z.ZodString;
    registrationDeadline: z.ZodString;
    serverTime: z.ZodString;
    expiresAt: z.ZodString;
    basePrice: z.ZodNumber;
    addon: z.ZodNullable<z.ZodObject<{
        name: z.ZodString;
        price: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        name: string;
        price: number;
    }, {
        name: string;
        price: number;
    }>>;
    receiveMethod: z.ZodNullable<z.ZodNativeEnum<{
        SHIPPING: "SHIPPING";
        PICKUP: "PICKUP";
    }>>;
    shippingPrice: z.ZodNumber;
    subtotal: z.ZodNumber;
    charges: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        status: z.ZodNativeEnum<{
            PENDING: "PENDING";
            SUCCESS: "SUCCESS";
            FAILED: "FAILED";
        }>;
    }, "strip", z.ZodTypeAny, {
        status: "PENDING" | "SUCCESS" | "FAILED";
        id: string;
    }, {
        status: "PENDING" | "SUCCESS" | "FAILED";
        id: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    id: string;
    liveCourseId: string;
    name: string;
    courseCoverUrl: string | null;
    courseStickerUrl: string | null;
    startDate: string;
    endDate: string;
    shippingPrice: number;
    expiresAt: string;
    receiveMethod: "SHIPPING" | "PICKUP" | null;
    basePrice: number;
    subtotal: number;
    charges: {
        status: "PENDING" | "SUCCESS" | "FAILED";
        id: string;
    }[];
    registrationDeadline: string;
    serverTime: string;
    addon: {
        name: string;
        price: number;
    } | null;
}, {
    type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
    id: string;
    liveCourseId: string;
    name: string;
    courseCoverUrl: string | null;
    courseStickerUrl: string | null;
    startDate: string;
    endDate: string;
    shippingPrice: number;
    expiresAt: string;
    receiveMethod: "SHIPPING" | "PICKUP" | null;
    basePrice: number;
    subtotal: number;
    charges: {
        status: "PENDING" | "SUCCESS" | "FAILED";
        id: string;
    }[];
    registrationDeadline: string;
    serverTime: string;
    addon: {
        name: string;
        price: number;
    } | null;
}>;
export type PaymentBooking = z.infer<typeof PaymentBooking>;
declare const PaymentChargeAdditionalSteps: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"CREDIT_CARD">;
    authorizeUrl: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    type: "CREDIT_CARD";
    authorizeUrl: string | null;
}, {
    type: "CREDIT_CARD";
    authorizeUrl: string | null;
}>, z.ZodObject<{
    type: z.ZodLiteral<"PROMPTPAY">;
    qrCodeUrl: z.ZodString;
    expiresAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "PROMPTPAY";
    expiresAt: string;
    qrCodeUrl: string;
}, {
    type: "PROMPTPAY";
    expiresAt: string;
    qrCodeUrl: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"TRUEMONEY">;
    authorizeUrl: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "TRUEMONEY";
    authorizeUrl: string;
}, {
    type: "TRUEMONEY";
    authorizeUrl: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"MOBILE_BANKING">;
    authorizeUrl: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "MOBILE_BANKING";
    authorizeUrl: string;
}, {
    type: "MOBILE_BANKING";
    authorizeUrl: string;
}>]>;
export type PaymentChargeAdditionalSteps = z.infer<typeof PaymentChargeAdditionalSteps>;
export declare const PaymentChargePending: z.ZodObject<{
    type: z.ZodLiteral<"PENDING">;
    additionalSteps: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"CREDIT_CARD">;
        authorizeUrl: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "CREDIT_CARD";
        authorizeUrl: string | null;
    }, {
        type: "CREDIT_CARD";
        authorizeUrl: string | null;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"PROMPTPAY">;
        qrCodeUrl: z.ZodString;
        expiresAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "PROMPTPAY";
        expiresAt: string;
        qrCodeUrl: string;
    }, {
        type: "PROMPTPAY";
        expiresAt: string;
        qrCodeUrl: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"TRUEMONEY">;
        authorizeUrl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "TRUEMONEY";
        authorizeUrl: string;
    }, {
        type: "TRUEMONEY";
        authorizeUrl: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"MOBILE_BANKING">;
        authorizeUrl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "MOBILE_BANKING";
        authorizeUrl: string;
    }, {
        type: "MOBILE_BANKING";
        authorizeUrl: string;
    }>]>;
}, "strip", z.ZodTypeAny, {
    type: "PENDING";
    additionalSteps: {
        type: "CREDIT_CARD";
        authorizeUrl: string | null;
    } | {
        type: "PROMPTPAY";
        expiresAt: string;
        qrCodeUrl: string;
    } | {
        type: "TRUEMONEY";
        authorizeUrl: string;
    } | {
        type: "MOBILE_BANKING";
        authorizeUrl: string;
    };
}, {
    type: "PENDING";
    additionalSteps: {
        type: "CREDIT_CARD";
        authorizeUrl: string | null;
    } | {
        type: "PROMPTPAY";
        expiresAt: string;
        qrCodeUrl: string;
    } | {
        type: "TRUEMONEY";
        authorizeUrl: string;
    } | {
        type: "MOBILE_BANKING";
        authorizeUrl: string;
    };
}>;
export declare const PaymentChargeFailed: z.ZodObject<{
    type: z.ZodLiteral<"FAILED">;
}, "strip", z.ZodTypeAny, {
    type: "FAILED";
}, {
    type: "FAILED";
}>;
export type PaymentChargeFailed = z.infer<typeof PaymentChargeFailed>;
export declare const PaymentChargeSuccess: z.ZodObject<{
    type: z.ZodLiteral<"SUCCESS">;
    learningType: z.ZodNativeEnum<{
        ONLINE: "ONLINE";
        ONSITE: "ONSITE";
    }>;
    onsiteAddress: z.ZodNullable<z.ZodString>;
    addonName: z.ZodNullable<z.ZodString>;
    receiveMethod: z.ZodNullable<z.ZodNativeEnum<{
        SHIPPING: "SHIPPING";
        PICKUP: "PICKUP";
    }>>;
    shippingAddress: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        userId: z.ZodString;
        name: z.ZodString;
        phone: z.ZodString;
        address: z.ZodString;
        province: z.ZodString;
        district: z.ZodString;
        subdistrict: z.ZodString;
        postalCode: z.ZodString;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        id: string;
        userId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        address: string;
        province: string;
        district: string;
        subdistrict: string;
        postalCode: string;
    }, {
        id: string;
        userId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        address: string;
        province: string;
        district: string;
        subdistrict: string;
        postalCode: string;
    }>>;
    pickupAddress: z.ZodNullable<z.ZodString>;
    paymentMethod: z.ZodNativeEnum<{
        CREDIT_CARD: "CREDIT_CARD";
        PROMPTPAY: "PROMPTPAY";
        TRUEMONEY: "TRUEMONEY";
        MOBILE_BANKING: "MOBILE_BANKING";
    }>;
    chargedCard: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        lastDigits: z.ZodString;
        brand: z.ZodString;
        expirationMonth: z.ZodNumber;
        expirationYear: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        brand: string;
        lastDigits: string;
        expirationMonth: number;
        expirationYear: number;
    }, {
        id: string;
        brand: string;
        lastDigits: string;
        expirationMonth: number;
        expirationYear: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "SUCCESS";
    pickupAddress: string | null;
    onsiteAddress: string | null;
    learningType: "ONSITE" | "ONLINE";
    receiveMethod: "SHIPPING" | "PICKUP" | null;
    addonName: string | null;
    shippingAddress: {
        id: string;
        userId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        address: string;
        province: string;
        district: string;
        subdistrict: string;
        postalCode: string;
    } | null;
    paymentMethod: "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
    chargedCard: {
        id: string;
        brand: string;
        lastDigits: string;
        expirationMonth: number;
        expirationYear: number;
    } | null;
}, {
    type: "SUCCESS";
    pickupAddress: string | null;
    onsiteAddress: string | null;
    learningType: "ONSITE" | "ONLINE";
    receiveMethod: "SHIPPING" | "PICKUP" | null;
    addonName: string | null;
    shippingAddress: {
        id: string;
        userId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        address: string;
        province: string;
        district: string;
        subdistrict: string;
        postalCode: string;
    } | null;
    paymentMethod: "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
    chargedCard: {
        id: string;
        brand: string;
        lastDigits: string;
        expirationMonth: number;
        expirationYear: number;
    } | null;
}>;
export type PaymentChargeSuccess = z.infer<typeof PaymentChargeSuccess>;
export declare const PaymentChargeStatus: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"PENDING">;
    additionalSteps: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"CREDIT_CARD">;
        authorizeUrl: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "CREDIT_CARD";
        authorizeUrl: string | null;
    }, {
        type: "CREDIT_CARD";
        authorizeUrl: string | null;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"PROMPTPAY">;
        qrCodeUrl: z.ZodString;
        expiresAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "PROMPTPAY";
        expiresAt: string;
        qrCodeUrl: string;
    }, {
        type: "PROMPTPAY";
        expiresAt: string;
        qrCodeUrl: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"TRUEMONEY">;
        authorizeUrl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "TRUEMONEY";
        authorizeUrl: string;
    }, {
        type: "TRUEMONEY";
        authorizeUrl: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"MOBILE_BANKING">;
        authorizeUrl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "MOBILE_BANKING";
        authorizeUrl: string;
    }, {
        type: "MOBILE_BANKING";
        authorizeUrl: string;
    }>]>;
}, "strip", z.ZodTypeAny, {
    type: "PENDING";
    additionalSteps: {
        type: "CREDIT_CARD";
        authorizeUrl: string | null;
    } | {
        type: "PROMPTPAY";
        expiresAt: string;
        qrCodeUrl: string;
    } | {
        type: "TRUEMONEY";
        authorizeUrl: string;
    } | {
        type: "MOBILE_BANKING";
        authorizeUrl: string;
    };
}, {
    type: "PENDING";
    additionalSteps: {
        type: "CREDIT_CARD";
        authorizeUrl: string | null;
    } | {
        type: "PROMPTPAY";
        expiresAt: string;
        qrCodeUrl: string;
    } | {
        type: "TRUEMONEY";
        authorizeUrl: string;
    } | {
        type: "MOBILE_BANKING";
        authorizeUrl: string;
    };
}>, z.ZodObject<{
    type: z.ZodLiteral<"FAILED">;
}, "strip", z.ZodTypeAny, {
    type: "FAILED";
}, {
    type: "FAILED";
}>, z.ZodObject<{
    type: z.ZodLiteral<"SUCCESS">;
    learningType: z.ZodNativeEnum<{
        ONLINE: "ONLINE";
        ONSITE: "ONSITE";
    }>;
    onsiteAddress: z.ZodNullable<z.ZodString>;
    addonName: z.ZodNullable<z.ZodString>;
    receiveMethod: z.ZodNullable<z.ZodNativeEnum<{
        SHIPPING: "SHIPPING";
        PICKUP: "PICKUP";
    }>>;
    shippingAddress: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        userId: z.ZodString;
        name: z.ZodString;
        phone: z.ZodString;
        address: z.ZodString;
        province: z.ZodString;
        district: z.ZodString;
        subdistrict: z.ZodString;
        postalCode: z.ZodString;
        createdAt: z.ZodDate;
        updatedAt: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        id: string;
        userId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        address: string;
        province: string;
        district: string;
        subdistrict: string;
        postalCode: string;
    }, {
        id: string;
        userId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        address: string;
        province: string;
        district: string;
        subdistrict: string;
        postalCode: string;
    }>>;
    pickupAddress: z.ZodNullable<z.ZodString>;
    paymentMethod: z.ZodNativeEnum<{
        CREDIT_CARD: "CREDIT_CARD";
        PROMPTPAY: "PROMPTPAY";
        TRUEMONEY: "TRUEMONEY";
        MOBILE_BANKING: "MOBILE_BANKING";
    }>;
    chargedCard: z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        lastDigits: z.ZodString;
        brand: z.ZodString;
        expirationMonth: z.ZodNumber;
        expirationYear: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: string;
        brand: string;
        lastDigits: string;
        expirationMonth: number;
        expirationYear: number;
    }, {
        id: string;
        brand: string;
        lastDigits: string;
        expirationMonth: number;
        expirationYear: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    type: "SUCCESS";
    pickupAddress: string | null;
    onsiteAddress: string | null;
    learningType: "ONSITE" | "ONLINE";
    receiveMethod: "SHIPPING" | "PICKUP" | null;
    addonName: string | null;
    shippingAddress: {
        id: string;
        userId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        address: string;
        province: string;
        district: string;
        subdistrict: string;
        postalCode: string;
    } | null;
    paymentMethod: "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
    chargedCard: {
        id: string;
        brand: string;
        lastDigits: string;
        expirationMonth: number;
        expirationYear: number;
    } | null;
}, {
    type: "SUCCESS";
    pickupAddress: string | null;
    onsiteAddress: string | null;
    learningType: "ONSITE" | "ONLINE";
    receiveMethod: "SHIPPING" | "PICKUP" | null;
    addonName: string | null;
    shippingAddress: {
        id: string;
        userId: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        address: string;
        province: string;
        district: string;
        subdistrict: string;
        postalCode: string;
    } | null;
    paymentMethod: "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
    chargedCard: {
        id: string;
        brand: string;
        lastDigits: string;
        expirationMonth: number;
        expirationYear: number;
    } | null;
}>]>;
export type PaymentChargeStatus = z.infer<typeof PaymentChargeStatus>;
export declare const PaymentCharge: z.ZodObject<{
    id: z.ZodString;
    bookingId: z.ZodString;
    summary: z.ZodObject<{
        basePrice: z.ZodNumber;
        addon: z.ZodNullable<z.ZodObject<{
            name: z.ZodString;
            price: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            name: string;
            price: number;
        }, {
            name: string;
            price: number;
        }>>;
        shippingPrice: z.ZodNumber;
        amount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        shippingPrice: number;
        basePrice: number;
        amount: number;
        addon: {
            name: string;
            price: number;
        } | null;
    }, {
        shippingPrice: number;
        basePrice: number;
        amount: number;
        addon: {
            name: string;
            price: number;
        } | null;
    }>;
    status: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"PENDING">;
        additionalSteps: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
            type: z.ZodLiteral<"CREDIT_CARD">;
            authorizeUrl: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            type: "CREDIT_CARD";
            authorizeUrl: string | null;
        }, {
            type: "CREDIT_CARD";
            authorizeUrl: string | null;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"PROMPTPAY">;
            qrCodeUrl: z.ZodString;
            expiresAt: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "PROMPTPAY";
            expiresAt: string;
            qrCodeUrl: string;
        }, {
            type: "PROMPTPAY";
            expiresAt: string;
            qrCodeUrl: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"TRUEMONEY">;
            authorizeUrl: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "TRUEMONEY";
            authorizeUrl: string;
        }, {
            type: "TRUEMONEY";
            authorizeUrl: string;
        }>, z.ZodObject<{
            type: z.ZodLiteral<"MOBILE_BANKING">;
            authorizeUrl: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "MOBILE_BANKING";
            authorizeUrl: string;
        }, {
            type: "MOBILE_BANKING";
            authorizeUrl: string;
        }>]>;
    }, "strip", z.ZodTypeAny, {
        type: "PENDING";
        additionalSteps: {
            type: "CREDIT_CARD";
            authorizeUrl: string | null;
        } | {
            type: "PROMPTPAY";
            expiresAt: string;
            qrCodeUrl: string;
        } | {
            type: "TRUEMONEY";
            authorizeUrl: string;
        } | {
            type: "MOBILE_BANKING";
            authorizeUrl: string;
        };
    }, {
        type: "PENDING";
        additionalSteps: {
            type: "CREDIT_CARD";
            authorizeUrl: string | null;
        } | {
            type: "PROMPTPAY";
            expiresAt: string;
            qrCodeUrl: string;
        } | {
            type: "TRUEMONEY";
            authorizeUrl: string;
        } | {
            type: "MOBILE_BANKING";
            authorizeUrl: string;
        };
    }>, z.ZodObject<{
        type: z.ZodLiteral<"FAILED">;
    }, "strip", z.ZodTypeAny, {
        type: "FAILED";
    }, {
        type: "FAILED";
    }>, z.ZodObject<{
        type: z.ZodLiteral<"SUCCESS">;
        learningType: z.ZodNativeEnum<{
            ONLINE: "ONLINE";
            ONSITE: "ONSITE";
        }>;
        onsiteAddress: z.ZodNullable<z.ZodString>;
        addonName: z.ZodNullable<z.ZodString>;
        receiveMethod: z.ZodNullable<z.ZodNativeEnum<{
            SHIPPING: "SHIPPING";
            PICKUP: "PICKUP";
        }>>;
        shippingAddress: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            userId: z.ZodString;
            name: z.ZodString;
            phone: z.ZodString;
            address: z.ZodString;
            province: z.ZodString;
            district: z.ZodString;
            subdistrict: z.ZodString;
            postalCode: z.ZodString;
            createdAt: z.ZodDate;
            updatedAt: z.ZodDate;
        }, "strip", z.ZodTypeAny, {
            id: string;
            userId: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string;
            address: string;
            province: string;
            district: string;
            subdistrict: string;
            postalCode: string;
        }, {
            id: string;
            userId: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string;
            address: string;
            province: string;
            district: string;
            subdistrict: string;
            postalCode: string;
        }>>;
        pickupAddress: z.ZodNullable<z.ZodString>;
        paymentMethod: z.ZodNativeEnum<{
            CREDIT_CARD: "CREDIT_CARD";
            PROMPTPAY: "PROMPTPAY";
            TRUEMONEY: "TRUEMONEY";
            MOBILE_BANKING: "MOBILE_BANKING";
        }>;
        chargedCard: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            lastDigits: z.ZodString;
            brand: z.ZodString;
            expirationMonth: z.ZodNumber;
            expirationYear: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            id: string;
            brand: string;
            lastDigits: string;
            expirationMonth: number;
            expirationYear: number;
        }, {
            id: string;
            brand: string;
            lastDigits: string;
            expirationMonth: number;
            expirationYear: number;
        }>>;
    }, "strip", z.ZodTypeAny, {
        type: "SUCCESS";
        pickupAddress: string | null;
        onsiteAddress: string | null;
        learningType: "ONSITE" | "ONLINE";
        receiveMethod: "SHIPPING" | "PICKUP" | null;
        addonName: string | null;
        shippingAddress: {
            id: string;
            userId: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string;
            address: string;
            province: string;
            district: string;
            subdistrict: string;
            postalCode: string;
        } | null;
        paymentMethod: "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
        chargedCard: {
            id: string;
            brand: string;
            lastDigits: string;
            expirationMonth: number;
            expirationYear: number;
        } | null;
    }, {
        type: "SUCCESS";
        pickupAddress: string | null;
        onsiteAddress: string | null;
        learningType: "ONSITE" | "ONLINE";
        receiveMethod: "SHIPPING" | "PICKUP" | null;
        addonName: string | null;
        shippingAddress: {
            id: string;
            userId: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string;
            address: string;
            province: string;
            district: string;
            subdistrict: string;
            postalCode: string;
        } | null;
        paymentMethod: "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
        chargedCard: {
            id: string;
            brand: string;
            lastDigits: string;
            expirationMonth: number;
            expirationYear: number;
        } | null;
    }>]>;
    liveCourse: z.ZodObject<{
        type: z.ZodNativeEnum<{
            LIVE: "LIVE";
            FUSION: "FUSION";
            TAPE: "TAPE";
            ONSITE: "ONSITE";
        }>;
        id: z.ZodString;
        name: z.ZodString;
        courseCoverUrl: z.ZodNullable<z.ZodString>;
        courseStickerUrl: z.ZodNullable<z.ZodString>;
        startDate: z.ZodString;
        endDate: z.ZodString;
        lastEnrollmentDate: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        name: string;
        courseCoverUrl: string | null;
        courseStickerUrl: string | null;
        startDate: string;
        endDate: string;
        lastEnrollmentDate: string | null;
    }, {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        name: string;
        courseCoverUrl: string | null;
        courseStickerUrl: string | null;
        startDate: string;
        endDate: string;
        lastEnrollmentDate: string | null;
    }>;
    discountCode: z.ZodNullable<z.ZodObject<{
        code: z.ZodString;
        discount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        code: string;
        discount: number;
    }, {
        code: string;
        discount: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    status: {
        type: "PENDING";
        additionalSteps: {
            type: "CREDIT_CARD";
            authorizeUrl: string | null;
        } | {
            type: "PROMPTPAY";
            expiresAt: string;
            qrCodeUrl: string;
        } | {
            type: "TRUEMONEY";
            authorizeUrl: string;
        } | {
            type: "MOBILE_BANKING";
            authorizeUrl: string;
        };
    } | {
        type: "FAILED";
    } | {
        type: "SUCCESS";
        pickupAddress: string | null;
        onsiteAddress: string | null;
        learningType: "ONSITE" | "ONLINE";
        receiveMethod: "SHIPPING" | "PICKUP" | null;
        addonName: string | null;
        shippingAddress: {
            id: string;
            userId: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string;
            address: string;
            province: string;
            district: string;
            subdistrict: string;
            postalCode: string;
        } | null;
        paymentMethod: "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
        chargedCard: {
            id: string;
            brand: string;
            lastDigits: string;
            expirationMonth: number;
            expirationYear: number;
        } | null;
    };
    id: string;
    summary: {
        shippingPrice: number;
        basePrice: number;
        amount: number;
        addon: {
            name: string;
            price: number;
        } | null;
    };
    liveCourse: {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        name: string;
        courseCoverUrl: string | null;
        courseStickerUrl: string | null;
        startDate: string;
        endDate: string;
        lastEnrollmentDate: string | null;
    };
    bookingId: string;
    discountCode: {
        code: string;
        discount: number;
    } | null;
}, {
    status: {
        type: "PENDING";
        additionalSteps: {
            type: "CREDIT_CARD";
            authorizeUrl: string | null;
        } | {
            type: "PROMPTPAY";
            expiresAt: string;
            qrCodeUrl: string;
        } | {
            type: "TRUEMONEY";
            authorizeUrl: string;
        } | {
            type: "MOBILE_BANKING";
            authorizeUrl: string;
        };
    } | {
        type: "FAILED";
    } | {
        type: "SUCCESS";
        pickupAddress: string | null;
        onsiteAddress: string | null;
        learningType: "ONSITE" | "ONLINE";
        receiveMethod: "SHIPPING" | "PICKUP" | null;
        addonName: string | null;
        shippingAddress: {
            id: string;
            userId: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            phone: string;
            address: string;
            province: string;
            district: string;
            subdistrict: string;
            postalCode: string;
        } | null;
        paymentMethod: "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
        chargedCard: {
            id: string;
            brand: string;
            lastDigits: string;
            expirationMonth: number;
            expirationYear: number;
        } | null;
    };
    id: string;
    summary: {
        shippingPrice: number;
        basePrice: number;
        amount: number;
        addon: {
            name: string;
            price: number;
        } | null;
    };
    liveCourse: {
        type: "LIVE" | "FUSION" | "TAPE" | "ONSITE";
        id: string;
        name: string;
        courseCoverUrl: string | null;
        courseStickerUrl: string | null;
        startDate: string;
        endDate: string;
        lastEnrollmentDate: string | null;
    };
    bookingId: string;
    discountCode: {
        code: string;
        discount: number;
    } | null;
}>;
export type PaymentCharge = z.infer<typeof PaymentCharge>;
export declare const CreditCard: z.ZodObject<{
    id: z.ZodString;
    bank: z.ZodString;
    lastDigits: z.ZodString;
    brand: z.ZodString;
    expirationMonth: z.ZodNumber;
    expirationYear: z.ZodNumber;
    name: z.ZodString;
    securityCodeCheck: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: string;
    brand: string;
    name: string;
    lastDigits: string;
    expirationMonth: number;
    expirationYear: number;
    bank: string;
    securityCodeCheck: boolean;
}, {
    id: string;
    brand: string;
    name: string;
    lastDigits: string;
    expirationMonth: number;
    expirationYear: number;
    bank: string;
    securityCodeCheck: boolean;
}>;
export type CreditCard = z.infer<typeof CreditCard>;
export declare const GetCreditCardsResponse: z.ZodObject<{
    defaultCard: z.ZodNullable<z.ZodString>;
    cards: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        bank: z.ZodString;
        lastDigits: z.ZodString;
        brand: z.ZodString;
        expirationMonth: z.ZodNumber;
        expirationYear: z.ZodNumber;
        name: z.ZodString;
        securityCodeCheck: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: string;
        brand: string;
        name: string;
        lastDigits: string;
        expirationMonth: number;
        expirationYear: number;
        bank: string;
        securityCodeCheck: boolean;
    }, {
        id: string;
        brand: string;
        name: string;
        lastDigits: string;
        expirationMonth: number;
        expirationYear: number;
        bank: string;
        securityCodeCheck: boolean;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    defaultCard: string | null;
    cards: {
        id: string;
        brand: string;
        name: string;
        lastDigits: string;
        expirationMonth: number;
        expirationYear: number;
        bank: string;
        securityCodeCheck: boolean;
    }[];
}, {
    defaultCard: string | null;
    cards: {
        id: string;
        brand: string;
        name: string;
        lastDigits: string;
        expirationMonth: number;
        expirationYear: number;
        bank: string;
        securityCodeCheck: boolean;
    }[];
}>;
export type GetCreditCardsResponse = z.infer<typeof GetCreditCardsResponse>;
export {};
//# sourceMappingURL=query.d.ts.map