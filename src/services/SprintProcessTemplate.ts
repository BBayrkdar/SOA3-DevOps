import { Sprint } from '../domain/models/Sprint';
import { BacklogItem } from '../domain/models/BacklogItem';

export abstract class SprintProcessTemplate {
  execute(sprint: Sprint, items: BacklogItem[]) {
    this.startSprint(sprint);
    this.beforeWork(sprint, items);
    this.doWork(sprint, items);
    this.afterWork(sprint, items);
    this.finishSprint(sprint, items);
  }

  protected startSprint(sprint: Sprint) {
    console.log(`Sprint '${sprint.name}' started.`);
  }

  protected beforeWork(sprint: Sprint, items: BacklogItem[]) {}
  protected abstract doWork(sprint: Sprint, items: BacklogItem[]): void;
  protected afterWork(sprint: Sprint, items: BacklogItem[]) {}

  protected finishSprint(sprint: Sprint, items: BacklogItem[]) {
    console.log(`Sprint '${sprint.name}' finished.`);
    for (const item of items) {
      if (item.status.name !== 'Done') {
        console.warn(`Item '${item.title}' not completed.`);
      }
    }
  }
}
