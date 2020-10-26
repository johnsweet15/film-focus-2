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
        console.log("rej");
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
    console.log("here");

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
    console.log(`localhost:3000/error?status=${statusCode}`);
    window.open(`${window.location.origin}/error?status=${statusCode}`, "_self");
  }

  handle401(error) {
    console.log(error);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZ2xvYmFsU2VydmljZS50cyJdLCJuYW1lcyI6WyJHbG9iYWxTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJzZXJ2aWNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiYXBwY29uZmlnIiwidG1kYkVuZHBvaW50IiwiaGVhZGVycyIsIl90aGlzIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc3BvbnNlIiwiY2FsbEVycm9ySGFuZGxlciIsImdldCIsInVybCIsInJlcyIsInJlaiIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwiZGF0YSIsInN0YXR1cyIsImhhbmRsZTQwMSIsImhhbmRsZURlZmF1bHQiLCJyZWRpcmVjdCIsInN0YXR1c0NvZGUiLCJ3aW5kb3ciLCJvcGVuIiwibG9jYXRpb24iLCJvcmlnaW4iLCJzZXNzaW9uU3RvcmFnZSIsImNsZWFyIiwiZ2xvYmFsU2VydmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxhQUFOLENBQW9CO0FBRWxCQyxhQUFXLEdBQUc7QUFDWixTQUFLQyxPQUFMLEdBQWVDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYTtBQUMxQkMsYUFBTyxFQUFFQyx5REFBUyxDQUFDQyxZQURPO0FBRTFCQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQUZpQixLQUFiLENBQWY7O0FBT0EsUUFBSUMsS0FBSyxHQUFHLElBQVo7O0FBQ0EsU0FBS1AsT0FBTCxDQUFhUSxZQUFiLENBQTBCQyxPQUExQixDQUFrQ0MsR0FBbEMsQ0FBc0MsVUFBU0MsTUFBVCxFQUFpQjtBQUNyRCxhQUFPQSxNQUFQO0FBQ0QsS0FGRCxFQUVHLFVBQVNDLEtBQVQsRUFBZ0I7QUFDakIsYUFBT0MsT0FBTyxDQUFDQyxNQUFSLENBQWVGLEtBQWYsQ0FBUDtBQUNELEtBSkQ7QUFNQSxTQUFLWixPQUFMLENBQWFRLFlBQWIsQ0FBMEJPLFFBQTFCLENBQW1DTCxHQUFuQyxDQUF1QyxVQUFTSyxRQUFULEVBQW1CO0FBQ3hELGFBQU9BLFFBQVA7QUFDRCxLQUZELEVBRUcsVUFBU0gsS0FBVCxFQUFnQjtBQUNqQkwsV0FBSyxDQUFDUyxnQkFBTixDQUF1QkosS0FBSyxDQUFDRyxRQUE3Qjs7QUFDQSxhQUFPRixPQUFPLENBQUNDLE1BQVIsQ0FBZUYsS0FBZixDQUFQO0FBQ0QsS0FMRDtBQU1EOztBQUVESyxLQUFHLENBQUNDLEdBQUQsRUFBTVAsTUFBTixFQUFjO0FBQ2YsV0FBTyxJQUFJRSxPQUFKLENBQVksT0FBT00sR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ3JDLFVBQUk7QUFDRixZQUFJTCxRQUFRLEdBQUcsTUFBTSxLQUFLZixPQUFMLENBQWFpQixHQUFiLENBQWlCQyxHQUFqQixFQUFzQlAsTUFBdEIsQ0FBckI7QUFDQVEsV0FBRyxDQUFDSixRQUFELENBQUg7QUFDRCxPQUhELENBR0UsT0FBTUgsS0FBTixFQUFhO0FBQ2JTLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFDQUYsV0FBRztBQUNKO0FBQ0YsS0FSTSxDQUFQO0FBU0Q7O0FBRURHLE1BQUksQ0FBQ0wsR0FBRCxFQUFNTSxJQUFOLEVBQVliLE1BQVosRUFBb0I7QUFDdEIsV0FBTyxJQUFJRSxPQUFKLENBQVksT0FBT00sR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ3JDLFVBQUk7QUFDRixZQUFJTCxRQUFRLEdBQUcsTUFBTSxLQUFLZixPQUFMLENBQWF1QixJQUFiLENBQWtCTCxHQUFsQixFQUF1Qk0sSUFBdkIsRUFBNkJiLE1BQTdCLENBQXJCO0FBQ0FRLFdBQUcsQ0FBQ0osUUFBRCxDQUFIO0FBQ0QsT0FIRCxDQUdFLE9BQU9ILEtBQVAsRUFBYztBQUNkUSxXQUFHO0FBQ0o7QUFDRixLQVBNLENBQVA7QUFRRDs7QUFFT0osa0JBQVIsQ0FBeUJKLEtBQXpCLEVBQWdDO0FBQzlCUyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaOztBQUNBLFlBQU9WLEtBQUssQ0FBQ2EsTUFBYjtBQUNFLFdBQUssR0FBTDtBQUNFLGFBQUtDLFNBQUwsQ0FBZWQsS0FBZjtBQUNBOztBQUNGO0FBQ0UsYUFBS2UsYUFBTCxDQUFtQmYsS0FBbkI7QUFDQTtBQU5KO0FBUUQ7O0FBRU9nQixVQUFSLENBQWlCQyxVQUFqQixFQUE2QjtBQUMzQlIsV0FBTyxDQUFDQyxHQUFSLENBQWEsK0JBQThCTyxVQUFXLEVBQXREO0FBQ0FDLFVBQU0sQ0FBQ0MsSUFBUCxDQUFhLEdBQUVELE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQkMsTUFBTyxpQkFBZ0JKLFVBQVcsRUFBakUsRUFBb0UsT0FBcEU7QUFDRDs7QUFFT0gsV0FBUixDQUFrQmQsS0FBbEIsRUFBeUI7QUFDdkJTLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVixLQUFaO0FBQ0FzQixrQkFBYyxDQUFDQyxLQUFmO0FBQ0EsU0FBS1AsUUFBTCxDQUFjaEIsS0FBSyxDQUFDYSxNQUFwQjtBQUNEOztBQUVPRSxlQUFSLENBQXNCZixLQUF0QixFQUE2QjtBQUMzQlMsV0FBTyxDQUFDQyxHQUFSLENBQVlWLEtBQVo7QUFDRDs7QUF6RWlCOztBQTRFcEIsTUFBTXdCLGFBQWEsR0FBRyxJQUFJdEMsYUFBSixFQUF0QjtBQUNlc0MsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjg2ZGU1MmM1MTkyM2M2ZjJiODI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgYXBwY29uZmlnIGZyb20gXCIuLi9jb25maWcvYXBwY29uZmlnXCI7XHJcblxyXG5jbGFzcyBHbG9iYWxTZXJ2aWNlIHtcclxuICBbeDogc3RyaW5nXTogYW55O1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zZXJ2aWNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgICAgYmFzZVVSTDogYXBwY29uZmlnLnRtZGJFbmRwb2ludCxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgIHRoaXMuc2VydmljZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoZnVuY3Rpb24oY29uZmlnKSB7XHJcbiAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICB9LCBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgfSlcclxuXHJcbiAgICB0aGlzLnNlcnZpY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9LCBmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICBfdGhpcy5jYWxsRXJyb3JIYW5kbGVyKGVycm9yLnJlc3BvbnNlKVxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldCh1cmwsIGNvbmZpZykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXMsIHJlaikgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXQodXJsLCBjb25maWcpO1xyXG4gICAgICAgIHJlcyhyZXNwb25zZSk7XHJcbiAgICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlalwiKVxyXG4gICAgICAgIHJlaigpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcG9zdCh1cmwsIGRhdGEsIGNvbmZpZykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXMsIHJlaikgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5wb3N0KHVybCwgZGF0YSwgY29uZmlnKTtcclxuICAgICAgICByZXMocmVzcG9uc2UpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlaigpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxsRXJyb3JIYW5kbGVyKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlcmVcIilcclxuICAgIHN3aXRjaChlcnJvci5zdGF0dXMpIHtcclxuICAgICAgY2FzZSA0MDE6XHJcbiAgICAgICAgdGhpcy5oYW5kbGU0MDEoZXJyb3IpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRoaXMuaGFuZGxlRGVmYXVsdChlcnJvcik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZGlyZWN0KHN0YXR1c0NvZGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGBsb2NhbGhvc3Q6MzAwMC9lcnJvcj9zdGF0dXM9JHtzdGF0dXNDb2RlfWApXHJcbiAgICB3aW5kb3cub3BlbihgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9lcnJvcj9zdGF0dXM9JHtzdGF0dXNDb2RlfWAsIFwiX3NlbGZcIilcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlNDAxKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgdGhpcy5yZWRpcmVjdChlcnJvci5zdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVEZWZhdWx0KGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGdsb2JhbFNlcnZpY2UgPSBuZXcgR2xvYmFsU2VydmljZSgpO1xyXG5leHBvcnQgZGVmYXVsdCBnbG9iYWxTZXJ2aWNlOyJdLCJzb3VyY2VSb290IjoiIn0=