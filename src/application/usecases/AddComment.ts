import { BacklogItemRepository } from '../ports/BacklogItemRepository'
import { Comment } from '../../domain/entities/Comment'
import { DomainError } from '../../domain/errors/DomainError'

export class AddComment {
  constructor(private repo: BacklogItemRepository) {}
  async exec(itemId: string, comment: Comment) {
    const item = await this.repo.get(itemId)
    if (item.isLocked()) throw new DomainError('Cannot comment on DONE item')
    // item.addComment(comment)
    // await this.repo.save(item)
    return comment
  }
}
