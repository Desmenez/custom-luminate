/*
  Warnings:

  - You are about to drop the column `mockExamIds` on the `live_course` table. All the data in the column will be lost.
  - Added the required column `fundamentalCourseId` to the `fundamental_course` table without a default value. This is not possible if the table is not empty.
  - Made the column `liveCourseId` on table `fundamental_course` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "fundamental_course" DROP CONSTRAINT "fundamental_course_liveCourseId_fkey";

-- AlterTable
ALTER TABLE "fundamental_course" ADD COLUMN     "fundamentalCourseId" TEXT NOT NULL,
ALTER COLUMN "liveCourseId" SET NOT NULL;

-- AlterTable
ALTER TABLE "live_course" DROP COLUMN "mockExamIds";

-- CreateTable
CREATE TABLE "mock_exam" (
    "id" TEXT NOT NULL,
    "mock_exam_group_id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "live_course_id" TEXT NOT NULL,

    CONSTRAINT "mock_exam_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "fundamental_course" ADD CONSTRAINT "fundamental_course_liveCourseId_fkey" FOREIGN KEY ("liveCourseId") REFERENCES "live_course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mock_exam" ADD CONSTRAINT "mock_exam_live_course_id_fkey" FOREIGN KEY ("live_course_id") REFERENCES "live_course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
