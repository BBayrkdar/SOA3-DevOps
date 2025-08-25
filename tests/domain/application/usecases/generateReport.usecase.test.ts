import { UseCase_GenerateReport as GenerateReport } from '../src/application/usecases/GenerateReport';
import { ReportVisitor } from '../src/application/reporting/ReportVisitor';
import { ReportPort } from '../src/application/ports/ReportPort';
import { BacklogItem } from '../src/domain/entities/BacklogItem';
import { DefaultStatusFactory } from '../src/domain/status/DefaultStatusFactory';

class SpyVisitor implements ReportVisitor {
  private s = '';
  visitBacklogItem(b: BacklogItem): void { this.s = `ID:${b.id}`; }
  result(): string { return this.s; }
}
class SpyReportPort implements ReportPort {
  public sent: string | null = null;
  async export(content: string): Promise<void> { this.sent = content; }
}

describe('UseCase: GenerateReport', () => {
  test('builds with visitor and exports via port', async () => {
    const v = new SpyVisitor();
    const port = new SpyReportPort();
    const uc = new GenerateReport(v, port);

    const bi = new BacklogItem('BI-9', 'Demo', new DefaultStatusFactory().create('ToDo'));
    await uc.execute([bi]);

    expect(port.sent).toContain('ID:BI-9');
  });
});
