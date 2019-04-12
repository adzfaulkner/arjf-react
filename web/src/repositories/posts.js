import posts from '../assets/posts.json';
import _ from 'lodash';
import PostFactory from '../models/Post';

export function getPosts() {
  return _.map(posts, post => PostFactory(post));
}

export function getPostUsingSlug(slug) {
  const posts = getPosts();
  let post = _.find(posts, post => post.getSlug() === slug);

  if (!post) {
    return post = posts[0];
  }

  return post;
}