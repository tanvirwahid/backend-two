import { Inject, Injectable } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class CacheService {
  private ttl = 3600 * 1000;

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  setTtl(value: number) {
    this.ttl = value;
  }

  async set(key: string, value: any) {
    await this.cacheManager.set(key, value, this.ttl);
  }

  async get(key: string): Promise<any | null> {
    return await this.cacheManager.get(key);
  }

  async forget(key: string) {
    await this.cacheManager.del(key);
  }
}
