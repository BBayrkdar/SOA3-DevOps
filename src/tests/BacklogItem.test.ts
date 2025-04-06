import { BacklogItem } from '../domain/models/BacklogItem';
import { ToDoStatus } from '../domain/statuses/ToDoStatus';
import { InProgressStatus } from '../domain/statuses/InProgressStatus';
import { Task } from '../domain/models/Task';

test('should allow adding tasks to backlog item', () => {
  const item = new BacklogItem('1', 's1', 'Feature A', 'Desc', 'Dev');
  const task = new Task('t1', item.id, 'Setup', 'Init');
  item.addTask(task);
  expect(item.tasks).toContain(task);
});

test('should start in To Do status', () => {
  const item = new BacklogItem('1', 's1', 'Feature A', 'Desc', 'Dev');
  expect(item.status.name).toBe('To Do');
});
