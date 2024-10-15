import { Controller, Get } from '@nestjs/common';

@Controller('sample')
export class SampleController {
  @Get()
  public index() {
    return 'working';
  }
}
