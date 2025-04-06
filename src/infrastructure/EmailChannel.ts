import { NotificationChannel } from '../interfaces/NotificationChannel';
import { NotificationMessage } from '../interfaces/NotificationMessage';

export class EmailChannel implements NotificationChannel {
  send(message: NotificationMessage): void {
    console.log(`[Email] ${message}`);
  }
}
