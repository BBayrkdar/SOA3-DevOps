import { NotificationPort } from '../ports/NotificationPort'
export interface NotificationFactory {
  create(channel: 'email'|'slack'|'teams'): NotificationPort
}
