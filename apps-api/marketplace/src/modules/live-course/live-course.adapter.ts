import { container } from '@app/container'
import { addDays } from 'date-fns'

import { Prisma } from '@luminate/database'
import {
  AddLiveCourseExamBody,
  AddLiveCourseExamTutorialBody,
  AddLiveCourseExerciseBody,
  AddLiveCourseFundamentalCourseBody,
  AddLiveCourseMockExamBody,
  CreateLiveCourseChatRoomBody,
  DeleteLiveCourseChatRoomBody,
  FindManyLiveCourseQueryParams,
  FindManyLiveCourseWhereArgs,
  LiveCourseDeleteArgs,
  LiveCourseInformationUpdateArgs,
  LiveCoursePackageCreateInput,
  UpdateLiveCourseChatRoomBody,
} from '@luminate/rest'

import { LiveCourseCreateArgsWithStreamKey, LiveSessionCreateInputWithStreamKey } from '.'

export class LiveCourseAdapter {
  findManyArgs(args: FindManyLiveCourseQueryParams): Prisma.LiveCourseFindManyArgs {
    if (!args?.where) {
      return {
        ...args,
        where: {
          OR: [{ lastEnrollmentDate: { gte: new Date() } }, { lastEnrollmentDate: null }],
        },
      }
    }
    return {
      ...args,
      where: this.findManyWhere(args.where),
    }
  }

  findManyWhere(input: FindManyLiveCourseWhereArgs): Prisma.LiveCourseWhereInput {
    return {
      isActive: input.isActive,
      name: input.name ? { contains: input.name, mode: 'insensitive' } : undefined,
      type: input.liveCourseType ? { in: input.liveCourseType } : undefined,
      tutorId: input.tutorIds ? { in: input.tutorIds } : undefined,
      basePlanType: input.basePlanTypes ? { in: input.basePlanTypes } : undefined,
      subjectId: input.subjectIds ? { in: input.subjectIds } : undefined,
      isRecommended:
        input.isRecommended !== undefined ? { equals: input.isRecommended } : undefined,
      startDate: input.startDate ? { gte: input.startDate } : undefined,
      endDate: input.endDate ? { lte: input.endDate } : undefined,
      grades: input.grades ? { hasSome: input.grades } : undefined,
      OR: [{ lastEnrollmentDate: { gte: new Date() } }, { lastEnrollmentDate: null }],
    }
  }
  createLiveSessionInput(
    input: LiveSessionCreateInputWithStreamKey
  ): Prisma.LiveSessionCreateManyLiveCourseInput {
    return {
      name: input.name,
      description: input.description,
      streamInputId: input.streamInputId,
      startTime: input.startTime,
      endTime: input.endTime,
      streamKey: input.streamKey,
      isTrialSession: input.isTrialSession,
    }
  }

  createLiveCoursePackageInput(
    input: LiveCoursePackageCreateInput
  ): Prisma.LiveCoursePackageCreateManyLiveCourseInput {
    return {
      title: input.title,
      price: input.price,
      description: input.description,
      durationUnit: input.durationUnit,
      duration: input.duration,
      hasShipping: input.hasShipping,
      packageType: input.packageType,
    }
  }

  createLiveCourseArgs(args: LiveCourseCreateArgsWithStreamKey) {
    return {
      data: {
        name: args.name,
        description: args.description,
        startDate: args.startDate ?? new Date(0),
        endDate: args.endDate ?? new Date(0),
        onlinePrice: args.onlinePrice,
        originalOnlinePrice: args.originalOnlinePrice,
        onsitePrice: args.onsitePrice,
        originalOnsitePrice: args.originalOnsitePrice,
        lastEnrollmentDate: args.lastEnrollmentDate,
        expiresAt: args.endDate ? addDays(new Date(args.endDate), 30) : undefined,
        isActive: true,
        isRecommended: false,
        subjectId: args.subjectId,
        tutorId: args.tutorId,
        examTutorialIds: args.examTutorialIds,
        grades: args.grades,
        basePlanType: args.basePlanType,
        liveSessions: {
          createMany: {
            data: args.liveSessions.map(this.createLiveSessionInput),
          },
        },
        chatRooms: {
          createMany: {
            data: args.chatRooms,
          },
        },
        examIds: args.examIds,
        exerciseIds: args.exerciseIds,
        fundamentalCoursesDescription: args.fundamentalCoursesDescription,
        paymentRemark: args.paymentRemark,
        examsDescription: args.examsDescription,
        mockExamsDescription: args.mockExamsDescription,
        hasShipping: args.hasShipping,
        hasPickUp: args.hasPickUp,
        pickupAddress: args.pickupAddress,
        type: args.type,
        aboutCourse: args.aboutCourse,
        suggestedNextCourses: {
          connect: args.suggestedNextCourseIds.map((id) => ({ id })),
        },
        suggestedPrerequisiteCourses: {
          connect: args.suggestedPrerequisiteCourseIds.map((id) => ({ id })),
        },
        fundamentalCourses: {
          createMany: {
            data: args.fundamentalCourses,
          },
        },
        mockExams: {
          createMany: {
            data: args.mockExams,
          },
        },
        shelfLifeDuration: args.shelfLifeDuration,
        shelfLifeUnit: args.shelfLifeUnit,
        addons: {
          createMany: {
            data: args.addons,
          },
        },
        liveCourseImageDescription: {
          createMany: {
            data: Array.from({ length: args.imagesDescriptionCount })
              .fill(null)
              .map((_, index) => ({
                order: index,
              })),
          },
        },
        onsiteMaxSeats: args.onsiteMaxSeats,
        playbackDurationLimit: args.playbackDurationLimit,
        limitType: args.limitType,
        fundamentalCourseRequiresSubscription: args.fundamentalCourseRequiresSubscription,
        examRequiresSubscription: args.examRequiresSubscription,
        examTutorialRequiresSubscription: args.examTutorialRequiresSubscription,
        recordingRequiresSubscription: args.recordingRequiresSubscription,
      },
      include: {
        liveSessions: true,
        liveCourseImageDescription: true,
      },
    } satisfies Prisma.LiveCourseCreateArgs
  }

