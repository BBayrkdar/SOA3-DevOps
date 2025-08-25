import { NotificationPort } from '../../../application/ports/NotificationPort'

export class EmailAdapter implements NotificationPort {
  async send(to: string[], subject: string, body: string){
    console.log('[Email]', { to, subject, body })
  }
}
