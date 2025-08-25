import { PipelinePort } from '../ports/PipelinePort'
import { SprintRepository } from '../ports/SprintRepository'

export class FinishSprint {
  constructor(private repo: SprintRepository, private pipeline: PipelinePort) {}
  async exec(sprintId: string) {
    const s = await this.repo.get(sprintId)
    s.markFinished()
    const result = await this.pipeline.triggerPipeline(s.id)
    await this.repo.save(s)
    return result
  }
}
