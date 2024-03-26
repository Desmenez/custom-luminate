import { useEffect, useRef, useState } from 'react'

import { faCirclePause, faCirclePlay } from '@fortawesome/pro-regular-svg-icons'
import {
  faArrowRotateLeft,
  faArrowRotateRight,
  faSpinnerThird,
} from '@fortawesome/pro-solid-svg-icons'
import { clsx } from 'clsx'

import type { BasePlatform } from '@luminate/types'
import type { StrictExtract } from '@luminate/types-utility'
import { FontAwesomeIcon } from '@luminate/ui'

interface ScreenControlProps {
  isVideoLoading?: boolean
  isVideoPlaying: boolean
  onClickBackwardIcon?: React.MouseEventHandler<SVGSVGElement>
  onClickForwardIcon?: React.MouseEventHandler<SVGSVGElement>
  onClickPlayPauseIcon?: React.MouseEventHandler<SVGSVGElement>
  platform: StrictExtract<BasePlatform, 'desktop' | 'mobile'>
}

export const ScreenControl = (props: ScreenControlProps) => {
  const {
    isVideoPlaying,
    onClickBackwardIcon,
    onClickForwardIcon,
    onClickPlayPauseIcon,
    platform,
    isVideoLoading = false,
  } = props

  const [showSkipFeedback, setShowSkipFeedback] = useState<'backward' | 'forward' | undefined>()

  const forwardTextRef = useRef<HTMLParagraphElement>(null)
  const backwardTextRef = useRef<HTMLParagraphElement>(null)

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

  const [showPauseIcon, setShowPauseIcon] = useState(true)

  useEffect(() => {
    if (!isVideoPlaying && showPauseIcon && platform === 'desktop') {
      const timer = setTimeout(() => {
        setShowPauseIcon(false)
      }, 300)
      return () => {
        clearTimeout(timer)
      }
    }
  }, [isVideoPlaying, platform, showPauseIcon])

  return isVideoLoading || !isVideoPlaying || platform === 'mobile' ? (
    <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center gap-x-8 text-white">
      <div className="order-2">
        {isVideoLoading ? (
          <div className="animate-spin">
            <FontAwesomeIcon
              className={clsx(
                platform === 'mobile' && 'h-16 w-16',
                platform === 'desktop' && 'h-[7.5rem] w-[7.5rem]'
              )}
              icon={faSpinnerThird}
            />
          </div>
        ) : (
          <div>
            {platform === 'desktop' ? (
              <FontAwesomeIcon
                className={clsx(
                  'h-[7.5rem] w-[7.5rem] transition duration-500 ease-in-out',
                  showPauseIcon ? 'opacity-100' : 'opacity-0'
                )}
                icon={isVideoPlaying ? faCirclePlay : faCirclePause}
                onClick={(e) => {
                  setShowPauseIcon(true)
                  onClickPlayPauseIcon?.(e)
                }}
              />
            ) : (
              <FontAwesomeIcon
                className={clsx('h-16 w-16 transition duration-500 ease-in-out')}
                icon={isVideoPlaying ? faCirclePause : faCirclePlay}
                onClick={(e) => {
                  setShowPauseIcon(true)
                  onClickPlayPauseIcon?.(e)
                }}
              />
            )}
          </div>
        )}
      </div>
      {platform === 'mobile' && (
        <>
          <div className="relative order-1 flex items-center">
            {showSkipFeedback === 'backward' && (
              <p
                ref={backwardTextRef}
                className="absolute right-[calc(100%+2rem)] top-1/2 -translate-y-1/2 text-base  font-regular text-white"
              >
                -15
              </p>
            )}
            <div
              className={clsx(
                'rounded-full p-2.5 transition duration-500 active:bg-white/20 active:ring-4 active:ring-white/40 active:transition-none'
              )}
            >
              <FontAwesomeIcon
                className="block h-5 w-5 text-white"
                icon={faArrowRotateLeft}
                onClick={(e) => {
                  onClickBackwardIcon?.(e)
                  setShowSkipFeedback('backward')
                }}
              />
            </div>
          </div>
          <div className="relative order-3 flex items-center">
            <div
              className={clsx(
                'rounded-full p-2.5 transition duration-500 active:bg-white/20 active:ring-4 active:ring-white/40 active:transition-none'
              )}
            >
              <FontAwesomeIcon
                className="block h-5 w-5 text-white"
                icon={faArrowRotateRight}
                onClick={(e) => {
                  onClickForwardIcon?.(e)
                  setShowSkipFeedback('forward')
                }}
              />
            </div>
            {showSkipFeedback === 'forward' && (
              <p
                ref={forwardTextRef}
                className="absolute left-[calc(100%+2rem)] top-1/2 -translate-y-1/2 text-base font-regular text-white"
              >
                +15
              </p>
            )}
          </div>
        </>
      )}
    </div>
  ) : null
}
