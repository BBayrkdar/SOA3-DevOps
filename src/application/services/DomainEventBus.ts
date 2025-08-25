export type Handler<T> = (event: T) => Promise<void> | void

export class DomainEventBus {
  private handlers = new Map<string, Handler<any>[]>()

  on<T>(eventName: string, handler: Handler<T>) {
    this.handlers.set(eventName, [ ...(this.handlers.get(eventName) || []), handler ])
  }

  async emit<T>(eventName: string, event: T) {
    const list = this.handlers.get(eventName) || []
    for (const h of list) await h(event)
  }
}
