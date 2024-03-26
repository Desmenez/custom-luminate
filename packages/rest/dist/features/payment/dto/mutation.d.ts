import { z } from 'zod';
export declare const BookingCreateInput: z.ZodObject<{
    liveCourseId: z.ZodString;
    learningType: z.ZodNativeEnum<{
        ONLINE: "ONLINE";
        ONSITE: "ONSITE";
    }>;
    addonId: z.ZodNullable<z.ZodString>;
    receiveMethod: z.ZodNullable<z.ZodNativeEnum<{
        SHIPPING: "SHIPPING";
        PICKUP: "PICKUP";
    }>>;
    shippingAddress: z.ZodNullable<z.ZodObject<{
        name: z.ZodString;
        telephone: z.ZodString;
        address: z.ZodString;
        province: z.ZodString;
        district: z.ZodString;
        subDistrict: z.ZodString;
        postalCode: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        address: string;
        province: string;
        district: string;
        postalCode: string;
        telephone: string;
        subDistrict: string;
    }, {
        name: string;
        address: string;
        province: string;
        district: string;
        postalCode: string;
        telephone: string;
        subDistrict: string;
    }>>;
    removeExistingBooking: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    liveCourseId: string;
    learningType: "ONSITE" | "ONLINE";
    receiveMethod: "SHIPPING" | "PICKUP" | null;
    shippingAddress: {
        name: string;
        address: string;
        province: string;
        district: string;
        postalCode: string;
        telephone: string;
        subDistrict: string;
    } | null;
    addonId: string | null;
    removeExistingBooking?: boolean | undefined;
}, {
    liveCourseId: string;
    learningType: "ONSITE" | "ONLINE";
    receiveMethod: "SHIPPING" | "PICKUP" | null;
    shippingAddress: {
        name: string;
        address: string;
        province: string;
        district: string;
        postalCode: string;
        telephone: string;
        subDistrict: string;
    } | null;
    addonId: string | null;
    removeExistingBooking?: boolean | undefined;
}>;
export type BookingCreateInput = z.infer<typeof BookingCreateInput>;
export declare const BookingCreateResponse: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
    ok: z.ZodLiteral<true>;
    value: z.ZodObject<{
        bookingId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        bookingId: string;
    }, {
        bookingId: string;
    }>;
}, "strip", z.ZodTypeAny, {
    value: {
        bookingId: string;
    };
    ok: true;
}, {
    value: {
        bookingId: string;
    };
    ok: true;
}>, z.ZodObject<{
    ok: z.ZodLiteral<false>;
    error: z.ZodDiscriminatedUnion<"code", [z.ZodObject<{
        code: z.ZodLiteral<"LIVE_COURSE_NOT_FOUND">;
    }, "strip", z.ZodTypeAny, {
        code: "LIVE_COURSE_NOT_FOUND";
    }, {
        code: "LIVE_COURSE_NOT_FOUND";
    }>, z.ZodObject<{
        code: z.ZodLiteral<"REGISTRATION_DEADLINE_PASSED">;
    }, "strip", z.ZodTypeAny, {
        code: "REGISTRATION_DEADLINE_PASSED";
    }, {
        code: "REGISTRATION_DEADLINE_PASSED";
    }>, z.ZodObject<{
        code: z.ZodLiteral<"ALREADY_HAS_COURSE">;
    }, "strip", z.ZodTypeAny, {
        code: "ALREADY_HAS_COURSE";
    }, {
        code: "ALREADY_HAS_COURSE";
    }>, z.ZodObject<{
        code: z.ZodLiteral<"ADDON_NOT_FOUND">;
    }, "strip", z.ZodTypeAny, {
        code: "ADDON_NOT_FOUND";
    }, {
        code: "ADDON_NOT_FOUND";
    }>, z.ZodObject<{
        code: z.ZodLiteral<"INVALID_LEARNING_TYPE">;
    }, "strip", z.ZodTypeAny, {
        code: "INVALID_LEARNING_TYPE";
    }, {
        code: "INVALID_LEARNING_TYPE";
    }>, z.ZodObject<{
        code: z.ZodLiteral<"NO_AVAILABLE_SEATS">;
    }, "strip", z.ZodTypeAny, {
        code: "NO_AVAILABLE_SEATS";
    }, {
        code: "NO_AVAILABLE_SEATS";
    }>, z.ZodObject<{
        code: z.ZodLiteral<"INVALID_RECEIVE_METHOD">;
    }, "strip", z.ZodTypeAny, {
        code: "INVALID_RECEIVE_METHOD";
    }, {
        code: "INVALID_RECEIVE_METHOD";
    }>, z.ZodObject<{
        code: z.ZodLiteral<"MISSING_SHIPPING_ADDRESS">;
    }, "strip", z.ZodTypeAny, {
        code: "MISSING_SHIPPING_ADDRESS";
    }, {
        code: "MISSING_SHIPPING_ADDRESS";
    }>, z.ZodObject<{
        code: z.ZodLiteral<"PENDING_EXISTING_BOOKING">;
        input: z.ZodObject<{
            liveCourseId: z.ZodString;
            learningType: z.ZodNativeEnum<{
                ONLINE: "ONLINE";
                ONSITE: "ONSITE";
            }>;
            addonId: z.ZodNullable<z.ZodString>;
            receiveMethod: z.ZodNullable<z.ZodNativeEnum<{
                SHIPPING: "SHIPPING";
                PICKUP: "PICKUP";
            }>>;
            shippingAddress: z.ZodNullable<z.ZodObject<{
                name: z.ZodString;
                telephone: z.ZodString;
                address: z.ZodString;
                province: z.ZodString;
                district: z.ZodString;
                subDistrict: z.ZodString;
                postalCode: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                address: string;
                province: string;
                district: string;
                postalCode: string;
                telephone: string;
                subDistrict: string;
            }, {
                name: string;
                address: string;
                province: string;
                district: string;
                postalCode: string;
                telephone: string;
                subDistrict: string;
            }>>;
            removeExistingBooking: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            liveCourseId: string;
            learningType: "ONSITE" | "ONLINE";
            receiveMethod: "SHIPPING" | "PICKUP" | null;
            shippingAddress: {
                name: string;
                address: string;
                province: string;
                district: string;
                postalCode: string;
                telephone: string;
                subDistrict: string;
            } | null;
            addonId: string | null;
            removeExistingBooking?: boolean | undefined;
        }, {
            liveCourseId: string;
            learningType: "ONSITE" | "ONLINE";
            receiveMethod: "SHIPPING" | "PICKUP" | null;
            shippingAddress: {
                name: string;
                address: string;
                province: string;
                district: string;
                postalCode: string;
                telephone: string;
                subDistrict: string;
            } | null;
            addonId: string | null;
            removeExistingBooking?: boolean | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        code: "PENDING_EXISTING_BOOKING";
        input: {
            liveCourseId: string;
            learningType: "ONSITE" | "ONLINE";
            receiveMethod: "SHIPPING" | "PICKUP" | null;
            shippingAddress: {
                name: string;
                address: string;
                province: string;
                district: string;
                postalCode: string;
                telephone: string;
                subDistrict: string;
            } | null;
            addonId: string | null;
            removeExistingBooking?: boolean | undefined;
        };
    }, {
        code: "PENDING_EXISTING_BOOKING";
        input: {
            liveCourseId: string;
            learningType: "ONSITE" | "ONLINE";
            receiveMethod: "SHIPPING" | "PICKUP" | null;
            shippingAddress: {
                name: string;
                address: string;
                province: string;
                district: string;
                postalCode: string;
                telephone: string;
                subDistrict: string;
            } | null;
            addonId: string | null;
            removeExistingBooking?: boolean | undefined;
        };
    }>]>;
}, "strip", z.ZodTypeAny, {
    error: {
        code: "ALREADY_HAS_COURSE";
    } | {
        code: "LIVE_COURSE_NOT_FOUND";
    } | {
        code: "REGISTRATION_DEADLINE_PASSED";
    } | {
        code: "ADDON_NOT_FOUND";
    } | {
        code: "INVALID_LEARNING_TYPE";
    } | {
        code: "NO_AVAILABLE_SEATS";
    } | {
        code: "INVALID_RECEIVE_METHOD";
    } | {
        code: "MISSING_SHIPPING_ADDRESS";
    } | {
        code: "PENDING_EXISTING_BOOKING";
        input: {
            liveCourseId: string;
            learningType: "ONSITE" | "ONLINE";
            receiveMethod: "SHIPPING" | "PICKUP" | null;
            shippingAddress: {
                name: string;
                address: string;
                province: string;
                district: string;
                postalCode: string;
                telephone: string;
                subDistrict: string;
            } | null;
            addonId: string | null;
            removeExistingBooking?: boolean | undefined;
        };
    };
    ok: false;
}, {
    error: {
        code: "ALREADY_HAS_COURSE";
    } | {
        code: "LIVE_COURSE_NOT_FOUND";
    } | {
        code: "REGISTRATION_DEADLINE_PASSED";
    } | {
        code: "ADDON_NOT_FOUND";
    } | {
        code: "INVALID_LEARNING_TYPE";
    } | {
        code: "NO_AVAILABLE_SEATS";
    } | {
        code: "INVALID_RECEIVE_METHOD";
    } | {
        code: "MISSING_SHIPPING_ADDRESS";
    } | {
        code: "PENDING_EXISTING_BOOKING";
        input: {
            liveCourseId: string;
            learningType: "ONSITE" | "ONLINE";
            receiveMethod: "SHIPPING" | "PICKUP" | null;
            shippingAddress: {
                name: string;
                address: string;
                province: string;
                district: string;
                postalCode: string;
                telephone: string;
                subDistrict: string;
            } | null;
            addonId: string | null;
            removeExistingBooking?: boolean | undefined;
        };
    };
    ok: false;
}>]>;
declare const ChargeSource: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"CREDIT_CARD">;
    cardId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "CREDIT_CARD";
    cardId: string;
}, {
    type: "CREDIT_CARD";
    cardId: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"PROMPTPAY">;
    sourceId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "PROMPTPAY";
    sourceId: string;
}, {
    type: "PROMPTPAY";
    sourceId: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"TRUEMONEY">;
    sourceId: z.ZodString;
    returnUrl: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "TRUEMONEY";
    sourceId: string;
    returnUrl: string;
}, {
    type: "TRUEMONEY";
    sourceId: string;
    returnUrl: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"MOBILE_BANKING">;
    sourceId: z.ZodString;
    returnUrl: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "MOBILE_BANKING";
    sourceId: string;
    returnUrl: string;
}, {
    type: "MOBILE_BANKING";
    sourceId: string;
    returnUrl: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"NONE">;
}, "strip", z.ZodTypeAny, {
    type: "NONE";
}, {
    type: "NONE";
}>]>;
export type ChargeSource = z.infer<typeof ChargeSource>;
export declare const ChargeCreateInput: z.ZodObject<{
    bookingId: z.ZodString;
    discountCode: z.ZodNullable<z.ZodString>;
    source: z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
        type: z.ZodLiteral<"CREDIT_CARD">;
        cardId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "CREDIT_CARD";
        cardId: string;
    }, {
        type: "CREDIT_CARD";
        cardId: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"PROMPTPAY">;
        sourceId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "PROMPTPAY";
        sourceId: string;
    }, {
        type: "PROMPTPAY";
        sourceId: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"TRUEMONEY">;
        sourceId: z.ZodString;
        returnUrl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "TRUEMONEY";
        sourceId: string;
        returnUrl: string;
    }, {
        type: "TRUEMONEY";
        sourceId: string;
        returnUrl: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"MOBILE_BANKING">;
        sourceId: z.ZodString;
        returnUrl: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "MOBILE_BANKING";
        sourceId: string;
        returnUrl: string;
    }, {
        type: "MOBILE_BANKING";
        sourceId: string;
        returnUrl: string;
    }>, z.ZodObject<{
        type: z.ZodLiteral<"NONE">;
    }, "strip", z.ZodTypeAny, {
        type: "NONE";
    }, {
        type: "NONE";
    }>]>;
}, "strip", z.ZodTypeAny, {
    bookingId: string;
    discountCode: string | null;
    source: {
        type: "CREDIT_CARD";
        cardId: string;
    } | {
        type: "PROMPTPAY";
        sourceId: string;
    } | {
        type: "TRUEMONEY";
        sourceId: string;
        returnUrl: string;
    } | {
        type: "MOBILE_BANKING";
        sourceId: string;
        returnUrl: string;
    } | {
        type: "NONE";
    };
}, {
    bookingId: string;
    discountCode: string | null;
    source: {
        type: "CREDIT_CARD";
        cardId: string;
    } | {
        type: "PROMPTPAY";
        sourceId: string;
    } | {
        type: "TRUEMONEY";
        sourceId: string;
        returnUrl: string;
    } | {
        type: "MOBILE_BANKING";
        sourceId: string;
        returnUrl: string;
    } | {
        type: "NONE";
    };
}>;
export type ChargeCreateInput = z.infer<typeof ChargeCreateInput>;
export declare const ChargeCreateResponse: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
    ok: z.ZodLiteral<true>;
    value: z.ZodObject<{
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
                NONE: "NONE";
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
            paymentMethod: "NONE" | "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
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
            paymentMethod: "NONE" | "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
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
            paymentMethod: "NONE" | "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
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
            paymentMethod: "NONE" | "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
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
}, "strip", z.ZodTypeAny, {
    value: {
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
            paymentMethod: "NONE" | "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
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
    };
    ok: true;
}, {
    value: {
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
            paymentMethod: "NONE" | "CREDIT_CARD" | "PROMPTPAY" | "TRUEMONEY" | "MOBILE_BANKING";
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
    };
    ok: true;
}>, z.ZodObject<{
    ok: z.ZodLiteral<false>;
    error: z.ZodDiscriminatedUnion<"code", [z.ZodObject<{
        code: z.ZodLiteral<"BOOKING_NOT_FOUND">;
    }, "strip", z.ZodTypeAny, {
        code: "BOOKING_NOT_FOUND";
    }, {
        code: "BOOKING_NOT_FOUND";
    }>, z.ZodObject<{
        code: z.ZodLiteral<"INVALID_BOOKING_STATUS">;
    }, "strip", z.ZodTypeAny, {
        code: "INVALID_BOOKING_STATUS";
    }, {
        code: "INVALID_BOOKING_STATUS";
    }>, z.ZodObject<{
        code: z.ZodLiteral<"BOOKING_EXPIRED">;
    }, "strip", z.ZodTypeAny, {
        code: "BOOKING_EXPIRED";
    }, {
        code: "BOOKING_EXPIRED";
    }>, z.ZodObject<{
        code: z.ZodLiteral<"ALREADY_HAS_COURSE">;
    }, "strip", z.ZodTypeAny, {
        code: "ALREADY_HAS_COURSE";
    }, {
        code: "ALREADY_HAS_COURSE";
    }>]>;
}, "strip", z.ZodTypeAny, {
    error: {
        code: "ALREADY_HAS_COURSE";
    } | {
        code: "BOOKING_NOT_FOUND";
    } | {
        code: "INVALID_BOOKING_STATUS";
    } | {
        code: "BOOKING_EXPIRED";
    };
    ok: false;
}, {
    error: {
        code: "ALREADY_HAS_COURSE";
    } | {
        code: "BOOKING_NOT_FOUND";
    } | {
        code: "INVALID_BOOKING_STATUS";
    } | {
        code: "BOOKING_EXPIRED";
    };
    ok: false;
}>]>;
export declare const AddCreditCardInput: z.ZodObject<{
    cardToken: z.ZodString;
    useAsDefault: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    cardToken: string;
    useAsDefault: boolean;
}, {
    cardToken: string;
    useAsDefault: boolean;
}>;
export type AddCardInput = z.infer<typeof AddCreditCardInput>;
export declare const CheckDiscountCodeResponse: z.ZodNullable<z.ZodObject<{
    code: z.ZodString;
    discount: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    code: string;
    discount: number;
}, {
    code: string;
    discount: number;
}>>;
export type CheckDiscountCodeResponse = z.infer<typeof CheckDiscountCodeResponse>;
export {};
//# sourceMappingURL=mutation.d.ts.map