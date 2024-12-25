import { Controller, Get } from '@nestjs/common';
import { HadithService } from '../services/hadith.service';

@Controller('daily-hadiths')
export class HadithController {
  constructor(private hadithService: HadithService) {}

  @Get()
  async getTodaysHadith() {
    return {
      succes: true,
      data: await this.hadithService.findLatest(),
      message: 'Successfully fetched',
    };
  }
}
