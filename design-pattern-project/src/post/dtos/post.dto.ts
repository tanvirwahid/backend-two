export class PostDto {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly body: string,
    public readonly user_id: number,
  ) {}
}
