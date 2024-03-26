import { container } from '@app/container'
import { addDays, endOfDay, startOfDay, subDays } from 'date-fns'

import { PrismaClient } from '@luminate/database'
import {
  GetStudentGraphQuery,
  GetStudentGraphResponse,
  StudentGraphDataPoint,
} from '@luminate/rest'

import { ITutorRepository } from '.'

export class TutorService {
  constructor(
    private readonly tutorRepository: ITutorRepository,
    private readonly prisma: PrismaClient
  ) {}
  getTutors() {
    return this.tutorRepository.findAll()
  }

  getTutorInfo(tutorId: string) {
    return this.tutorRepository.findById(tutorId)
  }

  getTutorCards() {
    return this.prisma.tutorCard.findMany({
      orderBy: [
        {
          order: 'asc',
        },
        {
          createdAt: 'asc',
        },
      ],
    })
  }

  async getStudentGraph(
    tutorId: string,
    query: GetStudentGraphQuery
  ): Promise<GetStudentGraphResponse> {
    const { days: periodDays, endDate } = query

    const liveCourseIds = (
      await this.prisma.liveCourse.findMany({
        where: { tutorId },
        select: { id: true },
      })
    ).map(({ id }) => id)

    const queryRange = {
      start: startOfDay(
        periodDays === 1 ? subDays(endDate, 3) : subDays(endDate, periodDays * 2 + 1)
      ),
      end: endOfDay(periodDays === 1 ? addDays(endDate, 3) : endDate),
    } as const
    const periodRange = {
      start: startOfDay(subDays(endDate, periodDays - 1)),
      end: endOfDay(endDate),
    } as const
    const previousPeriodRange = {
      start: subDays(periodRange.start, periodDays),
      end: subDays(periodRange.end, periodDays),
    } as const
    const graphPeriodRange =
      periodDays !== 1
        ? periodRange
        : {
            start: subDays(periodRange.start, 3),
            end: addDays(periodRange.end, 3),
          }

    const students = await this.prisma.liveCoursesOnUsers.findMany({
      where: {
        liveCourseId: { in: liveCourseIds },
        createdAt: {
          gte: queryRange.start,
          lte: queryRange.end,
        },
      },
      select: { createdAt: true },
    })
    const newStudents = students.filter(({ createdAt }) => {
      return createdAt >= periodRange.start && createdAt <= periodRange.end
    })
    const previousPeriodCount = students.filter(({ createdAt }) => {
      return createdAt >= previousPeriodRange.start && createdAt <= previousPeriodRange.end
    }).length
    let newStudentsIncreasePercent: number
    if (previousPeriodCount !== 0) {
      newStudentsIncreasePercent =
        ((newStudents.length - previousPeriodCount) / previousPeriodCount) * 100
    } else {
      newStudentsIncreasePercent = newStudents.length > 0 ? 100 : 0
    }

    const dataPoints: StudentGraphDataPoint[] = []
    const now = new Date()
    for (let day = graphPeriodRange.start; day <= graphPeriodRange.end; day = addDays(day, 1)) {
      if (day > now) break
      const count = students.filter(({ createdAt }) => {
        return createdAt >= day && createdAt <= endOfDay(day)
      }).length
      dataPoints.push({
        date: day.toISOString(),
        newStudents: count,
      })
    }

    const totalCount = await this.prisma.liveCoursesOnUsers.count({
      where: {
        liveCourseId: { in: liveCourseIds },
      },
    })

    return {
      startDate: graphPeriodRange.start.toISOString(),
      endDate: graphPeriodRange.end.toISOString(),
      newStudents: newStudents.length,
      newStudentsIncreasePercent,
      totalStudents: totalCount,
      points: dataPoints,
    }
  }

  async getUpcomingSessions(tutorId: string) {
    const sessions = await this.prisma.liveSession.findMany({
      where: {
        liveCourse: {
          tutorId,
        },
        endTime: { gte: new Date() },
      },
      orderBy: {
        startTime: 'asc',
      },
      take: 2,
    })
    return sessions
  }
}

container.registerSingleton<TutorService>()
