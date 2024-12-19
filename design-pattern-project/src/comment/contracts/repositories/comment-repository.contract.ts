import { CreateCommentDto } from '../../dtos/create-comment.dto';
import { CommentType } from '../../types/comment.type';

export interface CommentRepositoryInterface {
  store<T extends CommentType>(commentData: CreateCommentDto): Promise<T>;
}
