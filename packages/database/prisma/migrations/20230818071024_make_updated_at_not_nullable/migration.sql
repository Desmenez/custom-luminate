/*
  Warnings:

  - Made the column `updated_at` on table `TutorCard` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `live_course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `live_course_comment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `live_course_page_ui` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `live_courses_on_users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `live_session` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `shipping_address` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "TutorCard" ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "live_course" ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "live_course_comment" ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "live_course_page_ui" ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "live_courses_on_users" ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "live_session" ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "shipping_address" ALTER COLUMN "updated_at" SET NOT NULL;
