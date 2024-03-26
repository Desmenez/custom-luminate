export declare const subjectContract: {
    getSubjects: {
        responses: {
            200: import("zod").ZodArray<import("zod").ZodNullable<import("zod").ZodObject<{
                id: import("zod").ZodString;
                name: import("zod").ZodString;
                code: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                code: string;
                id: string;
                name: string;
            }, {
                code: string;
                id: string;
                name: string;
            }>>, "many">;
        };
        method: "GET";
        path: "";
    };
};
//# sourceMappingURL=index.d.ts.map