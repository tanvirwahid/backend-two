import { Injectable } from '@nestjs/common';
import { PostScoreIncrementService } from '../post-score-increment.service';
import { UserReputationIncrementService } from '../user-reputation-increment.service';
import { SupportModifierFactoryInterface } from '../../contracts/support-modifier-factory.interface';
import { ScoreIncrementInterface } from '../../contracts/score-increment.interface';
import { UserService } from '../../../user/services/user.service';
import { DbService } from '../../../prisma/services/db.service';
import { PostService } from '../../../post/services/post.service';
import { Support } from '../../../post/types/support.type';

@Injectable()
export class SupportAdderFactory implements SupportModifierFactoryInterface {
  constructor(
    private dbService: DbService,
    private postService: PostService,
    private userService: UserService,
    private postScoreIncrementService: PostScoreIncrementService,
    private userReputationIncrementService: UserReputationIncrementService,
  ) {}

  async getService(
    userId: number,
    postId: number,
  ): Promise<ScoreIncrementInterface> {
    const isAdmin = await this.userService.checkIfAdmin(userId);

    if (isAdmin) {
      this.userReputationIncrementService.setUserId(userId);
      return this.userReputationIncrementService;
    }

    this.postScoreIncrementService.setPostId(postId);
    return this.postScoreIncrementService;
  }

  async modifySupport(userId: number, postId: number): Promise<Support> {
    const service = await this.getService(userId, postId);

    return this.dbService.transaction(async () => {
      const support = await this.postService.addSupport(postId, userId);
      await service.increaseScore();
      return support;
    });
  }
}
