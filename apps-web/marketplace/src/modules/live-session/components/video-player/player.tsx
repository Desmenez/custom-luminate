import type { LegacyRef } from 'react'
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

import { reactQueryClient } from '@app/core/services'
import { faTimer, faVolumeSlash } from '@fortawesome/pro-solid-svg-icons'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { useBreakpoint, useInterval, useOnClickOutside, useStorage } from '@luminate/react-hooks'
import { BasePlatform } from '@luminate/types'
import { Button, FontAwesomeIcon, Tag, cn } from '@luminate/ui'

import { useVideoPlayer } from '../../hooks/use-video-player'
import { ControlBar } from './components'

const VideoCompleteOverlay = dynamic(async () => {
  const mod = await import('./components').then((mod) => mod.VideoCompleteOverlay)
  return mod
})

// const Tag = dynamic(async () => {
//   const mod = await import('@everyday/frontend-core/ui/atoms').then((mod) => mod.Tag)
//   return mod
// })

export interface VideoPlayerProps {
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
  isLivePlayback?: boolean
  isLivePlaybackEnded?: boolean
  livePlaybackCountDown?: string
  onPaused?: (isPaused: boolean) => void
}

export interface VideoPlayerRef {
  playerState: ReturnType<typeof useVideoPlayer>['playerState']
  videoMetaData: ReturnType<typeof useVideoPlayer>['videoMetaData']
  setVideoProgress: ReturnType<typeof useVideoPlayer>['setVideoProgress']
  pause: ReturnType<typeof useVideoPlayer>['pause']
  play: ReturnType<typeof useVideoPlayer>['play']
}

