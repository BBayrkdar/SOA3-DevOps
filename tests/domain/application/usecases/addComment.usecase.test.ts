import { UseCase_AddComment as AddComment } from '../src/application/usecases/AddComment';
import { BacklogItemRepository } from '../src/application/ports/BacklogItemRepository';
import { BacklogItem } from '../src/domain/entities/BacklogItem';
import { DefaultStatusFactory } from '../src/domain/status/DefaultStatusFactory';
import { DomainEventBus } from '../src/application/services/DomainEventBus';

class Repo implements BacklogItemRepository {
  private m = new Map<string, BacklogItem>();
  constructor(item: BacklogItem) { this.m.set(item.id, item); }
  async getById(id: string) { return this.m.get(id)!; }
  async save(i: BacklogItem) { this.m.set(i.id, i); }
  async listBySprint() { return []; }
}

describe('UseCase: AddComment', () => {
  test('adds a comment to item and saves', async () => {
    const item = new BacklogItem('BI-1', 'Demo', new DefaultStatusFactory().create('ToDo'));
    const repo = new Repo(item);
    const bus = new DomainEventBus();
    const uc = new AddComment(repo, bus);

    await uc.execute('BI-1', 'Looks good');

    const updated = await repo.getById('BI-1');
    expect(updated.comments.length).toBe(1);
    expect(updated.comments[0].message).toBe('Looks good');
  });
});
