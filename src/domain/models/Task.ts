export class Task {
    constructor(
      public id: string,
      public itemId: string,
      public title: string,
      public description: string,
      public completed: boolean = false
    ) {}
  }