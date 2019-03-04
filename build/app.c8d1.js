(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app"],{

/***/ "../node_modules/css-loader/dist/cjs.js!./assets/styles/global.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "*,\n*::after,\n*:before {\n  margin: 0;\n  padding: 0;\n  box-sizing: inherit;\n}\n\nhtml {\n  /* defines 1rem */\n  font-size: 62.5%;\n}\n\nbody {\n  box-sizing: border-box;\n  font-family: \"Lato\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 400;\n  line-height: 1.25;\n}\n\nul {\n  list-style: none;\n}\n\nbutton {\n  border: 0;\n}\n\nbutton, a {\n  cursor: pointer;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-weight: 700;\n  margin: 2.75rem 0 1rem;\n  line-height: 1.15;\n}\n\nh1 {\n  font-size: 4.883rem;\n  margin-top:0;\n}\n\nh2 {\n  font-size: 3.906rem;\n}\n\nh3 {\n  font-size: 3.125rem;\n}\n\np {\n  font-size:1.6rem;\n  margin-bottom: 2rem;\n}\n\nsvg {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n", ""]);



/***/ }),

/***/ "../node_modules/style-loader/index.js!../node_modules/css-loader/dist/cjs.js!./assets/styles/global.css":
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__("../node_modules/css-loader/dist/cjs.js!./assets/styles/global.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__("../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./App.css":
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"container":"__container--3VKS"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react-hot-loader/root.js");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/react-redux/es/index.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Components_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./components/Search/index.js");
/* harmony import */ var Components_BookList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/BookList/index.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();








function App(_ref) {
  var bookList = _ref.bookList;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: _App_css__WEBPACK_IMPORTED_MODULE_3__["container"]
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Components_Search__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null), bookList.length !== 0 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Components_BookList__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    bookList: bookList
  }) : null);
}

function mapStateToProps(state) {
  var search = state.search;
  var currentSearchTerm = search.currentSearchTerm,
      searchResults = search.searchResults;
  var bookList = searchResults[currentSearchTerm] || [];
  return {
    bookList: bookList
  };
}

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[/* connect */ "b"])(mapStateToProps, null)(Object(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_0__["hot"])(App));

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/App.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/App.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/App.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./assets/styles/normalizer.css":
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/BookCard/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/react-redux/es/index.js");
/* harmony import */ var Sagas_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./sagas/reviews/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/BookCard/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Elements_Icons_Star__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./elements/Icons/Star/index.js");
/* harmony import */ var Components_BookReviews__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./components/BookReviews/index.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var BookCard = function BookCard(_ref) {
  var book = _ref.book,
      fetchBookReviewsRequested = _ref.fetchBookReviewsRequested,
      _ref$reviews = _ref.reviews,
      reviews = _ref$reviews === void 0 ? {} : _ref$reviews;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      visibility = _useState2[0],
      setVisibility = _useState2[1];

  var book_id = book.book_id,
      author = book.author,
      imageURL = book.imageURL,
      publicationYear = book.publicationYear,
      rating = book.rating,
      numOfReviews = book.numOfReviews,
      title = book.title;
  var bookReviews = reviews[book_id] || [];

  var handleOnClick = function handleOnClick() {
    setVisibility(!visibility);

    if (bookReviews.length === 0) {
      fetchBookReviewsRequested(book_id);
    }
  };

  console.log('bookcard render');
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: book_id,
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3__["container"],
    onClick: handleOnClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3__["bookInfo"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3__["imgContainer"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    width: "118px",
    src: imageURL,
    alt: "book cover image"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3__["metaContainer"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3__["bookTitle"]
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3__["bookAuthor"]
  }, "by ", author.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3__["pubYear"]
  }, "Pub. Year: ", publicationYear), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3__["reviewsNum"]
  }, "Reviews: ", numOfReviews), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3__["ratingInfo"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3__["ratingScore"]
  }, rating), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3__["ratingStars"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Elements_Icons_Star__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    rating: rating
  }))))), visibility && bookReviews.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_BookReviews__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    bookReviews: bookReviews
  }) : null);
};

function mapStateToProps(state) {
  var reviews = state.reviews;
  return {
    reviews: reviews
  };
}

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[/* connect */ "b"])(mapStateToProps, {
  fetchBookReviewsRequested: Sagas_reviews__WEBPACK_IMPORTED_MODULE_2__[/* fetchBookReviewsRequested */ "e"]
})(BookCard);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BookCard, "BookCard", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/components/BookCard/index.js");
  reactHotLoader.register(mapStateToProps, "mapStateToProps", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/components/BookCard/index.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/components/BookCard/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/BookCard/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"container":"BookCard__container--3BeH","bookInfo":"BookCard__bookInfo--2enW","imgContainer":"BookCard__imgContainer--309U","metaContainer":"BookCard__metaContainer--2j-e","bookTitle":"BookCard__bookTitle--3AtE","bookAuthor":"BookCard__bookAuthor--e25K","pubYear":"BookCard__pubYear--2ulQ","reviewsNum":"BookCard__reviewsNum--7rlZ","ratingInfo":"BookCard__ratingInfo--2G0f","ratingScore":"BookCard__ratingScore--RiYY","ratingStars":"BookCard__ratingStars--3w51"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/BookList/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Components_BookCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/BookCard/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/BookList/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();





function BookList(_ref) {
  var bookList = _ref.bookList;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_2__["container"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_2__["listContainer"]
  }, bookList.map(function (book, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_BookCard__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      key: idx,
      book: book
    });
  })));
}

