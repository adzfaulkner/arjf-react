import { takeLatest, put } from 'redux-saga/effects';
import { BLOG_ARCHIVES_FETCH_PENDING, BLOG_POST_FETCH_PENDING, BLOG_POST_FETCH_SUCCESS } from '../actions/types';
import { getPosts, getPostUsingSlug } from '../repositories/posts';

function* fetchPostSaga(action) {
  try {
    let post = getPostUsingSlug(action.slug);

    yield put({
      type: BLOG_POST_FETCH_SUCCESS,
      post: post
    });

    yield put({
      type: BLOG_ARCHIVES_FETCH_PENDING,
      posts: getPosts()
    });
  } catch (e) {
    console.log(e);
  }
}

export function* fetchPostSagaWatcher() {
  yield takeLatest(BLOG_POST_FETCH_PENDING, fetchPostSaga);
}