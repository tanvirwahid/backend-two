import {Module} from '@nestjs/common';
import {PostController} from './controllers/post.controller';
import {PostService} from './services/post.service';
import {UserExistsConstraint} from "./Validators/user-exists.validator";
import {PostRepository} from "./Repositories/post.repository";
import {POST_REPOSITORY} from "./contracts/tokens/post-repository.token";
import {UserModule} from "../user/user.module";

@Module({
    imports: [UserModule],
    controllers: [PostController],
    providers: [
        PostService,
        UserExistsConstraint,
        {
            provide: POST_REPOSITORY,
            useClass: PostRepository,
        },
    ],
    exports: [PostService]
})
export class PostModule {
}
