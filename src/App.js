import { hot } from 'react-hot-loader/root';
import React, { useEffect, useState, Suspense } from 'react';
import { connect } from 'react-redux';
import Spinner from 'react-loader-spinner';

import {
  container, logoContainer, appTitle,
  welcomeContainer, welList, welItem, DRM
} from './App.css';
import logo from 'Images/logo.jpg';

import Search from 'Components/Search';
const BookList = React.lazy(() => import('Components/BookList'));

import { AppContext } from 'Contexts';
import { fetchBookListRequested } from 'Sagas/search';


function App({ currentSearchTerm, searchResults, fetchBookListRequested }) {
  const [ isFirstLoad, setIsFirstLoad ] = useState(true);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ bookList, setBookList ] = useState(null);

  useEffect(() => {
    if (!currentSearchTerm) return;

    const bookListResult = searchResults[currentSearchTerm];
    bookListResult
      ? setBookList(bookListResult)
      : setBookList([]);

    setIsLoading(false);
  }, [searchResults, currentSearchTerm]);

  function fetchBookList(searchTerm) {
    const bookListResults = searchResults[searchTerm];

    setBookList(null);
    setIsLoading(true);

    if (isFirstLoad) setIsFirstLoad(false);

    if (bookListResults) {
      setIsLoading(false);
      setBookList(bookListResults);
    } else {
      fetchBookListRequested(searchTerm);
    }
  }

  return (
    <AppContext.Provider value={{ fetchBookList }}>
      <div className={ container }>
        <div className={ logoContainer }>
          <img src={ logo } alt="logo" />
          <h3 className={ appTitle }>The Book Pundit</h3>
        </div>

        <Search />

        { isLoading
          ? <div style={{ display: 'flex', 'justifyContent': 'center' }}>
              <Spinner type="Puff" color="#000000" height={ 80 } width={ 80 } />
            </div>
          : !bookList
            ? null
            : <Suspense fallback={ <Spinner type="Puff" color="#000000" height={ 80 } width={ 80 } /> }>
                <BookList bookList={ bookList } />
              </Suspense>
        }

        { isFirstLoad
          ? <Welcome />
          : null
        }
      </div>
    </AppContext.Provider>

  );
}

function Welcome() {
  return (
    <div className={ welcomeContainer }>
      <h2>Hola Amigos!</h2>
      <p>Welcome to SXSW</p>
      <ul className={ welList }>
        <li><span className={ welItem }>Type in a title of a book to get started</span></li>
        <li><span className={ welItem }>From the book list select one to see what's all the chatter</span></li>
      </ul>
      <span className={ DRM }>Downtown ReactJS Meetup</span>
    </div>
  );
}

function mapStateToProps(state) {
  const { search:{ currentSearchTerm, searchResults }} = state;
  return { currentSearchTerm, searchResults };
}


export default connect(mapStateToProps, { fetchBookListRequested })(hot(App));
