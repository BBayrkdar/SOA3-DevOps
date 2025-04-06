import { ItemStatus } from './ItemStatus';
import { BacklogItem } from '../models/BacklogItem';
import { ReadyForTestingStatus } from './ReadyForTestingStatus';

export class InProgressStatus implements ItemStatus {
  name = 'In Progress';
  constructor(private item: BacklogItem) {}
  nextStatus(item: BacklogItem) {
    item.changeStatus(new ReadyForTestingStatus(item));
  }
}
