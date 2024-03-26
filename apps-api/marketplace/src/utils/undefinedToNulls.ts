type RecursivelyReplaceUndefinedWithNullsHelper<T> = T extends object
  ? {
      [K in keyof T]-?: undefined extends T[K]
        ? Exclude<T[K], undefined> | null
        : RecursivelyReplaceUndefinedWithNullsHelper<T[K]>
    }
  : T

type RecursivelyReplaceUndefinedWithNulls<T extends object> =
  RecursivelyReplaceUndefinedWithNullsHelper<T>

const undefinedToNullsHelper = <T>(item: T): RecursivelyReplaceUndefinedWithNullsHelper<T> => {
  if (item === undefined) {
    return null as any
  }
  if (Array.isArray(item)) {
    return item.map((i) => undefinedToNullsHelper(i)) as any
  }
  if (typeof item !== 'object' || item === null) {
    return item as any
  }
  const newItem: any = {}
  for (const key in item) {
    newItem[key] = undefinedToNullsHelper(item[key])
  }
  return newItem
}

export const undefinedToNulls = <T extends object>(
  item: T
): RecursivelyReplaceUndefinedWithNulls<T> => {
  return undefinedToNullsHelper(item) as any
}
