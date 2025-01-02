import { BookItem } from '../contracts/book-item.interface';
import { BookType } from '../types/book.type';

export class Book implements BookItem {
  static BOOK_ENTITY = 'book';

  constructor(
    private id: number,
    private author: string,
    private name: string,
    private price: number,
  ) {}

  async getDetails(): Promise<BookType> {
    return {
      id: this.id,
      author: this.author,
      name: this.name,
      price: this.price,
    };
  }
}
