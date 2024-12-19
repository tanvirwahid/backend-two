import {CommentFormDataDto} from "./comment-form-data.dto";

export class CreateCommentDto {

    constructor(
        public userId: number,
        public postId: number,
        public body: string
    ) {}

    static fromRequest(postId:number, data: CommentFormDataDto): CreateCommentDto
    {
        return new CreateCommentDto(data.userId, postId, data.body);
    }
}