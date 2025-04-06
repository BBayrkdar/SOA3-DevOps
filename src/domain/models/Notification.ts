export class Notification {
    constructor(
      public id: string,
      public itemId: string,
      public channel: string,
      public message: string,
      public timestamp: Date = new Date()
    ) {}
  }