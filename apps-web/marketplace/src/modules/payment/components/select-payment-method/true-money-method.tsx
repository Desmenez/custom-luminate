import { useFormContext } from 'react-hook-form'

import { FormItem, FormLabel, Input } from '@luminate/ui'
import { applyTelephoneMask } from '@luminate/utils'

import { TruemoneyMethodSchema } from '../../schema/payment-method'

export const TruemoneyMethodForm = () => {
  const { register } = useFormContext<TruemoneyMethodSchema>()

  const phoneNumberInput = register('phoneNumber')

  return (
    <FormItem>
      <FormLabel>ใส่เบอร์โทรศัพท์</FormLabel>
      <Input
        placeholder="080-000-0000"
        maxLength={12}
        {...phoneNumberInput}
        onChange={(event) => {
          event.target.value = applyTelephoneMask(event.target.value)
          phoneNumberInput.onChange(event)
        }}
      />
    </FormItem>
  )
}
