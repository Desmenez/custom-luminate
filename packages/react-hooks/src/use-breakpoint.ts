import { useState } from 'react'

import { screens } from '@luminate/tailwindcss'

import { useIsomorphicLayoutEffect } from './use-isomorphic-layout-effect'

const breakpoints = {
  mobile: 0,
  tablet: Number(screens['data'].tablet.split('px')[0]),
  laptop: Number(screens['data'].laptop.split('px')[0]),
  desktop: Number(screens['data'].desktop.split('px')[0]),
} as const

enum Breakpoints {
  'MOBILE' = 1,
  'TABLET' = 2,
  'LAPTOP' = 3,
  'DESKTOP' = 4,
}

export const useBreakpoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoints | undefined>()

  const updateBreakpoint = () => {
    const width = window.innerWidth

    if (width < breakpoints['tablet']) {
      // Mobile
      currentBreakpoint !== 1 && setCurrentBreakpoint(1)
    } else if (width < breakpoints['laptop']) {
      // Tablet
      currentBreakpoint !== 2 && setCurrentBreakpoint(2)
    } else if (width < breakpoints['desktop']) {
      // Laptop
      currentBreakpoint !== 3 && setCurrentBreakpoint(3)
    } else {
      // Desktop
      currentBreakpoint !== 4 && setCurrentBreakpoint(4)
    }
  }

  useIsomorphicLayoutEffect(() => {
    if (currentBreakpoint === undefined) {
      updateBreakpoint()
    }

    window.addEventListener('resize', updateBreakpoint)
    return () => {
      window.removeEventListener('resize', updateBreakpoint)
    }
  }, [currentBreakpoint])

  return {
    currentBreakpoint: currentBreakpoint ?? Breakpoints.DESKTOP,
    Breakpoints,
    isMobile: currentBreakpoint && currentBreakpoint === Breakpoints.MOBILE,
    isTablet: currentBreakpoint && currentBreakpoint === Breakpoints.TABLET,
    isLaptop: currentBreakpoint && currentBreakpoint === Breakpoints.LAPTOP,
    isDesktop: currentBreakpoint && currentBreakpoint === Breakpoints.DESKTOP,
    isSmallPlatform: currentBreakpoint && currentBreakpoint <= Breakpoints.TABLET,
  }
}
