webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/services/globalService.ts":
/*!***************************************!*\
  !*** ./src/services/globalService.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/appconfig */ "./src/config/appconfig.js");



class GlobalService {
  constructor() {
    this.service = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      baseURL: _config_appconfig__WEBPACK_IMPORTED_MODULE_1__["default"].tmdbEndpoint,
      headers: {
        "Content-Type": "application/json"
      }
    });

    let _this = this;

    this.service.interceptors.request.use(function (config) {
      return config;
    }, function (error) {
      return Promise.reject(error);
    });
    this.service.interceptors.response.use(function (response) {
      return response;
    }, function (error) {
      _this.callErrorHandler(error.response);

      return Promise.reject(error);
    });
  }

  get(url, config) {
    return new Promise(async (res, rej) => {
      try {
        let response = await this.service.get(url, config);
        res(response);
      } catch (error) {
        rej();
      }
    });
  }

  post(url, data, config) {
    return new Promise(async (res, rej) => {
      try {
        let response = await this.service.post(url, data, config);
        res(response);
      } catch (error) {
        rej();
      }
    });
  }

  callErrorHandler(error) {
    switch (error.status) {
      case 401:
        this.handle401(error);
        break;

      default:
        this.handleDefault(error);
        break;
    }
  }

  redirect(statusCode) {
    window.open(`${window.location.origin}/error?status=${statusCode}`, "_self");
  }

  handle401(error) {
    sessionStorage.clear();
    this.redirect(error.status);
  }

  handleDefault(error) {
    console.log(error);
  }

}

