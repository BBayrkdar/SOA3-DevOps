import { ItemStatus } from './ItemStatus';
import { BacklogItem } from '../models/BacklogItem';
import { InProgressStatus } from './InProgressStatus';

export class ToDoStatus implements ItemStatus {
  name = 'To Do';
  constructor(private item: BacklogItem) {}
  nextStatus() {
    this.item.changeStatus(new InProgressStatus(this.item));
  }
}
