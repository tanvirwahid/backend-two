import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HashService } from './services/hash/hash.service';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { UserModule } from './user/user.module';
import { PostSupportModule } from './post-support/post-support.module';
import { CustomCacheModule } from './cache/cache.module';
import { HadithModule } from './hadith/hadith.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    PrismaModule,
    PostModule,
    CommentModule,
    UserModule,
    PostSupportModule,
    CustomCacheModule,
    HadithModule,
  ],
  controllers: [AppController],
  providers: [AppService, HashService],
})
export class AppModule {}
