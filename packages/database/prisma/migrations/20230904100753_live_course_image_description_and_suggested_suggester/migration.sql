-- CreateTable
CREATE TABLE "live_course_image_description" (
    "id" TEXT NOT NULL,
    "live_course_id" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "alt_text" TEXT,
    "order" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "live_course_image_description_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_pre_requisite_courses" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_pre_requisite_courses_AB_unique" ON "_pre_requisite_courses"("A", "B");

-- CreateIndex
CREATE INDEX "_pre_requisite_courses_B_index" ON "_pre_requisite_courses"("B");

-- AddForeignKey
ALTER TABLE "live_course_image_description" ADD CONSTRAINT "live_course_image_description_live_course_id_fkey" FOREIGN KEY ("live_course_id") REFERENCES "live_course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pre_requisite_courses" ADD CONSTRAINT "_pre_requisite_courses_A_fkey" FOREIGN KEY ("A") REFERENCES "live_course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_pre_requisite_courses" ADD CONSTRAINT "_pre_requisite_courses_B_fkey" FOREIGN KEY ("B") REFERENCES "live_course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
