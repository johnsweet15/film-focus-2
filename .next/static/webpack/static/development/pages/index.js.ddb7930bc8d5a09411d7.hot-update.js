webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/movieCard/movieCard.js":
/*!***********************************************!*\
  !*** ./src/components/movieCard/movieCard.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return movieCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _movieCard_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movieCard.scss */ "./src/components/movieCard/movieCard.scss");
/* harmony import */ var _movieCard_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_movieCard_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Film_Focus_2\\film-focus-2\\src\\components\\movieCard\\movieCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* eslint-disable react-hooks/rules-of-hooks */





function movieCard(props) {
  _s();

  const {
    0: showModal,
    1: setShowModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    movie,
    loading
  } = props;
  const poster = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + (movie === null || movie === void 0 ? void 0 : movie.poster_path);

  const cardContent = __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Skeleton"], {
    loading: loading,
    avatar: true,
    active: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
    align: "start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/movie/${movie.id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("img", {
    className: "movie-poster",
    src: poster,
    alt: "poster",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  })), __jsx("span", {
    className: "mock-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "cursor-pointer",
    href: "/movie/[id]",
    as: `/movie/${movie.id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, movie.title, " (", movie.release_date.substring(0, 4), ")")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, movie.overview))));

  const modal = __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    centered: true,
    bodyStyle: {
      padding: 0
    },
    width: "auto",
    visible: showModal,
    footer: null,
    onOk: () => setShowModal(false),
    onCancel: () => setShowModal(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, __jsx("img", {
    src: poster,
    alt: "poster",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }));

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    style: {
      marginTop: 16
    },
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SettingOutlined"], {
      key: "setting",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EditOutlined"], {
      key: "edit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {
      key: "ellipsis",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 11
      }
    })],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, cardContent), modal);
}

_s(movieCard, "uVlnG5KLfXemZk5i5Fl+Cg356FU=");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb3ZpZUNhcmQvbW92aWVDYXJkLmpzIl0sIm5hbWVzIjpbIm1vdmllQ2FyZCIsInByb3BzIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidXNlU3RhdGUiLCJtb3ZpZSIsImxvYWRpbmciLCJwb3N0ZXIiLCJwb3N0ZXJfcGF0aCIsImNhcmRDb250ZW50IiwiaWQiLCJ0aXRsZSIsInJlbGVhc2VfZGF0ZSIsInN1YnN0cmluZyIsIm92ZXJ2aWV3IiwibW9kYWwiLCJwYWRkaW5nIiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBRWUsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQTs7QUFDdkMsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLEtBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUVDLFNBQUY7QUFBU0M7QUFBVCxNQUFxQkwsS0FBM0I7QUFDQSxRQUFNTSxNQUFNLEdBQ1YscURBQW9ERixLQUFwRCxhQUFvREEsS0FBcEQsdUJBQW9EQSxLQUFLLENBQUVHLFdBQTNELENBREY7O0FBR0EsUUFBTUMsV0FBVyxHQUNmLE1BQUMsNkNBQUQ7QUFBVSxXQUFPLEVBQUVILE9BQW5CO0FBQTRCLFVBQU0sTUFBbEM7QUFBbUMsVUFBTSxNQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwQ0FBRDtBQUFPLFNBQUssRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFHLFVBQVNELEtBQUssQ0FBQ0ssRUFBRyxFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsY0FEWjtBQUVFLE9BQUcsRUFBRUgsTUFGUDtBQUdFLE9BQUcsRUFBQyxRQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBUUU7QUFBTSxhQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxhQUFTLEVBQUMsZ0JBQWhCO0FBQWlDLFFBQUksRUFBQyxhQUF0QztBQUFvRCxNQUFFLEVBQUcsVUFBU0YsS0FBSyxDQUFDSyxFQUFHLEVBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtMLEtBQUssQ0FBQ00sS0FBWCxRQUFvQk4sS0FBSyxDQUFDTyxZQUFOLENBQW1CQyxTQUFuQixDQUE2QixDQUE3QixFQUFnQyxDQUFoQyxDQUFwQixNQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlSLEtBQUssQ0FBQ1MsUUFBVixDQUpGLENBUkYsQ0FERixDQURGOztBQW9CQSxRQUFNQyxLQUFLLEdBQ1QsTUFBQywwQ0FBRDtBQUNFLFlBQVEsTUFEVjtBQUVFLGFBQVMsRUFBRTtBQUFDQyxhQUFPLEVBQUU7QUFBVixLQUZiO0FBR0UsU0FBSyxFQUFFLE1BSFQ7QUFJRSxXQUFPLEVBQUVkLFNBSlg7QUFLRSxVQUFNLEVBQUUsSUFMVjtBQU1FLFFBQUksRUFBRSxNQUFNQyxZQUFZLENBQUMsS0FBRCxDQU4xQjtBQU9FLFlBQVEsRUFBRSxNQUFNQSxZQUFZLENBQUMsS0FBRCxDQVA5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0U7QUFBSyxPQUFHLEVBQUVJLE1BQVY7QUFBa0IsT0FBRyxFQUFDLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQURGOztBQWNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQ7QUFDRSxTQUFLLEVBQUU7QUFBRVUsZUFBUyxFQUFFO0FBQWIsS0FEVDtBQUVFLFdBQU8sRUFBRSxDQUNQLE1BQUMsaUVBQUQ7QUFBaUIsU0FBRyxFQUFDLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFETyxFQUVQLE1BQUMsOERBQUQ7QUFBYyxTQUFHLEVBQUMsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZPLEVBR1AsTUFBQyxrRUFBRDtBQUFrQixTQUFHLEVBQUMsVUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhPLENBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFHUixXQVJILENBREYsRUFXR00sS0FYSCxDQURGO0FBZUQ7O0dBdkR1QmYsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZGRiNzkzMGJjOGQ1YTA5NDExZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnOyBcclxuaW1wb3J0IHsgQ2FyZCwgU2tlbGV0b24sIE1vZGFsLCBTcGFjZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7XHJcbiAgRWRpdE91dGxpbmVkLFxyXG4gIEVsbGlwc2lzT3V0bGluZWQsXHJcbiAgU2V0dGluZ091dGxpbmVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgXCIuL21vdmllQ2FyZC5zY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb3ZpZUNhcmQocHJvcHMpIHtcclxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgbW92aWUsIGxvYWRpbmcgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHBvc3RlciA9XHJcbiAgICBcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c2MDBfYW5kX2g5MDBfYmVzdHYyXCIgKyBtb3ZpZT8ucG9zdGVyX3BhdGg7XHJcblxyXG4gIGNvbnN0IGNhcmRDb250ZW50ID0gKFxyXG4gICAgPFNrZWxldG9uIGxvYWRpbmc9e2xvYWRpbmd9IGF2YXRhciBhY3RpdmU+XHJcbiAgICAgIDxTcGFjZSBhbGlnbj1cInN0YXJ0XCI+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9tb3ZpZS8ke21vdmllLmlkfWB9PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtb3ZpZS1wb3N0ZXJcIlxyXG4gICAgICAgICAgICBzcmM9e3Bvc3Rlcn1cclxuICAgICAgICAgICAgYWx0PVwicG9zdGVyXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1vY2stYmxvY2tcIj5cclxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCIgaHJlZj1cIi9tb3ZpZS9baWRdXCIgYXM9e2AvbW92aWUvJHttb3ZpZS5pZH1gfT5cclxuICAgICAgICAgICAgPGgyPnttb3ZpZS50aXRsZX0gKHttb3ZpZS5yZWxlYXNlX2RhdGUuc3Vic3RyaW5nKDAsIDQpfSk8L2gyPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPHA+e21vdmllLm92ZXJ2aWV3fTwvcD5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvU3BhY2U+XHJcbiAgICA8L1NrZWxldG9uPlxyXG4gIClcclxuXHJcbiAgY29uc3QgbW9kYWwgPSAoXHJcbiAgICA8TW9kYWxcclxuICAgICAgY2VudGVyZWRcclxuICAgICAgYm9keVN0eWxlPXt7cGFkZGluZzogMH19XHJcbiAgICAgIHdpZHRoPXtcImF1dG9cIn1cclxuICAgICAgdmlzaWJsZT17c2hvd01vZGFsfVxyXG4gICAgICBmb290ZXI9e251bGx9XHJcbiAgICAgIG9uT2s9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XHJcbiAgICAgIG9uQ2FuY2VsPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxyXG4gICAgPlxyXG4gICAgICA8aW1nIHNyYz17cG9zdGVyfSBhbHQ9XCJwb3N0ZXJcIiAvPlxyXG4gICAgPC9Nb2RhbD5cclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogMTYgfX1cclxuICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGtleT1cInNldHRpbmdcIiAvPixcclxuICAgICAgICAgIDxFZGl0T3V0bGluZWQga2V5PVwiZWRpdFwiIC8+LFxyXG4gICAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQga2V5PVwiZWxsaXBzaXNcIiAvPixcclxuICAgICAgICBdfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NhcmRDb250ZW50fVxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIHttb2RhbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==