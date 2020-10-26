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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");




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
        rej(error);
      }
    });
  }

  post(url, data, config) {
    return new Promise(async (res, rej) => {
      let response = await this.service.post(url, data, config);
      res(response);
    }).catch(error => {
      var _error$response, _error$response$data;

      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.error);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZ2xvYmFsU2VydmljZS50cyJdLCJuYW1lcyI6WyJHbG9iYWxTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJzZXJ2aWNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiYXBwY29uZmlnIiwidG1kYkVuZHBvaW50IiwiaGVhZGVycyIsIl90aGlzIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc3BvbnNlIiwiY2FsbEVycm9ySGFuZGxlciIsImdldCIsInVybCIsInJlcyIsInJlaiIsInBvc3QiLCJkYXRhIiwiY2F0Y2giLCJtZXNzYWdlIiwic3RhdHVzIiwiaGFuZGxlNDAxIiwiaGFuZGxlRGVmYXVsdCIsInJlZGlyZWN0Iiwic3RhdHVzQ29kZSIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJvcGVuIiwic2Vzc2lvblN0b3JhZ2UiLCJjbGVhciIsImdsb2JhbFNlcnZpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGFBQU4sQ0FBb0I7QUFFbEJDLGFBQVcsR0FBRztBQUNaLFNBQUtDLE9BQUwsR0FBZUMsNENBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzFCQyxhQUFPLEVBQUVDLHlEQUFTLENBQUNDLFlBRE87QUFFMUJDLGFBQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURUO0FBRmlCLEtBQWIsQ0FBZjs7QUFPQSxRQUFJQyxLQUFLLEdBQUcsSUFBWjs7QUFDQSxTQUFLUCxPQUFMLENBQWFRLFlBQWIsQ0FBMEJDLE9BQTFCLENBQWtDQyxHQUFsQyxDQUFzQyxVQUFTQyxNQUFULEVBQWlCO0FBQ3JELGFBQU9BLE1BQVA7QUFDRCxLQUZELEVBRUcsVUFBU0MsS0FBVCxFQUFnQjtBQUNqQixhQUFPQyxPQUFPLENBQUNDLE1BQVIsQ0FBZUYsS0FBZixDQUFQO0FBQ0QsS0FKRDtBQU1BLFNBQUtaLE9BQUwsQ0FBYVEsWUFBYixDQUEwQk8sUUFBMUIsQ0FBbUNMLEdBQW5DLENBQXVDLFVBQVNLLFFBQVQsRUFBbUI7QUFDeEQsYUFBT0EsUUFBUDtBQUNELEtBRkQsRUFFRyxVQUFTSCxLQUFULEVBQWdCO0FBQ2pCTCxXQUFLLENBQUNTLGdCQUFOLENBQXVCSixLQUFLLENBQUNHLFFBQTdCOztBQUNBLGFBQU9GLE9BQU8sQ0FBQ0MsTUFBUixDQUFlRixLQUFmLENBQVA7QUFDRCxLQUxEO0FBTUQ7O0FBRURLLEtBQUcsQ0FBQ0MsR0FBRCxFQUFNUCxNQUFOLEVBQWM7QUFDZixXQUFPLElBQUlFLE9BQUosQ0FBWSxPQUFPTSxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDckMsVUFBSTtBQUNGLFlBQUlMLFFBQVEsR0FBRyxNQUFNLEtBQUtmLE9BQUwsQ0FBYWlCLEdBQWIsQ0FBaUJDLEdBQWpCLEVBQXNCUCxNQUF0QixDQUFyQjtBQUNBUSxXQUFHLENBQUNKLFFBQUQsQ0FBSDtBQUNELE9BSEQsQ0FHRSxPQUFNSCxLQUFOLEVBQWE7QUFDYlEsV0FBRyxDQUFDUixLQUFELENBQUg7QUFDRDtBQUNGLEtBUE0sQ0FBUDtBQVFEOztBQUVEUyxNQUFJLENBQUNILEdBQUQsRUFBTUksSUFBTixFQUFZWCxNQUFaLEVBQW9CO0FBQ3RCLFdBQU8sSUFBSUUsT0FBSixDQUFZLE9BQU9NLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNyQyxVQUFJTCxRQUFRLEdBQUcsTUFBTSxLQUFLZixPQUFMLENBQWFxQixJQUFiLENBQWtCSCxHQUFsQixFQUF1QkksSUFBdkIsRUFBNkJYLE1BQTdCLENBQXJCO0FBQ0FRLFNBQUcsQ0FBQ0osUUFBRCxDQUFIO0FBQ0QsS0FITSxFQUdKUSxLQUhJLENBR0dYLEtBQUQsSUFBVztBQUFBOztBQUNsQlksa0RBQU8sQ0FBQ1osS0FBUixDQUFjQSxLQUFkLGFBQWNBLEtBQWQsMENBQWNBLEtBQUssQ0FBRUcsUUFBckIsNEVBQWMsZ0JBQWlCTyxJQUEvQix5REFBYyxxQkFBdUJWLEtBQXJDO0FBQ0QsS0FMTSxDQUFQO0FBTUQ7O0FBRU9JLGtCQUFSLENBQXlCSixLQUF6QixFQUFnQztBQUM5QixZQUFPQSxLQUFLLENBQUNhLE1BQWI7QUFDRSxXQUFLLEdBQUw7QUFDRSxhQUFLQyxTQUFMLENBQWVkLEtBQWY7QUFDQTs7QUFDRjtBQUNFLGFBQUtlLGFBQUwsQ0FBbUJmLEtBQW5CO0FBQ0E7QUFOSjtBQVFEOztBQUVPZ0IsVUFBUixDQUFpQkMsVUFBakIsRUFBNkI7QUFDM0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLCtCQUE4QkYsVUFBVyxFQUF0RDtBQUNBRyxVQUFNLENBQUNDLElBQVAsQ0FBYSwrQkFBOEJKLFVBQVcsRUFBdEQsRUFBeUQsT0FBekQ7QUFDRDs7QUFFT0gsV0FBUixDQUFrQmQsS0FBbEIsRUFBeUI7QUFDdkJrQixXQUFPLENBQUNDLEdBQVIsQ0FBWW5CLEtBQVo7QUFDQXNCLGtCQUFjLENBQUNDLEtBQWY7QUFDQSxTQUFLUCxRQUFMLENBQWNoQixLQUFLLENBQUNhLE1BQXBCO0FBQ0Q7O0FBRU9FLGVBQVIsQ0FBc0JmLEtBQXRCLEVBQTZCO0FBQzNCa0IsV0FBTyxDQUFDQyxHQUFSLENBQVluQixLQUFaO0FBQ0Q7O0FBckVpQjs7QUF3RXBCLE1BQU13QixhQUFhLEdBQUcsSUFBSXRDLGFBQUosRUFBdEI7QUFDZXNDLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4wMTU1MzhkOGNiYzg0OWJhOTZmYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IGFwcGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnL2FwcGNvbmZpZ1wiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNsYXNzIEdsb2JhbFNlcnZpY2Uge1xyXG4gIFt4OiBzdHJpbmddOiBhbnk7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgICBiYXNlVVJMOiBhcHBjb25maWcudG1kYkVuZHBvaW50LFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgdGhpcy5zZXJ2aWNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShmdW5jdGlvbihjb25maWcpIHtcclxuICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuc2VydmljZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgIF90aGlzLmNhbGxFcnJvckhhbmRsZXIoZXJyb3IucmVzcG9uc2UpXHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0KHVybCwgY29uZmlnKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldCh1cmwsIGNvbmZpZyk7XHJcbiAgICAgICAgcmVzKHJlc3BvbnNlKTtcclxuICAgICAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgICAgIHJlaihlcnJvcilcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHBvc3QodXJsLCBkYXRhLCBjb25maWcpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzLCByZWopID0+IHtcclxuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLnBvc3QodXJsLCBkYXRhLCBjb25maWcpO1xyXG4gICAgICByZXMocmVzcG9uc2UpO1xyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyb3I/LnJlc3BvbnNlPy5kYXRhPy5lcnJvcik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsbEVycm9ySGFuZGxlcihlcnJvcikge1xyXG4gICAgc3dpdGNoKGVycm9yLnN0YXR1cykge1xyXG4gICAgICBjYXNlIDQwMTpcclxuICAgICAgICB0aGlzLmhhbmRsZTQwMShlcnJvcik7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhpcy5oYW5kbGVEZWZhdWx0KGVycm9yKTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVkaXJlY3Qoc3RhdHVzQ29kZSkge1xyXG4gICAgY29uc29sZS5sb2coYGxvY2FsaG9zdDozMDAwL2Vycm9yP3N0YXR1cz0ke3N0YXR1c0NvZGV9YClcclxuICAgIHdpbmRvdy5vcGVuKGBsb2NhbGhvc3Q6MzAwMC9lcnJvcj9zdGF0dXM9JHtzdGF0dXNDb2RlfWAsIFwiX3NlbGZcIilcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlNDAxKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgdGhpcy5yZWRpcmVjdChlcnJvci5zdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVEZWZhdWx0KGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGdsb2JhbFNlcnZpY2UgPSBuZXcgR2xvYmFsU2VydmljZSgpO1xyXG5leHBvcnQgZGVmYXVsdCBnbG9iYWxTZXJ2aWNlOyJdLCJzb3VyY2VSb290IjoiIn0=