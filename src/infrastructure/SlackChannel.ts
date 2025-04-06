import { NotificationChannel } from '../interfaces/NotificationChannel';
import { NotificationMessage } from '../interfaces/NotificationMessage';


export class SlackChannel implements NotificationChannel {
  send(message: NotificationMessage): void {
    console.log(`[Slack] ${message}`);
  }
}
