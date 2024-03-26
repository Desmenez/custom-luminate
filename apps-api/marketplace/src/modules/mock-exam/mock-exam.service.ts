import { container } from '@app/container'

import { IMockExamRepository } from './mock-exam.repository'

export class MockExamService {
  constructor(private readonly mockExamRepository: IMockExamRepository) {}

  getMockExams() {
    return this.mockExamRepository.findAll()
  }
}

container.registerSingleton<MockExamService, MockExamService>()
