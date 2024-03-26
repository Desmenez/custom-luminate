import { useState } from 'react'
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm, useWatch } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { RadioGroup } from '@radix-ui/react-radio-group'

import { LiveSessionQuizType } from '@luminate/database'
import { Button } from '@luminate/ui'

import { CreateQuizSchema } from '../schema'
import { MultipleChoiceForm } from './multiple-choice'
import { TextForm } from './text'

interface CreateQuizBoxFormProps {
  onSubmit: SubmitHandler<CreateQuizSchema>
  onError?: SubmitErrorHandler<CreateQuizSchema>
  onCancel?: () => void
}

export const CreateQuizBoxForm: React.FC<CreateQuizBoxFormProps> = ({
  onSubmit: _onSubmit,
  onError,
  onCancel,
}) => {
  const [disabled, setDisabled] = useState(false)

  const form = useForm<CreateQuizSchema>({
    resolver: zodResolver(CreateQuizSchema),
    reValidateMode: 'onChange',
    defaultValues: {
      type: LiveSessionQuizType.CHOICE,
      config: { numberOfChoice: '4' },
    },
  })

  const type = useWatch({ control: form.control, name: 'type' })
  const handleQuizTypeChange = (type: LiveSessionQuizType) => {
    form.setValue('type', type)
  }

  const onSubmit = async (data: CreateQuizSchema) => {
    setDisabled(true)
    try {
      await _onSubmit(data)
    } catch (err) {
      console.error(err)
    } finally {
      setDisabled(false)
    }
  }

  return (
    <FormProvider {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className="flex flex-col gap-4"
      >
        <RadioGroup
          value={type}
          onValueChange={(type: LiveSessionQuizType) => handleQuizTypeChange(type)}
          className="flex flex-col gap-2"
          disabled={disabled}
        >
          <MultipleChoiceForm disabled={disabled} />
          <TextForm disabled={disabled} />
        </RadioGroup>
        <div className="self-end w-fit flex gap-2">
          <Button type="reset" variant="outline" onClick={onCancel} disabled={disabled}>
            ยกเลิก
          </Button>
          <Button type="submit" disabled={disabled}>
            สร้างคำถาม
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
