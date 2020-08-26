webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/layout/layout.js":
/*!*****************************************!*\
  !*** ./src/components/layout/layout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StandardLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
var _jsxFileName = "C:\\Film_Focus_2\\film-focus-2\\src\\components\\layout\\layout.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const {
  Header,
  Sider
} = antd__WEBPACK_IMPORTED_MODULE_2__["Layout"];
const {
  SubMenu
} = antd__WEBPACK_IMPORTED_MODULE_2__["Menu"];
const siteTitle = "Starter Site";
function StandardLayout({
  title,
  header,
  subheader,
  children
}) {
  _s();

  const {
    0: collapsed,
    1: setCollapsed
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function toggleCollapsed() {
    setCollapsed(!collapsed);
  }

  const collapseButton = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(collapsed ? _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MenuUnfoldOutlined"] : _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MenuFoldOutlined"], {
    className: "trigger",
    onClick: toggleCollapsed
  });
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, title ? title : siteTitle)), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    style: {
      overflow: "hidden"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx(Header, {
    className: "header d-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, collapseButton)), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(Sider, {
    width: 250,
    style: {
      height: "100vh"
    },
    className: "site-layout-background",
    collapsed: collapsed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    mode: "inline",
    defaultSelectedKeys: ["1"],
    defaultOpenKeys: ["sub1"],
    style: {
      height: "100%",
      borderRight: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(SubMenu, {
    key: "sub1",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["DesktopOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 41
      }
    }),
    title: "Title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "Subtitle 1"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "Subtitle 2"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
    key: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "Subtitle 3")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
    className: "p-3",
    style: {
      padding: "1rem",
      overflowY: "scroll",
      paddingBottom: "2rem",
      maxWidth: "1200px",
      marginLeft: "auto",
      marginRight: "auto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }, children))));
}

_s(StandardLayout, "IaHwFfvbaw8y79e5do0CzWS1eXc=");

_c = StandardLayout;

var _c;

$RefreshReg$(_c, "StandardLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIkhlYWRlciIsIlNpZGVyIiwiTGF5b3V0IiwiU3ViTWVudSIsIk1lbnUiLCJzaXRlVGl0bGUiLCJTdGFuZGFyZExheW91dCIsInRpdGxlIiwiaGVhZGVyIiwic3ViaGVhZGVyIiwiY2hpbGRyZW4iLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJ1c2VTdGF0ZSIsInRvZ2dsZUNvbGxhcHNlZCIsImNvbGxhcHNlQnV0dG9uIiwiUmVhY3QiLCJjcmVhdGVFbGVtZW50IiwiTWVudVVuZm9sZE91dGxpbmVkIiwiTWVudUZvbGRPdXRsaW5lZCIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJvdmVyZmxvdyIsImhlaWdodCIsImJvcmRlclJpZ2h0IiwicGFkZGluZyIsIm92ZXJmbG93WSIsInBhZGRpbmdCb3R0b20iLCJtYXhXaWR0aCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTUEsTUFBTTtBQUFFQSxRQUFGO0FBQVVDO0FBQVYsSUFBb0JDLDJDQUExQjtBQUNBLE1BQU07QUFBRUM7QUFBRixJQUFjQyx5Q0FBcEI7QUFFQSxNQUFNQyxTQUFTLEdBQUcsY0FBbEI7QUFFZSxTQUFTQyxjQUFULENBQXdCO0FBQUVDLE9BQUY7QUFBU0MsUUFBVDtBQUFpQkMsV0FBakI7QUFBNEJDO0FBQTVCLENBQXhCLEVBQWdFO0FBQUE7O0FBQzdFLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0QkMsc0RBQVEsQ0FBQyxLQUFELENBQTFDOztBQUVBLFdBQVNDLGVBQVQsR0FBMkI7QUFDekJGLGdCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0Q7O0FBQ0QsUUFBTUksY0FBYyxHQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQ3JCTixTQUFTLEdBQUdPLG9FQUFILEdBQXdCQyxrRUFEWixFQUVyQjtBQUNFQyxhQUFTLEVBQUUsU0FEYjtBQUVFQyxXQUFPLEVBQUVQO0FBRlgsR0FGcUIsQ0FBdkI7QUFPQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFQLEtBQUssR0FBR0EsS0FBSCxHQUFXRixTQUF4QixDQURGLENBREYsRUFJRSxNQUFDLDJDQUFEO0FBQVEsU0FBSyxFQUFFO0FBQUVpQixjQUFRLEVBQUU7QUFBWixLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE1BQUQ7QUFBUSxhQUFTLEVBQUMsa0NBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1QLGNBQU4sQ0FERixDQURGLEVBSUUsTUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxLQUFEO0FBQ0UsU0FBSyxFQUFFLEdBRFQ7QUFFRSxTQUFLLEVBQUU7QUFBRVEsWUFBTSxFQUFFO0FBQVYsS0FGVDtBQUdFLGFBQVMsRUFBQyx3QkFIWjtBQUlFLGFBQVMsRUFBRVosU0FKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyx5Q0FBRDtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsdUJBQW1CLEVBQUUsQ0FBQyxHQUFELENBRnZCO0FBR0UsbUJBQWUsRUFBRSxDQUFDLE1BQUQsQ0FIbkI7QUFJRSxTQUFLLEVBQUU7QUFBRVksWUFBTSxFQUFFLE1BQVY7QUFBa0JDLGlCQUFXLEVBQUU7QUFBL0IsS0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyxPQUFEO0FBQVMsT0FBRyxFQUFDLE1BQWI7QUFBb0IsUUFBSSxFQUFFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUExQjtBQUErQyxTQUFLLEVBQUMsT0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixFQUVFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRixFQUdFLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsT0FBRyxFQUFDLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFIRixDQU5GLENBTkYsQ0FERixFQW9CRSxNQUFDLDJDQUFEO0FBQ0UsYUFBUyxFQUFDLEtBRFo7QUFFRSxTQUFLLEVBQUU7QUFDTEMsYUFBTyxFQUFFLE1BREo7QUFFTEMsZUFBUyxFQUFFLFFBRk47QUFHTEMsbUJBQWEsRUFBRSxNQUhWO0FBSUxDLGNBQVEsRUFBRSxRQUpMO0FBS0xDLGdCQUFVLEVBQUUsTUFMUDtBQU1MQyxpQkFBVyxFQUFFO0FBTlIsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0dwQixRQVhILENBcEJGLENBSkYsQ0FKRixDQURGO0FBOENEOztHQTNEdUJKLGM7O0tBQUFBLGMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuZmRlYTgzOGIwNDk4NmE4Njg3ZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IExheW91dCwgTWVudSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7XHJcbiAgRGVza3RvcE91dGxpbmVkLFxyXG4gIE1lbnVVbmZvbGRPdXRsaW5lZCxcclxuICBNZW51Rm9sZE91dGxpbmVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuY29uc3QgeyBIZWFkZXIsIFNpZGVyIH0gPSBMYXlvdXQ7XHJcbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcclxuXHJcbmNvbnN0IHNpdGVUaXRsZSA9IFwiU3RhcnRlciBTaXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFuZGFyZExheW91dCh7IHRpdGxlLCBoZWFkZXIsIHN1YmhlYWRlciwgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtjb2xsYXBzZWQsIHNldENvbGxhcHNlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGZ1bmN0aW9uIHRvZ2dsZUNvbGxhcHNlZCgpIHtcclxuICAgIHNldENvbGxhcHNlZCghY29sbGFwc2VkKTtcclxuICB9XHJcbiAgY29uc3QgY29sbGFwc2VCdXR0b24gPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxyXG4gICAgY29sbGFwc2VkID8gTWVudVVuZm9sZE91dGxpbmVkIDogTWVudUZvbGRPdXRsaW5lZCxcclxuICAgIHtcclxuICAgICAgY2xhc3NOYW1lOiBcInRyaWdnZXJcIixcclxuICAgICAgb25DbGljazogdG9nZ2xlQ29sbGFwc2VkLFxyXG4gICAgfVxyXG4gICk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57dGl0bGUgPyB0aXRsZSA6IHNpdGVUaXRsZX08L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxMYXlvdXQgc3R5bGU9e3sgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfX0+XHJcbiAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdj57Y29sbGFwc2VCdXR0b259PC9kaXY+XHJcbiAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxTaWRlclxyXG4gICAgICAgICAgICB3aWR0aD17MjUwfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiB9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaXRlLWxheW91dC1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgY29sbGFwc2VkPXtjb2xsYXBzZWR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgICAgbW9kZT1cImlubGluZVwiXHJcbiAgICAgICAgICAgICAgZGVmYXVsdFNlbGVjdGVkS2V5cz17W1wiMVwiXX1cclxuICAgICAgICAgICAgICBkZWZhdWx0T3BlbktleXM9e1tcInN1YjFcIl19XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiwgYm9yZGVyUmlnaHQ6IDAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTdWJNZW51IGtleT1cInN1YjFcIiBpY29uPXs8RGVza3RvcE91dGxpbmVkIC8+fSB0aXRsZT1cIlRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjFcIj5TdWJ0aXRsZSAxPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjJcIj5TdWJ0aXRsZSAyPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjNcIj5TdWJ0aXRsZSAzPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgICA8L1NpZGVyPlxyXG4gICAgICAgICAgPExheW91dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTNcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICAgIG92ZXJmbG93WTogXCJzY3JvbGxcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjJyZW1cIixcclxuICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxMjAwcHhcIixcclxuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcclxuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCJhdXRvXCJcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9