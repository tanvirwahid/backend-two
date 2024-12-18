import { Module } from '@nestjs/common';
import { PostController } from './controllers/post.controller';
import { PostService } from './services/post.service';
import {UserExistsConstraint} from "./Validators/user-exists.validator";
import {PrismaModule} from "../prisma/prisma.module";
import {PostRepository} from "./Repositories/post.repository";
import {POST_REPOSITORY} from "./contracts/tokens/post-repository.token";

@Module({
  imports: [PrismaModule],
  controllers: [PostController],
  providers: [
      PostService,
      UserExistsConstraint,
      {
          provide: POST_REPOSITORY,
          useClass: PostRepository,
      },
  ]
})
export class PostModule {}
