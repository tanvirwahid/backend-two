import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HashService } from './services/hash/hash.service';
import { PrismaModule } from './prisma/prisma.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [PrismaModule, PostModule],
  controllers: [AppController],
  providers: [AppService, HashService],
})
export class AppModule {}
