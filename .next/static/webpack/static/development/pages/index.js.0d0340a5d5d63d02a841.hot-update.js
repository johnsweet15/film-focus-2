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
        rej(error);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZ2xvYmFsU2VydmljZS50cyJdLCJuYW1lcyI6WyJHbG9iYWxTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJzZXJ2aWNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiYXBwY29uZmlnIiwidG1kYkVuZHBvaW50IiwiaGVhZGVycyIsIl90aGlzIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc3BvbnNlIiwiY2FsbEVycm9ySGFuZGxlciIsImdldCIsInVybCIsInJlcyIsInJlaiIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwiZGF0YSIsInN0YXR1cyIsImhhbmRsZTQwMSIsImhhbmRsZURlZmF1bHQiLCJyZWRpcmVjdCIsInN0YXR1c0NvZGUiLCJ3aW5kb3ciLCJvcGVuIiwic2Vzc2lvblN0b3JhZ2UiLCJjbGVhciIsImdsb2JhbFNlcnZpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsYUFBTixDQUFvQjtBQUVsQkMsYUFBVyxHQUFHO0FBQ1osU0FBS0MsT0FBTCxHQUFlQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDMUJDLGFBQU8sRUFBRUMseURBQVMsQ0FBQ0MsWUFETztBQUUxQkMsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQ7QUFGaUIsS0FBYixDQUFmOztBQU9BLFFBQUlDLEtBQUssR0FBRyxJQUFaOztBQUNBLFNBQUtQLE9BQUwsQ0FBYVEsWUFBYixDQUEwQkMsT0FBMUIsQ0FBa0NDLEdBQWxDLENBQXNDLFVBQVNDLE1BQVQsRUFBaUI7QUFDckQsYUFBT0EsTUFBUDtBQUNELEtBRkQsRUFFRyxVQUFTQyxLQUFULEVBQWdCO0FBQ2pCLGFBQU9DLE9BQU8sQ0FBQ0MsTUFBUixDQUFlRixLQUFmLENBQVA7QUFDRCxLQUpEO0FBTUEsU0FBS1osT0FBTCxDQUFhUSxZQUFiLENBQTBCTyxRQUExQixDQUFtQ0wsR0FBbkMsQ0FBdUMsVUFBU0ssUUFBVCxFQUFtQjtBQUN4RCxhQUFPQSxRQUFQO0FBQ0QsS0FGRCxFQUVHLFVBQVNILEtBQVQsRUFBZ0I7QUFDakJMLFdBQUssQ0FBQ1MsZ0JBQU4sQ0FBdUJKLEtBQUssQ0FBQ0csUUFBN0I7O0FBQ0EsYUFBT0YsT0FBTyxDQUFDQyxNQUFSLENBQWVGLEtBQWYsQ0FBUDtBQUNELEtBTEQ7QUFNRDs7QUFFREssS0FBRyxDQUFDQyxHQUFELEVBQU1QLE1BQU4sRUFBYztBQUNmLFdBQU8sSUFBSUUsT0FBSixDQUFZLE9BQU9NLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNyQyxVQUFJO0FBQ0YsWUFBSUwsUUFBUSxHQUFHLE1BQU0sS0FBS2YsT0FBTCxDQUFhaUIsR0FBYixDQUFpQkMsR0FBakIsRUFBc0JQLE1BQXRCLENBQXJCO0FBQ0FRLFdBQUcsQ0FBQ0osUUFBRCxDQUFIO0FBQ0QsT0FIRCxDQUdFLE9BQU1ILEtBQU4sRUFBYTtBQUNiUyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBQ0FGLFdBQUc7QUFDSjtBQUNGLEtBUk0sQ0FBUDtBQVNEOztBQUVERyxNQUFJLENBQUNMLEdBQUQsRUFBTU0sSUFBTixFQUFZYixNQUFaLEVBQW9CO0FBQ3RCLFdBQU8sSUFBSUUsT0FBSixDQUFZLE9BQU9NLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNyQyxVQUFJO0FBQ0YsWUFBSUwsUUFBUSxHQUFHLE1BQU0sS0FBS2YsT0FBTCxDQUFhdUIsSUFBYixDQUFrQkwsR0FBbEIsRUFBdUJNLElBQXZCLEVBQTZCYixNQUE3QixDQUFyQjtBQUNBUSxXQUFHLENBQUNKLFFBQUQsQ0FBSDtBQUNELE9BSEQsQ0FHRSxPQUFPSCxLQUFQLEVBQWM7QUFDZFEsV0FBRyxDQUFDUixLQUFELENBQUg7QUFDRDtBQUNGLEtBUE0sQ0FBUDtBQVFEOztBQUVPSSxrQkFBUixDQUF5QkosS0FBekIsRUFBZ0M7QUFDOUIsWUFBT0EsS0FBSyxDQUFDYSxNQUFiO0FBQ0UsV0FBSyxHQUFMO0FBQ0UsYUFBS0MsU0FBTCxDQUFlZCxLQUFmO0FBQ0E7O0FBQ0Y7QUFDRSxhQUFLZSxhQUFMLENBQW1CZixLQUFuQjtBQUNBO0FBTko7QUFRRDs7QUFFT2dCLFVBQVIsQ0FBaUJDLFVBQWpCLEVBQTZCO0FBQzNCUixXQUFPLENBQUNDLEdBQVIsQ0FBYSwrQkFBOEJPLFVBQVcsRUFBdEQ7QUFDQUMsVUFBTSxDQUFDQyxJQUFQLENBQWEsK0JBQThCRixVQUFXLEVBQXRELEVBQXlELE9BQXpEO0FBQ0Q7O0FBRU9ILFdBQVIsQ0FBa0JkLEtBQWxCLEVBQXlCO0FBQ3ZCUyxXQUFPLENBQUNDLEdBQVIsQ0FBWVYsS0FBWjtBQUNBb0Isa0JBQWMsQ0FBQ0MsS0FBZjtBQUNBLFNBQUtMLFFBQUwsQ0FBY2hCLEtBQUssQ0FBQ2EsTUFBcEI7QUFDRDs7QUFFT0UsZUFBUixDQUFzQmYsS0FBdEIsRUFBNkI7QUFDM0JTLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVixLQUFaO0FBQ0Q7O0FBeEVpQjs7QUEyRXBCLE1BQU1zQixhQUFhLEdBQUcsSUFBSXBDLGFBQUosRUFBdEI7QUFDZW9DLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4wZDAzNDBhNWQ1ZDYzZDAyYTg0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGFwcGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnL2FwcGNvbmZpZ1wiO1xyXG5cclxuY2xhc3MgR2xvYmFsU2VydmljZSB7XHJcbiAgW3g6IHN0cmluZ106IGFueTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2VydmljZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICAgIGJhc2VVUkw6IGFwcGNvbmZpZy50bWRiRW5kcG9pbnQsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICB0aGlzLnNlcnZpY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKGZ1bmN0aW9uKGNvbmZpZykge1xyXG4gICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH0pXHJcblxyXG4gICAgdGhpcy5zZXJ2aWNlLmludGVyY2VwdG9ycy5yZXNwb25zZS51c2UoZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgX3RoaXMuY2FsbEVycm9ySGFuZGxlcihlcnJvci5yZXNwb25zZSlcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXQodXJsLCBjb25maWcpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzLCByZWopID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0KHVybCwgY29uZmlnKTtcclxuICAgICAgICByZXMocmVzcG9uc2UpO1xyXG4gICAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWpcIilcclxuICAgICAgICByZWooKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHBvc3QodXJsLCBkYXRhLCBjb25maWcpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzLCByZWopID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UucG9zdCh1cmwsIGRhdGEsIGNvbmZpZyk7XHJcbiAgICAgICAgcmVzKHJlc3BvbnNlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZWooZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxsRXJyb3JIYW5kbGVyKGVycm9yKSB7XHJcbiAgICBzd2l0Y2goZXJyb3Iuc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgNDAxOlxyXG4gICAgICAgIHRoaXMuaGFuZGxlNDAxKGVycm9yKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aGlzLmhhbmRsZURlZmF1bHQoZXJyb3IpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWRpcmVjdChzdGF0dXNDb2RlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgbG9jYWxob3N0OjMwMDAvZXJyb3I/c3RhdHVzPSR7c3RhdHVzQ29kZX1gKVxyXG4gICAgd2luZG93Lm9wZW4oYGxvY2FsaG9zdDozMDAwL2Vycm9yP3N0YXR1cz0ke3N0YXR1c0NvZGV9YCwgXCJfc2VsZlwiKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGU0MDEoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XHJcbiAgICB0aGlzLnJlZGlyZWN0KGVycm9yLnN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZURlZmF1bHQoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZ2xvYmFsU2VydmljZSA9IG5ldyBHbG9iYWxTZXJ2aWNlKCk7XHJcbmV4cG9ydCBkZWZhdWx0IGdsb2JhbFNlcnZpY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==