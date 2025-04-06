import { ItemStatus } from './ItemStatus';
import { BacklogItem } from '../models/BacklogItem';
import { InTestingStatus } from './InTestingStatus';

export class ReadyForTestingStatus implements ItemStatus {
  name = 'Ready for Testing';
  constructor(private item: BacklogItem) {}
  nextStatus() {
    this.item.changeStatus(new InTestingStatus(this.item));
  }
}
