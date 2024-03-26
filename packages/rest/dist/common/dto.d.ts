import { z } from 'zod';
export declare const PaginationArgs: z.ZodObject<{
    take: z.ZodDefault<z.ZodNumber>;
    skip: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    take: number;
    skip: number;
}, {
    take?: number | undefined;
    skip?: number | undefined;
}>;
export declare const FileUploadDetails: z.ZodObject<{
    url: z.ZodString;
    token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
    token: string;
}, {
    url: string;
    token: string;
}>;
export type FileUploadDetails = z.infer<typeof FileUploadDetails>;
//# sourceMappingURL=dto.d.ts.map