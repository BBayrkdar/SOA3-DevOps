export abstract class ItemStatus {
  abstract code: string
  abstract nextAllowed(): string[]
  canTransitionTo(next: ItemStatus) { return this.nextAllowed().includes(next.code) }
}
