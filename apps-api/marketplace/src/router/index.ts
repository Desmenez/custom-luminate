// IMPORT CONTROLLER
import { AuthController } from '@app/modules/auth'
import { BannerController } from '@app/modules/banner'
import { BasePlanController } from '@app/modules/base-plan'
import { DevelopmentController } from '@app/modules/development'
import { ExamController } from '@app/modules/exam'
import { FileStorageController } from '@app/modules/file-storage'
import { HealthCheckController } from '@app/modules/health'
import { LiveCoursePackageController } from '@app/modules/live-course-package'
import { LiveSessionController } from '@app/modules/live-session'
import { MockExamController } from '@app/modules/mock-exam'
import { PaymentController } from '@app/modules/payment'
import { StudentController } from '@app/modules/student'
import { SubjectController } from '@app/modules/subject'
import { TutorController } from '@app/modules/tutor'
import { WebhookController } from '@app/modules/webhook'

import { container } from '../container'
import { LiveCourseController } from '../modules/live-course'
import { QuizController } from '../modules/quiz'

export function registerControllers() {
  // REGISTER CONTROLLER
  container.get<FileStorageController>()
  container.get<WebhookController>()
  container.get<PaymentController>()
  container.get<BannerController>()
  container.get<AuthController>()
  container.get<LiveCourseController>()
  container.get<LiveSessionController>()
  container.get<QuizController>()
  container.get<HealthCheckController>()
  container.get<LiveCoursePackageController>()
  container.get<BasePlanController>()
  container.get<TutorController>()
  container.get<SubjectController>()
  container.get<MockExamController>()
  container.get<ExamController>()
  container.get<StudentController>()
  container.get<DevelopmentController>()
}
