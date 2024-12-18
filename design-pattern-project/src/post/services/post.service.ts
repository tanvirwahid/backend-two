import {Inject, Injectable} from '@nestjs/common';
import {PostRepositoryInterface} from "../contracts/repositories/post-repository.contract";
import {POST_REPOSITORY} from "../contracts/tokens/post-repository.token";
import {CreatePostDto} from "../dtos/create-post.dto";
import {Post} from "@prisma/client";

@Injectable()
export class PostService {

    constructor(@Inject(POST_REPOSITORY) private postRepository: PostRepositoryInterface) {}

    async store(createPostData: CreatePostDto): Promise<Post>
    {
        return this.postRepository.store(createPostData);
    }
}
