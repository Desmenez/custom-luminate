import { useRouter } from 'next/router'

import { createQueryParamArray, createQueryParamObject } from './utils'

export function useQueryParamValue<TValue extends string = string>(
  key: string,
  defaultValue?: TValue
) {
  const router = useRouter()
  const { query } = router
  const value = (query[key] as TValue) ?? defaultValue
  function set(newValue: TValue) {
    query[key] = newValue
    router.replace({
      pathname: router.pathname,
      query: createQueryParamObject(query),
    })
  }
  return { value, set } as const
}

export function useQueryParamArray<TValue extends string = string>(key: string) {
  const router = useRouter()
  const { query } = router
  const value = createQueryParamArray(query[key]) as TValue[]
  function push(element: TValue) {
    value.push(element)
    query[key] = value
    router.replace({
      pathname: router.pathname,
      query: createQueryParamObject(query),
    })
  }
  function remove(element: TValue) {
    query[key] = value.filter((v) => v !== element)
    router.replace({
      pathname: router.pathname,
      query: createQueryParamObject(query),
    })
  }
  function set(newValueArray: TValue[]) {
    query[key] = newValueArray
    router.replace({
      pathname: router.pathname,
      query: createQueryParamObject(query),
    })
  }
  return { value, handler: { push, remove, set } } as const
}

export type UseQueryParamArrayResult<TValue extends string = string> = ReturnType<
  typeof useQueryParamArray<TValue>
>
