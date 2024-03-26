import { LiveCoursePackageModel } from '@luminate/database'

import { contract } from '../../contracts'
import {
  CreateLiveCoursePackageBody,
  DeleteLiveCoursePackageBody,
  UpdateLiveCoursePackageBody,
} from './dto'

export const liveCoursePackageContract = contract.router({
  createLiveCoursePackage: {
    method: 'POST',
    path: '',
    body: CreateLiveCoursePackageBody,
    responses: {
      200: LiveCoursePackageModel,
    },
  },
  updateLiveCoursePackage: {
    method: 'PATCH',
    path: '',
    body: UpdateLiveCoursePackageBody,
    responses: {
      200: LiveCoursePackageModel,
    },
  },
  deleteLiveCoursePackage: {
    method: 'DELETE',
    path: '',
    body: DeleteLiveCoursePackageBody,
    responses: {
      200: LiveCoursePackageModel,
    },
  },
})
