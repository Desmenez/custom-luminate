-- CreateEnum
CREATE TYPE "LearningType" AS ENUM ('ONLINE', 'ONSITE');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'SUCCESS', 'FAILED');

-- CreateTable
CREATE TABLE "live_course_booking" (
    "id" TEXT NOT NULL,
    "live_course_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "learning_type" "LearningType" NOT NULL,
    "base_price" INTEGER NOT NULL,
    "shipping_price" INTEGER NOT NULL,
    "addon_name" TEXT,
    "addon_price" INTEGER,
    "addon_duration_days" INTEGER,
    "subtotal" INTEGER NOT NULL,
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "display_expires_at" TIMESTAMP(3) NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "live_course_booking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "live_course_booking_status_expires_at_idx" ON "live_course_booking"("status", "expires_at");

-- AddForeignKey
ALTER TABLE "live_course_booking" ADD CONSTRAINT "live_course_booking_live_course_id_fkey" FOREIGN KEY ("live_course_id") REFERENCES "live_course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
