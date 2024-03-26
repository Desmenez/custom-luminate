import { ReactNode } from 'react'

import { IconDefinition } from '@fortawesome/pro-regular-svg-icons'

import { FontAwesomeIcon, cn } from '@luminate/ui'

export interface AboutSubsectionProps {
  className?: string
  boxClassName?: string
  icon: IconDefinition
  title: string
  children?: ReactNode
}

export function AboutSubsection(props: AboutSubsectionProps) {
  return (
    <div className={cn('text-gray-50', props.className)}>
      <div className="flex items-center gap-2 py-0.5 px-1 mb-2">
        <FontAwesomeIcon className="w-4 h-4" icon={props.icon} />
        <span className="font-sans font-semibold text-[18px] leading-normal">{props.title}</span>
      </div>
      <div
        className={cn(
          'w-full rounded-lg p-2 border border-gray-700 whitespace-pre-line leading-normal',
          props.boxClassName
        )}
      >
        {props.children}
      </div>
    </div>
  )
}
