import { z } from 'zod';
export declare const sendChatPayload: z.ZodObject<{
    message: z.ZodString;
    timestamp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    timestamp: string;
}, {
    message: string;
    timestamp: string;
}>;
export type sendChatPayload = z.infer<typeof sendChatPayload>;
export declare const sendChatInput: z.ZodIntersection<z.ZodObject<{
    liveSessionId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    liveSessionId: string;
}, {
    liveSessionId: string;
}>, z.ZodObject<{
    message: z.ZodString;
    timestamp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
    timestamp: string;
}, {
    message: string;
    timestamp: string;
}>>;
export type sendChatInput = z.infer<typeof sendChatInput>;
export declare const sendChatResponse: z.ZodObject<{
    isSuccess: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    isSuccess: boolean;
}, {
    isSuccess: boolean;
}>;
export declare const ResponseSendChat: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
    ok: z.ZodLiteral<true>;
    value: z.ZodObject<{
        isSuccess: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        isSuccess: boolean;
    }, {
        isSuccess: boolean;
    }>;
}, "strip", z.ZodTypeAny, {
    value: {
        isSuccess: boolean;
    };
    ok: true;
}, {
    value: {
        isSuccess: boolean;
    };
    ok: true;
}>, z.ZodObject<{
    ok: z.ZodLiteral<false>;
    error: z.ZodDiscriminatedUnion<"code", [z.ZodObject<{
        code: z.ZodLiteral<"COULD_NOT_SENT_A_CHAT">;
    }, "strip", z.ZodTypeAny, {
        code: "COULD_NOT_SENT_A_CHAT";
    }, {
        code: "COULD_NOT_SENT_A_CHAT";
    }>, z.ZodObject<{
        code: z.ZodLiteral<"USER_NOT_FOUND">;
    }, "strip", z.ZodTypeAny, {
        code: "USER_NOT_FOUND";
    }, {
        code: "USER_NOT_FOUND";
    }>, z.ZodObject<{
        code: z.ZodLiteral<"LIVE_SESSION_NOT_FOUND">;
    }, "strip", z.ZodTypeAny, {
        code: "LIVE_SESSION_NOT_FOUND";
    }, {
        code: "LIVE_SESSION_NOT_FOUND";
    }>]>;
}, "strip", z.ZodTypeAny, {
    error: {
        code: "COULD_NOT_SENT_A_CHAT";
    } | {
        code: "USER_NOT_FOUND";
    } | {
        code: "LIVE_SESSION_NOT_FOUND";
    };
    ok: false;
}, {
    error: {
        code: "COULD_NOT_SENT_A_CHAT";
    } | {
        code: "USER_NOT_FOUND";
    } | {
        code: "LIVE_SESSION_NOT_FOUND";
    };
    ok: false;
}>]>;
//# sourceMappingURL=mutations.d.ts.map