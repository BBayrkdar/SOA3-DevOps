import { ReportVisitor } from './ReportVisitor'
import { BacklogItem } from '../../domain/entities/BacklogItem'

export class MarkdownVisitor implements ReportVisitor {
  private lines: string[] = ['| id | title | status |','|---|---|---|']
  visitBacklogItem(b: BacklogItem){ this.lines.push(`| ${b.id} | ${b.title} | ${b.status.code} |`) }
  result(){ return this.lines.join('\n') }
}
