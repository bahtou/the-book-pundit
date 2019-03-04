import createReducer from './createReducer';

export const SET_BOOK_REVIEWS = 'SET_BOOK_REVIEWS';
export const FETCH_BOOKREVIEW_REQUESTED = 'FETCH_BOOKREVIEW_REQUESTED';


const initialState = {};

const actionHandlers = {
  [SET_BOOK_REVIEWS]: (state, action) => {
    const { bookId, bookReviews } = action.data;

    return { ...state, [bookId]: bookReviews };
  }
};


export default createReducer(initialState, actionHandlers);
