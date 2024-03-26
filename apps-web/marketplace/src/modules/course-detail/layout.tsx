import { GradientBackground } from '@app/components/gradient-background'

import { cn } from '@luminate/ui'

export interface CourseDetailLayoutProps {
  className?: string
  top: React.ReactNode
  left: React.ReactNode
  right: React.ReactNode
  bottom: React.ReactNode
}

export function CourseDetailLayout(props: CourseDetailLayoutProps) {
  return (
    <div className="relative flex flex-col">
      <GradientBackground />
      {props.top}
      <div
        className={cn('container flex flex-row items-start gap-6 py-2 lg:py-6', props.className)}
      >
        <section className="w-full lg:w-0 lg:flex-1 flex flex-col gap-2 lg:gap-6">
          {props.left}
        </section>
        <section className="max-lg:hidden sticky top-[calc(24px+var(--navbar)+var(--course-detail-tab))] w-[300px] xl:w-[411px]">
          {props.right}
        </section>
      </div>
      {props.bottom}
    </div>
  )
}
