import { useCallback, useId, useState } from 'react'
import {
  Controller,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  useFormContext,
  useWatch,
} from 'react-hook-form'

import { reactQueryClient } from '@app/core/services'
import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import { z } from 'zod'

import { LiveSessionQuizType } from '@luminate/database'
import { CustomNextPage } from '@luminate/nextjs'
import { CreateQuizInput, mainContract } from '@luminate/rest'
import { getQueryKey } from '@luminate/ts-rest-query'
import {
  Button,
  Checkbox,
  FormItem,
  FormLabel,
  Input,
  Label,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  cn,
  toast,
} from '@luminate/ui'

const ChoiceSchema = z.object({
  type: z.literal(LiveSessionQuizType.CHOICE),
  config: z.object({
    numberOfChoice: z.coerce.string().refine((value) => {
      const number = parseInt(value)
      return number >= 2 && number <= 6
    }),
  }),
  solution: z.object({
    correctChoice: z.string(),
  }),
  isAcceptingAnswers: z.coerce.boolean().default(true),
})
type ChoiceSchema = z.infer<typeof ChoiceSchema>

const TextSchema = z.object({
  type: z.literal(LiveSessionQuizType.TEXT),
  config: z.object({}).default({}),
  solution: z.object({
    correctAnswer: z.string(),
  }),
  isAcceptingAnswers: z.coerce.boolean().default(true),
})
type TextSchema = z.infer<typeof TextSchema>

const Schema = z.discriminatedUnion('type', [ChoiceSchema, TextSchema])
type Schema = z.infer<typeof Schema>

