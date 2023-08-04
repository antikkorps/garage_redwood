/*
  Warnings:

  - You are about to drop the column `roleId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `roles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_roleId_fkey`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `roleId`,
    ADD COLUMN `roles` VARCHAR(191) NOT NULL DEFAULT 'user';

-- DropTable
DROP TABLE `roles`;
