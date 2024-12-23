import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { PostModule } from '../post/post.module';
import { UserReputationIncrementService } from './services/user-reputation-increment.service';
import { PostScoreIncrementService } from './services/post-score-increment.service';
import { PostSupportService } from './services/post-support.service';
import { PostSupportController } from './controllers/post-support.controller';
import { PostScoreDecrementService } from './services/post-score-decrement.service';
import { UserReputationDecrementService } from './services/user-reputation-decrement.service';
import { SupportFactory } from './services/factories/support.factory';
import { SupportAdderFactory } from './services/factories/support-adder.factory';
import { SupportRemoverFactory } from './services/factories/support-remover.factory';
import { PostSupportCache } from './cache/post-support.cache';

@Module({
  imports: [UserModule, PostModule],
  providers: [
    UserReputationIncrementService,
    PostScoreIncrementService,
    PostSupportService,
    PostScoreDecrementService,
    UserReputationDecrementService,
    SupportFactory,
    SupportAdderFactory,
    SupportRemoverFactory,
    PostSupportCache,
  ],
  controllers: [PostSupportController],
})
export class PostSupportModule {}
