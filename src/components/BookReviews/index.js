import React, { useState, useEffect, useReducer, useRef } from 'react';

import { container, listContainer } from './styles.css';
import BookReview from 'Components/BookReview';


function BookReviews({ bookReviews }) {
  return (
    <div className={ container }>
      <ul className={ listContainer }>
        {
          bookReviews.map((bookReview, idx) => <BookReview key={ idx } bookReview={ bookReview } />)
        }
      </ul>
    </div>
  );
}


export default BookReviews;
