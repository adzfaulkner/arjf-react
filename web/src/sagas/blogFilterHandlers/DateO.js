import _ from 'lodash';

export default function(posts, filters) {
  let { date = null } = filters;

  if (date === null) {
    return null;
  }

  return _.filter(posts, post => post.getPublishedDate().format('MMMM YYYY') === date.format('MMMM YYYY'));
}