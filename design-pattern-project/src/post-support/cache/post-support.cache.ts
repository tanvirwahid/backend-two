import { CacheService } from '../../cache/services/cache.service';
import { SupportFactory } from '../services/factories/support.factory';
import { CreatePostSupportDto } from '../dtos/create-post-support.dto';
import { Support } from '../../post/types/support.type';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostSupportCache {
  constructor(
    private readonly supportFactory: SupportFactory,
    private readonly cacheService: CacheService,
  ) {}

  async createPostSupport(data: CreatePostSupportDto): Promise<Support> {
    const factory = await this.supportFactory.getFactory(
      data.userId,
      data.postId,
    );

    const support = factory.modifySupport(data.userId, data.postId);
    this.cacheService.forget(`Post_${data.postId}`);

    return support;
  }
}
