import { call, put, take } from 'redux-saga/effects';

import {
  FETCH_BOOKREVIEWS_REQUESTED,
  PROCESS_REVIEWS_RESULTS
} from './index';


function bookReviewsRequest(bookId) {
  return fetch(`http://localhost:3000/reviews/${bookId}`, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache'
  })
    .then(res => {
      return res.json();
    });
}

function* fetchBookReviews() {
  while (true) {
    const { data:bookId } = yield take(FETCH_BOOKREVIEWS_REQUESTED);
    let response = {};

    try {
      response = yield call(bookReviewsRequest, bookId);
    } catch (err) {
      console.log(err);
      debugger;
    }

    yield put({ type: PROCESS_REVIEWS_RESULTS, data: { bookId, bookReviews: response }});
  }
}

export default fetchBookReviews;
