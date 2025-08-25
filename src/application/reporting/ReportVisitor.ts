import { BacklogItem } from '../../domain/entities/BacklogItem'
export interface ReportVisitor {
  visitBacklogItem(b: BacklogItem): void
  result(): string
}
