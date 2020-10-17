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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
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

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    0: showModal,
    1: setShowModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    movie,
    loading
  } = props;
  let poster = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + (movie === null || movie === void 0 ? void 0 : movie.poster_path);

  function onModalClick(e) {
    setShowModal();
    e.stopPropagation();
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    onClick: () => {
      router.push(`/movie/${movie.id}`);
    },
    style: {
      marginTop: 16
    },
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SettingOutlined"], {
      key: "setting",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EditOutlined"], {
      key: "edit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 11
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EllipsisOutlined"], {
      key: "ellipsis",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    })],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Skeleton"], {
    loading: loading,
    avatar: true,
    active: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Space"], {
    align: "start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("img", {
    className: "movie-poster",
    src: poster,
    alt: "poster",
    onClick: onModalClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: "mock-block",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, movie.title, " (", movie.release_date.substring(0, 4), ")"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("img", {
    src: poster,
    alt: "poster",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  })));
}

_s(movieCard, "d0JzooztMQwl9lD+dzmVoPAIGJ4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb3ZpZUNhcmQvbW92aWVDYXJkLmpzIl0sIm5hbWVzIjpbIm1vdmllQ2FyZCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwidXNlU3RhdGUiLCJtb3ZpZSIsImxvYWRpbmciLCJwb3N0ZXIiLCJwb3N0ZXJfcGF0aCIsIm9uTW9kYWxDbGljayIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJwdXNoIiwiaWQiLCJtYXJnaW5Ub3AiLCJ0aXRsZSIsInJlbGVhc2VfZGF0ZSIsInN1YnN0cmluZyIsIm92ZXJ2aWV3IiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVlLFNBQVNBLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUE7O0FBQ3ZDLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJDLHNEQUFRLENBQUMsS0FBRCxDQUExQztBQUNBLFFBQU07QUFBRUMsU0FBRjtBQUFTQztBQUFULE1BQXFCUCxLQUEzQjtBQUNBLE1BQUlRLE1BQU0sR0FDUixxREFBb0RGLEtBQXBELGFBQW9EQSxLQUFwRCx1QkFBb0RBLEtBQUssQ0FBRUcsV0FBM0QsQ0FERjs7QUFJQSxXQUFTQyxZQUFULENBQXNCQyxDQUF0QixFQUF5QjtBQUN2QlAsZ0JBQVk7QUFDWk8sS0FBQyxDQUFDQyxlQUFGO0FBQ0Q7O0FBRUQsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5Q0FBRDtBQUNFLFdBQU8sRUFBRSxNQUFNO0FBQUVYLFlBQU0sQ0FBQ1ksSUFBUCxDQUFhLFVBQVNQLEtBQUssQ0FBQ1EsRUFBRyxFQUEvQjtBQUFtQyxLQUR0RDtBQUVFLFNBQUssRUFBRTtBQUFFQyxlQUFTLEVBQUU7QUFBYixLQUZUO0FBR0UsV0FBTyxFQUFFLENBQ1AsTUFBQyxpRUFBRDtBQUFpQixTQUFHLEVBQUMsU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURPLEVBRVAsTUFBQyw4REFBRDtBQUFjLFNBQUcsRUFBQyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRk8sRUFHUCxNQUFDLGtFQUFEO0FBQWtCLFNBQUcsRUFBQyxVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSE8sQ0FIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0UsTUFBQyw2Q0FBRDtBQUFVLFdBQU8sRUFBRVIsT0FBbkI7QUFBNEIsVUFBTSxNQUFsQztBQUFtQyxVQUFNLE1BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBDQUFEO0FBQU8sU0FBSyxFQUFDLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsYUFBUyxFQUFDLGNBRFo7QUFFRSxPQUFHLEVBQUVDLE1BRlA7QUFHRSxPQUFHLEVBQUMsUUFITjtBQUlFLFdBQU8sRUFBRUUsWUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFPRTtBQUFNLGFBQVMsRUFBQyxZQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLSixLQUFLLENBQUNVLEtBQVgsUUFBb0JWLEtBQUssQ0FBQ1csWUFBTixDQUFtQkMsU0FBbkIsQ0FBNkIsQ0FBN0IsRUFBZ0MsQ0FBaEMsQ0FBcEIsTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSVosS0FBSyxDQUFDYSxRQUFWLENBRkYsQ0FQRixDQURGLENBVEYsQ0FERixFQXlCRSxNQUFDLDBDQUFEO0FBQ0UsWUFBUSxNQURWO0FBRUUsYUFBUyxFQUFFO0FBQUNDLGFBQU8sRUFBRTtBQUFWLEtBRmI7QUFHRSxTQUFLLEVBQUUsTUFIVDtBQUlFLFdBQU8sRUFBRWpCLFNBSlg7QUFLRSxVQUFNLEVBQUUsSUFMVjtBQU1FLFFBQUksRUFBRSxNQUFNQyxZQUFZLENBQUMsS0FBRCxDQU4xQjtBQU9FLFlBQVEsRUFBRSxNQUFNQSxZQUFZLENBQUMsS0FBRCxDQVA5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0U7QUFBSyxPQUFHLEVBQUVJLE1BQVY7QUFBa0IsT0FBRyxFQUFDLFFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQXpCRixDQURGO0FBdUNEOztHQXBEdUJULFM7VUFDUEcscUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjlkOTBjZDQ4NmQwNjIzMDE2NjJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rcyAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInOyBcclxuaW1wb3J0IHsgQ2FyZCwgU2tlbGV0b24sIE1vZGFsLCBTcGFjZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7XHJcbiAgRWRpdE91dGxpbmVkLFxyXG4gIEVsbGlwc2lzT3V0bGluZWQsXHJcbiAgU2V0dGluZ091dGxpbmVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgXCIuL21vdmllQ2FyZC5zY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb3ZpZUNhcmQocHJvcHMpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgbW92aWUsIGxvYWRpbmcgfSA9IHByb3BzO1xyXG4gIGxldCBwb3N0ZXIgPVxyXG4gICAgXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NjAwX2FuZF9oOTAwX2Jlc3R2MlwiICsgbW92aWU/LnBvc3Rlcl9wYXRoO1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gb25Nb2RhbENsaWNrKGUpIHtcclxuICAgIHNldFNob3dNb2RhbCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHsgcm91dGVyLnB1c2goYC9tb3ZpZS8ke21vdmllLmlkfWApIH19XHJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiAxNiB9fVxyXG4gICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQga2V5PVwic2V0dGluZ1wiIC8+LFxyXG4gICAgICAgICAgPEVkaXRPdXRsaW5lZCBrZXk9XCJlZGl0XCIgLz4sXHJcbiAgICAgICAgICA8RWxsaXBzaXNPdXRsaW5lZCBrZXk9XCJlbGxpcHNpc1wiIC8+LFxyXG4gICAgICAgIF19XHJcbiAgICAgID5cclxuICAgICAgICA8U2tlbGV0b24gbG9hZGluZz17bG9hZGluZ30gYXZhdGFyIGFjdGl2ZT5cclxuICAgICAgICAgIDxTcGFjZSBhbGlnbj1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3ZpZS1wb3N0ZXJcIlxyXG4gICAgICAgICAgICAgIHNyYz17cG9zdGVyfVxyXG4gICAgICAgICAgICAgIGFsdD1cInBvc3RlclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17b25Nb2RhbENsaWNrfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtb2NrLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgPGgyPnttb3ZpZS50aXRsZX0gKHttb3ZpZS5yZWxlYXNlX2RhdGUuc3Vic3RyaW5nKDAsIDQpfSk8L2gyPlxyXG4gICAgICAgICAgICAgIDxwPnttb3ZpZS5vdmVydmlld308L3A+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgPC9Ta2VsZXRvbj5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgIGJvZHlTdHlsZT17e3BhZGRpbmc6IDB9fVxyXG4gICAgICAgIHdpZHRoPXtcImF1dG9cIn1cclxuICAgICAgICB2aXNpYmxlPXtzaG93TW9kYWx9XHJcbiAgICAgICAgZm9vdGVyPXtudWxsfVxyXG4gICAgICAgIG9uT2s9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XHJcbiAgICAgICAgb25DYW5jZWw9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nIHNyYz17cG9zdGVyfSBhbHQ9XCJwb3N0ZXJcIiAvPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9