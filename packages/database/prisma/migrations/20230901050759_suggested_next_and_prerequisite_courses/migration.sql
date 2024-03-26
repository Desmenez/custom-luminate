-- CreateTable
CREATE TABLE "_suggested_courses" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_suggested_courses_AB_unique" ON "_suggested_courses"("A", "B");

-- CreateIndex
CREATE INDEX "_suggested_courses_B_index" ON "_suggested_courses"("B");

-- AddForeignKey
ALTER TABLE "_suggested_courses" ADD CONSTRAINT "_suggested_courses_A_fkey" FOREIGN KEY ("A") REFERENCES "live_course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_suggested_courses" ADD CONSTRAINT "_suggested_courses_B_fkey" FOREIGN KEY ("B") REFERENCES "live_course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
