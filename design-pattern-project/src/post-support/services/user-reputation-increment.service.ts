import { Injectable } from '@nestjs/common';
import { ScoreIncrementInterface } from '../contracts/score-increment.interface';
import { UserService } from '../../user/services/user.service';
import { REPUTATION_ADD_IF_SUPPORTED_BY_ADMIN } from '../constants';

@Injectable()
export class UserReputationIncrementService implements ScoreIncrementInterface {
  private userId: number;

  constructor(private userService: UserService) {}

  setUserId(value: number) {
    this.userId = value;
  }

  async increaseScore() {
    await this.userService.increaseReputation(
      this.userId,
      REPUTATION_ADD_IF_SUPPORTED_BY_ADMIN,
    );
  }
}
