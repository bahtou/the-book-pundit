import { call, put, select, take } from 'redux-saga/effects';

import {
  FETCH_BOOKREVIEWS_REQUESTED,
  PROCESS_REVIEWS_RESULTS,
  STORE_REVIEWS_RESULTS
} from './index';


function bookReviewsRequest(bookId) {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.TBP_API}/reviews/${bookId}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache'
    })
      .then(res => {
        resolve(res.json());
      })
      .catch(err => reject(err));
  });
}

function* fetchBookReviews() {
  while (true) {
    const { data:bookId } = yield take(FETCH_BOOKREVIEWS_REQUESTED);
    let response = {};

    const { reviewResults } = yield select(state => state.reviews);

    if (reviewResults && reviewResults[bookId]) {
      yield put({ type: STORE_REVIEWS_RESULTS, data: { bookId, bookReviews: reviewResults[bookId] }});
    } else {
      try {
        response = yield call(bookReviewsRequest, bookId);
      } catch (err) {
        console.log(err);
        debugger;
      }

      yield put({ type: PROCESS_REVIEWS_RESULTS, data: { bookId, bookReviews: response }});
    }
  }
}

export default fetchBookReviews;
