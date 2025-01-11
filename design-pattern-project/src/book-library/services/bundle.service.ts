import { Inject, Injectable } from '@nestjs/common';
import {
  BundleRepositoryInterface,
  TOKEN_BUNDLE_REPOSITORY,
} from '../contracts/repositories/bundle-repository.interface';
import { CreateBundleDto } from '../dtos/create-bundle.dto';
import { BookType } from '../types/book.type';
import { BookItemFactory } from '../entities/factories/book-item.factory';
import { Bundle } from '../entities/bundle.entity';
import { BundleCache } from '../cache/bundle.cache';

@Injectable()
export class BundleService {
  constructor(
    @Inject(TOKEN_BUNDLE_REPOSITORY)
    private bundleRepository: BundleRepositoryInterface,
    private bookItemFactory: BookItemFactory,
    private bundleCache: BundleCache,
  ) {}

  async store(data: CreateBundleDto): Promise<BookType> {
    return await this.bundleRepository.store(data);
  }

  async findDetailsById(id: number): Promise<BookType | null> {
    const bundle = await this.bundleCache.findById(id);

    if (!bundle) {
      return null;
    }

    const bundleEntity = this.bookItemFactory.getBookItem(
      Bundle.BUNDLE_ENTITY,
      bundle,
    );

    return await bundleEntity.getDetails();
  }
}
