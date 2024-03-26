import { addDays } from 'date-fns'

import { ShelfLifeDurationUnit } from '@luminate/database'

type Params = {
  purchaseDateTime: Date
  shelfLifeDuration: number
  shelfLifeDurationUnit: ShelfLifeDurationUnit
}

export const calculateShelfLife = ({
  purchaseDateTime,
  shelfLifeDuration,
  shelfLifeDurationUnit,
}: Params) => {
  let daysOffset: number
  switch (shelfLifeDurationUnit) {
    case ShelfLifeDurationUnit.LIFETIME:
      return null
    case ShelfLifeDurationUnit.DAY:
      daysOffset = 1
      break
    case ShelfLifeDurationUnit.MONTH:
      daysOffset = 30
      break
    case ShelfLifeDurationUnit.YEAR:
      daysOffset = 365
      break
  }
  return addDays(purchaseDateTime, shelfLifeDuration * daysOffset)
}
