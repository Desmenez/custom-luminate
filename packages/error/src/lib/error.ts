import { ServiceName } from './backend-services'
import {
  BadInputMarketplaceErrorCodeType,
  UnauthorizedMarketplaceErrorCodeType,
  badInputMarketplaceErrorDetail,
  unauthorizedMarketplaceErrorDetail,
} from './marketplace'
import { BadInputPackageErrorCodeType } from './package'
import { BadInputSiteContentErrorCodeType, badInputUserErrorDetail } from './site-content'
import { ErrorInterfaceDetail } from './types'

export type BadInputErrorCodeByService<T extends ServiceName> = T extends 'marketplace'
  ? BadInputMarketplaceErrorCodeType
  : T extends 'package'
  ? BadInputPackageErrorCodeType
  : T extends 'site-content'
  ? BadInputSiteContentErrorCodeType
  : string
type UnauthorizedErrorCodeByService<T extends ServiceName> = T extends 'marketplace'
  ? UnauthorizedMarketplaceErrorCodeType
  : string

// type ErrorCodeByService<T extends ServiceName> = BadInputErrorCodeByService<T> | UnauthorizedErrorCodeByService<T>;

export abstract class KnownError extends Error {
  public status?: number
  public code?: string
  public properties?: Record<string, unknown>
}

export abstract class BackendError<T extends ServiceName> extends KnownError {
  public serviceName?: T
}

export class BadInputError<T extends ServiceName> extends BackendError<T> {
  constructor(
    public readonly serviceName: T,
    code: BadInputErrorCodeByService<T>,
    message?: string,
    public readonly properties?: Record<string, unknown>
  ) {
    super()

    let errorDetail: ErrorInterfaceDetail = {
      message: message ?? code,
    }

    switch (serviceName) {
      case 'marketplace':
        errorDetail = badInputMarketplaceErrorDetail(code as BadInputMarketplaceErrorCodeType)
        break
      case 'site-content':
        errorDetail = badInputUserErrorDetail(code as BadInputSiteContentErrorCodeType)
    }
    this.message = errorDetail.message
    this.code = code
  }
}

export class AuthorizationError<T extends ServiceName> extends BackendError<T> {
  public status = 401

  constructor(
    public readonly serviceName: T,
    public readonly code: UnauthorizedErrorCodeByService<T>,
    message?: string,
    public readonly properties?: Record<string, unknown>
  ) {
    super()

    let errorDetail: ErrorInterfaceDetail = {
      message: message ?? code,
    }

    switch (serviceName) {
      case 'marketplace':
        errorDetail = unauthorizedMarketplaceErrorDetail(
          code as UnauthorizedMarketplaceErrorCodeType
        )
        break
    }
    this.message = errorDetail.message
    this.code = code
  }
}

export function getErrorDetail<T extends ServiceName>(err: BackendError<T>): ErrorInterfaceDetail {
  switch (err.serviceName) {
    case 'marketplace':
      if (err instanceof BadInputError) {
        return badInputMarketplaceErrorDetail(err.code as BadInputMarketplaceErrorCodeType)
      } else {
        return unauthorizedMarketplaceErrorDetail(err.code as UnauthorizedMarketplaceErrorCodeType)
      }
    default:
      return {
        code: err.code ?? 'INTERNAL_SERVER_ERROR',
        message: err.code ?? 'Internal server error',
      }
  }
}
