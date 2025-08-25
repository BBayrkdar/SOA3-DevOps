import { NotificationFactory } from './NotificationFactory'
import { NotificationPort } from '../ports/NotificationPort'
import { EmailAdapter } from '../../infrastructure/adapters/notification/EmailAdapter'
import { SlackAdapter } from '../../infrastructure/adapters/notification/SlackAdapter'
import { TeamsAdapter } from '../../infrastructure/adapters/notification/TeamsAdapter'

export class DefaultNotificationFactory implements NotificationFactory {
  create(channel: 'email'|'slack'|'teams'): NotificationPort {
    switch(channel){
      case 'email': return new EmailAdapter()
      case 'slack': return new SlackAdapter()
      case 'teams': return new TeamsAdapter()
      default: throw new Error('Unknown channel')
    }
  }
}
