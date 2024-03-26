import * as jwt from 'jsonwebtoken'

export enum JwtSecretRequestType {
  SIGN,
  VERIFY,
}

export interface JwtModuleOptions {
  global?: boolean
  signOptions?: jwt.SignOptions
  secret?: string
  publicKey?: string
  privateKey?: jwt.Secret
  /**
   * @deprecated
   */
  secretOrPrivateKey?: jwt.Secret
  secretOrKeyProvider?: (
    requestType: JwtSecretRequestType,
    tokenOrPayload: string | object,
    options?: jwt.VerifyOptions | jwt.SignOptions
  ) => jwt.Secret
  verifyOptions?: jwt.VerifyOptions
}

export interface JwtSignOptions extends jwt.SignOptions {
  secret?: string
  privateKey?: jwt.Secret
}

export interface JwtVerifyOptions extends jwt.VerifyOptions {
  secret?: string
  publicKey?: string
}
