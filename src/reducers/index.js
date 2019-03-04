import { combineReducers } from 'redux';

import search from './search';
import reviews from './reviews';


const rootReducer = combineReducers({
  search,
  reviews
});


export default rootReducer;
