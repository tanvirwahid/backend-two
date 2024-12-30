import { BookType } from '../types/book.type';

export class BookDto {
  constructor(
    public id: number,
    public name: string,
    public author: string,
    public price: number,
  ) {}

  static fromBookType(book: BookType): BookDto {
    return new BookDto(book.id, book.name, book.author, book.price);
  }
}
