import { errorPrefix } from './regex'

describe('regex: errorPrefix', () => {
  it('Should match', () => {
    expect('COMMON_BRUH').toMatch(errorPrefix('any'))
    expect('ANY_BRUH').toMatch(errorPrefix('any'))
  })

  it('Should not match', () => {
    expect('COMMONBRUH').not.toMatch(errorPrefix('any'))
    expect('ANYBRUH').not.toMatch(errorPrefix('any'))
  })
})
