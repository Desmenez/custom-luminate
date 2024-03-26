-- AlterTable
ALTER TABLE "live_course_charge" ADD COLUMN     "discount_code_id" TEXT;

-- AddForeignKey
ALTER TABLE "live_course_charge" ADD CONSTRAINT "live_course_charge_discount_code_id_fkey" FOREIGN KEY ("discount_code_id") REFERENCES "discount_code"("id") ON DELETE SET NULL ON UPDATE CASCADE;
