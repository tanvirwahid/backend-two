import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CommentFormDataDto } from '../dtos/comment-form-data.dto';
import { CommentService } from '../services/comment.service';
import { CreateCommentDto } from '../dtos/create-comment.dto';
import { CommentDto } from '../dtos/comment.dto';

@Controller('posts/:postId/comments')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async store(
    @Param('postId', ParseIntPipe) postId: number,
    @Body() comment: CommentFormDataDto,
  ) {
    const createdComment = await this.commentService.store(
      CreateCommentDto.fromRequest(postId, comment),
    );
    return {
      status: 'success',
      data: new CommentDto(
        createdComment.id,
        createdComment.userId,
        createdComment.postId,
        createdComment.body,
      ),
      message: 'Comment created successfully',
    };
  }
}
