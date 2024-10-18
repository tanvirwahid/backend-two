import { Controller, Get } from '@nestjs/common';

@Controller('')
export class CacheController {
  @Get('public')
  publicDirective() {
    return 'public';
  }

  @Get('private')
  privateDirective() {
    return 'private';
  }

  @Get('no-store')
  noStoreDirective() {
    return 'no-store';
  }

  @Get('no-cahce')
  noCacheDirective() {
    return 'no-cache';
  }

  @Get('must-revalidate')
  mustRevalidateDirective() {
    return 'must-revalidate';
  }
}
