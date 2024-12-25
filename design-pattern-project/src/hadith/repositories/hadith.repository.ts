import { HadithRepositoryInterface } from '../contracts/repositories/hadith-repository.contract';
import { PrismaService } from '../../prisma/services/prisma.service';
import { CreateHadithDto } from '../dtos/create-hadith.dto';
import { Injectable } from '@nestjs/common';
import { Hadith } from '@prisma/client';

@Injectable()
export class HadithRepository implements HadithRepositoryInterface {
  constructor(private prisma: PrismaService) {}

  async store(data: CreateHadithDto): Promise<Hadith> {
    return await this.prisma.hadith.create({
      data: {
        text: data.text,
      },
    });
  }

  async findLatest(): Promise<Hadith | null> {
    return await this.prisma.hadith.findFirst({
      orderBy: { id: 'desc' },
    });
  }
}
