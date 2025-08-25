export class Comment {
  constructor(
    public readonly id: string,
    public readonly author: string,
    public readonly message: string,
    public readonly at: Date = new Date()
  ) {}
}
