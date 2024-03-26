/*
  Warnings:

  - You are about to drop the column `full_price` on the `live_course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "live_course" DROP COLUMN "full_price",
ADD COLUMN     "original_online_price" INTEGER,
ADD COLUMN     "original_onsite_price" INTEGER;
