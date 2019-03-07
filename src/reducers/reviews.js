import createReducer from './createReducer';

export const SET_CURRENT_REVIEWS = 'SET_CURRENT_REVIEWS';
export const SET_BOOK_REVIEWS = 'SET_BOOK_REVIEWS';
export const FETCH_BOOKREVIEW_REQUESTED = 'FETCH_BOOKREVIEW_REQUESTED';


const initialState = {
  currentReviews: {
    bookId: '',
    reviews: []
  },
  reviewResults: {}
};

const actionHandlers = {
  [SET_CURRENT_REVIEWS]: (state, action) => {
    const { bookId, bookReviews } = action.data;
    return { ...state, currentReviews: { bookId, bookReviews }};
  },

  [SET_BOOK_REVIEWS]: (state, action) => {
    const { bookId, bookReviews } = action.data;
    const { reviewResults } = state;
    const newReviewResults = { ...reviewResults, [bookId]: bookReviews };

    return { ...state, reviewResults: newReviewResults };
  }
};


export default createReducer(initialState, actionHandlers);
