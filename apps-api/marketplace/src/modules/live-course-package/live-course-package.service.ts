import { container } from '@app/container'

import { PrismaClient } from '@luminate/database'
import {
  CreateLiveCoursePackageBody,
  DeleteLiveCoursePackageBody,
  UpdateLiveCoursePackageBody,
} from '@luminate/rest/src/features/live-course-package/dto'

import { LiveCoursePackageAdapter } from '.'

export class LiveCoursePackageService {
  constructor(
    private prisma: PrismaClient,
    private liveCoursePackageAdapter: LiveCoursePackageAdapter
  ) {}

  getLiveCoursesPrice = async (liveCourseIds: string[]) => {
    const res = await this.prisma.liveCoursePackage.findMany({
      where: { AND: { liveCourseId: { in: [...liveCourseIds] }, packageType: 'LIVECOURSE_ONLY' } },
    })
    return liveCourseIds.map(
      (id) => res.find(({ liveCourseId }) => liveCourseId === id)?.price ?? 0
    )
  }

  getLiveCoursePackages = async (liveCourseId: string) => {
    return await this.prisma.liveCourse
      .findUnique({
        where: { id: liveCourseId },
      })
      .liveCoursePackages()
  }

  create = async (liveCoursePackageData: CreateLiveCoursePackageBody) => {
    return await this.prisma.liveCoursePackage.create({
      data: liveCoursePackageData,
    })
  }

  update = async (liveCoursePackageData: UpdateLiveCoursePackageBody) => {
    return await this.prisma.liveCoursePackage.update(
      this.liveCoursePackageAdapter.updateArgs(liveCoursePackageData)
    )
  }

  delete = async (liveCoursePackageData: DeleteLiveCoursePackageBody) => {
    return await this.prisma.liveCoursePackage.delete({
      where: {
        id: liveCoursePackageData.id,
      },
    })
  }
}

container.registerSingleton<LiveCoursePackageService>()
