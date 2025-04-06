import { BacklogItem } from '../domain/models/BacklogItem';

export interface ReportVisitor {
  visitBacklogItem(item: BacklogItem): string;
}

export class SimpleTextReportVisitor implements ReportVisitor {
  visitBacklogItem(item: BacklogItem): string {
    return `Item: ${item.title} — Status: ${item.status.name}`;
  }
}

export class DetailedTextReportVisitor implements ReportVisitor {
  visitBacklogItem(item: BacklogItem): string {
    return `Item: ${item.title} — Status: ${item.status.name} — Description: ${item.description}`;
  }
}

export class JsonReportVisitor implements ReportVisitor {
  visitBacklogItem(item: BacklogItem): string {
    return JSON.stringify({
      title: item.title,
      status: item.status.name,
      description: item.description,
    });
  }
}

export class XmlReportVisitor implements ReportVisitor {
  visitBacklogItem(item: BacklogItem): string {
    return `<item><title>${item.title}</title><status>${item.status.name}</status><description>${item.description}</description></item>`;
  }
}

export class CsvReportVisitor implements ReportVisitor {
  visitBacklogItem(item: BacklogItem): string {
    return `${item.title},${item.status.name},${item.description}`;
  }
}

export class MarkdownReportVisitor implements ReportVisitor {
  visitBacklogItem(item: BacklogItem): string {
    return `# ${item.title}\n\n**Status:** ${item.status.name}\n\n**Description:** ${item.description}`;
  }
}
