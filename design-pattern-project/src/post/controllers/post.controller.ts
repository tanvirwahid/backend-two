import {Body, Controller, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {PostService} from "../services/post.service";
import {CreatePostDto} from "../dtos/create-post.dto";

@Controller('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Post()
    @UsePipes(new ValidationPipe({ transform: true,  whitelist: true}))
    async store(@Body() createPostData: CreatePostDto) {
        return this.postService.store(createPostData);
    }
}
