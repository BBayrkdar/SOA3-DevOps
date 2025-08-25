import { NotificationPort } from '../../../application/ports/NotificationPort'

export class TeamsAdapter implements NotificationPort {
  async send(to: string[], subject: string, body: string){
    console.log('[Teams]', { to, subject, body })
  }
}
