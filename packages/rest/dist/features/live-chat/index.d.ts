import { z } from 'zod';
export * from './dto';
export declare const liveChatContract: {
    getLiveChat: {
        query: z.ZodObject<{
            liveSessionId: z.ZodString;
            startIndex: z.ZodNumber;
            endIndex: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            liveSessionId: string;
            startIndex: number;
            endIndex: number;
        }, {
            liveSessionId: string;
            startIndex: number;
            endIndex: number;
        }>;
        summary: "Get Chats of live session";
        responses: {
            200: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
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
        };
        method: "GET";
        path: "";
    };
    sendLiveChat: {
        summary: "Chat to live session";
        responses: {
            200: z.ZodDiscriminatedUnion<"ok", [z.ZodObject<{
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
        };
        method: "POST";
        body: z.ZodIntersection<z.ZodObject<{
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
        path: "";
    };
};
//# sourceMappingURL=index.d.ts.map