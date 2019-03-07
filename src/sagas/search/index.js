import { all, put, take } from 'redux-saga/effects';

import fetchBookList from './fetchBookList';
import processResults from './processResults';
import storeResults from './storeResults';


export const SEARCH_CHANNEL = 'SEARCH_CHANNEL';
export const FETCH_BOOKLIST_REQUESTED = 'FETCH_BOOKLIST_REQUESTED';
export const PROCESS_SEARCH_RESULTS = 'PROCESS_SEARCH_RESULTS';
export const STORE_SEARCH_RESULTS = 'STORE_SEARCH_RESULTS';
/**
 * EVENTS / ACTION CREATORS
 */
const fetchBookListRequested = searchTerm => {
  return {
    type: SEARCH_CHANNEL,
    data: {
      evt: FETCH_BOOKLIST_REQUESTED,
      data: searchTerm
    }
  };
};

const setBookSearch = bookList => {
  return {
    type: SEARCH_CHANNEL,
    data: {
      evt: 'SET_BOOK_SEARCH',
      data: bookList
    }
  };
};

const setCurrentSearchTerm = searchTerm => {
  return {
    type: SEARCH_CHANNEL,
    data: {
      evt: 'SET_CURRENT_SEARCHED_TERM',
      data: searchTerm
    }
  };
};


export {
  fetchBookListRequested,
  setBookSearch,
  setCurrentSearchTerm
};


/**
 * SAGA
 */
function* pipeline() {
  while (true) {
    const { data:{ evt, data }} = yield take(SEARCH_CHANNEL);

    yield put({ type: evt, data });
  }
}


export default function* search() {
  yield all([
    pipeline(),
    // checkCache(),
    fetchBookList(),
    processResults(),
    storeResults()
  ]);
}
