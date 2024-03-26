import { useCallback, useEffect, useRef, useState } from 'react'

import { clsx } from 'clsx'

import { BasePlatform } from '@luminate/types'
import { StrictExtract } from '@luminate/types-utility'

type Platform = StrictExtract<BasePlatform, 'desktop' | 'mobile'>

interface SeekerProps {
  previewImageSeekerSrc?: string
  platform: Platform
  seekerCurrentProgress?: number
  seekerTotalLength?: number
  onSeeking?: (currentSeekerProgress: number) => void
  onSeeked?: (newSeekerProgress: number) => void
}

export const Seeker = (props: SeekerProps) => {
  const {
    onSeeked,
    onSeeking,
    previewImageSeekerSrc,
    platform,
    seekerCurrentProgress,
    seekerTotalLength,
  } = props

  const seekerRef = useRef<HTMLDivElement>(null)

  const [isSeeking, setIsSeeking] = useState(false)
  const [seekPosition, setSeekPosition] = useState(0)
  const [holdingClick, setHoldingClick] = useState(false)

  const seekerLeftMargin = seekerRef.current?.getBoundingClientRect().left

  // remove /manifest/video.m3u8' from previewImageSeekerSrc
  const previewImageSeekerSrcRemove = previewImageSeekerSrc?.replace('/manifest/video.m3u8', '')

  // When click and hold on seeker
  const handleOnSeeking = useCallback(
    (clientX: number) => {
      if ((!seekerLeftMargin && seekerLeftMargin !== 0) || !seekerTotalLength || !seekerRef.current)
        return
      const seekingProgress = (clientX - seekerLeftMargin) / seekerRef.current.clientWidth
      const seekingProgressWithContraints = Math.min(Math.max(seekingProgress, 0), 1)
      setHoldingClick(true)
      setSeekPosition(seekingProgressWithContraints)
      onSeeking?.(seekerTotalLength * seekingProgressWithContraints)
      setPreviewPosition(seekingProgressWithContraints)
    },
    [onSeeking, seekerLeftMargin, seekerTotalLength]
  )

  // When release click on seeker
  const handleOnSeeked = useCallback(() => {
    setIsSeeking(false)
    if (!seekerTotalLength) return
    onSeeked?.(seekerTotalLength * seekPosition)
  }, [onSeeked, seekPosition, seekerTotalLength])

  // Video preview when hover on seeker
  const [previewPosition, setPreviewPosition] = useState(0)
  const [showPreview, setShowPreview] = useState(false)

  // when hover on seeker
  const handleOnSeekingHover = useCallback(
    (clientX: number) => {
      if (!seekerLeftMargin || !seekerTotalLength) return
      setShowPreview(true)

      //seekingProgress should not be greater than 1 or less than 0
      const seekingProgress = (clientX - seekerLeftMargin) / seekerRef.current.clientWidth
      const seekingProgressWithContraints = Math.min(Math.max(seekingProgress, 0), 1)
      setPreviewPosition(seekingProgressWithContraints)
    },
    [seekerLeftMargin, seekerTotalLength]
  )

  useEffect(() => {
    const handleSeekOnMouseMove = (e: MouseEvent) => {
      handleOnSeeking(e.clientX)
    }

    const handleSeekOnMouseUp = () => {
      setHoldingClick(false)
      setShowPreview(false)
      handleOnSeeked()
    }

    if (isSeeking) {
      document.addEventListener('mousemove', handleSeekOnMouseMove)
      document.addEventListener('mouseup', handleSeekOnMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleSeekOnMouseMove)
      document.removeEventListener('mouseup', handleSeekOnMouseUp)
    }
  }, [handleOnSeeked, handleOnSeeking, isSeeking, onSeeked, seekPosition, seekerTotalLength])

  const handleSeekOnTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    setShowPreview(true)
    handleOnSeeking(e.touches[0].clientX)
  }

  const handleSeekOnTouchEnd: React.TouchEventHandler<HTMLDivElement> = () => {
    setShowPreview(false)
    handleOnSeeked()
  }

  return (
    <div
      ref={seekerRef}
      className={clsx(
        'group cursor-pointer',
        platform === 'desktop' && 'py-1 desktop:p-0',
        platform === 'mobile' && 'py-2'
      )}
      onMouseDown={(e) => {
        setIsSeeking(true)
        setShowPreview(true)
        handleOnSeeking(e.clientX)
      }}
      onMouseMove={(e) => {
        if (!isSeeking) handleOnSeekingHover(e.clientX)
      }}
      onMouseLeave={() => {
        if (!holdingClick) setShowPreview(false)
      }}
      onTouchMove={handleSeekOnTouchMove}
      onTouchStart={(e) => {
        setIsSeeking(true)
        setShowPreview(true)
        handleOnSeeking(e.touches[0].clientX)
      }}
      onTouchEnd={handleSeekOnTouchEnd}
    >
      <div
        className={clsx(
          'relative',
          platform === 'mobile' && 'h-0.5',
          platform === 'desktop' && 'my-1 h-1'
        )}
      >
        {/* Preview image when hover on seeker */}
        {previewImageSeekerSrc && showPreview && (
          <div
            className="absolute z-10 -top-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[160px] h-[90px] border-[0.5px] border-white bg-black"
            style={{ left: `${previewPosition * 100}%` }}
          >
            <img
              src={`${previewImageSeekerSrcRemove}/thumbnails/thumbnail.jpg?time=${Math.floor(
                previewPosition * (seekerTotalLength ?? 0)
              )}s&height=300`}
              className="w-full h-full "
            />
          </div>
        )}
        <div className="absolute inset-x-0 h-full rounded-3xl bg-white" />
        <div
          className="absolute flex h-full items-center justify-end rounded-3xl bg-primary"
          style={{
            width:
              seekerCurrentProgress && seekerTotalLength
                ? isSeeking
                  ? `${seekPosition * 100 > 100 ? 100 : seekPosition * 100}%`
                  : `${
                      seekerCurrentProgress / seekerTotalLength > 1
                        ? 100
                        : (seekerCurrentProgress / seekerTotalLength) * 100
                    }%`
                : '0%',
          }}
        >
          <div
            className={clsx('shrink-0 translate-x-1/2 touch-none', platform === 'mobile' && 'p-1')}
          >
            <div
              className={clsx(
                'h-3 w-3 rounded-full bg-primary laptop:hidden laptop:group-hover:block'
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
