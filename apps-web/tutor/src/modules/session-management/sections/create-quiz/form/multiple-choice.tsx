import { Controller, useFormContext, useWatch } from 'react-hook-form'

import { LiveSessionQuizType } from '@luminate/database'
import {
  FormItem,
  FormLabel,
  RadioGroup,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@luminate/ui'

import { ExpandableOption } from '../../../components/expandable-option'
import { MultipleChoiceSchema } from '../schema'
import { QuizChoiceOption } from './quiz-choice-option'

interface MultipleChoiceFormProps {
  disabled?: boolean
}

export const MultipleChoiceForm: React.FC<MultipleChoiceFormProps> = ({ disabled }) => {
  const form = useFormContext<MultipleChoiceSchema>()

  const type = useWatch({ control: form.control, name: 'type' })
  const numberOfChoice = useWatch({ control: form.control, name: 'config.numberOfChoice' })

  return (
    <ExpandableOption
      title="Multiple Choices"
      value={LiveSessionQuizType.CHOICE}
      checked={type === LiveSessionQuizType.CHOICE}
    >
      <Controller
        control={form.control}
        name="config.numberOfChoice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>จำนวนตัวเลือก</FormLabel>
            <Select
              value={field.value}
              onValueChange={field.onChange}
              defaultValue={field.value}
              disabled={disabled}
            >
              <SelectTrigger className="flex-1 [&>span]:line-clamp-1" disabled={disabled}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="z-[1000]">
                {[2, 3, 4, 5, 6].map((value) => (
                  <SelectItem key={value} value={value.toString()}>
                    {value} ข้อ
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
      <Controller
        control={form.control}
        name="solution.correctChoice"
        render={({ field }) => (
          <FormItem className="mt-2">
            <FormLabel>ระบุคำตอบที่ถูกต้อง</FormLabel>
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              defaultValue={field.value}
              disabled={disabled}
              className="grid grid-cols-2 gap-2"
            >
              {Array.from({ length: parseInt(numberOfChoice) }).map((_, index) => (
                <QuizChoiceOption
                  key={index}
                  id={`choice-${index}`}
                  value={(index + 1).toString()}
                  checked={field.value === (index + 1).toString()}
                  className="cols-span-1"
                  disabled={disabled}
                />
              ))}
            </RadioGroup>
          </FormItem>
        )}
      />
    </ExpandableOption>
  )
}
