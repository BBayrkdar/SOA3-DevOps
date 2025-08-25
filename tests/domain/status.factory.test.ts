import { DefaultStatusFactory } from '../src/domain/status/DefaultStatusFactory';
import { ItemStatus } from '../src/domain/status/ItemStatus';

describe('DefaultStatusFactory', () => {
  const f = new DefaultStatusFactory();

  test.each(['ToDo', 'Doing', 'Testing', 'Tested', 'ReadyForTesting', 'Done'])(
    'creates %s status',
    (code) => {
      const s: ItemStatus = f.create(code);
      expect(s.code).toBe(code);
    }
  );

  test('unknown code -> throws', () => {
    expect(() => f.create('Foo')).toThrow();
  });
});
