import type { LegacyRef } from 'react'
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react'

import { faUser, faVolumeSlash } from '@fortawesome/pro-regular-svg-icons'
import Lottie from 'lottie-react'
import dynamic from 'next/dynamic'

import { useBreakpoint, useOnClickOutside, useStorage } from '@luminate/react-hooks'
import { BasePlatform } from '@luminate/types'
import { FontAwesomeIcon, Tag, cn } from '@luminate/ui'

import { useVideoPlayer } from '../../hooks/use-video-player'
import { ControlBar } from './components'
import sparkleAnimation from './sparkle-animation.json'

const DEFAULT_MONKEY_PROFILE_URL =
  'https://static.monkeyeveryday.com/client-file/images/monkey-profile.png'

const VideoCompleteOverlay = dynamic(async () => {
  const mod = await import('./components').then((mod) => mod.VideoCompleteOverlay)
  return mod
})

function viewerCountConverter(viewerCount: number): string {
  if (viewerCount >= 1000) {
    return `${(viewerCount / 1000).toFixed(1)}K`
  }
  return viewerCount.toString()
}

export interface LiveVideoPlayerProps {
  liveSessionId: string
  src: string
  overlay?: JSX.Element
  onLast30Seconds?: () => void
  poster?: string
  playerAction?: Parameters<typeof useVideoPlayer>[2]
  completeOverlayIcon?: JSX.Element
  autoplayNextAfterFinish?: boolean
  completeOverlayConfirmationText?: string
  nextObjectTitle?: string
  nextObjectCode?: string
  onClickOverlayConfirm?: () => void
  videoSectionName?: string
  isShowCompleteOverlayProp?: boolean
  isHLS?: boolean
  resumeVideoProgress?: number
  viewerCount?: number
  rank?: number
  profileImageUrl?: string
}

export interface LiveVideoPlayerRef {
  playerState: ReturnType<typeof useVideoPlayer>['playerState']
  videoMetaData: ReturnType<typeof useVideoPlayer>['videoMetaData']
  setVideoProgress: ReturnType<typeof useVideoPlayer>['setVideoProgress']
  play: ReturnType<typeof useVideoPlayer>['play']
}

