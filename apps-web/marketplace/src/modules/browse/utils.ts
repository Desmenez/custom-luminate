export function createQueryParamArray(query: string | string[] | undefined) {
  if (Array.isArray(query)) {
    return query
  }
  if (query) {
    return query.split(',')
  }
  return []
}

export function createQueryParamObject(
  obj: Record<string, number[] | string | string[] | undefined>
) {
  const result: Record<string, string> = {}
  for (const key of Object.keys(obj)) {
    const value = obj[key]
    if (value) {
      if (Array.isArray(value)) {
        if (value.length > 0) result[key] = value.join(',')
      } else {
        result[key] = value
      }
    }
  }
  return result
}
