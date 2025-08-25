import { NotificationPort } from '../../../application/ports/NotificationPort'

export class SlackAdapter implements NotificationPort {
  async send(to: string[], subject: string, body: string){
    console.log('[Slack]', { to, subject, body })
  }
}
