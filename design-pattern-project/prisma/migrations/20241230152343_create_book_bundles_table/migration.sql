-- CreateTable
CREATE TABLE `books` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `author` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Bundle` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `price` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `book_bundles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bundleId` INTEGER NOT NULL,
    `bookId` INTEGER NOT NULL,

    UNIQUE INDEX `book_bundles_bookId_bundleId_key`(`bookId`, `bundleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `book_bundles` ADD CONSTRAINT `book_bundles_bookId_fkey` FOREIGN KEY (`bookId`) REFERENCES `books`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `book_bundles` ADD CONSTRAINT `book_bundles_bundleId_fkey` FOREIGN KEY (`bundleId`) REFERENCES `Bundle`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
