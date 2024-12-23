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
import { PostService } from '../services/post.service';
import { CreatePostDto } from '../dtos/create-post.dto';
import { PostDto } from '../dtos/post.dto';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async store(@Body() createPostData: CreatePostDto) {
    const post = await this.postService.store(createPostData);

    return {
      status: 'success',
      data: new PostDto(
        post.id,
        post.title,
        post.body,
        post.userId,
        post.score,
      ),
      message: 'Post created successfully',
    };
  }

  @Get('/:id')
  async show(@Param('id', ParseIntPipe) id: number) {
    const post = await this.postService.findById(id);

    return {
      status: 'success',
      data: new PostDto(
        post.id,
        post.title,
        post.body,
        post.userId,
        post.score,
      ),
      message: 'Post created successfully',
    };
  }
}
