import React, { useEffect, useReducer, useRef, useState } from 'react';

import SearchBar from './SearchBar';
import SearchPanel from './SearchPanel';


const initialState = {
  searchTerm: '',
  searchHistory: [],
  hasSearchHistory: false,
  isPanelOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'setSearchTerm':
      return { ...state, searchTerm: action.data };
    case 'setSearchHistory':
      return { ...state, searchHistory: action.data };
    case 'setHasSearchHistory':
      return { ...state, hasSearchHistory: action.data };
    case 'setIsPanelOpen':
      return { ...state, isPanelOpen: action.data };
    default:
      return state;
  }
}

function Search() {
  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { searchTerm, searchHistory, hasSearchHistory, isPanelOpen } = state;
  const [ styles, setStyles ] = useState({});
  const inputEl = useRef(null);

  useEffect(() => {
    if (hasSearchHistory && isPanelOpen) {
      setStyles({
        styBar: {
          borderBottom: 'none',
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0
        },
        styBtn: {
          borderBottomRightRadius: 0
        }
      });
    } else {
      setStyles({});
    }
  }, [hasSearchHistory, isPanelOpen]);

  return (
    <>
      <SearchBar searchTerm={ searchTerm } searchHistory={ searchHistory } isPanelOpen={ isPanelOpen }
        dispatch={ dispatch } hasSearchHistory={ hasSearchHistory }
        inputEl={ inputEl } styles={ styles } />
      {
        isPanelOpen && hasSearchHistory
          ? <SearchPanel
            inputEl={ inputEl }
            dispatch={ dispatch }
            searchHistory={ searchHistory } />
          : null
      }
    </>
  );
}


export default Search;
