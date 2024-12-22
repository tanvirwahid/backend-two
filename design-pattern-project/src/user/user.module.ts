import { Module } from '@nestjs/common';
import { UserExistsConstraint } from './validators/user-exists.validator';
import { UserService } from './services/user.service';
import { USER_REPOSITORY } from './contracts/repositories/user-repository.contract';
import { UserRepository } from './repositories/user.repository';

@Module({
  providers: [
    UserExistsConstraint,
    UserService,
    {
      provide: USER_REPOSITORY,
      useClass: UserRepository,
    },
  ],
  exports: [UserExistsConstraint, UserService],
})
export class UserModule {}
