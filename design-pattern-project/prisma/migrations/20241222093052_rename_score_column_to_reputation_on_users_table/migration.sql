/*
  Warnings:

  - You are about to drop the column `score` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `score`,
    ADD COLUMN `reputation` INTEGER NOT NULL DEFAULT 0;
