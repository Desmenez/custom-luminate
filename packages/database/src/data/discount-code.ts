import { addDays } from 'date-fns'

import { PrismaClient } from '../generated/client'

export async function seedDiscountCode(prisma: PrismaClient) {
  await prisma.discountCodeGroup.createMany({
    data: [
      {
        id: 'discountCodeGroup1',
        name: 'Discount Code Group 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  })

  await prisma.discountCode.createMany({
    data: [
      {
        id: 'discountCode1',
        code: 'DISCOUNTCODE1',
        discount: 10,
        discountCodeGroupId: 'discountCodeGroup1',
        scope: 'ANY_LIVE_COURSE',
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        limit: 10,
        usageCount: 0,
      },
      {
        id: 'discountCode2',
        code: 'DISCOUNTCODE2',
        discount: 10,
        discountCodeGroupId: 'discountCodeGroup1',
        scope: 'ANY_LIVE_COURSE',
        startDate: new Date(),
        endDate: new Date(),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        limit: 10,
        usageCount: 0,
      },
      {
        id: 'discountCode3',
        code: 'DISCOUNTCODE3',
        discount: 10,
        discountCodeGroupId: 'discountCodeGroup1',
        scope: 'SPECIFIC_LIVE_COURSE',
        startDate: new Date(),
        endDate: addDays(new Date(), 7),
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
        limit: 10,
        usageCount: 0,
      },
    ],
  })
}
