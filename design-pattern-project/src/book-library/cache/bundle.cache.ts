import { Inject, Injectable } from '@nestjs/common';
import {
  BundleRepositoryInterface,
  TOKEN_BUNDLE_REPOSITORY,
} from '../contracts/repositories/bundle-repository.interface';
import { BookType } from '../types/book.type';
import { CacheService } from '../../cache/services/cache.service';
import { BookBundle } from '../types/book-bundle.type';

@Injectable()
export class BundleCache {
  constructor(
    @Inject(TOKEN_BUNDLE_REPOSITORY)
    private bundleRepository: BundleRepositoryInterface,
    private cache: CacheService,
  ) {}

  async findById(id: number): Promise<BookType | null> {
    const key = `bundle_${id}`;
    const bundleFromCache = await this.cache.get(key);
    if (bundleFromCache) {
      return bundleFromCache;
    }

    const bundle = await this.bundleRepository.findById(id);
    await this.cache.set(key, bundle);
    return bundle;
  }

  async findNestedBundlesById(id: number): Promise<BookBundle | null> {
    const key = `nested_bundles_${id}`;
    const bundlesFromCache = await this.cache.get(key);
    if (bundlesFromCache) {
      return bundlesFromCache;
    }

    const bundles = await this.bundleRepository.findNestedBooksById(id);
    await this.cache.set(key, bundles);
    return bundles;
  }
}
