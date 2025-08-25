import { SprintProcessTemplate } from './SprintProcessTemplate'
import { PipelinePort } from '../ports/PipelinePort'
import { Sprint } from '../../domain/entities/Sprint'

export class ReleaseSprintProcess extends SprintProcessTemplate {
  constructor(private sprint: Sprint, private pipeline: PipelinePort){ super() }
  protected async start(){ /* voorbereiding, validaties etc. */ }
  protected async work(){ await this.pipeline.triggerPipeline(this.sprint.id) }
  protected async finish(){ this.sprint.markFinished() }
}
