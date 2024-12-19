import {MiddlewareConsumer, Module, NestModule, RequestMethod} from '@nestjs/common';
import { CommentController } from './controllers/comment.controller';
import {UserModule} from "../user/user.module";
import {COMMENT_REPOSITORY} from "./contracts/tokens/comment-repository.token";
import {CommentRepository} from "./repositories/comment.repository";
import { CommentService } from './services/comment.service';
import {PostExistsMiddleware} from "./middlewares/post-exists.middleware";
import {PostModule} from "../post/post.module";

@Module({
  imports: [UserModule, PostModule],
  controllers: [CommentController],
  providers: [
    {
      provide: COMMENT_REPOSITORY,
      useClass: CommentRepository
    },
    CommentService
  ]
})
export class CommentModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(PostExistsMiddleware)
        .forRoutes({ path: 'posts/:postId*', method: RequestMethod.ALL });
  }
}
