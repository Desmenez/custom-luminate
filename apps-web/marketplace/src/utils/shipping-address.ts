import { ShippingAddress } from '@luminate/database'
import { applyTelephoneMask } from '@luminate/utils'

export const getShippingAddressString = (shippingAddress: ShippingAddress | null) => {
  if (!shippingAddress) {
    return ''
  }
  const { name, phone, address, subdistrict, district, province, postalCode } = shippingAddress
  const fullSubdistrict = subdistrict ? `แขวง${subdistrict}` : ''
  const fullDistrict = district ? `เขต${district}` : ''
  return (
    `${name} (${applyTelephoneMask(phone)})\n` +
    `${address} ${fullSubdistrict} ${fullDistrict} ${province} ${postalCode}`
  )
}
