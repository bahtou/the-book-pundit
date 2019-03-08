import React from 'react';

import { noBookReviewsForYou } from './styles.css';
import BookReview from 'Components/BookReview';


function BookReviews({ bookReviews }) {
  if (bookReviews.length === 0) {
    return <div className={ noBookReviewsForYou }>No Book Reviews for you!</div>;
  }

  return (
    <div>
      <ul>
        {
          bookReviews.map((bookReview, idx) => <BookReview key={ idx } bookReview={ bookReview } />)
        }
      </ul>
    </div>
  );
}


export default BookReviews;
