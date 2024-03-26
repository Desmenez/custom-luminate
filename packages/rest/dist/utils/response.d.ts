import { Result } from 'neverthrow';
import { ZodLiteral, ZodObject, ZodType, z } from 'zod';
type ApiResponse<T, E> = {
    ok: true;
    value: T;
} | {
    ok: false;
    error: E;
};
type ZodApiError = ZodObject<{
    code: ZodLiteral<string>;
}>;
export declare function zApiResponse<T extends ZodType, TErrors extends [ZodApiError, ...ZodApiError[]]>(schema: {
    value: T;
    errors: TErrors;
}): z.ZodDiscriminatedUnion<"ok", [ZodObject<{
    ok: ZodLiteral<true>;
    value: T;
}, "strip", z.ZodTypeAny, { [k_1 in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    ok: ZodLiteral<true>;
    value: T;
}>, "ok" | (undefined extends T["_output"] ? never : "value")>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    ok: ZodLiteral<true>;
    value: T;
}>, "ok" | (undefined extends T["_output"] ? never : "value")>[k_1]; }, { [k_2 in keyof z.baseObjectInputType<{
    ok: ZodLiteral<true>;
    value: T;
}>]: z.baseObjectInputType<{
    ok: ZodLiteral<true>;
    value: T;
}>[k_2]; }>, ZodObject<{
    ok: ZodLiteral<false>;
    error: z.ZodDiscriminatedUnion<"code", TErrors>;
}, "strip", z.ZodTypeAny, { [k_1_1 in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    ok: ZodLiteral<false>;
    error: z.ZodDiscriminatedUnion<"code", TErrors>;
}>, "ok" | (undefined extends z.output<TErrors[number]> ? never : "error")>]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    ok: ZodLiteral<false>;
    error: z.ZodDiscriminatedUnion<"code", TErrors>;
}>, "ok" | (undefined extends z.output<TErrors[number]> ? never : "error")>[k_1_1]; }, { [k_2_1 in keyof z.baseObjectInputType<{
    ok: ZodLiteral<false>;
    error: z.ZodDiscriminatedUnion<"code", TErrors>;
}>]: z.baseObjectInputType<{
    ok: ZodLiteral<false>;
    error: z.ZodDiscriminatedUnion<"code", TErrors>;
}>[k_2_1]; }>]>;
export declare function zApiError<const TCode extends string>(code: TCode): ZodObject<{
    code: ZodLiteral<TCode>;
}, "strip", z.ZodTypeAny, { [k_1 in keyof z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    code: ZodLiteral<TCode>;
}>, undefined extends TCode ? never : "code">]: z.objectUtil.addQuestionMarks<z.baseObjectOutputType<{
    code: ZodLiteral<TCode>;
}>, undefined extends TCode ? never : "code">[k_1]; }, { [k_2 in keyof z.baseObjectInputType<{
    code: ZodLiteral<TCode>;
}>]: z.baseObjectInputType<{
    code: ZodLiteral<TCode>;
}>[k_2]; }>;
export declare function toApiResponse<R extends Result<any, any>>(result: R): ApiResponse<R extends Result<infer T, unknown> ? T : never, R extends Result<unknown, infer E> ? E : never>;
export declare function fromApiResponse<T, E>(response: ApiResponse<T, E>): Result<T, E>;
export {};
//# sourceMappingURL=response.d.ts.map