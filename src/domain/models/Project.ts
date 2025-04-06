export class Project {
    constructor(
      public id: string,
      public name: string,
      public startDate: Date,
      public teamMembers: string[]
    ) {}
  }