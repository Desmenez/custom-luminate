import { z } from 'zod'

import {
  BasePlanType,
  FundamentalCourseModel,
  LiveCourseAddonModel,
  LiveCourseChatRoomModel,
  LiveCourseCommentModel,
  LiveCourseImageDescriptionModel,
  LiveCourseModel,
  LiveCoursePackageModel,
  LiveCourseType,
  LiveCoursesOnUsersModel,
  LiveSessionModel,
  ShippingAddressModel,
} from '@luminate/database'

import { PaymentLiveCourseFeature } from '../../payment'
import { FileUploadDetails } from './mutation'

export const LiveCourseForPreview = LiveCourseModel.pick({
  id: true,
  name: true,
  type: true,
  description: true,
  courseThumbnailUrl: true,
  courseCoverUrl: true,
  courseStickerUrl: true,
  subjectId: true,
  startDate: true,
  endDate: true,
  liveSessionsDescription: true,
  isRecommended: true,
  onlinePrice: true,
  onsitePrice: true,
  basePlanType: true,
}).extend({
  isMyCourse: z.literal(false),
  tutor: z
    .object({
      tutorIconUrl: z.string().nullable(),
      displayName: z.string().nullable(),
    })
    .nullable(),
  subject: z
    .object({
      code: z.string(),
      name: z.string(),
    })
    .nullable(),
})
export type LiveCourseForPreview = z.infer<typeof LiveCourseForPreview>

export const UserStatus = z.object({
  isAuthenticated: z.boolean(),
  isEnrolled: z.boolean(),
  isSubscribed: z.boolean(),
})
export type UserStatus = z.infer<typeof UserStatus>

export const UpcomingSession = LiveSessionModel.pick({
  id: true,
  name: true,
  startTime: true,
})
  .extend({
    isLiving: z.boolean(),
  })
  .nullable()
export type UpcomingSession = z.infer<typeof UpcomingSession>

export const LivingSession = LiveSessionModel.pick({
  id: true,
  name: true,
  startTime: true,
}).nullable()
export type LivingSession = z.infer<typeof LivingSession>

export const LiveCourseResponse = LiveCourseModel.pick({
  id: true,
  name: true,
  type: true,
  description: true,
  courseThumbnailUrl: true,
  courseCoverUrl: true,
  courseStickerUrl: true,
  courseHeroUrl: true,
  courseHeroMobileUrl: true,
  subjectId: true,
  enrolled: true,
  liveSessionsDescription: true,
  hasPickUp: true,
  hasShipping: true,
  pickupAddress: true,
  paymentRemark: true,
  fundamentalsCourseIds: true,
  exerciseIds: true,
  examTutorialIds: true,
  examIds: true,
  mockExamIds: true,
  isRecommended: true,
  onlinePrice: true,
  onsitePrice: true,
  originalOnlinePrice: true,
  originalOnsitePrice: true,
  basePlanType: true,
  shelfLifeDuration: true,
  shelfLifeUnit: true,
  aboutCourse: true,
  onsiteAddress: true,
  fundamentalCourseRequiresSubscription: true,
  exerciseRequiresSubscription: true,
  enableRecordingPlayback: true,
  recordingRequiresSubscription: true,
  examTutorialRequiresSubscription: true,
  examRequiresSubscription: true,
}).extend({
  chatRooms: z.array(LiveCourseChatRoomModel),
  upcomingSession: UpcomingSession,
  tutor: z
    .object({
      tutorIconUrl: z.string().nullable(),
      displayName: z.string().nullable(),
      name: z.string(),
      experience: z.string().nullable(),
      organizationName: z.string().nullable(),
      id: z.string(),
      tutorFileUrl: z.string().nullable(),
    })
    .nullable(),
  subject: z
    .object({
      id: z.string(),
      code: z.string(),
      name: z.string(),
      mainColor: z.string().nullable(),
    })
    .nullable(),
  liveCourseOnUser: LiveCoursesOnUsersModel.extend({
    shippingAddress: ShippingAddressModel.nullable(),
  }).nullable(),
  features: z.array(z.nativeEnum(PaymentLiveCourseFeature)),
  userStatus: UserStatus,
  startDate: z.string(),
  endDate: z.string(),
  lastEnrollmentDate: z.string().nullable(),
  expiresAt: z.string().nullable(),
  suggestedNextCourses: z.array(LiveCourseForPreview),
  suggestedPrerequisiteCourses: z.array(LiveCourseForPreview),
  fundamentalCourses: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      subject: z
        .object({
          code: z.string(),
        })
        .nullable(),
      sheetUrl: z.string().nullable(),
    })
  ),
  exams: z.array(
    z.object({
      code: z.string(),
      name: z.string(),
    })
  ),
  examTutorials: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      subject: z
        .object({
          code: z.string(),
        })
        .nullable(),
    })
  ),
  mockExams: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
      url: z.string(),
    })
  ),
  liveSessions: z.array(
    LiveSessionModel.pick({
      id: true,
      name: true,
      description: true,
      sheetUrl: true,
      isTrialSession: true,
    }).extend({
      startTime: z.string(),
      endTime: z.string(),
      exercise: z
        .object({
          id: z.string(),
          name: z.string(),
          subject: z
            .object({
              code: z.string(),
            })
            .nullable(),
        })
        .nullable(),
      timestampSeconds: z.number().nullable(),
      videoLengthSeconds: z.number().nullable(),
    })
  ),
  liveTrialSessionId: z.string().nullable(),
  liveCourseImageDescription: z.array(LiveCourseImageDescriptionModel),
})
export type LiveCourseResponse = z.infer<typeof LiveCourseResponse>

