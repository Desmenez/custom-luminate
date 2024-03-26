import { Controller } from '@app/common/controller'
import { container } from '@app/container'
import { FastifyRequest } from 'fastify'

import { AuthorizationError } from '@luminate/error'
import { mainContract } from '@luminate/rest'

import { UserContext } from '../auth'
import { CommentService } from '../comment/comment.service'
import { LiveCoursePackageService } from '../live-course-package'
import { LiveCourseService } from './live-course.service'

export class LiveCourseController extends Controller {
  constructor(
    private liveCourseService: LiveCourseService,
    private commentService: CommentService,
    private liveCoursePackageService: LiveCoursePackageService
  ) {
    super()

    const getStudentInLiveCourseId = async (request: FastifyRequest, liveCourseId: string) => {
      const userContext = await request.auth.requireUserContext()
      const isUserJoinedLiveCourse = await this.liveCourseService.isUserJoinedLiveCourse(
        userContext.id,
        liveCourseId
      )
      if (!isUserJoinedLiveCourse) {
        throw new AuthorizationError('marketplace', 'FORBIDDEN_NOT_PURCHASED_COURSE')
      }
      return userContext.id
    }

    this.register(mainContract.liveCourse, {
      getLiveCourseById: async ({ params: { id }, request }) => {
        const user = await request.auth.getUserContext()
        const liveCourse = await this.liveCourseService.getLiveCourseById(id, user)

        const getUserStatus = async (user: UserContext | null) => {
          if (!user) {
            return {
              isAuthenticated: false,
              isEnrolled: false,
              isSubscribed: false,
            }
          }
          return {
            isAuthenticated: true,
            isEnrolled: await this.liveCourseService.isUserJoinedLiveCourse(user.id, id),
            isSubscribed: user.identity === 'premium',
          }
        }

        const userStatus = await getUserStatus(user)

        if (!liveCourse) {
          return {
            status: 404,
            body: null,
          }
        }
        return {
          status: 200,
          body: {
            ...liveCourse,
            userStatus,
          },
        }
      },
      getLiveCourses: async ({ query, request }) => {
        const user = await request.auth.getUserContext()
        const liveCourses = await this.liveCourseService.getLiveCourses(query, user?.id)
        return {
          status: 200,
          body: liveCourses,
        }
      },
      createLiveCourse: async ({ body }) => {
        const liveCourse = await this.liveCourseService.createLiveCourse(body)
        return {
          status: 200,
          body: liveCourse,
        }
      },
      updateLiveCourse: async ({ body }) => {
        const liveCourse = await this.liveCourseService.updateLiveCourse(body)
        return {
          status: 200,
          body: liveCourse,
        }
      },
      deleteLiveCourse: async ({ body }) => {
        const liveCourse = await this.liveCourseService.deleteLiveCourse(body)
        return {
          status: 200,
          body: liveCourse,
        }
      },
      createLiveCourseComment: async ({ body, request }) => {
        const userId = await getStudentInLiveCourseId(request, body.liveCourseId)
        const liveCourseComment = await this.commentService.createComment(userId, body)
        return {
          status: 200,
          body: liveCourseComment,
        }
      },
      updateLiveCourseComment: async ({ body, request }) => {
        const userId = await getStudentInLiveCourseId(request, body.liveCourseId)
        const liveCourseComment = await this.commentService.updateComment(userId, body)
        return {
          status: 200,
          body: liveCourseComment,
        }
      },
      deleteLiveCourseComment: async ({ body }) => {
        // TODO: check if user is allowed to delete with IAM rules
        const liveCourseComment = await this.commentService.deleteComment(body)
        return {
          status: 200,
          body: liveCourseComment,
        }
      },
      isLiveCourseUserCommented: async ({ params: { liveCourseId }, request }) => {
        const userId = await getStudentInLiveCourseId(request, liveCourseId)
        const isCommented = await this.commentService.isUserCommented(userId, liveCourseId)
        return {
          status: 200,
          body: {
            isCommented,
          },
        }
      },
      getLiveCourseComments: async ({ query, request }) => {
        const user = await request.auth.getUserContext()
        const liveCourseComments = await this.commentService.findManyComments(query, user?.id)
        return {
          status: 200,
          body: liveCourseComments,
        }
      },
      getLiveCourseCommentsTotalAndRating: async ({ request, params: { liveCourseId } }) => {
        const user = await request.auth.getUserContext()
        const response = await this.commentService.getTotalAndRating(liveCourseId, user?.id)

        return {
          status: 200,
          body: response,
        }
      },
      getLiveCoursePackages: async ({ params: { liveCourseId } }) => {
        const liveCoursePackages = await this.liveCoursePackageService.getLiveCoursePackages(
          liveCourseId
        )
        return {
          status: 200,
          body: liveCoursePackages ?? [],
        }
      },
      redeemTrialLiveCourse: async ({ body, request }) => {
        const userContext = await request.auth.getUserContext()
        if (!userContext) {
          throw new AuthorizationError('marketplace', 'INVALID_CREDENTIALS')
        }
        const trialSession = await this.liveCourseService.redeemTrialLiveCourse(
          userContext.id,
          body.liveSessionId
        )
        return {
          status: 200,
          body: trialSession,
        }
      },
      addLiveCourseFundamentalCourse: async ({ body }) => {
        const liveCourse = await this.liveCourseService.addFundamentalCourse(body)
        return {
          status: 200,
          body: liveCourse,
        }
      },
      removeLiveCourseFundamentalCourse: async ({ body }) => {
        await this.liveCourseService.removeFundamentalCourse(body)
        return {
          status: 200,
          body: null,
        }
      },
      addLiveCourseExercise: async ({ body }) => {
        const liveCourse = await this.liveCourseService.addExercise(body)
        return {
          status: 200,
          body: liveCourse,
        }
      },
      removeLiveCourseExercise: async ({ body }) => {
        const liveCourse = await this.liveCourseService.removeExercise(body)
        return {
          status: 200,
          body: liveCourse,
        }
      },
      addLiveCourseExam: async ({ body }) => {
        const liveCourse = await this.liveCourseService.addExam(body)
        return {
          status: 200,
          body: liveCourse,
        }
      },
      removeLiveCourseExam: async ({ body }) => {
        const liveCourse = await this.liveCourseService.removeExam(body)
        return {
          status: 200,
          body: liveCourse,
        }
      },
      addLiveCourseExamTutorial: async ({ body }) => {
        const liveCourse = await this.liveCourseService.addExamTutorial(body)
        return {
          status: 200,
          body: liveCourse,
        }
      },
      removeLiveCourseExamTutorial: async ({ body }) => {
        const liveCourse = await this.liveCourseService.removeExamTutorial(body)
        return {
          status: 200,
          body: liveCourse,
        }
      },
      addLiveCourseMockExam: async ({ body }) => {
        const liveCourse = await this.liveCourseService.addMockExam(body)
        return {
          status: 200,
          body: liveCourse,
        }
      },
      removeLiveCourseMockExam: async ({ body }) => {
        await this.liveCourseService.removeMockExam(body)
        return {
          status: 200,
          body: null,
        }
      },
      createLiveCourseChatRoom: async ({ body }) => {
        const liveCourseChatRooms = await this.liveCourseService.createChatRoom(body)
        return {
          status: 200,
          body: liveCourseChatRooms,
        }
      },
      updateLiveCourseChatRoom: async ({ body }) => {
        const liveCourseChatRooms = await this.liveCourseService.updateChatRoom(body)
        return {
          status: 200,
          body: liveCourseChatRooms,
        }
      },
      deleteLiveCourseChatRoom: async ({ body }) => {
        const liveCourseChatRooms = await this.liveCourseService.deleteChatRoom(body)
        return {
          status: 200,
          body: liveCourseChatRooms,
        }
      },
      getSuggestedLiveCourses: async ({ request }) => {
        const user = await request.auth.getUserContext()
        const suggestedLiveCourses = await this.liveCourseService.getSuggestedLiveCourses(user?.id)
        return {
          status: 200,
          body: suggestedLiveCourses,
        }
      },
      getMyCourses: async ({ request, query }) => {
        const user = await request.auth.requireUserContext()
        const myCourses = await this.liveCourseService.getMyCourses(user.id, query.take)
        return {
          status: 200,
          body: myCourses,
        }
      },
      getMyExpiredCourses: async ({ request }) => {
        const user = await request.auth.requireUserContext()
        const myExpiredCourses = await this.liveCourseService.getMyExpiredCourses(user.id)
        return {
          status: 200,
          body: myExpiredCourses,
        }
      },
      getAdminLiveCourses: async ({ request, query }) => {
        await request.auth.requirePermissions('live-course.live-course.get-admin')
        const liveCourses = await this.liveCourseService.getAllLiveCourses(query)
        return {
          status: 200,
          body: liveCourses,
        }
      },
      getTutorCourses: async ({ request, query }) => {
        const tutor = await request.auth.requireTutorContext()
        const tutorCourses = await this.liveCourseService.getTutorCourses(query, tutor.id)
        return {
          status: 200,
          body: tutorCourses,
        }
      },
      getTutorCourseDetail: async ({ params: { id }, request }) => {
        const tutor = await request.auth.requireTutorContext()
        const courseDetail = await this.liveCourseService.getTutorCourseDetail(tutor.id, id)
        return {
          status: 200,
          body: courseDetail,
        }
      },
      getAdminLiveCourseDetail: async ({ request, params: { id } }) => {
        await request.auth.requirePermissions('live-course.live-course.get-admin')
        const liveCourse = await this.liveCourseService.getAdminLiveCourseDetail(id)
        return {
          status: 200,
          body: liveCourse,
        }
      },
    })
  }
}

container.registerTransient<LiveCourseController, LiveCourseController>()
