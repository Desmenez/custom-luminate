import { faCheck } from '@fortawesome/pro-solid-svg-icons'

import { FontAwesomeIcon } from '@luminate/ui'

export const FreeTrialTag = () => {
  return (
    <div className="flex gap-1 h-4 items-center bg-green-950 pr-2 rounded-full ml-auto">
      <span className="h-4 w-4 flex items-center justify-center bg-green-500 rounded-full">
        <FontAwesomeIcon icon={faCheck} className="h-2 w-2" />
      </span>
      <span className="font-semibold text-[8px] leading-[12px] text-green-500">ทดลองเรียนฟรี</span>
    </div>
  )
}
