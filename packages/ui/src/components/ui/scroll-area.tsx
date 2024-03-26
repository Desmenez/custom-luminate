'use client'

import * as React from 'react'

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'

import { cn } from '../../lib/utils'

export interface ScrollAreaProps
  extends React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> {
  direction: 'vertical' | 'horizontal' | 'both'
  gradientFrom: string
}

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  ScrollAreaProps
>(({ className, children, direction, gradientFrom, ...props }, ref) => {
  const vertical = direction === 'vertical' || direction === 'both'
  const horizontal = direction === 'horizontal' || direction === 'both'
  const viewportRef = React.useRef<HTMLDivElement>(null)
  const topFadeRef = React.useRef<HTMLDivElement>(null)
  const bottomFadeRef = React.useRef<HTMLDivElement>(null)
  const leftFadeRef = React.useRef<HTMLDivElement>(null)
  const rightFadeRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    function handleScroll() {
      const viewport = viewportRef.current
      if (!viewport) return
      const topDistance = viewport.scrollTop
      const bottomDistance = viewport.scrollHeight - viewport.clientHeight - viewport.scrollTop
      const leftDistance = viewport.scrollLeft
      const rightDistance = viewport.scrollWidth - viewport.clientWidth - viewport.scrollLeft

      const topProgress = Math.min(topDistance / 65, 1)
      const bottomProgress = Math.min(bottomDistance / 65, 1)
      const leftProgress = Math.min(leftDistance / 65, 1)
      const rightProgress = Math.min(rightDistance / 65, 1)
      if (topFadeRef.current) {
        topFadeRef.current.style.transform = `scaleY(${topProgress})`
      }
      if (bottomFadeRef.current) {
        bottomFadeRef.current.style.transform = `scaleY(${bottomProgress})`
      }
      if (leftFadeRef.current) {
        leftFadeRef.current.style.transform = `scaleX(${leftProgress})`
      }
      if (rightFadeRef.current) {
        rightFadeRef.current.style.transform = `scaleX(${rightProgress})`
      }
    }
    handleScroll()
    viewportRef.current?.addEventListener('scroll', handleScroll)
    const resizeObserver = new ResizeObserver(handleScroll)
    resizeObserver.observe(viewportRef.current!)
    return () => {
      viewportRef.current?.removeEventListener('scroll', handleScroll)
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn('relative overflow-hidden', className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport ref={viewportRef} className="h-full w-full rounded-[inherit]">
        {children}
      </ScrollAreaPrimitive.Viewport>
      {vertical && (
        <>
          <div
            ref={topFadeRef}
            className={`absolute left-0 top-0 right-0 h-[65px] bg-gradient-to-b ${gradientFrom} pointer-events-none scale-y-0 origin-top`}
          />
          <div
            ref={bottomFadeRef}
            className={`absolute left-0 bottom-0 right-0 h-[65px] bg-gradient-to-t ${gradientFrom} pointer-events-none scale-y-0 origin-bottom`}
          />
        </>
      )}
      {horizontal && (
        <>
          <div
            ref={leftFadeRef}
            className={`absolute left-0 top-0 bottom-0 w-[65px] bg-gradient-to-r ${gradientFrom} pointer-events-none scale-x-0 origin-left`}
          />
          <div
            ref={rightFadeRef}
            className={`absolute right-0 top-0 bottom-0 w-[65px] bg-gradient-to-l ${gradientFrom} pointer-events-none scale-x-0 origin-right`}
          />
        </>
      )}
      {vertical && <ScrollBar orientation="vertical" />}
      {horizontal && <ScrollBar orientation="horizontal" />}
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
})
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
>(({ className, orientation = 'vertical', ...props }, ref) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      'flex touch-none select-none transition-colors',
      orientation === 'vertical' && 'flex-row h-full w-2.5 border-l border-l-transparent p-[1px]',
      orientation === 'horizontal' && 'flex-col h-2.5 w-full border-t border-t-transparent p-[1px]',
      className
    )}
    {...props}
  >
    <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName

export { ScrollArea, ScrollBar }
