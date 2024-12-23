import { Injectable } from '@nestjs/common';
import { CreatePostSupportDto } from '../dtos/create-post-support.dto';
import { Support } from '../../post/types/support.type';
import { PostSupportCache } from '../cache/post-support.cache';

@Injectable()
export class PostSupportService {
  constructor(private readonly postSupportCache: PostSupportCache) {}

  async createPostSupport(data: CreatePostSupportDto): Promise<Support> {
    return this.postSupportCache.createPostSupport(data);
  }
}