var _default = BookList;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BookList, "BookList", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/components/BookList/index.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/components/BookList/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/BookList/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"container":"BookList__container--3ziX","listContainer":"BookList__listContainer--3zFy"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/BookReview/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/BookReview/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Elements_Icons_Star__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./elements/Icons/Star/index.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();





function BookReview(_ref) {
  var bookReview = _ref.bookReview;
  var rating = bookReview.rating,
      review = bookReview.review,
      reviewer = bookReview.reviewer;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1__["divider"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1__["container"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1__["firstRow"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1__["pundit"]
  }, reviewer), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1__["ratingStars"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Elements_Icons_Star__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    rating: rating,
    size: "small"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1__["reviewTitle"],
    dangerouslySetInnerHTML: {
      __html: review
    }
  })));
}

var _default = BookReview;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BookReview, "BookReview", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/components/BookReview/index.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/components/BookReview/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/BookReview/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"divider":"BookReview__divider--2bo9","container":"BookReview__container--mPpn","firstRow":"BookReview__firstRow--13A6","pundit":"BookReview__pundit--38jp","ratingStars":"BookReview__ratingStars--_EL1","reviewTitle":"BookReview__reviewTitle--106D","pubDate":"BookReview__pubDate--1DDv","reviewText":"BookReview__reviewText--2ElP"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/BookReviews/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/BookReviews/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Components_BookReview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/BookReview/index.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();





function BookReviews(_ref) {
  var bookReviews = _ref.bookReviews;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1__["container"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1__["listContainer"]
  }, bookReviews.map(function (bookReview, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_BookReview__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      key: idx,
      bookReview: bookReview
    });
  })));
}

var _default = BookReviews;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(BookReviews, "BookReviews", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/components/BookReviews/index.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/components/BookReviews/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/BookReviews/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"container":"BookReviews__container--1unh","listContainer":"BookReviews__listContainer--9807"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/Search/SearchBar/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/react-redux/es/index.js");
/* harmony import */ var Sagas_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./sagas/search/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./components/Search/SearchBar/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var Elements_Icons_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./elements/Icons/Search/index.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _wrapRegExp(re, groups) { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, groups); }; var _RegExp = _wrapNativeSuper(RegExp); var _super = RegExp.prototype; var _groups = new WeakMap(); function BabelRegExp(re, groups) { var _this = _RegExp.call(this, re); _groups.set(_this, groups); return _this; } _inherits(BabelRegExp, _RegExp); BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) result.groups = buildGroups(result, this); return result; }; BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if (typeof substitution === "string") { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { return "$" + groups[name]; })); } else if (typeof substitution === "function") { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = []; args.push.apply(args, arguments); if (_typeof(args[args.length - 1]) !== "object") { args.push(buildGroups(args, _this)); } return substitution.apply(this, args); }); } else { return _super[Symbol.replace].call(this, str, substitution); } }; function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(groups).reduce(function (groups, name) { groups[name] = result[g[name]]; return groups; }, Object.create(null)); } return _wrapRegExp.apply(this, arguments); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var queryRegex = _wrapRegExp(/\?q=(\w+)/, {
  searchQuery: 1
});

function SearchBar(_ref) {
  var searchTerm = _ref.searchTerm,
      setSearchTerm = _ref.setSearchTerm,
      hasSearchHistory = _ref.hasSearchHistory,
      setHasSearchHistory = _ref.setHasSearchHistory,
      setOpenPanel = _ref.setOpenPanel,
      searchHistory = _ref.searchHistory,
      setSearchHistory = _ref.setSearchHistory,
      searchEl = _ref.searchEl,
      _ref$styles = _ref.styles,
      styBar = _ref$styles.styBar,
      styBtn = _ref$styles.styBtn,
      fetchBookListRequested = _ref.fetchBookListRequested;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      btnDisplay = _useState2[0],
      setBtnDisplay = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var querySearch;
    var urlSearchTerm;
    var query = window.location.search;

    if (query) {
      querySearch = queryRegex.exec(query);
      urlSearchTerm = querySearch.groups.searchQuery;
      setSearchTerm(urlSearchTerm);
      setBtnDisplay({
        'display': 'flex'
      });
    }
  }, []);

  function handleOnChange(e) {
    console.log('onchange happened');
    var value = e.target.value;

    if (value !== '') {
      setBtnDisplay({
        'display': 'flex'
      });
    }

    if (value === '' && hasSearchHistory) {
      setBtnDisplay({});
      setOpenPanel(true);
    }

    setSearchTerm(e.target.value);
  }

  function handleOnClick(e) {
    e.preventDefault();
    if (!searchTerm) return;
    fetchBookListRequested(searchTerm);

    if (searchHistory.length === 5) {
      searchHistory.pop();
    }

    setHasSearchHistory(true);
    setOpenPanel(false);
    setSearchHistory([searchTerm].concat(_toConsumableArray(searchHistory)));
    window.history.pushState('page2', 'Search', "/search?q=".concat(searchTerm));
  }

  function handleOnFocus(e) {
    var searchTerm = e.target.value;

    if (hasSearchHistory && searchTerm === '') {
      console.log('focused and history');
      setOpenPanel(true);
    }
  }

  function removeSearchTerm() {
    setSearchTerm('');
    setBtnDisplay({});
    searchEl.current.focus();

    if (hasSearchHistory) {
      setOpenPanel(true);
    }
  }

  function handleOnKeyPress(e) {
    if (e.key === 'Enter' && searchEl.current.value !== '') {
      console.log('fetch search');
    }
  }

  console.log('bar rendered', searchHistory);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3__["container"],
    style: styBar
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3__["barContainer"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3__["searchBar"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3__["searchInput"],
    type: "search",
    name: "q",
    value: searchTerm,
    ref: searchEl,
    maxLength: "2048",
    autoComplete: "off",
    autoCorrect: "off",
    spellCheck: "off",
    title: "search",
    onKeyPress: handleOnKeyPress,
    onFocus: handleOnFocus,
    onChange: handleOnChange
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3__["theXBox"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3__["theXButton"],
    style: btnDisplay,
    type: "button",
    onClick: removeSearchTerm
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3__["theX"]
  }, "x")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_3__["searchButton"],
    style: styBtn,
    onClick: handleOnClick
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Elements_Icons_Search__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null)));
}

