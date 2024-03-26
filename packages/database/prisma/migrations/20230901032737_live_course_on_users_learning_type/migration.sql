/*
  Warnings:

  - Added the required column `learning_type` to the `live_courses_on_users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "live_courses_on_users" ADD COLUMN     "learning_type" "LearningType" NOT NULL; 
