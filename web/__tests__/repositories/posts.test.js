import { getPosts, getPostUsingSlug } from '../../src/repositories/posts';

test('getPosts should return an array', () => {
  const posts = getPosts();
  expect(posts).toBeInstanceOf(Array);
  expect(posts).toHaveLength(3);
});

test('getPost using a valid slug', () => {
  const post = getPostUsingSlug('bash-history-tip');
  expect(post.getSlug()).toBe('bash-history-tip');
});

test('getPost using an invalid slug', () => {
  const post = getPostUsingSlug('invalid');
  expect(post.getId()).toBe(87);
});