import { Task } from './Task';
import { ItemStatus } from '../statuses/ItemStatus';
import { ToDoStatus } from '../statuses/ToDoStatus';

export class BacklogItem {
  public tasks: Task[] = [];
  public status: ItemStatus = new ToDoStatus(this);

  constructor(
    public id: string,
    public sprintId: string,
    public title: string,
    public description: string,
    public assignee: string
  ) {}

  addTask(task: Task) {
    this.tasks.push(task);
  }

  changeStatus(newStatus: ItemStatus) {
    this.status = newStatus;
  }
}
