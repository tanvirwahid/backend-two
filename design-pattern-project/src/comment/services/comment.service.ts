import { Inject, Injectable } from '@nestjs/common';
import { CommentRepositoryInterface } from '../contracts/repositories/comment-repository.contract';
import { COMMENT_REPOSITORY } from '../contracts/tokens/comment-repository.token';
import { CreateCommentDto } from '../dtos/create-comment.dto';
import { CommentType } from '../types/comment.type';

@Injectable()
export class CommentService {
  constructor(
    @Inject(COMMENT_REPOSITORY)
    private commentRepository: CommentRepositoryInterface,
  ) {}

  async store(commentData: CreateCommentDto): Promise<CommentType> {
    return await this.commentRepository.store(commentData);
  }
}
