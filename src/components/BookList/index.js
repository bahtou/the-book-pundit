import React, { useState, useEffect, useReducer, useRef } from 'react';
import BookCard from 'Components/BookCard';


import { container, listContainer } from './styles.css';


function BookList({ bookList }) {
  return (
    <div className={ container }>
      <ul className={ listContainer }>
        {
          bookList.map((book, idx) => <BookCard key={ idx } book={ book } />)
        }
      </ul>
    </div>
  );
}


export default BookList;
