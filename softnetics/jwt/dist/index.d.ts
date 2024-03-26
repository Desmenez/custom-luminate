import * as jwt from 'jsonwebtoken';
import jwt__default from 'jsonwebtoken';

declare enum JwtSecretRequestType {
    SIGN = 0,
    VERIFY = 1
}
interface JwtModuleOptions {
    global?: boolean;
    signOptions?: jwt.SignOptions;
    secret?: string;
    publicKey?: string;
    privateKey?: jwt.Secret;
    secretOrPrivateKey?: jwt.Secret;
    secretOrKeyProvider?: (requestType: JwtSecretRequestType, tokenOrPayload: string | object, options?: jwt.VerifyOptions | jwt.SignOptions) => jwt.Secret;
    verifyOptions?: jwt.VerifyOptions;
}
interface JwtSignOptions extends jwt.SignOptions {
    secret?: string;
    privateKey?: jwt.Secret;
}
interface JwtVerifyOptions extends jwt.VerifyOptions {
    secret?: string;
    publicKey?: string;
}

declare class JwtLibrary {
    private readonly options;
    constructor(options?: JwtModuleOptions);
    sign(payload: string, options?: Omit<JwtSignOptions, keyof jwt__default.SignOptions>): string;
    sign(payload: object, options?: JwtSignOptions): string;
    signAsync(payload: string, options?: Omit<JwtSignOptions, keyof jwt__default.SignOptions>): Promise<string>;
    signAsync(payload: object, options?: JwtSignOptions): Promise<string>;
    verify<T extends object = {}>(token: string, options?: JwtVerifyOptions): T;
    verifyAsync<T extends object = {}>(token: string, options?: JwtVerifyOptions): Promise<T>;
    decode(token: string, options?: jwt__default.DecodeOptions): null | {
        [key: string]: unknown;
    } | string;
    private mergeJwtOptions;
    private getSecretKey;
}
type IJwtLibrary = JwtLibrary;

export { IJwtLibrary, JwtLibrary };
