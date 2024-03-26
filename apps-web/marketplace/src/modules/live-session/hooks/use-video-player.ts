import { useCallback, useEffect, useRef, useState } from 'react'

import Hls, { Events } from 'hls.js'

import { useFullscreen } from '@luminate/react-hooks/src/use-fullscreen'
import { useUserAgent } from '@luminate/react-hooks/src/use-user-agent'
import { isSSR } from '@luminate/utils'

type VideoMetaData = {
  height: number
  width: number
  length: number
}

type KeyCode = 'ArrowDown' | 'ArrowLeft' | 'ArrowRight' | 'ArrowUp' | 'KeyF' | 'KeyM' | 'Space'

type PlayerAction = {
  onPlay?: () => void
  onPause?: () => void
  onVolumeChange?: (isMuted: boolean, volume: number) => void
  onKeyDown?: (code: KeyCode) => void
  onToggleFullscreen?: () => void
  onPlaybackRateChange?: (rate: number) => void
  onTimeUpdate?: (currentTime: number) => void
  onSkipBackward?: () => void
  onSkipForward?: () => void
}

type PlayerConfig = {
  autoplay?: boolean
  mute?: boolean
  volume?: number
  playbackRate?: number
  qualityLevelIndex?: number
  autoFocus?: boolean
  isHLS?: boolean
  resumeVideoProgress?: number
  disableKeyboardShortcut?: boolean
}

const defaultVolume = 0.5
const defaultPlaybackRate = 1
const defaultResolutionIndex = -1
const defaultMuted = true
const defaultAutoplay = true
const defaultAutoFocus = true

