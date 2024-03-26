import { useEffect, useRef } from 'react'

import { clsx } from 'clsx'

import type { BasePlatform } from '@luminate/types'
import type { StrictExtract } from '@luminate/types-utility'
import { Button } from '@luminate/ui'

import { CircularProgressBar } from '../circular-progress-bar'

interface VideoCompleteOverlayProps {
  platform: StrictExtract<BasePlatform, 'desktop' | 'mobile'>
  icon?: JSX.Element
  confirmButtonText?: string
  nextObjectTitle?: string
  nextObjectCode?: string
  autoplayNextAfterFinish?: boolean
  onClickConfirm?: () => void
  onClickCancel?: () => void
}
export const VideoCompleteOverlay = (props: VideoCompleteOverlayProps) => {
  const {
    autoplayNextAfterFinish = true,
    confirmButtonText,
    icon,
    nextObjectCode,
    nextObjectTitle,
    onClickCancel,
    onClickConfirm,
    platform,
  } = props

  const isCancelled = useRef(false)

  useEffect(() => {
    isCancelled.current = false
  }, [])

  return (
    <div className="flex h-full w-full flex-col items-center justify-end [background:linear-gradient(0deg,#00002D_10%,#00000000_100%)]">
      <div
        className={clsx(
          'flex flex-col items-center px-4',
          platform === 'mobile' && 'mb-4 max-w-[23.5rem] gap-y-6',
          platform === 'desktop' && 'mb-6 max-w-[35.75rem] gap-y-4'
        )}
      >
        <div
          className={clsx(
            'flex w-full',
            nextObjectCode && nextObjectTitle ? 'justify-start' : 'justify-center'
          )}
        >
          <div
            className={clsx(
              'relative flex shrink-0 items-center justify-center rounded-full',
              platform === 'mobile' && 'h-16 w-16',
              platform === 'desktop' && 'h-[7.5rem] w-[7.5rem]',
              nextObjectCode && nextObjectTitle && 'mr-2'
            )}
          >
            <div
              className={clsx(
                'absolute inset-1 flex items-center justify-center rounded-full bg-white'
              )}
            >
              <div
                className={clsx(
                  'text-text-high-emp',
                  platform === 'mobile' && 'h-10 w-10',
                  platform === 'desktop' && 'h-[4.5rem] w-[4.5rem]'
                )}
              >
                {icon}
              </div>
            </div>
            {autoplayNextAfterFinish && (
              <CircularProgressBar
                durationInSeconds={5}
                strokeWidth={2}
                onEnded={() => {
                  if (isCancelled.current === true) return
                  onClickConfirm?.()
                }}
              />
            )}
          </div>
          <div className="flex flex-col justify-center gap-y-1">
            {nextObjectTitle && (
              <div
                className={clsx(
                  'text-white line-clamp-1',
                  platform === 'mobile' && 'text-base',
                  platform === 'desktop' && 'text-lg font-bold'
                )}
              >
                {nextObjectTitle}
              </div>
            )}
            {nextObjectCode && (
              <div
                className={clsx(
                  'text-gray-7 line-clamp-1',
                  platform === 'mobile' && 'text-xs',
                  platform === 'desktop' && 'text-sm'
                )}
              >
                {nextObjectCode}
              </div>
            )}
          </div>
        </div>
        <div
          className={clsx(
            'flex w-full',
            platform === 'mobile' && 'gap-x-4',
            platform === 'desktop' && 'gap-x-8'
          )}
        >
          <Button
            // fullWidth
            // size={platform === 'mobile' ? 'sm' : 'md'}
            variant="outline"
            onClick={() => {
              isCancelled.current = true
              onClickCancel?.()
            }}
          >
            ยกเลิก
          </Button>
          <Button
            // fullWidth
            // size={platform === 'mobile' ? 'sm' : 'md'}
            // variant="solid"
            onClick={onClickConfirm}
          >
            {confirmButtonText ?? 'ถัดไป'}
          </Button>
        </div>
      </div>
    </div>
  )
}
