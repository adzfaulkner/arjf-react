import PostFactory from '../../src/models/Post';

const generateRenderedObject = val => ({ rendered: val });

test('Post factory creates expected object', () => {
  const post = PostFactory({
    id: 1,
    title: generateRenderedObject('test title'),
    date_gmt: '2019-01-01 00:00:00',
    content: generateRenderedObject('test content'),
    excerpt: generateRenderedObject('test excerpt'),
    slug: 'test slug',
    categories: [1,2,3]
  });

  expect(post.getId()).toEqual(1);
  expect(post.getTitle()).toEqual('test title');
  expect(post.getPublishedDate().format()).toEqual("2019-01-01T00:00:00+00:00");
  expect(post.getContent()).toEqual('test content');
  expect(post.getExcerpt()).toEqual('test excerpt');
  expect(post.getSlug()).toEqual('test slug');
  expect(post.getCategories()).toEqual([1,2,3]);
});