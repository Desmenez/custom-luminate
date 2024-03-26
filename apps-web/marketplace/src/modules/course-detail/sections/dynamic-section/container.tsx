import { ReactNode, forwardRef } from 'react'

import { cn } from '@luminate/ui'

interface DynamicSectionContainerProps {
  className?: string
  innerClassName?: string
  children?: ReactNode
}

export const DynamicSectionContainer = forwardRef<HTMLDivElement, DynamicSectionContainerProps>(
  function DynamicSectionContainer({ className, innerClassName, children }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-gradient-to-r from-[rgba(28,24,15,0.8)] to-[rgba(52,40,13,0.8)] backdrop-blur-md',
          className
        )}
      >
        <div
          className={cn(
            'flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-8 py-4',
            innerClassName
          )}
        >
          {children}
        </div>
      </div>
    )
  }
)
