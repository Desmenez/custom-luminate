import jwt from 'jsonwebtoken'

import { JwtModuleOptions, JwtSecretRequestType, JwtSignOptions, JwtVerifyOptions } from './types'

export class JwtLibrary {
  constructor(private readonly options: JwtModuleOptions = {}) {}

  sign(payload: string, options?: Omit<JwtSignOptions, keyof jwt.SignOptions>): string
  sign(payload: object, options?: JwtSignOptions): string
  sign(payload: string | object, options?: JwtSignOptions): string {
    const signOptions = this.mergeJwtOptions({ ...options }, 'signOptions') as jwt.SignOptions
    const secret = this.getSecretKey(payload, options, 'privateKey', JwtSecretRequestType.SIGN)

    const allowedSignOptKeys = ['secret', 'privateKey']
    const signOptKeys = Object.keys(signOptions)
    if (typeof payload === 'string' && signOptKeys.some((k) => !allowedSignOptKeys.includes(k))) {
      throw new Error(
        'Payload as string is not allowed with the following sign options: ' +
          signOptKeys.join(', ')
      )
    }

    return jwt.sign(payload, secret, signOptions)
  }

  signAsync(payload: string, options?: Omit<JwtSignOptions, keyof jwt.SignOptions>): Promise<string>
  signAsync(payload: object, options?: JwtSignOptions): Promise<string>
  signAsync(payload: string | object, options?: JwtSignOptions): Promise<string> {
    const signOptions = this.mergeJwtOptions({ ...options }, 'signOptions') as jwt.SignOptions
    const secret = this.getSecretKey(payload, options, 'privateKey', JwtSecretRequestType.SIGN)

    const allowedSignOptKeys = ['secret', 'privateKey']
    const signOptKeys = Object.keys(signOptions)
    if (typeof payload === 'string' && signOptKeys.some((k) => !allowedSignOptKeys.includes(k))) {
      throw new Error(
        'Payload as string is not allowed with the following sign options: ' +
          signOptKeys.join(', ')
      )
    }

    return new Promise((resolve, reject) =>
      jwt.sign(payload, secret, signOptions, (err, encoded) =>
        err ? reject(err) : resolve(encoded!)
      )
    )
  }

  verify<T extends object = {}>(token: string, options?: JwtVerifyOptions): T {
    const verifyOptions = this.mergeJwtOptions({ ...options }, 'verifyOptions')
    const secret = this.getSecretKey(token, options, 'publicKey', JwtSecretRequestType.VERIFY)

    return jwt.verify(token, secret, verifyOptions) as T
  }

  verifyAsync<T extends object = {}>(token: string, options?: JwtVerifyOptions): Promise<T> {
    const verifyOptions = this.mergeJwtOptions({ ...options }, 'verifyOptions')
    const secret = this.getSecretKey(token, options, 'publicKey', JwtSecretRequestType.VERIFY)

    return new Promise((resolve, reject) =>
      jwt.verify(token, secret, verifyOptions, (err, decoded) =>
        err ? reject(err) : resolve(decoded as T)
      )
    ) as Promise<T>
  }

  decode(token: string, options?: jwt.DecodeOptions): null | { [key: string]: unknown } | string {
    return jwt.decode(token, options)
  }

  private mergeJwtOptions(
    options: JwtVerifyOptions | JwtSignOptions,
    key: 'verifyOptions' | 'signOptions'
  ): jwt.VerifyOptions | jwt.SignOptions {
    delete options.secret
    if (key === 'signOptions') {
      delete (options as JwtSignOptions).privateKey
    } else {
      delete (options as JwtVerifyOptions).publicKey
    }
    return options
      ? ({
          ...(this.options[key] || {}),
          ...options,
        } as jwt.VerifyOptions | jwt.SignOptions)
      : this.options[key] ?? {}
  }

  private getSecretKey(
    token: string | object,
    options: JwtVerifyOptions | JwtSignOptions | undefined,
    key: 'publicKey' | 'privateKey',
    secretRequestType: JwtSecretRequestType
  ): string | jwt.Secret {
    let secret = this.options.secretOrKeyProvider
      ? this.options.secretOrKeyProvider(secretRequestType, token, options)
      : options?.secret ||
        this.options.secret ||
        (key === 'privateKey'
          ? (options as JwtSignOptions)?.privateKey || this.options.privateKey
          : (options as JwtVerifyOptions)?.publicKey || this.options.publicKey) ||
        this.options[key]

    if (this.options.secretOrPrivateKey) {
      secret = this.options.secretOrPrivateKey
    }
    return secret!
  }
}

export type IJwtLibrary = JwtLibrary
