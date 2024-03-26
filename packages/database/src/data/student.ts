import cuid from 'cuid'
import { startOfDay, subDays } from 'date-fns'

import { Prisma, PrismaClient } from '../generated/client'

export async function seedStudent(prisma: PrismaClient) {
  function getDummyStudent(createdAt: Date): Prisma.LiveCoursesOnUsersCreateManyInput {
    return {
      liveCourseId: 'liveCourse1',
      userId: `dummy-${cuid()}`,
      learningType: 'ONLINE',
      createdAt,
    }
  }

  function getDummyStudents(count: number, createdAt: Date) {
    return Array.from({ length: count }).map(() => getDummyStudent(createdAt))
  }

  const studentCounts = [
    4, 12, 27, 8, 19, 3, 15, 22, 9, 26, 18, 7, 29, 1, 14, 25, 6, 17, 11, 2, 20, 10, 28, 13, 5, 23,
    0, 30, 16, 24, 21, 1, 0, 3, 5, 5, 6, 17, 8, 19, 10, 21, 12, 33, 24, 15, 1, 2, 8, 19, 34, 21,
    112, 63, 34, 12, 26, 27, 28, 89, 30, 21,
  ]
  const today = startOfDay(new Date())
  const datapoints = studentCounts.map((count, index) => {
    return {
      date: subDays(today, studentCounts.length - index - 1),
      count,
    }
  })
  const students = datapoints.flatMap(({ date, count }) => getDummyStudents(count, date))
  await prisma.liveCoursesOnUsers.createMany({
    data: students,
  })
}
