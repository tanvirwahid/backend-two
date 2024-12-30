import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BookService } from '../services/book.service';
import { CreateBookDto } from '../dtos/create-book.dto';
import { BookDto } from '../dtos/book.dto';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async store(@Body() data: CreateBookDto) {
    const book = await this.bookService.store(data);

    return {
      status: 'success',
      data: BookDto.fromBookType(book),
      message: 'Book created successfully',
    };
  }

  @Get('/:id')
  async show(@Param('id', ParseIntPipe) id: number) {
    const book = await this.bookService.findById(id);

    return {
      status: 'success',
      data: BookDto.fromBookType(book),
      message: 'Book fetched successfully',
    };
  }
}
