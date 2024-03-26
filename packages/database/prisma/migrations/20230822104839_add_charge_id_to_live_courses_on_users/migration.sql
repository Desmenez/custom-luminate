/*
  Warnings:

  - A unique constraint covering the columns `[charge_id]` on the table `live_courses_on_users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "live_courses_on_users" ADD COLUMN     "charge_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "live_courses_on_users_charge_id_key" ON "live_courses_on_users"("charge_id");

-- AddForeignKey
ALTER TABLE "live_courses_on_users" ADD CONSTRAINT "live_courses_on_users_charge_id_fkey" FOREIGN KEY ("charge_id") REFERENCES "live_course_charge"("charge_id") ON DELETE SET NULL ON UPDATE CASCADE;
