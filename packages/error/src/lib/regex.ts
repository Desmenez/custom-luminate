/**
 * @returns Regex matching /^PREFIX_/
 */
export function errorPrefix(prefix: string) {
  return new RegExp(`^(${prefix.toUpperCase().replace('-', '_')}|COMMON)_`)
}
