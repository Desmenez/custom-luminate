import { z } from 'zod';
export declare const GetMockExamsResponse: z.ZodArray<z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    mockExamGroupType: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    name: string;
    mockExamGroupType: string;
}, {
    id: string;
    name: string;
    mockExamGroupType: string;
}>, "many">;
export type GetMockExamsResponse = z.infer<typeof GetMockExamsResponse>;
//# sourceMappingURL=query.d.ts.map