var _default = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[/* connect */ "b"])(null, {
  fetchBookListRequested: Sagas_search__WEBPACK_IMPORTED_MODULE_2__[/* fetchBookListRequested */ "e"]
})(SearchBar);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(queryRegex, "queryRegex", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/components/Search/SearchBar/index.js");
  reactHotLoader.register(SearchBar, "SearchBar", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/components/Search/SearchBar/index.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/components/Search/SearchBar/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Search/SearchBar/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"container":"SearchBar__container--1HpC","barContainer":"SearchBar__barContainer--2eK8","searchBar":"SearchBar__searchBar--3h9W","buttonBar":"SearchBar__buttonBar--3PHn","searchInput":"SearchBar__searchInput--1PI7","theXBox":"SearchBar__theXBox--15rO","theXButton":"SearchBar__theXButton--3ye4","theX":"SearchBar__theX--K69w","searchButton":"SearchBar__searchButton--1qfY"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/Search/SearchItem/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Search/SearchItem/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var Elements_Icons_Clock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./elements/Icons/Clock/index.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();





function SearchItem(_ref) {
  var searchEl = _ref.searchEl,
      searchTerm = _ref.searchTerm,
      updateSearchHistory = _ref.updateSearchHistory,
      replaceCurrentSearch = _ref.replaceCurrentSearch;

  function removeSearchTerm(e) {
    updateSearchHistory(searchTerm);
    searchEl.current.focus();
    e.stopPropagation();
  }

  function lookupSearchTerm() {
    replaceCurrentSearch(searchTerm);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1__["listItem"],
    onClick: lookupSearchTerm
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1__["sicon"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Elements_Icons_Clock__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1__["sbtc"],
    role: "option"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1__["sbl1"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, searchTerm)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1__["sbab"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1__["sbai"],
    onClick: removeSearchTerm
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "x"))));
}

var _default = SearchItem;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SearchItem, "SearchItem", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/components/Search/SearchItem/index.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/components/Search/SearchItem/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Search/SearchItem/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"listItem":"SearchItem__listItem--p0Iv","sicon":"SearchItem__sicon--P2f5","sbtc":"SearchItem__sbtc--2edo","sbl1":"SearchItem__sbl1--168x","sbl2":"SearchItem__sbl2--5Agm","sbab":"SearchItem__sbab--ecz6","sbai":"SearchItem__sbai--2LIF"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/Search/SearchPanel/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Components_Search_SearchItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Search/SearchItem/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Search/SearchPanel/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();





function SearchPanel(_ref) {
  var searchEl = _ref.searchEl,
      searchHistory = _ref.searchHistory,
      updateSearchHistory = _ref.updateSearchHistory,
      replaceCurrentSearch = _ref.replaceCurrentSearch;
  console.log('panel', searchHistory);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_2__["container"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_2__["list"],
    role: "listbox"
  }, searchHistory.map(function (searchTerm, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Components_Search_SearchItem__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
      key: idx,
      searchEl: searchEl,
      searchTerm: searchTerm,
      updateSearchHistory: updateSearchHistory,
      replaceCurrentSearch: replaceCurrentSearch
    });
  })));
}

var _default = SearchPanel;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SearchPanel, "SearchPanel", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/components/Search/SearchPanel/index.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/components/Search/SearchPanel/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Search/SearchPanel/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"container":"SearchPanel__container--14Fh","list":"SearchPanel__list--tQTa"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/Search/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./components/Search/SearchBar/index.js");
/* harmony import */ var _SearchPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./components/Search/SearchPanel/index.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Search() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      searchTerm = _useState2[0],
      setSearchTerm = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      hasSearchHistory = _useState4[0],
      setHasSearchHistory = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      openPanel = _useState6[0],
      setOpenPanel = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      searchHistory = _useState8[0],
      setSearchHistory = _useState8[1];

  var searchEl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var styles = {};
  var updateSearchHistory = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (searchTerm) {
    var newSearchHistory = searchHistory;

    if (searchTerm) {
      newSearchHistory = searchHistory.filter(function (el) {
        return el !== searchTerm;
      });

      if (newSearchHistory.length === 0) {
        styles = {};
        setHasSearchHistory(false);
      }
    }

    setSearchHistory(newSearchHistory);
  }, [searchHistory]);

  function replaceCurrentSearch(searchTerm) {
    setSearchTerm(searchTerm);
    setOpenPanel(false);
  }

  if (hasSearchHistory && openPanel) {
    styles = {
      styBar: {
        borderBottom: 'none',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
      },
      styBtn: {
        borderBottomRightRadius: 0
      }
    };
  }

  console.log('rendered', searchHistory);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchBar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    searchTerm: searchTerm,
    setSearchTerm: setSearchTerm,
    hasSearchHistory: hasSearchHistory,
    setHasSearchHistory: setHasSearchHistory,
    setOpenPanel: setOpenPanel,
    searchHistory: searchHistory,
    setSearchHistory: setSearchHistory,
    searchEl: searchEl,
    styles: styles
  }), hasSearchHistory && openPanel ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchPanel__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    searchEl: searchEl,
    searchHistory: searchHistory,
    updateSearchHistory: updateSearchHistory,
    replaceCurrentSearch: replaceCurrentSearch
  }) : null);
}

