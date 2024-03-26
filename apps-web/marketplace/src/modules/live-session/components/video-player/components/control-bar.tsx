import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

import { faGear } from '@fortawesome/pro-regular-svg-icons'
import {
  faArrowRotateLeft,
  faArrowRotateRight,
  faEllipsisVertical,
  faExpand,
  faPause,
  faPlay,
  faVolume,
  faVolumeSlash,
} from '@fortawesome/pro-solid-svg-icons'
import { clsx } from 'clsx'
import dynamic from 'next/dynamic'

import type { BasePlatform } from '@luminate/types'
import type { StrictExtract } from '@luminate/types-utility'
import { FontAwesomeIcon, cn } from '@luminate/ui'
import { convertSecondsToHmsString } from '@luminate/utils'

import { Seeker } from './seeker'

const VideoSettingPopup = dynamic(async () => {
  const mod = await import('./video-setting-popup').then((mod) => mod.VideoSettingPopup)
  return mod
})

const ScreenControl = dynamic(async () => {
  const mod = await import('./screen-control').then((mod) => mod.ScreenControl)
  return mod
})

type Platform = StrictExtract<BasePlatform, 'desktop' | 'mobile'>

interface ControlBarProps {
  platform: Platform
  isVideoPlaying: boolean
  isMuted: boolean
  onClickPlayPauseIcon?: React.MouseEventHandler<SVGSVGElement>
  onClickMuteIcon?: React.MouseEventHandler<SVGSVGElement>
  onClickExpandIcon?: React.MouseEventHandler<SVGSVGElement>
  onClickForwardIcon?: React.MouseEventHandler<HTMLButtonElement> &
    React.MouseEventHandler<SVGSVGElement>
  onClickBackwardIcon?: React.MouseEventHandler<HTMLButtonElement> &
    React.MouseEventHandler<SVGSVGElement>
  onSelectPlaybackRate?: React.ComponentProps<typeof VideoSettingPopup>['onSelectPlaybackRate']
  onSelectResolution?: React.ComponentProps<typeof VideoSettingPopup>['onSelectResolution']
  onSeeked?: React.ComponentProps<typeof Seeker>['onSeeked']
  onSeeking?: React.ComponentProps<typeof Seeker>['onSeeking']
  onVolumeChange: React.ComponentProps<typeof Seeker>['onSeeked']
  videoPlaybackRate: React.ComponentProps<typeof VideoSettingPopup>['selectedPlaybackRateValue']
  videoResolution?: React.ComponentProps<typeof VideoSettingPopup>['selectedResolutionValue']
  videoProgress?: number
  videoLength?: number
  videoVolume?: number
  videoChapterName?: string
  resolutionRates?: React.ComponentProps<typeof VideoSettingPopup>['resolutionRates']
  isHLS?: boolean
  isVideoLoading?: boolean
  previewImageSrc?: string
}

interface ControlBarRef {
  setIsShowingControlBar: React.Dispatch<React.SetStateAction<boolean>>
  setShowSkipFeedback: React.Dispatch<React.SetStateAction<'backward' | 'forward' | undefined>>
}

