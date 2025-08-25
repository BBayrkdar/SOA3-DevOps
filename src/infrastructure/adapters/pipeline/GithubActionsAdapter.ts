import { PipelinePort } from '../../../application/ports/PipelinePort'

export class GithubActionsAdapter implements PipelinePort {
  async triggerPipeline(_sprintId: string){ 
    console.log('[Pipeline] Triggered'); 
    return 'SUCCESS' as const 
  }
}
