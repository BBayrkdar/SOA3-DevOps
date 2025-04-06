import { BacklogItem } from '../domain/models/BacklogItem';
import { ReportVisitor } from '../visitors/ReportVisitor';

export class ReportService {
  static generateBurndown(items: BacklogItem[]): string {
    const done = items.filter(i => i.status.name === 'Done').length;
    const total = items.length;
    return `Burndown: ${done}/${total} items completed.`;
  }

  static generateItemsRaport(items: BacklogItem[], visitor: ReportVisitor): string[] {
    return items.map(item => visitor.visitBacklogItem(item));
  }

} 
