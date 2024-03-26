import { ReactElement, ReactNode } from 'react'

import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ValueOf } from 'next/dist/shared/lib/constants'

export const RoutingAuthStatus = {
  UNAUTHENTICATED: 'UNAUTHENTICATED',
  AUTHENTICATED: 'AUTHENTICATED',
  PREMIUM: 'PREMIUM',
} as const
export type RoutingAuthStatus = ValueOf<typeof RoutingAuthStatus>

export type CustomAppProps = AppProps & {
  Component: CustomNextPage
}

export type CustomNextPage<P = object, IP = P> = NextPage<P, IP> & {
  layout?: (page: ReactElement) => ReactNode
  hideNavbar?: boolean
  hideFooter?: boolean
}

export type SSRPageError = {
  statusCode: number
  message: string
}

type PagePropsWithNoErrorProps<TProps> = { error: null; props: TProps }
type PagePropsWithErrorProps<TError> = { error: SSRPageError; errorProps?: TError }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PagePropsWithError<TProps, TError = any> =
  | PagePropsWithNoErrorProps<TProps>
  | PagePropsWithErrorProps<TError>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UnwrapPagePropsWithError<TPagePropsWithError extends PagePropsWithError<any>> =
  TPagePropsWithError extends PagePropsWithNoErrorProps<infer TProps> ? NonNullable<TProps> : never
