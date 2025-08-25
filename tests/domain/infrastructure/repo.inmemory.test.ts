import { InMemoryBacklogItemRepository } from '../src/infrastructure/adapters/repo/InMemoryBacklogItemRepository';
import { BacklogItem } from '../src/domain/entities/BacklogItem';
import { DefaultStatusFactory } from '../src/domain/status/DefaultStatusFactory';

describe('InMemoryBacklogItemRepository', () => {
  test('save and getById persist item', async () => {
    const repo = new InMemoryBacklogItemRepository();
    const item = new BacklogItem('BI-42', 'Store me', new DefaultStatusFactory().create('ToDo'));
    await repo.save(item);
    const found = await repo.getById('BI-42');
    expect(found.title).toBe('Store me');
  });
});
