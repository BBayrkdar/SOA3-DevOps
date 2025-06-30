import { WorkItem } from '../../interfaces/WorkItem';
import { ItemStatus } from '../statuses/ItemStatus';
import { NotificationChannel } from '../../interfaces/NotificationChannel';
import { NotificationMessage } from '../../interfaces/NotificationMessage';
import { ReportVisitor } from '../../visitors/ReportVisitor';
import { Task } from './Task';
import { ToDoStatus } from '../statuses/ToDoStatus';

export class BacklogItem implements WorkItem {
  public tasks: Task[] = [];
  private observers: NotificationChannel[] = [];
  public status: ItemStatus = new ToDoStatus(this);
  public comments: Comment[] = [];
  public createdAt: Date = new Date();

  constructor(
    public id: string,
    public sprintId: string,
    public title: string,
    public description: string,
    public assignee: string,
  ) {}

  addTask(task: Task) {
    this.tasks.push(task);
  }

  // Composite pattern
  getTitle(): string {
    return this.title;
  }

  // Observer pattern
  subscribe(observer: NotificationChannel) {
    this.observers.push(observer);
  }
  unsubscribe(observer: NotificationChannel) {
    this.observers = this.observers.filter(o => o !== observer);
  }
  notifyObservers(notification: NotificationMessage) {
    for (const obs of this.observers) {
      obs.send(notification);
    }
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
