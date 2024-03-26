import { useState } from 'react'

import { isSSR } from '@luminate/utils'

declare global {
  interface Document {
    mozCancelFullScreen?: () => Promise<void>
    msExitFullscreen?: () => Promise<void>
    webkitExitFullscreen?: () => Promise<void>
    mozFullScreenElement?: Element
    msFullscreenElement?: Element
    webkitFullscreenElement?: Element
  }

  interface HTMLElement {
    msRequestFullscreen?: () => Promise<void>
    mozRequestFullscreen?: () => Promise<void>
    webkitRequestFullscreen?: () => Promise<void>
  }
}

export const useFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(
    !isSSR() &&
      (document.fullscreenElement ||
        document.webkitFullscreenElement ||
        document.mozFullScreenElement ||
        document.msFullscreenElement)
      ? true
      : false
  )

  const enterFullscreen = <T extends HTMLElement>(ref: React.RefObject<T>) => {
    const element = ref.current

    if (element?.requestFullscreen) {
      element.requestFullscreen()
    } else if (element?.msRequestFullscreen) {
      element.msRequestFullscreen()
    } else if (element?.webkitRequestFullscreen) {
      element.webkitRequestFullscreen()
    } else if (element?.mozRequestFullscreen) {
      element.mozRequestFullscreen()
    }

    setIsFullscreen(true)
  }

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen()
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen()
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen()
    }
    setIsFullscreen(false)
  }

  const toggleFullscreen = <T extends HTMLElement>(ref: React.RefObject<T>) => {
    isFullscreen ? exitFullscreen() : enterFullscreen(ref)
  }

  return { enterFullscreen, exitFullscreen, isFullscreen, toggleFullscreen }
}
