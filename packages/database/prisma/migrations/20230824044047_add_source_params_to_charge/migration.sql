/*
  Warnings:

  - Added the required column `source_params` to the `live_course_charge` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "live_course_charge" ADD COLUMN     "source_params" TEXT NOT NULL;
