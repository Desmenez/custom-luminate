/*
  Warnings:

  - You are about to drop the column `fundamentalsCourseIds` on the `live_course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "live_course" DROP COLUMN "fundamentalsCourseIds";

-- AlterTable
ALTER TABLE "live_session" ADD COLUMN     "exercise_id" TEXT,
ADD COLUMN     "sheet_url" TEXT;

-- CreateTable
CREATE TABLE "fundamental_course" (
    "id" TEXT NOT NULL,
    "sheet_url" TEXT,
    "liveCourseId" TEXT,

    CONSTRAINT "fundamental_course_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fundamental_course" ADD CONSTRAINT "fundamental_course_liveCourseId_fkey" FOREIGN KEY ("liveCourseId") REFERENCES "live_course"("id") ON DELETE SET NULL ON UPDATE CASCADE;
