import { useCallback } from 'react'

import { faChevronRight } from '@fortawesome/pro-regular-svg-icons'
import { faChevronLeft } from '@fortawesome/pro-solid-svg-icons'
import { endOfDay, format } from 'date-fns'

import { FontAwesomeIcon, Separator } from '@luminate/ui'

import { PeriodType } from '../../types/period'
import {
  PeriodPagination,
  PeriodPaginationItem,
  PeriodPaginationNext,
  PeriodPaginationPrevious,
} from '../period-pagination'
import { StatsBlock } from '../stats-block'
import { Tabs, TabsList, TabsTrigger } from '../tabs'

interface AreaGraphHeaderProps {
  endDate: Date
  onEndDateChange: (endDate: Date) => void
  periodType: PeriodType
  onPeriodTypeChange: (value: PeriodType) => void
  newStudentsIncreasePercent: number
  totalStudents: number
}

export const AreaGraphHeader: React.FC<AreaGraphHeaderProps> = ({
  endDate,
  onEndDateChange,
  periodType,
  onPeriodTypeChange,
  newStudentsIncreasePercent,
  totalStudents,
}) => {
  const formatDate = (date: Date) => {
    if (endOfDay(date).getTime() === endOfDay(new Date()).getTime()) return 'วันนี้'
    return format(date, 'dd/MM/yyyy')
  }

  const createPagination = useCallback(
    ({ className }: { className: string }) => {
      return (
        <PeriodPagination
          periodDay={parseInt(periodType)}
          endDate={endDate}
          onEndDateChange={onEndDateChange}
          className={className}
        >
          <PeriodPaginationPrevious>
            <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
          </PeriodPaginationPrevious>
          <PeriodPaginationItem>
            {({ startDate, endDate }) => (
              <span className="w-[200px] text-center">
                {formatDate(startDate)} - {formatDate(endDate)}
              </span>
            )}
          </PeriodPaginationItem>

          <PeriodPaginationNext>
            <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
          </PeriodPaginationNext>
        </PeriodPagination>
      )
    },
    [endDate, onEndDateChange, periodType]
  )

  return (
    <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
      {/* Left-hand side */}
      <div className="flex flex-col gap-2">
        {createPagination({ className: 'flex xl:hidden' })}
        <h2 className="font-semibold text-xl hidden xl:block">สรุปภาพรวมนักเรียนที่สมัคร</h2>
        <div className="flex items-center gap-4">
          <Tabs
            defaultValue={PeriodType.MONTH}
            value={periodType}
            onValueChange={(value) => onPeriodTypeChange(value as PeriodType)}
          >
            <TabsList>
              <TabsTrigger value={PeriodType.DAY}>{PeriodType.DAY} วัน</TabsTrigger>
              <TabsTrigger value={PeriodType.WEEK}>{PeriodType.WEEK} วัน</TabsTrigger>
              <TabsTrigger value={PeriodType.MONTH}>{PeriodType.MONTH} วัน</TabsTrigger>
            </TabsList>
          </Tabs>
          {createPagination({ className: 'hidden xl:flex' })}
        </div>
      </div>
      {/* Center  */}
      <Separator className="block xl:hidden" />
      {/* Right-hand side */}
      <StatsBlock
        newStudentsIncreasePercent={newStudentsIncreasePercent}
        totalStudents={totalStudents}
        periodType={periodType}
      />
    </div>
  )
}
