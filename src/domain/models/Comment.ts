export class Comment {
    constructor(
      public id: string,
      public author: string,
      public message: string,
      public createdAt: Date = new Date()
    ) {}
}
