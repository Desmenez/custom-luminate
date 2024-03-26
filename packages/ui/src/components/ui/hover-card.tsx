import { PropsWithChildren, createContext, forwardRef, useContext, useState } from 'react'

import {
  FloatingPortal,
  offset,
  safePolygon,
  shift,
  useFloating,
  useHover,
  useInteractions,
  useTransitionStatus,
} from '@floating-ui/react'
import { Slot } from '@radix-ui/react-slot'

import { cn } from '../../lib/utils'

/*
 * this component is not shadcn or radix hover card
 * this is a custom hover card which expand content from the center
 */

const centerOffset = offset(({ rects }) => {
  return -rects.reference.height / 2 - rects.floating.height / 2
})

interface HoverCardContextValue {
  triggerProps: Record<string, unknown>
  contentProps: Record<string, unknown>
  isMounted: boolean
}
const HoverCardContext = createContext({} as HoverCardContextValue)
const useHoverCardContext = () => useContext(HoverCardContext)

const HoverCardRoot = ({
  children,
  hover: hoverEnabled = true,
}: PropsWithChildren<{ hover?: boolean }>) => {
  const [isOpen, setIsOpen] = useState(false)

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    transform: false,
    middleware: [centerOffset, shift()],
    placement: 'bottom',
  })

  const hover = useHover(context, {
    enabled: hoverEnabled,
    mouseOnly: true,
    delay: { open: 500, close: 0 },
    restMs: 500,
    move: false,
    handleClose: safePolygon({ buffer: -Infinity }),
  })

  const { getReferenceProps, getFloatingProps } = useInteractions([hover])
  const { isMounted, status } = useTransitionStatus(context, { duration: 300 })
  const triggerProps = {
    ref: refs.setReference,
    ...getReferenceProps(),
  }
  const contentProps = {
    ref: refs.setFloating,
    style: floatingStyles,
    'data-state': status,
    ...getFloatingProps(),
  }
  return (
    <HoverCardContext.Provider value={{ triggerProps, contentProps, isMounted }}>
      {children}
    </HoverCardContext.Provider>
  )
}

const HoverCardTrigger = forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof Slot> & { asChild?: boolean }
>(({ asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : 'div'
  const { triggerProps } = useHoverCardContext()
  return <Comp ref={ref} {...triggerProps} {...props} />
})

const HoverCardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  const { contentProps, isMounted } = useHoverCardContext()
  return (
    isMounted && (
      <FloatingPortal>
        <div
          className={cn(
            'w-[350px] bg-gray-900 shadow-2xl rounded-lg flex flex-col z-30',
            'data-[state=initial]:animate-in data-[state=open]:animate-in data-[state=close]:animate-out',
            'data-[state=initial]:fade-in-0 data-[state=open]:fade-in-0 data-[state=close]:fade-out-0',
            'data-[state=initial]:zoom-in-75 data-[state=open]:zoom-in-75 data-[state=close]:zoom-out-75',
            'origin-center fill-mode-both',
            className
          )}
          {...contentProps}
          {...props}
        />
      </FloatingPortal>
    )
  )
}

export { HoverCardRoot, HoverCardTrigger, HoverCardContent }
