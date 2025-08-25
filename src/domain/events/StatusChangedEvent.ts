import { DomainEvent } from './DomainEvent'
export class StatusChangedEvent implements DomainEvent {
  readonly name = 'StatusChangedEvent'
  constructor(
    public readonly itemId: string,
    public readonly from: string,
    public readonly to: string
  ) {}
}
