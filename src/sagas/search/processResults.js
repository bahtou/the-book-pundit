import { put, take } from 'redux-saga/effects';


import {
  PROCESS_SEARCH_RESULTS,
  STORE_SEARCH_RESULTS
} from './index';


function* processSearchResults() {
  while (true) {
    const { data:response } = yield take(PROCESS_SEARCH_RESULTS);

    yield put({ type: STORE_SEARCH_RESULTS, data: response });
  }
}

export default processSearchResults;
