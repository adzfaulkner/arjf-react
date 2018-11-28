import { takeLatest, put } from 'redux-saga/effects';
import _ from 'lodash';
import {
  BLOG_ARCHIVES_FETCH_PENDING,
  BLOG_ARCHIVES_FETCH_SUCCESS
} from '../actions/types';

function* fetchArchivesSaga(action) {
  try {
    let { posts } = action;

    const archives = _.chain(posts)
      .map(post => post.getPublishedDate().startOf('month'))
      .uniqBy(date => date.format('MMMM YYYY'))
      .value();

    yield put({
      type: BLOG_ARCHIVES_FETCH_SUCCESS,
      archives
    });
  } catch (e) {
    console.log(e);
  }
}

export function* fetchArchivesSagaWatcher() {
  yield takeLatest(BLOG_ARCHIVES_FETCH_PENDING, fetchArchivesSaga);
}