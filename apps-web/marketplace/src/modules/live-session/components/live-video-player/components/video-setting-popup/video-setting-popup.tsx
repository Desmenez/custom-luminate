import { useMemo, useRef, useState } from 'react'

import { faCheck, faChevronLeft, faChevronRight, faSliders } from '@fortawesome/pro-solid-svg-icons'
import { clsx } from 'clsx'

import { useOnClickOutside } from '@luminate/react-hooks'
import { BasePlatform } from '@luminate/types'
import { StrictExtract } from '@luminate/types-utility'
import { FontAwesomeIcon, cn } from '@luminate/ui'

type Platform = StrictExtract<BasePlatform, 'desktop' | 'mobile'>

const playbackRates = [
  { text: '2', value: 2.0 },
  { text: '1.5', value: 1.5 },
  { text: '1.25', value: 1.25 },
  { text: 'ปกติ', value: 1.0 },
  { text: '0.5', value: 0.5 },
]

export interface VideoSettingPopupProps {
  isHLS?: boolean
  platform: Platform
  selectedResolutionValue?: number
  resolutionRates?: Array<{ index: number; label: string }>
  selectedPlaybackRateValue: number
  onSelectResolution?: (value: number) => void
  onSelectPlaybackRate?: (value: number) => void
  onClose?: () => void
}

export const VideoSettingPopup = (props: VideoSettingPopupProps) => {
  const {
    isHLS = false,
    onClose: closePopup,
    onSelectPlaybackRate,
    onSelectResolution,
    platform,
    resolutionRates,
    selectedPlaybackRateValue,
    selectedResolutionValue,
  } = props

  const [showGroupSetting, setShowGroupSetting] = useState(true)
  const [showPlaybackSetting, setShowPlaybackSetting] = useState(false)
  const [showResolutionSetting, setShowResolutionSetting] = useState(false)

  // CLick outside to close popup
  const thisRef = useRef(null)
  useOnClickOutside(thisRef, () => {
    setShowGroupSetting(true)
    setShowPlaybackSetting(false)
    setShowResolutionSetting(false)
    closePopup?.()
  })

  const availableResolutionRates = useMemo(() => {
    if (!resolutionRates) return []
    const extendedResolutionRates = [{ index: -1, label: 'อัตโนมัติ' }, ...resolutionRates]
    return extendedResolutionRates.sort((a, b) => b.index - a.index)
  }, [resolutionRates])

  const haveResolutionRates = availableResolutionRates && availableResolutionRates?.length > 0

  return (
    <div
      ref={thisRef}
      className={clsx(
        'rounded-lg bg-bg-main-dkt p-2 text-xs text-white ',
        platform === 'desktop' ? 'w-[180px]' : 'w-[164px]'
      )}
    >
      {/* SELECTION POPUP */}
      {showGroupSetting && (
        <div
          className={clsx(
            'flex flex-col gap-3 laptop:gap-0.5 overflow-hidden',
            showGroupSetting ? 'max-h-[1000px]' : 'max-h-[0px]'
          )}
        >
          {isHLS && haveResolutionRates && (
            <div
              className="flex items-center gap-1.5 cursor-pointer hover:bg-gray-7 hover:bg-opacity-25 rounded-lg laptop:p-1"
              onClick={() => {
                setShowResolutionSetting(true)
                setShowGroupSetting(false)
              }}
            >
              <FontAwesomeIcon className="h-3 w-3" icon={faSliders} />
              <div className="font-bold">คุณภาพ</div>
              <div className="grow"></div>
              <div className="flex items-center gap-1.5">
                <div>
                  {availableResolutionRates.find(
                    (resolution) => resolution.index === selectedResolutionValue
                  )?.label ?? 'อัตโนมัติ'}
                </div>
                <FontAwesomeIcon className="h-3 w-3" icon={faChevronRight} />
              </div>
            </div>
          )}
        </div>
      )}

      {/* PLAYBACK RATE POPUP */}
      <div
        className={clsx(
          'flex flex-col gap-2 overflow-hidden',
          platform === 'desktop' ? 'gap-2' : 'gap-1.5',
          showPlaybackSetting ? 'max-h-[1000px]' : 'max-h-[0px]'
        )}
      >
        <button
          className="flex items-center gap-x-1.5"
          onClick={() => {
            setShowPlaybackSetting(false)
            setShowGroupSetting(true)
          }}
        >
          <FontAwesomeIcon className="h-3 w-3" icon={faChevronLeft} />
          <p className="font-bold">ความเร็ววิดีโอ</p>
        </button>

        {playbackRates.map((playbackRate) => {
          return (
            <button
              key={`playback-speed-button-${playbackRate.value}`}
              className={clsx(
                'flex w-full items-center gap-1 text-left',
                selectedPlaybackRateValue === playbackRate.value && 'text-primary-main'
              )}
              onClick={() => {
                onSelectPlaybackRate?.(playbackRate.value)
                setShowPlaybackSetting(false)
                setShowGroupSetting(true)
              }}
            >
              <FontAwesomeIcon
                icon={faCheck}
                className={clsx(
                  'h-3 w-3',
                  selectedPlaybackRateValue !== playbackRate.value && 'text-text-high-emp'
                )}
              />
              <div> {playbackRate.text}</div>
            </button>
          )
        })}
      </div>

      {/* RESOLUTION RATE POPUP */}
      {haveResolutionRates && (
        <div
          className={clsx(
            'flex flex-col gap-2 overflow-hidden',
            platform === 'desktop' ? 'gap-2' : 'gap-1.5',
            showResolutionSetting ? 'max-h-[1000px]' : 'max-h-[0px]'
          )}
        >
          <button
            className="flex items-center gap-x-1.5"
            onClick={() => {
              setShowResolutionSetting(false)
              setShowGroupSetting(true)
            }}
          >
            <FontAwesomeIcon className="h-3 w-3" icon={faChevronLeft} />
            <p className="font-bold">คุณภาพ</p>
          </button>

          {availableResolutionRates.map((resolution) => {
            return (
              <ResolutionOption
                key={`resolution-button-${resolution.index}`}
                resolution={resolution}
                selected={selectedResolutionValue === resolution.index}
                onClick={() => {
                  onSelectResolution?.(resolution.index)
                  setShowResolutionSetting(false)
                  setShowGroupSetting(true)
                }}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

const ResolutionOption: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    resolution: { index: number; label: string }
    selected: boolean
  }
> = (props) => {
  return (
    <button
      {...props}
      className={cn(
        'flex w-full items-center gap-1 text-left',
        props.selected && 'text-primary-main',
        props.className
      )}
    >
      <FontAwesomeIcon icon={faCheck} className={clsx('h-3 w-3', !props.selected && 'invisible')} />
      <div>{props.resolution.label}</div>
    </button>
  )
}
