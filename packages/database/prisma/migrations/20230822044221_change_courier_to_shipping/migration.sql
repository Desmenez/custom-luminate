/*
  Warnings:

  - The values [COURIER] on the enum `ReceiveMethod` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ReceiveMethod_new" AS ENUM ('SHIPPING', 'PICKUP');
ALTER TABLE "live_courses_on_users" ALTER COLUMN "receive_method" DROP DEFAULT;
ALTER TABLE "live_courses_on_users" ALTER COLUMN "receive_method" TYPE "ReceiveMethod_new" USING ("receive_method"::text::"ReceiveMethod_new");
ALTER TYPE "ReceiveMethod" RENAME TO "ReceiveMethod_old";
ALTER TYPE "ReceiveMethod_new" RENAME TO "ReceiveMethod";
DROP TYPE "ReceiveMethod_old";
ALTER TABLE "live_courses_on_users" ALTER COLUMN "receive_method" SET DEFAULT 'SHIPPING';
COMMIT;

-- AlterTable
ALTER TABLE "live_courses_on_users" ALTER COLUMN "receive_method" SET DEFAULT 'SHIPPING';
