import { CourseTypeChip } from '@app/components/course-type-chip'
import { formatAsDate } from '@app/utils/format-as-date'
import { faArrowRight, faArrowUp } from '@fortawesome/pro-solid-svg-icons'
import { ColumnDef } from '@tanstack/react-table'
import NextLink from 'next/link'

import { LiveCourseType } from '@luminate/database'
import { TutorCourseForTable } from '@luminate/rest'
import { FontAwesomeIcon } from '@luminate/ui'

const ActiveBadge = ({ isActive }: { isActive: boolean }) => (
  <span
    data-active={isActive}
    className="inline-flex items-center px-1.5 py-[3px] h-6 w-[72px] justify-center  rounded-full text-xs font-semibold data-[active=true]:bg-yellow-400/30 data-[active=true]:text-yellow-400 data-[active=false]:bg-gray-400/30 data-[active=false]:text-gray-400"
  >
    {isActive ? 'Active' : 'Inactive'}
  </span>
)

export const DailyChangePercent = ({ dailyChangePercent }: { dailyChangePercent: number }) => {
  if (dailyChangePercent === 0) return <div className="mr-6">-</div>
  return (
    <div className="inline-flex text-green-400 gap-x-1 items-center">
      <span>{`${dailyChangePercent.toFixed(1)}%`}</span>
      <FontAwesomeIcon icon={faArrowUp} className="w-4 h-4" />
    </div>
  )
}

export const columns: ColumnDef<TutorCourseForTable>[] = [
  {
    accessorKey: 'isActive',
    header: 'สถานะ',
    cell: ({ row }) => {
      const isActive = Boolean(row.getValue('isActive'))
      return <ActiveBadge isActive={isActive} />
    },
  },
  {
    accessorKey: 'name',
    header: 'ชื่อคอร์ส',
  },
  {
    accessorKey: 'type',
    header: 'ประเภท',
    cell: ({ row }) => {
      const type = row.getValue<LiveCourseType>('type')
      return <CourseTypeChip type={type} />
    },
  },
  {
    header: 'วันที่สร้าง',
    accessorFn: ({ createdAt }) => formatAsDate(createdAt),
  },
  {
    id: 'duration',
    accessorFn: ({ startDate, endDate }) => `${formatAsDate(startDate)} - ${formatAsDate(endDate)}`,
    header: 'ระยะเวลาเรียน',
  },
  {
    accessorKey: 'enrolled',
    header: 'นักเรียนทั้งหมด',
  },
  {
    accessorKey: 'dailyChangePercent',
    header: 'เปลี่ยนแปลง',
    cell: ({ row }) => {
      const dailyChangePercent = row.getValue<number>('dailyChangePercent')
      return <DailyChangePercent dailyChangePercent={dailyChangePercent} />
    },
  },
  {
    accessorKey: 'id',
    header: '',
    cell: ({ row }) => {
      const id = row.getValue<string>('id')
      return (
        <NextLink href={`/course/${id}`} className="inline-flex gap-x-2 px-2 items-center ml-auto">
          <div className="bg-gray-600 self-stretch w-px" />
          <div>ไปที่คอร์ส</div>
          <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 text-yellow-400" />
        </NextLink>
      )
    },
  },
]
