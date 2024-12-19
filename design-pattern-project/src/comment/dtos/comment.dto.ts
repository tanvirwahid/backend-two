export class CommentDto {
  constructor(
    public id: number,
    public userId: number,
    public postId: number,
    public body: string,
  ) {}
}
