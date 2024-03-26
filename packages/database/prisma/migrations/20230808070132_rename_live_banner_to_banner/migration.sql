/*
  Warnings:

  - You are about to drop the `live_banner` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "live_banner";

-- CreateTable
CREATE TABLE "banner" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "image_url" TEXT,
    "alt_text" TEXT,
    "link_url" TEXT,
    "order" TEXT NOT NULL,

    CONSTRAINT "banner_pkey" PRIMARY KEY ("id")
);
