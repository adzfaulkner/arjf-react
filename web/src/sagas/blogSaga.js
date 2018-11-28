import { takeEvery, call, put } from 'redux-saga/effects';
import {
  BLOG_ARCHIVES_FETCH_PENDING,
  BLOG_POSTS_FETCH_PENDING,
  BLOG_POSTS_FETCH_SUCCESS
} from '../actions/types'
import _ from 'lodash';
import PostFactory from '../models/Post';
import { fetchPosts } from '../requests/posts';
import Handle from './blogFilterHandlers/Handle';

function* fetchPostsSaga(action) {
  try {
    let postsResponse = yield call(fetchPosts);

    let posts = _.map(postsResponse, post => PostFactory(post));

    yield put({
      type: BLOG_POSTS_FETCH_SUCCESS,
      posts: yield call(Handle, posts, action.filters)
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