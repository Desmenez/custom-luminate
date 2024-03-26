import { forwardRef } from 'react'

import { cn } from '@luminate/ui'

export interface CourseDetailSectionProps {
  className?: string
  children?: React.ReactNode
}

export const CourseDetailSection = forwardRef<HTMLDivElement, CourseDetailSectionProps>(
  function CourseDetailSection({ className, children }, ref) {
    return (
      <section
        ref={ref}
        className={cn('p-4 md:p-6 flex flex-col gap-4 rounded-lg bg-gray-900 shadow-lg', className)}
      >
        {children}
      </section>
    )
  }
)

interface CourseDetailSectionTitleProps {
  children: string
}

export function CourseDetailSectionTitle({ children }: CourseDetailSectionTitleProps) {
  return (
    <h2 className="font-sans font-semibold text-lg lg:text-2xl text-gray-50 leading-normal">
      {children}
    </h2>
  )
}
