import { BookType } from '../types/book.type';

export interface BookItem {
  getDetails(): Promise<BookType>;
}
