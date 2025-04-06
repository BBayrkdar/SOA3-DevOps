export interface VersionControl {
    pushTag(version: string): void;
    fetchCommits(): string[];
}
