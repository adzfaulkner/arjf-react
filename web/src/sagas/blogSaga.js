import { takeEvery, put } from 'redux-saga/effects';
import {
  BLOG_ARCHIVES_FETCH_PENDING,
  BLOG_POSTS_FETCH_PENDING,
  BLOG_POSTS_FETCH_SUCCESS
} from '../actions/types';
import { getPosts } from '../repositories/posts';
import Handle from './blogFilterHandlers/Handle';

function* fetchPostsSaga(action) {
  try {
    let posts = getPosts();

    yield put({
      type: BLOG_POSTS_FETCH_SUCCESS,
      posts: Handle(posts, action.filters)
    });

    yield put({
      type: BLOG_ARCHIVES_FETCH_PENDING,
      posts: posts
    });
  } catch (e) {
    console.log(e);
  }
}

export function* fetchPostsSagaWatcher() {
  yield takeEvery(BLOG_POSTS_FETCH_PENDING, fetchPostsSaga);
}