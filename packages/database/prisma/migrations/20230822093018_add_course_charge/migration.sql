-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CREDIT_CARD', 'PROMPTPAY', 'TRUEMONEY', 'MOBILE_BANKING');

-- CreateTable
CREATE TABLE "live_course_charge" (
    "charge_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "paymentMethod" "PaymentMethod" NOT NULL,
    "amount" INTEGER NOT NULL,
    "status" "PaymentStatus" NOT NULL,
    "live_course_booking_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "live_course_charge_pkey" PRIMARY KEY ("charge_id")
);

-- AddForeignKey
ALTER TABLE "live_course_charge" ADD CONSTRAINT "live_course_charge_live_course_booking_id_fkey" FOREIGN KEY ("live_course_booking_id") REFERENCES "live_course_booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
