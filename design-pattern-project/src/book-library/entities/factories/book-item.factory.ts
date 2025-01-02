import {
  BundleRepositoryInterface,
  TOKEN_BUNDLE_REPOSITORY,
} from '../../contracts/repositories/bundle-repository.interface';
import { Inject, Injectable } from '@nestjs/common';
import { BookItem } from '../../contracts/book-item.interface';
import { Book } from '../book.entity';
import { BookType } from '../../types/book.type';
import { Bundle } from '../bundle.entity';

@Injectable()
export class BookItemFactory {
  constructor(
    @Inject(TOKEN_BUNDLE_REPOSITORY)
    private bundleRepository: BundleRepositoryInterface,
  ) {}

  getBookItem(type: string, data: BookType): BookItem {
    if (type == Book.BOOK_ENTITY) {
      return new Book(data.id, data.author, data.name, data.price);
    } else if (type == Bundle.BUNDLE_ENTITY) {
      return new Bundle(
        data.id,
        data.name,
        data.price,
        this.bundleRepository,
        this,
      );
    }

    throw new Error('Invalid type ' + type);
  }
}
