import React, { useState } from 'react';
import { connect } from 'react-redux';

import { fetchBookReviewsRequested } from 'Sagas/reviews';

import {
  container, imgContainer, metaContainer,
  bookTitle, bookAuthor, ratingScore, bookInfo, reviewsNum, pubYear, ratingInfo, ratingStars
} from './styles.css';
import StarIcons from 'Elements/Icons/Star';
const BookReviews = React.lazy(() => import('Components/BookReviews'));


const BookCard = ({ book, fetchBookReviewsRequested, reviews:{ reviewResults={} }}) => {
  const [visibility, setVisibility] = useState(false);
  const { book_id, author, imageURL, publicationYear, rating, numOfReviews, title } = book;
  let bookReviews = reviewResults[book_id] || [];

  const handleOnClick = () => {
    setVisibility(!visibility);

    if (bookReviews.length === 0) {
      fetchBookReviewsRequested(book_id);
    }
  };

  console.log('bookcard render');

  return (
    <section id={ book_id } className={ container }
      onClick={ handleOnClick }>
      <div className={ bookInfo }>
        <div className={ imgContainer }>
          <img width="118px" src={ imageURL } alt="book cover image" />
        </div>
        <div className={ metaContainer }>
          <h5 className={ bookTitle }>{ title }</h5>
          <span className={ bookAuthor }>by { author.name }</span>
          <span className={ pubYear }>Pub. Year: { publicationYear }</span>
          <span className={ reviewsNum }>Reviews: { numOfReviews }</span>

          <div className={ ratingInfo }>
            <span className={ ratingScore }>{ rating }</span>
            <div className={ ratingStars }>
              <StarIcons rating={ rating } />
            </div>
          </div>
        </div>
      </div>
      {
        visibility && bookReviews.length > 0
          ? <BookReviews bookReviews={ bookReviews } />
          : null
      }
    </section>
  );
};


function mapStateToProps(state) {
  const { reviews } = state;
  return { reviews };
}


export default connect(mapStateToProps, { fetchBookReviewsRequested })(BookCard);
