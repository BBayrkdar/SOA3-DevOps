import { ReportVisitor } from './ReportVisitor'
import { BacklogItem } from '../../domain/entities/BacklogItem'

export class JsonVisitor implements ReportVisitor {
  private list: any[] = []
  visitBacklogItem(b: BacklogItem){ this.list.push({ id: b.id, title: b.title, status: b.status.code }) }
  result(){ return JSON.stringify(this.list, null, 2) }
}
