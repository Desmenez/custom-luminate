import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import type { Ref } from 'react'

import { faSignalStream } from '@fortawesome/pro-regular-svg-icons'
import {
  faArrowRotateLeft,
  faArrowRotateRight,
  faEllipsisVertical,
  faExpand,
  faGear,
  faVolume,
  faVolumeSlash,
} from '@fortawesome/pro-solid-svg-icons'
import dynamic from 'next/dynamic'

import { BasePlatform } from '@luminate/types'
import { StrictExtract } from '@luminate/types-utility'
import { FontAwesomeIcon, Tag } from '@luminate/ui'
import { cn } from '@luminate/ui'

import { Seeker } from './seeker'

const VideoSettingPopup = dynamic(async () => {
  const mod = await import('./video-setting-popup').then((mod) => mod.VideoSettingPopup)
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
  disableSeeking?: boolean
  disablePause?: boolean
}

interface ControlBarRef {
  setIsShowingControlBar: React.Dispatch<React.SetStateAction<boolean>>
  setShowSkipFeedback: React.Dispatch<React.SetStateAction<'backward' | 'forward' | undefined>>
}

export const ControlBar = forwardRef((props: ControlBarProps, ref: Ref<ControlBarRef>) => {
  const {
    isHLS = false,
    isMuted,
    isVideoPlaying,
    isVideoLoading,
    onClickExpandIcon,
    onClickMuteIcon,
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
    disableSeeking,
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
      if (!isShowingSettingOptions || (isVideoPlaying && platform === 'mobile')) {
        setIsShowingControlBar(false)
      }
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
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
          'absolute inset-x-0 bottom-0 z-[100] flex p-4 transition-opacity opacity-100',
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
            'pointer-events-none h-full flex-col-reverse justify-start gap-y-1 bg-gray-900/60 [&>*]:pointer-events-auto',
            !isShowingControlBar && 'opacity-0 hover:flex',
          ]
        )}
      >
        <Seeker
          disableSeeking={disableSeeking}
          previewImageSeekerSrc={isHLS ? previewImageSrc : undefined}
          platform={platform}
          seekerCurrentProgress={videoLength} // TODO: This is hack to keep seeker progress bar full when video is live
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

        <div className={cn('flex select-none items-center text-gray-3')}>
          {platform === 'desktop' && (
            <div className="flex items-center gap-x-4">
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
              <Tag
                label="Live"
                left={<FontAwesomeIcon icon={faSignalStream} className="w-4 h-4" />}
                variant="solid"
                color="red"
              />
            </div>
          )}
          <div className={cn('flex gap-2 truncate text-xs', platform === 'desktop' && 'mx-6')}>
            {platform === 'desktop' && videoChapterName && (
              <>
                <div>{videoChapterName}</div>
              </>
            )}
          </div>
          <div className="grow"></div>
          {platform === 'desktop' && (
            <FontAwesomeIcon
              className={cn(
                'h-6 w-6 shrink-0 cursor-pointer transition-transform duration-150 ease-in-out',
                isShowingSettingOptions ? 'rotate-[60deg]' : 'rotate-0'
              )}
              icon={faGear}
              onClick={() => setIsShowingSettingOptions((prev) => !prev)}
              onMouseDown={(event) => event.stopPropagation()}
            />
          )}
          <FontAwesomeIcon
            className={cn(
              'ml-6 shrink-0 cursor-pointer',
              platform === 'desktop' && 'h-6 w-6 ',
              platform === 'mobile' && 'box-content h-4 w-4 p-2'
            )}
            icon={faExpand}
            onClick={onClickExpandIcon}
          />
        </div>
        {platform === 'mobile' && (
          <div className="absolute right-0 top-0">
            <FontAwesomeIcon
              className="box-content h-4 w-4 p-2"
              icon={faEllipsisVertical}
              onClick={() => setIsShowingSettingOptions((prev) => !prev)}
              onMouseDown={(event) => event.stopPropagation()}
            />
          </div>
        )}
      </div>

      {/* Setting video option */}
      <div
        className={cn(
          'absolute inset-0 z-50 flex justify-end transition-opacity duration-200 ease-in-out opacity-0',
          platform === 'mobile' && 'items-start',
          platform === 'desktop' && 'items-end ',
          isShowingSettingOptions && 'opacity-100'
        )}
        onClick={() => setIsShowingSettingOptions(false)}
      >
        <div
          className={cn(
            'bg-gray-900/80',
            platform === 'desktop' && 'mb-[4.75rem] mr-[1rem]',
            platform === 'mobile' && 'mt-8 mr-2'
          )}
          onClick={(e) => e.stopPropagation()}
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
              <FontAwesomeIcon className="h-12 w-12" icon={faArrowRotateLeft} />
              <p className="text-lg font-regular">-15 sec</p>
            </div>
          )}
          {showSkipFeedback === 'forward' && (
            <div
              ref={forwardTextRef}
              className="absolute right-28 top-1/2 w-28 -translate-y-1/2 rounded-full bg-black/10 p-4 text-center text-white"
            >
              <FontAwesomeIcon className="h-12 w-12" icon={faArrowRotateRight} />
              <p className="text-lg font-regular">+15 sec</p>
            </div>
          )}
        </>
      )}
    </>
  )
})

ControlBar.displayName = 'ControlBar'
