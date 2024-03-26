import { IconDefinition } from '@fortawesome/pro-regular-svg-icons'

import { FontAwesomeIcon } from '@luminate/ui'

export interface CourseTypeChipGrayProps {
  icon: IconDefinition
  text: string
}

export function CourseTypeChipGray(props: CourseTypeChipGrayProps) {
  return (
    <div
      className={'inline-flex items-center gap-1 px-1 py-0.5 rounded-md h-fit w-fit text-gray-500'}
    >
      <span className="px-0.5 py-[3px]">
        <FontAwesomeIcon icon={props.icon} className="w-5 h-5" />
      </span>
      <span className="font-sans font-semibold text-sm leading-normal translate-y-[-0.5px]">
        {props.text}
      </span>
    </div>
  )
}
