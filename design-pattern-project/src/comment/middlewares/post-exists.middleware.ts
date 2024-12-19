import {Injectable, NestMiddleware} from '@nestjs/common';
import {PostService} from "../../post/services/post.service";
import {Request, Response} from "express";

@Injectable()
export class PostExistsMiddleware implements NestMiddleware {

    constructor(private postService: PostService) {
    }

    use(req: Request, res: Response, next: () => void) {
        const postId = req.params.postId;
        const post = this.postService.findById(Number(postId));

        if (!post) {
            return res.status(404).json({
                status: 'error',
                message: `Post with ID ${postId} not found`,
            });
        }

        next();
    }
}
