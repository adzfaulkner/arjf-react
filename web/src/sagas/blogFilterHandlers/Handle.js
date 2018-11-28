import Category from './Category';
import CategoryId from './CategoryId';
import YearAndDate from './YearAndDate';
import DateO from './DateO';
import { call } from 'redux-saga/effects';

export default function* (posts, filters) {
  if (!filters) {
    return posts;
  }

  const handlers = [Category, CategoryId, DateO, YearAndDate];

  for (let handler of handlers) {
    let res = yield call(handler, posts, filters);

    if (res !== null) {
      return res;
    }
  }

  return posts;
}
