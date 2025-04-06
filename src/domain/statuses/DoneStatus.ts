import { ItemStatus } from './ItemStatus';
import { BacklogItem } from '../models/BacklogItem';

export class DoneStatus implements ItemStatus {
  name = 'Done';
  constructor(private item: BacklogItem) {}
  nextStatus() {
    console.log('Item already completed.');
  }
}
