import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CacheController } from './cache/cache.controller';
import { PublicDirectiveMiddleware } from './middlewares/publicDirective.middleware';
import { PrivateDirectiveMiddleware } from './middlewares/privateDirective.middleware';
import { NoStoreDirectiveMiddleware } from './middlewares/noStoreDirective.middleware';
import { NoCacheDirectiveMiddleware } from './middlewares/noCacheDirective.middleware';
import { MustRevalidateMiddleware } from './middlewares/MustRevalidate.middleware';

@Module({
  imports: [],
  controllers: [CacheController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
      .apply(PublicDirectiveMiddleware)
      .forRoutes('public')
      .apply(PrivateDirectiveMiddleware)
      .forRoutes('private')
      .apply(NoStoreDirectiveMiddleware)
      .forRoutes('no-store')
      .apply(NoCacheDirectiveMiddleware)
      .forRoutes('no-cahce')
      .apply(MustRevalidateMiddleware)
      .forRoutes('must-revalidate');
  }
}
