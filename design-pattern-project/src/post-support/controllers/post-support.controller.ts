import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PostSupportService } from '../services/post-support.service';
import { CreatePostSupportDto } from '../dtos/create-post-support.dto';
import { PostSupport } from '../dtos/post-support.dto';

@Controller('post-supports')
export class PostSupportController {
  constructor(private postSupportService: PostSupportService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async store(@Body() data: CreatePostSupportDto) {
    const postSupport = await this.postSupportService.createPostSupport(data);

    return {
      status: 'success',
      data: new PostSupport(postSupport.postId, postSupport.userId),
      message: 'Success',
    };
  }
}
