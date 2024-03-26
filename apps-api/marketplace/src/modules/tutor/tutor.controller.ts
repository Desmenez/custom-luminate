import { Controller } from '@app/common/controller'
import { container } from '@app/container'

import { BadInputError } from '@luminate/error'
import { mainContract } from '@luminate/rest'

import { TutorService } from './tutor.service'

export class TutorController extends Controller {
  constructor(private tutorService: TutorService) {
    super()

    this.register(mainContract.tutor, {
      getTutors: async () => {
        const tutors = await this.tutorService.getTutors()
        return {
          status: 200,
          body: tutors,
        }
      },
      getTutorInfo: async ({ params }) => {
        const tutor = await this.tutorService.getTutorInfo(params.tutorId)
        if (!tutor) {
          throw new BadInputError('marketplace', 'TUTOR_NOT_FOUND')
        }
        return {
          status: 200,
          body: tutor,
        }
      },
      getTutorCards: async () => {
        const tutorCards = await this.tutorService.getTutorCards()
        return {
          status: 200,
          body: tutorCards,
        }
      },
      getStudentGraph: async ({ query, request }) => {
        const tutorContext = await request.auth.requireTutorContext()
        const studentGraph = await this.tutorService.getStudentGraph(tutorContext.id, query)
        return {
          status: 200,
          body: studentGraph,
        }
      },
      getUpcomingSessions: async ({ request }) => {
        const tutorContext = await request.auth.requireTutorContext()
        const upcomingSessions = await this.tutorService.getUpcomingSessions(tutorContext.id)
        return {
          status: 200,
          body: upcomingSessions.map((session) => ({
            ...session,
            courseId: session.liveCourseId,
            startTime: session.startTime.toISOString(),
            endTime: session.endTime.toISOString(),
          })),
        }
      },
    })
  }
}

container.registerSingleton<TutorController>()
