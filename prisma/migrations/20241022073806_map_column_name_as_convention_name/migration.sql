/*
  Warnings:

  - The primary key for the `ReligionsOnCountries` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `countryId` on the `ReligionsOnCountries` table. All the data in the column will be lost.
  - You are about to drop the column `religionId` on the `ReligionsOnCountries` table. All the data in the column will be lost.
  - You are about to drop the column `countryId` on the `presidents` table. All the data in the column will be lost.
  - Added the required column `country_id` to the `ReligionsOnCountries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `religion_id` to the `ReligionsOnCountries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country_id` to the `presidents` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ReligionsOnCountries" DROP CONSTRAINT "ReligionsOnCountries_countryId_fkey";

-- DropForeignKey
ALTER TABLE "ReligionsOnCountries" DROP CONSTRAINT "ReligionsOnCountries_religionId_fkey";

-- DropForeignKey
ALTER TABLE "presidents" DROP CONSTRAINT "presidents_countryId_fkey";

-- AlterTable
ALTER TABLE "ReligionsOnCountries" DROP CONSTRAINT "ReligionsOnCountries_pkey",
DROP COLUMN "countryId",
DROP COLUMN "religionId",
ADD COLUMN     "country_id" TEXT NOT NULL,
ADD COLUMN     "religion_id" TEXT NOT NULL,
ADD CONSTRAINT "ReligionsOnCountries_pkey" PRIMARY KEY ("religion_id", "country_id");

-- AlterTable
ALTER TABLE "presidents" DROP COLUMN "countryId",
ADD COLUMN     "country_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "presidents" ADD CONSTRAINT "presidents_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReligionsOnCountries" ADD CONSTRAINT "ReligionsOnCountries_religion_id_fkey" FOREIGN KEY ("religion_id") REFERENCES "religions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReligionsOnCountries" ADD CONSTRAINT "ReligionsOnCountries_country_id_fkey" FOREIGN KEY ("country_id") REFERENCES "countries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