const TutorDemoPage: CustomNextPage = () => {
  const [liveSessionId, setLiveSessionId] = useState<string>('')
  const [validatedLiveSessionId, setValidatedLiveSessionId] = useState<string | null>(null)

  const queryClient = useQueryClient()
  const verifyLiveSessionId = useCallback(async (liveSessionId: string) => {
    const response = await reactQueryClient.liveSession.getLiveSessionForTutor.query({
      params: { liveSessionId },
    })
    console.log(response)
    if (response.status === 200) {
      setValidatedLiveSessionId(liveSessionId)
    } else {
      setValidatedLiveSessionId(null)
      toast.error('ไม่พบ Live session', {
        id: 'TUTOR_DEMO_LIVE_SESSION_NOT_FOUND_ERROR',
      })
    }
  }, [])

  console.log(validatedLiveSessionId)

  const [quizType, setQuizType] = useState<LiveSessionQuizType>(LiveSessionQuizType.CHOICE)
  const { data: quizzes } = reactQueryClient.quiz.getQuizzes.useQuery(
    { query: { liveSessionId: validatedLiveSessionId ?? '' } },
    { enabled: !!validatedLiveSessionId }
  )
  const { mutateAsync: createQuizMutation } = reactQueryClient.quiz.createQuiz.useMutation()
  const { mutateAsync: updateQuizMutation } = reactQueryClient.quiz.updateQuiz.useMutation()

  const methods = useForm<Schema>({
    resolver: zodResolver(Schema),
    defaultValues: { type: LiveSessionQuizType.CHOICE, isAcceptingAnswers: true },
  })

  const onSubmit: SubmitHandler<Schema> = async (data) => {
    let quizBody: CreateQuizInput
    if (!validatedLiveSessionId) return

    switch (data.type) {
      case LiveSessionQuizType.CHOICE: {
        quizBody = {
          type: LiveSessionQuizType.CHOICE,
          config: {
            numberOfChoice: parseInt(data.config.numberOfChoice),
          },
          solution: {
            correctChoice: parseInt(data.solution.correctChoice),
          },
          isAcceptingAnswers: data.isAcceptingAnswers,
          liveSessionId: validatedLiveSessionId,
        }
        break
      }
      case LiveSessionQuizType.TEXT: {
        quizBody = {
          type: LiveSessionQuizType.TEXT,
          config: {},
          solution: {
            correctAnswer: data.solution.correctAnswer,
          },
          isAcceptingAnswers: data.isAcceptingAnswers,
          liveSessionId: validatedLiveSessionId,
        }
        break
      }
    }

    try {
      const response = await toast.promise(createQuizMutation({ body: quizBody }), {
        loading: 'กำลังสร้างคำถาม',
        success: 'สร้างคำถามสำเร็จ',
        error: 'มีบางอย่างผิดพลาด',
      })
      queryClient.invalidateQueries(
        getQueryKey(mainContract.quiz.getQuizzes, {
          query: { liveSessionId: validatedLiveSessionId ?? '' },
        })
      )
      console.log(response)
    } catch (err) {
      console.error(err)
    }
  }

  const onError: SubmitErrorHandler<Schema> = (errors) => {
    const errorMessages = Object.entries(errors)
      .map(([key, value]) => {
        return `${key}: ${value.message}`
      })
      .join('\n')
    toast.error(errorMessages, { id: 'TUTOR_DEMO_FORM_ERROR' })
  }

  const onSelectQuizType = useCallback(
    (type: LiveSessionQuizType) => {
      methods.setValue('type', type)
      setQuizType(type)
    },
    [methods]
  )

  const toggleQuizAcceptingAnswers = useCallback(
    async (quizId: string, isAcceptingAnswers: boolean) => {
      const response = await toast.promise(
        updateQuizMutation({ params: { quizId }, body: { isAcceptingAnswers } }),
        {
          loading: 'กำลังเปลี่ยนสถานะคำถาม',
          success: 'เปลี่ยนสถานะคำถามสำเร็จ',
          error: 'มีบางอย่างผิดพลาด',
        },
        { id: 'TUTOR_DEMO_TOGGLE_QUIZ_ACCEPTING_ANSWERS' }
      )
      console.log(response)
      queryClient.invalidateQueries(
        getQueryKey(mainContract.quiz.getQuizzes, {
          query: { liveSessionId: validatedLiveSessionId ?? '' },
        })
      )
    },
    [queryClient, updateQuizMutation, validatedLiveSessionId]
  )

  return (
    <section className="container mt-10m max-w-2xl mt-10 flex flex-col gap-8 mb-10">
      <div className="grid gird-col-2 gap-4 items-center">
        <h1 className="text-lg font-semibold col-span-2">ตั้งค่า Live Session ID</h1>
        <form
          className="col-span-2 flex flex-col gap-1"
          onSubmit={(event) => {
            event.preventDefault()
            verifyLiveSessionId(liveSessionId)
          }}
        >
          <Label>Live Session ID</Label>
          <Input
            value={liveSessionId}
            onChange={(e) => setLiveSessionId(e.target.value)}
            placeholder="Live Session ID"
          />
          <Button type="submit">ตรวจสอบ Live ID</Button>
        </form>
      </div>
      {validatedLiveSessionId && <Separator />}
      {validatedLiveSessionId && (
        <div className="flex gap-4">
          <Button
            onClick={() => onSelectQuizType(LiveSessionQuizType.CHOICE)}
            variant="outline"
            fullWidth
          >
            สร้างคำถามแบบตัวเลือก
          </Button>
          <Button
            onClick={() => onSelectQuizType(LiveSessionQuizType.TEXT)}
            variant="outline"
            fullWidth
          >
            สร้างคำถามแบบข้อความ
          </Button>
        </div>
      )}
      {validatedLiveSessionId && <Separator />}
      <FormProvider {...methods}>
        {validatedLiveSessionId && (
          <form onSubmit={methods.handleSubmit(onSubmit, onError)}>
            {quizType === LiveSessionQuizType.CHOICE && <CreateQuizChoiceForm />}
            {quizType === LiveSessionQuizType.TEXT && <CreateQuizTextForm />}
          </form>
        )}
      </FormProvider>
      {validatedLiveSessionId && <Separator />}
      {validatedLiveSessionId && (
        <div className="flex flex-col gap-4">
          <h1 className="text-lg font-semibold col-span-2">เปลี่ยนสถานะของคำถาม</h1>
          <div className="grid grid-cols-4 gap-2">
            {quizzes?.body.length === 0 && <p>ยังไม่มีคำถาม</p>}
            {quizzes?.body?.map((quiz, index) => {
              const data: { label: string; value: string }[] = []

              if (quiz.type === LiveSessionQuizType.CHOICE) {
                const choice = quiz as ChoiceSchema
                data.push({ label: '#ตัวเลือก', value: choice.config.numberOfChoice })
                data.push({ label: 'คำตอบ', value: choice.solution.correctChoice })
                data.push({ label: 'ID', value: quiz.id })
              } else if (quiz.type === LiveSessionQuizType.TEXT) {
                const text = quiz as TextSchema
                data.push({ label: 'คำตอบ', value: text.solution.correctAnswer })
                data.push({ label: 'ID', value: quiz.id })
              }

              return (
                <QuizButton
                  key={quiz.id}
                  data={data}
                  index={quizzes.body.length - index}
                  onClick={(to) => toggleQuizAcceptingAnswers(quiz.id, to)}
                  isAcceptingAnswers={quiz.isAcceptingAnswers}
                />
              )
            })}
          </div>
        </div>
      )}
    </section>
  )
}
export default TutorDemoPage

