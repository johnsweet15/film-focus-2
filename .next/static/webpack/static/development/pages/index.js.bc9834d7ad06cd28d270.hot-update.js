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
  let poster = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + (movie === null || movie === void 0 ? void 0 : movie.poster_path);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
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
        lineNumber: 23,
        columnNumber: 11
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EditOutlined"], {
      key: "edit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {
      key: "ellipsis",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    })],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Skeleton"], {
    loading: loading,
    avatar: true,
    active: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
    align: "start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/movie/${movie.id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx("img", {
    className: "movie-poster",
    src: poster,
    alt: "poster",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  })), __jsx("span", {
    className: "mock-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: `/movie/${movie.id}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, movie.title, " (", movie.release_date.substring(0, 4), ")")), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, movie.overview))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
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
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: poster,
    alt: "poster",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb3ZpZUNhcmQvbW92aWVDYXJkLmpzIl0sIm5hbWVzIjpbIm1vdmllQ2FyZCIsInByb3BzIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidXNlU3RhdGUiLCJtb3ZpZSIsImxvYWRpbmciLCJwb3N0ZXIiLCJwb3N0ZXJfcGF0aCIsIm1hcmdpblRvcCIsImlkIiwidGl0bGUiLCJyZWxlYXNlX2RhdGUiLCJzdWJzdHJpbmciLCJvdmVydmlldyIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFZSxTQUFTQSxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUFBOztBQUN2QyxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsS0FBRCxDQUExQztBQUNBLFFBQU07QUFBRUMsU0FBRjtBQUFTQztBQUFULE1BQXFCTCxLQUEzQjtBQUNBLE1BQUlNLE1BQU0sR0FDUixxREFBb0RGLEtBQXBELGFBQW9EQSxLQUFwRCx1QkFBb0RBLEtBQUssQ0FBRUcsV0FBM0QsQ0FERjtBQUdBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQ7QUFDRSxTQUFLLEVBQUU7QUFBRUMsZUFBUyxFQUFFO0FBQWIsS0FEVDtBQUVFLFdBQU8sRUFBRSxDQUNQLE1BQUMsaUVBQUQ7QUFBaUIsU0FBRyxFQUFDLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFETyxFQUVQLE1BQUMsOERBQUQ7QUFBYyxTQUFHLEVBQUMsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZPLEVBR1AsTUFBQyxrRUFBRDtBQUFrQixTQUFHLEVBQUMsVUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhPLENBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFLE1BQUMsNkNBQUQ7QUFBVSxXQUFPLEVBQUVILE9BQW5CO0FBQTRCLFVBQU0sTUFBbEM7QUFBbUMsVUFBTSxNQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwQ0FBRDtBQUFPLFNBQUssRUFBQyxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFHLFVBQVNELEtBQUssQ0FBQ0ssRUFBRyxFQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsY0FEWjtBQUVFLE9BQUcsRUFBRUgsTUFGUDtBQUdFLE9BQUcsRUFBQyxRQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBUUU7QUFBTSxhQUFTLEVBQUMsWUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUcsVUFBU0YsS0FBSyxDQUFDSyxFQUFHLEVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtMLEtBQUssQ0FBQ00sS0FBWCxRQUFvQk4sS0FBSyxDQUFDTyxZQUFOLENBQW1CQyxTQUFuQixDQUE2QixDQUE3QixFQUFnQyxDQUFoQyxDQUFwQixNQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlSLEtBQUssQ0FBQ1MsUUFBVixDQUpGLENBUkYsQ0FERixDQVJGLENBREYsRUEyQkUsTUFBQywwQ0FBRDtBQUNFLFlBQVEsTUFEVjtBQUVFLGFBQVMsRUFBRTtBQUFDQyxhQUFPLEVBQUU7QUFBVixLQUZiO0FBR0UsU0FBSyxFQUFFLE1BSFQ7QUFJRSxXQUFPLEVBQUViLFNBSlg7QUFLRSxVQUFNLEVBQUUsSUFMVjtBQU1FLFFBQUksRUFBRSxNQUFNQyxZQUFZLENBQUMsS0FBRCxDQU4xQjtBQU9FLFlBQVEsRUFBRSxNQUFNQSxZQUFZLENBQUMsS0FBRCxDQVA5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0U7QUFBSyxPQUFHLEVBQUVJLE1BQVY7QUFBa0IsT0FBRyxFQUFDLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQTNCRixDQURGO0FBeUNEOztHQS9DdUJQLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmJjOTgzNGQ3YWQwNmNkMjhkMjcwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rcyAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJzsgXHJcbmltcG9ydCB7IENhcmQsIFNrZWxldG9uLCBNb2RhbCwgU3BhY2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG4gIEVkaXRPdXRsaW5lZCxcclxuICBFbGxpcHNpc091dGxpbmVkLFxyXG4gIFNldHRpbmdPdXRsaW5lZCxcclxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IFwiLi9tb3ZpZUNhcmQuc2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW92aWVDYXJkKHByb3BzKSB7XHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB7IG1vdmllLCBsb2FkaW5nIH0gPSBwcm9wcztcclxuICBsZXQgcG9zdGVyID1cclxuICAgIFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzYwMF9hbmRfaDkwMF9iZXN0djJcIiArIG1vdmllPy5wb3N0ZXJfcGF0aDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxDYXJkXHJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAxNiB9fVxyXG4gICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQga2V5PVwic2V0dGluZ1wiIC8+LFxyXG4gICAgICAgICAgPEVkaXRPdXRsaW5lZCBrZXk9XCJlZGl0XCIgLz4sXHJcbiAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCBrZXk9XCJlbGxpcHNpc1wiIC8+LFxyXG4gICAgICAgIF19XHJcbiAgICAgID5cclxuICAgICAgICA8U2tlbGV0b24gbG9hZGluZz17bG9hZGluZ30gYXZhdGFyIGFjdGl2ZT5cclxuICAgICAgICAgIDxTcGFjZSBhbGlnbj1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbW92aWUvJHttb3ZpZS5pZH1gfT5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3ZpZS1wb3N0ZXJcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtwb3N0ZXJ9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJwb3N0ZXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibW9jay1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbW92aWUvJHttb3ZpZS5pZH1gfT5cclxuICAgICAgICAgICAgICAgIDxoMj57bW92aWUudGl0bGV9ICh7bW92aWUucmVsZWFzZV9kYXRlLnN1YnN0cmluZygwLCA0KX0pPC9oMj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPHA+e21vdmllLm92ZXJ2aWV3fTwvcD5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICA8L1NrZWxldG9uPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgYm9keVN0eWxlPXt7cGFkZGluZzogMH19XHJcbiAgICAgICAgd2lkdGg9e1wiYXV0b1wifVxyXG4gICAgICAgIHZpc2libGU9e3Nob3dNb2RhbH1cclxuICAgICAgICBmb290ZXI9e251bGx9XHJcbiAgICAgICAgb25Paz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cclxuICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbWcgc3JjPXtwb3N0ZXJ9IGFsdD1cInBvc3RlclwiIC8+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=