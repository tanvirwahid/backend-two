import { PostRepositoryInterface } from '../contracts/repositories/post-repository.contract';
import { PrismaService } from '../../prisma/services/prisma.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';

@Injectable()
export class PostRepository implements PostRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  async store<T extends Post>(createPostData: CreatePostDto): Promise<T> {
    const { userId, title, body } = createPostData;

    return (await this.prisma.post.create({
      data: {
        title,
        body,
        userId: userId,
      },
    })) as T;
  }

  async findById<T extends Post>(id: number): Promise<T | null> {
    return (await this.prisma.post.findUnique({
      where: { id },
    })) as T | null;
  }
}
