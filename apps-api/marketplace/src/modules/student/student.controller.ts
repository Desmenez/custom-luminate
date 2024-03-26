import { Controller } from '@app/common/controller'
import { container } from '@app/container'

import { mainContract } from '@luminate/rest'

import { StudentService } from './student.service'

export class StudentController extends Controller {
  constructor(private readonly studentService: StudentService) {
    super()

    this.register(mainContract.student, {
      getStudentsByLiveCourseId: async ({ query }) => {
        const students = await this.studentService.getStudentsByLiveCourseId(query.liveCourseId)
        return {
          status: 200,
          body: students,
        }
      },
    })
  }
}

container.registerSingleton<StudentController, StudentController>()
