import React, { useEffect, useState, Suspense } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-loader-spinner';

import { fetchBookReviewsRequested } from 'Sagas/reviews';

import {
  container, imgContainer, metaContainer,
  bookTitle, bookAuthor, ratingScore, bookInfo, reviewsNum, pubYear, ratingInfo, ratingStars
} from './styles.css';
import StarIcons from 'Elements/Icons/Star';
const BookReviews = React.lazy(() => import('Components/BookList/BookReviews'));


const BookCard = ({ book, fetchBookReviewsRequested, reviews:{ currentReviews, reviewResults }}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [bookReviews, setBookReviews] = useState([]);
  const {
    book_id, author, imageURL,
    publicationYear, rating, numOfReviews, title
  } = book;

  useEffect(() => {
    const { reviews } = currentReviews;

    if (isLoading) {
      setBookReviews(reviews);
      setIsLoading(false);
      setIsVisible(true);
    }

  }, [currentReviews]);

  const handleOnClick = () => {
    if (isVisible) {
      setIsVisible(false);
      return;
    }

    setIsLoading(true);
    fetchBookReviewsRequested(book_id);
  };

  return (
    <section id={ book_id } className={ container }
      onClick={ handleOnClick }>
      <div className={ bookInfo }>
        <div className={ imgContainer }>
          <img width="118px" src={ imageURL } />
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
        isLoading
          ? <div style={{ display: 'flex', 'justifyContent': 'center', 'marginTop': '20px' }}>
              <Spinner type="Puff" color="#000000" height={ 80 } width={ 80 } />
            </div>
          : null
      }
      {
        isVisible
          ? <Suspense fallback={ <Spinner type="Puff" color="#000000" height={ 80 } width={ 80 } /> }>
              <BookReviews bookReviews={ bookReviews } />
            </Suspense>
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
