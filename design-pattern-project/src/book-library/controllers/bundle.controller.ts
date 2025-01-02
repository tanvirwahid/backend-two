import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateBundleDto } from '../dtos/create-bundle.dto';
import { BundleService } from '../services/bundle.service';

@Controller('bundles')
export class BundleController {
  constructor(private bundleService: BundleService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async store(@Body() data: CreateBundleDto) {
    const bundle = await this.bundleService.store(data);

    return bundle;
  }

  @Get('/:id')
  async show(@Param('id', ParseIntPipe) id: number) {
    return await this.bundleService.findDetailsById(id);
  }
}
