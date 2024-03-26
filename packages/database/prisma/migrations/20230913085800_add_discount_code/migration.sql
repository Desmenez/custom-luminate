-- CreateEnum
CREATE TYPE "DiscountCodeScope" AS ENUM ('SPECIFIC_LIVE_COURSE', 'ANY_LIVE_COURSE', 'ALL');

-- CreateTable
CREATE TABLE "discount_code_group" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "discount_code_group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "discount_code" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "discount_code_group_id" TEXT NOT NULL,
    "start_date" TIMESTAMP(3),
    "end_date" TIMESTAMP(3),
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "discount" INTEGER NOT NULL,
    "usage_count" INTEGER NOT NULL DEFAULT 0,
    "limit" INTEGER,
    "scope" "DiscountCodeScope" NOT NULL DEFAULT 'ALL',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "discount_code_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DiscountCodeToLiveCourse" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "discount_code_code_key" ON "discount_code"("code");

-- CreateIndex
CREATE UNIQUE INDEX "_DiscountCodeToLiveCourse_AB_unique" ON "_DiscountCodeToLiveCourse"("A", "B");

-- CreateIndex
CREATE INDEX "_DiscountCodeToLiveCourse_B_index" ON "_DiscountCodeToLiveCourse"("B");

-- AddForeignKey
ALTER TABLE "discount_code" ADD CONSTRAINT "discount_code_discount_code_group_id_fkey" FOREIGN KEY ("discount_code_group_id") REFERENCES "discount_code_group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiscountCodeToLiveCourse" ADD CONSTRAINT "_DiscountCodeToLiveCourse_A_fkey" FOREIGN KEY ("A") REFERENCES "discount_code"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DiscountCodeToLiveCourse" ADD CONSTRAINT "_DiscountCodeToLiveCourse_B_fkey" FOREIGN KEY ("B") REFERENCES "live_course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
