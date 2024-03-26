import { z } from 'zod';
export declare const LoginTutorWithPasswordRequest: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
}, {
    username: string;
    password: string;
}>;
export declare const loginTutorWithPasswordResponse: z.ZodObject<{
    token: z.ZodString;
    refreshToken: z.ZodString;
}, "strip", z.ZodTypeAny, {
    token: string;
    refreshToken: string;
}, {
    token: string;
    refreshToken: string;
}>;
//# sourceMappingURL=mutation.d.ts.map