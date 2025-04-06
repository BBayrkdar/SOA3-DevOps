import { BacklogItem } from '../domain/models/BacklogItem';
import { ReportService } from '../services/ReportService';
import { DoneStatus } from '../domain/statuses/DoneStatus';

test('ReportService should generate correct burndown report', () => {
  const doneItem = new BacklogItem('1', 's1', 'Done', 'desc', 'dev');
  doneItem.status = new DoneStatus(doneItem);

  const pendingItem = new BacklogItem('2', 's1', 'ToDo', 'desc', 'dev');

  const report = ReportService.generateBurndown([doneItem, pendingItem]);
  expect(report).toBe('Burndown: 1/2 items completed.');
});
