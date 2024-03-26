-- CreateTable
CREATE TABLE "TutorCard" (
    "id" TEXT NOT NULL,
    "tutor_id" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "alt_text" TEXT,
    "order" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "TutorCard_pkey" PRIMARY KEY ("id")
);
