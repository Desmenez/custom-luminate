import { z } from 'zod'

import {
  LiveCourseAddonModel,
  LiveCourseChatRoomModel,
  LiveCourseModel,
  LiveCoursePackageModel,
} from '@luminate/database'

import { LiveSessionCreateInput } from '../../live-session'

export const LiveCourseChatRoomInput = LiveCourseChatRoomModel.pick({
  platform: true,
  url: true,
})
export type LiveCourseChatRoomInput = z.infer<typeof LiveCourseChatRoomInput>

export const LiveCoursePackageCreateInput = LiveCoursePackageModel.pick({
  title: true,
  description: true,
  price: true,
  packageType: true,
  duration: true,
  durationUnit: true,
  hasShipping: true,
})
export type LiveCoursePackageCreateInput = z.infer<typeof LiveCoursePackageCreateInput>

export const MockExamCreateInput = z.object({
  mockExamGroupId: z.string(),
  url: z.string(),
})

export const LiveCourseCreateArgs = LiveCourseModel.pick({
  name: true,
  description: true,
  subjectId: true,
  isRecommended: true,
  tutorId: true,
  startDate: true,
  endDate: true,
  grades: true,
  basePlanType: true,
  examTutorialIds: true,
  examIds: true,
  paymentRemark: true,
  fundamentalCoursesDescription: true,
  examsDescription: true,
  mockExamsDescription: true,
  hasShipping: true,
  hasPickUp: true,
  pickupAddress: true,
  type: true,
  aboutCourse: true,
  shelfLifeDuration: true,
  shelfLifeUnit: true,
  onlinePrice: true,
  onsitePrice: true,
  onsiteMaxSeats: true,
  originalOnlinePrice: true,
  originalOnsitePrice: true,
  enableRecordingPlayback: true,
  onsiteAddress: true,
  exerciseIds: true,
  playbackDurationLimit: true,
  limitType: true,
  fundamentalCourseRequiresSubscription: true,
  examRequiresSubscription: true,
  examTutorialRequiresSubscription: true,
  recordingRequiresSubscription: true,
}).extend({
  liveSessions: z.array(
    LiveSessionCreateInput.pick({
      name: true,
      description: true,
      startTime: true,
      endTime: true,
      isTrialSession: true,
    })
  ),
  chatRooms: z.array(LiveCourseChatRoomInput),
  startDate: z.string().nullable(),
  endDate: z.string().nullable(),
  lastEnrollmentDate: z.string().nullable(),
  suggestedNextCourseIds: z.array(z.string()),
  suggestedPrerequisiteCourseIds: z.array(z.string()),
  fundamentalCourses: z.array(
    z.object({
      fundamentalCourseId: z.string(),
      sheetUrl: z.string().nullable(),
    })
  ),
  imagesDescriptionCount: z.number(),
  mockExams: z.array(MockExamCreateInput),
  addons: z.array(
    LiveCourseAddonModel.pick({
      name: true,
      price: true,
      durationDays: true,
    })
  ),
})
export type LiveCourseCreateArgs = z.infer<typeof LiveCourseCreateArgs>

export const FileUploadDetails = z.object({
  url: z.string(),
  token: z.string(),
})
export type FileUploadDetails = z.infer<typeof FileUploadDetails>

export const CreateLiveCourseResponse = z.object({
  id: z.string(),
  courseThumbnailUploadUrl: FileUploadDetails,
  courseCoverUploadUrl: FileUploadDetails,
  courseSticketUploadUrl: FileUploadDetails,
  courseHeroUploadUrl: FileUploadDetails,
  courseHeroMobileUploadUrl: FileUploadDetails,
  liveSessions: z.array(
    z.object({
      id: z.string(),
      sheetUploadUrl: FileUploadDetails,
    })
  ),
  liveCourseImageDescription: z.array(
    z.object({
      id: z.string(),
      order: z.number(),
      imageUploadUrl: FileUploadDetails,
    })
  ),
})
export type CreateLiveCourseResponse = z.infer<typeof CreateLiveCourseResponse>

export const LiveCourseInformationUpdateArgs = LiveCourseModel.pick({
  id: true,
  name: true,
  description: true,
  subjectId: true,
  tutorId: true,
  grades: true,
  basePlanType: true,
  hasShipping: true,
  hasPickUp: true,
  pickupAddress: true,
  playbackDurationLimit: true,
  limitType: true,
  isActive: true,
  isRecommended: true,
  paymentRemark: true,
  liveSessionsDescription: true,
  fundamentalCoursesDescription: true,
  examsDescription: true,
  mockExamsDescription: true,
  startDate: true,
  endDate: true,
  lastEnrollmentDate: true,
})
  .partial()
  .required({
    id: true,
  })
