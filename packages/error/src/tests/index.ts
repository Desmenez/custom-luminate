/// <reference types="jest" />
import { errorPrefix } from '../lib/regex'

export function validationTest(name: string, object: Record<string, { code: string }>) {
  describe(`Validating ${name}`, () => {
    const prefix = name.toUpperCase()

    Object.keys(object).forEach((key) => {
      if (name !== 'common' && object[key].code.startsWith('COMMON_')) return

      const regex = errorPrefix(prefix)

      it(`${object[key].code}`, () => {
        expect(object[key].code).toMatch(regex)
        expect(key).toBe(object[key].code.replace(regex, ''))
      })
    })
  })
}
