import { RepositoryInterface } from '../contracts/repository.contract';
import { PrismaService } from '../services/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DbRepository implements RepositoryInterface {
  constructor(private prisma: PrismaService) {}

  async executeTransaction<T>(callback: () => Promise<T>): Promise<T> {
    return this.prisma.$transaction(async () => {
      return callback();
    });
  }
}
