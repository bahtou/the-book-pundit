import { all } from 'redux-saga/effects';

import searchChannel from './search';
import reviewsChannel from './reviews';


export default function* sagaCoordinator() {
  yield all([
    searchChannel(),
    reviewsChannel()
  ]);
}
