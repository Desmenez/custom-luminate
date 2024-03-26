import { Controller, useFormContext } from 'react-hook-form'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@luminate/ui'

import { MobileBankingMethodSchema, MobileBankingType } from '../../schema/payment-method'

export const MobileBankingMethodForm = () => {
  const { control } = useFormContext<MobileBankingMethodSchema>()

  return (
    <Controller
      name="selectedBank"
      control={control}
      render={({ field }) => {
        return (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <SelectTrigger className="w-full px-4">
              <SelectValue placeholder="เลือกธนาคาร" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value={MobileBankingType.KBANK}>กสิกรไทย</SelectItem>
                <SelectItem value={MobileBankingType.BAY}>กรุงศรี</SelectItem>
                <SelectItem value={MobileBankingType.SCB}>ไทยพาณิชย์</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        )
      }}
    />
  )
}
