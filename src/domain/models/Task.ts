import { WorkItem } from "../../interfaces/WorkItem";

export class Task implements WorkItem{
    constructor(
      public id: string,
      public itemId: string,
      public parentId: string,
      public title: string,
      public description: string,
      public completed: boolean = false
    ) {}

    getTitle(): string {
      return this.title;
    }
  }