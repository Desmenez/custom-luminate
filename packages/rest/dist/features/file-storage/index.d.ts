import { z } from 'zod';
export * from './dto';
export declare const fileStorageContract: {
    onFileUploadComplete: {
        responses: {
            200: z.ZodLiteral<"ok">;
        };
        method: "POST";
        body: z.ZodObject<{
            token: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            token: string;
        }, {
            token: string;
        }>;
        path: "/on-complete";
    };
};
//# sourceMappingURL=index.d.ts.map