export const LiveVideoPlayer = forwardRef(
  (props: LiveVideoPlayerProps, ref: React.ForwardedRef<LiveVideoPlayerRef>) => {
    const {
      liveSessionId,
      autoplayNextAfterFinish,
      completeOverlayConfirmationText,
      completeOverlayIcon,
      isHLS = false,
      isShowCompleteOverlayProp = true,
      nextObjectCode,
      nextObjectTitle,
      onClickOverlayConfirm,
      onLast30Seconds,
      playerAction,
      poster,
      resumeVideoProgress,
      src,
      videoSectionName,
      viewerCount,
      rank,
      profileImageUrl = DEFAULT_MONKEY_PROFILE_URL,
    } = props

    const controlBarRef = useRef<React.ElementRef<typeof ControlBar>>(null)
    const [isShowingCompleteOverlay, setIsShowingCompleteOverlay] = useState(false)

    const customPlayerAction: typeof playerAction = {
      ...playerAction,
      onKeyDown: (e) => {
        playerAction?.onKeyDown?.(e)
        switch (e) {
          case 'ArrowLeft':
            controlBarRef.current?.setShowSkipFeedback('backward')
            break
          case 'ArrowRight':
            controlBarRef.current?.setShowSkipFeedback('forward')
            break
        }
      },
    }

    const {
      videoRef,
      containerRef,
      play,
      playerState,
      qualityLevels,
      setVideoProgress,
      setVideoResolution,
      setVolume,
      toggleFullscreen,
      toggleMute,
      videoMetaData,
      isVideoLoading,
    } = useVideoPlayer(
      src,
      poster
        ? poster
        : isHLS
        ? src.replace('/manifest/video.m3u8', '/thumbnails/thumbnail.jpg?time=5s&height=600')
        : 'https://static.monkeyeveryday.com/client-file/images/no-image-placeholder.jpg',
      customPlayerAction,
      {
        isHLS,
        resumeVideoProgress: isHLS ? resumeVideoProgress : 0,
        autoplay: true,
        disableKeyboardShortcut: true,
      }
    )

    const [volumeStorage, setVolumeStorage] = useStorage('player-volume', 'local')
    const volumeStorageRef = useRef(volumeStorage)

    const [last30SecondsCalled, setLast30SecondsCalled] = useState(false)

    // Trigger onLast30Seconds callback if video is less than 30 seconds
    useEffect(() => {
      // Do nothing if there is no videoMetaData or playerState or onLast30Seconds is not defined
      if (!(videoMetaData && playerState && !last30SecondsCalled && onLast30Seconds)) return

      // If video is less than 30 seconds, trigger onLast30Seconds callback
      if (videoMetaData?.length - playerState.progress <= 30) {
        // hit last 30 seconds
        onLast30Seconds()
        setLast30SecondsCalled(true)
      }
    }, [last30SecondsCalled, onLast30Seconds, playerState, videoMetaData])

    // Set volume from storage on first render
    useEffect(() => {
      if (typeof volumeStorageRef.current === 'number') {
        setVolume(volumeStorageRef.current)
      }
    }, [setVolume])

    // Save volume to storage on volume change
    useEffect(() => {
      setVolumeStorage(playerState.volume)
    }, [playerState.volume, setVolumeStorage])

    // Show complete overlay when video has ended
    useEffect(() => {
      if (playerState.hasEnded && isShowCompleteOverlayProp) {
        setIsShowingCompleteOverlay(true)
      }
    }, [playerState.hasEnded, isShowCompleteOverlayProp])

    // Hide control bar when user click outside of the player
    useOnClickOutside(containerRef, () => {
      if (platform === 'mobile') {
        controlBarRef.current?.setIsShowingControlBar(false)
      }
    })

    useImperativeHandle(
      ref,
      () => ({
        playerState,
        videoMetaData,
        setVideoProgress,
        play,
      }),
      [play, playerState, setVideoProgress, videoMetaData]
    )

    // Handle exit fullscreen on iOS
    useEffect(() => {
      const video = videoRef?.current
      if (!video) return

      const handleExitFullScreen = () => {
        setTimeout(() => {
          void video.play?.()
        }, 1000)
      }
      video.addEventListener('webkitendfullscreen', handleExitFullScreen)

      return () => video.removeEventListener('webkitendfullscreen', handleExitFullScreen)
    }, [videoRef, playerState])

    const [isExpandRank, setIsExpandRank] = useState(false)
    const [memoProfileImageUrl, setMemoProfileImageUrl] = useState(profileImageUrl)
    const [isShowProfileImage, setIsShowProfileImage] = useState(false)
    const [memoRank, setMemoRank] = useState(0)
    const videoPoster = useMemo(() => {
      if (src.includes('manifest.m3u8')) {
        return src.replace(
          '/manifest.m3u8',
          '%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D1s%26height%3D600'
        )
      }
      return poster
    }, [poster, src])
    const { isMobile, isSmallPlatform } = useBreakpoint()
    const platform = isSmallPlatform ? BasePlatform.MOBILE : BasePlatform.DESKTOP

    useEffect(() => {
      // Close show rank animation
      if (!rank) {
        setTimeout(() => {
          setIsExpandRank(false)
          setTimeout(() => setIsShowProfileImage(false), 1000)
        }, 500)
        return
      }
      // Show rank animation
      setMemoRank(rank)
      setIsShowProfileImage(true)
      setTimeout(() => setIsExpandRank(true), 500)
    }, [rank])

    return (
      <div
        ref={containerRef}
        className="relative flex h-full w-full select-none flex-col overflow-hidden bg-black"
        onMouseMove={() => {
          controlBarRef.current?.setIsShowingControlBar(true)
        }}
      >
        {isShowProfileImage && (
          <Lottie
            loop={true}
            autoplay={true}
            animationData={sparkleAnimation}
            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
            style={{
              width: isMobile ? 100 : 254,
              height: isMobile ? 75 : 150,
              position: 'absolute',
              left: isMobile ? 40 : 80,
              zIndex: 51,
            }}
          />
        )}
        <div className="absolute z-[1000] top-5 overflow-x-hidden rounded-l-full left-5 flex items-center">
          <img
            className={cn(
              isMobile ? 'w-[50px] h-[50px]' : 'w-[110px] h-[110px]',
              'rounded-full transition-all duration-300 border-4 shadow border-gray-50 z-10',
              isShowProfileImage ? 'opacity-100 scale-1' : 'opacity-0 scale-0'
            )}
            src={memoProfileImageUrl}
            onError={() => setMemoProfileImageUrl(DEFAULT_MONKEY_PROFILE_URL)}
            alt=""
          />
          <div
            className={cn(
              'h-fit transition-all duration-1000 flex gap-4 bg-gray-950 rounded-r-full items-center px-8 -ml-5',
              isExpandRank ? '-ml-5' : '-ml-[100%]'
            )}
          >
            <p className={cn('text-gray-50 font-light', isMobile ? 'text-base' : 'text-lg')}>
              อยู่อันดับที่
            </p>
            <h2 className={cn('text-primary font-bold', isMobile ? 'text-xl' : 'text-4xl')}>
              {memoRank}
            </h2>
          </div>
        </div>
        {playerState.isMuted && !isShowingCompleteOverlay && (
          <div
            className={cn(
              'z-[100] absolute inset-0 cursor-pointer',
              platform === 'mobile' && 'p-2',
              platform === 'desktop' && 'p-4'
            )}
            onClick={toggleMute}
          >
            <Tag
              size="lg"
              left={<FontAwesomeIcon className="h-4 w-5" icon={faVolumeSlash} />}
              variant="solid"
              color="yellow"
              className="cursor-pointer"
              label="กดหน้าจอเพื่อเปิดเสียง"
            />
          </div>
        )}
        {typeof viewerCount === 'number' && (
          <div
            className={cn(
              'z-20 absolute right-0 cursor-pointer',
              platform === 'mobile' && 'p-2',
              platform === 'desktop' && 'p-4'
            )}
          >
            <Tag
              size="lg"
              left={<FontAwesomeIcon className="h-4 w-5" icon={faUser} />}
              label={viewerCountConverter(viewerCount)}
              className="bg-gray-900/80"
            />
          </div>
        )}

        {isShowingCompleteOverlay && (
          <div className="absolute inset-0 z-20">
            <VideoCompleteOverlay
              autoplayNextAfterFinish={autoplayNextAfterFinish}
              confirmButtonText={completeOverlayConfirmationText}
              icon={completeOverlayIcon}
              nextObjectCode={nextObjectCode}
              nextObjectTitle={nextObjectTitle}
              platform={platform}
              onClickCancel={() => {
                setIsShowingCompleteOverlay(false)
              }}
              onClickConfirm={() => {
                onClickOverlayConfirm?.()
                setIsShowingCompleteOverlay(false)
              }}
            />
          </div>
        )}

        {!isShowingCompleteOverlay && (
          <ControlBar
            disableSeeking
            isVideoLoading={isVideoLoading}
            previewImageSrc={src}
            isHLS={isHLS}
            resolutionRates={qualityLevels}
            videoProgress={playerState.progress}
            ref={controlBarRef}
            videoLength={videoMetaData?.length}
            isMuted={playerState.isMuted}
            isVideoPlaying={playerState.isPlaying}
            platform={platform}
            videoChapterName={videoSectionName}
            videoPlaybackRate={playerState.playbackRate}
            videoResolution={playerState.resolutionIndex}
            videoVolume={playerState.volume}
            onClickPlayPauseIcon={play}
            onClickExpandIcon={toggleFullscreen}
            onClickMuteIcon={toggleMute}
            onSelectResolution={(resolution) => setVideoResolution(resolution)}
            onVolumeChange={(volume) => {
              if (playerState.isMuted) toggleMute()
              setVolume(volume)
            }}
          />
        )}
        <div className={cn(isHLS ? 'block z-0' : 'hidden', 'my-auto')}>
          <video
            poster={videoPoster}
            ref={videoRef as LegacyRef<HTMLVideoElement>}
            className="h-full w-full cursor-pointer object-contain"
            height={videoMetaData?.height}
            width={videoMetaData?.width}
            onClick={() => {
              if (platform === 'mobile') {
                controlBarRef.current?.setIsShowingControlBar((prev) => !prev)
              }
            }}
            onDoubleClick={() => {
              if (platform === 'desktop') {
                toggleFullscreen()
              }
            }}
          />
        </div>
      </div>
    )
  }
)

LiveVideoPlayer.displayName = 'LiveVideoPlayer'
