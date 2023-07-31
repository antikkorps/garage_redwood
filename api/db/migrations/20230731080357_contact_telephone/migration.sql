/*
  Warnings:

  - Added the required column `numero_de_telephone` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Contact` ADD COLUMN `numero_de_telephone` VARCHAR(191) NOT NULL;
