import { SprintProcessTemplate } from '../src/application/process/SprintProcessTemplate';

class TestProcess extends SprintProcessTemplate {
  public log: string[] = [];
  protected async startSprint() { this.log.push('start'); }
  protected async doWork() { this.log.push('work'); }
  protected async finishSprint() { this.log.push('finish'); }
}

describe('SprintProcessTemplate', () => {
  test('executes steps in order', async () => {
    const p = new TestProcess();
    await p.execute();
    expect(p.log).toEqual(['start', 'work', 'finish']);
  });
});
