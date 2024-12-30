import { Module } from '@nestjs/common';
import { TOKEN_BOOKREPOSITORY } from './contracts/repositories/book-repository.interface';
import { BookRepository } from './repositories/book.repository';
import { BookService } from './services/book.service';
import { BookController } from './controllers/book.controller';

@Module({
  providers: [
    {
      provide: TOKEN_BOOKREPOSITORY,
      useClass: BookRepository,
    },
    BookService,
  ],
  controllers: [BookController],
})
export class BookLibraryModule {}
