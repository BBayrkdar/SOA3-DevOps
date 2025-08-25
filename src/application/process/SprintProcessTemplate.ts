export abstract class SprintProcessTemplate {
  async execute(){
    await this.start()
    await this.work()
    await this.finish()
  }
  protected abstract start(): Promise<void>
  protected abstract work(): Promise<void>
  protected abstract finish(): Promise<void>
}
