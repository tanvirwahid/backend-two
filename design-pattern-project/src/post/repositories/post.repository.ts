import { PostRepositoryInterface } from '../contracts/repositories/post-repository.contract';
import { PrismaService } from '../../prisma/services/prisma.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { Injectable } from '@nestjs/common';
import { Post } from '@prisma/client';
import { Support } from '../types/support.type';

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

  async addSupport<T extends Support>(
    postId: number,
    userId: number,
  ): Promise<T> {
    await this.prisma.post.update({
      where: { id: postId },
      data: {
        supporters: {
          connect: [{ id: userId }],
        },
      },
    });
    return { userId: userId, postId: postId } as T;
  }

  async removeSupport<T extends Support>(
    postId: number,
    userId: number,
  ): Promise<T> {
    await this.prisma.post.update({
      where: { id: postId },
      data: {
        supporters: {
          disconnect: [{ id: userId }],
        },
      },
    });

    return { userId: userId, postId: postId } as T;
  }

  async increaseScore(id: number, amount: number) {
    await this.prisma.post.update({
      where: { id: id },
      data: {
        score: { increment: amount },
      },
    });
  }

  async decreaseScore(id: number, amount: number) {
    await this.prisma.post.update({
      where: { id: id },
      data: {
        score: { decrement: amount },
      },
    });
  }

  async checkIfSupportedByUser(
    userId: number,
    postId: number,
  ): Promise<boolean> {
    const isSupported = await this.prisma.post.findFirst({
      where: {
        id: postId,
        supporters: {
          some: { id: userId },
        },
      },
    });

    return !!isSupported;
  }
}
