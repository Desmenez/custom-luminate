import { Controller } from '@app/common/controller'
import { container } from '@app/container'

import { mainContract } from '@luminate/rest'

import { SubjectService } from '.'

export class SubjectController extends Controller {
  constructor(private subjectService: SubjectService) {
    super()

    this.register(mainContract.subject, {
      getSubjects: async () => {
        const subjects = await this.subjectService.getSubjects()
        return {
          status: 200,
          body: subjects,
        }
      },
    })
  }
}

container.registerSingleton<SubjectController>()
