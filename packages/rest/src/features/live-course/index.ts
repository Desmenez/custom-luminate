import { z } from 'zod'

import {
  LiveCourseChatRoomModel,
  LiveCourseCommentModel,
  LiveCourseModel,
  LiveSessionModel,
} from '@luminate/database'

import { contract } from '../../contracts'
import {
  AdminLiveCourseResponse,
  FindManyLiveCourseAdminQueryParams,
  FindManyLiveCourseAdminResponse,
  FindManyLiveCourseQueryParams,
  FindManyLiveCourseResponse,
  FindUniqueLiveCoursePathParams,
  GetLiveCourseCommentsArgs,
  GetLiveCourseCommentsResponse,
  GetLiveCourseCommentsTotalAndRatingResponse,
  GetLiveCoursePackagesPathParams,
  GetLiveCoursePackagesResponse,
  GetMyCoursesQueryParams,
  GetMyCoursesResponse,
  GetMyExpiredCoursesResponse,
  GetSuggestedLiveCoursesResponse,
  GetTutorCoursesQueryParams,
  GetTutorCoursesResponse,
  IsLiveCourseUserCommentedInput,
  IsLiveCourseUserCommentedResponse,
  LiveCourseResponse,
  TutorCourseDetail,
} from './dto'
import {
  AddLiveCourseExamBody,
  AddLiveCourseExamTutorialBody,
  AddLiveCourseExerciseBody,
  AddLiveCourseFundamentalCourseBody,
  AddLiveCourseMockExamBody,
  CreateLiveCourseChatRoomBody,
  CreateLiveCourseResponse,
  DeleteLiveCourseChatRoomBody,
  LiveCourseCommentCreateInput,
  LiveCourseCommentDeleteInput,
  LiveCourseCommentUpdateInput,
  LiveCourseCreateArgs,
  LiveCourseDeleteArgs,
  LiveCourseInformationUpdateArgs,
  RedeemTrialLiveCourseBody,
  RemoveLiveCourseExamBody,
  RemoveLiveCourseExamTutorialBody,
  RemoveLiveCourseExerciseBody,
  RemoveLiveCourseMockExamBody,
  UpdateLiveCourseChatRoomBody,
} from './dto/mutation'

export * from './dto'

