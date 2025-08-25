export interface VersionControlPort {
  pushTag(tag: string, message?: string): Promise<void>
  fetchCommits(ref: string): Promise<string[]>
}
