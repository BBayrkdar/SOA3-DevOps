import { BacklogItem } from '../domain/models/BacklogItem';
import { Sprint } from '../domain/models/Sprint';
import { SprintProcessTemplate } from './SprintProcessTemplate';

export class SprintService {
  static runProcess(process: SprintProcessTemplate, sprint: Sprint, items: BacklogItem[]) {
    process.execute(sprint, items);
  }
}