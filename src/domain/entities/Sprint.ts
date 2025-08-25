export type SprintType = 'RELEASE' | 'REVIEW'

export class Sprint {
  public finished = false
  constructor(
    public readonly id: string,
    public name: string,
    public readonly type: SprintType,
    public readonly start: Date,
    public readonly end: Date
  ) {}

  markFinished() { this.finished = true }
}
