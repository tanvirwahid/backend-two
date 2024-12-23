import { Module } from '@nestjs/common';
import { PostController } from './controllers/post.controller';
import { PostService } from './services/post.service';
import { UserExistsConstraint } from './validators/user-exists.validator';
import { PostRepository } from './repositories/post.repository';
import { POST_REPOSITORY } from './contracts/tokens/post-repository.token';
import { UserModule } from '../user/user.module';
import { PostExistsValidator } from './validators/post-exists.validator';
import { PostCache } from './caches/post.cache';

@Module({
  imports: [UserModule],
  controllers: [PostController],
  providers: [
    PostService,
    UserExistsConstraint,
    PostExistsValidator,
    {
      provide: POST_REPOSITORY,
      useClass: PostRepository,
    },
    PostCache,
  ],
  exports: [PostService, PostExistsValidator],
})
export class PostModule {}
