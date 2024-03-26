import { IconDefinition } from '@fortawesome/pro-regular-svg-icons'

import { FontAwesomeIcon, cn } from '@luminate/ui'

interface BadgeProps {
  color?: 'yellow' | 'red'
  icon: IconDefinition
  label: string
}

export const Badge: React.FC<BadgeProps> = (props) => {
  return (
    <div
      className={cn(
        'flex gap-1 px-[10px] py-[1.5px] rounded-sm items-center',
        props.color === 'yellow' && 'text-yellow-400 bg-yellow-400/10',
        props.color === 'red' && 'text-red-600 bg-red-600/10'
      )}
    >
      {props.icon && <FontAwesomeIcon icon={props.icon} className="w-4 h-4" />}
      <div className="font-semibold text-sm hidden md:block whitespace-nowrap">{props.label}</div>
    </div>
  )
}
