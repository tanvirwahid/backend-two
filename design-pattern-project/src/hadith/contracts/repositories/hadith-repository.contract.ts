import { CreateHadithDto } from '../../dtos/create-hadith.dto';
import { Hadith } from '../../types/hadith.type';

export interface HadithRepositoryInterface {
  store(data: CreateHadithDto): Promise<Hadith>;
  findLatest(): Promise<Hadith | null>;
}

export const HADITH_REPOSITORY = 'HadithRepository';
