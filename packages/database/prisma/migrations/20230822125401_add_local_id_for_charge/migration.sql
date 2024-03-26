/*
  Warnings:

  - The primary key for the `live_course_charge` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `charge_id` on the `live_course_charge` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[omise_charge_id]` on the table `live_course_charge` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `live_course_charge` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `omise_charge_id` to the `live_course_charge` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "live_courses_on_users" DROP CONSTRAINT "live_courses_on_users_charge_id_fkey";

-- AlterTable
ALTER TABLE "live_course_charge" DROP CONSTRAINT "live_course_charge_pkey",
DROP COLUMN "charge_id",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "omise_charge_id" TEXT NOT NULL,
ADD CONSTRAINT "live_course_charge_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "live_course_charge_omise_charge_id_key" ON "live_course_charge"("omise_charge_id");

-- AddForeignKey
ALTER TABLE "live_courses_on_users" ADD CONSTRAINT "live_courses_on_users_charge_id_fkey" FOREIGN KEY ("charge_id") REFERENCES "live_course_charge"("id") ON DELETE SET NULL ON UPDATE CASCADE;
