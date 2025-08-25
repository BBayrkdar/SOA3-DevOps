import { DomainEventBus } from '../src/application/services/DomainEventBus';
import { StatusChangedEvent } from '../src/domain/events/StatusChangedEvent';

describe('DomainEventBus', () => {
  test('subscribers receive published events', () => {
    const bus = new DomainEventBus();
    const handler = jest.fn();
    bus.subscribe('StatusChangedEvent', handler);

    const evt = new StatusChangedEvent('BI-1', 'ToDo', 'Doing');
    bus.publish(evt);

    expect(handler).toHaveBeenCalledWith(evt);
  });

  test('unsubscribe stops receiving events', () => {
    const bus = new DomainEventBus();
    const handler = jest.fn();
    const off = bus.subscribe('StatusChangedEvent', handler);

    off(); // unsubscribe
    bus.publish(new StatusChangedEvent('BI-1', 'ToDo', 'Doing'));

    expect(handler).not.toHaveBeenCalled();
  });
});
