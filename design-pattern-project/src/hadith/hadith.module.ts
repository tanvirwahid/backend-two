import { Module } from '@nestjs/common';
import { HadithService } from './services/hadith.service';
import { HADITH_REPOSITORY } from './contracts/repositories/hadith-repository.contract';
import { HadithRepository } from './repositories/hadith.repository';
import { HadithFetcherService } from './services/hadith-fetcher.service';
import { DemoHadithLibraryMock } from './libraries/demo-hadith-library.mock';
import { HadithController } from './controllers/hadith.controller';

@Module({
  providers: [
    {
      provide: HADITH_REPOSITORY,
      useClass: HadithRepository,
    },
    HadithService,
    DemoHadithLibraryMock,
    HadithFetcherService,
  ],
  controllers: [HadithController],
})
export class HadithModule {}
