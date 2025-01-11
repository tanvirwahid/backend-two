import { BookItem } from '../contracts/book-item.interface';
import { BookType } from '../types/book.type';
import { BookItemFactory } from './factories/book-item.factory';
import { Book } from './book.entity';
import { BundleCache } from '../cache/bundle.cache';

export class Bundle implements BookItem {
  static BUNDLE_ENTITY = 'bundle';

  private nestedBooks: BookItem[] = [];

  constructor(
    private id: number,
    private name: string,
    private price: number,
    private bundleCache: BundleCache,
    private bookItemFactory: BookItemFactory,
  ) {}

  async getDetails(): Promise<BookType> {
    await this.populateNestedBooks();

    return {
      id: this.id,
      name: this.name,
      price: this.price,
      books: await Promise.all(
        this.nestedBooks.map(async (book) => book.getDetails()),
      ),
    };
  }

  private async populateNestedBooks() {
    const books = await this.bundleCache.findNestedBundlesById(this.id);
    for (const book of books.books) {
      this.nestedBooks.push(
        this.bookItemFactory.getBookItem(Book.BOOK_ENTITY, book),
      );
    }

    for (const book of books.bundles) {
      this.nestedBooks.push(
        this.bookItemFactory.getBookItem(Bundle.BUNDLE_ENTITY, book),
      );
    }
  }
}
