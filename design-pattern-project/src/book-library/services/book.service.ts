import { Inject, Injectable } from '@nestjs/common';
import {
  BookRepositoryInterface,
  TOKEN_BOOKREPOSITORY,
} from '../contracts/repositories/book-repository.interface';
import { CreateBookDto } from '../dtos/create-book.dto';
import { BookType } from '../types/book.type';

@Injectable()
export class BookService {
  constructor(
    @Inject(TOKEN_BOOKREPOSITORY)
    private bookRepository: BookRepositoryInterface,
  ) {}

  async store(data: CreateBookDto): Promise<BookType> {
    return await this.bookRepository.store(data);
  }

  async findById(id: number): Promise<BookType | null> {
    return await this.bookRepository.findById(id);
  }
}
