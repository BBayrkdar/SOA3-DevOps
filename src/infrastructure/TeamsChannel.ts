import { NotificationChannel } from '../interfaces/NotificationChannel';
import { NotificationMessage } from '../interfaces/NotificationMessage';

export class TeamsChannel implements NotificationChannel {
  send(message: NotificationMessage): void {
    console.log(`[Teams] ${message}`);
  }
}
