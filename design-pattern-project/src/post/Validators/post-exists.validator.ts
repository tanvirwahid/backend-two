import { Inject, Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { PostRepositoryInterface } from '../contracts/repositories/post-repository.contract';
import { POST_REPOSITORY } from '../contracts/tokens/post-repository.token';

@Injectable()
@ValidatorConstraint({ async: true })
export class PostExistsValidator implements ValidatorConstraintInterface {
  constructor(
    @Inject(POST_REPOSITORY)
    private postRepository: PostRepositoryInterface,
  ) {}

  defaultMessage(validationArguments?: ValidationArguments): string {
    return 'Post does not exist';
  }

  async validate(postId: number): Promise<boolean> {
    const post = await this.postRepository.findById(postId);

    return !!post;
  }
}

export function ValidateIfPostExists(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: PostExistsValidator,
    });
  };
}
