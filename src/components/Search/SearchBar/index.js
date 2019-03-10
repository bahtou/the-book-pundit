import React, { useState, useContext } from 'react';

import {
  container, searchBar, barContainer, searchButton,
  searchInput, theXBox, theXButton, theX
} from './styles.css';
import { AppContext } from 'Contexts';
import SearchIcon from 'Elements/Icons/Search';


function SearchBar({
  searchTerm, isPanelOpen, hasSearchHistory, searchHistory,
  inputEl, dispatch, styles:{ styBar, styBtn }
}) {
  const [ btnDisplay, setBtnDisplay ] = useState({});
  const { fetchBookList } = useContext(AppContext);

  function handleOnChange(e) {
    const value = e.target.value;

    if (value !== '') {
      setBtnDisplay({ 'display': 'flex' });
    }

    if (value === '' && hasSearchHistory) {
      setBtnDisplay({});
      dispatch({ type: 'setIsPanelOpen', data: true });
    }

    dispatch({ type: 'setSearchTerm', data: e.target.value });
  }

  function handleOnClick(e) {
    e.preventDefault();

    if (!searchTerm) return;

    _fetchBookList(searchTerm);
  }

  function handleOnFocus(e) {
    const searchTerm = e.target.value;

    if (hasSearchHistory && searchTerm === '') {
      dispatch({ type: 'setIsPanelOpen', data: true });
      return;
    }

    setBtnDisplay({ 'display': 'flex' });
  }

  function handleOnKeyPress(e) {
    const searchTerm = inputEl.current.value;

    if (e.key !== 'Enter' || !searchTerm) return;

    _fetchBookList(searchTerm);
  }

  function removeSearchTerm() {
    dispatch({ type: 'setSearchTerm', data: '' });
    inputEl.current.focus();
    setBtnDisplay({});

    if (hasSearchHistory) {
      dispatch({ type: 'setIsPanelOpen', data: true });
    }
  }

  function _fetchBookList(searchTerm) {
    fetchBookList(searchTerm);

    if (searchHistory.length === 5) {
      searchHistory.pop();
    }

    if (isPanelOpen) {
      dispatch({ type: 'setIsPanelOpen', data: false });
    }

    if (!hasSearchHistory) {
      dispatch({ type: 'setHasSearchHistory', data: true });
    }

    if (!searchHistory.includes(searchTerm)) {
      dispatch({ type: 'setSearchHistory', data: [ searchTerm, ...searchHistory ]});
    }
  }

  return (
    <div className={ container } style={ styBar }>
      <div className={ barContainer }>
        <div className={ searchBar }>
          <input className={ searchInput } type="search" name="q" value={ searchTerm }
            ref={ inputEl }
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


export default SearchBar;
