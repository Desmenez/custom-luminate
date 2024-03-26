import { z } from 'zod';
export declare const ChatResponses: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        message: z.ZodString;
        avatar: z.ZodNullable<z.ZodString>;
        timestamp: z.ZodDate;
    }, "strip", z.ZodTypeAny, {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    }, {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    }>, "many">;
    startIndex: z.ZodNumber;
    endIndex: z.ZodNumber;
    count: z.ZodNumber;
    messageTotal: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    data: {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    }[];
    startIndex: number;
    endIndex: number;
    count: number;
    messageTotal: number;
}, {
    data: {
        message: string;
        id: string;
        name: string;
        avatar: string | null;
        timestamp: Date;
    }[];
    startIndex: number;
    endIndex: number;
    count: number;
    messageTotal: number;
}>;
export type ChatResponses = z.infer<typeof ChatResponses>;
export declare const ResponseGetChat: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
    ok: z.ZodLiteral<true>;
    value: z.ZodObject<{
        data: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            name: z.ZodString;
            message: z.ZodString;
            avatar: z.ZodNullable<z.ZodString>;
            timestamp: z.ZodDate;
        }, "strip", z.ZodTypeAny, {
            message: string;
            id: string;
            name: string;
            avatar: string | null;
            timestamp: Date;
        }, {
            message: string;
            id: string;
            name: string;
            avatar: string | null;
            timestamp: Date;
        }>, "many">;
        startIndex: z.ZodNumber;
        endIndex: z.ZodNumber;
        count: z.ZodNumber;
        messageTotal: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        data: {
            message: string;
            id: string;
            name: string;
            avatar: string | null;
            timestamp: Date;
        }[];
        startIndex: number;
        endIndex: number;
        count: number;
        messageTotal: number;
    }, {
        data: {
            message: string;
            id: string;
            name: string;
            avatar: string | null;
            timestamp: Date;
        }[];
        startIndex: number;
        endIndex: number;
        count: number;
        messageTotal: number;
    }>;
}, "strip", z.ZodTypeAny, {
    value: {
        data: {
            message: string;
            id: string;
            name: string;
            avatar: string | null;
            timestamp: Date;
        }[];
        startIndex: number;
        endIndex: number;
        count: number;
        messageTotal: number;
    };
    ok: true;
}, {
    value: {
        data: {
            message: string;
            id: string;
            name: string;
            avatar: string | null;
            timestamp: Date;
        }[];
        startIndex: number;
        endIndex: number;
        count: number;
        messageTotal: number;
    };
    ok: true;
}>, z.ZodObject<{
    ok: z.ZodLiteral<false>;
    error: z.ZodDiscriminatedUnion<"code", [z.ZodObject<{
        code: z.ZodLiteral<"CHAT_NOT_FOUND">;
    }, "strip", z.ZodTypeAny, {
        code: "CHAT_NOT_FOUND";
    }, {
        code: "CHAT_NOT_FOUND";
    }>]>;
}, "strip", z.ZodTypeAny, {
    error: {
        code: "CHAT_NOT_FOUND";
    };
    ok: false;
}, {
    error: {
        code: "CHAT_NOT_FOUND";
    };
    ok: false;
}>]>;
//# sourceMappingURL=queries.d.ts.map