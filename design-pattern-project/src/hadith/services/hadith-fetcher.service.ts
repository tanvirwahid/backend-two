import { Injectable } from '@nestjs/common';
import { HadithService } from './hadith.service';
import { DemoHadithLibraryMock } from '../libraries/demo-hadith-library.mock';
import { CreateHadithDto } from '../dtos/create-hadith.dto';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class HadithFetcherService {
  private retry: number = 3;
  private retryDelay: number = 3000;

  constructor(
    private hadithService: HadithService,
    private library: DemoHadithLibraryMock,
  ) {}

  @Cron('0 0 * * *')
  async getHadith() {
    try {
      const hadith = await this.library.getHadith();
      if (hadith === '') {
        throw new Error('Library returned empty string');
      }

      this.hadithService.store(new CreateHadithDto(hadith));
      console.log('Success');
    } catch (error) {
      if (this.retry > 0) {
        console.log(`Retrying... ${this.retry} retries left`);
        this.retry--;
        this.retryDelay += 3;
        setTimeout(() => this.getHadith(), this.retryDelay);
      } else {
        console.log(`Error after all retries: ${error.message}`);
      }
    }
  }
}
