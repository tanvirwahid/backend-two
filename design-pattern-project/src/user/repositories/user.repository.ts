import { UserRepositoryInterface } from '../contracts/repositories/user-repository.contract';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(private prisma: PrismaService) {}

  async checkIfAdminById(id: number): Promise<boolean> {
    const user = await this.prisma.user.findFirst({
      where: { id: id },
    });

    if (!user) {
      throw new Error('User Not Found');
    }

    return user.isAdmin;
  }

  async increaseReputationById(id: number, reputation: number) {
    await this.prisma.user.update({
      where: { id: id },
      data: { reputation: { increment: reputation } },
    });
  }

  async decreaseReputationById(id: number, reputation: number) {
    await this.prisma.user.update({
      where: { id: id },
      data: { reputation: { decrement: reputation } },
    });
  }
}
