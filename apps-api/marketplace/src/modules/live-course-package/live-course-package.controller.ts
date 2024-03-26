import { Controller } from '@app/common/controller'
import { container } from '@app/container'

import { mainContract } from '@luminate/rest'

import { LiveCoursePackageService } from './live-course-package.service'

export class LiveCoursePackageController extends Controller {
  constructor(private liveCoursePackageService: LiveCoursePackageService) {
    super()

    this.register(mainContract.liveCoursePackage, {
      createLiveCoursePackage: async ({ body }) => {
        const liveCoursePackage = await this.liveCoursePackageService.create(body)
        return {
          status: 200,
          body: liveCoursePackage,
        }
      },
      updateLiveCoursePackage: async ({ body }) => {
        const liveCoursePackage = await this.liveCoursePackageService.update(body)
        return {
          status: 200,
          body: liveCoursePackage,
        }
      },
      deleteLiveCoursePackage: async ({ body }) => {
        const liveCoursePackage = await this.liveCoursePackageService.delete(body)
        return {
          status: 200,
          body: liveCoursePackage,
        }
      },
    })
  }
}

container.registerSingleton<LiveCoursePackageController>()
