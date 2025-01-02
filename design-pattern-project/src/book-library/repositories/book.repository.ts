import { BookRepositoryInterface } from '../contracts/repositories/book-repository.interface';
import { PrismaService } from '../../prisma/services/prisma.service';
import { CreateBookDto } from '../dtos/create-book.dto';
import { BookType } from '../types/book.type';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BookRepository implements BookRepositoryInterface {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: number): Promise<BookType | null> {
    return await this.prisma.book.findFirst({
      where: { id: id },
    });
  }

  async store(data: CreateBookDto): Promise<BookType> {
    return await this.prisma.book.create({
      data: {
        name: data.name,
        author: data.author,
        price: data.price,
      },
    });
  }
}
