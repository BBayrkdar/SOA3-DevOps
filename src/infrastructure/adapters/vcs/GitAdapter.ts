import { VersionControlPort } from '../../../application/ports/VersionControlPorts'

export class GitAdapter implements VersionControlPort {
  async pushTag(tag: string, message?: string){ console.log('[Git] push tag', tag, message) }
  async fetchCommits(ref: string){ console.log('[Git] fetch', ref); return [] }
}
