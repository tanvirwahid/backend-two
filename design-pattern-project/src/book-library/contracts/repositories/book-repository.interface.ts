import { CreateBookDto } from '../../dtos/create-book.dto';
import { BookType } from '../../types/book.type';

export interface BookRepositoryInterface {
  store(data: CreateBookDto): Promise<BookType>;
  findById(id: number): Promise<BookType | null>;
}

export const TOKEN_BOOKREPOSITORY = 'BookRepository';
