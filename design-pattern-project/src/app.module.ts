import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HashService } from './services/hash/hash.service';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, PostModule, CommentModule, UserModule],
  controllers: [AppController],
  providers: [AppService, HashService],
})
export class AppModule {}
