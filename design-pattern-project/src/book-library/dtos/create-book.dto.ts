import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
