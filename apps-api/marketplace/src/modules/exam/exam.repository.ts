import { container } from '@app/container'

import { BadInputError } from '@luminate/error'
import { LuminateGatewayServiceClient } from '@luminate/grpc'
import { GetExamsQueryParams } from '@luminate/rest'

export class ExamRepository {
  constructor(private luminateGatewayServiceClient: LuminateGatewayServiceClient) {}

  // TODO: Use LuminateGatewayServiceClient
  async findMany(_args: GetExamsQueryParams) {
    return [
      {
        id: '1',
        name: 'Exam 1',
        examSubject: {
          id: '1',
          name: 'Subject 1',
        },
        code: 'exam1',
      },
      {
        id: '2',
        name: 'Exam 2',
        examSubject: {
          id: '2',
          name: 'Subject 2',
        },
        code: 'exam2',
      },
    ]
  }

  async findByIds(ids: string[]) {
    if (!ids.length) {
      return []
    }
    const response = await this.luminateGatewayServiceClient.getExams({ examIds: ids })
    return response.exams.map((optionalExam) => {
      if (!optionalExam?.exam) {
        throw new BadInputError('marketplace', 'INVALID_EXAM')
      }
      return {
        ...optionalExam.exam,
      }
    })
  }
}

container.registerSingleton<ExamRepository>()