export const ControlBar = forwardRef<ControlBarRef, ControlBarProps>((props, ref) => {
  const {
    isHLS = false,
    isMuted,
    isVideoPlaying,
    isVideoLoading,
    onClickBackwardIcon,
    onClickExpandIcon,
    onClickForwardIcon,
    onClickMuteIcon,
    onClickPlayPauseIcon,
    onSeeked,
    onSeeking,
    onSelectPlaybackRate,
    onSelectResolution,
    onVolumeChange,
    platform,
    resolutionRates,
    videoChapterName,
    videoLength,
    videoPlaybackRate,
    videoProgress,
    videoResolution,
    videoVolume,
    previewImageSrc,
  } = props

  const [isShowingControlBar, setIsShowingControlBar] = useState(false)
  const [isShowingSettingOptions, setIsShowingSettingOptions] = useState(false)
  const [videoSeekingProgress, setVideoSeekingProgress] = useState<number | undefined>()

  const [showSkipFeedback, setShowSkipFeedback] = useState<'backward' | 'forward' | undefined>()

  useImperativeHandle(
    ref,
    () => ({
      setIsShowingControlBar,
      setShowSkipFeedback,
    }),
    []
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isShowingSettingOptions === false || (isVideoPlaying === true && platform === 'mobile')) {
        setIsShowingControlBar(false)
      }
    }, 3000)
    return () => clearTimeout(timer)
  }, [isShowingControlBar, isShowingSettingOptions, isVideoPlaying, platform])

  const forwardTextRef = useRef<HTMLDivElement>(null)
  const backwardTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    switch (showSkipFeedback) {
      case 'forward':
        if (forwardTextRef.current) {
          forwardTextRef.current.animate([{ opacity: '1' }, { opacity: '0' }], {
            duration: 510,
            iterations: 1,
          })
        }
        break
      case 'backward':
        if (backwardTextRef.current) {
          backwardTextRef.current.animate([{ opacity: '1' }, { opacity: '0' }], {
            duration: 510,
            iterations: 1,
          })
        }
        break
    }

    const timer = setTimeout(() => {
      setShowSkipFeedback(undefined)
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [showSkipFeedback])

  return (
    <>
      <div
        className={cn(
          'absolute inset-x-0 bottom-0 z-[1000] flex p-4 transition-opacity opacity-100',
          platform === 'desktop' && [
            'flex-col justify-end gap-y-3 desktop:gap-y-4',
            isVideoPlaying && [
              'h-[5.5rem] bg-gradient-to-t from-gray-900/70',
              !isShowingControlBar && 'opacity-0 hover:flex',
            ],
            (!isVideoPlaying || isVideoLoading) &&
              'pointer-events-none h-full [&>*]:pointer-events-auto',
          ],
          platform === 'mobile' && [
            'pointer-events-none h-full flex-col-reverse justify-start gap-y-1 bg-bg-main-dkt/60 [&>*]:pointer-events-auto',
            !isShowingControlBar && 'opacity-0 hover:flex',
          ]
        )}
      >
        <Seeker
          previewImageSeekerSrc={isHLS ? previewImageSrc : undefined}
          platform={platform}
          seekerCurrentProgress={videoProgress}
          seekerTotalLength={videoLength}
          onSeeked={(e) => {
            const currentTime = Math.round(e)
            setVideoSeekingProgress(undefined)
            onSeeked?.(currentTime)
          }}
          onSeeking={(currentVideoProgress) => {
            const currentTime = Math.round(currentVideoProgress)
            setVideoSeekingProgress(currentTime)
            onSeeking?.(currentTime)
          }}
        />
        <div className={clsx('flex items-center select-none text-gray-3')}>
          {platform === 'desktop' && (
            <div className="flex items-center gap-x-6">
              <FontAwesomeIcon
                className="h-6 w-6 cursor-pointer"
                icon={isVideoPlaying ? faPause : faPlay}
                onClick={onClickPlayPauseIcon}
              />
              <FontAwesomeIcon
                className="h-6 w-6 cursor-pointer"
                icon={faArrowRotateLeft}
                onClick={(e) => {
                  onClickBackwardIcon?.(e)
                  setShowSkipFeedback('backward')
                }}
              />
              <FontAwesomeIcon
                className="h-6 w-6 cursor-pointer"
                icon={faArrowRotateRight}
                onClick={(e) => {
                  onClickForwardIcon?.(e)
                  setShowSkipFeedback('forward')
                }}
              />
              <div className="group flex items-center gap-x-2">
                <FontAwesomeIcon
                  className="h-6 w-6 cursor-pointer"
                  icon={isMuted ? faVolumeSlash : faVolume}
                  onClick={onClickMuteIcon}
                />
                <div className="block w-0 group-hover:w-[6.25rem] transition-all">
                  <Seeker
                    platform={platform}
                    seekerCurrentProgress={isMuted ? 0 : videoVolume}
                    seekerTotalLength={1}
                    onSeeked={onVolumeChange}
                    onSeeking={onVolumeChange}
                  />
                </div>
              </div>
            </div>
          )}
          <div className={clsx('flex gap-2 text-xs truncate', platform === 'desktop' && 'mx-6')}>
            <div className="flex gap-1 font-roboto">
              <div>
                {videoProgress
                  ? convertSecondsToHmsString(videoSeekingProgress ?? videoProgress)
                  : '00:00:00'}
              </div>
              <div>/</div>
              <div className="font-roboto">
                {videoLength ? convertSecondsToHmsString(videoLength) : '00:00:00'}
              </div>
            </div>
            {platform === 'desktop' && videoChapterName && (
              <>
                <div>:</div>
                <div>{videoChapterName}</div>
              </>
            )}
          </div>
          <div className="flex-grow"></div>
          {platform === 'desktop' && (
            <FontAwesomeIcon
              className={clsx(
                'h-6 w-6 cursor-pointer flex-shrink-0 transition-transform duration-150 ease-in-out',
                isShowingSettingOptions ? 'rotate-[60deg]' : 'rotate-0'
              )}
              icon={faGear}
              onClick={() => setIsShowingSettingOptions((prev) => !prev)}
              onMouseDown={(event) => event.stopPropagation()}
            />
          )}
          <FontAwesomeIcon
            className={clsx(
              'ml-6 cursor-pointer flex-shrink-0',
              platform === 'desktop' && 'h-6 w-6 ',
              platform === 'mobile' && 'box-content h-4 w-4 p-2'
            )}
            icon={faExpand}
            onClick={onClickExpandIcon}
          />
        </div>
        {platform === 'mobile' && (
          <div className="absolute top-0 right-0 text-white">
            <FontAwesomeIcon
              className="box-content h-4 w-4 p-2"
              icon={faEllipsisVertical}
              onClick={() => setIsShowingSettingOptions((prev) => !prev)}
              onMouseDown={(event) => event.stopPropagation()}
            />
          </div>
        )}
        <ScreenControl
          isVideoLoading={isVideoLoading}
          isVideoPlaying={isVideoPlaying}
          platform={platform}
          onClickBackwardIcon={onClickBackwardIcon}
          onClickForwardIcon={onClickForwardIcon}
          onClickPlayPauseIcon={onClickPlayPauseIcon}
        />
      </div>

      {/* Setting video option */}
      <div
        className={clsx(
          'absolute inset-0 flex justify-end z-50 duration-200 ease-in-out transition-opacity opacity-0',
          platform === 'mobile' && 'items-start',
          platform === 'desktop' && 'items-end ',
          isShowingSettingOptions && 'opacity-100'
        )}
        onClick={() => setIsShowingSettingOptions(false)}
      >
        <div
          className={clsx('m-2', platform === 'desktop' && 'mr-[1rem] mb-[4.75rem] bg-gray-900/80')}
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <VideoSettingPopup
            isHLS={isHLS}
            resolutionRates={resolutionRates}
            platform={platform}
            selectedPlaybackRateValue={videoPlaybackRate}
            selectedResolutionValue={videoResolution}
            onClose={() => {
              setIsShowingSettingOptions(false)
            }}
            onSelectPlaybackRate={(value) => {
              onSelectPlaybackRate?.(value)
            }}
            onSelectResolution={(value) => {
              onSelectResolution?.(value)
              setIsShowingSettingOptions(false)
            }}
          />
        </div>
      </div>

      {/* Skip 15 seconds forward or backward by keyboard */}
      {platform === 'desktop' && (
        <>
          {showSkipFeedback === 'backward' && (
            <div
              ref={backwardTextRef}
              className="absolute left-28 top-1/2 w-28 -translate-y-1/2 rounded-full bg-black/10 p-4 text-center text-white"
            >
              <FontAwesomeIcon className="h-12 w-12 m-auto" icon={faArrowRotateLeft} />
              <p className="text-lg font-regular mt-2">-15 sec</p>
            </div>
          )}
          {showSkipFeedback === 'forward' && (
            <div
              ref={forwardTextRef}
              className="absolute top-1/2 right-28 w-28 -translate-y-1/2 rounded-full bg-black/10 p-4 text-center text-white"
            >
              <FontAwesomeIcon className="h-12 w-12 m-auto" icon={faArrowRotateRight} />
              <p className="text-lg font-regular mt-2">+15 sec</p>
            </div>
          )}
        </>
      )}
    </>
  )
})

ControlBar.displayName = 'ControlBar'
