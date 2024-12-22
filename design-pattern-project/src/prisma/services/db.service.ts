import { Inject, Injectable } from '@nestjs/common';
import {
  DB_REPOSITORY_INTERFACE,
  RepositoryInterface,
} from '../contracts/repository.contract';

@Injectable()
export class DbService {
  constructor(
    @Inject(DB_REPOSITORY_INTERFACE) private repository: RepositoryInterface,
  ) {}

  async transaction<T>(callBack: () => Promise<T>): Promise<T> {
    return await this.repository.executeTransaction(callBack);
  }
}
