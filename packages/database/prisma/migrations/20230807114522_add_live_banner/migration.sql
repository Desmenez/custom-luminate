-- CreateTable
CREATE TABLE "live_banner" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "image_url" TEXT,
    "alt_text" TEXT,
    "order" TEXT NOT NULL,

    CONSTRAINT "live_banner_pkey" PRIMARY KEY ("id")
);
