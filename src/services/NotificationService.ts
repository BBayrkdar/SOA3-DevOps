import { BacklogItem } from '../domain/models/BacklogItem';

export class NotificationService {

  static notify(item: BacklogItem) {
    const message = `Status of '${item.title}' changed to ${item.status.name}`;
    console.log(message);
  }
}