var _default = Search;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Search, "Search", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/components/Search/index.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/components/Search/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./elements/Icons/Clock/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./elements/Icons/Clock/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();




var ClockIcon = function ClockIcon() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-24.000000, -223.000000)",
    stroke: "#757575",
    strokeWidth: "1.83000004"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(9.000000, 212.000000)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(15.000000, 11.000000)"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "11.085"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", {
    points: "17.5384615 16 11.6923077 12.6153846 11.6923077 5.53846154"
  }))))));
};

var _default = ClockIcon;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ClockIcon, "ClockIcon", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/elements/Icons/Clock/index.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/elements/Icons/Clock/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./elements/Icons/Clock/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./elements/Icons/Search/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./elements/Icons/Search/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();




var SearchIcon = function SearchIcon() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1__["container"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1__["box"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    viewBox: "0 0 30 30"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    stroke: "#ffffff",
    strokeWidth: "2",
    cx: "10",
    cy: "10",
    r: "9"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M16.6135413,18.1789581 L21.7364766,18.1789581 C22.8341425,18.1789581 23.7239766,19.0687921 23.7239766,20.1664581 L23.7239766,20.1664581 C23.7239766,21.2641241 22.8341425,22.1539581 21.7364766,22.1539581 L16.6135413,22.1539581 L16.6135413,18.1789581 Z",
    fill: "#ffffff",
    transform: "translate(20.168759, 20.166458) rotate(45.000000) translate(-20.168759, -20.166458) "
  })))));
};

var _default = SearchIcon;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SearchIcon, "SearchIcon", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/elements/Icons/Search/index.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/elements/Icons/Search/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./elements/Icons/Search/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"container":"Search__container--iUYj","box":"Search__box--1J6o"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./elements/Icons/Star/Empty/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./elements/Icons/Star/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();




var EmptyStarIcon = function EmptyStarIcon(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'reg' : _ref$size;
  var width = '20px';

  if (size === 'small') {
    width = '10px';
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1__["container"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1__["box"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: width,
    height: "19px",
    viewBox: "0 0 20 19"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.213787,17.1761622 L14.2180423,11.370525 L18.4360846,7.25894996 L12.6068935,6.41191891 L10,1.12977573 L7.3931065,6.41191891 L1.56391541,7.25894996 L5.7819577,11.370525 L4.78621299,17.1761622 L10,14.4351121 L15.213787,17.1761622 Z",
    id: "full-Star",
    stroke: "#BF9026",
    fill: "#FFFFFF"
  })))));
};

var _default = EmptyStarIcon;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(EmptyStarIcon, "EmptyStarIcon", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/elements/Icons/Star/Empty/index.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/elements/Icons/Star/Empty/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./elements/Icons/Star/Full/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./elements/Icons/Star/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();




var FullStarIcon = function FullStarIcon(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'reg' : _ref$size;
  var width = '20px';

  if (size === 'small') {
    width = '10px';
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1__["container"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1__["box"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: width,
    height: "19px",
    viewBox: "0 0 20 19"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.213787,17.1761622 L14.2180423,11.370525 L18.4360846,7.25894996 L12.6068935,6.41191891 L10,1.12977573 L7.3931065,6.41191891 L1.56391541,7.25894996 L5.7819577,11.370525 L4.78621299,17.1761622 L10,14.4351121 L15.213787,17.1761622 Z",
    id: "full-Star",
    stroke: "#BF9026",
    fill: "#FFC000"
  })))));
};

var _default = FullStarIcon;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(FullStarIcon, "FullStarIcon", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/elements/Icons/Star/Full/index.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/elements/Icons/Star/Full/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./elements/Icons/Star/Half/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./elements/Icons/Star/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();




var HalfStarIcon = function HalfStarIcon(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'reg' : _ref$size;
  var width = '20px';

  if (size === 'small') {
    width = '10px';
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1__["container"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _styles_css__WEBPACK_IMPORTED_MODULE_1__["box"]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: width,
    height: "19px",
    viewBox: "0 0 20 19",
    version: "1.1"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    id: "path-1",
    x: "0",
    y: "0",
    width: "10",
    height: "18"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Page-1",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "half-Star"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.213787,17.1761622 L14.2180423,11.370525 L18.4360846,7.25894996 L12.6068935,6.41191891 L10,1.12977573 L7.3931065,6.41191891 L1.56391541,7.25894996 L5.7819577,11.370525 L4.78621299,17.1761622 L10,14.4351121 L15.213787,17.1761622 Z",
    id: "Star",
    stroke: "#BF9026",
    fill: "#FFFFFF"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("mask", {
    id: "mask-2",
    fill: "white"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: "#path-1"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    id: "Mask"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M15.213787,17.1761622 L14.2180423,11.370525 L18.4360846,7.25894996 L12.6068935,6.41191891 L10,1.12977573 L7.3931065,6.41191891 L1.56391541,7.25894996 L5.7819577,11.370525 L4.78621299,17.1761622 L10,14.4351121 L15.213787,17.1761622 Z",
    id: "Star",
    stroke: "#BF9026",
    fill: "#FFC000",
    mask: "url(#mask-2)"
  }))))));
};

