import createReducer from './createReducer';

export const SET_BOOK_SEARCH = 'SET_BOOK_SEARCH';
export const SET_CURRENT_SEARCHED_TERM = 'SET_CURRENT_SEARCHED_TERM';


const initialState = {
  currentSearchTerm: '',
  searchResults: {}
};

const actionHandlers = {

  [SET_CURRENT_SEARCHED_TERM]: (state, action) => {
    const searchTerm = action.data;

    return { ...state, currentSearchTerm: searchTerm };
  },

  [SET_BOOK_SEARCH]: (state, action) => {
    const { searchTerm, bookList } = action.data;
    const { searchResults } = state;
    const newSearchResults = { ...searchResults, [searchTerm]: bookList };

    return { ...state, searchResults: newSearchResults };
  }
};

export default createReducer(initialState, actionHandlers);
