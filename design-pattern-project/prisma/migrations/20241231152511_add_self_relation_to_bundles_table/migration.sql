/*
  Warnings:

  - You are about to drop the `Bundle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `book_bundles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `book_bundles` DROP FOREIGN KEY `book_bundles_bookId_fkey`;

-- DropForeignKey
ALTER TABLE `book_bundles` DROP FOREIGN KEY `book_bundles_bundleId_fkey`;

-- DropTable
DROP TABLE `Bundle`;

-- DropTable
DROP TABLE `book_bundles`;

-- CreateTable
CREATE TABLE `bundles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_book_bundles` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_book_bundles_AB_unique`(`A`, `B`),
    INDEX `_book_bundles_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_nested_bundles` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_nested_bundles_AB_unique`(`A`, `B`),
    INDEX `_nested_bundles_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_book_bundles` ADD CONSTRAINT `_book_bundles_A_fkey` FOREIGN KEY (`A`) REFERENCES `books`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_book_bundles` ADD CONSTRAINT `_book_bundles_B_fkey` FOREIGN KEY (`B`) REFERENCES `bundles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_nested_bundles` ADD CONSTRAINT `_nested_bundles_A_fkey` FOREIGN KEY (`A`) REFERENCES `bundles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_nested_bundles` ADD CONSTRAINT `_nested_bundles_B_fkey` FOREIGN KEY (`B`) REFERENCES `bundles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
