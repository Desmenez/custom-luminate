import { container } from '@app/container'

import { LiveCoursePackageType } from '@luminate/database'
import { GetStudentsResponse } from '@luminate/rest'

export interface IStudentRepository {
  findByLiveCourseId(liveCourseId: string): Promise<GetStudentsResponse>
}

class StudentRepository implements IStudentRepository {
  async findByLiveCourseId(_liveCourseId: string) {
    return [
      {
        user: {
          id: '1',
          firstName: 'John',
          lastName: 'Doe',
          username: 'johndoe',
        },
        package: {
          id: '1',
          packageType: LiveCoursePackageType.LIVECOURSE_ONLY,
          duration: 1,
          durationUnit: 'MONTH',
        },
        receiveMethod: 'SHIPPING',
        shippingAddress: {
          address: '123 Main St',
          postalCode: '12345',
          province: 'CA',
          phone: '1234567890',
          subdistrict: 'Subdistrict',
          district: 'District',
        },
      },
      {
        user: {
          id: '2',
          firstName: 'Jane',
          lastName: 'Doe',
          username: 'janedoe',
        },
        package: {
          id: '2',
          packageType: LiveCoursePackageType.LIVECOURSE_ONLY,
          duration: 1,
          durationUnit: 'MONTH',
        },
        receiveMethod: 'SHIPPING',
        shippingAddress: {
          address: '123 Main St',
          postalCode: '12345',
          province: 'CA',
          phone: '1234567890',
          subdistrict: 'Subdistrict',
          district: 'District',
        },
      },
    ]
  }
}

container.registerTransient<IStudentRepository, StudentRepository>()
