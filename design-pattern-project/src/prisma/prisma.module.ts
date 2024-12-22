import { Global, Module } from '@nestjs/common';
import { PrismaService } from './services/prisma.service';
import { DB_REPOSITORY_INTERFACE } from './contracts/repository.contract';
import { DbRepository } from './repositories/db.repository';
import { DbService } from './services/db.service';

@Global()
@Module({
  providers: [
    PrismaService,
    {
      provide: DB_REPOSITORY_INTERFACE,
      useClass: DbRepository,
    },
    DbService,
  ],
  exports: [PrismaService, DbService],
})
export class PrismaModule {}
