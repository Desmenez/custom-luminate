import { ReactNode } from 'react'

import { cn } from '@luminate/ui'

export interface DynamicSectionTitleProps {
  className?: string
  children?: ReactNode
}

export function DynamicSectionTitle({ className, children }: DynamicSectionTitleProps) {
  return (
    <p className={cn('font-sans font-semibold text-gray-50 text-xl truncate', className)}>
      {children}
    </p>
  )
}

export interface DynamicSectionSubtitleProps {
  className?: string
  children?: ReactNode
}

export function DynamicSectionSubtitle({ className, children }: DynamicSectionTitleProps) {
  return <p className={cn('flex flex-row gap-2 text-gray-50 text-sm', className)}>{children}</p>
}
