import { faChevronLeft, faChevronRight } from '@fortawesome/pro-solid-svg-icons'

import { useMediaQuery } from '@luminate/react-hooks'
import { GetTutorCoursesResponse } from '@luminate/rest'
import {
  FontAwesomeIcon,
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
} from '@luminate/ui'

import { columns } from './columns'
import { CourseTable } from './course-table'
import { CourseTableMobile } from './course-table-mobile'

interface ResponsiveCourseTable extends GetTutorCoursesResponse {
  page: number
  totalPages: number
  onPageChanged: (page: number) => void
}

export const ResponsiveCourseTable: React.FC<ResponsiveCourseTable> = ({
  courses,
  totalPages,
  page,
  onPageChanged,
}) => {
  const isLgUp = useMediaQuery('lg-up')

  return (
    <section className="flex flex-col rounded-sm gap-y-1 lg:gap-y-4 bg-transparent lg:bg-gray-900">
      <h2 className="lg:text-xl font-semibold lg:p-0 lg:block hidden">คอร์สทั้งหมด</h2>
      <div className="flex flex-col gap-y-4 max-lg:p-2 items-center bg-gray-900 rounded-sm">
        {isLgUp ? (
          <div className="max-lg:hidden w-full overflow-auto">
            <CourseTable columns={columns} data={courses} />
          </div>
        ) : (
          <CourseTableMobile className="lg:hidden" courses={courses} />
        )}

        {totalPages > 1 && (
          <Pagination
            value={page}
            totalPages={totalPages}
            className="lg:ml-auto"
            onChange={onPageChanged}
          >
            <PaginationPrevious>
              <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
            </PaginationPrevious>
            <PaginationList />
            <PaginationNext>
              <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
            </PaginationNext>
          </Pagination>
        )}
      </div>
    </section>
  )
}
