import { useState } from 'react'

import { faChevronLeft, faChevronRight } from '@fortawesome/pro-regular-svg-icons'

import {
  FontAwesomeIcon,
  Pagination,
  PaginationList,
  PaginationNext,
  PaginationPrevious,
} from '@luminate/ui'

const PaginationPlaygroundPage = () => {
  const [value, setValue] = useState(1)
  return (
    <Pagination totalPages={20} value={value} onChange={setValue}>
      <PaginationPrevious>
        <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" />
      </PaginationPrevious>
      <PaginationList maxButton={7} />
      <PaginationNext>
        <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" />
      </PaginationNext>
    </Pagination>
  )
}

export default PaginationPlaygroundPage
