import { container } from '@app/container'

import { GetExamsQueryParams } from '@luminate/rest/src/features/exam/dto'

import { ExamRepository } from './exam.repository'

export class ExamService {
  constructor(private readonly examRepository: ExamRepository) {}

  getExams(args: GetExamsQueryParams) {
    return this.examRepository.findMany(args)
  }
}

container.registerSingleton<ExamService, ExamService>()
