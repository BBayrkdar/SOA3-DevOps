import { ItemStatus } from './ItemStatus';
import { BacklogItem } from '../models/BacklogItem';
import { DoneStatus } from './DoneStatus';

export class InTestingStatus implements ItemStatus {
  name = 'In Testing';
  constructor(private item: BacklogItem) {}
  nextStatus() {
    this.item.changeStatus(new DoneStatus(this.item));
  }
}
