import { Inject, Injectable } from '@nestjs/common';
import { PostRepositoryInterface } from '../contracts/repositories/post-repository.contract';
import { POST_REPOSITORY } from '../contracts/tokens/post-repository.token';
import { CreatePostDto } from '../dtos/create-post.dto';
import { PostType } from '../types/post.type';

@Injectable()
export class PostService {
  constructor(
    @Inject(POST_REPOSITORY) private postRepository: PostRepositoryInterface,
  ) {}

  async store(createPostData: CreatePostDto): Promise<PostType> {
    return await this.postRepository.store(createPostData);
  }

  async findById(id: number): Promise<PostType | null> {
    return await this.postRepository.findById(id);
  }
}
