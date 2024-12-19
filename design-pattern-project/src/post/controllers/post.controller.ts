import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
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
      data: new PostDto(post.id, post.title, post.body, post.userId),
      message: 'Post created successfully',
    };
  }
}
