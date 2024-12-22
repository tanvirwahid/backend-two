import { Injectable } from '@nestjs/common';
import { ScoreDecrementInterface } from '../contracts/score-decrement.interface';
import { PostService } from '../../post/services/post.service';
import { SCORE_ADD_IF_SUPPORTED_BY_NORMAL_USER } from '../constants';

@Injectable()
export class PostScoreDecrementService implements ScoreDecrementInterface {
  private postId: number;

  constructor(private postService: PostService) {}

  setPostId(value: number) {
    this.postId = value;
  }

  async decrementScore() {
    await this.postService.decreseScore(
      this.postId,
      SCORE_ADD_IF_SUPPORTED_BY_NORMAL_USER,
    );
  }
}
