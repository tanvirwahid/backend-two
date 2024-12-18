import {CreatePostDto} from "../../dtos/create-post.dto";
import {Post} from "@prisma/client";

export interface PostRepositoryInterface {
    store(createPostData: CreatePostDto): Promise<Post>;
}