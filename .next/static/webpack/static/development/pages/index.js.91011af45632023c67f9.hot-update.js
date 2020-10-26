webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/services/movies.js":
/*!********************************!*\
  !*** ./src/services/movies.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/appconfig */ "./src/config/appconfig.js");
/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/keys */ "./src/config/keys.js");
/* harmony import */ var _globalService_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalService.ts */ "./src/services/globalService.ts");



const keyString = `?api_key=${_config_keys__WEBPACK_IMPORTED_MODULE_1__["default"].tmdbKey}`;

class MovieService {
  async getPopularMovies() {
    return _globalService_ts__WEBPACK_IMPORTED_MODULE_2__["default"].get(`/movie/now_playing${keyString}`);
  }

  async getMovieDetails(id) {
    return _globalService_ts__WEBPACK_IMPORTED_MODULE_2__["default"].get(`${_config_appconfig__WEBPACK_IMPORTED_MODULE_0__["default"].tmdbEndpoint}/movie/${id}${keyString}`);
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

/***/ }),

/***/ "./src/services/service.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvbW92aWVzLmpzIl0sIm5hbWVzIjpbImtleVN0cmluZyIsImtleXMiLCJ0bWRiS2V5IiwiTW92aWVTZXJ2aWNlIiwiZ2V0UG9wdWxhck1vdmllcyIsInNlcnZpY2UiLCJnZXQiLCJnZXRNb3ZpZURldGFpbHMiLCJpZCIsImFwcGNvbmZpZyIsInRtZGJFbmRwb2ludCIsIm1vdmllU2VydmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFJLFlBQVdDLG9EQUFJLENBQUNDLE9BQVEsRUFBM0M7O0FBRUEsTUFBTUMsWUFBTixDQUFtQjtBQUNqQixRQUFNQyxnQkFBTixHQUF5QjtBQUN2QixXQUFPQyx5REFBTyxDQUFDQyxHQUFSLENBQWEscUJBQW9CTixTQUFVLEVBQTNDLENBQVA7QUFDRDs7QUFFRCxRQUFNTyxlQUFOLENBQXNCQyxFQUF0QixFQUEwQjtBQUN4QixXQUFPSCx5REFBTyxDQUFDQyxHQUFSLENBQWEsR0FBRUcseURBQVMsQ0FBQ0MsWUFBYSxVQUFTRixFQUFHLEdBQUVSLFNBQVUsRUFBOUQsQ0FBUDtBQUNEOztBQVBnQjs7QUFVbkIsTUFBTVcsWUFBWSxHQUFHLElBQUlSLFlBQUosRUFBckI7QUFDZVEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjkxMDExYWY0NTYzMjAyM2M2N2Y5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwY29uZmlnIGZyb20gXCIuLi9jb25maWcvYXBwY29uZmlnXCI7XHJcbmltcG9ydCBrZXlzIGZyb20gXCIuLi9jb25maWcva2V5c1wiO1xyXG5pbXBvcnQgc2VydmljZSBmcm9tICcuL2dsb2JhbFNlcnZpY2UudHMnO1xyXG5cclxuY29uc3Qga2V5U3RyaW5nID0gYD9hcGlfa2V5PSR7a2V5cy50bWRiS2V5fWA7XHJcblxyXG5jbGFzcyBNb3ZpZVNlcnZpY2Uge1xyXG4gIGFzeW5jIGdldFBvcHVsYXJNb3ZpZXMoKSB7XHJcbiAgICByZXR1cm4gc2VydmljZS5nZXQoYC9tb3ZpZS9ub3dfcGxheWluZyR7a2V5U3RyaW5nfWApO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgZ2V0TW92aWVEZXRhaWxzKGlkKSB7XHJcbiAgICByZXR1cm4gc2VydmljZS5nZXQoYCR7YXBwY29uZmlnLnRtZGJFbmRwb2ludH0vbW92aWUvJHtpZH0ke2tleVN0cmluZ31gKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1vdmllU2VydmljZSA9IG5ldyBNb3ZpZVNlcnZpY2UoKTtcclxuZXhwb3J0IGRlZmF1bHQgbW92aWVTZXJ2aWNlOyJdLCJzb3VyY2VSb290IjoiIn0=