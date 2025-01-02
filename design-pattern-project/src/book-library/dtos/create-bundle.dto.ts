import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { ValidateIfBooksExists } from '../validators/books-exist.validator';
import { ValidateIfBundlesExists } from '../validators/bundles-exist.validator';
import { Expose } from 'class-transformer';

export class CreateBundleDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @Expose({ name: 'bundle_ids' })
  @IsArray()
  @IsInt({ each: true })
  @ValidateIfBundlesExists()
  bundleIds: number[];

  @Expose({ name: 'book_ids' })
  @IsArray()
  @IsInt({ each: true })
  @ValidateIfBooksExists()
  bookIds: number[];
}
