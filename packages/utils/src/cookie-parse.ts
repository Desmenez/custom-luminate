export function parseCookie(cookie: string | null): Record<string, string> {
  if (!cookie) return {}
  return cookie
    .split(';')
    .map((val) => val.split('='))
    .reduce(
      (acc, val) => {
        const [key, value] = val
        const decodedKey = decodeURIComponent(key.trim())
        const decodedValue = decodeURIComponent(value.trim())
        acc[decodedKey] = decodedValue
        return acc
      },
      {} as Record<string, string>
    )
}
