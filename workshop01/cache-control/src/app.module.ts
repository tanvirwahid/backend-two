import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { SampleController } from './sample/sample.controller';
import { CacheControlMiddleware } from './cache-control/cacheControl.middleware';

@Module({
  imports: [],
  controllers: [SampleController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(CacheControlMiddleware).forRoutes('sample');
  }
}
