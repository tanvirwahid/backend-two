import { Inject, Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import {
  BookRepositoryInterface,
  TOKEN_BOOKREPOSITORY,
} from '../contracts/repositories/book-repository.interface';

@Injectable()
@ValidatorConstraint({ async: true })
export class BooksExistValidator implements ValidatorConstraintInterface {
  constructor(
    @Inject(TOKEN_BOOKREPOSITORY)
    private bookRepository: BookRepositoryInterface,
  ) {}

  defaultMessage(validationArguments?: ValidationArguments): string {
    return 'One or more books does not exists';
  }

  async validate(bookIds: number[]): Promise<boolean> {
    for (const id of bookIds) {
      const book = await this.bookRepository.findById(id);
      if (!book) {
        return false;
      }
    }
    return true;
  }
}

export function ValidateIfBooksExists(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: BooksExistValidator,
    });
  };
}
