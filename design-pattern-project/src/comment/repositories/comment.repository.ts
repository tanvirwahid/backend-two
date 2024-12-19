import { CommentRepositoryInterface } from '../contracts/repositories/comment-repository.contract';
import { PrismaService } from '../../prisma/services/prisma.service';
import { CreateCommentDto } from '../dtos/create-comment.dto';

import { Injectable } from '@nestjs/common';
import { CommentType } from '../types/comment.type';

@Injectable()
export class CommentRepository implements CommentRepositoryInterface {
  constructor(private prisma: PrismaService) {}

  async store<T extends CommentType>(
    commentData: CreateCommentDto,
  ): Promise<T> {
    const { body, userId, postId } = commentData;
    return (await this.prisma.comment.create({
      data: {
        body,
        userId,
        postId,
      },
    })) as T;
  }
}
