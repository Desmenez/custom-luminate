import { contract } from "../contracts";
import { authContract } from "./auth";
import { bannerContract } from "./banner";
import { basePlanContract } from "./base-plan";
import { examContract } from "./exam";
import { fileStorageContract } from "./file-storage";
import { healthContract } from "./health";
import { liveCourseContract } from "./live-course";
import { liveCoursePackageContract } from "./live-course-package";
import { liveSessionContract } from "./live-session";
import { mockExamContract } from "./mock-exam";
import { paymentContract } from "./payment";
import { quizContract } from "./quiz";
import { studentContract } from "./student";
import { subjectContract } from "./subject";
import { tutorContract } from "./tutor";
import { webhookContract } from "./webhook";

export * from "./base-plan";
export * from "./live-course";
export * from "./live-course-package";
export * from "./live-session";
export * from "./tutor";
export * from "./quiz";
export * from "./subject";
export * from "./mock-exam";
export * from "./exam";
export * from "./student";
export * from "./banner";
export * from "./payment";
export * from "./webhook";
export * from "./file-storage";

export const mainContract = contract.router({
  auth: contract.router(authContract, {
    pathPrefix: "/auth",
  }),
  liveCourse: contract.router(liveCourseContract, {
    pathPrefix: "/live-course",
  }),
  liveSession: contract.router(liveSessionContract, {
    pathPrefix: "/live-session",
  }),
  quiz: contract.router(quizContract, {
    pathPrefix: "/quiz",
  }),
  health: contract.router(healthContract, {
    pathPrefix: "/health",
  }),
  liveCoursePackage: contract.router(liveCoursePackageContract, {
    pathPrefix: "/live-course-package",
  }),
  basePlan: contract.router(basePlanContract, {
    pathPrefix: "/base-plan",
  }),
  tutor: contract.router(tutorContract, {
    pathPrefix: "/tutor",
  }),
  subject: contract.router(subjectContract, {
    pathPrefix: "/subject",
  }),
  mockExam: contract.router(mockExamContract, {
    pathPrefix: "/mock-exam",
  }),
  exam: contract.router(examContract, {
    pathPrefix: "/exam",
  }),
  student: contract.router(studentContract, {
    pathPrefix: "/student",
  }),
  banner: contract.router(bannerContract, {
    pathPrefix: "/banner",
  }),
  payment: contract.router(paymentContract, {
    pathPrefix: "/payment",
  }),
  webhook: contract.router(webhookContract, {
    pathPrefix: "/webhook",
  }),
  fileStorage: contract.router(fileStorageContract, {
    pathPrefix: "/file-storage",
  }),
});
