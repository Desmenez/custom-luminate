import {
  Controller,
  SubmitErrorHandler,
  SubmitHandler,
  useFormContext,
  useWatch,
} from 'react-hook-form'

import { faEdit } from '@fortawesome/pro-regular-svg-icons'

import {
  Button,
  FontAwesomeIcon,
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  Separator,
  Textarea,
  cn,
} from '@luminate/ui'

import { RatingStars } from '../../components/rating-stars'
import { ReviewFormMode, ReviewFormSchema } from './schema'

type ReviewFormProps = {
  open: boolean
  setOpen: (open: boolean) => void
  onSubmit: SubmitHandler<ReviewFormSchema>
  onError?: SubmitErrorHandler<ReviewFormSchema>
}

export const ReviewForm: React.FC<ReviewFormProps> = (props) => {
  const { control, handleSubmit, register, reset, setValue } = useFormContext<ReviewFormSchema>()
  const mode = useWatch({ control, name: 'mode' })

  const onClose = () => {
    reset()
    props.setOpen(false)
    setValue('mode', mode)
  }

  return (
    <div
      className={cn(
        'grid grid-rows-[0fr] px-4 py-0 border-0 bg-gray-800 border-gray-700 rounded-lg transition-all duration-700',
        'data-[open=true]:grid-rows-[1fr] data-[open=true]:p-4 data-[open=true]:border -my-1'
      )}
      data-open={props.open}
    >
      <form
        onSubmit={handleSubmit(props.onSubmit, props.onError)}
        className={cn('flex flex-col gap-4 overflow-hidden')}
      >
        <div className="flex gap-4">
          <FontAwesomeIcon icon={faEdit} className="h-8 w-8" />
          <div className="flex flex-col">
            <div>รีวิวให้พี่จ๋อหน่อย</div>
            <div className="text-gray-500 text-sm">
              น้อง ๆ ให้คอร์สนี้กี่ดาว พร้อมกับบอกเหตุผลและคำติชม
            </div>
          </div>
        </div>
        <Controller
          name="stars"
          control={control}
          render={({ field }) => (
            <FormItem className="flex-row items-end gap-4">
              <FormLabel>ให้ดาว</FormLabel>
              <FormControl>
                <RatingStars
                  {...field}
                  rating={field.value}
                  editable={mode === ReviewFormMode.CREATE}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Separator className="bg-gray-700" />
        <FormItem className="col-span-2">
          <FormLabel>เขียนรีวิว</FormLabel>
          <FormControl>
            <Textarea
              autoHeight
              placeholder="เขียนรีวิว"
              {...register('description')}
              className="bg-transparent"
            />
          </FormControl>
          <FormDescription className="text-xs text-gray-500">
            ให้ดาวได้ 1 ครั้ง / แก้ไขรีวิวได้ 2 ครั้ง
          </FormDescription>
        </FormItem>
        <div className="flex gap-4 ml-auto">
          <Button type="button" variant="outline" onClick={onClose}>
            ยกเลิก
          </Button>
          <Button type="submit">{mode === ReviewFormMode.CREATE ? 'ส่งรีวิว' : 'แก้ไข'}</Button>
        </div>
      </form>
    </div>
  )
}
