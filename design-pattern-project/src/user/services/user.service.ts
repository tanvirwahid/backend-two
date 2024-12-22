import { Inject, Injectable } from '@nestjs/common';
import {
  USER_REPOSITORY,
  UserRepositoryInterface,
} from '../contracts/repositories/user-repository.contract';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY)
    private userRepository: UserRepositoryInterface,
  ) {}

  async checkIfAdmin(id: number): Promise<boolean> {
    return this.userRepository.checkIfAdminById(id);
  }

  async increaseReputation(id: number, amount: number) {
    await this.userRepository.increaseReputationById(id, amount);
  }

  async decreaseReputation(id: number, amount: number) {
    await this.userRepository.decreaseReputationById(id, amount);
  }
}
