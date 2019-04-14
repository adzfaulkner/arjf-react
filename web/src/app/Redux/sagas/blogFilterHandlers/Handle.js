import Category from './Category';
import CategoryId from './CategoryId';
import YearAndDate from './YearAndDate';
import DateO from './DateO';

export default function (posts, filters) {
  if (!filters) {
    return posts;
  }

  const handlers = [Category, CategoryId, DateO, YearAndDate];

  for (let handler of handlers) {
    let res = handler(posts, filters);

    if (res !== null) {
      return res;
    }
  }

  return posts;
}
