import { CreatePostDto } from '../../dtos/create-post.dto';
import { PostType } from '../../types/post.type';
import { Support } from '../../types/support.type';

export interface PostRepositoryInterface {
  store<T extends PostType>(createPostData: CreatePostDto): Promise<T>;
  findById<T extends PostType>(id: number): Promise<T | null>;
  addSupport<T extends Support>(postId: number, userId: number): Promise<T>;
  removeSupport<T extends Support>(postId: number, userId: number): Promise<T>;
  checkIfSupportedByUser(userId: number, postId: number): Promise<boolean>;
  increaseScore(id: number, amount: number);
  decreaseScore(id: number, amount: number);
}
