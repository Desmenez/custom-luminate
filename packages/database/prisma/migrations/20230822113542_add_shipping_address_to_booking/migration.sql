/*
  Warnings:

  - You are about to drop the column `first_name` on the `shipping_address` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `shipping_address` table. All the data in the column will be lost.
  - You are about to drop the column `national_id` on the `shipping_address` table. All the data in the column will be lost.
  - Added the required column `name` to the `shipping_address` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "live_course_booking" ADD COLUMN     "shipping_address_id" TEXT;

-- AlterTable
ALTER TABLE "shipping_address" DROP COLUMN "first_name",
DROP COLUMN "last_name",
DROP COLUMN "national_id",
ADD COLUMN     "name" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "live_course_booking" ADD CONSTRAINT "live_course_booking_shipping_address_id_fkey" FOREIGN KEY ("shipping_address_id") REFERENCES "shipping_address"("id") ON DELETE SET NULL ON UPDATE CASCADE;
