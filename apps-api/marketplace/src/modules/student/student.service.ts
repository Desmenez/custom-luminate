import { container } from '@app/container'

import { IStudentRepository } from './student.repository'

export class StudentService {
  constructor(private readonly studentRepository: IStudentRepository) {}

  getStudentsByLiveCourseId(liveCourseId: string) {
    return this.studentRepository.findByLiveCourseId(liveCourseId)
  }
}

container.registerSingleton<StudentService, StudentService>()
