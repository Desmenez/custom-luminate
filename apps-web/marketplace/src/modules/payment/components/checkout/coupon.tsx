import { FormEvent, useId, useRef, useState } from 'react'

import { faClose } from '@fortawesome/pro-solid-svg-icons'

import {
  Button,
  FontAwesomeIcon,
  FormControl,
  FormItem,
  FormMessage,
  Input,
  toast,
} from '@luminate/ui'
import { formatAsBaht } from '@luminate/utils'

export interface DiscountCode {
  code: string
  discount: number
}

export interface CouponProps {
  selectedDiscountCode: DiscountCode | null
  onCouponSubmit: (couponCode: string) => Promise<boolean>
  onRemoveCoupon: () => void
}

export const Coupon: React.FC<CouponProps> = ({
  selectedDiscountCode,
  onCouponSubmit,
  onRemoveCoupon,
}) => {
  const couponToastId = useId()
  const [couponCode, setCouponCode] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    try {
      setIsLoading(true)
      const isSuccess = await onCouponSubmit(couponCode)
      if (!isSuccess) {
        setHasError(true)
        requestAnimationFrame(() => inputRef.current?.focus())
        return
      }
      setCouponCode('')
    } catch (e) {
      toast.error('ไม่สามารถตรวจสอบโค้ดส่วนลดได้', { id: couponToastId })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-1">
      <p className="font-normal text-sm text-white">โค้ดส่วนลดเพิ่มเติม / รหัสเพื่อน รับเงินคืน</p>
      <form className="flex flex-row gap-2" onSubmit={handleSubmit}>
        <FormItem
          className="w-full"
          error={hasError ? 'ส่วนลดนี้ไม่สามารถใช้ได้ / ถูกใช้ไปหมดแล้ว' : undefined}
          required
        >
          <FormControl>
            <Input
              ref={inputRef}
              placeholder="โค้ดส่วนลด"
              value={couponCode}
              onChange={(event) => {
                setCouponCode(event.target.value.toUpperCase())
                setHasError(false)
              }}
              disabled={isLoading}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
        <Button type="submit" variant="outline" disabled={isLoading}>
          ยืนยัน
        </Button>
      </form>
      <div>
        {selectedDiscountCode && (
          <div className="inline-flex max-w-full items-center pl-1 bg-green-700/30 text-green-600 rounded-sm">
            <span className="font-semibold text-xs leading-normal truncate">
              ส่วนลด {formatAsBaht(selectedDiscountCode.discount)} Code: {selectedDiscountCode.code}
            </span>
            <button className="flex items-center justify-center p-1" onClick={onRemoveCoupon}>
              <FontAwesomeIcon icon={faClose} className="w-3 h-3" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
