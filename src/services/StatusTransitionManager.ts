import { BacklogItem } from '../domain/models/BacklogItem';
import { NotificationService } from './NotificationService';

export class StatusTransitionManager {
  static advanceStatus(item: BacklogItem) {
    item.status.nextStatus();
    NotificationService.notify(item);
  }
}

