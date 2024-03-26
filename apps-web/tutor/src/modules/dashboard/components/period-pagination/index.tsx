import {
  ElementRef,
  ReactNode,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useMemo,
} from 'react'

import { addDays, endOfDay, subDays } from 'date-fns'

import { Button, cn } from '@luminate/ui'

interface PeriodPaginationContextValue {
  startDate: Date
  endDate: Date
  isLastPage?: boolean
  handleNextClick: () => void
  handlePreviousClick: () => void
  setEndDate: (endDate: Date) => void
}

const PeriodPaginationContext = createContext({} as PeriodPaginationContextValue)
const usePeriodPaginationContext = () => useContext(PeriodPaginationContext)

interface PeriodPaginationProps {
  periodDay: number
  endDate: Date
  children: ReactNode
  className?: string
  onEndDateChange?: (endDate: Date) => void
}

const PeriodPagination = forwardRef<HTMLDivElement, PeriodPaginationProps>(
  ({ periodDay, endDate, children, className, onEndDateChange }, ref) => {
    const startDate = useMemo(() => subDays(endDate, periodDay), [endDate, periodDay])

    const isLastPage = useMemo(
      () => endOfDay(endDate).getTime() >= endOfDay(new Date()).getTime(),
      [endDate]
    )

    const setEndDate = useCallback(
      (endDate: Date) => {
        onEndDateChange?.(endDate)
      },
      [onEndDateChange]
    )

    const handleNextClick = useCallback(() => {
      if (isLastPage) return
      const newEndDate = addDays(endDate, periodDay)
      if (endOfDay(newEndDate) > endOfDay(new Date())) {
        setEndDate(endOfDay(new Date()))
      } else {
        setEndDate(newEndDate)
      }
    }, [endDate, isLastPage, periodDay, setEndDate])

    const handlePreviousClick = useCallback(() => {
      const newEndDate = subDays(endDate, periodDay)
      setEndDate(newEndDate)
    }, [endDate, periodDay, setEndDate])

    const value: PeriodPaginationContextValue = {
      startDate,
      endDate,
      handleNextClick,
      handlePreviousClick,
      setEndDate,
      isLastPage,
    }

    return (
      <PeriodPaginationContext.Provider value={value}>
        <div ref={ref} className={cn('flex flex-row gap-2 items-center justify-center', className)}>
          {children}
        </div>
      </PeriodPaginationContext.Provider>
    )
  }
)
PeriodPagination.displayName = 'PeriodPagination'

interface PeriodPaginationPreviousProps {
  children: ReactNode
  className?: string
}

const PeriodPaginationPrevious = forwardRef<
  ElementRef<typeof Button>,
  PeriodPaginationPreviousProps
>(({ children, className }, ref) => {
  const { handlePreviousClick } = usePeriodPaginationContext()
  return (
    <Button
      ref={ref}
      variant="ghost"
      onClick={handlePreviousClick}
      className={cn('p-0 aspect-1 text-white', className)}
    >
      {children}
    </Button>
  )
})
PeriodPaginationPrevious.displayName = 'PeriodPaginationPrevious'

interface PeriodPaginationNextProps {
  children: ReactNode
  className?: string
}

const PeriodPaginationNext = forwardRef<ElementRef<typeof Button>, PeriodPaginationNextProps>(
  ({ children, className }, ref) => {
    const { handleNextClick, isLastPage } = usePeriodPaginationContext()
    return (
      <Button
        ref={ref}
        variant="ghost"
        onClick={handleNextClick}
        className={cn('p-0 aspect-1 text-white', className)}
        disabled={isLastPage}
      >
        {children}
      </Button>
    )
  }
)
PeriodPaginationNext.displayName = 'PeriodPaginationNext'

interface PeriodPaginationItemProps {
  children: (props: { startDate: Date; endDate: Date }) => ReactNode
}

const PeriodPaginationItem: React.FC<PeriodPaginationItemProps> = ({ children }) => {
  const { startDate, endDate } = usePeriodPaginationContext()
  return children({ startDate, endDate })
}
PeriodPaginationItem.displayName = 'PeriodPaginationItem'

export { PeriodPagination, PeriodPaginationPrevious, PeriodPaginationItem, PeriodPaginationNext }
