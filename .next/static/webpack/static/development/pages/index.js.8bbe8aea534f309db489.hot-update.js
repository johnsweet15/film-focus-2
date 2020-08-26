webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/services/movies.js":
/*!********************************!*\
  !*** ./src/services/movies.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ "./src/services/service.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/appconfig */ "./src/config/appconfig.js");
/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/keys */ "./src/config/keys.js");



const keyString = `?api_key=${_config_keys__WEBPACK_IMPORTED_MODULE_2__["default"].tmdbKey}`;

class MovieService {
  async getPopularMovies(data) {
    return _service__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_config_appconfig__WEBPACK_IMPORTED_MODULE_1__["default"].tmdbEndpoint}/movie/now_playing${keyString}`);
  }

}

const movieService = new MovieService();
/* harmony default export */ __webpack_exports__["default"] = (movieService);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvbW92aWVzLmpzIl0sIm5hbWVzIjpbImtleVN0cmluZyIsImtleXMiLCJ0bWRiS2V5IiwiTW92aWVTZXJ2aWNlIiwiZ2V0UG9wdWxhck1vdmllcyIsImRhdGEiLCJzZXJ2aWNlIiwiZ2V0IiwiYXBwY29uZmlnIiwidG1kYkVuZHBvaW50IiwibW92aWVTZXJ2aWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUksWUFBV0Msb0RBQUksQ0FBQ0MsT0FBUSxFQUEzQzs7QUFFQSxNQUFNQyxZQUFOLENBQW1CO0FBQ2pCLFFBQU1DLGdCQUFOLENBQXVCQyxJQUF2QixFQUE2QjtBQUMzQixXQUFPQyxnREFBTyxDQUFDQyxHQUFSLENBQWEsR0FBRUMseURBQVMsQ0FBQ0MsWUFBYSxxQkFBb0JULFNBQVUsRUFBcEUsQ0FBUDtBQUNEOztBQUhnQjs7QUFNbkIsTUFBTVUsWUFBWSxHQUFHLElBQUlQLFlBQUosRUFBckI7QUFDZU8sMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjhiYmU4YWVhNTM0ZjMwOWRiNDg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2VydmljZSBmcm9tIFwiLi9zZXJ2aWNlXCI7XHJcbmltcG9ydCBhcHBjb25maWcgZnJvbSBcIi4uL2NvbmZpZy9hcHBjb25maWdcIjtcclxuaW1wb3J0IGtleXMgZnJvbSBcIi4uL2NvbmZpZy9rZXlzXCI7XHJcblxyXG5jb25zdCBrZXlTdHJpbmcgPSBgP2FwaV9rZXk9JHtrZXlzLnRtZGJLZXl9YDtcclxuXHJcbmNsYXNzIE1vdmllU2VydmljZSB7XHJcbiAgYXN5bmMgZ2V0UG9wdWxhck1vdmllcyhkYXRhKSB7XHJcbiAgICByZXR1cm4gc2VydmljZS5nZXQoYCR7YXBwY29uZmlnLnRtZGJFbmRwb2ludH0vbW92aWUvbm93X3BsYXlpbmcke2tleVN0cmluZ31gKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1vdmllU2VydmljZSA9IG5ldyBNb3ZpZVNlcnZpY2UoKTtcclxuZXhwb3J0IGRlZmF1bHQgbW92aWVTZXJ2aWNlOyJdLCJzb3VyY2VSb290IjoiIn0=