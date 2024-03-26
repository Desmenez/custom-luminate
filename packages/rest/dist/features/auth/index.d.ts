import { z } from 'zod';
export declare const authContract: {
    me: {
        summary: "Get current user";
        responses: {
            200: z.ZodNullable<z.ZodObject<{
                id: z.ZodString;
                identity: z.ZodString;
                profileUrl: z.ZodNullable<z.ZodString>;
                displayName: z.ZodNullable<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                id: string;
                identity: string;
                profileUrl: string | null;
                displayName: string | null;
            }, {
                id: string;
                identity: string;
                profileUrl: string | null;
                displayName: string | null;
            }>>;
        };
        method: "GET";
        path: "/me";
    };
    loginAsStudent: {
        responses: {
            200: import("@ts-rest/core").ContractPlainType<{
                token: string;
                success: true;
            }>;
        };
        method: "POST";
        body: z.ZodObject<{
            userId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            userId: string;
        }, {
            userId: string;
        }>;
        path: "/login-as-student";
    };
    loginAsTutor: {
        responses: {
            200: import("@ts-rest/core").ContractPlainType<{
                token: string;
                success: true;
            }>;
        };
        method: "POST";
        body: z.ZodObject<{
            userId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            userId: string;
        }, {
            userId: string;
        }>;
        path: "/login-as-tutor";
    };
    loginTutorWithPassword: {
        responses: {
            200: z.ZodObject<{
                token: z.ZodString;
                refreshToken: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                token: string;
                refreshToken: string;
            }, {
                token: string;
                refreshToken: string;
            }>;
        };
        method: "POST";
        body: z.ZodObject<{
            username: z.ZodString;
            password: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            username: string;
            password: string;
        }, {
            username: string;
            password: string;
        }>;
        path: "/login-tutor-with-password";
    };
};
//# sourceMappingURL=index.d.ts.map