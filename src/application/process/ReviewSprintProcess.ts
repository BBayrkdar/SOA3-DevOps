import { SprintProcessTemplate } from './SprintProcessTemplate'
import { Sprint } from '../../domain/entities/Sprint'

export class ReviewSprintProcess extends SprintProcessTemplate {
  constructor(private sprint: Sprint){ super() }
  protected async start(){ /* check review document etc. */ }
  protected async work(){ /* review uitvoeren */ }
  protected async finish(){ this.sprint.markFinished() }
}
