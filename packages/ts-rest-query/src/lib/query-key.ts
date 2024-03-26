import { QueryKey } from '@tanstack/react-query'
import { AppRoute, ClientArgs, PartialClientInferRequest } from '@ts-rest/core'

type PickQueryKeyArgs<TArgs> = (TArgs extends { params: infer TParams }
  ? { params: TParams }
  : {}) &
  (TArgs extends { query: infer TQuery } ? { query: TQuery } : {})

export type QueryKeyArgs<
  TAppRoute extends AppRoute,
  TClientArgs extends ClientArgs,
> = PickQueryKeyArgs<PartialClientInferRequest<TAppRoute, TClientArgs>>

export function getQueryKey<
  TAppRoute extends AppRoute,
  TClientArgs extends ClientArgs,
  TArgs = QueryKeyArgs<TAppRoute, TClientArgs>,
>(route: TAppRoute, args?: TArgs) {
  const { params = {}, query = {} } = (args || {}) as unknown as any
  return ['ts-rest', route.method, route.path, { params, query }] as QueryKey
}
