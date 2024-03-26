import { useEffect, useLayoutEffect } from 'react'

import { isSSR } from '@luminate/utils'

export const useIsomorphicLayoutEffect = !isSSR() ? useLayoutEffect : useEffect
