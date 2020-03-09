webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var _components_HeadTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HeadTag */ "./components/HeadTag.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
var _jsxFileName = "D:\\portableGiselle\\devreact\\giselletrithip.github.io-website\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function fetcher(url) {
  return fetch(url).then(function (r) {
    return r.json();
  });
}

function Index() {
  // const { query } = useRouter();
  // const { data, error } = useSWR(
  //   `/api/randomQuote${query.author ? '?author=' + query.author : ''}`,
  //   fetcher
  // );
  // // The following line has optional chaining, added in Next.js v9.1.5,
  // // is the same as `data && data.author`
  // const author = data?.author;
  // let quote = data?.quote;
  // if (!data) quote = 'Loading...';
  // if (error) quote = 'Failed to fetch the quote.';
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_HeadTag__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "columns body-columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "column is-one-third is-offset-one-third",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: "/img/IMG_0002.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: "/img/IMG_0003.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    image: "/img/IMG_0004.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })))));
}

/***/ })

})
//# sourceMappingURL=index.js.9bb284d0a840179ca492.hot-update.js.map