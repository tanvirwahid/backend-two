import { IsInt, IsNotEmpty } from 'class-validator';
import { ValidateIfUserExists } from '../../user/validators/user-exists.validator';
import { Expose, Transform } from 'class-transformer';
import { ValidateIfPostExists } from '../../post/Validators/post-exists.validator';

export class CreatePostSupportDto {
  @IsNotEmpty({ message: 'user_id is required' })
  @IsInt({ message: 'User ID must be an integer.' })
  @ValidateIfUserExists()
  @Transform(({ value }) => Number(value), { toClassOnly: true })
  @Expose({ name: 'user_id' })
  userId: number;

  @IsNotEmpty({ message: 'post_id is required' })
  @IsInt({ message: 'Post ID must be an integer.' })
  @ValidateIfPostExists()
  @Transform(({ value }) => Number(value), { toClassOnly: true })
  @Expose({ name: 'post_id' })
  postId: number;
}
