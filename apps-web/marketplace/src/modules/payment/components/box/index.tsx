import { PropsWithChildren, ReactNode } from 'react'

import { cn } from '@luminate/ui'

interface BoxBasicProps {
  className?: string
}

const BoxRoot = (props: PropsWithChildren<BoxBasicProps>) => {
  return (
    <div className={cn('rounded-lg overflow-hidden bg-gray-900 shadow-lg', props.className)}>
      {props.children}
    </div>
  )
}

const BoxHeader = (props: PropsWithChildren<BoxBasicProps & { right?: ReactNode }>) => {
  return (
    <div
      className={cn(
        'bg-gray-950 py-2 px-4 font-semibold text-xl flex items-center justify-between',
        props.className
      )}
    >
      {props.children}
      {props.right}
    </div>
  )
}

const BoxContent = (props: PropsWithChildren<BoxBasicProps>) => {
  return <div className={cn('p-4', props.className)}>{props.children}</div>
}

export const Box = {
  Root: BoxRoot,
  Header: BoxHeader,
  Content: BoxContent,
}
