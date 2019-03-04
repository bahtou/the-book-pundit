import { call, put, take } from 'redux-saga/effects';

import {
  FETCH_BOOKLIST_REQUESTED,
  PROCESS_SEARCH_RESULTS
} from './index';


function searchTermRequest(searchTerm) {
  return new Promise((resolve, reject) => {
    fetch(`${process.env.TBP_API}/search?q=${searchTerm}`, {
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

function* fetchBookList() {
  while (true) {
    const { data:searchTerm } = yield take(FETCH_BOOKLIST_REQUESTED);
    let response = {};

    try {
      response = yield call(searchTermRequest, searchTerm);
    } catch (err) {
      console.log(err);
      debugger;
    }

    yield put({ type: PROCESS_SEARCH_RESULTS, data: { searchTerm, bookList: response }});
  }
}

export default fetchBookList;
