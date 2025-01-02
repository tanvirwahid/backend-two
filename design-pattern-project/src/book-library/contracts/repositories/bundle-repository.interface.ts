import { CreateBundleDto } from '../../dtos/create-bundle.dto';
import { BookType } from '../../types/book.type';
import { BookBundle } from '../../types/book-bundle.type';

export interface BundleRepositoryInterface {
  store(data: CreateBundleDto): Promise<BookType>;
  findById(id: number): Promise<BookType | null>;
  findNestedBooksById(id: number): Promise<BookBundle | null>;
}

export const TOKEN_BUNDLE_REPOSITORY = 'bundleRepository';
