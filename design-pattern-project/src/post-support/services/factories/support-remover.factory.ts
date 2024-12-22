import { UserService } from '../../../user/services/user.service';
import { PostScoreDecrementService } from '../post-score-decrement.service';
import { UserReputationDecrementService } from '../user-reputation-decrement.service';
import { ScoreDecrementInterface } from '../../contracts/score-decrement.interface';
import { SupportModifierFactoryInterface } from '../../contracts/support-modifier-factory.interface';
import { Injectable } from '@nestjs/common';
import { DbService } from '../../../prisma/services/db.service';
import { Support } from '../../../post/types/support.type';
import { PostService } from '../../../post/services/post.service';

@Injectable()
export class SupportRemoverFactory implements SupportModifierFactoryInterface {
  constructor(
    private dbService: DbService,
    private postService: PostService,
    private userService: UserService,
    private postScoreDecrementService: PostScoreDecrementService,
    private userReputationDecrementService: UserReputationDecrementService,
  ) {}

  async getService(
    userId: number,
    postId: number,
  ): Promise<ScoreDecrementInterface> {
    const isAdmin = await this.userService.checkIfAdmin(userId);

    if (isAdmin) {
      this.userReputationDecrementService.setUserId(userId);
      return this.userReputationDecrementService;
    }

    this.postScoreDecrementService.setPostId(postId);
    return this.postScoreDecrementService;
  }

  async modifySupport(userId: number, postId: number): Promise<Support> {
    const service = await this.getService(userId, postId);

    return this.dbService.transaction(async () => {
      const support = await this.postService.removeSupport(postId, userId);
      await service.decrementScore();
      return support;
    });
  }
}
