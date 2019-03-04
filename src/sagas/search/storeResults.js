import { all, put, take } from 'redux-saga/effects';


import { STORE_SEARCH_RESULTS } from './index';
import {
  SET_BOOK_SEARCH,
  SET_CURRENT_SEARCHED_TERM
} from 'Reducers/search';


function* storeResults() {
  while (true) {
    const { data:{ bookList, searchTerm }} = yield take(STORE_SEARCH_RESULTS);

    yield all([
      put({ type: SET_BOOK_SEARCH, data: { bookList, searchTerm }}),
      put({ type: SET_CURRENT_SEARCHED_TERM, data: searchTerm })
    ]);
  }
}

export default storeResults;
