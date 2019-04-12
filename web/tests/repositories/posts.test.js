import { getPosts } from '../../src/repositories/posts';

test('getPosts should return an array', () => {
  const posts = getPosts();
  expect(posts).toBeInstanceOf(Array);
});
