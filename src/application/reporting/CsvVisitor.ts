import { ReportVisitor } from './ReportVisitor'
import { BacklogItem } from '../../domain/entities/BacklogItem'

export class CsvVisitor implements ReportVisitor {
  private rows: string[] = ['id,title,status']
  visitBacklogItem(b: BacklogItem){ this.rows.push(`${b.id},${b.title},${b.status.code}`) }
  result(){ return this.rows.join('\n') }
}
