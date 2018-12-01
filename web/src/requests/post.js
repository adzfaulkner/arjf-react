import _ from 'lodash';

export function fetchPost(posts, slug) {
  let post = _.find(posts, post => post.getSlug() === slug);

  if (!post) {
    return post = posts[0];
  }

  return post;
}
