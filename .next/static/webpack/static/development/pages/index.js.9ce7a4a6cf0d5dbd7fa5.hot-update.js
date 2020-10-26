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
      console.log(this);
      this.callErrorHandler(error.response);
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
    window.open(`localhost:3000/error?status=${statusCode}`, "_self");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZ2xvYmFsU2VydmljZS50cyJdLCJuYW1lcyI6WyJHbG9iYWxTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJzZXJ2aWNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiYXBwY29uZmlnIiwidG1kYkVuZHBvaW50IiwiaGVhZGVycyIsIl90aGlzIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImNhbGxFcnJvckhhbmRsZXIiLCJnZXQiLCJ1cmwiLCJyZXMiLCJyZWoiLCJwb3N0IiwiZGF0YSIsInN0YXR1cyIsImhhbmRsZTQwMSIsImhhbmRsZURlZmF1bHQiLCJyZWRpcmVjdCIsInN0YXR1c0NvZGUiLCJ3aW5kb3ciLCJvcGVuIiwic2Vzc2lvblN0b3JhZ2UiLCJjbGVhciIsImdsb2JhbFNlcnZpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsYUFBTixDQUFvQjtBQUVsQkMsYUFBVyxHQUFHO0FBQ1osU0FBS0MsT0FBTCxHQUFlQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDMUJDLGFBQU8sRUFBRUMseURBQVMsQ0FBQ0MsWUFETztBQUUxQkMsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQ7QUFGaUIsS0FBYixDQUFmOztBQU9BLFFBQUlDLEtBQUssR0FBRyxJQUFaOztBQUNBLFNBQUtQLE9BQUwsQ0FBYVEsWUFBYixDQUEwQkMsT0FBMUIsQ0FBa0NDLEdBQWxDLENBQXNDLFVBQVNDLE1BQVQsRUFBaUI7QUFDckQsYUFBT0EsTUFBUDtBQUNELEtBRkQsRUFFRyxVQUFTQyxLQUFULEVBQWdCO0FBQ2pCLGFBQU9DLE9BQU8sQ0FBQ0MsTUFBUixDQUFlRixLQUFmLENBQVA7QUFDRCxLQUpEO0FBTUEsU0FBS1osT0FBTCxDQUFhUSxZQUFiLENBQTBCTyxRQUExQixDQUFtQ0wsR0FBbkMsQ0FBdUMsVUFBU0ssUUFBVCxFQUFtQjtBQUN4RCxhQUFPQSxRQUFQO0FBQ0QsS0FGRCxFQUVHLFVBQVNILEtBQVQsRUFBZ0I7QUFDakJJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDQSxXQUFLQyxnQkFBTCxDQUFzQk4sS0FBSyxDQUFDRyxRQUE1QjtBQUNBLGFBQU9GLE9BQU8sQ0FBQ0MsTUFBUixDQUFlRixLQUFmLENBQVA7QUFDRCxLQU5EO0FBT0Q7O0FBRURPLEtBQUcsQ0FBQ0MsR0FBRCxFQUFNVCxNQUFOLEVBQWM7QUFDZixXQUFPLElBQUlFLE9BQUosQ0FBWSxPQUFPUSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDckMsVUFBSTtBQUNGLFlBQUlQLFFBQVEsR0FBRyxNQUFNLEtBQUtmLE9BQUwsQ0FBYW1CLEdBQWIsQ0FBaUJDLEdBQWpCLEVBQXNCVCxNQUF0QixDQUFyQjtBQUNBVSxXQUFHLENBQUNOLFFBQUQsQ0FBSDtBQUNELE9BSEQsQ0FHRSxPQUFNSCxLQUFOLEVBQWE7QUFDYkksZUFBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUNBSyxXQUFHO0FBQ0o7QUFDRixLQVJNLENBQVA7QUFTRDs7QUFFREMsTUFBSSxDQUFDSCxHQUFELEVBQU1JLElBQU4sRUFBWWIsTUFBWixFQUFvQjtBQUN0QixXQUFPLElBQUlFLE9BQUosQ0FBWSxPQUFPUSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDckMsVUFBSTtBQUNGLFlBQUlQLFFBQVEsR0FBRyxNQUFNLEtBQUtmLE9BQUwsQ0FBYXVCLElBQWIsQ0FBa0JILEdBQWxCLEVBQXVCSSxJQUF2QixFQUE2QmIsTUFBN0IsQ0FBckI7QUFDQVUsV0FBRyxDQUFDTixRQUFELENBQUg7QUFDRCxPQUhELENBR0UsT0FBT0gsS0FBUCxFQUFjO0FBQ2RVLFdBQUc7QUFDSjtBQUNGLEtBUE0sQ0FBUDtBQVFEOztBQUVPSixrQkFBUixDQUF5Qk4sS0FBekIsRUFBZ0M7QUFDOUJJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7O0FBQ0EsWUFBT0wsS0FBSyxDQUFDYSxNQUFiO0FBQ0UsV0FBSyxHQUFMO0FBQ0UsYUFBS0MsU0FBTCxDQUFlZCxLQUFmO0FBQ0E7O0FBQ0Y7QUFDRSxhQUFLZSxhQUFMLENBQW1CZixLQUFuQjtBQUNBO0FBTko7QUFRRDs7QUFFT2dCLFVBQVIsQ0FBaUJDLFVBQWpCLEVBQTZCO0FBQzNCYixXQUFPLENBQUNDLEdBQVIsQ0FBYSwrQkFBOEJZLFVBQVcsRUFBdEQ7QUFDQUMsVUFBTSxDQUFDQyxJQUFQLENBQWEsK0JBQThCRixVQUFXLEVBQXRELEVBQXlELE9BQXpEO0FBQ0Q7O0FBRU9ILFdBQVIsQ0FBa0JkLEtBQWxCLEVBQXlCO0FBQ3ZCSSxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsS0FBWjtBQUNBb0Isa0JBQWMsQ0FBQ0MsS0FBZjtBQUNBLFNBQUtMLFFBQUwsQ0FBY2hCLEtBQUssQ0FBQ2EsTUFBcEI7QUFDRDs7QUFFT0UsZUFBUixDQUFzQmYsS0FBdEIsRUFBNkI7QUFDM0JJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxLQUFaO0FBQ0Q7O0FBMUVpQjs7QUE2RXBCLE1BQU1zQixhQUFhLEdBQUcsSUFBSXBDLGFBQUosRUFBdEI7QUFDZW9DLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy45Y2U3YTRhNmNmMGQ1ZGJkN2ZhNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGFwcGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnL2FwcGNvbmZpZ1wiO1xyXG5cclxuY2xhc3MgR2xvYmFsU2VydmljZSB7XHJcbiAgW3g6IHN0cmluZ106IGFueTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2VydmljZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgIGJhc2VVUkw6IGFwcGNvbmZpZy50bWRiRW5kcG9pbnQsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICB0aGlzLnNlcnZpY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGZ1bmN0aW9uKGNvbmZpZykge1xyXG4gICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5zZXJ2aWNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2codGhpcylcclxuICAgICAgdGhpcy5jYWxsRXJyb3JIYW5kbGVyKGVycm9yLnJlc3BvbnNlKVxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdldCh1cmwsIGNvbmZpZykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXMsIHJlaikgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5nZXQodXJsLCBjb25maWcpO1xyXG4gICAgICAgIHJlcyhyZXNwb25zZSk7XHJcbiAgICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlalwiKVxyXG4gICAgICAgIHJlaigpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcG9zdCh1cmwsIGRhdGEsIGNvbmZpZykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXMsIHJlaikgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5wb3N0KHVybCwgZGF0YSwgY29uZmlnKTtcclxuICAgICAgICByZXMocmVzcG9uc2UpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlaigpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxsRXJyb3JIYW5kbGVyKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlcmVcIilcclxuICAgIHN3aXRjaChlcnJvci5zdGF0dXMpIHtcclxuICAgICAgY2FzZSA0MDE6XHJcbiAgICAgICAgdGhpcy5oYW5kbGU0MDEoZXJyb3IpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRoaXMuaGFuZGxlRGVmYXVsdChlcnJvcik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlZGlyZWN0KHN0YXR1c0NvZGUpIHtcclxuICAgIGNvbnNvbGUubG9nKGBsb2NhbGhvc3Q6MzAwMC9lcnJvcj9zdGF0dXM9JHtzdGF0dXNDb2RlfWApXHJcbiAgICB3aW5kb3cub3BlbihgbG9jYWxob3N0OjMwMDAvZXJyb3I/c3RhdHVzPSR7c3RhdHVzQ29kZX1gLCBcIl9zZWxmXCIpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZTQwMShlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcclxuICAgIHRoaXMucmVkaXJlY3QoZXJyb3Iuc3RhdHVzKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlRGVmYXVsdChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBnbG9iYWxTZXJ2aWNlID0gbmV3IEdsb2JhbFNlcnZpY2UoKTtcclxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsU2VydmljZTsiXSwic291cmNlUm9vdCI6IiJ9