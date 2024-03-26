/*
  Warnings:

  - You are about to drop the column `quizSavedStatus` on the `live_session` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "live_session" DROP COLUMN "quizSavedStatus",
ADD COLUMN     "is_quiz_closed" BOOLEAN NOT NULL DEFAULT false;

-- DropEnum
DROP TYPE "QuizSavedStatus";
