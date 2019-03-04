import { all, put, take } from 'redux-saga/effects';

import fetchBookReviews from './fetchBookReviews';
import processResults from './processResults';
import storeResults from './storeResults';


export const REVIEWS_CHANNEL = 'REVIEWS_CHANNEL';
export const FETCH_BOOKREVIEWS_REQUESTED = 'FETCH_BOOKREVIEWS_REQUESTED';
export const PROCESS_REVIEWS_RESULTS = 'PROCESS_REVIEWS_RESULTS';
export const STORE_REVIEWS_RESULTS = 'STORE_REVIEWS_RESULTS';

/**
 * EVENTS
 */
export const fetchBookReviewsRequested = bookId => {
  return {
    type: REVIEWS_CHANNEL,
    data: {
      evt: FETCH_BOOKREVIEWS_REQUESTED,
      data: bookId
    }
  };
};


/**
 * SAGA
 */
function* pipeline() {
  while (true) {
    const { data:{ evt, data }} = yield take(REVIEWS_CHANNEL);

    yield put({ type: evt, data });
  }
}


export default function* reviews() {
  yield all([
    pipeline(),
    fetchBookReviews(),
    processResults(),
    storeResults()
  ]);
}
