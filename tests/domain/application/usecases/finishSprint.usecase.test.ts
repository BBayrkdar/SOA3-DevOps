import { UseCase_FinishSprint as FinishSprint } from '../src/application/usecases/FinishSprint';
import { SprintRepository } from '../src/application/ports/SprintRepository';
import { PipelinePort } from '../src/application/ports/PipelinePort';
import { Sprint } from '../src/domain/entities/Sprint';

class SprintRepoDouble implements SprintRepository {
  private sprints = new Map<string, Sprint>();
  constructor(s: Sprint) { this.sprints.set(s.id, s); }
  async getById(id: string) { return this.sprints.get(id)!; }
  async save(s: Sprint) { this.sprints.set(s.id, s); }
  async listByProject() { return []; }
}

class PipelineSpy implements PipelinePort {
  public invoked = false;
  async triggerRelease(_: Sprint): Promise<void> { this.invoked = true; }
}

describe('UseCase: FinishSprint', () => {
  test('triggers pipeline and saves sprint', async () => {
    const sprint = new Sprint('S1', 'Sprint 1', 'release', new Date(), new Date());
    const repo = new SprintRepoDouble(sprint);
    const pipe = new PipelineSpy();
    const uc = new FinishSprint(repo, pipe);

    await uc.execute('S1');
    expect(pipe.invoked).toBe(true);
    const saved = await repo.getById('S1');
    expect(saved).toBeTruthy();
  });
});
