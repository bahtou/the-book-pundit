import { put, take } from 'redux-saga/effects';


import { STORE_REVIEWS_RESULTS } from './index';
import { SET_BOOK_REVIEWS } from 'Reducers/reviews';


function* storeResults() {
  while (true) {
    const { data:{ bookId, bookReviews }} = yield take(STORE_REVIEWS_RESULTS);

    yield put({ type: SET_BOOK_REVIEWS, data: { bookId, bookReviews }});
  }
}

export default storeResults;
