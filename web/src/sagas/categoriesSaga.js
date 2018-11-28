import { takeLatest, call, put } from 'redux-saga/effects';
import {
  BLOG_CATEGORIES_FETCH_PENDING,
  BLOG_CATEGORIES_FETCH_SUCCESS
} from '../actions/types';
import { fetchCategories } from '../requests/categories';

function* fetchCategoriesSaga(action) {
  try {
    let categories = yield call(fetchCategories);
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