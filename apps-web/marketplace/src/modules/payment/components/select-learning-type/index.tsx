import { Controller, useFormContext, useWatch } from 'react-hook-form'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { PaymentPackageInfo } from '@luminate/rest'
import { ScrollArea } from '@luminate/ui'

import { LearningType } from '../../constants/learning-type'
import { PaymentPackageSelectionSchema } from '../../schema/recipient-address'
import { OnlinePackageOption, OnsitePackageOption } from '../package-option'
import { Section } from '../section'

type SelectLearningTypeProps = PaymentPackageInfo['learningTypeOptions']

export const SelectLearningType: React.FC<SelectLearningTypeProps> = ({ onsite, online }) => {
  const { control } = useFormContext<PaymentPackageSelectionSchema>()

  const selectedLearningType = useWatch({ name: 'learningType', control: control })

  return (
    <Section title="เลือกรูปแบบการเรียน">
      <ScrollArea className="-mb-4" direction="horizontal" gradientFrom="from-gray-900">
        <Controller
          name="learningType"
          control={control}
          render={({ field }) => (
            <RadioGroupPrimitive.Root
              className="flex gap-2 pb-4"
              onValueChange={field.onChange}
              {...field}
            >
              {online && <OnlinePackageOption {...online} />}
              {onsite && <OnsitePackageOption {...onsite} />}
            </RadioGroupPrimitive.Root>
          )}
        />
      </ScrollArea>
      {selectedLearningType === LearningType.ONSITE && onsite?.onsiteAddress && (
        <Section title="สถานที่" className="mt-2">
          <p className="border border-gray-700 p-4 rounded-lg text-sm whitespace-pre-line">
            {onsite?.onsiteAddress}
          </p>
        </Section>
      )}
    </Section>
  )
}
