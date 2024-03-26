import { Controller } from '@app/common/controller'
import { container } from '@app/container'

import { mainContract } from '@luminate/rest'

import { MockExamService } from './mock-exam.service'

export class MockExamController extends Controller {
  constructor(private readonly mockExamService: MockExamService) {
    super()

    this.register(mainContract.mockExam, {
      getMockExams: async () => {
        const mockExams = await this.mockExamService.getMockExams()
        return {
          status: 200,
          body: mockExams,
        }
      },
    })
  }
}

container.registerSingleton<MockExamController, MockExamController>()
