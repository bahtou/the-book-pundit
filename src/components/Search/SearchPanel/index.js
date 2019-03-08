import React, { useContext } from 'react';

import { container, list } from './styles.css';
import { AppContext } from 'Contexts';
import SearchItem from 'Components/Search/SearchItem';


function SearchPanel({ inputEl, dispatch, searchHistory }) {
  const { fetchBookList } = useContext(AppContext);

  function replaceCurrentSearch(searchTerm) {
    dispatch({ type: 'setIsPanelOpen', data: false });
    dispatch({ type: 'setSearchTerm', data: searchTerm });
    fetchBookList(searchTerm);
  }

  function removeFromSearchHistory(searchTerm) {
    const newSearchHistory = searchHistory.filter(el => el !== searchTerm);

    if (newSearchHistory.length === 0) {
      dispatch({ type: 'setHasSearchHistory', data: false });
    }

    dispatch({ type: 'setIsPanelOpen', data: false });
    dispatch({ type: 'setSearchHistory', data: newSearchHistory });
    inputEl.current.focus();
  }

  return (
    <div className={ container }>
      <ul className={ list } role="listbox">
        {
          searchHistory.map((searchTerm, idx) => <SearchItem key={ idx } searchTerm={ searchTerm } removeFromSearchHistory={ removeFromSearchHistory } replaceCurrentSearch={ replaceCurrentSearch } />)
        }
      </ul>
    </div>
  );
}


export default SearchPanel;
