import { takeEvery, put } from 'redux-saga/effects';
import {
  BLOG_ARCHIVES_FETCH_PENDING,
  BLOG_POSTS_FETCH_PENDING,
  BLOG_POSTS_FETCH_SUCCESS
} from '../actions/types';
import { fetchPosts } from '../requests/posts';
import Handle from './blogFilterHandlers/Handle';

function* fetchPostsSaga(action) {
  try {
    let posts = fetchPosts();

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