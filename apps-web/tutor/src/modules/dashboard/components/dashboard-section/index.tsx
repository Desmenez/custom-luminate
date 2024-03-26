import { ReactNode } from 'react'

import { cn } from '@luminate/ui'

interface DashboardSectionProps {
  className?: string
  children?: ReactNode
}

const DashboardSectionRoot: React.FC<DashboardSectionProps> = (props) => {
  return (
    <section className={cn('px-2 flex-1 lg:container', props.className)}>{props.children}</section>
  )
}

const DashboardSectionHeader: React.FC<DashboardSectionProps> = (props) => {
  return (
    <h2
      className={cn('font-semibold text-base bg-gray-950 rounded-t-lg px-4 py-2', props.className)}
    >
      {props.children}
    </h2>
  )
}

const DashboardSectionContent: React.FC<DashboardSectionProps> = (props) => {
  return <div className={cn('bg-gray-900', props.className)}>{props.children}</div>
}

export const DashboardSection = {
  Root: DashboardSectionRoot,
  Header: DashboardSectionHeader,
  Content: DashboardSectionContent,
}
