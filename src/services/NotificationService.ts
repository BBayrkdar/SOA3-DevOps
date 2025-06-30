import { NotificationChannel } from '../interfaces/NotificationChannel';
import { NotificationMessage } from '../interfaces/NotificationMessage';

export class NotificationService {
  private strategy: NotificationChannel;

  constructor(strategy: NotificationChannel) {
    this.strategy = strategy;
  }

  setStrategy(strategy: NotificationChannel) {
    this.strategy = strategy;
  }

  notify(notification: NotificationMessage) {
    const message = `Status of '${notification.title}' changed to ${notification.status}`;
    console.log(message);
    this.strategy.send(notification);
  }
}
