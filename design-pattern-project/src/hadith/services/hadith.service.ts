import { Inject, Injectable } from '@nestjs/common';
import {
  HADITH_REPOSITORY,
  HadithRepositoryInterface,
} from '../contracts/repositories/hadith-repository.contract';
import { CreateHadithDto } from '../dtos/create-hadith.dto';
import { Hadith } from '../types/hadith.type';

@Injectable()
export class HadithService {
  constructor(
    @Inject(HADITH_REPOSITORY)
    private hadithRepository: HadithRepositoryInterface,
  ) {}

  async store(data: CreateHadithDto): Promise<Hadith> {
    return await this.hadithRepository.store(data);
  }

  async findLatest(): Promise<Hadith | null> {
    return await this.hadithRepository.findLatest();
  }
}
