import { z } from 'zod';
export * from './dto';
export declare const webhookContract: {
    omise: {
        responses: {
            200: null;
        };
        method: "POST";
        body: z.ZodUnknown;
        path: "/omise";
    };
};
//# sourceMappingURL=index.d.ts.map