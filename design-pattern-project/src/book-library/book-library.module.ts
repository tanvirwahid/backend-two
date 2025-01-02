import { Module } from '@nestjs/common';
import { TOKEN_BOOKREPOSITORY } from './contracts/repositories/book-repository.interface';
import { BookRepository } from './repositories/book.repository';
import { BookService } from './services/book.service';
import { BookController } from './controllers/book.controller';
import { BundleService } from './services/bundle.service';
import { TOKEN_BUNDLE_REPOSITORY } from './contracts/repositories/bundle-repository.interface';
import { BundleController } from './controllers/bundle.controller';
import { BundleRepository } from './repositories/bundle.repository';
import { BooksExistValidator } from './validators/books-exist.validator';
import { BundlesExistValidator } from './validators/bundles-exist.validator';
import { BookItemFactory } from './entities/factories/book-item.factory';

@Module({
  providers: [
    BookItemFactory,
    {
      provide: TOKEN_BOOKREPOSITORY,
      useClass: BookRepository,
    },
    {
      provide: TOKEN_BUNDLE_REPOSITORY,
      useClass: BundleRepository,
    },
    BookService,
    BundleService,
    BooksExistValidator,
    BundlesExistValidator,
  ],
  controllers: [BookController, BundleController],
})
export class BookLibraryModule {}
