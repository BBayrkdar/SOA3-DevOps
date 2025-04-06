import { NotificationMessage } from './NotificationMessage';

// Strategy Pattern
export interface NotificationChannel {
    send(message: NotificationMessage): void;
}