export type LiveCourseInformationUpdateArgs = z.infer<typeof LiveCourseInformationUpdateArgs>

export const LiveCourseDeleteArgs = LiveCourseModel.pick({
  id: true,
})
export type LiveCourseDeleteArgs = z.infer<typeof LiveCourseDeleteArgs>

export const LiveCourseCommentCreateInput = z.object({
  description: z.string().nullable(),
  stars: z.number().min(0).max(5),
  liveCourseId: z.string(),
})
export type LiveCourseCommentCreateInput = z.infer<typeof LiveCourseCommentCreateInput>

export const LiveCourseCommentUpdateInput = LiveCourseCommentCreateInput.omit({ stars: true })
export type LiveCourseCommentUpdateInput = z.infer<typeof LiveCourseCommentUpdateInput>

export const LiveCourseCommentDeleteInput = z.object({
  userId: z.string(),
  liveCourseId: z.string(),
})
export type LiveCourseCommentDeleteInput = z.infer<typeof LiveCourseCommentDeleteInput>

export const RedeemTrialLiveCourseBody = z.object({
  liveSessionId: z.string(),
})
export type RedeemTrialLiveCourseBody = z.infer<typeof RedeemTrialLiveCourseBody>

export const AddLiveCourseFundamentalCourseBody = z.object({
  liveCourseId: z.string(),
  fundamentalCourseId: z.string(),
  sheetUrl: z.string().nullable(),
})
export type AddLiveCourseFundamentalCourseBody = z.infer<typeof AddLiveCourseFundamentalCourseBody>

export const RemoveLiveCourseFundamentalCourseBody = z.object({
  liveCourseId: z.string(),
  fundamentalCourseId: z.string(),
})
export type RemoveLiveCourseFundamentalCourseBody = z.infer<
  typeof RemoveLiveCourseFundamentalCourseBody
>

export const AddLiveCourseExerciseBody = z.object({
  liveCourseId: z.string(),
  exerciseId: z.string(),
})
export type AddLiveCourseExerciseBody = z.infer<typeof AddLiveCourseExerciseBody>

export const RemoveLiveCourseExerciseBody = z.object({
  liveCourseId: z.string(),
  exerciseId: z.string(),
})
export type RemoveLiveCourseExerciseBody = z.infer<typeof RemoveLiveCourseExerciseBody>

export const AddLiveCourseExamBody = z.object({
  liveCourseId: z.string(),
  examId: z.string(),
})
export type AddLiveCourseExamBody = z.infer<typeof AddLiveCourseExamBody>

export const RemoveLiveCourseExamBody = z.object({
  liveCourseId: z.string(),
  examId: z.string(),
})
export type RemoveLiveCourseExamBody = z.infer<typeof RemoveLiveCourseExamBody>

export const AddLiveCourseExamTutorialBody = z.object({
  liveCourseId: z.string(),
  examTutorialId: z.string(),
})
export type AddLiveCourseExamTutorialBody = z.infer<typeof AddLiveCourseExamTutorialBody>

export const RemoveLiveCourseExamTutorialBody = z.object({
  liveCourseId: z.string(),
  examTutorialId: z.string(),
})
export type RemoveLiveCourseExamTutorialBody = z.infer<typeof RemoveLiveCourseExamTutorialBody>

export const AddLiveCourseMockExamBody = z.object({
  liveCourseId: z.string(),
  mockExam: MockExamCreateInput,
})
export type AddLiveCourseMockExamBody = z.infer<typeof AddLiveCourseMockExamBody>

export const RemoveLiveCourseMockExamBody = z.object({
  liveCourseId: z.string(),
  mockExamId: z.string(),
})
export type RemoveLiveCourseMockExamBody = z.infer<typeof RemoveLiveCourseMockExamBody>

export const CreateLiveCourseChatRoomBody = z.object({
  liveCourseId: z.string(),
  data: LiveCourseChatRoomInput,
})
export type CreateLiveCourseChatRoomBody = z.infer<typeof CreateLiveCourseChatRoomBody>

export const UpdateLiveCourseChatRoomBody = z.object({
  liveCourseId: z.string(),
  chatRoomId: z.string(),
  data: LiveCourseChatRoomInput.partial(),
})
export type UpdateLiveCourseChatRoomBody = z.infer<typeof UpdateLiveCourseChatRoomBody>

export const DeleteLiveCourseChatRoomBody = z.object({
  liveCourseId: z.string(),
  chatRoomId: z.string(),
})
export type DeleteLiveCourseChatRoomBody = z.infer<typeof DeleteLiveCourseChatRoomBody>
