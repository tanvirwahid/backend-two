import { Module } from '@nestjs/common';
import {UserExistsConstraint} from "./validators/user-exists.validator";

@Module({
    providers: [UserExistsConstraint],
    exports: [UserExistsConstraint]
})
export class UserModule {}
