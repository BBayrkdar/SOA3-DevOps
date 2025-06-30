export class Comment {
    constructor(
      public id: string = Math.random().toString(36).substring(2, 10),
      public author: string,
      public message: string,
      public createdAt: Date = new Date()
    ) {}
}