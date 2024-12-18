import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HashService } from './services/hash/hash.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, HashService],
})
export class AppModule {}
