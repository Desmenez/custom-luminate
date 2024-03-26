-- CreateEnum
CREATE TYPE "QuizSavedStatus" AS ENUM ('DISPLAY', 'NOT_DISPLAY');

-- CreateEnum
CREATE TYPE "BasePlanType" AS ENUM ('FOUNDATION', 'CORE', 'ENTRANCE', 'ONET', 'POSN');

-- CreateEnum
CREATE TYPE "DurationUnit" AS ENUM ('DAY', 'MONTH');

-- CreateEnum
CREATE TYPE "LiveCoursePlaybackLimitType" AS ENUM ('MINUTE', 'PERCENT', 'NONE');

-- CreateEnum
CREATE TYPE "LiveCourseChatPlatform" AS ENUM ('FACEBOOK', 'LINE');

-- CreateEnum
CREATE TYPE "LiveCoursePackageType" AS ENUM ('LIVECOURSE_ONLY', 'WITH_SUBSCRIPTION');

-- CreateEnum
CREATE TYPE "ReceiveMethod" AS ENUM ('COURIER', 'PICKUP');

-- CreateTable
CREATE TABLE "live_course_chat_room" (
    "id" TEXT NOT NULL,
    "platform" "LiveCourseChatPlatform" NOT NULL,
    "url" TEXT NOT NULL,
    "live_course_id" TEXT NOT NULL,

    CONSTRAINT "live_course_chat_room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "live_course" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "subject_id" TEXT NOT NULL,
    "is_recommended" BOOLEAN NOT NULL,
    "background_url" TEXT,
    "is_background_uploaded" BOOLEAN NOT NULL DEFAULT false,
    "background_overlay" TEXT,
    "is_background_overlay_uploaded" BOOLEAN NOT NULL DEFAULT false,
    "tutor_id" TEXT NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3) NOT NULL,
    "enrolled" INTEGER NOT NULL DEFAULT 0,
    "last_enrollment_date" TIMESTAMP(3) NOT NULL,
    "grades" INTEGER[],
    "payment_remark" TEXT,
    "fundamental_courses_description" TEXT,
    "live_sessions_description" TEXT,
    "exams_description" TEXT,
    "mock_exams_description" TEXT,
    "is_course_material_uploaded" BOOLEAN NOT NULL DEFAULT false,
    "fundamentalsCourseIds" INTEGER[],
    "exerciseIds" INTEGER[],
    "examTutorialIds" INTEGER[],
    "examIds" INTEGER[],
    "mockExamIds" INTEGER[],
    "live_course_type" "BasePlanType" NOT NULL DEFAULT 'ENTRANCE',
    "is_active" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "playback_duration_limit" INTEGER,
    "limit_type" "LiveCoursePlaybackLimitType" NOT NULL DEFAULT 'NONE',

    CONSTRAINT "live_course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "live_course_package" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "live_course_id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "price" DOUBLE PRECISION NOT NULL,
    "duration" INTEGER NOT NULL DEFAULT 0,
    "package_type" "LiveCoursePackageType" NOT NULL DEFAULT 'LIVECOURSE_ONLY',
    "duration_unit" "DurationUnit" NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "has_shipping" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "live_course_package_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "live_courses_on_users" (
    "user_id" TEXT NOT NULL,
    "live_course_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "receive_method" "ReceiveMethod" NOT NULL DEFAULT 'COURIER',
    "shipping_address_id" TEXT,

    CONSTRAINT "live_courses_on_users_pkey" PRIMARY KEY ("user_id","live_course_id")
);

-- CreateTable
CREATE TABLE "live_course_trial_on_user" (
    "trial_session_id" TEXT NOT NULL,
    "live_course_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "live_course_trial_on_user_pkey" PRIMARY KEY ("user_id","live_course_id","trial_session_id")
);

