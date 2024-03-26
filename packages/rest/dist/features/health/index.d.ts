export declare const healthContract: {
    health: {
        summary: "Health check";
        description: "This is a health check endpoint. It returns a message to indicate that the API is up and running.";
        responses: {
            200: import("zod").ZodObject<{
                message: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                message: string;
            }, {
                message: string;
            }>;
        };
        method: "GET";
        path: "";
    };
};
//# sourceMappingURL=index.d.ts.map