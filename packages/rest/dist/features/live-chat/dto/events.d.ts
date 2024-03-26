import { z } from 'zod';
export declare const LiveChatUpdateEvents: z.ZodObject<{
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
}>;
export type LiveChatUpdateEvents = z.infer<typeof LiveChatUpdateEvents>;
//# sourceMappingURL=events.d.ts.map