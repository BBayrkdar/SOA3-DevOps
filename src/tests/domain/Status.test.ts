import { BacklogItem } from '../../domain/models/BacklogItem';
import { ToDoStatus } from '../../domain/statuses/ToDoStatus';
import { InProgressStatus } from '../../domain/statuses/InProgressStatus';
import { DoneStatus } from '../../domain/statuses/DoneStatus';

// Test status transitions

describe('Status Transitions', () => {
  it('should transition from ToDo to InProgress', () => {
    const item = new BacklogItem('1', 's1', 'Item', 'desc', 'dev');
    item.status.nextStatus();
    expect(item.status.name).toBe('In Progress');
  });

  it('should complete full status cycle to Done', () => {
    const item = new BacklogItem('1', 's1', 'Item', 'desc', 'dev');
    item.status.nextStatus(); // To InProgress
    item.status.nextStatus(); // To ReadyForTesting
    item.status.nextStatus(); // To InTesting
    item.status.nextStatus(); // To Done
    expect(item.status.name).toBe('Done');
  });

  it('should not transition after Done', () => {
    const item = new BacklogItem('1', 's1', 'Item', 'desc', 'dev');
    item.status = new DoneStatus(item);
    const log = jest.spyOn(console, 'log');
    item.status.nextStatus();
    expect(log).toHaveBeenCalledWith('Item already completed.');
    expect(item.status.name).toBe('Done');
    log.mockRestore();
  });
});

