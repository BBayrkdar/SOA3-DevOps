import { BacklogItem } from '../models/BacklogItem';

// State Pattern
export interface ItemStatus {
  name: string;
  nextStatus(item: BacklogItem): void;
}
