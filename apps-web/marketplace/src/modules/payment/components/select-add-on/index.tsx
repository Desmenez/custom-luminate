import { useFormContext, useWatch } from 'react-hook-form'

import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { PaymentPackageInfo } from '@luminate/rest'
import { ScrollArea } from '@luminate/ui'

import { PaymentPackageSelectionSchema } from '../../schema/recipient-address'
import { AddonPackageOption } from '../package-option'
import { Section } from '../section'

interface SelectAddonProps {
  addons: PaymentPackageInfo['addonOptions']
}

export const SelectAddon: React.FC<SelectAddonProps> = ({ addons }) => {
  const { control, setValue } = useFormContext<PaymentPackageSelectionSchema>()
  const addonId = useWatch({ name: 'addonId', control: control })

  const hasAddons = addons.length > 0

  if (!hasAddons) {
    return null
  }

  return (
    <Section title="สมัครสมาชิก MonkeyEveryday">
      <ScrollArea className="-mb-4" direction="horizontal" gradientFrom="from-gray-900">
        <RadioGroupPrimitive.Root
          className="flex gap-2 pb-4"
          value={addonId}
          onValueChange={(value) => setValue('addonId', value)}
        >
          {addons.map((addonOption) => (
            <AddonPackageOption
              key={addonOption.id}
              {...addonOption}
              // If the value is the same as the selected value, it'll not trigger the onValueChange of its parent
              onClick={() => addonId === addonOption.id && setValue('addonId', '')}
            />
          ))}
        </RadioGroupPrimitive.Root>
      </ScrollArea>
    </Section>
  )
}
