import { takeEvery, put } from 'redux-saga/effects';
import {
  EXAMPLES_FETCH_PENDING,
  EXAMPLES_FETCH_SUCCESS
} from '../actions/types';
import { getExamples } from '../../../repositories/examples';

function* fetchExamplesSaga() {
  try {
    let examples = getExamples();

    yield put({
      type: EXAMPLES_FETCH_SUCCESS,
      examples
    });
  } catch (e) {
    console.log(e);
  }
}

export function* fetchExamplesSagaWatcher() {
  yield takeEvery(EXAMPLES_FETCH_PENDING, fetchExamplesSaga);
}