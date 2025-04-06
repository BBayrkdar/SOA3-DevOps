import { BacklogItem } from '../../domain/models/BacklogItem';
import { Comment } from '../../domain/models/Comment';
import { DoneStatus } from '../../domain/statuses/DoneStatus';

test('should allow adding comments when not done', () => {
  const item = new BacklogItem('1', 's1', 'Commentable', 'desc', 'dev');
  const comment = new Comment('c1', 'user', 'Looks good');
  item.addComment(comment);
  expect(item.comments.length).toBe(1);
});

test('should not allow comments when done', () => {
  const item = new BacklogItem('2', 's1', 'Blocked', 'desc', 'dev');
  item.status = new DoneStatus(item);
  expect(() => {
    item.addComment(new Comment('c2', 'user', 'Late feedback'));
  }).toThrow('Cannot comment on completed items.');
});
