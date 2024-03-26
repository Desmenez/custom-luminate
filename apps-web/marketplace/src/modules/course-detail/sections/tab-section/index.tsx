import { RefObject, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'

import { useLatestFunction } from '@luminate/react-hooks/src/use-latest-function'
import { screens } from '@luminate/tailwindcss'
import { Tab, cn } from '@luminate/ui'

interface TabItem {
  title: string
  refs: RefObject<HTMLElement>[]
}

export interface TabSectionProps {
  tabs: TabItem[]
}

export interface TabSectionRef {
  scrollTo: (elem: HTMLElement) => void
}

const lgBreakpoint = parseInt(screens.data.lg.slice(0, -2))

export const TabSection = forwardRef<TabSectionRef, TabSectionProps>(function TabSection(
  { tabs },
  ref
) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isStuck, setIsStuck] = useState(false)
  const [topOffset, setTopOffset] = useState(0)
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    function update() {
      if (!containerRef.current) return
      const navbarHeightVar = getComputedStyle(document.documentElement).getPropertyValue(
        '--navbar'
      )
      const navbarHeight = navbarHeightVar.endsWith('px')
        ? parseInt(navbarHeightVar.slice(0, -2))
        : 64
      const tabsHeight = containerRef.current.clientHeight
      const gap = window.innerWidth < lgBreakpoint ? 8 : 24
      const topOffset = navbarHeight + tabsHeight + gap

      const { top: selfTop } = containerRef.current.getBoundingClientRect()
      setIsStuck(selfTop <= navbarHeight)

      const activeIndex = Math.max(
        tabs.findLastIndex((tab) => {
          const ref = tab.refs.find((ref) => ref.current !== null)
          if (!ref?.current) return false
          const { top } = ref.current.getBoundingClientRect()
          return top <= topOffset + 16
        }),
        0
      )
      setTopOffset(topOffset)
      setActiveIndex(activeIndex)
    }
    update()
    window.addEventListener('scroll', update)
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  const scrollTo = useLatestFunction((elem: HTMLElement) => {
    const { top } = elem.getBoundingClientRect()
    window.scrollTo({ top: window.scrollY + top - topOffset, behavior: 'smooth' })
  })

  useImperativeHandle(ref, () => ({ scrollTo }))

  return (
    <div
      ref={containerRef}
      className={cn(
        'w-full bg-gray-950/80 backdrop-blur-md max-lg:order-first sticky z-[1] lg:mt-6 top-[var(--navbar)] transition-colors',
        'group lg:not-stuck:bg-transparent'
      )}
      data-stuck={isStuck}
    >
      <Tab.List className="container max-sm:px-2">
        {tabs.map((tab, index) => (
          <Tab.Button
            key={tab.title}
            className={cn(
              !isStuck && 'lg:hover:bg-black/30 lg:rounded-lg lg:rdx-state-active:rounded-b-none'
            )}
            data-state={index === activeIndex ? 'active' : 'inactive'}
            onClick={() => {
              const ref = tab.refs.find((ref) => ref.current !== null)
              if (!ref?.current) return
              scrollTo(ref.current)
            }}
          >
            {tab.title}
          </Tab.Button>
        ))}
      </Tab.List>
    </div>
  )
})
