// https://github.com/radix-ui/primitives/discussions/831
import {
  ElementRef,
  ReactNode,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useMemo,
} from 'react'

import { cn } from '../../lib/utils'
import { Button, ButtonProps } from '../ui/button'

interface PaginationContextValue {
  currentPage: number
  totalPages: number
  handleNextClick: () => void
  handlePreviousClick: () => void
  setPage: (page: number) => void
  isFirstPage: boolean
  isLastPage: boolean
}

const PaginationContext = createContext({} as PaginationContextValue)
const usePaginationContext = () => useContext(PaginationContext)

interface PaginationProps {
  value: number
  children: ReactNode
  totalPages: number
  className?: string
  onChange?: (page: number) => void
}

const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  ({ value: currentPage, children, className, totalPages, onChange: onPageChanged }, ref) => {
    const isFirstPage = currentPage === 1
    const isLastPage = currentPage === totalPages

    const setPage = useCallback(
      (page: number) => {
        onPageChanged?.(page)
      },
      [onPageChanged]
    )

    const handleNextClick = useCallback(() => {
      const toBePage = currentPage < totalPages ? currentPage + 1 : currentPage
      setPage(toBePage)
    }, [currentPage, setPage, totalPages])

    const handlePreviousClick = useCallback(() => {
      const toBePage = currentPage > 1 ? currentPage - 1 : currentPage
      setPage(toBePage)
    }, [currentPage, setPage])

    const value: PaginationContextValue = {
      currentPage,
      totalPages,
      handleNextClick,
      handlePreviousClick,
      setPage,
      isFirstPage,
      isLastPage,
    }

    return (
      <PaginationContext.Provider value={value}>
        <div ref={ref} className={cn('flex flex-row gap-2 items-center', className)}>
          {children}
        </div>
      </PaginationContext.Provider>
    )
  }
)
Pagination.displayName = 'Pagination'

interface PaginationPreviousProps {
  children: ReactNode
  className?: string
}

const PaginationPrevious = forwardRef<ElementRef<typeof Button>, PaginationPreviousProps>(
  ({ children, className }, ref) => {
    const { handlePreviousClick, isFirstPage } = usePaginationContext()
    return (
      <Button
        ref={ref}
        variant="ghost"
        onClick={handlePreviousClick}
        disabled={isFirstPage}
        className={cn('p-0 aspect-1 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12', className)}
      >
        {children}
      </Button>
    )
  }
)
PaginationPrevious.displayName = 'PaginationPrevious'

interface PaginationNextProps {
  children: ReactNode
  className?: string
}

const PaginationNext = forwardRef<ElementRef<typeof Button>, PaginationNextProps>(
  ({ children, className }, ref) => {
    const { handleNextClick, isLastPage } = usePaginationContext()
    return (
      <Button
        ref={ref}
        variant="ghost"
        onClick={handleNextClick}
        disabled={isLastPage}
        className={cn('p-0 aspect-1 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12', className)}
      >
        {children}
      </Button>
    )
  }
)
PaginationNext.displayName = 'PaginationNext'

interface PaginationListProps {
  maxButton?: number
  className?: string
}

const PaginationList = forwardRef<HTMLDivElement, PaginationListProps>(
  ({ maxButton = 7, className }, ref) => {
    if (maxButton < 5) throw new Error('maxButton must be greater than or equal to 5')

    const { currentPage, totalPages, setPage } = usePaginationContext()

    const { buttonPropsList } = useMemo(() => {
      const showMarking: Record<number, { dot: boolean }> = {}

      // Finding what buttons to show on screen based on the current page
      for (let i = 0; i < maxButton * 2; i++) {
        const direction = (-1) ** i
        const page = currentPage - Math.ceil(i / 2) * direction
        if (page > 0 && page <= totalPages) showMarking[page] = { dot: false }
        if (Object.keys(showMarking).length === maxButton) break
      }

      // Adding dots to the marking
      const keys = Object.keys(showMarking).map((key) => Number(key))

      // If the 1 button is not shown, add it to the marking
      if (keys[0] >= 2) {
        delete showMarking[keys[0] as number]
        delete showMarking[keys[1] as number]
        showMarking[1] = { dot: false }
        showMarking[2] = { dot: true }
      }

      // If the last button is not shown, add it to the marking
      if (keys[keys.length - 1] <= totalPages - 1) {
        delete showMarking[keys[keys.length - 1] as number]
        delete showMarking[keys[keys.length - 2] as number]
        showMarking[totalPages - 1] = { dot: true }
        showMarking[totalPages] = { dot: false }
      }

      // Creating button props list
      const buttonPropsList: PaginationButtonProps[] = Object.entries(showMarking).map(
        ([key, value]) => {
          const page = Number(key)
          return {
            key: page,
            children: value.dot ? '...' : page,
            active: page === currentPage,
            onClick: () => setPage(page),
            disabled: value.dot,
          }
        }
      )

      return { buttonPropsList }
    }, [currentPage, maxButton, setPage, totalPages])

    return (
      <div ref={ref} className={cn('flex gap-1 items-center font-normal', className)}>
        {buttonPropsList.map((buttonProps, index) => {
          return <PaginationButton key={index} {...buttonProps} />
        })}
      </div>
    )
  }
)
PaginationList.displayName = 'PaginationList'

interface PaginationButtonProps extends ButtonProps {
  show?: boolean
  active?: boolean
}

const PaginationButton: React.FC<PaginationButtonProps> = ({
  show,
  active,
  className,
  ...props
}) => {
  if (show) return null

  return (
    <Button
      variant={active ? 'default' : 'ghost'}
      className={cn(
        'font-semibold transition-none aspect-1 text-base',
        'w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12',
        !active && 'font-normal text-gray-500',
        className
      )}
      {...props}
    />
  )
}

export { Pagination, PaginationPrevious, PaginationList, PaginationNext }
