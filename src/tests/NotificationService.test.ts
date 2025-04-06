import { NotificationService } from '../services/NotificationService';
import { BacklogItem } from '../domain/models/BacklogItem';
import { Task } from '../domain/models/Task';

test('should notify on status change', () => {
  const item = new BacklogItem('1', 's1', 'Notify Test', 'Test description', 'Dev');
  item.addTask(new Task('t1', item.id, 'Task1', 'desc'));
  const logSpy = jest.spyOn(console, 'log');

  NotificationService.notify(item);

  expect(logSpy).toHaveBeenCalled();
  logSpy.mockRestore();
});
