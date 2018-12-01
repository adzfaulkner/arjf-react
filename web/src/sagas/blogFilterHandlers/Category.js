import _ from 'lodash';
import CategoryId from './CategoryId';
import { fetchCategories } from '../../requests/categories';

export default function(posts, filters) {
  let { category = null } = filters;

  if (category === null) {
    return null;
  }

  const allCategories = fetchCategories();

  let categoryObj = _.find(allCategories, cat => cat.slug === category );

  if(!categoryObj) {
    return null;
  }

  return CategoryId(posts, {
    categoryId: categoryObj.id
  })
}