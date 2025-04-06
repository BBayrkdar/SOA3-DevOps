import { VersionControl } from '../interfaces/VersionControl';

export class GitAdapter implements VersionControl {
    pushTag(version: string): void {
      console.log(`Git tag '${version}' pushed.`);
    }
  
    fetchCommits(): string[] {
      return ['commit1', 'commit2', 'commit3'];
    }
}
