import { ReactNode, forwardRef } from 'react'

import { cn } from '@luminate/ui'

export interface SectionProps {
  className?: string
  children?: ReactNode
}

export const Section = forwardRef<HTMLDivElement, SectionProps>(function Session(props, ref) {
  return (
    <section
      ref={ref}
      className={cn('p-4 lg:p-6 bg-gray-900 rounded-lg shadow-sm', props.className)}
    >
      {props.children}
    </section>
  )
})
