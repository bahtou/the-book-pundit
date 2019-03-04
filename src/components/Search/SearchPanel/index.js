import React, { useState, useEffect, useReducer, useRef } from 'react';

import SearchItem from 'Components/Search/SearchItem';
import { container, list } from './styles.css';


function SearchPanel({ searchEl, searchHistory, updateSearchHistory, replaceCurrentSearch }) {
  console.log('panel', searchHistory);
  return (
    <div className={ container }>
      <ul className={ list } role="listbox">
        {
          searchHistory.map((searchTerm, idx) => <SearchItem key={ idx } searchEl={ searchEl } searchTerm={ searchTerm } updateSearchHistory={ updateSearchHistory } replaceCurrentSearch={ replaceCurrentSearch } />)
        }
      </ul>
    </div>
  );
}


export default SearchPanel;
