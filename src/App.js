import { hot } from 'react-hot-loader/root';
import React, { Fragment, useState, useEffect, useReducer, useRef } from 'react';

import { connect } from 'react-redux';

import { container } from './App.css';
import Search from 'Components/Search';
import BookList from 'Components/BookList';

function App({ bookList }) {
  return (
    <div className={ container }>
      <Search />
      { bookList.length !== 0
        ? <BookList bookList={ bookList } />
        : null
      }
    </div>
  );
}

function mapStateToProps(state) {
  const { search } = state;
  const { currentSearchTerm, searchResults } = search;
  const bookList = searchResults[currentSearchTerm] || [];
  return { bookList };
}

export default connect(mapStateToProps, null)(hot(App));
