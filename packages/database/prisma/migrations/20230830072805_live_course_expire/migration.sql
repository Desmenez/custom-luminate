-- CreateEnum
CREATE TYPE "ShelfLifeDurationUnit" AS ENUM ('DAY', 'MONTH', 'YEAR', 'LIFETIME');

-- AlterTable
ALTER TABLE "live_course" ADD COLUMN     "expires_at" TIMESTAMP(3),
ADD COLUMN     "shelf_life_duration" INTEGER,
ADD COLUMN     "shelf_life_unit" "ShelfLifeDurationUnit";

-- AlterTable
ALTER TABLE "live_courses_on_users" ADD COLUMN     "expires_at" TIMESTAMP(3);
