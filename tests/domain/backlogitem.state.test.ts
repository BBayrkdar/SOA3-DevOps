import { BacklogItem } from '../src/domain/entities/BacklogItem';
import { Task } from '../src/domain/entities/Task';
import { DefaultStatusFactory } from '../src/domain/status/DefaultStatusFactory';
import { ItemStatus } from '../src/domain/status/ItemStatus';

const factory = new DefaultStatusFactory();

function makeItem(statusCode = 'ToDo') {
  const status: ItemStatus = factory.create(statusCode);
  return new BacklogItem('BI-1', 'Implement feature X', status);
}

describe('BacklogItem + State', () => {
  test('composite: effort is sum of children', () => {
    const bi = makeItem();
    bi.add(new Task('T1', 'Setup repo', 2));
    bi.add(new Task('T2', 'Implement API', 5));
    expect(bi.getEffort()).toBe(7);
  });

  test('legal transition: ToDo -> Doing -> ReadyForTesting', () => {
    const bi = makeItem('ToDo');
    const doing = factory.create('Doing');
    bi.advanceTo(doing, () => {}); // publish noop
    const rft = factory.create('ReadyForTesting');
    bi.advanceTo(rft, () => {});
    expect(bi.status.code).toBe('ReadyForTesting');
  });

  test('illegal transition throws', () => {
    const bi = makeItem('ToDo');
    const done = factory.create('Done');
    expect(() => bi.advanceTo(done, () => {})).toThrow();
  });

  test('publishes Domain Event on change', () => {
    const bi = makeItem('ToDo');
    const publish = jest.fn();
    const doing = factory.create('Doing');
    bi.advanceTo(doing, publish);
    expect(publish).toHaveBeenCalledTimes(1);
    const evt = publish.mock.calls[0][0];
    expect(evt.type).toBe('StatusChangedEvent');
    expect(evt.itemId).toBe('BI-1');
    expect(evt.newStatus).toBe('Doing');
  });
});
