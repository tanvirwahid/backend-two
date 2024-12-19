import { CreatePostDto } from '../../dtos/create-post.dto';
import { PostType } from '../../types/post.type';

export interface PostRepositoryInterface {
  store<T extends PostType>(createPostData: CreatePostDto): Promise<T>;
  findById<T extends PostType>(id: number): Promise<T | null>;
}
