import { useCallback } from 'react'

import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect'

export const useScrollLock = () => {
  const lockScroll = useCallback(() => {
    document.body.dataset.scrollLock = 'true'
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = 'var(--scrollbar-compensation)'
  }, [])

  const unlockScroll = useCallback(() => {
    document.body.style.overflow = ''
    document.body.style.paddingRight = ''
    delete document.body.dataset.scrollLock
  }, [])

  useIsomorphicLayoutEffect(() => {
    const scrollBarCompensation = window.innerWidth - document.body.offsetWidth
    document.body.style.setProperty('--scrollbar-compensation', `${scrollBarCompensation}px`)
  }, [])

  return {
    lockScroll,
    unlockScroll,
  }
}
