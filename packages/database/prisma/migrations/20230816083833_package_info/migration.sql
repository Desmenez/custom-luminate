-- AlterTable
ALTER TABLE "live_course" ADD COLUMN     "enable_recording_playback" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "exam_requires_subscription" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "exam_tutorial_requires_subscription" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "exercise_requires_subscription" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "fundamental_course_requires_subscription" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "has_quiz" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "mock_exam_requires_subscription" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "online_price" INTEGER,
ADD COLUMN     "onsite_max_seats" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "onsite_price" INTEGER,
ADD COLUMN     "recording_playback_requires_subscription" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "shipping_price" INTEGER NOT NULL DEFAULT 100;

-- CreateTable
CREATE TABLE "live_course_addon" (
    "id" TEXT NOT NULL,
    "live_course_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "duration_days" INTEGER NOT NULL,

    CONSTRAINT "live_course_addon_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "live_course_addon" ADD CONSTRAINT "live_course_addon_live_course_id_fkey" FOREIGN KEY ("live_course_id") REFERENCES "live_course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
