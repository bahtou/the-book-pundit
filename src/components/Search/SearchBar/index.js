import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchBookListRequested } from 'Sagas/search';

import {
  container, searchBar, barContainer, searchButton,
  searchInput, theXBox, theXButton, theX
} from './styles.css';
import SearchIcon from 'Elements/Icons/Search';

const queryRegex = /\?q=(?<searchQuery>\w+)/;

function SearchBar({
  searchTerm, setSearchTerm,
  hasSearchHistory, setHasSearchHistory, setOpenPanel,
  searchHistory, setSearchHistory,
  searchEl, styles:{ styBar, styBtn },
  fetchBookListRequested}) {
  const [ btnDisplay, setBtnDisplay ] = useState({});

  useEffect(() => {
    let querySearch;
    let urlSearchTerm;
    const query = window.location.search;

    if (query) {
      querySearch = queryRegex.exec(query);
      urlSearchTerm = querySearch.groups.searchQuery;
      setSearchTerm(urlSearchTerm);
      setBtnDisplay({ 'display': 'flex' });
    }
  }, []);

  function handleOnChange(e) {
    console.log('onchange happened');
    const value = e.target.value;

    if (value !== '') {
      setBtnDisplay({ 'display': 'flex' });
    }

    if (value === '' && hasSearchHistory) {
      setBtnDisplay({});
      setOpenPanel(true);
    }

    setSearchTerm(e.target.value);
  }

  function handleOnClick(e) {
    e.preventDefault();

    if (!searchTerm) return;
    fetchBookListRequested(searchTerm);

    if (searchHistory.length === 5) {
      searchHistory.pop();
    }

    setHasSearchHistory(true);
    setOpenPanel(false);
    setSearchHistory([ searchTerm, ...searchHistory ]);

    window.history.pushState('page2', 'Search', `/search?q=${searchTerm}`);
  }

  function handleOnFocus(e) {
    const searchTerm = e.target.value;

    if (hasSearchHistory && searchTerm === '') {
      console.log('focused and history');
      setOpenPanel(true);
    }
  }

  function removeSearchTerm() {
    setSearchTerm('');
    setBtnDisplay({});
    searchEl.current.focus();

    if (hasSearchHistory) {
      setOpenPanel(true);
    }
  }

  function handleOnKeyPress(e) {
    if (e.key === 'Enter' && searchEl.current.value !== '') {
      console.log('fetch search');
    }
  }

  console.log('bar rendered', searchHistory);

  return (
    <div className={ container } style={ styBar }>
      <div className={ barContainer }>
        <div className={ searchBar }>
          <input className={ searchInput } type="search" name="q" value={ searchTerm }
            ref={ searchEl }
            maxLength="2048"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="off"
            title="search"
            onKeyPress={ handleOnKeyPress }
            onFocus={ handleOnFocus }
            onChange={ handleOnChange } />
        </div>
        <div className={ theXBox }>
          <button className={ theXButton } style={ btnDisplay } type="button" onClick={ removeSearchTerm }>
            <span className={ theX }>x</span>
          </button>
        </div>
      </div>
      <button className={ searchButton }
        style={ styBtn }
        onClick={ handleOnClick }>
        <SearchIcon />
      </button>
    </div>
  );
}


export default connect(null, { fetchBookListRequested })(SearchBar);
