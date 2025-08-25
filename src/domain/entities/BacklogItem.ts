import { WorkItem } from './WorkItem'
import { ItemStatus } from '../status/ItemStatus'
import { StatusChangedEvent } from '../events/StatusChangedEvent'
import { DomainError } from '../errors/DomainError'

export class BacklogItem implements WorkItem {
  private children: WorkItem[] = []
  private locked = false // bij 'done' geen discussies etc.

  constructor(
    public readonly id: string,
    public title: string,
    public status: ItemStatus
  ) {}

  add(child: WorkItem) { this.children.push(child) }
  getEffort(){ return this.children.reduce((s,c)=>s+c.getEffort(),0) }

  isLocked() { return this.locked }

  advanceTo(next: ItemStatus, emit:(e:StatusChangedEvent)=>void){
    if(!this.status.canTransitionTo(next)) throw new DomainError('Illegal transition')
    const from = this.status.code
    this.status = next
    if (next.code === 'done') this.locked = true
    emit(new StatusChangedEvent(this.id, from, next.code))
  }
}
