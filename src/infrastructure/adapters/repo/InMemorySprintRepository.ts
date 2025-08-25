import { SprintRepository } from '../../../application/ports/SprintRepository'
import { Sprint } from '../../../domain/entities/Sprint'

export class InMemorySprintRepository implements SprintRepository {
  private store = new Map<string, Sprint>()
  async get(id: string){ const v = this.store.get(id); if(!v) throw new Error('not found'); return v }
  async save(s: Sprint){ this.store.set(s.id, s) }
}
