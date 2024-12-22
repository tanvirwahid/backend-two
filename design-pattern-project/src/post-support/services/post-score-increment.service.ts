import { Injectable } from '@nestjs/common';
import { PostService } from '../../post/services/post.service';
import { ScoreIncrementInterface } from '../contracts/score-increment.interface';
import { SCORE_ADD_IF_SUPPORTED_BY_NORMAL_USER } from '../constants';

@Injectable()
export class PostScoreIncrementService implements ScoreIncrementInterface {
  private postId: number;

  constructor(private postService: PostService) {}

  setPostId(value: number) {
    this.postId = value;
  }

  async increaseScore() {
    await this.postService.increaseScore(
      this.postId,
      SCORE_ADD_IF_SUPPORTED_BY_NORMAL_USER,
    );
  }
}
