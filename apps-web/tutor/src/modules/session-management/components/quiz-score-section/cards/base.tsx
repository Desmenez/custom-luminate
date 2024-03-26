import { ReactNode } from 'react'

import { faTrash } from '@fortawesome/pro-regular-svg-icons'
import { faFileSignature, faUser } from '@fortawesome/pro-solid-svg-icons'

import { LiveSessionQuizType } from '@luminate/database'
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
  FontAwesomeIcon,
  cn,
} from '@luminate/ui'

interface QuizScoreCardRootProps {
  children: React.ReactNode
  isHighlight?: boolean
}

const QuizScoreCardRoot: React.FC<QuizScoreCardRootProps> = ({ children, isHighlight }) => {
  return (
    <section
      className={cn(
        'flex flex-col gap-6 rounded-2xl outline outline-1 outline-gray-700 bg-gray-800 p-6 lg:gap-6 transition-all duration-300',
        isHighlight && 'outline-primary outline-2'
      )}
    >
      {children}
    </section>
  )
}

const QuizScoreCardTotalStudent: React.FC<{ totalStudent: number; className?: string }> = ({
  totalStudent,
  className,
}) => {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <FontAwesomeIcon icon={faUser} className="h-4 w-4 lg:h-5 lg:w-5" />
      <p className="text-sm lg:text-base">ทั้งหมด {totalStudent} คน</p>
    </div>
  )
}

interface QuizScoreCardHeaderProps {
  title: string
  type: LiveSessionQuizType
  totalStudent: number
  onDelete?: () => void
}

const QuizScoreCardHeader: React.FC<QuizScoreCardHeaderProps> = ({
  title,
  type,
  totalStudent,
  onDelete,
}) => {
  const typeString = type === LiveSessionQuizType.CHOICE ? 'Multiple Choices' : 'Short Answer'

  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
      <div className="flex items-center gap-2 lg:gap-4">
        <FontAwesomeIcon icon={faFileSignature} className="h-6 w-6 text-primary lg:h-8 lg:w-8" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="font-normal text-gray-400">{typeString}</span>
        {onDelete && (
          <Dialog>
            <DialogTrigger asChild>
              <div className="w-8 h-8 p-1.5 flex items-center justify-center rounded-full transition-colors hover:bg-red-100/10 cursor-pointer">
                <FontAwesomeIcon icon={faTrash} className="h-full w-full text-red-500" />
              </div>
            </DialogTrigger>
            <DialogContent>
              <div className="flex items-center gap-4 flex-col w-fit mx-auto">
                <FontAwesomeIcon icon={faTrash} className="w-12 h-12 text-red-500" />
                <div className="font-semibold text-lg">คุณแน่ใจหรือไม่ที่จะลบคำถามนี้ ?</div>
                <div className="flex items-center gap-4 w-full">
                  <DialogClose asChild>
                    <Button variant="outline" className="w-full">
                      ยกเลิก
                    </Button>
                  </DialogClose>
                  <Button variant="destructive" onClick={onDelete} className="w-full">
                    ลบ
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
      <QuizScoreCardTotalStudent totalStudent={totalStudent} className="mx-auto lg:mx-0 lg:gap-4" />
    </div>
  )
}

interface QuizScoreCardContentProps {
  children: ReactNode
}

const QuizScoreCardContent: React.FC<QuizScoreCardContentProps> = ({ children }) => {
  return (
    <div className={'flex items-center justify-center flex-wrap gap-6 lg:px-12 relative'}>
      {children}
    </div>
  )
}

interface QuizScoreCardFooterProps {
  children?: ReactNode
}

const QuizScoreCardFooter: React.FC<QuizScoreCardFooterProps> = ({ children }) => {
  if (!children) return null

  return <div className="flex items-center justify-center gap-4 flex-1">{children}</div>
}

export const QuizScoreCardBase = {
  Root: QuizScoreCardRoot,
  Header: QuizScoreCardHeader,
  Content: QuizScoreCardContent,
  Footer: QuizScoreCardFooter,
  TotalStudent: QuizScoreCardTotalStudent,
}
