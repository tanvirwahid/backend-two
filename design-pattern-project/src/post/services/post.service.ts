import { Inject, Injectable } from '@nestjs/common';
import { PostRepositoryInterface } from '../contracts/repositories/post-repository.contract';
import { POST_REPOSITORY } from '../contracts/tokens/post-repository.token';
import { CreatePostDto } from '../dtos/create-post.dto';
import { PostType } from '../types/post.type';
import { Support } from '../types/support.type';
import { PostCache } from '../caches/post.cache';

@Injectable()
export class PostService {
  constructor(
    @Inject(POST_REPOSITORY)
    private postRepository: PostRepositoryInterface,
    private postCache: PostCache,
  ) {}

  async store(createPostData: CreatePostDto): Promise<PostType> {
    return await this.postRepository.store(createPostData);
  }

  async findById(id: number): Promise<PostType | null> {
    return await this.postCache.findById(id);
  }

  async addSupport(postId: number, userId: number): Promise<Support> {
    return await this.postRepository.addSupport(postId, userId);
  }

  async removeSupport(postId: number, userId: number): Promise<Support> {
    return await this.postRepository.removeSupport(postId, userId);
  }

  async increaseScore(postId: number, score: number) {
    await this.postRepository.increaseScore(postId, score);
  }

  async decreseScore(postId: number, score: number) {
    await this.postRepository.decreaseScore(postId, score);
  }

  async checkIfSupportedByUser(
    userId: number,
    postId: number,
  ): Promise<boolean> {
    return this.postRepository.checkIfSupportedByUser(userId, postId);
  }
}
