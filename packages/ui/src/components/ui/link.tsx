import { ComponentProps, forwardRef } from 'react'

import NextLink from 'next/link'

import { cn } from '../../lib/utils'

type NextLinkProps = ComponentProps<typeof NextLink>

export const Link = forwardRef<HTMLAnchorElement, NextLinkProps>(function Link(props, ref) {
  return (
    <NextLink
      className={cn(
        'text-blue-600 hover:text-blue-400 hover:underline transition-colors',
        props.className
      )}
      ref={ref}
      {...props}
    />
  )
})