var _default = HalfStarIcon;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(HalfStarIcon, "HalfStarIcon", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/elements/Icons/Star/Half/index.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/elements/Icons/Star/Half/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./elements/Icons/Star/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Full__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./elements/Icons/Star/Full/index.js");
/* harmony import */ var _Half__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./elements/Icons/Star/Half/index.js");
/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./elements/Icons/Star/Empty/index.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function StarIcon(_ref) {
  var _ref$rating = _ref.rating,
      rating = _ref$rating === void 0 ? 0 : _ref$rating,
      size = _ref.size;
  var stars = [];

  var _rating$toString$spli = rating.toString().split('.'),
      _rating$toString$spli2 = _slicedToArray(_rating$toString$spli, 2),
      first = _rating$toString$spli2[0],
      second = _rating$toString$spli2[1];

  if (second && second[0]) {
    second = second[0];
  }

  var i = 0;

  for (; i < first; i++) {
    stars.push(_Full__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);
  }

  if (second >= 5) {
    stars.push(_Half__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
  }

  while (stars.length < 5) {
    stars.push(_Empty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, stars.map(function (Star, idx) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Star, {
      key: idx,
      size: size
    });
  }));
}

var _default = StarIcon;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(StarIcon, "StarIcon", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/elements/Icons/Star/index.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/elements/Icons/Star/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./elements/Icons/Star/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// extracted by extract-css-chunks-webpack-plugin
module.exports = {"container":"Star__container--3xxN","box":"Star__box--3GU6"};
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/@hot-loader/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/react-redux/es/index.js");
/* harmony import */ var _reduxStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./reduxStore.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./App.js");
/* harmony import */ var Styles_normalizer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./assets/styles/normalizer.css");
/* harmony import */ var Styles_normalizer_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(Styles_normalizer_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_loader_css_loader_Styles_global_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../node_modules/style-loader/index.js!../node_modules/css-loader/dist/cjs.js!./assets/styles/global.css");
/* harmony import */ var _style_loader_css_loader_Styles_global_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_loader_css_loader_Styles_global_css__WEBPACK_IMPORTED_MODULE_7__);







 // import '!style-loader!css-loader!Styles/mobileFirst.css';

Object(react_dom__WEBPACK_IMPORTED_MODULE_2__["render"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[/* Provider */ "a"], {
  store: _reduxStore__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null)), document.getElementById('root-entry'));

/***/ }),

/***/ "./reducers/createReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function createReducer(initialState, handlers) {
  return function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}

var _default = createReducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(createReducer, "createReducer", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/reducers/createReducer.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/reducers/createReducer.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./reducers/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/redux/es/redux.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./reducers/search.js");
/* harmony import */ var _reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./reducers/reviews.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();




var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[/* combineReducers */ "c"])({
  search: _search__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"],
  reviews: _reviews__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"]
});
var _default = rootReducer;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(rootReducer, "rootReducer", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/reducers/index.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/reducers/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./reducers/reviews.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_BOOK_REVIEWS; });
/* unused harmony export FETCH_BOOKREVIEW_REQUESTED */
/* harmony import */ var _createReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./reducers/createReducer.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var SET_BOOK_REVIEWS = 'SET_BOOK_REVIEWS';
var FETCH_BOOKREVIEW_REQUESTED = 'FETCH_BOOKREVIEW_REQUESTED';
var initialState = {};

var actionHandlers = _defineProperty({}, SET_BOOK_REVIEWS, function (state, action) {
  var _action$data = action.data,
      bookId = _action$data.bookId,
      bookReviews = _action$data.bookReviews;
  return _objectSpread({}, state, _defineProperty({}, bookId, bookReviews));
});

