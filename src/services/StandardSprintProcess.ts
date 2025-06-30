import { BacklogItem } from '../domain/models/BacklogItem';
import { Sprint } from '../domain/models/Sprint';
import { SprintProcessTemplate } from './SprintProcessTemplate';

export class StandardSprintProcess extends SprintProcessTemplate {
  protected doWork(sprint: Sprint, items: BacklogItem[]): void {
    console.log('Working on sprint items...');
  }
}
