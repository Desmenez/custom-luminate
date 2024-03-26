import { useId, useState } from 'react'

import { reactQueryClient } from '@app/core/services'
import { faFloppyDisk } from '@fortawesome/pro-solid-svg-icons'

import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
  FontAwesomeIcon,
  toast,
} from '@luminate/ui'

export const EndAllQuizzesButton: React.FC<{ liveSessionId: string }> = ({ liveSessionId }) => {
  const [open, setOpen] = useState(false)

  const endAllQuizzesToastId = useId()

  const { mutateAsync, isLoading } = reactQueryClient.quiz.endAllQuiz.useMutation({
    onSettled: () => setOpen(false),
  })

  const onEndAllQuizzes = async () => {
    await toast.promise(
      mutateAsync({
        query: { liveSessionId },
      }),
      {
        error: 'เกิดข้อผิดพลาดในการจบการทดสอบ',
        loading: 'กำลังจบการทดสอบ...',
        success: 'จบการทดสอบสำเร็จ',
      },
      { id: endAllQuizzesToastId }
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          leftIcon={<FontAwesomeIcon icon={faFloppyDisk} className="w-4 h-4" />}
          variant="outline"
          fullWidth
          disabled={isLoading}
          className="whitespace-nowrap"
        >
          จบการทดสอบ
        </Button>
      </DialogTrigger>

      <DialogContent>
        <div className="flex items-center gap-4 flex-col w-fit mx-auto">
          <FontAwesomeIcon icon={faFloppyDisk} className="w-12 h-12" />
          <div className="flex flex-col gap-2">
            <div className="font-semibold text-lg text-center">คุณแน่ใจหรือไม่ที่ จบการทดสอบ?</div>
            <div className="text-sm text-gray-500 text-center">
              หากคุณทำการ “จบการทดสอบ” คนดูจะไม่สามารถตอบคำถาม และคุณจะไม่สามารถสร้างคำถามได้อีก
            </div>
          </div>
          <div className="flex items-center gap-4 w-full">
            <DialogClose asChild>
              <Button variant="outline" className="w-full" disabled={isLoading}>
                ยกเลิก
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button onClick={onEndAllQuizzes} className="w-full" disabled={isLoading}>
                จบการทดสอบ
              </Button>
            </DialogClose>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
