/*
  Warnings:

  - You are about to drop the column `featuredImage` on the `Annonce` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Annonce` DROP COLUMN `featuredImage`;

-- CreateTable
CREATE TABLE `Image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `featuredImage` BOOLEAN NOT NULL DEFAULT false,
    `AnnonceId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_AnnonceId_fkey` FOREIGN KEY (`AnnonceId`) REFERENCES `Annonce`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
