import { ComponentProps, ReactNode, forwardRef, useEffect, useRef, useState } from 'react'
import { mergeRefs } from 'react-merge-refs'

import { cn } from '../../lib/utils'

export interface TabListProps {
  className?: string
  children?: ReactNode | undefined
}

const TabList = forwardRef<HTMLDivElement, TabListProps>(function TabList(
  { className, children, ...props },
  ref
) {
  const containerRef = useRef<HTMLDivElement>(null)
  const indicatorRef = useRef<HTMLSpanElement>(null)
  const [activeTab, setActiveTab] = useState<HTMLElement | null>(null)

  function scrollToTab(tab: HTMLElement) {
    const container = containerRef.current
    if (!container) return

    const left = tab.offsetLeft - 8
    const right = tab.offsetLeft + tab.offsetWidth + 8

    const visibleLeft = container.scrollLeft
    const visibleRight = container.scrollLeft + container.offsetWidth

    if (left < visibleLeft) {
      container.scrollTo({ left, behavior: 'smooth' })
    } else if (right > visibleRight) {
      container.scrollTo({ left: right - container.offsetWidth, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    // detect active tab change
    const container = containerRef.current
    if (!container) return
    const observer = new MutationObserver(() => {
      const activeTab = container.querySelector('.tab-button[data-state="active"]')
      setActiveTab(activeTab as HTMLElement | null)
    })
    observer.observe(container, { attributes: true, subtree: true })
    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const indicator = indicatorRef.current
    if (activeTab === null || indicator === null) return

    // on active tab change, scroll to tab
    scrollToTab(activeTab)

    const updateIndicatorPosition = () => {
      const left = activeTab.offsetLeft
      const width = activeTab.offsetWidth

      indicator.style.transform = `translateX(${left}px)`
      indicator.style.width = `${width}px`
    }
    updateIndicatorPosition()

    requestAnimationFrame(() => {
      indicator.style.transition = 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
    })

    // then observe size changes
    const resizeObserver = new ResizeObserver(updateIndicatorPosition)
    resizeObserver.observe(activeTab)
    window.addEventListener('resize', updateIndicatorPosition)
    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateIndicatorPosition)
    }
  }, [activeTab])

  return (
    <div
      ref={mergeRefs([ref, containerRef])}
      className={cn('relative flex whitespace-nowrap overflow-x-scroll hide-scrollbar', className)}
      {...props}
    >
      {children}
      <div>
        <span
          ref={indicatorRef}
          className={
            'absolute left-0 bottom-0 w-0 h-0.5 bg-yellow-400' +
            (activeTab === null ? 'hidden' : '')
          }
        />
      </div>
    </div>
  )
})

const TabButton = forwardRef<HTMLButtonElement, ComponentProps<'button'>>(function TabButton(
  { children, className, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      className={cn(
        'tab-button relative p-4 lg:text-lg transition-colors',
        'text-yellow-400 hover:text-yellow-200 hover:bg-gray-900',
        'rdx-state-active:font-semibold rdx-state-active:text-gray-50 rdx-state-active:hover:text-yellow-50 rdx-state-active:hover:bg-gray-900',
        className
      )}
      {...props}
    >
      <span className="font-semibold invisible" aria-hidden>
        {children}
      </span>
      <span className="absolute inset-4 text-center transition-colors">{children}</span>
    </button>
  )
})

export const Tab = {
  List: TabList,
  Button: TabButton,
}
