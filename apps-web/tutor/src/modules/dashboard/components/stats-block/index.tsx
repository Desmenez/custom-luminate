import { faArrowDown } from '@fortawesome/pro-regular-svg-icons'
import { faArrowUp } from '@fortawesome/pro-solid-svg-icons'

import { ValuesType } from '@luminate/types-utility'
import { FontAwesomeIcon, cn } from '@luminate/ui'

import { PeriodType } from '../../types/period'

const Direction = {
  INCREASE: 'increase',
  DECREASE: 'decrease',
} as const

export type Direction = ValuesType<typeof Direction>

const iconMapping = {
  [Direction.INCREASE]: faArrowUp,
  [Direction.DECREASE]: faArrowDown,
} as const

interface StatsBlockProps {
  newStudentsIncreasePercent: number
  totalStudents: number
  periodType: PeriodType
}

export const StatsBlock: React.FC<StatsBlockProps> = ({
  newStudentsIncreasePercent,
  totalStudents,
  periodType,
}) => {
  const direction =
    Math.abs(newStudentsIncreasePercent) === newStudentsIncreasePercent
      ? Direction.INCREASE
      : Direction.DECREASE

  return (
    <div className="flex gap-6 items-center">
      {/* Percentage Block */}
      <div className="flex flex-col items-center">
        <div
          className={cn(
            'flex items-center',
            direction === 'increase' && 'text-green-400',
            direction === 'decrease' && 'text-red-500'
          )}
        >
          <FontAwesomeIcon icon={iconMapping[direction]} className="w-7 h-7 font-semibold" />
          <p className={cn('text-2xl lg:text-4xl font-semibold')}>
            {newStudentsIncreasePercent.toFixed(2)}%
          </p>
        </div>
        <div className="text-base text-gray-500 lg:text-white">{`เทียบกับ ${periodType} วันย้อนหลัง`}</div>
      </div>

      {/* Total Student Block */}
      <div>
        <p className="text-2xl lg:text-4xl font-semibold text-center">{totalStudents}</p>
        <p className="text-center text-base text-gray-500 lg:text-white">นักเรียนทั้งหมด</p>
      </div>
    </div>
  )
}
