import posts from '../json/posts.json';
import _ from 'lodash'
import PostFactory from '../models/Post'

export function fetchPosts() {
  return _.map(posts, post => PostFactory(post));
}