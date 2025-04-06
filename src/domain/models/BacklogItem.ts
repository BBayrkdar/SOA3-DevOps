import { Task } from './Task';
import { ItemStatus } from '../statuses/ItemStatus';
import { ToDoStatus } from '../statuses/ToDoStatus';
import { Comment } from './Comment';

export class BacklogItem {
  public tasks: Task[] = [];
  public status: ItemStatus = new ToDoStatus(this);
  public comments: Comment[] = [];
  public createdAt: Date = new Date();

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

  addComment(comment: Comment): void {
    if (this.status.name === 'Done') {
      throw new Error('Cannot comment on completed items.');
    }
    this.comments.push(comment);
  }
}
