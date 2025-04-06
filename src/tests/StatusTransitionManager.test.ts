import { BacklogItem } from '../domain/models/BacklogItem';
import { StatusTransitionManager } from '../services/StatusTransitionManager';

test('should advance through all states correctly', () => {
  const item = new BacklogItem('1', 's1', 'Test', 'Description', 'Dev');
  expect(item.status.name).toBe('To Do');

  StatusTransitionManager.advanceStatus(item); // In Progress
  expect(item.status.name).toBe('In Progress');

  StatusTransitionManager.advanceStatus(item); // Ready for Testing
  expect(item.status.name).toBe('Ready for Testing');

  StatusTransitionManager.advanceStatus(item); // In Testing
  expect(item.status.name).toBe('In Testing');

  StatusTransitionManager.advanceStatus(item); // Done
  expect(item.status.name).toBe('Done');
});
