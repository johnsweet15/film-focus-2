webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_movies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/movies */ "./src/services/movies.js");
/* harmony import */ var _components_movieCard_movieCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/movieCard/movieCard */ "./src/components/movieCard/movieCard.js");
var _jsxFileName = "C:\\Film_Focus_2\\film-focus-2\\src\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Home() {
  _s();

  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: popularMovies,
    1: setPopularMovies
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getPopularMovies();
  }, []);

  async function getPopularMovies() {
    let response = await _services_movies__WEBPACK_IMPORTED_MODULE_1__["default"].getPopularMovies();
    setPopularMovies(response.data.results);
    console.log(popularMovies);
    setLoading(false);
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, !loading && __jsx(_components_movieCard_movieCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    loading: loading,
    movie: popularMovies[0],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 20
    }
  }));
}

_s(Home, "5jWKxQYR6PRznY7OxicP59/tVIU=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJwb3B1bGFyTW92aWVzIiwic2V0UG9wdWxhck1vdmllcyIsInVzZUVmZmVjdCIsImdldFBvcHVsYXJNb3ZpZXMiLCJyZXNwb25zZSIsIk1vdmllU2VydmljZSIsImRhdGEiLCJyZXN1bHRzIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQyxJQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NGLHNEQUFRLENBQUMsSUFBRCxDQUFsRDtBQUVBRyx5REFBUyxDQUFDLE1BQU07QUFDZEMsb0JBQWdCO0FBQ2pCLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsaUJBQWVBLGdCQUFmLEdBQWtDO0FBQ2hDLFFBQUlDLFFBQVEsR0FBRyxNQUFNQyx3REFBWSxDQUFDRixnQkFBYixFQUFyQjtBQUNBRixvQkFBZ0IsQ0FBQ0csUUFBUSxDQUFDRSxJQUFULENBQWNDLE9BQWYsQ0FBaEI7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlULGFBQVo7QUFDQUYsY0FBVSxDQUFDLEtBQUQsQ0FBVjtBQUNEOztBQUVELFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLENBQUNELE9BQUQsSUFBWSxNQUFDLHVFQUFEO0FBQVcsV0FBTyxFQUFFQSxPQUFwQjtBQUE2QixTQUFLLEVBQUVHLGFBQWEsQ0FBQyxDQUFELENBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEZixDQURGO0FBS0Q7O0dBcEJ1QkosSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNDY0NzkyNmU5ZjMwYzhjMjFkYzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNb3ZpZVNlcnZpY2UgZnJvbSBcIi4uL3NlcnZpY2VzL21vdmllc1wiO1xyXG5pbXBvcnQgTW92aWVDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL21vdmllQ2FyZC9tb3ZpZUNhcmRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3BvcHVsYXJNb3ZpZXMsIHNldFBvcHVsYXJNb3ZpZXNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRQb3B1bGFyTW92aWVzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXRQb3B1bGFyTW92aWVzKCkge1xyXG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgTW92aWVTZXJ2aWNlLmdldFBvcHVsYXJNb3ZpZXMoKTtcclxuICAgIHNldFBvcHVsYXJNb3ZpZXMocmVzcG9uc2UuZGF0YS5yZXN1bHRzKTtcclxuICAgIGNvbnNvbGUubG9nKHBvcHVsYXJNb3ZpZXMpXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoICBcclxuICAgIDxkaXY+XHJcbiAgICAgIHshbG9hZGluZyAmJiA8TW92aWVDYXJkIGxvYWRpbmc9e2xvYWRpbmd9IG1vdmllPXtwb3B1bGFyTW92aWVzWzBdfSAvPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==