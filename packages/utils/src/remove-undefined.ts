// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function removeUndefined<T extends object = Record<string, any>>(
  obj: T,
  nested: boolean = true
): T {
  const keys = Object.keys(obj) as (keyof T)[]

  // first-level cleanup
  if (!nested) {
    keys.forEach((key) => {
      if (obj[key] === undefined) delete obj[key]
    })
    return obj
  }

  // nested cleanup
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const newObj = {} as Record<keyof T, any>
  keys.forEach((key) => {
    if (obj[key] === Object(obj[key])) {
      newObj[key] = removeUndefined(obj[key] as object, nested)
    } else if (obj[key] === undefined) {
      delete obj[key]
    } else {
      newObj[key] = obj[key]
    }
  })

  return newObj
}
