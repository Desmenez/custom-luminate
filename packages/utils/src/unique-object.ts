// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function uniqueObject<T extends object>(arr: T[], identifier: (item: T) => any): T[] {
  const seen = new Set()
  return arr.filter((item) => {
    const key = identifier(item)
    return seen.has(key) ? false : seen.add(key)
  })
}