-- CreateTable
CREATE TABLE "live_session" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "end_time" TIMESTAMP(3) NOT NULL,
    "stream_input_id" TEXT NOT NULL,
    "stream_key" TEXT NOT NULL,
    "video_id" TEXT,
    "live_course_id" TEXT NOT NULL,
    "quizSavedStatus" "QuizSavedStatus" NOT NULL DEFAULT 'NOT_DISPLAY',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "live_session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "live_course_comment" (
    "live_course_id" TEXT NOT NULL,
    "stars" INTEGER NOT NULL DEFAULT 0,
    "user_id" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3),
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "live_course_comment_pkey" PRIMARY KEY ("live_course_id","user_id")
);

-- CreateTable
CREATE TABLE "live_session_quiz" (
    "id" TEXT NOT NULL,
    "live_session_id" TEXT NOT NULL,
    "number_of_choice" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "correct_choice" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "live_session_quiz_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student_on_live_session_quiz" (
    "live_session_id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "live_session_quiz_id" TEXT NOT NULL,
    "selected_choice" INTEGER NOT NULL,

    CONSTRAINT "student_on_live_session_quiz_pkey" PRIMARY KEY ("student_id","live_session_quiz_id")
);

-- CreateTable
CREATE TABLE "student_on_live_session" (
    "live_session_id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "playbackDuration" INTEGER NOT NULL,

    CONSTRAINT "student_on_live_session_pkey" PRIMARY KEY ("student_id","live_session_id")
);

-- CreateTable
CREATE TABLE "live_course_page_ui" (
    "id" TEXT NOT NULL,
    "banners_image" TEXT[],
    "sub_banner_title" TEXT NOT NULL,
    "sub_banner_desc" TEXT NOT NULL,
    "sub_banner_background_image" TEXT NOT NULL,
    "sub_banner_background_overlay" TEXT NOT NULL,
    "sub_banner_button_title" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "live_course_page_ui_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "shipping_address" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "subdistrict" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "national_id" TEXT,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "shipping_address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "live_course_trial_on_user_user_id_live_course_id_key" ON "live_course_trial_on_user"("user_id", "live_course_id");

-- CreateIndex
CREATE INDEX "live_session_live_course_id_start_time_idx" ON "live_session"("live_course_id", "start_time");

-- AddForeignKey
ALTER TABLE "live_course_chat_room" ADD CONSTRAINT "live_course_chat_room_live_course_id_fkey" FOREIGN KEY ("live_course_id") REFERENCES "live_course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "live_course_package" ADD CONSTRAINT "live_course_package_live_course_id_fkey" FOREIGN KEY ("live_course_id") REFERENCES "live_course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "live_courses_on_users" ADD CONSTRAINT "live_courses_on_users_live_course_id_fkey" FOREIGN KEY ("live_course_id") REFERENCES "live_course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "live_courses_on_users" ADD CONSTRAINT "live_courses_on_users_shipping_address_id_fkey" FOREIGN KEY ("shipping_address_id") REFERENCES "shipping_address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "live_course_trial_on_user" ADD CONSTRAINT "live_course_trial_on_user_trial_session_id_fkey" FOREIGN KEY ("trial_session_id") REFERENCES "live_session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "live_course_trial_on_user" ADD CONSTRAINT "live_course_trial_on_user_live_course_id_fkey" FOREIGN KEY ("live_course_id") REFERENCES "live_course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "live_session" ADD CONSTRAINT "live_session_live_course_id_fkey" FOREIGN KEY ("live_course_id") REFERENCES "live_course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "live_course_comment" ADD CONSTRAINT "live_course_comment_live_course_id_fkey" FOREIGN KEY ("live_course_id") REFERENCES "live_course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "live_session_quiz" ADD CONSTRAINT "live_session_quiz_live_session_id_fkey" FOREIGN KEY ("live_session_id") REFERENCES "live_session"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_on_live_session_quiz" ADD CONSTRAINT "student_on_live_session_quiz_live_session_id_fkey" FOREIGN KEY ("live_session_id") REFERENCES "live_session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_on_live_session_quiz" ADD CONSTRAINT "student_on_live_session_quiz_live_session_quiz_id_fkey" FOREIGN KEY ("live_session_quiz_id") REFERENCES "live_session_quiz"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "student_on_live_session" ADD CONSTRAINT "student_on_live_session_live_session_id_fkey" FOREIGN KEY ("live_session_id") REFERENCES "live_session"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
