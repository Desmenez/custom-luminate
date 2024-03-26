import { useId } from 'react'

import { Link } from '@luminate/ui'
import { Checkbox, Label } from '@luminate/ui'

export interface TermAndConditionProps {
  checked: boolean
  onChange?: (value: boolean) => void
}

export const TermAndCondition: React.FC<TermAndConditionProps> = ({ checked, onChange }) => {
  const id = useId()
  const name = useId()

  return (
    <div className="items-top flex space-x-2">
      <Checkbox
        id={id}
        name={name}
        checked={checked}
        onCheckedChange={() => onChange?.(!checked)}
      />
      <div className="grid gap-1.5 leading-none">
        <Label htmlFor={id} className="cursor-pointer text-xs text-gray-500 leading-4">
          ข้าพเจ้าอ่าน เข้าใจ และตกลงตาม <Link href="/">เงื่อนไขการใช้บริการ</Link>{' '}
          <Link href="/">เงื่อนไขการชำระเงิน</Link> และ{' '}
          <Link href="/">การส่งเสริมการขาย และนโยบายความเป็นส่วนตัว</Link>
        </Label>
      </div>
    </div>
  )
}
