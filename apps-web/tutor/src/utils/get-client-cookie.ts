import { isSSR, parseCookie } from '@luminate/utils'

export function getClientCookie(name: string) {
  if (isSSR()) throw new Error('Cannot get client cookie on server')
  const cookie = document.cookie
  const parsedCookie = parseCookie(cookie || '')
  return parsedCookie[name]
}
