import { WorkItem } from './WorkItem'

export class Task implements WorkItem {
  constructor(
    public readonly id: string,
    public title: string,
    private effort: number
  ) {}
  getEffort() { return this.effort }
}