export const liveCourseContract = contract.router({
  getLiveCourseById: {
    method: 'GET',
    path: '/:id',
    pathParams: FindUniqueLiveCoursePathParams,
    responses: {
      200: LiveCourseResponse,
      404: null,
    },
    summary: 'Find unique live course',
  },
  getLiveCourses: {
    method: 'GET',
    path: '',
    query: FindManyLiveCourseQueryParams,
    responses: {
      200: FindManyLiveCourseResponse,
    },
    summary: 'Find live courses',
  },
  createLiveCourse: {
    method: 'POST',
    path: '',
    body: LiveCourseCreateArgs,
    responses: {
      200: CreateLiveCourseResponse,
    },
    summary: 'Create live course',
  },
  updateLiveCourse: {
    method: 'PATCH',
    path: '',
    body: LiveCourseInformationUpdateArgs,
    responses: {
      200: LiveCourseModel,
    },
    summary: 'Update Live Course Information',
  },
  deleteLiveCourse: {
    method: 'DELETE',
    path: '',
    body: LiveCourseDeleteArgs,
    responses: {
      200: LiveCourseModel,
    },
    summary: 'Delete Live Course',
  },
  createLiveCourseComment: {
    method: 'POST',
    path: '/comment',
    body: LiveCourseCommentCreateInput,
    responses: {
      200: LiveCourseCommentModel,
    },
  },
  updateLiveCourseComment: {
    method: 'PATCH',
    path: '/comment',
    body: LiveCourseCommentUpdateInput,
    responses: {
      200: LiveCourseCommentModel,
    },
  },
  deleteLiveCourseComment: {
    method: 'DELETE',
    path: '/comment',
    body: LiveCourseCommentDeleteInput,
    responses: {
      200: LiveCourseCommentModel,
    },
  },
  isLiveCourseUserCommented: {
    method: 'GET',
    path: '/comment/:liveCourseId/is-commented',
    pathParams: IsLiveCourseUserCommentedInput,
    responses: {
      200: IsLiveCourseUserCommentedResponse,
    },
  },
  getLiveCourseComments: {
    method: 'GET',
    path: '/comment',
    query: GetLiveCourseCommentsArgs,
    responses: {
      200: GetLiveCourseCommentsResponse,
    },
  },
  getLiveCourseCommentsTotalAndRating: {
    method: 'GET',
    path: '/comment/:liveCourseId/total-and-rating',
    pathParams: z.object({
      liveCourseId: z.string(),
    }),
    responses: {
      200: GetLiveCourseCommentsTotalAndRatingResponse,
    },
  },
  getLiveCoursePackages: {
    method: 'GET',
    path: '/:liveCourseId/package',
    pathParams: GetLiveCoursePackagesPathParams,
    responses: {
      200: GetLiveCoursePackagesResponse,
    },
  },
  redeemTrialLiveCourse: {
    method: 'POST',
    path: '/redeem-trial',
    body: RedeemTrialLiveCourseBody,
    responses: {
      200: LiveSessionModel.pick({
        id: true,
      }),
    },
  },
  addLiveCourseFundamentalCourse: {
    method: 'POST',
    path: '/fundamental-course',
    body: AddLiveCourseFundamentalCourseBody,
    responses: {
      200: LiveCourseModel,
    },
  },
  removeLiveCourseFundamentalCourse: {
    method: 'DELETE',
    path: '/fundamental-course',
    body: AddLiveCourseFundamentalCourseBody,
    responses: {
      200: null,
    },
  },
  addLiveCourseExercise: {
    method: 'POST',
    path: '/exercise',
    body: AddLiveCourseExerciseBody,
    responses: {
      200: LiveCourseModel,
    },
  },
  removeLiveCourseExercise: {
    method: 'DELETE',
    path: '/exercise',
    body: RemoveLiveCourseExerciseBody,
    responses: {
      200: LiveCourseModel,
    },
  },
  addLiveCourseExam: {
    method: 'POST',
    path: '/exam',
    body: AddLiveCourseExamBody,
    responses: {
      200: LiveCourseModel,
    },
  },
  removeLiveCourseExam: {
    method: 'DELETE',
    path: '/exam',
    body: RemoveLiveCourseExamBody,
    responses: {
      200: LiveCourseModel,
    },
  },
  addLiveCourseExamTutorial: {
    method: 'POST',
    path: '/exam-tutorial',
    body: AddLiveCourseExamTutorialBody,
    responses: {
      200: LiveCourseModel,
    },
  },
  removeLiveCourseExamTutorial: {
    method: 'DELETE',
    path: '/exam-tutorial',
    body: RemoveLiveCourseExamTutorialBody,
    responses: {
      200: LiveCourseModel,
    },
  },
  addLiveCourseMockExam: {
    method: 'POST',
    path: '/mock-exam',
    body: AddLiveCourseMockExamBody,
    responses: {
      200: LiveCourseModel,
    },
  },
  removeLiveCourseMockExam: {
    method: 'DELETE',
    path: '/mock-exam',
    body: RemoveLiveCourseMockExamBody,
    responses: {
      200: null,
    },
  },
  createLiveCourseChatRoom: {
    method: 'POST',
    path: '/chat-room',
    body: CreateLiveCourseChatRoomBody,
    responses: {
      200: z.array(LiveCourseChatRoomModel),
    },
  },
  updateLiveCourseChatRoom: {
    method: 'PATCH',
    path: '/chat-room',
    body: UpdateLiveCourseChatRoomBody,
    responses: {
      200: z.array(LiveCourseChatRoomModel),
    },
  },
  deleteLiveCourseChatRoom: {
    method: 'DELETE',
    path: '/chat-room',
    body: DeleteLiveCourseChatRoomBody,
    responses: {
      200: z.array(LiveCourseChatRoomModel),
    },
  },
  getSuggestedLiveCourses: {
    method: 'GET',
    path: '/suggested',
    responses: {
      200: GetSuggestedLiveCoursesResponse,
    },
  },
  getMyCourses: {
    method: 'GET',
    path: '/my-course',
    query: GetMyCoursesQueryParams,
    responses: {
      200: GetMyCoursesResponse,
    },
  },
  getMyExpiredCourses: {
    method: 'GET',
    path: '/my-expired-course',
    responses: {
      200: GetMyExpiredCoursesResponse,
    },
  },
  getAdminLiveCourses: {
    method: 'GET',
    path: '/all',
    query: FindManyLiveCourseAdminQueryParams,
    responses: {
      200: FindManyLiveCourseAdminResponse,
    },
    summary: 'Find all live courses for admin',
  },
  getTutorCourses: {
    method: 'GET',
    path: '/tutor',
    query: GetTutorCoursesQueryParams,
    responses: {
      200: GetTutorCoursesResponse,
    },
  },
  getTutorCourseDetail: {
    method: 'GET',
    path: '/:id/detail-tutor',
    responses: {
      200: TutorCourseDetail.nullable(),
    },
  },
  getAdminLiveCourseDetail: {
    method: 'GET',
    path: '/:id/admin',
    responses: {
      200: AdminLiveCourseResponse,
    },
  },
})
