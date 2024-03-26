import { useCallback, useId, useState } from 'react'
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'

import { reactQueryClient } from '@app/core/services'
import { faPuzzle } from '@fortawesome/pro-solid-svg-icons'

import { LiveSessionQuizType } from '@luminate/database'
import { CreateQuizInput } from '@luminate/rest'
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  FontAwesomeIcon,
  Separator,
  toast,
} from '@luminate/ui'

import { CreateQuizBoxForm } from '../form'
import { CreateQuizSchema } from '../schema'

interface CreateQuizSectionProps {
  liveSessionId: string
  numberOfQuizzes: number
}

export const CreateQuizButton: React.FC<CreateQuizSectionProps> = ({
  liveSessionId,
  numberOfQuizzes,
}) => {
  const [open, setOpen] = useState(false)
  const { mutateAsync: createQuizMutation } = reactQueryClient.quiz.createQuiz.useMutation()

  const createQuizToastId = useId()

  const onSubmit: SubmitHandler<CreateQuizSchema> = useCallback(
    async (data) => {
      let body: CreateQuizInput

      switch (data.type) {
        case LiveSessionQuizType.CHOICE: {
          body = {
            type: LiveSessionQuizType.CHOICE,
            config: {
              numberOfChoice: parseInt(data.config.numberOfChoice),
            },
            solution: {
              correctChoice: parseInt(data.solution.correctChoice),
            },
            isAcceptingAnswers: data.isAcceptingAnswers,
            liveSessionId,
          }
          break
        }
        case LiveSessionQuizType.TEXT: {
          body = {
            type: LiveSessionQuizType.TEXT,
            config: {},
            solution: {
              correctAnswer: data.solution.correctAnswer,
            },
            isAcceptingAnswers: data.isAcceptingAnswers,
            liveSessionId,
          }
          break
        }
      }

      await toast.promise(
        createQuizMutation({ body }),
        {
          loading: 'กำลังสร้างคำถาม',
          success: 'สร้างคำถามสำเร็จ',
          error: 'มีบางอย่างผิดพลาด',
        },
        { id: createQuizToastId }
      )
      setOpen(false)
    },
    [createQuizMutation, createQuizToastId, liveSessionId]
  )

  const onError: SubmitErrorHandler<CreateQuizSchema> = (error) => {
    // TODO: error message
    console.debug(error)
    toast.error('กรุณากรอกข้อมูลให้ครบถ้วน', { id: createQuizToastId })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button leftIcon={<FontAwesomeIcon icon={faPuzzle} className="w-4 h-4" />}>
          สร้างคำถาม
        </Button>
      </DialogTrigger>

      <DialogContent className="flex flex-col gap-4">
        <DialogHeader>
          <DialogTitle>สร้างคำถาม</DialogTitle>
        </DialogHeader>
        <Separator className="bg-gray-700" />
        <div className="flex flex-col gap-1">
          <div className="text-base font-semibold">ข้อที่ {numberOfQuizzes + 1}</div>
          <div className="text-gray-500 text-sm">กรุณาเลือกรูปแบบของคำถาม</div>
          <CreateQuizBoxForm
            onSubmit={onSubmit}
            onError={onError}
            onCancel={() => setOpen(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