var _default = Object(_createReducer__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(initialState, actionHandlers);

/* harmony default export */ __webpack_exports__["b"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SET_BOOK_REVIEWS, "SET_BOOK_REVIEWS", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/reducers/reviews.js");
  reactHotLoader.register(FETCH_BOOKREVIEW_REQUESTED, "FETCH_BOOKREVIEW_REQUESTED", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/reducers/reviews.js");
  reactHotLoader.register(initialState, "initialState", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/reducers/reviews.js");
  reactHotLoader.register(actionHandlers, "actionHandlers", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/reducers/reviews.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/reducers/reviews.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./reducers/search.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_BOOK_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_CURRENT_SEARCHED_TERM; });
/* harmony import */ var _createReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./reducers/createReducer.js");
var _actionHandlers;

(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var SET_BOOK_SEARCH = 'SET_BOOK_SEARCH';
var SET_CURRENT_SEARCHED_TERM = 'SET_CURRENT_SEARCHED_TERM';
var initialState = {
  currentSearchTerm: '',
  searchResults: {}
};
var actionHandlers = (_actionHandlers = {}, _defineProperty(_actionHandlers, SET_CURRENT_SEARCHED_TERM, function (state, action) {
  var searchTerm = action.data;
  return _objectSpread({}, state, {
    currentSearchTerm: searchTerm
  });
}), _defineProperty(_actionHandlers, SET_BOOK_SEARCH, function (state, action) {
  var _action$data = action.data,
      searchTerm = _action$data.searchTerm,
      bookList = _action$data.bookList;
  var searchResults = state.searchResults;

  var newSearchResults = _objectSpread({}, searchResults, _defineProperty({}, searchTerm, bookList));

  return _objectSpread({}, state, {
    searchResults: newSearchResults
  });
}), _actionHandlers);

var _default = Object(_createReducer__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(initialState, actionHandlers);

/* harmony default export */ __webpack_exports__["c"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SET_BOOK_SEARCH, "SET_BOOK_SEARCH", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/reducers/search.js");
  reactHotLoader.register(SET_CURRENT_SEARCHED_TERM, "SET_CURRENT_SEARCHED_TERM", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/reducers/search.js");
  reactHotLoader.register(initialState, "initialState", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/reducers/search.js");
  reactHotLoader.register(actionHandlers, "actionHandlers", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/reducers/search.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/reducers/search.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./reduxStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/redux/es/redux.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./sagas/index.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();





var sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])();
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__[/* compose */ "d"];
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[/* createStore */ "e"])(_reducers__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"],
/* preloadedState, */
composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__[/* applyMiddleware */ "a"])(sagaMiddleware)));
sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Enable Webpack hot module replacement for reducers

if (!"production" !== 'production' && module.hot) {
  module.hot.accept('./reducers', function () {
    return store.replaceReducer(_reducers__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]);
  });
}

var _default = store;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(sagaMiddleware, "sagaMiddleware", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/reduxStore.js");
  reactHotLoader.register(composeEnhancers, "composeEnhancers", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/reduxStore.js");
  reactHotLoader.register(store, "store", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/reduxStore.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/reduxStore.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./sagas/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sagaCoordinator; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./sagas/search/index.js");
/* harmony import */ var _reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./sagas/reviews/index.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(sagaCoordinator);




function sagaCoordinator() {
  return regeneratorRuntime.wrap(function sagaCoordinator$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* all */ "a"])([Object(_search__WEBPACK_IMPORTED_MODULE_1__[/* default */ "d"])(), Object(_reviews__WEBPACK_IMPORTED_MODULE_2__[/* default */ "d"])()]);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(sagaCoordinator, "sagaCoordinator", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./sagas/reviews/fetchBookReviews.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./sagas/reviews/index.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(fetchBookReviews);




function bookReviewsRequest(bookId) {
  return new Promise(function (resolve, reject) {
    fetch("".concat("http://api.thebookpundit.app", "/reviews/").concat(bookId), {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache'
    }).then(function (res) {
      resolve(res.json());
    }).catch(function (err) {
      return reject(err);
    });
  });
}

function fetchBookReviews() {
  var _ref, bookId, response;

  return regeneratorRuntime.wrap(function fetchBookReviews$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* take */ "d"])(_index__WEBPACK_IMPORTED_MODULE_1__[/* FETCH_BOOKREVIEWS_REQUESTED */ "a"]);

        case 3:
          _ref = _context.sent;
          bookId = _ref.data;
          response = {};
          _context.prev = 6;
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* call */ "b"])(bookReviewsRequest, bookId);

        case 9:
          response = _context.sent;
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](6);
          console.log(_context.t0);
          debugger;

        case 16:
          _context.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* put */ "c"])({
            type: _index__WEBPACK_IMPORTED_MODULE_1__[/* PROCESS_REVIEWS_RESULTS */ "b"],
            data: {
              bookId: bookId,
              bookReviews: response
            }
          });

        case 18:
          _context.next = 0;
          break;

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[6, 12]]);
}

var _default = fetchBookReviews;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(bookReviewsRequest, "bookReviewsRequest", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/reviews/fetchBookReviews.js");
  reactHotLoader.register(fetchBookReviews, "fetchBookReviews", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/reviews/fetchBookReviews.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/reviews/fetchBookReviews.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./sagas/reviews/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export REVIEWS_CHANNEL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_BOOKREVIEWS_REQUESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PROCESS_REVIEWS_RESULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return STORE_REVIEWS_RESULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fetchBookReviewsRequested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return reviews; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _fetchBookReviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./sagas/reviews/fetchBookReviews.js");
/* harmony import */ var _processResults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./sagas/reviews/processResults.js");
/* harmony import */ var _storeResults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./sagas/reviews/storeResults.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(pipeline),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(reviews);





var REVIEWS_CHANNEL = 'REVIEWS_CHANNEL';
var FETCH_BOOKREVIEWS_REQUESTED = 'FETCH_BOOKREVIEWS_REQUESTED';
var PROCESS_REVIEWS_RESULTS = 'PROCESS_REVIEWS_RESULTS';
var STORE_REVIEWS_RESULTS = 'STORE_REVIEWS_RESULTS';
/**
 * EVENTS
 */

var fetchBookReviewsRequested = function fetchBookReviewsRequested(bookId) {
  return {
    type: REVIEWS_CHANNEL,
    data: {
      evt: FETCH_BOOKREVIEWS_REQUESTED,
      data: bookId
    }
  };
};
/**
 * SAGA
 */

function pipeline() {
  var _ref, _ref$data, evt, data;

  return regeneratorRuntime.wrap(function pipeline$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* take */ "d"])(REVIEWS_CHANNEL);

        case 3:
          _ref = _context.sent;
          _ref$data = _ref.data;
          evt = _ref$data.evt;
          data = _ref$data.data;
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* put */ "c"])({
            type: evt,
            data: data
          });

        case 9:
          _context.next = 0;
          break;

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

