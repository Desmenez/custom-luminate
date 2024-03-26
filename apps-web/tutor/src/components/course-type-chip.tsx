import {
  IconDefinition,
  faFilm,
  faPersonChalkboard,
  faSignalStream,
} from '@fortawesome/pro-regular-svg-icons'
import {
  faFilm as faFilmSolid,
  faPersonChalkboard as faPersonChalkboardSolid,
  faSignalStream as faSignalStreamSolid,
} from '@fortawesome/pro-solid-svg-icons'
import { cva } from 'class-variance-authority'

import { LiveCourseType } from '@luminate/database'
import { cn } from '@luminate/ui'
import { FontAwesomeIcon } from '@luminate/ui'

export const courseTypeIcon: Record<LiveCourseType, IconDefinition> = {
  [LiveCourseType.LIVE]: faSignalStream,
  [LiveCourseType.FUSION]: faPersonChalkboard,
  [LiveCourseType.TAPE]: faFilm,
  [LiveCourseType.ONSITE]: faPersonChalkboard,
}

export const courseTypeIconSolid: Record<LiveCourseType, IconDefinition> = {
  [LiveCourseType.LIVE]: faSignalStreamSolid,
  [LiveCourseType.FUSION]: faPersonChalkboardSolid,
  [LiveCourseType.TAPE]: faFilmSolid,
  [LiveCourseType.ONSITE]: faPersonChalkboardSolid,
}

export const courseTypeText: Record<LiveCourseType, string> = {
  [LiveCourseType.LIVE]: 'Live',
  [LiveCourseType.FUSION]: 'Fusion',
  [LiveCourseType.TAPE]: 'Online',
  [LiveCourseType.ONSITE]: 'On-site',
}

export interface CourseTypeChipProps {
  type: LiveCourseType
  className?: string
}

const chipStyles = cva('inline-block flex gap-1 px-1 py-0.5 rounded-md h-fit w-fit', {
  variants: {
    type: {
      [LiveCourseType.LIVE]: 'bg-red-900 text-red-200',
      [LiveCourseType.FUSION]: 'bg-yellow-900 text-yellow-200',
      [LiveCourseType.TAPE]: 'bg-purple-900 text-purple-200',
      [LiveCourseType.ONSITE]: 'bg-green-900 text-green-200',
    },
  },
})

export function CourseTypeChip(props: CourseTypeChipProps) {
  return (
    <div className={cn(chipStyles({ type: props.type }), props.className)}>
      <span className="px-0.5 py-[3px]">
        <FontAwesomeIcon icon={courseTypeIcon[props.type]} className="w-3 h-3" />
      </span>
      <span className="font-sans font-semibold text-xs leading-normal translate-y-[-0.5px]">
        {courseTypeText[props.type]}
      </span>
    </div>
  )
}
