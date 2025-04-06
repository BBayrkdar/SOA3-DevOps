import { Sprint } from '../domain/models/Sprint';
import { BacklogItem } from '../domain/models/BacklogItem';

export class SprintService {
  static startSprint(sprint: Sprint) {
    console.log(`Sprint '${sprint.name}' started.`);
  }

  static finishSprint(sprint: Sprint, backlogItems: BacklogItem[]) {
    console.log(`Sprint '${sprint.name}' finished.`);
    for (const item of backlogItems) {
      if (item.status.name !== 'Done') {
        console.warn(`Item '${item.title}' not completed.`);
      }
    }
  }
}
