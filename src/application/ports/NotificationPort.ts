export interface NotificationPort {
send(to: string[], subject: string, body: string): Promise<void>
}