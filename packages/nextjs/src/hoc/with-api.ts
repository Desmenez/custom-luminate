import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  PreviewData,
} from 'next'
import { ParsedUrlQuery } from 'querystring'

import { PageError } from '../error'
import { PagePropsWithError } from '../types'

interface MakeWithApiOptions {
  basePath: string
  unauthorizedRedirectPath: string
}

export function makeWithApi<ApiClient>(
  createApiClient: (context: GetServerSidePropsContext) => Promise<ApiClient>,
  options: MakeWithApiOptions
) {
  return function withApi<
    Props,
    Params extends ParsedUrlQuery = ParsedUrlQuery,
    Preview extends PreviewData = PreviewData,
  >(
    callback: (
      context: GetServerSidePropsContext<Params, Preview>,
      api: ApiClient
    ) => Promise<GetServerSidePropsResult<Props>> | GetServerSidePropsResult<Props>
  ): GetServerSideProps<PagePropsWithError<Props>, Params, Preview> {
    return async (context) => {
      const apiClient = await createApiClient(context)
      try {
        const result = await callback(context, apiClient)
        if ('props' in result) {
          return {
            props: {
              error: null,
              props: await result.props,
            },
          }
        } else {
          return result
        }
      } catch (error) {
        if (error instanceof PageError) {
          if (error.statusCode === 401) {
            const from = options.basePath + context.resolvedUrl
            return {
              redirect: {
                permanent: false,
                destination: `${options.unauthorizedRedirectPath}?from=${encodeURIComponent(from)}`,
                basePath: false,
              },
            }
          }
          if (error.statusCode === 404) {
            return {
              notFound: true,
            }
          }
          return {
            props: {
              error: {
                statusCode: error.statusCode,
                message: error.message,
              },
            },
          }
        }
        throw error
      }
    }
  }
}
