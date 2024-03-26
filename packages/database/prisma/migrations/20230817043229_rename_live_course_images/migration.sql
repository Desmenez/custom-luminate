/*
  Warnings:

  - You are about to drop the column `background_overlay` on the `live_course` table. All the data in the column will be lost.
  - You are about to drop the column `background_url` on the `live_course` table. All the data in the column will be lost.
  - You are about to drop the column `is_background_overlay_uploaded` on the `live_course` table. All the data in the column will be lost.
  - You are about to drop the column `is_background_uploaded` on the `live_course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "live_course" DROP COLUMN "background_overlay",
DROP COLUMN "background_url",
DROP COLUMN "is_background_overlay_uploaded",
DROP COLUMN "is_background_uploaded",
ADD COLUMN     "course_cover_url" TEXT,
ADD COLUMN     "course_hero_url" TEXT,
ADD COLUMN     "course_sticker_url" TEXT,
ADD COLUMN     "course_thumbnail_url" TEXT;
