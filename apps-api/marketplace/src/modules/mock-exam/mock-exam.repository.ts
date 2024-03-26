import { container } from '@app/container'

import { MockExam } from '@luminate/database'
import { BadInputError } from '@luminate/error'
import { LuminateGatewayServiceClient, MockExamResponse } from '@luminate/grpc'
import { LiveCourseResponse } from '@luminate/rest'

export interface IMockExamRepository {
  findAll: () => Promise<MockExamResponse[]>
  extendFields: (mockExams: MockExam[]) => Promise<LiveCourseResponse['mockExams']>
}

export class MockExamRepository implements IMockExamRepository {
  constructor(private luminateGatewayServiceClient: LuminateGatewayServiceClient) {}

  async findAll() {
    const response = await this.luminateGatewayServiceClient.getMockExams({})
    return response.mockExams.map((optionalMockExam) => {
      if (!optionalMockExam.mockExam) {
        throw new BadInputError('marketplace', 'INVALID_MOCK_EXAM')
      }
      return optionalMockExam.mockExam
    })
  }
  async extendFields(mockExams: MockExam[]) {
    if (!mockExams.length) {
      return []
    }
    const ids = mockExams.map((mockExam) => mockExam.id)
    const response = await this.luminateGatewayServiceClient.getMockExams({
      mockExamIds: ids,
    })
    return response.mockExams.map((optionalMockExam, index) => {
      if (!optionalMockExam.mockExam) {
        throw new BadInputError('marketplace', 'INVALID_MOCK_EXAM')
      }
      return {
        ...optionalMockExam.mockExam,
        url: mockExams[index].url,
      }
    })
  }
}

container.registerTransient<IMockExamRepository, MockExamRepository>()
