import React from 'react';

import {
  container, pundit, ratingStars, firstRow,
  reviewTitle, divider
} from './styles.css';
import StarIcons from 'Elements/Icons/Star';


function BookReview({ bookReview }) {
  const { rating, review, reviewer } = bookReview;

  return (
    <>
      <hr className={ divider } />
      <div className={ container }>
        <div className={ firstRow }>
          <div className={ pundit }>{ reviewer }</div>
          <span className={ ratingStars }>
            <StarIcons rating={ rating } size="small" />
          </span>
        </div>
        <div className={ reviewTitle } dangerouslySetInnerHTML={{ __html: review }} />
      </div>
    </>
  );
}


export default BookReview;
