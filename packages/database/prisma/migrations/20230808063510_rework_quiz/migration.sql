/*
  Warnings:

  - You are about to drop the column `correct_choice` on the `live_session_quiz` table. All the data in the column will be lost.
  - You are about to drop the column `number_of_choice` on the `live_session_quiz` table. All the data in the column will be lost.
  - You are about to drop the column `question` on the `live_session_quiz` table. All the data in the column will be lost.
  - You are about to drop the column `selected_choice` on the `student_on_live_session_quiz` table. All the data in the column will be lost.
  - Added the required column `isAcceptingAnswers` to the `live_session_quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `config` to the `live_session_quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `solution` to the `live_session_quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `live_session_quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `answer` to the `student_on_live_session_quiz` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correct` to the `student_on_live_session_quiz` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LiveSessionQuizType" AS ENUM ('CHOICE', 'TEXT');

-- AlterTable
ALTER TABLE "live_session_quiz" DROP COLUMN "correct_choice",
DROP COLUMN "number_of_choice",
DROP COLUMN "question",
ADD COLUMN     "isAcceptingAnswers" BOOLEAN NOT NULL,
ADD COLUMN     "config" JSONB NOT NULL,
ADD COLUMN     "solution" JSONB NOT NULL,
ADD COLUMN     "type" "LiveSessionQuizType" NOT NULL;

-- AlterTable
ALTER TABLE "student_on_live_session_quiz" DROP COLUMN "selected_choice",
ADD COLUMN     "answer" JSONB NOT NULL,
ADD COLUMN     "correct" BOOLEAN NOT NULL;
