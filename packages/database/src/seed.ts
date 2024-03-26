import { seedBanner } from './data/banner'
import { seedDiscountCode } from './data/discount-code'
import { seedLiveCourse } from './data/live-course'
import { seedStudent } from './data/student'
import { seedTutorCard } from './data/tutor-card'
import { PrismaClient } from './generated/client'

const prisma = new PrismaClient()

async function main() {
  await seedLiveCourse(prisma)
  await seedBanner(prisma)
  await seedTutorCard(prisma)
  await seedStudent(prisma)
  await seedDiscountCode(prisma)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
