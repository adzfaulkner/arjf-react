import { all } from 'redux-saga/effects';
import { fetchPostsSagaWatcher } from './sagas/blogSaga';
import { fetchPostSagaWatcher } from './sagas/postSaga';
import { fetchCategoriesSagaWatcher } from './sagas/categoriesSaga';
import { fetchArchivesSagaWatcher } from './sagas/archivesSaga';
import { fetchExamplesSagaWatcher } from './sagas/examplesSaga';


export default function* rootSaga() {
  yield all([
    fetchPostsSagaWatcher(),
    fetchPostSagaWatcher(),
    fetchCategoriesSagaWatcher(),
    fetchArchivesSagaWatcher(),
    fetchExamplesSagaWatcher(),
  ]);
}