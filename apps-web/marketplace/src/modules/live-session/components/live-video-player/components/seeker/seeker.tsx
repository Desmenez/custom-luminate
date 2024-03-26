import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { clsx } from 'clsx'

import { BasePlatform } from '@luminate/types'
import { StrictExtract } from '@luminate/types-utility'
import { cn } from '@luminate/ui'

type Platform = StrictExtract<BasePlatform, 'desktop' | 'mobile'>

interface SeekerProps {
  previewImageSeekerSrc?: string
  platform: Platform
  seekerCurrentProgress?: number
  seekerTotalLength?: number
  onSeeking?: (currentSeekerProgress: number) => void
  onSeeked?: (newSeekerProgress: number) => void
  disableSeeking?: boolean
  seekerColor?: string
}

export const Seeker = (props: SeekerProps) => {
  const {
    onSeeked,
    onSeeking,
    previewImageSeekerSrc,
    platform,
    seekerCurrentProgress,
    seekerTotalLength,
    disableSeeking,
    seekerColor = 'bg-red-500',
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

    const handleSeekOnMouseUp = (e: MouseEvent) => {
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
    if (disableSeeking) return
    setShowPreview(true)
    handleOnSeeking(e.touches[0].clientX)
  }

  const handleSeekOnTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    if (disableSeeking) return
    setShowPreview(false)
    handleOnSeeked()
  }

  const previewTime = Math.floor(previewPosition * (seekerTotalLength ?? 0))
  const previewImageSrc = `${previewImageSeekerSrcRemove}/thumbnails/thumbnail.jpg?time=${previewTime}s&height=300`
  const seekerWidth = useMemo(() => {
    return seekerCurrentProgress && seekerTotalLength
      ? isSeeking
        ? `${seekPosition * 100 > 100 ? 100 : seekPosition * 100}%`
        : `${
            seekerCurrentProgress / seekerTotalLength > 1
              ? 100
              : (seekerCurrentProgress / seekerTotalLength) * 100
          }%`
      : '0%'
  }, [isSeeking, seekPosition, seekerCurrentProgress, seekerTotalLength])

  return (
    <div
      ref={seekerRef}
      className={clsx(
        'group cursor-pointer',
        platform === 'desktop' && 'py-1 desktop:p-0',
        platform === 'mobile' && 'py-2'
      )}
      onMouseDown={(e) => {
        if (disableSeeking) return
        setIsSeeking(true)
        setShowPreview(true)
        handleOnSeeking(e.clientX)
      }}
      onMouseMove={(e) => {
        if (disableSeeking) return
        if (!isSeeking) handleOnSeekingHover(e.clientX)
      }}
      onMouseLeave={() => {
        if (disableSeeking) return
        if (!holdingClick) setShowPreview(false)
      }}
      onTouchMove={handleSeekOnTouchMove}
      onTouchStart={(e) => {
        if (disableSeeking) return
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
            className="absolute -top-16 left-1/2 z-10 h-[90px] w-[160px] -translate-x-1/2 -translate-y-1/2 border-[0.5px] border-white bg-black"
            style={{ left: `${previewPosition * 100}%` }}
          >
            <img src={`${previewImageSrc}`} className="h-full w-full" />
          </div>
        )}
        <div className="absolute inset-x-0 h-full rounded-3xl bg-gray-400/80" />
        <div
          className={cn('absolute flex h-full items-center justify-end rounded-3xl', seekerColor)}
          style={{ width: seekerWidth }}
        >
          <div
            className={clsx('shrink-0 translate-x-1/2 touch-none', platform === 'mobile' && 'p-1')}
          >
            <div
              className={clsx(
                'h-3 w-3 rounded-full bg-primary-main laptop:hidden laptop:group-hover:block'
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
