import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  PreviewData,
} from 'next'
import { ParsedUrlQuery } from 'querystring'

type WithServerSideGuard<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Props extends { [key: string]: any } = { [key: string]: any },
  Params extends ParsedUrlQuery = ParsedUrlQuery,
  Preview extends PreviewData = PreviewData,
> = (
  cb: GetServerSideProps<Props, Params, Preview>,
  allowedRoles: string[] // TODO: use a role type
) => (
  context: GetServerSidePropsContext<Params, Preview>
) => Promise<GetServerSidePropsResult<Props>>

export const withServerSideGuard: WithServerSideGuard = (cb, allowedRoles) => (context) => {
  // TODO: implement guard logic
  return cb(context)
}