  updateInformationArgs(args: LiveCourseInformationUpdateArgs): Prisma.LiveCourseUpdateArgs {
    return {
      where: { id: args.id },
      data: {
        name: args.name ? args.name : undefined,
        description: args.description ? args.description : undefined,
        subjectId: args.subjectId ? args.subjectId : undefined,
        grades: args.grades ? args.grades : undefined,
        basePlanType: args.basePlanType ? args.basePlanType : undefined,
        hasShipping: args.hasShipping !== undefined ? args.hasShipping : undefined,
        hasPickUp: args.hasPickUp !== undefined ? args.hasPickUp : undefined,
        pickupAddress: args.pickupAddress ? args.pickupAddress : undefined,
        playbackDurationLimit:
          args.playbackDurationLimit !== undefined ? args.playbackDurationLimit : undefined,
        limitType: args.limitType ? args.limitType : undefined,
        isActive: args.isActive !== undefined ? args.isActive : undefined,
        isRecommended: args.isRecommended,
        paymentRemark: args.paymentRemark ? args.paymentRemark : undefined,
        liveSessionsDescription: args.liveSessionsDescription ?? undefined,
        mockExamsDescription: args.mockExamsDescription ?? undefined,
        examsDescription: args.examsDescription ?? undefined,
        fundamentalCoursesDescription: args.fundamentalCoursesDescription ?? undefined,
        startDate: args.startDate ? args.startDate : undefined,
        endDate: args.endDate ? args.endDate : undefined,
        lastEnrollmentDate: args.lastEnrollmentDate ? args.lastEnrollmentDate : undefined,
        expiresAt: args.endDate ? addDays(args.endDate, 30) : undefined,
      },
    }
  }

  deleteLiveCourseArgs(args: LiveCourseDeleteArgs): Prisma.LiveCourseDeleteArgs {
    return {
      where: { id: args.id },
    }
  }

  addFundamentalCourseArgs(args: AddLiveCourseFundamentalCourseBody): Prisma.LiveCourseUpdateArgs {
    return {
      where: { id: args.liveCourseId },
      data: {
        fundamentalCourses: {
          create: {
            fundamentalCourseId: args.fundamentalCourseId,
            sheetUrl: args.sheetUrl,
          },
        },
      },
    }
  }

  addExerciseArgs(args: AddLiveCourseExerciseBody): Prisma.LiveCourseUpdateArgs {
    return {
      where: { id: args.liveCourseId },
      data: {
        exerciseIds: {
          push: args.exerciseId,
        },
      },
    }
  }

  addExamArgs(args: AddLiveCourseExamBody): Prisma.LiveCourseUpdateArgs {
    return {
      where: { id: args.liveCourseId },
      data: {
        examIds: {
          push: args.examId,
        },
      },
    }
  }

  addExamTutorialArgs(args: AddLiveCourseExamTutorialBody): Prisma.LiveCourseUpdateArgs {
    return {
      where: { id: args.liveCourseId },
      data: {
        examTutorialIds: {
          push: args.examTutorialId,
        },
      },
    }
  }

  addMockExamArgs(args: AddLiveCourseMockExamBody): Prisma.LiveCourseUpdateArgs {
    return {
      where: { id: args.liveCourseId },
      data: {
        mockExams: {
          create: args.mockExam,
        },
      },
    }
  }

  createChatRoomArgs(args: CreateLiveCourseChatRoomBody): Prisma.LiveCourseUpdateArgs {
    return {
      where: { id: args.liveCourseId },
      data: {
        chatRooms: {
          create: args.data,
        },
      },
    }
  }

  updateChatRoomArgs(args: UpdateLiveCourseChatRoomBody): Prisma.LiveCourseUpdateArgs {
    return {
      where: { id: args.liveCourseId },
      data: {
        chatRooms: {
          update: {
            data: {
              url: args.data.url ? args.data.url : undefined,
              platform: args.data.platform ? args.data.platform : undefined,
            },
            where: {
              id: args.chatRoomId,
            },
          },
        },
      },
    }
  }

  deleteChatRoomArgs(args: DeleteLiveCourseChatRoomBody): Prisma.LiveCourseUpdateArgs {
    return {
      where: { id: args.liveCourseId },
      data: {
        chatRooms: {
          delete: {
            id: args.chatRoomId,
          },
        },
      },
    }
  }
}

container.registerSingleton<LiveCourseAdapter, LiveCourseAdapter>()
