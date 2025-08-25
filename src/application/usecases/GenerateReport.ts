import { ReportVisitor } from '../reporting/ReportVisitor'
import { BacklogItemRepository } from '../ports/BacklogItemRepository'

export class GenerateReport {
  constructor(private repo: BacklogItemRepository) {}
  async exec(itemIds: string[], visitor: ReportVisitor) {
    for (const id of itemIds) {
      const item = await this.repo.get(id)
      visitor.visitBacklogItem(item)
    }
    return visitor.result()
  }
}
