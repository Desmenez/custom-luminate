import { useEffect, useMemo } from 'react'
import { Controller, useFormContext, useWatch } from 'react-hook-form'

import { externalService } from '@app/core/services/external'

import { ComboBox, FormControl, FormItem, FormLabel, FormMessage, Input } from '@luminate/ui'
import { applyTelephoneMask, uniqueObject } from '@luminate/utils'

import { PaymentPackageSelectionForShipping } from '../../schema/recipient-address'
import { applyMultipleFilters } from './utils'

interface ShippingAddressProps {}

export const ShippingAddress: React.FC<ShippingAddressProps> = () => {
  const {
    register,
    control,
    setValue,
    resetField,
    formState: { errors },
  } = useFormContext<PaymentPackageSelectionForShipping>()
  const { data: addresses } = externalService.useQueryGetAllThaiAddresses({
    refetchInterval: false,
    refetchOnWindowFocus: false,
  })

  // Form watch - get value from form
  const selectedProvince = useWatch({ control, name: 'shippingAddress.province' })
  const selectedDistrict = useWatch({ control, name: 'shippingAddress.district' })
  const selectedSubDistrict = useWatch({ control, name: 'shippingAddress.subDistrict' })

  // Calculate available options of addresses
  const availableProvinces = useMemo(() => {
    const filteredAddresses = applyMultipleFilters(addresses ?? [])
    const uniqueProvinces = uniqueObject(filteredAddresses, (data) => data.provinceNameTh)
    return uniqueProvinces.map((data) => ({
      label: data.provinceNameTh,
      value: data.provinceNameTh,
    }))
  }, [addresses])

  const availableDistricts = useMemo(() => {
    const filteredAddresses = applyMultipleFilters(addresses ?? [], [
      [selectedProvince, 'provinceNameTh'],
    ])
    const uniqueDistricts = uniqueObject(filteredAddresses, (data) => data.districtNameTh)
    return uniqueDistricts.map((data) => ({
      label: data.districtNameTh,
      value: data.districtNameTh,
    }))
  }, [addresses, selectedProvince])

  const availableSubDistricts = useMemo(() => {
    const filteredAddresses = applyMultipleFilters(addresses ?? [], [
      [selectedProvince, 'provinceNameTh'],
      [selectedDistrict, 'districtNameTh'],
    ])
    const uniqueSubDistricts = uniqueObject(filteredAddresses, (data) => data.subdistrictNameTh)
    return uniqueSubDistricts.map((data) => ({
      label: data.subdistrictNameTh,
      value: data.subdistrictNameTh,
    }))
  }, [addresses, selectedDistrict, selectedProvince])

  const availablePostalCodes = useMemo(() => {
    const filteredAddresses = applyMultipleFilters(addresses ?? [], [
      [selectedProvince, 'provinceNameTh'],
      [selectedDistrict, 'districtNameTh'],
      [selectedSubDistrict, 'subdistrictNameTh'],
    ])
    const uniquePostalCodes = uniqueObject(filteredAddresses, (data) => data.postalCode)
    return uniquePostalCodes.map((data) => ({
      label: data.postalCode.toString(),
      value: data.postalCode.toString(),
    }))
  }, [addresses, selectedDistrict, selectedProvince, selectedSubDistrict])

  // ------ Form setter ------
  const resetFields = (keys: Array<Parameters<typeof resetField>[0]>) => {
    keys.forEach((key) => resetField(key))
  }

  // Auto fill if postal code only have one
  useEffect(() => {
    if (availablePostalCodes.length === 1) {
      setValue('shippingAddress.postalCode', availablePostalCodes[0].value)
    }
  }, [availablePostalCodes, setValue])

  const phoneNumberInput = register('shippingAddress.telephone')

  return (
    <div className="flex flex-col gap-4 w-full">
      <FormItem required error={errors.shippingAddress?.name?.message}>
        <FormLabel>ชื่อผู้รับ</FormLabel>
        <FormControl>
          <Input
            placeholder="ชื่อผู้รับ"
            className="w-full"
            {...register('shippingAddress.name')}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
      <FormItem required error={errors.shippingAddress?.telephone?.message}>
        <FormLabel>เบอร์โทรศัพท์</FormLabel>
        <FormControl>
          <Input
            placeholder="081-234-5678"
            {...phoneNumberInput}
            onChange={(event) => {
              event.target.value = applyTelephoneMask(event.target.value)
              phoneNumberInput.onChange(event)
            }}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
      <FormItem required error={errors.shippingAddress?.address?.message}>
        <FormLabel>ที่อยู่</FormLabel>
        <FormControl>
          <Input
            placeholder="ex. บ้านเลขที่ หมู่บ้าน ถนน ซอย"
            {...register('shippingAddress.address')}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
      <Controller
        name="shippingAddress.province"
        control={control}
        render={({ field }) => (
          <FormItem required error={errors.shippingAddress?.province?.message}>
            <FormLabel>จังหวัด</FormLabel>
            <FormControl>
              <ComboBox
                placeholder="เลือกจังหวัด"
                options={availableProvinces}
                {...field}
                onChange={(value) => {
                  field.onChange(value)
                  resetFields([
                    'shippingAddress.district',
                    'shippingAddress.subDistrict',
                    'shippingAddress.postalCode',
                  ])
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex flex-col gap-4 laptop:flex-row">
        <Controller
          name="shippingAddress.district"
          control={control}
          render={({ field }) => (
            <FormItem required error={errors.shippingAddress?.district?.message}>
              <FormLabel>เขต/อำเภอ</FormLabel>
              <FormControl>
                <ComboBox
                  placeholder="เลือกเขต/อำเภอ"
                  options={availableDistricts}
                  disabled={!selectedProvince}
                  {...field}
                  onChange={(value) => {
                    field.onChange(value)
                    resetFields(['shippingAddress.subDistrict', 'shippingAddress.postalCode'])
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Controller
          name="shippingAddress.subDistrict"
          control={control}
          render={({ field }) => (
            <FormItem required error={errors.shippingAddress?.subDistrict?.message}>
              <FormLabel>แขวง/ตำบล</FormLabel>
              <FormControl>
                <ComboBox
                  placeholder="เลือกแขวง/ตำบล"
                  options={availableSubDistricts}
                  disabled={!selectedDistrict || !selectedProvince}
                  {...field}
                  onChange={(value) => {
                    field.onChange(value)
                    resetFields(['shippingAddress.postalCode'])
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <Controller
        name="shippingAddress.postalCode"
        control={control}
        render={({ field }) => (
          <FormItem required error={errors.shippingAddress?.subDistrict?.message}>
            <FormLabel>รหัสไปรษณีย์</FormLabel>
            <FormControl>
              <ComboBox
                placeholder="เลือกรหัสไปรษณีย์"
                options={availablePostalCodes}
                disabled={!selectedDistrict || !selectedProvince || !selectedSubDistrict}
                {...field}
                onChange={(value) => {
                  field.onChange(value)
                }}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