const globalService = new GlobalService();
/* harmony default export */ __webpack_exports__["default"] = (globalService);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZ2xvYmFsU2VydmljZS50cyJdLCJuYW1lcyI6WyJHbG9iYWxTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJzZXJ2aWNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiYXBwY29uZmlnIiwidG1kYkVuZHBvaW50IiwiaGVhZGVycyIsIl90aGlzIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc3BvbnNlIiwiY2FsbEVycm9ySGFuZGxlciIsImdldCIsInVybCIsInJlcyIsInJlaiIsInBvc3QiLCJkYXRhIiwic3RhdHVzIiwiaGFuZGxlNDAxIiwiaGFuZGxlRGVmYXVsdCIsInJlZGlyZWN0Iiwic3RhdHVzQ29kZSIsIndpbmRvdyIsIm9wZW4iLCJsb2NhdGlvbiIsIm9yaWdpbiIsInNlc3Npb25TdG9yYWdlIiwiY2xlYXIiLCJjb25zb2xlIiwibG9nIiwiZ2xvYmFsU2VydmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxhQUFOLENBQW9CO0FBRWxCQyxhQUFXLEdBQUc7QUFDWixTQUFLQyxPQUFMLEdBQWVDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUMxQkMsYUFBTyxFQUFFQyx5REFBUyxDQUFDQyxZQURPO0FBRTFCQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQUZpQixLQUFiLENBQWY7O0FBT0EsUUFBSUMsS0FBSyxHQUFHLElBQVo7O0FBQ0EsU0FBS1AsT0FBTCxDQUFhUSxZQUFiLENBQTBCQyxPQUExQixDQUFrQ0MsR0FBbEMsQ0FBc0MsVUFBU0MsTUFBVCxFQUFpQjtBQUNyRCxhQUFPQSxNQUFQO0FBQ0QsS0FGRCxFQUVHLFVBQVNDLEtBQVQsRUFBZ0I7QUFDakIsYUFBT0MsT0FBTyxDQUFDQyxNQUFSLENBQWVGLEtBQWYsQ0FBUDtBQUNELEtBSkQ7QUFNQSxTQUFLWixPQUFMLENBQWFRLFlBQWIsQ0FBMEJPLFFBQTFCLENBQW1DTCxHQUFuQyxDQUF1QyxVQUFTSyxRQUFULEVBQW1CO0FBQ3hELGFBQU9BLFFBQVA7QUFDRCxLQUZELEVBRUcsVUFBU0gsS0FBVCxFQUFnQjtBQUNqQkwsV0FBSyxDQUFDUyxnQkFBTixDQUF1QkosS0FBSyxDQUFDRyxRQUE3Qjs7QUFDQSxhQUFPRixPQUFPLENBQUNDLE1BQVIsQ0FBZUYsS0FBZixDQUFQO0FBQ0QsS0FMRDtBQU1EOztBQUVESyxLQUFHLENBQUNDLEdBQUQsRUFBTVAsTUFBTixFQUFjO0FBQ2YsV0FBTyxJQUFJRSxPQUFKLENBQVksT0FBT00sR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ3JDLFVBQUk7QUFDRixZQUFJTCxRQUFRLEdBQUcsTUFBTSxLQUFLZixPQUFMLENBQWFpQixHQUFiLENBQWlCQyxHQUFqQixFQUFzQlAsTUFBdEIsQ0FBckI7QUFDQVEsV0FBRyxDQUFDSixRQUFELENBQUg7QUFDRCxPQUhELENBR0UsT0FBTUgsS0FBTixFQUFhO0FBQ2JRLFdBQUc7QUFDSjtBQUNGLEtBUE0sQ0FBUDtBQVFEOztBQUVEQyxNQUFJLENBQUNILEdBQUQsRUFBTUksSUFBTixFQUFZWCxNQUFaLEVBQW9CO0FBQ3RCLFdBQU8sSUFBSUUsT0FBSixDQUFZLE9BQU9NLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNyQyxVQUFJO0FBQ0YsWUFBSUwsUUFBUSxHQUFHLE1BQU0sS0FBS2YsT0FBTCxDQUFhcUIsSUFBYixDQUFrQkgsR0FBbEIsRUFBdUJJLElBQXZCLEVBQTZCWCxNQUE3QixDQUFyQjtBQUNBUSxXQUFHLENBQUNKLFFBQUQsQ0FBSDtBQUNELE9BSEQsQ0FHRSxPQUFPSCxLQUFQLEVBQWM7QUFDZFEsV0FBRztBQUNKO0FBQ0YsS0FQTSxDQUFQO0FBUUQ7O0FBRU9KLGtCQUFSLENBQXlCSixLQUF6QixFQUFnQztBQUM5QixZQUFPQSxLQUFLLENBQUNXLE1BQWI7QUFDRSxXQUFLLEdBQUw7QUFDRSxhQUFLQyxTQUFMLENBQWVaLEtBQWY7QUFDQTs7QUFDRjtBQUNFLGFBQUthLGFBQUwsQ0FBbUJiLEtBQW5CO0FBQ0E7QUFOSjtBQVFEOztBQUVPYyxVQUFSLENBQWlCQyxVQUFqQixFQUE2QjtBQUMzQkMsVUFBTSxDQUFDQyxJQUFQLENBQWEsR0FBRUQsTUFBTSxDQUFDRSxRQUFQLENBQWdCQyxNQUFPLGlCQUFnQkosVUFBVyxFQUFqRSxFQUFvRSxPQUFwRTtBQUNEOztBQUVPSCxXQUFSLENBQWtCWixLQUFsQixFQUF5QjtBQUN2Qm9CLGtCQUFjLENBQUNDLEtBQWY7QUFDQSxTQUFLUCxRQUFMLENBQWNkLEtBQUssQ0FBQ1csTUFBcEI7QUFDRDs7QUFFT0UsZUFBUixDQUFzQmIsS0FBdEIsRUFBNkI7QUFDM0JzQixXQUFPLENBQUNDLEdBQVIsQ0FBWXZCLEtBQVo7QUFDRDs7QUFyRWlCOztBQXdFcEIsTUFBTXdCLGFBQWEsR0FBRyxJQUFJdEMsYUFBSixFQUF0QjtBQUNlc0MsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjc5ZWIyODFiNmU3Yzc5MmJlMDgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgYXBwY29uZmlnIGZyb20gXCIuLi9jb25maWcvYXBwY29uZmlnXCI7XHJcblxyXG5jbGFzcyBHbG9iYWxTZXJ2aWNlIHtcclxuICBbeDogc3RyaW5nXTogYW55O1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgYmFzZVVSTDogYXBwY29uZmlnLnRtZGJFbmRwb2ludCxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIHRoaXMuc2VydmljZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoZnVuY3Rpb24oY29uZmlnKSB7XHJcbiAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICB9LCBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnNlcnZpY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9LCBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICBfdGhpcy5jYWxsRXJyb3JIYW5kbGVyKGVycm9yLnJlc3BvbnNlKVxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldCh1cmwsIGNvbmZpZykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXMsIHJlaikgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXQodXJsLCBjb25maWcpO1xyXG4gICAgICAgIHJlcyhyZXNwb25zZSk7XHJcbiAgICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgICAgICByZWooKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHBvc3QodXJsLCBkYXRhLCBjb25maWcpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzLCByZWopID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UucG9zdCh1cmwsIGRhdGEsIGNvbmZpZyk7XHJcbiAgICAgICAgcmVzKHJlc3BvbnNlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZWooKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsbEVycm9ySGFuZGxlcihlcnJvcikge1xyXG4gICAgc3dpdGNoKGVycm9yLnN0YXR1cykge1xyXG4gICAgICBjYXNlIDQwMTpcclxuICAgICAgICB0aGlzLmhhbmRsZTQwMShlcnJvcik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhpcy5oYW5kbGVEZWZhdWx0KGVycm9yKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVkaXJlY3Qoc3RhdHVzQ29kZSkge1xyXG4gICAgd2luZG93Lm9wZW4oYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vZXJyb3I/c3RhdHVzPSR7c3RhdHVzQ29kZX1gLCBcIl9zZWxmXCIpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZTQwMShlcnJvcikge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIHRoaXMucmVkaXJlY3QoZXJyb3Iuc3RhdHVzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRGVmYXVsdChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBnbG9iYWxTZXJ2aWNlID0gbmV3IEdsb2JhbFNlcnZpY2UoKTtcclxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsU2VydmljZTsiXSwic291cmNlUm9vdCI6IiJ9