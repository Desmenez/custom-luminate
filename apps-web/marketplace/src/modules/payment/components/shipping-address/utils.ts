type Filter<TData, TKey> = [TData, TKey]

export function applyMultipleFilters<T, D>(original: T[], filters: Filter<D, keyof T>[] = []) {
  return original.filter((item) => {
    const keep = filters.every(([benchmark, key]) => item[key] === benchmark)
    return keep
  })
}