export const useVideoPlayer = (
  videoSrc: string,
  videoPoster?: string,
  playerAction?: PlayerAction,
  config?: PlayerConfig
) => {
  const videoRef = useRef(isSSR() ? undefined : document.createElement('video'))
  const videoIphoneRef = useRef<HTMLVideoElement>()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const timeUpdateCurrentVideoProgressRef = useRef(0)
  const pauseDueToSeeking = useRef(false)
  const requestAnimationRef = useRef<number>()

  const [isVideoLoading, setIsVideoLoading] = useState(true)
  const [videoMetaData, setVideoMetaData] = useState<VideoMetaData>()
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progress: 0,
    volume: config?.volume ?? defaultVolume,
    playbackRate: config?.playbackRate ?? defaultPlaybackRate,
    resolutionIndex: config?.qualityLevelIndex ?? defaultResolutionIndex,
    isMuted: config?.mute ?? defaultMuted,
    hasEnded: false,
  })

  const { toggleFullscreen: _toggleFullscreen } = useFullscreen()
  const userAgent = useUserAgent()

  const context = canvasRef.current?.getContext('2d')

  const drawCanvas = useCallback(() => {
    if (canvasRef.current && videoRef.current) {
      context?.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height)
    }
  }, [context])

  // Play video
  const play = useCallback(() => {
    if (videoRef.current && videoRef.current.paused === true) {
      videoRef.current.play()
    }
  }, [])
  // Pause Video
  const pause = useCallback((dueToSeek = false) => {
    if (videoRef.current && videoRef.current.paused === false) {
      videoRef.current.pause()
      if (dueToSeek) {
        pauseDueToSeeking.current = true
      }
    }
  }, [])

  // Toggle video mute
  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted ? (videoRef.current.muted = false) : (videoRef.current.muted = true)
    }
  }, [])

  const setPlaybackRate = useCallback((rate: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate
    }
  }, [])
  const setVolume = useCallback((volume: number) => {
    if (videoRef.current) {
      videoRef.current.volume = volume
    }
  }, [])

  // Setting video resolution only if isHLS is true
  const setVideoResolution = useCallback(
    (index: number) => {
      if (config?.isHLS) {
        setSelectedQualityLevelIndex(index)
      }
    },
    [config?.isHLS]
  )

  // Focusing ContainerRef
  useEffect(() => {
    if ((config?.autoFocus ?? defaultAutoFocus) && containerRef.current) {
      containerRef.current.tabIndex = 0
      containerRef.current.style.outline = 'none'
      containerRef.current.focus()
    }
  }, [config?.autoFocus, containerRef])

  // Init Video Player
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playsInline = true
      videoRef.current.muted = config?.mute ?? defaultMuted
      videoRef.current.volume = config?.volume ?? defaultVolume
      videoRef.current.playbackRate = config?.playbackRate ?? defaultPlaybackRate
      videoRef.current.autoplay = config?.autoplay ?? defaultAutoplay
      videoRef.current.oncanplay = () => {
        ;(config?.autoplay ?? defaultAutoplay) && play()
      }
      videoRef.current.onended = () => {
        setPlayerState((prev) => ({
          ...prev,
          hasEnded: true,
        }))
      }

      videoRef.current.onloadedmetadata = (ev) => {
        const currentTarget = ev.currentTarget as (EventTarget & HTMLVideoElement) | null
        if (currentTarget) {
          setVideoMetaData({
            height: currentTarget.videoHeight,
            width: currentTarget.videoWidth,
            length: currentTarget.duration,
          })
        }
      }

      //check video is loading
      videoRef.current.onwaiting = () => {
        setIsVideoLoading(true)
      }

      //check video is playing
      videoRef.current.onplaying = () => {
        setIsVideoLoading(false)
      }
    }

    const videoEl = videoRef.current
    return () => {
      if (videoEl) {
        videoEl.pause()
        videoEl.removeAttribute('src')
        videoEl.load()
      }
    }
  }, [config?.autoplay, config?.mute, config?.playbackRate, config?.volume, play, videoRef])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.onseeked = () => {
        const draw = requestAnimationFrame(() => {
          drawCanvas()
          cancelAnimationFrame(draw)
        })
        if (pauseDueToSeeking.current) {
          play()
          pauseDueToSeeking.current = false
        }
      }
    }
  }, [drawCanvas, play])

  // Use for safari bug to replace onseeked
  useEffect(() => {
    if (userAgent?.browser.name === 'Safari') {
      videoRef.current &&
        (videoRef.current.onseeking = () => {
          // const draw = requestAnimationFrame(() => {
          //   console.log('seeking');
          //   drawCanvas();
          //   cancelAnimationFrame(draw);
          // });
          if (pauseDueToSeeking.current) {
            play()
            pauseDueToSeeking.current = false
          }
        })
    }
  }, [drawCanvas, play, userAgent?.browser])

  // Init Video Player with player-action dependency
  useEffect(() => {
    const currentVideoRef = videoRef.current
    if (currentVideoRef) {
      currentVideoRef.onplay = () => {
        setPlayerState((prev) => ({
          ...prev,
          isPlaying: true,
          hasEnded: false,
        }))
        playerAction?.onPlay?.()
      }
      currentVideoRef.onpause = () => {
        // Don't want to show pause icon when seeking
        if (pauseDueToSeeking.current === false) {
          setPlayerState((prev) => ({
            ...prev,
            isPlaying: false,
          }))
          playerAction?.onPause?.()
        }
      }
      currentVideoRef.onvolumechange = (ev) => {
        const currentTarget = ev.currentTarget as (EventTarget & HTMLVideoElement) | null
        if (currentTarget) {
          setPlayerState((prev) => ({
            ...prev,
            isMuted: currentTarget.muted,
            volume: currentTarget.volume,
          }))
          playerAction?.onVolumeChange?.(currentTarget.muted, currentTarget.volume)
        }
      }
      currentVideoRef.onratechange = (ev) => {
        const currentTarget = ev.currentTarget as (EventTarget & HTMLVideoElement) | null
        if (currentTarget) {
          setPlayerState((prev) => ({
            ...prev,
            playbackRate: currentTarget.playbackRate,
          }))
          playerAction?.onPlaybackRateChange?.(currentTarget.playbackRate)
        }
      }
      currentVideoRef.ontimeupdate = (ev) => {
        const currentTarget = ev.currentTarget as (EventTarget & HTMLVideoElement) | null

        if (currentTarget) {
          const progress = Math.round(currentTarget.currentTime)

          // Force ontimeupdate to trigger only once each second
          if (progress !== timeUpdateCurrentVideoProgressRef.current) {
            setPlayerState((prev) => ({
              ...prev,
              progress,
            }))
            playerAction?.onTimeUpdate?.(progress)
            timeUpdateCurrentVideoProgressRef.current = progress
          }
        }
      }
    }
    return () => {
      if (currentVideoRef !== undefined) {
        currentVideoRef.ontimeupdate = null
        currentVideoRef.onplay = null
        currentVideoRef.onpause = null
        currentVideoRef.onvolumechange = null
        currentVideoRef.onratechange = null
      }
    }
  }, [playerAction, videoRef])

  // Request animation frame
  useEffect(() => {
    const updateCanvas = () => {
      if (canvasRef.current && videoRef.current) {
        drawCanvas()
        playerState.isPlaying === true &&
          (requestAnimationRef.current = requestAnimationFrame(updateCanvas))
      }
    }
    requestAnimationRef.current = requestAnimationFrame(updateCanvas)
    return () => {
      if (requestAnimationRef.current) {
        cancelAnimationFrame(requestAnimationRef.current)
      }
    }
  }, [drawCanvas, playerState.isPlaying])

  // Add src to video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videoSrc
    }
  }, [videoRef, videoSrc])

  // Add poster to video
  useEffect(() => {
    if (videoRef.current && videoPoster) {
      videoRef.current.poster = videoPoster
    }
  }, [videoRef, videoPoster])

  // Init iphone video player
  useEffect(() => {
    if (userAgent?.device.model === 'iPhone') {
      if (!videoIphoneRef.current) {
        videoIphoneRef.current = document.createElement('video')
        videoIphoneRef.current.playsInline = false
        videoIphoneRef.current.style.pointerEvents = 'none'
        videoIphoneRef.current.style.width = '0px'
        videoIphoneRef.current.style.height = '0px'
        videoIphoneRef.current.ontimeupdate = (ev) => {
          const currentTarget = ev.currentTarget as (EventTarget & HTMLVideoElement) | null
          if (currentTarget) {
            videoRef.current && (videoRef.current.currentTime = currentTarget.currentTime)
          }
        }
        videoIphoneRef.current.onvolumechange = (ev) => {
          const currentTarget = ev.currentTarget as (EventTarget & HTMLVideoElement) | null
          if (currentTarget) {
            videoRef.current && (videoRef.current.muted = currentTarget.muted)
          }
        }
        videoIphoneRef.current.onratechange = (ev) => {
          const currentTarget = ev.currentTarget as (EventTarget & HTMLVideoElement) | null
          if (currentTarget) {
            videoRef.current && (videoRef.current.playbackRate = currentTarget.playbackRate)
          }
        }
        containerRef.current?.appendChild(videoIphoneRef.current)
      }

      videoIphoneRef.current.src = videoSrc
    }

    const videoEl = videoIphoneRef.current
    return () => {
      if (videoEl) {
        videoEl.pause()
        videoEl.removeAttribute('src')
        videoEl.load()
      }
    }
  }, [userAgent?.device.model, videoSrc])

  // Enter fullscreen
  const toggleFullscreen = useCallback(() => {
    playerAction?.onToggleFullscreen?.()
    if (userAgent?.device.model === 'iPhone' && videoIphoneRef.current && !config?.isHLS) {
      pause()
      if (videoRef.current) {
        videoIphoneRef.current.currentTime = videoRef.current.currentTime
        videoIphoneRef.current.muted = videoRef.current.muted
        videoIphoneRef.current.playbackRate = videoRef.current.playbackRate
        videoIphoneRef.current.volume = videoRef.current.volume
        videoIphoneRef?.current?.play?.()
      }
    } else {
      if (userAgent?.device.model === 'iPhone' && videoRef.current && config?.isHLS) {
        ;(
          videoRef?.current as typeof videoRef.current & { webkitEnterFullscreen?: () => void }
        )?.webkitEnterFullscreen?.()
        return
      }
      _toggleFullscreen(containerRef)
    }
  }, [_toggleFullscreen, pause, playerAction, userAgent?.device.model, config?.isHLS])

  const setVideoProgress = (progress: number | ((currentProgress: number) => number)) => {
    if (!videoRef.current) return

    let newProgress =
      typeof progress === 'number' ? progress : progress(videoRef.current.currentTime)

    if (newProgress < 0) {
      newProgress = 0
    }

    if (videoMetaData?.length && newProgress > videoMetaData.length) {
      newProgress = videoMetaData.length
    }

    videoRef.current && (videoRef.current.currentTime = newProgress)
    setPlayerState({
      ...playerState,
      progress: newProgress,
    })
  }

  // Add ContainerRef key event
  useEffect(() => {
    if (!containerRef.current) return
    if (config?.disableKeyboardShortcut) return

    containerRef.current.onkeydown = (e) => {
      e.preventDefault()
      if (!videoRef.current) return

      switch (e.code as KeyCode) {
        case 'ArrowLeft':
          playerAction?.onKeyDown?.('ArrowLeft')
          videoRef.current.currentTime = videoRef.current.currentTime - 15
          playerAction?.onSkipBackward?.()

          break
        case 'ArrowRight':
          playerAction?.onKeyDown?.('ArrowRight')
          videoRef.current.currentTime = videoRef.current.currentTime + 15
          playerAction?.onSkipForward?.()
          break
        case 'ArrowUp':
          playerAction?.onKeyDown?.('ArrowUp')
          if (videoRef.current.muted === true) {
            videoRef.current.muted = false
          }
          if (videoRef.current.volume <= 0.9) {
            videoRef.current.volume = videoRef.current.volume + 0.1
          } else {
            videoRef.current.volume = 1
          }
          break
        case 'ArrowDown':
          playerAction?.onKeyDown?.('ArrowDown')
          if (videoRef.current.muted === true) videoRef.current.muted = false
          if (videoRef.current.volume >= 0.1) {
            videoRef.current.volume = videoRef.current.volume - 0.1
          } else {
            videoRef.current.volume = 0
          }
          break
        case 'Space':
          playerAction?.onKeyDown?.('Space')
          videoRef.current.paused ? play() : pause()
          break
        case 'KeyM':
          playerAction?.onKeyDown?.('KeyM')
          toggleMute()
          break
        case 'KeyF':
          playerAction?.onKeyDown?.('KeyF')
          toggleFullscreen()
          break
      }
    }
  }, [pause, play, playerAction, toggleFullscreen, toggleMute])

  // ------------------ HLS support ------------------
  // TUS Quality Level
  const [qualityLevels, setQualityLevels] = useState<
    Array<{
      index: number
      label: string
    }>
  >([])

  const [selectedQualityLevelIndex, setSelectedQualityLevelIndex] = useState(-1)

  useEffect(() => {
    if (config?.isHLS && videoRef.current && Hls.isSupported()) {
      const videoRefCurrent = videoRef.current
      const hls = new Hls({
        autoStartLoad: false,
      })

      hls.loadSource(videoSrc)
      hls.attachMedia(videoRef.current)
      hls.on(Events.MANIFEST_PARSED, () => {
        hls.startLoad(config.resumeVideoProgress ?? 0)
        videoRef.current?.play()
      })

      hls.on(Events.LEVEL_SWITCHING, (event, data) => {
        const levels = hls.levels.map((level, index) => ({
          index,
          label: `${level.height}p`,
        }))
        setQualityLevels(levels)
        setVideoMetaData({
          width: data.width,
          height: data.height,
          length: videoRefCurrent.duration,
        })
      })

      // When select quality level it should start load from current time
      if (selectedQualityLevelIndex !== -1) {
        hls.currentLevel = selectedQualityLevelIndex
        const currentTimeUpdate = timeUpdateCurrentVideoProgressRef.current

        hls.on(Events.MANIFEST_PARSED, () => {
          hls.startLoad(currentTimeUpdate)
        })

        setPlayerState((prev) => ({
          ...prev,
          resolutionIndex: selectedQualityLevelIndex,
        }))
      }
      return () => {
        hls.destroy()
      }
    }
  }, [config?.isHLS, config?.resumeVideoProgress, selectedQualityLevelIndex, videoSrc])

  return {
    canvasRef,
    videoRef,
    containerRef,
    qualityLevels,
    pause,
    play,
    playerState,
    setVolume,
    setPlaybackRate,
    setVideoProgress,
    setVideoResolution,
    toggleFullscreen,
    toggleMute,
    videoMetaData,
    isVideoLoading,
  }
}
