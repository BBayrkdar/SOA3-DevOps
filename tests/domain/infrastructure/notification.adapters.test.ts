import { EmailAdapter } from '../src/infrastructure/adapters/notification/EmailAdapter';
import { SlackAdapter } from '../src/infrastructure/adapters/notification/SlackAdapter';
import { TeamsAdapter } from '../src/infrastructure/adapters/notification/TeamsAdapter';

describe('Notification adapters conform to NotificationPort', () => {
  const msg = { to: ['dev@example.com'], subject: 'Hi', body: 'Test' };

  test.each([EmailAdapter, SlackAdapter, TeamsAdapter])(
    '%p.send does not throw',
    async (Cls) => {
      const adapter = new Cls();
      await expect(adapter.send(msg.to, msg.subject, msg.body)).resolves.toBeUndefined();
    }
  );
});
