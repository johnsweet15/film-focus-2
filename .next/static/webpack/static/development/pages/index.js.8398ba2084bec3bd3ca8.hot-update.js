webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/layout/layout.js":
/*!*****************************************!*\
  !*** ./src/components/layout/layout.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StandardLayout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\nvar _jsxFileName = \"/Users/johnsweet/repos/starter-frontend/src/components/layout/layout.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst {\n  SubMenu\n} = antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"];\nconst {\n  Header,\n  Content,\n  Sider\n} = antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"];\nconst siteTitle = \"Starter Site\";\nfunction StandardLayout({\n  title,\n  children\n}) {\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, title ? title : siteTitle)), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(Header, {\n    className: \"header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"logo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 11\n    }\n  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"], {\n    theme: \"dark\",\n    mode: \"horizontal\",\n    defaultSelectedKeys: [\"2\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    key: \"1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }\n  }, \"nav 1\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    key: \"2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, \"nav 2\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    key: \"3\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, \"nav 3\"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(Sider, {\n    width: 200,\n    className: \"site-layout-background\",\n    style: {\n      position: \"fixed\",\n      overflow: \"auto\",\n      height: \"100vh\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"], {\n    mode: \"inline\",\n    defaultSelectedKeys: [\"1\"],\n    defaultOpenKeys: [\"sub1\"],\n    style: {\n      height: \"100%\",\n      borderRight: 0\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, __jsx(SubMenu, {\n    key: \"sub1\",\n    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"UserOutlined\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 41\n      }\n    }),\n    title: \"subnav 1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 15\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    key: \"1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 17\n    }\n  }, \"option1\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    key: \"2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 17\n    }\n  }, \"option2\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    key: \"3\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 17\n    }\n  }, \"option3\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    key: \"4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 17\n    }\n  }, \"option4\")), __jsx(SubMenu, {\n    key: \"sub2\",\n    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"LaptopOutlined\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 41\n      }\n    }),\n    title: \"subnav 2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 15\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    key: \"5\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 17\n    }\n  }, \"option5\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    key: \"6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }, \"option6\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    key: \"7\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }\n  }, \"option7\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    key: \"8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 17\n    }\n  }, \"option8\")), __jsx(SubMenu, {\n    key: \"sub3\",\n    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__[\"NotificationOutlined\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 23\n      }\n    }),\n    title: \"subnav 3\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 15\n    }\n  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    key: \"9\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 17\n    }\n  }, \"option9\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    key: \"10\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  }, \"option10\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    key: \"11\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  }, \"option11\"), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Menu\"].Item, {\n    key: \"12\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 17\n    }\n  }, \"option12\")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__[\"Layout\"], {\n    style: {\n      padding: \"0 24px 24px\",\n      position: \"fixed\",\n      overflow: \"auto\",\n      height: \"100vh\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 11\n    }\n  }, __jsx(Content, {\n    className: \"site-layout-background\",\n    style: {\n      padding: 24,\n      margin: 0,\n      minHeight: 280,\n      overflow: \"initial\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }, children)))));\n}\n_c = StandardLayout;\n\nvar _c;\n\n$RefreshReg$(_c, \"StandardLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmpzP2YyNGQiXSwibmFtZXMiOlsiU3ViTWVudSIsIk1lbnUiLCJIZWFkZXIiLCJDb250ZW50IiwiU2lkZXIiLCJMYXlvdXQiLCJzaXRlVGl0bGUiLCJTdGFuZGFyZExheW91dCIsInRpdGxlIiwiY2hpbGRyZW4iLCJwb3NpdGlvbiIsIm92ZXJmbG93IiwiaGVpZ2h0IiwiYm9yZGVyUmlnaHQiLCJwYWRkaW5nIiwibWFyZ2luIiwibWluSGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFNQSxNQUFNO0FBQUVBO0FBQUYsSUFBY0MseUNBQXBCO0FBQ0EsTUFBTTtBQUFFQyxRQUFGO0FBQVVDLFNBQVY7QUFBbUJDO0FBQW5CLElBQTZCQywyQ0FBbkM7QUFFQSxNQUFNQyxTQUFTLEdBQUcsY0FBbEI7QUFFZSxTQUFTQyxjQUFULENBQXdCO0FBQUVDLE9BQUY7QUFBU0M7QUFBVCxDQUF4QixFQUE2QztBQUMxRCxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFELEtBQUssR0FBR0EsS0FBSCxHQUFXRixTQUF4QixDQURGLENBREYsRUFJRSxNQUFDLDJDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLE1BQUQ7QUFBUSxhQUFTLEVBQUMsUUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx5Q0FBRDtBQUFNLFNBQUssRUFBQyxNQUFaO0FBQW1CLFFBQUks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bGUiOiIuL3NyYy9jb21wb25lbnRzL2xheW91dC9sYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBMYXlvdXQsIE1lbnUsIEJyZWFkY3J1bWIgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IHtcbiAgVXNlck91dGxpbmVkLFxuICBMYXB0b3BPdXRsaW5lZCxcbiAgTm90aWZpY2F0aW9uT3V0bGluZWQsXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xuXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XG5jb25zdCB7IEhlYWRlciwgQ29udGVudCwgU2lkZXIgfSA9IExheW91dDtcblxuY29uc3Qgc2l0ZVRpdGxlID0gXCJTdGFydGVyIFNpdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhbmRhcmRMYXlvdXQoeyB0aXRsZSwgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPnt0aXRsZSA/IHRpdGxlIDogc2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIC8+XG4gICAgICAgICAgPE1lbnUgdGhlbWU9XCJkYXJrXCIgbW9kZT1cImhvcml6b250YWxcIiBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbXCIyXCJdfT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiPm5hdiAxPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjJcIj5uYXYgMjwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIzXCI+bmF2IDM8L01lbnUuSXRlbT5cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgIDwvSGVhZGVyPlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxTaWRlclxuICAgICAgICAgICAgd2lkdGg9ezIwMH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpdGUtbGF5b3V0LWJhY2tncm91bmRcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPE1lbnVcbiAgICAgICAgICAgICAgbW9kZT1cImlubGluZVwiXG4gICAgICAgICAgICAgIGRlZmF1bHRTZWxlY3RlZEtleXM9e1tcIjFcIl19XG4gICAgICAgICAgICAgIGRlZmF1bHRPcGVuS2V5cz17W1wic3ViMVwiXX1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMCVcIiwgYm9yZGVyUmlnaHQ6IDAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFN1Yk1lbnUga2V5PVwic3ViMVwiIGljb249ezxVc2VyT3V0bGluZWQgLz59IHRpdGxlPVwic3VibmF2IDFcIj5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjFcIj5vcHRpb24xPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIyXCI+b3B0aW9uMjwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPm9wdGlvbjM8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjRcIj5vcHRpb240PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvU3ViTWVudT5cbiAgICAgICAgICAgICAgPFN1Yk1lbnUga2V5PVwic3ViMlwiIGljb249ezxMYXB0b3BPdXRsaW5lZCAvPn0gdGl0bGU9XCJzdWJuYXYgMlwiPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNVwiPm9wdGlvbjU8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjZcIj5vcHRpb242PC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI3XCI+b3B0aW9uNzwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiOFwiPm9wdGlvbjg8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPC9TdWJNZW51PlxuICAgICAgICAgICAgICA8U3ViTWVudVxuICAgICAgICAgICAgICAgIGtleT1cInN1YjNcIlxuICAgICAgICAgICAgICAgIGljb249ezxOb3RpZmljYXRpb25PdXRsaW5lZCAvPn1cbiAgICAgICAgICAgICAgICB0aXRsZT1cInN1Ym5hdiAzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiOVwiPm9wdGlvbjk8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjEwXCI+b3B0aW9uMTA8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjExXCI+b3B0aW9uMTE8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjEyXCI+b3B0aW9uMTI8L01lbnUuSXRlbT5cbiAgICAgICAgICAgICAgPC9TdWJNZW51PlxuICAgICAgICAgICAgPC9NZW51PlxuICAgICAgICAgIDwvU2lkZXI+XG4gICAgICAgICAgPExheW91dFxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIwIDI0cHggMjRweFwiLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICAgICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q29udGVudFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaXRlLWxheW91dC1iYWNrZ3JvdW5kXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNCxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAyODAsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaW5pdGlhbFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0NvbnRlbnQ+XG4gICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/layout/layout.js\n");

/***/ })

})