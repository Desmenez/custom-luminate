/*
  Warnings:

  - Added the required column `full_price` to the `live_course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "live_course" ADD COLUMN "full_price" INTEGER;

-- UpdateTable
UPDATE "live_course" SET "full_price" = greatest("online_price", "onsite_price");

-- AlterTable NOT NULL
ALTER TABLE "live_course" ALTER COLUMN "full_price" SET NOT NULL;

