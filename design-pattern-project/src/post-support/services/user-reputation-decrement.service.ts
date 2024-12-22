import { Injectable } from '@nestjs/common';
import { UserService } from '../../user/services/user.service';
import { REPUTATION_ADD_IF_SUPPORTED_BY_ADMIN } from '../constants';
import { ScoreDecrementInterface } from '../contracts/score-decrement.interface';

@Injectable()
export class UserReputationDecrementService implements ScoreDecrementInterface {
  private userId: number;

  constructor(private userService: UserService) {}

  setUserId(value: number) {
    this.userId = value;
  }

  async decrementScore() {
    await this.userService.decreaseReputation(
      this.userId,
      REPUTATION_ADD_IF_SUPPORTED_BY_ADMIN,
    );
  }
}
