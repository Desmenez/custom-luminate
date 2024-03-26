import { useFormContext, useWatch } from 'react-hook-form'

import { LiveSessionQuizType } from '@luminate/database'
import { FormControl, FormItem, FormLabel, Textarea } from '@luminate/ui'

import { ExpandableOption } from '../../../components/expandable-option'
import { ShortTextSchema } from '../schema'

interface TextFormProps {
  disabled?: boolean
}

export const TextForm: React.FC<TextFormProps> = ({ disabled }) => {
  const form = useFormContext<ShortTextSchema>()

  const type = useWatch({ control: form.control, name: 'type' })

  return (
    <ExpandableOption
      title="Short Answer"
      value={LiveSessionQuizType.TEXT}
      checked={type === LiveSessionQuizType.TEXT}
    >
      <FormItem>
        <FormLabel>ระบุคำตอบที่ถูกต้อง</FormLabel>
        <FormControl>
          <Textarea
            disabled={disabled}
            {...form.register('solution.correctAnswer')}
            autoHeight
            fullWidth
            placeholder="ระบุคำตอบที่ถูกต้อง"
          />
        </FormControl>
      </FormItem>
    </ExpandableOption>
  )
}
