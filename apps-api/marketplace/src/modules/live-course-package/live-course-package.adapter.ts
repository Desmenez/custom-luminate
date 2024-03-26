import { container } from '@app/container'

import { UpdateLiveCoursePackageBody } from '@luminate/rest/src/features/live-course-package/dto'

export class LiveCoursePackageAdapter {
  updateArgs = (liveCoursePackageData: UpdateLiveCoursePackageBody) => {
    const { id, ...data } = liveCoursePackageData
    return {
      data,
      where: {
        id,
      },
    }
  }
}

container.registerSingleton<LiveCoursePackageAdapter>()
