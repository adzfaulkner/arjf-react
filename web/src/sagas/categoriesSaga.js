import { takeLatest, put } from 'redux-saga/effects';
import {
  BLOG_CATEGORIES_FETCH_PENDING,
  BLOG_CATEGORIES_FETCH_SUCCESS
} from '../actions/types';
import { getCategories } from '../repositories/categories';

function* fetchCategoriesSaga(action) {
  try {
    let categories = getCategories();
    yield put({
      type: BLOG_CATEGORIES_FETCH_SUCCESS,
      categories
    });
  } catch (e) {
    console.log(e);
  }
}

export function* fetchCategoriesSagaWatcher() {
  yield takeLatest(BLOG_CATEGORIES_FETCH_PENDING, fetchCategoriesSaga);
}