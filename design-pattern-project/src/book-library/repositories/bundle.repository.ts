import { BundleRepositoryInterface } from '../contracts/repositories/bundle-repository.interface';
import { PrismaService } from '../../prisma/services/prisma.service';
import { BookType } from '../types/book.type';
import { BookBundle } from '../types/book-bundle.type';
import { CreateBundleDto } from '../dtos/create-bundle.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BundleRepository implements BundleRepositoryInterface {
  constructor(private prisma: PrismaService) {}

  async findById(id: number): Promise<BookType | null> {
    return await this.prisma.bundle.findUnique({
      where: { id: id },
    });
  }

  async findNestedBooksById(id: number): Promise<BookBundle | null> {
    return await this.prisma.bundle.findUnique({
      where: { id: id },
      select: {
        books: true,
        bundles: true,
      },
    });
  }

  async store(data: CreateBundleDto): Promise<BookType> {
    return await this.prisma.bundle.create({
      data: {
        name: data.name,
        price: data.price,
        bundles: {
          connect: data.bundleIds.map((id) => ({ id })),
        },
        books: {
          connect: data.bookIds.map((id) => ({ id })),
        },
      },
    });
  }
}
