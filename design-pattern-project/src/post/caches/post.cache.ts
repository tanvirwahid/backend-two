import { Inject, Injectable } from '@nestjs/common';
import { PostRepositoryInterface } from '../contracts/repositories/post-repository.contract';
import { POST_REPOSITORY } from '../contracts/tokens/post-repository.token';
import { PostType } from '../types/post.type';
import { CacheService } from '../../cache/services/cache.service';

@Injectable()
export class PostCache {
  constructor(
    private readonly cacheService: CacheService,
    @Inject(POST_REPOSITORY)
    private readonly postRepository: PostRepositoryInterface,
  ) {}

  async findById(id: number): Promise<PostType | null> {
    const key = `Post_${id}`;
    const cachedValue = await this.cacheService.get(key);

    if (cachedValue) {
      return cachedValue;
    }

    const post = await this.postRepository.findById(id);
    await this.cacheService.set(key, post);

    return post;
  }
}
