import React from 'react';
import BookCard from 'Components/BookCard';

import { listContainer, noBookForYou } from './styles.css';


function BookList({ bookList }) {
  if (bookList.length === 0) {
    return <div className={ noBookForYou }>No Books for you!</div>;
  }

  return (
    <div>
      <ul className={ listContainer }>
        {
          bookList.map((book, idx) => <BookCard key={ idx } book={ book } />)
        }
      </ul>
    </div>
  );
}


export default BookList;
