import React, { useState, useEffect, useReducer, useRef } from 'react';

import { listItem, sicon, sbtc, sbl1, sbab, sbai } from './styles.css';
import ClockIcon from 'Elements/Icons/Clock';


function SearchItem({ searchEl, searchTerm, updateSearchHistory, replaceCurrentSearch }) {

  function removeSearchTerm(e) {
    updateSearchHistory(searchTerm);
    searchEl.current.focus();
    e.stopPropagation();
  }

  function lookupSearchTerm() {
    replaceCurrentSearch(searchTerm);
  }

  return (
    <li className={ listItem } onClick={ lookupSearchTerm }>
      <div className={ sicon }><ClockIcon /></div>
      <div className={ sbtc } role="option">
        <div className={ sbl1 }><span><b>{ searchTerm }</b></span></div>
      </div>
      <div className={ sbab }>
        <div className={ sbai } onClick={ removeSearchTerm }>
          <span>x</span>
        </div>
      </div>
    </li>
  );
}


export default SearchItem;
