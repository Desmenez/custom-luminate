-- AlterTable
ALTER TABLE "live_course" ADD COLUMN     "has_pick_up" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "has_shipping" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "pickup_address" TEXT;
