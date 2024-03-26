import { useState } from 'react'

import { reactQueryClient } from '@app/core/services'
import { columns } from '@app/modules/dashboard/components/course-table/columns'
import { CourseTable } from '@app/modules/dashboard/components/course-table/course-table'
import { CourseTableMobile } from '@app/modules/dashboard/components/course-table/course-table-mobile'
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-solid-svg-icons'

import { CustomNextPage } from '@luminate/nextjs'
import {
  FontAwesomeIcon,
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
} from '@luminate/ui'

const CourseTableSection = () => {
  const PAGE_SIZE = 10
  const [currentPage, setCurrentPage] = useState(1)
  const take = PAGE_SIZE
  const skip = (currentPage - 1) * PAGE_SIZE
  const results = reactQueryClient.liveCourse.getTutorCourses.useQuery(
    { query: { take, skip } },
    { refetchOnWindowFocus: false, keepPreviousData: true }
  )
  const onPageChanged = (page: number) => setCurrentPage(page)
  const totalPages = Math.ceil((results.data?.body.total ?? 0) / PAGE_SIZE)

  if (!results.data) {
    return null
  }

  return (
    <section className="flex flex-col rounded-sm gap-y-1 lg:gap-y-4 bg-transparent lg:bg-gray-900 lg:p-6">
      <div className="lg:text-xl font-semibold px-4 py-2 lg:p-0">คอร์สทั้งหมด</div>
      <div className="flex flex-col gap-y-4 max-lg:p-2 items-center bg-gray-900 rounded-sm">
        <div className="max-lg:hidden w-full overflow-auto">
          <CourseTable columns={columns} data={results.data.body.courses} />
        </div>
        <CourseTableMobile className="lg:hidden" courses={results.data.body.courses} />
        {totalPages > 1 && (
          <Pagination
            value={currentPage}
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

const CourseTablePage: CustomNextPage = () => {
  return (
    <div className="p-2 lg:p-4">
      <CourseTableSection />
    </div>
  )
}

export default CourseTablePage
