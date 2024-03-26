-- AlterTable
ALTER TABLE "live_course_booking" ADD COLUMN     "receive_method" "ReceiveMethod";

-- AlterTable
ALTER TABLE "live_courses_on_users" ALTER COLUMN "receive_method" DROP NOT NULL;
