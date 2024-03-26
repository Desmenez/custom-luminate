import { faPlus } from '@fortawesome/pro-regular-svg-icons'
import 'keen-slider/keen-slider.min.css'
import NextLink from 'next/link'

import { Button, FontAwesomeIcon, cn } from '@luminate/ui'

interface EmptyCourseCardProps {
  className?: string
}

export const EmptyCourseCard = ({ className }: EmptyCourseCardProps) => {
  return (
    <NextLink
      href="/browse"
      className={cn(
        'w-[220px] h-[296px] flex flex-col p-4 rounded-lg bg-gray-900 border border-dashed hover:bg-gray-800 transition-colors group hover:border-primary-hover active:border-primary-active',
        className
      )}
    >
      <div className="flex-1 flex flex-col items-center justify-center gap-2 text-gray-700">
        <FontAwesomeIcon icon={faPlus} className="w-10 h-10" />
        <span>ยังไม่มีคอร์สเรียน</span>
      </div>
      <Button
        variant="outline"
        className="group-hover:text-primary-hover group-hover:border-primary-hover group-active:text-primary-active group-active:border-primary-active"
      >
        เลือกคอร์สเลย
      </Button>
    </NextLink>
  )
}
