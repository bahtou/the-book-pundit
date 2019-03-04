import React, { useState, useCallback, useEffect, useReducer, useRef } from 'react';

import SearchBar from './SearchBar';
import SearchPanel from './SearchPanel';


function Search() {
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ hasSearchHistory, setHasSearchHistory ] = useState(false);
  const [ openPanel, setOpenPanel ] = useState(false);
  const [ searchHistory, setSearchHistory ] = useState([]);
  const searchEl = useRef(null);
  let styles = {};

  const updateSearchHistory = useCallback(
    searchTerm => {
      let newSearchHistory = searchHistory;

      if (searchTerm) {
        newSearchHistory = searchHistory.filter(el => el !== searchTerm);
        if (newSearchHistory.length === 0) {
          styles = {};
          setHasSearchHistory(false);
        }
      }

      setSearchHistory(newSearchHistory);
    },
    [ searchHistory ]
  );

  function replaceCurrentSearch(searchTerm) {
    setSearchTerm(searchTerm);
    setOpenPanel(false);
  }

  if (hasSearchHistory && openPanel) {
    styles = {
      styBar: {
        borderBottom: 'none',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      },
      styBtn: {
        borderBottomRightRadius: 0
      }
    };
  }

  console.log('rendered', searchHistory);
  return (
    <>
      <SearchBar searchTerm={ searchTerm } setSearchTerm={ setSearchTerm }
        hasSearchHistory={ hasSearchHistory } setHasSearchHistory={ setHasSearchHistory } setOpenPanel={ setOpenPanel }
        searchHistory={ searchHistory }
        setSearchHistory={ setSearchHistory }
        searchEl={ searchEl } styles={ styles } />
      {
        hasSearchHistory && openPanel
          ? <SearchPanel
            searchEl={ searchEl }
            searchHistory={ searchHistory }
            updateSearchHistory={ updateSearchHistory }
            replaceCurrentSearch={ replaceCurrentSearch } />
          : null
      }
    </>
  );
}


export default Search;
