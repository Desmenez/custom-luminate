import { faChevronDown, faChevronRight } from '@fortawesome/pro-solid-svg-icons'
import { clsx } from 'clsx'

import { BasePlatform } from '@luminate/types'
import { StrictExtract } from '@luminate/types-utility'
import { FontAwesomeIcon } from '@luminate/ui'

type Platform = StrictExtract<BasePlatform, 'desktop' | 'mobile'>

const playbackRates = [
  { text: 'x 2', value: 2.0 },
  { text: 'x 1.5', value: 1.5 },
  { text: 'x 1.25', value: 1.25 },
  { text: 'ปกติ', value: 1.0 },
  { text: 'x 0.5', value: 0.5 },
]

interface PlaybackRatePopupProps {
  platform: Platform
  selectedPlaybackRateValue: number
  onSelectPlaybackRate?: (value: number) => void
  onClose?: () => void
}

export const PlaybackRatePopup = (props: PlaybackRatePopupProps) => {
  const { onClose: closePopup, onSelectPlaybackRate, platform, selectedPlaybackRateValue } = props

  return (
    <div
      className={clsx(
        'w-fit rounded-lg bg-bg-main-dkt p-2 text-white',
        platform === 'mobile' && 'text-xs',
        platform === 'desktop' && 'text-sm'
      )}
    >
      <button className="flex items-center gap-x-2 py-0.5" onClick={closePopup}>
        <p>ความเร็ววิดีโอ</p>
        <FontAwesomeIcon
          className="h-4 w-4"
          icon={platform === 'mobile' ? faChevronRight : faChevronDown}
        />
      </button>
      {playbackRates.map((playbackRate) => {
        return (
          <button
            key={`playback-speed-button-${playbackRate.value}`}
            className={clsx(
              'block w-full py-0.5 text-left',
              selectedPlaybackRateValue === playbackRate.value && 'text-primary-main'
            )}
            onClick={() => {
              onSelectPlaybackRate?.(playbackRate.value)
            }}
          >
            {playbackRate.text}
          </button>
        )
      })}
    </div>
  )
}