export const VideoPlayer = forwardRef<VideoPlayerRef, VideoPlayerProps>((props, ref) => {
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
    overlay,
    playerAction,
    poster,
    resumeVideoProgress,
    src,
    videoSectionName,
    isLivePlayback,
    isLivePlaybackEnded,
    livePlaybackCountDown,
    onPaused,
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
    canvasRef,
    videoRef,
    containerRef,
    pause,
    play,
    playerState,
    qualityLevels,
    setPlaybackRate,
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
    }
  )

  const [volumeStorage, setVolumeStorage] = useStorage('player-volume', 'local')
  const volumeStorageRef = useRef(volumeStorage)

  const [last30SecondsCalled, setLast30SecondsCalled] = useState(false)

  useEffect(() => {
    if (videoMetaData && playerState && !last30SecondsCalled && onLast30Seconds) {
      if (videoMetaData?.length - playerState.progress <= 30) {
        // hit last 30 seconds
        onLast30Seconds()
        setLast30SecondsCalled(true)
      }
    }
  }, [last30SecondsCalled, onLast30Seconds, playerState, videoMetaData])

  const handlePlayPauseVideo = () => {
    !playerState.isPlaying ? play() : pause()
  }

  useEffect(() => {
    if (typeof volumeStorageRef.current === 'number') {
      setVolume(volumeStorageRef.current)
    }
  }, [setVolume])

  useEffect(() => {
    setVolumeStorage(playerState.volume)
  }, [playerState.volume, setVolumeStorage])

  useEffect(() => {
    if (playerState.hasEnded && isShowCompleteOverlayProp) {
      setIsShowingCompleteOverlay(true)
    }
  }, [playerState.hasEnded, isShowCompleteOverlayProp])

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
      pause,
      play,
    }),
    [pause, play, playerState, setVideoProgress, videoMetaData]
  )

  const router = useRouter()
  const { query } = router
  const { isSmallPlatform } = useBreakpoint()
  const platform = isSmallPlatform ? BasePlatform.MOBILE : BasePlatform.DESKTOP

  // Update recent live session timestamp every 3 seconds
  const { mutateAsync: updateRecentLiveSessionTimestampMutation } =
    reactQueryClient.liveSession.updateRecentLiveSessionTimestamp.useMutation()
  // Update playback time every 3 seconds
  const { mutateAsync: updatePlaybackTimeMutation } =
    reactQueryClient.liveSession.updatePlaybackTime.useMutation()

  useInterval(async () => {
    await Promise.all([
      updateRecentLiveSessionTimestampMutation({
        body: {
          liveSessionId: liveSessionId,
          seconds: playerState.progress,
          videoLengthSeconds: videoMetaData?.length ?? 0,
        },
      }),
      updatePlaybackTimeMutation({ params: { liveSessionId: liveSessionId } }),
    ])
  }, 3000) // every 3 seconds

  useEffect(() => {
    if (!isLivePlaybackEnded) return
    setIsShowingCompleteOverlay(true)
    if (playerState.isPlaying) {
      pause()
    }
  }, [isLivePlaybackEnded, pause, playerState.isPlaying])

  useEffect(() => {
    onPaused && onPaused(!playerState.isPlaying)
  }, [playerState.isPlaying, onPaused])

  return (
    <>
      <div
        ref={containerRef}
        className="relative flex h-full w-full select-none flex-col overflow-hidden bg-black"
        onMouseMove={() => {
          if (platform === 'desktop') {
            controlBarRef.current?.setIsShowingControlBar(true)
          }
        }}
      >
        {/* P PRE will fix it later (29/03/2023) */}
        <div className={cn(isHLS ? 'my-auto block' : 'hidden')}>
          <video
            poster={
              src.includes('manifest.m3u8')
                ? src.replace(
                    '/manifest.m3u8',
                    '%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D1s%26height%3D600'
                  )
                : poster
            }
            ref={videoRef as LegacyRef<HTMLVideoElement>}
            className="h-full w-full cursor-pointer object-contain"
            height={videoMetaData?.height}
            width={videoMetaData?.width}
            onClick={() => {
              if (platform === 'desktop') {
                handlePlayPauseVideo()
              }
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

        <canvas
          ref={canvasRef}
          className={cn('h-full w-full cursor-pointer object-contain', isHLS ? 'hidden' : 'block')}
          height={videoMetaData?.height}
          width={videoMetaData?.width}
          onClick={() => {
            if (platform === 'desktop') {
              handlePlayPauseVideo()
            }
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
        {!isShowingCompleteOverlay && !isLivePlaybackEnded && (
          <ControlBar
            isVideoLoading={isVideoLoading}
            previewImageSrc={src}
            isHLS={isHLS}
            resolutionRates={qualityLevels}
            ref={controlBarRef}
            isMuted={playerState.isMuted}
            isVideoPlaying={playerState.isPlaying}
            platform={platform}
            videoChapterName={videoSectionName}
            videoLength={videoMetaData?.length}
            videoPlaybackRate={playerState.playbackRate}
            videoResolution={playerState.resolutionIndex}
            videoProgress={playerState.progress}
            videoVolume={playerState.volume}
            onClickBackwardIcon={() => {
              setVideoProgress((currentProgress) => currentProgress - 15)
              playerAction?.onSkipBackward?.()
            }}
            onClickExpandIcon={() => {
              toggleFullscreen()
            }}
            onClickForwardIcon={() => {
              setVideoProgress((currentProgress) => currentProgress + 15)
              playerAction?.onSkipForward?.()
            }}
            onClickMuteIcon={() => {
              toggleMute()
            }}
            onClickPlayPauseIcon={() => {
              handlePlayPauseVideo()
            }}
            onSeeked={(newVideoProgress) => {
              setVideoProgress(newVideoProgress)
            }}
            onSeeking={() => {
              if (playerState.isPlaying) {
                pause(true)
              }
            }}
            onSelectPlaybackRate={setPlaybackRate}
            // Tus video resolution
            onSelectResolution={setVideoResolution}
            onVolumeChange={(volume) => {
              if (playerState.isMuted) {
                toggleMute()
              }
              setVolume(volume)
            }}
          />
        )}
        {overlay}
        {playerState.isMuted && !isShowingCompleteOverlay && (
          <div
            className={cn(
              'absolute inset-0',
              platform === 'mobile' && 'p-2',
              platform === 'desktop' && 'p-4'
            )}
          >
            <Tag
              size="lg"
              left={<FontAwesomeIcon className="h-4 w-5" icon={faVolumeSlash} />}
              variant="solid"
              color="yellow"
              className="cursor-pointer"
              label="กดหน้าจอเพื่อเปิดเสียง"
              onClick={toggleMute}
            />
          </div>
        )}
        {isShowingCompleteOverlay && !isLivePlayback && (
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
        {isLivePlayback && isShowingCompleteOverlay && (
          <div
            className={cn(
              'absolute inset-0 z-50 flex w-full',
              platform === 'mobile' ? 'bg-gray-900' : 'bg-gradient-to-t from-gray-900'
            )}
          >
            <div className="flex flex-1 flex-col items-center justify-end">
              <div className="mb-12 space-y-4">
                <div className="flex w-fit items-center gap-4">
                  <FontAwesomeIcon icon={faTimer} className="h-10 w-10" />
                  <div className="text-lg font-bold text-gray-50">หมดเวลาเรียนย้อนหลัง</div>
                </div>
                <div className="flex justify-center">
                  <Button
                    // fullWidth={platform !== 'mobile'}
                    onClick={() => void router.push(`/live-course/${query.course as string}`)}
                  >
                    กลับหน้าหลัก
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {isLivePlayback && (
        <div className="bg-navy-10 py-1 text-center text-gray-50">
          คุณสามารถเรียนได้อีก <b>{livePlaybackCountDown}</b>
        </div>
      )}
    </>
  )
})

VideoPlayer.displayName = 'VideoPlayer'
