import { HTMLAttributes } from 'react'

import { cn } from '@luminate/ui'

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  title: string
}

export const Section: React.FC<SectionProps> = ({ className, ...props }) => {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="text-gray-50 font-semibold text-base">{props.title}</div>
      {props.children}
    </div>
  )
}
