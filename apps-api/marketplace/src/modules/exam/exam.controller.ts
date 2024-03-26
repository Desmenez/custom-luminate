import { Controller } from '@app/common/controller'
import { container } from '@app/container'

import { mainContract } from '@luminate/rest'

import { ExamService } from './exam.service'

export class ExamController extends Controller {
  constructor(private readonly examService: ExamService) {
    super()

    this.register(mainContract.exam, {
      getExams: async ({ query }) => {
        const exams = await this.examService.getExams(query)
        return {
          status: 200,
          body: exams,
        }
      },
    })
  }
}

container.registerSingleton<ExamController, ExamController>()
