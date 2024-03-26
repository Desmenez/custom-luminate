/*
  Warnings:

  - You are about to drop the column `is_taped` on the `live_course` table. All the data in the column will be lost.
  - You are about to drop the column `live_course_type` on the `live_course` table. All the data in the column will be lost.
  - Added the required column `type` to the `live_course` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LiveCourseType" AS ENUM ('LIVE', 'FUSION', 'TAPE', 'ONSITE');

-- AlterTable
ALTER TABLE "live_course" DROP COLUMN "is_taped",
DROP COLUMN "live_course_type",
ADD COLUMN     "base_plan_type" "BasePlanType" NOT NULL DEFAULT 'ENTRANCE',
ADD COLUMN     "type" "LiveCourseType" NOT NULL;
