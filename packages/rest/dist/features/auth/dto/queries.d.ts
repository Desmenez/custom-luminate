import { z } from 'zod';
export declare const MeResponse: z.ZodNullable<z.ZodObject<{
    id: z.ZodString;
    identity: z.ZodString;
    profileUrl: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    identity: string;
    profileUrl: string | null;
}, {
    id: string;
    identity: string;
    profileUrl: string | null;
}>>;
//# sourceMappingURL=queries.d.ts.map