/*
  Warnings:

  - A unique constraint covering the columns `[payment_id]` on the table `live_course_charge` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `payment_id` to the `live_course_charge` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "live_course_charge" ADD COLUMN     "payment_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "live_course_charge_payment_id_key" ON "live_course_charge"("payment_id");
