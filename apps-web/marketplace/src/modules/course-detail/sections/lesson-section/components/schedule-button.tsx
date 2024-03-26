import { IconDefinition } from '@fortawesome/pro-regular-svg-icons'
import NextLink from 'next/link'

import { Button, ButtonProps, FontAwesomeIcon, cn } from '@luminate/ui'

interface ScheduleButtonProps extends ButtonProps {
  link: string
  icon: IconDefinition
  label: string
}

export const ScheduleButton = ({ link, label, ...props }: ScheduleButtonProps) => {
  return (
    <NextLink
      href={link}
      className={cn(props.disabled && 'pointer-events-none', 'w-full md:w-fit')}
    >
      <Button
        leftIcon={<FontAwesomeIcon icon={props.icon} className="w-4 h-4" />}
        fullWidth
        disabled={props.disabled}
        {...props}
      >
        {label}
      </Button>
    </NextLink>
  )
}
