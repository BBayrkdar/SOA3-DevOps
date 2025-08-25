import { DefaultNotificationFactory } from '../src/application/factory/DefaultNotificationFactory';
import { NotificationPort } from '../src/application/ports/NotificationPort';

describe('DefaultNotificationFactory', () => {
  const f = new DefaultNotificationFactory();

  test.each([
    ['email', 'EmailAdapter'],
    ['slack', 'SlackAdapter'],
    ['teams', 'TeamsAdapter'],
  ])('create(%s) returns %s', (code, className) => {
    const port: NotificationPort = f.create(code);
    expect(typeof port.send).toBe('function');
    expect(port.constructor.name).toBe(className);
  });

  test('unknown channel throws', () => {
    expect(() => f.create('fax')).toThrow();
  });
});