export const AdminLiveCourseResponse = LiveCourseModel.extend({
  courseThumbnailUploadUrl: FileUploadDetails,
  courseCoverUploadUrl: FileUploadDetails,
  courseStickerUploadUrl: FileUploadDetails,
  courseHeroUploadUrl: FileUploadDetails,
  courseHeroMobileUploadUrl: FileUploadDetails,
  tutor: z.object({
    id: z.string(),
    name: z.string(),
  }),
  subject: z.object({
    id: z.string(),
    name: z.string(),
  }),
  chatRooms: z.array(LiveCourseChatRoomModel),
  addons: z.array(LiveCourseAddonModel),
  fundamentalCourses: z.array(
    FundamentalCourseModel.extend({
      name: z.string(),
    })
  ),
  liveSessions: z.array(LiveSessionModel.extend({ sheetUploadUrl: FileUploadDetails })),
  exams: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
    })
  ),
  examTutorials: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
    })
  ),
  mockExams: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
    })
  ),
  suggestedNextCourses: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
    })
  ),
  suggestedPrerequisiteCourses: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
    })
  ),
  imageDescriptions: z.array(
    LiveCourseImageDescriptionModel.extend({
      imageUploadUrl: FileUploadDetails,
    })
  ),
})
export type AdminLiveCourseResponse = z.infer<typeof AdminLiveCourseResponse>

export const FindUniqueLiveCoursePathParams = z.object({
  id: z.string(),
})
export type FindUniqueLiveCoursePathParams = z.infer<typeof FindUniqueLiveCoursePathParams>

