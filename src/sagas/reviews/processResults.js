import { put, take } from 'redux-saga/effects';


import {
  PROCESS_REVIEWS_RESULTS,
  STORE_REVIEWS_RESULTS
} from './index';


function* processSearchResults() {
  while (true) {
    const { data:response } = yield take(PROCESS_REVIEWS_RESULTS);

    yield put({ type: STORE_REVIEWS_RESULTS, data: response });
  }
}

export default processSearchResults;
