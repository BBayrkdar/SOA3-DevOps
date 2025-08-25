import { BacklogItemRepository } from '../../../application/ports/BacklogItemRepository'
import { BacklogItem } from '../../../domain/entities/BacklogItem'

export class InMemoryBacklogItemRepository implements BacklogItemRepository {
  private store = new Map<string, BacklogItem>()
  async get(id: string){ const v = this.store.get(id); if(!v) throw new Error('not found'); return v }
  async save(item: BacklogItem){ this.store.set(item.id, item) }
}
