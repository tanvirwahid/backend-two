import { Inject, Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import {
  BundleRepositoryInterface,
  TOKEN_BUNDLE_REPOSITORY,
} from '../contracts/repositories/bundle-repository.interface';

@Injectable()
@ValidatorConstraint({ async: true })
export class BundlesExistValidator implements ValidatorConstraintInterface {
  constructor(
    @Inject(TOKEN_BUNDLE_REPOSITORY)
    private bundleRepository: BundleRepositoryInterface,
  ) {}

  defaultMessage(validationArguments?: ValidationArguments): string {
    return 'One or more bundles does not exists';
  }

  async validate(bookIds: number[]): Promise<boolean> {
    for (const id of bookIds) {
      const book = await this.bundleRepository.findById(id);
      if (!book) {
        return false;
      }
    }
    return true;
  }
}

export function ValidateIfBundlesExists(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: BundlesExistValidator,
    });
  };
}
