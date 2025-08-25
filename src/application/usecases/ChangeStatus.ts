import { DomainEventBus } from '../services/DomainEventBus'
import { BacklogItemRepository } from '../ports/BacklogItemRepository'
import { DefaultStatusFactory } from '../../domain/status/DefaultStatusFactory'

export class ChangeStatus {
  constructor(private repo: BacklogItemRepository, private bus: DomainEventBus) {}

  async exec(itemId: string, nextCode: string) {
    const item = await this.repo.get(itemId)
    const next = new DefaultStatusFactory().create(nextCode)
    item.advanceTo(next, (e)=>this.bus.emit(e.name, e))
    await this.repo.save(item)
  }
}
