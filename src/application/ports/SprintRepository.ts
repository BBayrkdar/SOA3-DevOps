import { Sprint } from '../../domain/entities/Sprint'
export interface SprintRepository {
  get(id: string): Promise<Sprint>
  save(s: Sprint): Promise<void>
}