export const FindManyLiveCourseWhereArgs = z.object({
  name: z.string().optional(),
  liveCourseType: z.array(z.nativeEnum(LiveCourseType)).optional(),
  tutorIds: z.array(z.string()).optional(),
  grades: z.array(z.number()).optional(),
  basePlanTypes: z.array(z.nativeEnum(BasePlanType)).optional(),
  subjectIds: z.array(z.string()).optional(),
  isRecommended: z.boolean().optional(),
  isActive: z.boolean().optional(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
})
export type FindManyLiveCourseWhereArgs = z.infer<typeof FindManyLiveCourseWhereArgs>

export const FindManyLiveCourseOrderByArgs = z.object({
  createdAt: z.enum(['asc', 'desc']).optional(),
  updatedAt: z.enum(['asc', 'desc']).optional(),
  deletedAt: z.enum(['asc', 'desc']).optional(),
  name: z.enum(['asc', 'desc']).optional(),
  isActive: z.enum(['asc', 'desc']).optional(),
  startDate: z.enum(['asc', 'desc']).optional(),
  popularity: z.enum(['asc', 'desc']).optional(),
  price: z.enum(['asc', 'desc']).optional(),
})
export type FindManyLiveCourseOrderByArgs = z.infer<typeof FindManyLiveCourseOrderByArgs>

export const FindManyLiveCourseQueryParams = z
  .object({
    where: FindManyLiveCourseWhereArgs.optional(),
    orderBy: FindManyLiveCourseOrderByArgs.optional(),
  })
  .optional()
export type FindManyLiveCourseQueryParams = z.infer<typeof FindManyLiveCourseQueryParams>

export const IsLiveCourseUserCommentedInput = z.object({
  liveCourseId: z.string(),
})
export type IsLiveCourseUserCommentedInput = z.infer<typeof IsLiveCourseUserCommentedInput>

export const IsLiveCourseUserCommentedResponse = z.object({
  isCommented: z.boolean(),
})
export type IsLiveCourseUserCommentedResponse = z.infer<typeof IsLiveCourseUserCommentedResponse>

export const GetLiveCourseCommentsArgs = z.object({
  take: z.number().optional(),
  skip: z.number().optional(),
  liveCourseId: z.string(),
})
export type GetLiveCourseCommentsArgs = z.infer<typeof GetLiveCourseCommentsArgs>

export const GetLiveCourseCommentsResponse = z.object({
  comments: z.array(
    LiveCourseCommentModel.extend({
      isMyComment: z.boolean(),
      user: z
        .object({
          displayName: z.string(),
          profileUrl: z.string().nullable(),
        })
        .nullable(),
    })
  ),
})
export type GetLiveCourseCommentsResponse = z.infer<typeof GetLiveCourseCommentsResponse>

export const GetLiveCourseCommentsTotalAndRatingResponse = z.object({
  total: z.number(),
  rating: z.number(),
  isUserCommented: z.boolean(),
})
export type GetLiveCourseCommentsTotalAndRatingResponse = z.infer<
  typeof GetLiveCourseCommentsTotalAndRatingResponse
>

export const GetLiveCoursePackagesPathParams = z.object({
  liveCourseId: z.string(),
})
export type GetLiveCoursePackagesPathParams = z.infer<typeof GetLiveCoursePackagesPathParams>

export const GetLiveCoursePackagesResponse = z.array(LiveCoursePackageModel)
export type GetLiveCoursePackagesResponse = z.infer<typeof GetLiveCoursePackagesResponse>

export const GetSuggestedLiveCoursesResponse = z.array(LiveCourseForPreview)
export type GetSuggestedLiveCoursesResponse = z.infer<typeof GetSuggestedLiveCoursesResponse>

export const MyLiveCourseForPreview = LiveCourseForPreview.extend({
  isMyCourse: z.literal(true),
  updatedAt: z.coerce.date(),
  upcomingSession: UpcomingSession,
  recentLiveSessionId: z.string().nullable(),
  recentLiveSessionTimestampSeconds: z.number().nullable(),
  recentLiveSessionVideoLengthSeconds: z.number().nullable(),
  recentLiveSessionName: z.string().nullable(),
})
export type MyLiveCourseForPreview = z.infer<typeof MyLiveCourseForPreview>

export const GetMyCoursesQueryParams = z.object({
  take: z.number().optional(),
})
export const GetMyCoursesResponse = z.array(MyLiveCourseForPreview)
export type GetMyCoursesResponse = z.infer<typeof GetMyCoursesResponse>

export const FindManyLiveCourseResponse = z.array(
  z.discriminatedUnion('isMyCourse', [LiveCourseForPreview, MyLiveCourseForPreview])
)
export type FindManyLiveCourseResponse = z.infer<typeof FindManyLiveCourseResponse>

export const ExpiredCoursePreview = LiveCourseModel.pick({
  id: true,
  name: true,
  courseThumbnailUrl: true,
})
export type ExpiredCoursePreview = z.infer<typeof ExpiredCoursePreview>

export const GetMyExpiredCoursesResponse = z.array(ExpiredCoursePreview)
export type GetMyExpiredCoursesResponse = z.infer<typeof GetMyExpiredCoursesResponse>

export const FindManyLiveCourseAdminWhereArgs = z.object({
  name: z.string().optional(),
  liveCourseType: z.nativeEnum(LiveCourseType).optional(),
  isRecommended: z.boolean().optional(),
})
export type FindManyLiveCourseAdminWhereArgs = z.infer<typeof FindManyLiveCourseWhereArgs>

export const FindManyLiveCourseAdminOrderByArgs = z.object({
  createdAt: z.enum(['asc', 'desc']).optional(),
  updatedAt: z.enum(['asc', 'desc']).optional(),
  name: z.enum(['asc', 'desc']).optional(),
  startDate: z.enum(['asc', 'desc']).optional(),
  endDate: z.enum(['asc', 'desc']).optional(),
  enrolled: z.enum(['asc', 'desc']).optional(),
})
export type FindManyLiveCourseAdminOrderByArgs = z.infer<typeof FindManyLiveCourseAdminOrderByArgs>

export const FindManyLiveCourseAdminQueryParams = z
  .object({
    where: FindManyLiveCourseAdminWhereArgs.optional(),
    orderBy: FindManyLiveCourseAdminOrderByArgs.optional(),
    skip: z.number().optional(),
    take: z.number().optional(),
  })
  .optional()
export type FindManyLiveCourseAdminQueryParams = z.infer<typeof FindManyLiveCourseAdminQueryParams>

export const FindManyLiveCourseAdminResponse = z.object({
  count: z.number(),
  liveCourses: z.array(
    LiveCourseModel.pick({
      id: true,
      name: true,
      type: true,
      startDate: true,
      endDate: true,
      isRecommended: true,
      basePlanType: true,
      enrolled: true,
    }).extend({
      tutor: z
        .object({
          tutorIconUrl: z.string().nullable(),
          displayName: z.string().nullable(),
        })
        .nullable(),
    })
  ),
})
export type FindManyLiveCourseAdminResponse = z.infer<typeof FindManyLiveCourseAdminResponse>

export const GetTutorCoursesQueryParams = z.object({
  take: z.number(),
  skip: z.number(),
})
export type GetTutorCoursesQueryParams = z.infer<typeof GetTutorCoursesQueryParams>

export const TutorCourseForTable = z.object({
  id: z.string(),
  name: z.string(),
  isActive: z.boolean(),
  type: z.nativeEnum(LiveCourseType),
  createdAt: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  enrolled: z.number(),
  dailyChangePercent: z.number(),
})
export type TutorCourseForTable = z.infer<typeof TutorCourseForTable>

export const GetTutorCoursesResponse = z.object({
  total: z.number(),
  courses: z.array(TutorCourseForTable),
})
export type GetTutorCoursesResponse = z.infer<typeof GetTutorCoursesResponse>
export const TutorCourseDetailLiveSession = LiveSessionModel.pick({
  id: true,
  name: true,
  description: true,
}).extend({
  startTime: z.string(),
  endTime: z.string(),
  videoDuration: z.number().nullable(),
})

export const TutorCourseDetail = LiveCourseModel.pick({
  id: true,
  name: true,
  type: true,
  description: true,
  courseHeroUrl: true,
  courseHeroMobileUrl: true,
}).extend({
  startDate: z.string(),
  endDate: z.string(),
  liveSessions: z.array(TutorCourseDetailLiveSession),
})
export type TutorCourseDetail = z.infer<typeof TutorCourseDetail>
