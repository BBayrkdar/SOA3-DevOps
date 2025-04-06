import { BacklogItem } from '../domain/models/BacklogItem';

export class ReportService {
  static generateBurndown(items: BacklogItem[]): string {
    const done = items.filter(i => i.status.name === 'Done').length;
    const total = items.length;
    return `Burndown: ${done}/${total} items completed.`;
  }
} 
