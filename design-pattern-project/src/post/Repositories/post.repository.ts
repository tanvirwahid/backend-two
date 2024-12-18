import {PostRepositoryInterface} from "../contracts/repositories/post-repository.contract";
import {PrismaService} from "../../prisma/services/prisma.service";
import {Post} from "@prisma/client";
import {CreatePostDto} from "../dtos/create-post.dto";
import {Injectable} from "@nestjs/common";

@Injectable()
export class PostRepository implements PostRepositoryInterface {

    constructor(private readonly prisma: PrismaService) {}

    store(createPostData: CreatePostDto): Promise<Post> {
        const { userId, title, body } = createPostData;

        return this.prisma.post.create({
            data: {
                title,
                body,
                user: {
                    connect: { id: userId },
                },
            },
        });
    }

}