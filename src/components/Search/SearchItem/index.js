import React from 'react';

import { listItem, sicon, sbtc, sbl1, sbab, sbai } from './styles.css';
import ClockIcon from 'Elements/Icons/Clock';


function SearchItem({ searchTerm, replaceCurrentSearch, removeFromSearchHistory }) {

  function handleOnClick(e) {
    e.stopPropagation();
    removeFromSearchHistory(searchTerm);
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
        <div className={ sbai } onClick={ handleOnClick }>
          <span>x</span>
        </div>
      </div>
    </li>
  );
}


export default SearchItem;
