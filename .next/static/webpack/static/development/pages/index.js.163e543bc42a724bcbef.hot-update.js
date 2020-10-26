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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZ2xvYmFsU2VydmljZS50cyJdLCJuYW1lcyI6WyJHbG9iYWxTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJzZXJ2aWNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiYXBwY29uZmlnIiwidG1kYkVuZHBvaW50IiwiaGVhZGVycyIsIl90aGlzIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc3BvbnNlIiwiY2FsbEVycm9ySGFuZGxlciIsImdldCIsInVybCIsInJlcyIsInJlaiIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwiZGF0YSIsInN0YXR1cyIsImhhbmRsZTQwMSIsImhhbmRsZURlZmF1bHQiLCJyZWRpcmVjdCIsInN0YXR1c0NvZGUiLCJ3aW5kb3ciLCJvcGVuIiwic2Vzc2lvblN0b3JhZ2UiLCJjbGVhciIsImdsb2JhbFNlcnZpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsYUFBTixDQUFvQjtBQUVsQkMsYUFBVyxHQUFHO0FBQ1osU0FBS0MsT0FBTCxHQUFlQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWE7QUFDMUJDLGFBQU8sRUFBRUMseURBQVMsQ0FBQ0MsWUFETztBQUUxQkMsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQ7QUFGaUIsS0FBYixDQUFmOztBQU9BLFFBQUlDLEtBQUssR0FBRyxJQUFaOztBQUNBLFNBQUtQLE9BQUwsQ0FBYVEsWUFBYixDQUEwQkMsT0FBMUIsQ0FBa0NDLEdBQWxDLENBQXNDLFVBQVNDLE1BQVQsRUFBaUI7QUFDckQsYUFBT0EsTUFBUDtBQUNELEtBRkQsRUFFRyxVQUFTQyxLQUFULEVBQWdCO0FBQ2pCLGFBQU9DLE9BQU8sQ0FBQ0MsTUFBUixDQUFlRixLQUFmLENBQVA7QUFDRCxLQUpEO0FBTUEsU0FBS1osT0FBTCxDQUFhUSxZQUFiLENBQTBCTyxRQUExQixDQUFtQ0wsR0FBbkMsQ0FBdUMsVUFBU0ssUUFBVCxFQUFtQjtBQUN4RCxhQUFPQSxRQUFQO0FBQ0QsS0FGRCxFQUVHLFVBQVNILEtBQVQsRUFBZ0I7QUFDakIsV0FBS0ksZ0JBQUwsQ0FBc0JKLEtBQUssQ0FBQ0csUUFBNUI7QUFDQSxhQUFPRixPQUFPLENBQUNDLE1BQVIsQ0FBZUYsS0FBZixDQUFQO0FBQ0QsS0FMRDtBQU1EOztBQUVESyxLQUFHLENBQUNDLEdBQUQsRUFBTVAsTUFBTixFQUFjO0FBQ2YsV0FBTyxJQUFJRSxPQUFKLENBQVksT0FBT00sR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ3JDLFVBQUk7QUFDRixZQUFJTCxRQUFRLEdBQUcsTUFBTSxLQUFLZixPQUFMLENBQWFpQixHQUFiLENBQWlCQyxHQUFqQixFQUFzQlAsTUFBdEIsQ0FBckI7QUFDQVEsV0FBRyxDQUFDSixRQUFELENBQUg7QUFDRCxPQUhELENBR0UsT0FBTUgsS0FBTixFQUFhO0FBQ2JTLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFDQUYsV0FBRztBQUNKO0FBQ0YsS0FSTSxDQUFQO0FBU0Q7O0FBRURHLE1BQUksQ0FBQ0wsR0FBRCxFQUFNTSxJQUFOLEVBQVliLE1BQVosRUFBb0I7QUFDdEIsV0FBTyxJQUFJRSxPQUFKLENBQVksT0FBT00sR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ3JDLFVBQUk7QUFDRixZQUFJTCxRQUFRLEdBQUcsTUFBTSxLQUFLZixPQUFMLENBQWF1QixJQUFiLENBQWtCTCxHQUFsQixFQUF1Qk0sSUFBdkIsRUFBNkJiLE1BQTdCLENBQXJCO0FBQ0FRLFdBQUcsQ0FBQ0osUUFBRCxDQUFIO0FBQ0QsT0FIRCxDQUdFLE9BQU9ILEtBQVAsRUFBYztBQUNkUSxXQUFHO0FBQ0o7QUFDRixLQVBNLENBQVA7QUFRRDs7QUFFT0osa0JBQVIsQ0FBeUJKLEtBQXpCLEVBQWdDO0FBQzlCUyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaOztBQUNBLFlBQU9WLEtBQUssQ0FBQ2EsTUFBYjtBQUNFLFdBQUssR0FBTDtBQUNFLGFBQUtDLFNBQUwsQ0FBZWQsS0FBZjtBQUNBOztBQUNGO0FBQ0UsYUFBS2UsYUFBTCxDQUFtQmYsS0FBbkI7QUFDQTtBQU5KO0FBUUQ7O0FBRU9nQixVQUFSLENBQWlCQyxVQUFqQixFQUE2QjtBQUMzQlIsV0FBTyxDQUFDQyxHQUFSLENBQWEsK0JBQThCTyxVQUFXLEVBQXREO0FBQ0FDLFVBQU0sQ0FBQ0MsSUFBUCxDQUFhLCtCQUE4QkYsVUFBVyxFQUF0RCxFQUF5RCxPQUF6RDtBQUNEOztBQUVPSCxXQUFSLENBQWtCZCxLQUFsQixFQUF5QjtBQUN2QlMsV0FBTyxDQUFDQyxHQUFSLENBQVlWLEtBQVo7QUFDQW9CLGtCQUFjLENBQUNDLEtBQWY7QUFDQSxTQUFLTCxRQUFMLENBQWNoQixLQUFLLENBQUNhLE1BQXBCO0FBQ0Q7O0FBRU9FLGVBQVIsQ0FBc0JmLEtBQXRCLEVBQTZCO0FBQzNCUyxXQUFPLENBQUNDLEdBQVIsQ0FBWVYsS0FBWjtBQUNEOztBQXpFaUI7O0FBNEVwQixNQUFNc0IsYUFBYSxHQUFHLElBQUlwQyxhQUFKLEVBQXRCO0FBQ2VvQyw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuMTYzZTU0M2JjNDJhNzI0YmNiZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBhcHBjb25maWcgZnJvbSBcIi4uL2NvbmZpZy9hcHBjb25maWdcIjtcclxuXHJcbmNsYXNzIEdsb2JhbFNlcnZpY2Uge1xyXG4gIFt4OiBzdHJpbmddOiBhbnk7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgICBiYXNlVVJMOiBhcHBjb25maWcudG1kYkVuZHBvaW50LFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgdGhpcy5zZXJ2aWNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShmdW5jdGlvbihjb25maWcpIHtcclxuICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuc2VydmljZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgIHRoaXMuY2FsbEVycm9ySGFuZGxlcihlcnJvci5yZXNwb25zZSlcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXQodXJsLCBjb25maWcpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzLCByZWopID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UuZ2V0KHVybCwgY29uZmlnKTtcclxuICAgICAgICByZXMocmVzcG9uc2UpO1xyXG4gICAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZWpcIilcclxuICAgICAgICByZWooKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHBvc3QodXJsLCBkYXRhLCBjb25maWcpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzLCByZWopID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnNlcnZpY2UucG9zdCh1cmwsIGRhdGEsIGNvbmZpZyk7XHJcbiAgICAgICAgcmVzKHJlc3BvbnNlKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZWooKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsbEVycm9ySGFuZGxlcihlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coXCJoZXJlXCIpXHJcbiAgICBzd2l0Y2goZXJyb3Iuc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgNDAxOlxyXG4gICAgICAgIHRoaXMuaGFuZGxlNDAxKGVycm9yKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aGlzLmhhbmRsZURlZmF1bHQoZXJyb3IpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWRpcmVjdChzdGF0dXNDb2RlKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgbG9jYWxob3N0OjMwMDAvZXJyb3I/c3RhdHVzPSR7c3RhdHVzQ29kZX1gKVxyXG4gICAgd2luZG93Lm9wZW4oYGxvY2FsaG9zdDozMDAwL2Vycm9yP3N0YXR1cz0ke3N0YXR1c0NvZGV9YCwgXCJfc2VsZlwiKVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGU0MDEoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIHNlc3Npb25TdG9yYWdlLmNsZWFyKCk7XHJcbiAgICB0aGlzLnJlZGlyZWN0KGVycm9yLnN0YXR1cyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZURlZmF1bHQoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZ2xvYmFsU2VydmljZSA9IG5ldyBHbG9iYWxTZXJ2aWNlKCk7XHJcbmV4cG9ydCBkZWZhdWx0IGdsb2JhbFNlcnZpY2U7Il0sInNvdXJjZVJvb3QiOiIifQ==