export class Sprint {
    constructor(
      public id: string,
      public projectId: string,
      public name: string,
      public startDate: Date,
      public endDate: Date
    ) {}
  }