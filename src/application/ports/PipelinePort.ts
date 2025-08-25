export interface PipelinePort {
  triggerPipeline(sprintId: string): Promise<'SUCCESS'|'FAILED'>
}
