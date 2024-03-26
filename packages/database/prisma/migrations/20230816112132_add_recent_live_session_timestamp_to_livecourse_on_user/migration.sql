-- AlterTable
ALTER TABLE "live_courses_on_users" ADD COLUMN     "recent_live_session_id" TEXT,
ADD COLUMN     "recent_live_session_timestamp_seconds" INTEGER;

-- AddForeignKey
ALTER TABLE "live_courses_on_users" ADD CONSTRAINT "live_courses_on_users_recent_live_session_id_fkey" FOREIGN KEY ("recent_live_session_id") REFERENCES "live_session"("id") ON DELETE SET NULL ON UPDATE CASCADE;
