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
//# sourceMappingURL=dto.d.ts.map