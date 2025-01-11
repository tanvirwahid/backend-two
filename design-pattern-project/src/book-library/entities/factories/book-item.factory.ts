import { BookItem } from '../../contracts/book-item.interface';
import { Book } from '../book.entity';
import { BookType } from '../../types/book.type';
import { Bundle } from '../bundle.entity';
import { BundleCache } from '../../cache/bundle.cache';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookItemFactory {
  constructor(private bundleCache: BundleCache) {}

  getBookItem(type: string, data: BookType): BookItem {
    if (type == Book.BOOK_ENTITY) {
      return new Book(data.id, data.author, data.name, data.price);
    } else if (type == Bundle.BUNDLE_ENTITY) {
      return new Bundle(data.id, data.name, data.price, this.bundleCache, this);
    }

    throw new Error('Invalid type ' + type);
  }
}
