import _ from 'lodash';

export default function(posts, filters) {
  let { categoryId = null } = filters;

  if (categoryId === null) {
    return null;
  }

  return _.filter(posts, post => _.indexOf(post.getCategories(), categoryId) >= 0);
}