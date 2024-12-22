import { Injectable } from '@nestjs/common';
import { DbService } from '../../prisma/services/db.service';
import { CreatePostSupportDto } from '../dtos/create-post-support.dto';
import { Support } from '../../post/types/support.type';
import { PostService } from '../../post/services/post.service';
import { SupportFactory } from './factories/support.factory';

@Injectable()
export class PostSupportService {
  constructor(
    private dbService: DbService,
    private supportFactory: SupportFactory,
    private postService: PostService,
  ) {}

  async createPostSupport(data: CreatePostSupportDto): Promise<Support> {
    const factory = await this.supportFactory.getFactory(
      data.userId,
      data.postId,
    );

    return factory.modifySupport(data.userId, data.postId);
  }
}
