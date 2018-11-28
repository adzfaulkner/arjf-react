import { takeLatest, call, put } from 'redux-saga/effects';
import { BLOG_POST_FETCH_PENDING, BLOG_POST_FETCH_SUCCESS } from '../actions/types';
import PostFactory from '../models/Post';
import { fetchPost } from '../requests/post';

function* fetchPostSaga(action) {
  try {
    let post = yield call(fetchPost, action.slug);
    yield put({
      type: BLOG_POST_FETCH_SUCCESS,
      post: PostFactory(post[0])
    });
  } catch (e) {
    console.log(e);
  }
}

export function* fetchPostSagaWatcher() {
  yield takeLatest(BLOG_POST_FETCH_PENDING, fetchPostSaga);
}