function reviews() {
  return regeneratorRuntime.wrap(function reviews$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* all */ "a"])([pipeline(), Object(_fetchBookReviews__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(), Object(_processResults__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(), Object(_storeResults__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])()]);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(REVIEWS_CHANNEL, "REVIEWS_CHANNEL", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/reviews/index.js");
  reactHotLoader.register(FETCH_BOOKREVIEWS_REQUESTED, "FETCH_BOOKREVIEWS_REQUESTED", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/reviews/index.js");
  reactHotLoader.register(PROCESS_REVIEWS_RESULTS, "PROCESS_REVIEWS_RESULTS", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/reviews/index.js");
  reactHotLoader.register(STORE_REVIEWS_RESULTS, "STORE_REVIEWS_RESULTS", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/reviews/index.js");
  reactHotLoader.register(fetchBookReviewsRequested, "fetchBookReviewsRequested", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/reviews/index.js");
  reactHotLoader.register(pipeline, "pipeline", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/reviews/index.js");
  reactHotLoader.register(reviews, "reviews", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/reviews/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./sagas/reviews/processResults.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./sagas/reviews/index.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(processSearchResults);




function processSearchResults() {
  var _ref, response;

  return regeneratorRuntime.wrap(function processSearchResults$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* take */ "d"])(_index__WEBPACK_IMPORTED_MODULE_1__[/* PROCESS_REVIEWS_RESULTS */ "b"]);

        case 3:
          _ref = _context.sent;
          response = _ref.data;
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* put */ "c"])({
            type: _index__WEBPACK_IMPORTED_MODULE_1__[/* STORE_REVIEWS_RESULTS */ "c"],
            data: response
          });

        case 7:
          _context.next = 0;
          break;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

var _default = processSearchResults;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(processSearchResults, "processSearchResults", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/reviews/processResults.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/reviews/processResults.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./sagas/reviews/storeResults.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./sagas/reviews/index.js");
/* harmony import */ var Reducers_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./reducers/reviews.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(storeResults);





function storeResults() {
  var _ref, _ref$data, bookId, bookReviews;

  return regeneratorRuntime.wrap(function storeResults$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* take */ "d"])(_index__WEBPACK_IMPORTED_MODULE_1__[/* STORE_REVIEWS_RESULTS */ "c"]);

        case 3:
          _ref = _context.sent;
          _ref$data = _ref.data;
          bookId = _ref$data.bookId;
          bookReviews = _ref$data.bookReviews;
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* put */ "c"])({
            type: Reducers_reviews__WEBPACK_IMPORTED_MODULE_2__[/* SET_BOOK_REVIEWS */ "a"],
            data: {
              bookId: bookId,
              bookReviews: bookReviews
            }
          });

        case 9:
          _context.next = 0;
          break;

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

var _default = storeResults;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(storeResults, "storeResults", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/reviews/storeResults.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/reviews/storeResults.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./sagas/search/fetchBookList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./sagas/search/index.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(fetchBookList);




function searchTermRequest(searchTerm) {
  return new Promise(function (resolve, reject) {
    fetch("".concat("http://api.thebookpundit.app", "/search?q=").concat(searchTerm), {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache'
    }).then(function (res) {
      resolve(res.json());
    }).catch(function (err) {
      return reject(err);
    });
  });
}

function fetchBookList() {
  var _ref, searchTerm, response;

  return regeneratorRuntime.wrap(function fetchBookList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* take */ "d"])(_index__WEBPACK_IMPORTED_MODULE_1__[/* FETCH_BOOKLIST_REQUESTED */ "a"]);

        case 3:
          _ref = _context.sent;
          searchTerm = _ref.data;
          response = {};
          _context.prev = 6;
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* call */ "b"])(searchTermRequest, searchTerm);

        case 9:
          response = _context.sent;
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](6);
          console.log(_context.t0);
          debugger;

        case 16:
          _context.next = 18;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* put */ "c"])({
            type: _index__WEBPACK_IMPORTED_MODULE_1__[/* PROCESS_SEARCH_RESULTS */ "b"],
            data: {
              searchTerm: searchTerm,
              bookList: response
            }
          });

        case 18:
          _context.next = 0;
          break;

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this, [[6, 12]]);
}

var _default = fetchBookList;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(searchTermRequest, "searchTermRequest", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/search/fetchBookList.js");
  reactHotLoader.register(fetchBookList, "fetchBookList", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/search/fetchBookList.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/search/fetchBookList.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./sagas/search/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export SEARCH_CHANNEL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FETCH_BOOKLIST_REQUESTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PROCESS_SEARCH_RESULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return STORE_SEARCH_RESULTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return fetchBookListRequested; });
/* unused harmony export setBookSearch */
/* unused harmony export setCurrentSearchTerm */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return search; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _fetchBookList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./sagas/search/fetchBookList.js");
/* harmony import */ var _processResults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./sagas/search/processResults.js");
/* harmony import */ var _storeResults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./sagas/search/storeResults.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(pipeline),
    _marked2 =
/*#__PURE__*/
regeneratorRuntime.mark(search);





