import { BacklogItem } from '../../domain/entities/BacklogItem'
export interface BacklogItemRepository {
  get(id: string): Promise<BacklogItem>
  save(item: BacklogItem): Promise<void>
}