const CreateQuizChoiceForm = () => {
  const { register, setValue, control } = useFormContext<ChoiceSchema>()
  const isAcceptingAnswers = useWatch({ name: 'isAcceptingAnswers', control: control })
  const id = useId()

  type CreateSelectFn = <T extends Parameters<typeof register>[0]>(
    name: T,
    options: {
      label: string
      placeholder: string
      items: string[]
    }
  ) => JSX.Element

  const createSelect = useCallback<CreateSelectFn>(
    (name, options) => {
      return (
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            return (
              <div className="flex flex-col gap-1">
                <Label className="leading-normal">{options.label}</Label>
                <Select
                  {...field}
                  value={field.value as string}
                  onValueChange={field.onChange}
                  defaultValue={field.value as string}
                >
                  <SelectTrigger className="w-full px-4">
                    <SelectValue placeholder={options.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {options.items.map((val) => (
                        <SelectItem key={`${name}-${val}`} value={val}>
                          {val}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )
          }}
        />
      )
    },
    [control]
  )

  const choices = ['2', '3', '4', '5', '6']

  return (
    <div className="grid grid-cols-2 gap-4">
      <h1 className="text-lg font-semibold col-span-2">สร้างคำถามแบบตัวเลือก</h1>
      <div className="col-span-1">
        {createSelect('config.numberOfChoice', {
          label: 'จำนวนตัวเลือก',
          placeholder: 'เลือกจำนวนตัวเลือก',
          items: choices,
        })}
      </div>
      <div className="col-span-1">
        {createSelect('solution.correctChoice', {
          label: 'คำตอบที่ถูกต้อง',
          placeholder: 'เลือกคำตอบที่ถูกต้อง',
          items: choices,
        })}
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id={id}
          checked={isAcceptingAnswers}
          onCheckedChange={(value) => setValue('isAcceptingAnswers', value as boolean)}
        />
        <Label className="text-sm cursor-pointer" htmlFor={id}>
          อนุญาติให้ส่งคำตอบเรื่อย ๆ
        </Label>
      </div>
      <Button type="submit" className="col-span-2">
        สร้างคำถาม
      </Button>
    </div>
  )
}

const CreateQuizTextForm = () => {
  const { register, setValue, control } = useFormContext<TextSchema>()
  const isAcceptingAnswers = useWatch({ name: 'isAcceptingAnswers', control: control })
  const id = useId()

  return (
    <div className="grid grid-cols-2 gap-4">
      <h1 className="text-lg font-semibold col-span-2">สร้างคำถามแบบข้อความ</h1>
      <FormItem className="col-span-2">
        <FormLabel>คำตอบที่ถูกต้อง</FormLabel>
        <Input {...register('solution.correctAnswer')} placeholder="คำตอบที่ถูกต้อง" />
      </FormItem>
      <div className="flex items-center gap-2">
        <Checkbox
          id={id}
          checked={isAcceptingAnswers}
          onCheckedChange={(value) => setValue('isAcceptingAnswers', value as boolean)}
        />
        <Label className="text-sm cursor-pointer" htmlFor={id}>
          อนุญาติให้ส่งคำตอบเรื่อย ๆ
        </Label>
      </div>
      <Button type="submit" className="col-span-2">
        สร้างคำถาม
      </Button>
    </div>
  )
}

const QuizButton = (props: {
  index: number
  data: { label: string; value: string }[]
  onClick: (to: boolean) => void
  isAcceptingAnswers: boolean
}) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-1 p-2 rounded-md transition-colors cursor-pointer',
        props.isAcceptingAnswers && 'text-gray-900 bg-yellow-400 hover:bg-yellow-300',
        !props.isAcceptingAnswers &&
          'text-yellow-400 bg-background border border-input hover:border-yellow-300 hover:text-yellow-300'
      )}
      onClick={() => props.onClick(!props.isAcceptingAnswers)}
    >
      <p className="text-center font-bold">{props.index}</p>
      {props.data.map((item) => (
        <p key={item.label} className="truncate text-xs">
          {item.label}: <span className="font-semibold">{item.value}</span>
        </p>
      ))}
    </div>
  )
}
