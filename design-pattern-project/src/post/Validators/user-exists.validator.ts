import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/services/prisma.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class UserExistsConstraint implements ValidatorConstraintInterface {
  constructor(@Inject(PrismaService) private readonly prisma: PrismaService) {}

  async validate(userId: number): Promise<boolean> {
    if (!userId) {
      return false;
    }

    const userFromDb = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    return !!userFromDb;
  }

  defaultMessage(args: ValidationArguments): string {
    return `User does not exist`;
  }
}

export function ValidateIfUserExists(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: UserExistsConstraint,
    });
  };
}
