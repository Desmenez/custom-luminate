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
}>;
export type BookingCreateInput = z.infer<typeof BookingCreateInput>;
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
    };
}>;
export type ChargeCreateInput = z.infer<typeof ChargeCreateInput>;
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