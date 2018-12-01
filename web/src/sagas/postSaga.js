import { takeLatest, put } from 'redux-saga/effects';
import { BLOG_ARCHIVES_FETCH_PENDING, BLOG_POST_FETCH_PENDING, BLOG_POST_FETCH_SUCCESS } from '../actions/types';
import { fetchPost } from '../requests/post';
import { fetchPosts } from '../requests/posts';

function* fetchPostSaga(action) {
  try {
    let posts = fetchPosts();
    let post = fetchPost(posts, action.slug);

    yield put({
      type: BLOG_POST_FETCH_SUCCESS,
      post: post
    });

    yield put({
      type: BLOG_ARCHIVES_FETCH_PENDING,
      posts: posts
    });
  } catch (e) {
    console.log(e);
  }
}

export function* fetchPostSagaWatcher() {
  yield takeLatest(BLOG_POST_FETCH_PENDING, fetchPostSaga);
}