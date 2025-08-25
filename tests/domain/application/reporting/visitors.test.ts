import { CsvVisitor } from '../src/application/reporting/CsvVisitor';
import { JsonVisitor } from '../src/application/reporting/JsonVisitor';
import { MarkdownVisitor } from '../src/application/reporting/MarkdownVisitor';
import { BacklogItem } from '../src/domain/entities/BacklogItem';
import { Task } from '../src/domain/entities/Task';
import { DefaultStatusFactory } from '../src/domain/status/DefaultStatusFactory';

function makeItem() {
  const item = new BacklogItem('BI-1', 'Epic A', new DefaultStatusFactory().create('Doing'));
  item.add(new Task('T1', 'Task 1', 3));
  item.add(new Task('T2', 'Task 2', 2));
  return item;
}

describe('Report Visitors', () => {
  test('CSV contains headers and tasks', () => {
    const v = new CsvVisitor();
    v.visitBacklogItem(makeItem());
    const out = v.result();
    expect(out).toContain('id,title,status,effort');
    expect(out).toContain('BI-1');
    expect(out).toContain('5'); // total effort
  });

  test('JSON has keys and totals', () => {
    const v = new JsonVisitor();
    v.visitBacklogItem(makeItem());
    const json = JSON.parse(v.result());
    expect(json.id).toBe('BI-1');
    expect(json.totalEffort).toBe(5);
  });

  test('Markdown lists tasks and totals', () => {
    const v = new MarkdownVisitor();
    v.visitBacklogItem(makeItem());
    const md = v.result();
    expect(md).toMatch(/# Backlog Item/);
    expect(md).toMatch(/Task 1/);
    expect(md).toMatch(/Total effort: 5/);
  });
});
