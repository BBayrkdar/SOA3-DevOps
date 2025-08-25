import { DefaultStatusFactory } from '../src/domain/status/DefaultStatusFactory';
import { DomainEventBus } from '../src/application/services/DomainEventBus';
import { BacklogItem } from '../src/domain/entities/BacklogItem';
import { ItemStatus } from '../src/domain/status/ItemStatus';
import { UseCase_ChangeStatus as ChangeStatus } from '../src/application/usecases/ChangeStatus';
import { BacklogItemRepository } from '../src/application/ports/BacklogItemRepository';

class RepoDouble implements BacklogItemRepository {
  private store = new Map<string, BacklogItem>();
  constructor(item: BacklogItem) { this.store.set(item.id, item); }
  async getById(id: string) { return this.store.get(id) as BacklogItem; }
  async save(item: BacklogItem) { this.store.set(item.id, item); }
  async listBySprint() { return []; }
}

function mkItemFactory() {
  const f = new DefaultStatusFactory();
  const status: ItemStatus = f.create('ToDo');
  const item = new BacklogItem('BI-1', 'Demo', status);
  return { f, item };
}

describe('UseCase: ChangeStatus', () => {
  test('happy path: gets, creates status, advances, saves, publishes', async () => {
    const { f, item } = mkItemFactory();
    const repo = new RepoDouble(item);
    const bus = new DomainEventBus();
    const publishSpy = jest.fn();
    bus.subscribe('StatusChangedEvent', publishSpy);

    const uc = new ChangeStatus(repo, f, bus);
    await uc.execute('BI-1', 'Doing');

    expect((await repo.getById('BI-1')).status.code).toBe('Doing');
    expect(publishSpy).toHaveBeenCalledTimes(1);
  });

  test('illegal transition -> throws and does not save', async () => {
    const { f, item } = mkItemFactory();
    const repo = new RepoDouble(item);
    const bus = new DomainEventBus();

    const uc = new ChangeStatus(repo, f, bus);
    await expect(uc.execute('BI-1', 'Done')).rejects.toThrow();

    expect((await repo.getById('BI-1')).status.code).toBe('ToDo');
  });
});
