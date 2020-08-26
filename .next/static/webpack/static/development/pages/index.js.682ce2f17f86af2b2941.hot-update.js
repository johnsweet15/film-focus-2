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
    setLoading(false);
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, popularMovies === null || popularMovies === void 0 ? void 0 : popularMovies.map(movie => {
    return __jsx(_components_movieCard_movieCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      loading: loading,
      movie: movie,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 16
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlU3RhdGUiLCJwb3B1bGFyTW92aWVzIiwic2V0UG9wdWxhck1vdmllcyIsInVzZUVmZmVjdCIsImdldFBvcHVsYXJNb3ZpZXMiLCJyZXNwb25zZSIsIk1vdmllU2VydmljZSIsImRhdGEiLCJyZXN1bHRzIiwibWFwIiwibW92aWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM3QixRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JDLHNEQUFRLENBQUMsSUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDQyxhQUFEO0FBQUEsT0FBZ0JDO0FBQWhCLE1BQW9DRixzREFBUSxDQUFDLElBQUQsQ0FBbEQ7QUFFQUcseURBQVMsQ0FBQyxNQUFNO0FBQ2RDLG9CQUFnQjtBQUNqQixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLGlCQUFlQSxnQkFBZixHQUFrQztBQUNoQyxRQUFJQyxRQUFRLEdBQUcsTUFBTUMsd0RBQVksQ0FBQ0YsZ0JBQWIsRUFBckI7QUFDQUYsb0JBQWdCLENBQUNHLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQyxPQUFmLENBQWhCO0FBQ0FULGNBQVUsQ0FBQyxLQUFELENBQVY7QUFDRDs7QUFFRCxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0UsYUFESCxhQUNHQSxhQURILHVCQUNHQSxhQUFhLENBQUVRLEdBQWYsQ0FBb0JDLEtBQUQsSUFBVztBQUM3QixXQUFPLE1BQUMsdUVBQUQ7QUFBVyxhQUFPLEVBQUVaLE9BQXBCO0FBQTZCLFdBQUssRUFBRVksS0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0QsR0FGQSxDQURILENBREY7QUFPRDs7R0FyQnVCYixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy42ODJjZTJmMTdmODZhZjJiMjk0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vdmllU2VydmljZSBmcm9tIFwiLi4vc2VydmljZXMvbW92aWVzXCI7XHJcbmltcG9ydCBNb3ZpZUNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbW92aWVDYXJkL21vdmllQ2FyZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbcG9wdWxhck1vdmllcywgc2V0UG9wdWxhck1vdmllc10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFBvcHVsYXJNb3ZpZXMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFBvcHVsYXJNb3ZpZXMoKSB7XHJcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBNb3ZpZVNlcnZpY2UuZ2V0UG9wdWxhck1vdmllcygpO1xyXG4gICAgc2V0UG9wdWxhck1vdmllcyhyZXNwb25zZS5kYXRhLnJlc3VsdHMpO1xyXG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3BvcHVsYXJNb3ZpZXM/Lm1hcCgobW92aWUpID0+IHtcclxuICAgICAgICByZXR1cm4gPE1vdmllQ2FyZCBsb2FkaW5nPXtsb2FkaW5nfSBtb3ZpZT17bW92aWV9IC8+O1xyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==