var SEARCH_CHANNEL = 'SEARCH_CHANNEL';
var FETCH_BOOKLIST_REQUESTED = 'FETCH_BOOKLIST_REQUESTED';
var PROCESS_SEARCH_RESULTS = 'PROCESS_SEARCH_RESULTS';
var STORE_SEARCH_RESULTS = 'STORE_SEARCH_RESULTS';
/**
 * EVENTS
 */

var fetchBookListRequested = function fetchBookListRequested(searchTerm) {
  return {
    type: SEARCH_CHANNEL,
    data: {
      evt: FETCH_BOOKLIST_REQUESTED,
      data: searchTerm
    }
  };
};

var setBookSearch = function setBookSearch(bookList) {
  return {
    type: SEARCH_CHANNEL,
    data: {
      evt: 'SET_BOOK_SEARCH',
      data: bookList
    }
  };
};

var setCurrentSearchTerm = function setCurrentSearchTerm(searchTerm) {
  return {
    type: SEARCH_CHANNEL,
    data: {
      evt: 'SET_CURRENT_SEARCHED_TERM',
      data: searchTerm
    }
  };
};


/**
 * SAGA
 */

function pipeline() {
  var _ref, _ref$data, evt, data;

  return regeneratorRuntime.wrap(function pipeline$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* take */ "d"])(SEARCH_CHANNEL);

        case 3:
          _ref = _context.sent;
          _ref$data = _ref.data;
          evt = _ref$data.evt;
          data = _ref$data.data;
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* put */ "c"])({
            type: evt,
            data: data
          });

        case 9:
          _context.next = 0;
          break;

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

function search() {
  return regeneratorRuntime.wrap(function search$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* all */ "a"])([pipeline(), Object(_fetchBookList__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(), Object(_processResults__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(), Object(_storeResults__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])()]);

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked2, this);
}
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SEARCH_CHANNEL, "SEARCH_CHANNEL", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/search/index.js");
  reactHotLoader.register(FETCH_BOOKLIST_REQUESTED, "FETCH_BOOKLIST_REQUESTED", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/search/index.js");
  reactHotLoader.register(PROCESS_SEARCH_RESULTS, "PROCESS_SEARCH_RESULTS", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/search/index.js");
  reactHotLoader.register(STORE_SEARCH_RESULTS, "STORE_SEARCH_RESULTS", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/search/index.js");
  reactHotLoader.register(fetchBookListRequested, "fetchBookListRequested", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/search/index.js");
  reactHotLoader.register(setBookSearch, "setBookSearch", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/search/index.js");
  reactHotLoader.register(setCurrentSearchTerm, "setCurrentSearchTerm", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/search/index.js");
  reactHotLoader.register(pipeline, "pipeline", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/search/index.js");
  reactHotLoader.register(search, "search", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/search/index.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./sagas/search/processResults.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./sagas/search/index.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(processSearchResults);




function processSearchResults() {
  var _ref, response;

  return regeneratorRuntime.wrap(function processSearchResults$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* take */ "d"])(_index__WEBPACK_IMPORTED_MODULE_1__[/* PROCESS_SEARCH_RESULTS */ "b"]);

        case 3:
          _ref = _context.sent;
          response = _ref.data;
          _context.next = 7;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* put */ "c"])({
            type: _index__WEBPACK_IMPORTED_MODULE_1__[/* STORE_SEARCH_RESULTS */ "c"],
            data: response
          });

        case 7:
          _context.next = 0;
          break;

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

var _default = processSearchResults;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(processSearchResults, "processSearchResults", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/search/processResults.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/search/processResults.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./sagas/search/storeResults.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./sagas/search/index.js");
/* harmony import */ var Reducers_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./reducers/search.js");
(function () {
  var enterModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).enterModule;
  enterModule && enterModule(module);
})();

var _marked =
/*#__PURE__*/
regeneratorRuntime.mark(storeResults);





function storeResults() {
  var _ref, _ref$data, bookList, searchTerm;

  return regeneratorRuntime.wrap(function storeResults$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (false) {}

          _context.next = 3;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* take */ "d"])(_index__WEBPACK_IMPORTED_MODULE_1__[/* STORE_SEARCH_RESULTS */ "c"]);

        case 3:
          _ref = _context.sent;
          _ref$data = _ref.data;
          bookList = _ref$data.bookList;
          searchTerm = _ref$data.searchTerm;
          _context.next = 9;
          return Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* all */ "a"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* put */ "c"])({
            type: Reducers_search__WEBPACK_IMPORTED_MODULE_2__[/* SET_BOOK_SEARCH */ "a"],
            data: {
              bookList: bookList,
              searchTerm: searchTerm
            }
          }), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[/* put */ "c"])({
            type: Reducers_search__WEBPACK_IMPORTED_MODULE_2__[/* SET_CURRENT_SEARCHED_TERM */ "b"],
            data: searchTerm
          })]);

        case 9:
          _context.next = 0;
          break;

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, _marked, this);
}

var _default = storeResults;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).default;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(storeResults, "storeResults", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/search/storeResults.js");
  reactHotLoader.register(_default, "default", "/Users/bahtou/Documents/projects/SXSW/the-book-pundit/src/sagas/search/storeResults.js");
})();

;

(function () {
  var leaveModule = (typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal : __webpack_require__("../node_modules/react-hot-loader/index.js")).leaveModule;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./index.js");


/***/ })

},[[0,"manifest","vendor"]]]);