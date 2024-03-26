import { ComponentType } from 'react'

import { type GetServerSideProps, type InferGetServerSidePropsType } from 'next'

import { ErrorPage } from '../error-page'
import {
  CustomNextPage,
  PagePropsWithError,
  SSRPageError,
  UnwrapPagePropsWithError,
} from '../types'

interface WithSSRErrorConfig {
  getErrorLayout?: (error: SSRPageError) => JSX.Element
}

export function withSSRError<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TGetServerSideProps extends GetServerSideProps<any>,
  TProps extends UnwrapPagePropsWithError<
    InferGetServerSidePropsType<TGetServerSideProps>
  > = UnwrapPagePropsWithError<InferGetServerSidePropsType<TGetServerSideProps>>,
  TPageProps extends PagePropsWithError<TProps> = PagePropsWithError<TProps>,
>(Component: ComponentType<TProps>, config?: WithSSRErrorConfig): CustomNextPage<TPageProps> {
  const NextPage: CustomNextPage<TPageProps> = (props: TPageProps) => {
    // If there is an error, render error layout
    if (props.error !== null) {
      // Use custom error layout if provided
      if (config?.getErrorLayout) {
        return config.getErrorLayout(props.error)
      }
      // Use default error layout
      else {
        return <ErrorPage statusCode={props.error.statusCode} message={props.error.message} />
      }
    }

    // Else, render the component
    const { props: innerProps } = props
    return <Component {...innerProps} />
  }

  return NextPage
}
