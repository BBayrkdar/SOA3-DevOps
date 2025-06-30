import { WorkItem } from '../../interfaces/WorkItem';

export class Task implements WorkItem {
  constructor(
    public id: string,
    public parentId: string,
    public title: string,
    public description: string
  ) {}

  getTitle(): string {
    return this.title;
  }
}
