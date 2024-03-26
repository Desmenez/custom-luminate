import { PaymentCharge } from '@luminate/rest'

import { CostBreakdown } from '../components/checkout/cost-breakdown'

export const costBreakdownFromCharge = (charge: PaymentCharge) => {
  const costs: CostBreakdown[] = []
  costs.push({
    title: charge.liveCourse.name,
    price: charge.summary.basePrice,
  })
  if (charge.summary.addon) {
    costs.push({
      title: charge.summary.addon.name,
      price: charge.summary.addon.price,
    })
  }
  costs.push({
    title: 'ค่าส่ง',
    price: charge.summary.shippingPrice,
  })
  if (charge.discountCode) {
    costs.push({
      title: charge.discountCode.code,
      price: -charge.discountCode.discount,
    })
  }
  return costs
}
