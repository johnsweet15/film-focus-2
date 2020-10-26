webpackHotUpdate("static\\development\\pages\\error.js",{

/***/ "./node_modules/@ant-design/css-animation/lib/Event.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ant-design/css-animation/lib/Event.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: 'transitionstart',
    WebkitTransition: 'webkitTransitionStart',
    MozTransition: 'mozTransitionStart',
    OTransition: 'oTransitionStart',
    msTransition: 'MSTransitionStart'
  },

  animationstart: {
    animation: 'animationstart',
    WebkitAnimation: 'webkitAnimationStart',
    MozAnimation: 'mozAnimationStart',
    OAnimation: 'oAnimationStart',
    msAnimation: 'MSAnimationStart'
  }
};

var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var startEvents = [];
var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }

  function process(EVENT_NAME_MAP, events) {
    for (var baseEventName in EVENT_NAME_MAP) {
      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
          if (styleName in style) {
            events.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }
  }

  process(START_EVENT_NAME_MAP, startEvents);
  process(END_EVENT_NAME_MAP, endEvents);
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  // Start events
  startEvents: startEvents,

  addStartEventListener: function addStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    startEvents.forEach(function (startEvent) {
      addEventListener(node, startEvent, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      return;
    }
    startEvents.forEach(function (startEvent) {
      removeEventListener(node, startEvent, eventListener);
    });
  },


  // End events
  endEvents: endEvents,

  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

exports['default'] = TransitionEvents;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/antd/lib/_util/colors.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/_util/colors.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PresetColorTypes = exports.PresetStatusColorTypes = void 0;

var _type = __webpack_require__(/*! ./type */ "./node_modules/antd/lib/_util/type.js");

var PresetStatusColorTypes = (0, _type.tuple)('success', 'processing', 'error', 'default', 'warning'); // eslint-disable-next-line import/prefer-default-export

exports.PresetStatusColorTypes = PresetStatusColorTypes;
var PresetColorTypes = (0, _type.tuple)('pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime');
exports.PresetColorTypes = PresetColorTypes;

/***/ }),

/***/ "./node_modules/antd/lib/_util/devWarning.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/_util/devWarning.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "resetWarned", {
  enumerable: true,
  get: function get() {
    return _warning.resetWarned;
  }
});
exports["default"] = void 0;

var _warning = _interopRequireWildcard(__webpack_require__(/*! rc-util/lib/warning */ "./node_modules/rc-util/lib/warning.js"));

var _default = function _default(valid, component, message) {
  (0, _warning["default"])(valid, "[antd: ".concat(component, "] ").concat(message));
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/_util/isNumeric.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/_util/isNumeric.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var isNumeric = function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

var _default = isNumeric;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/_util/motion.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/_util/motion.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// ================== Collapse Motion ==================
var getCollapsedHeight = function getCollapsedHeight() {
  return {
    height: 0,
    opacity: 0
  };
};

var getRealHeight = function getRealHeight(node) {
  return {
    height: node.scrollHeight,
    opacity: 1
  };
};

var getCurrentHeight = function getCurrentHeight(node) {
  return {
    height: node.offsetHeight
  };
};

function skipOpacityTransition(_, event) {
  return event.propertyName === 'height';
}

var collapseMotion = {
  motionName: 'ant-motion-collapse',
  onAppearStart: getCollapsedHeight,
  onEnterStart: getCollapsedHeight,
  onAppearActive: getRealHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  onAppearEnd: skipOpacityTransition,
  onEnterEnd: skipOpacityTransition,
  onLeaveEnd: skipOpacityTransition,
  motionDeadline: 500
};
var _default = collapseMotion;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/_util/raf.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/_util/raf.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = wrapperRaf;

var _raf = _interopRequireDefault(__webpack_require__(/*! raf */ "./node_modules/raf/index.js"));

var id = 0;
var ids = {}; // Support call raf with delay specified frame

function wrapperRaf(callback) {
  var delayFrames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var myId = id++;
  var restFrames = delayFrames;

  function internalCallback() {
    restFrames -= 1;

    if (restFrames <= 0) {
      callback();
      delete ids[myId];
    } else {
      ids[myId] = (0, _raf["default"])(internalCallback);
    }
  }

  ids[myId] = (0, _raf["default"])(internalCallback);
  return myId;
}

wrapperRaf.cancel = function cancel(pid) {
  if (pid === undefined) return;

  _raf["default"].cancel(ids[pid]);

  delete ids[pid];
};

wrapperRaf.ids = ids; // export this for test usage

/***/ }),

/***/ "./node_modules/antd/lib/_util/reactNode.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/_util/reactNode.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceElement = replaceElement;
exports.cloneElement = cloneElement;
exports.isValidElement = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var isValidElement = React.isValidElement;
exports.isValidElement = isValidElement;

function replaceElement(element, replacement, props) {
  if (!isValidElement(element)) return replacement;
  return /*#__PURE__*/React.cloneElement(element, typeof props === 'function' ? props() : props);
}

function cloneElement(element, props) {
  return replaceElement(element, element, props);
}

/***/ }),

/***/ "./node_modules/antd/lib/_util/ref.js":
/*!********************************************!*\
  !*** ./node_modules/antd/lib/_util/ref.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fillRef = fillRef;
exports.composeRef = composeRef;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

function fillRef(ref, node) {
  if (typeof ref === 'function') {
    ref(node);
  } else if ((0, _typeof2["default"])(ref) === 'object' && ref && 'current' in ref) {
    ref.current = node;
  }
}

function composeRef() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }

  return function (node) {
    refs.forEach(function (ref) {
      fillRef(ref, node);
    });
  };
}

/***/ }),

/***/ "./node_modules/antd/lib/_util/type.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/_util/type.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tupleNum = exports.tuple = void 0;

// https://stackoverflow.com/questions/46176165/ways-to-get-string-literal-type-of-array-values-without-enum-overhead
var tuple = function tuple() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args;
};

exports.tuple = tuple;

var tupleNum = function tupleNum() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return args;
};

exports.tupleNum = tupleNum;

/***/ }),

/***/ "./node_modules/antd/lib/_util/unreachableException.js":
/*!*************************************************************!*\
  !*** ./node_modules/antd/lib/_util/unreachableException.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var UnreachableException = function UnreachableException(value) {
  (0, _classCallCheck2["default"])(this, UnreachableException);
  return new Error("unreachable case: ".concat(JSON.stringify(value)));
};

exports["default"] = UnreachableException;

/***/ }),

/***/ "./node_modules/antd/lib/_util/wave.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/_util/wave.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _Event = _interopRequireDefault(__webpack_require__(/*! @ant-design/css-animation/lib/Event */ "./node_modules/@ant-design/css-animation/lib/Event.js"));

var _raf = _interopRequireDefault(__webpack_require__(/*! ./raf */ "./node_modules/antd/lib/_util/raf.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var styleForPesudo; // Where el is the DOM element you'd like to test for visibility

function isHidden(element) {
  if (false) {}

  return !element || element.offsetParent === null;
}

function isNotGrey(color) {
  // eslint-disable-next-line no-useless-escape
  var match = (color || '').match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);

  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }

  return true;
}

var Wave = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Wave, _React$Component);

  var _super = (0, _createSuper2["default"])(Wave);

  function Wave() {
    var _this;

    (0, _classCallCheck2["default"])(this, Wave);
    _this = _super.apply(this, arguments);
    _this.animationStart = false;
    _this.destroyed = false;

    _this.onClick = function (node, waveColor) {
      if (!node || isHidden(node) || node.className.indexOf('-leave') >= 0) {
        return;
      }

      var insertExtraNode = _this.props.insertExtraNode;
      _this.extraNode = document.createElement('div');

      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          extraNode = _assertThisInitialize.extraNode;

      var getPrefixCls = _this.context.getPrefixCls;
      extraNode.className = "".concat(getPrefixCls(''), "-click-animating-node");

      var attributeName = _this.getAttributeName();

      node.setAttribute(attributeName, 'true'); // Not white or transparnt or grey

      styleForPesudo = styleForPesudo || document.createElement('style');

      if (waveColor && waveColor !== '#ffffff' && waveColor !== 'rgb(255, 255, 255)' && isNotGrey(waveColor) && !/rgba\((?:\d*, ){3}0\)/.test(waveColor) && // any transparent rgba color
      waveColor !== 'transparent') {
        // Add nonce if CSP exist
        if (_this.csp && _this.csp.nonce) {
          styleForPesudo.nonce = _this.csp.nonce;
        }

        extraNode.style.borderColor = waveColor;
        styleForPesudo.innerHTML = "\n      [".concat(getPrefixCls(''), "-click-animating-without-extra-node='true']::after, .").concat(getPrefixCls(''), "-click-animating-node {\n        --antd-wave-shadow-color: ").concat(waveColor, ";\n      }");

        if (!document.body.contains(styleForPesudo)) {
          document.body.appendChild(styleForPesudo);
        }
      }

      if (insertExtraNode) {
        node.appendChild(extraNode);
      }

      _Event["default"].addStartEventListener(node, _this.onTransitionStart);

      _Event["default"].addEndEventListener(node, _this.onTransitionEnd);
    };

    _this.onTransitionStart = function (e) {
      if (_this.destroyed) {
        return;
      }

      var node = (0, _reactDom.findDOMNode)((0, _assertThisInitialized2["default"])(_this));

      if (!e || e.target !== node || _this.animationStart) {
        return;
      }

      _this.resetEffect(node);
    };

    _this.onTransitionEnd = function (e) {
      if (!e || e.animationName !== 'fadeEffect') {
        return;
      }

      _this.resetEffect(e.target);
    };

    _this.bindAnimationEvent = function (node) {
      if (!node || !node.getAttribute || node.getAttribute('disabled') || node.className.indexOf('disabled') >= 0) {
        return;
      }

      var onClick = function onClick(e) {
        // Fix radio button click twice
        if (e.target.tagName === 'INPUT' || isHidden(e.target)) {
          return;
        }

        _this.resetEffect(node); // Get wave color from target


        var waveColor = getComputedStyle(node).getPropertyValue('border-top-color') || // Firefox Compatible
        getComputedStyle(node).getPropertyValue('border-color') || getComputedStyle(node).getPropertyValue('background-color');
        _this.clickWaveTimeoutId = window.setTimeout(function () {
          return _this.onClick(node, waveColor);
        }, 0);

        _raf["default"].cancel(_this.animationStartId);

        _this.animationStart = true; // Render to trigger transition event cost 3 frames. Let's delay 10 frames to reset this.

        _this.animationStartId = (0, _raf["default"])(function () {
          _this.animationStart = false;
        }, 10);
      };

      node.addEventListener('click', onClick, true);
      return {
        cancel: function cancel() {
          node.removeEventListener('click', onClick, true);
        }
      };
    };

    _this.renderWave = function (_ref) {
      var csp = _ref.csp;
      var children = _this.props.children;
      _this.csp = csp;
      return children;
    };

    return _this;
  }

  (0, _createClass2["default"])(Wave, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var node = (0, _reactDom.findDOMNode)(this);

      if (!node || node.nodeType !== 1) {
        return;
      }

      this.instance = this.bindAnimationEvent(node);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.cancel();
      }

      if (this.clickWaveTimeoutId) {
        clearTimeout(this.clickWaveTimeoutId);
      }

      this.destroyed = true;
    }
  }, {
    key: "getAttributeName",
    value: function getAttributeName() {
      var getPrefixCls = this.context.getPrefixCls;
      var insertExtraNode = this.props.insertExtraNode;
      return insertExtraNode ? "".concat(getPrefixCls(''), "-click-animating") : "".concat(getPrefixCls(''), "-click-animating-without-extra-node");
    }
  }, {
    key: "resetEffect",
    value: function resetEffect(node) {
      if (!node || node === this.extraNode || !(node instanceof Element)) {
        return;
      }

      var insertExtraNode = this.props.insertExtraNode;
      var attributeName = this.getAttributeName();
      node.setAttribute(attributeName, 'false'); // edge has bug on `removeAttribute` #14466

      if (styleForPesudo) {
        styleForPesudo.innerHTML = '';
      }

      if (insertExtraNode && this.extraNode && node.contains(this.extraNode)) {
        node.removeChild(this.extraNode);
      }

      _Event["default"].removeStartEventListener(node, this.onTransitionStart);

      _Event["default"].removeEndEventListener(node, this.onTransitionEnd);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderWave);
    }
  }]);
  return Wave;
}(React.Component);

exports["default"] = Wave;
Wave.contextType = _configProvider.ConfigContext;

/***/ }),

/***/ "./node_modules/antd/lib/button/LoadingIcon.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/button/LoadingIcon.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LoadingIcon;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _CSSMotion = _interopRequireDefault(__webpack_require__(/*! rc-animate/lib/CSSMotion */ "./node_modules/rc-animate/lib/CSSMotion.js"));

var _LoadingOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/LoadingOutlined */ "./node_modules/antd/node_modules/@ant-design/icons/LoadingOutlined.js"));

var getCollapsedWidth = function getCollapsedWidth() {
  return {
    width: 0,
    opacity: 0,
    transform: 'scale(0)'
  };
};

var getRealWidth = function getRealWidth(node) {
  return {
    width: node.scrollWidth,
    opacity: 1,
    transform: 'scale(1)'
  };
};

function LoadingIcon(_ref) {
  var prefixCls = _ref.prefixCls,
      loading = _ref.loading,
      existIcon = _ref.existIcon;
  var visible = !!loading;

  if (existIcon) {
    return /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-loading-icon")
    }, /*#__PURE__*/React.createElement(_LoadingOutlined["default"], null));
  }

  return /*#__PURE__*/React.createElement(_CSSMotion["default"], {
    visible: visible // We do not really use this motionName
    ,
    motionName: "".concat(prefixCls, "-loading-icon-motion"),
    removeOnLeave: true,
    onAppearStart: getCollapsedWidth,
    onAppearActive: getRealWidth,
    onEnterStart: getCollapsedWidth,
    onEnterActive: getRealWidth,
    onLeaveStart: getRealWidth,
    onLeaveActive: getCollapsedWidth
  }, function (_ref2, ref) {
    var className = _ref2.className,
        style = _ref2.style;
    return /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-loading-icon"),
      style: style,
      ref: ref
    }, /*#__PURE__*/React.createElement(_LoadingOutlined["default"], {
      className: (0, _classnames["default"])(className)
    }));
  });
}

/***/ }),

/***/ "./node_modules/antd/lib/button/button-group.js":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/button/button-group.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _unreachableException = _interopRequireDefault(__webpack_require__(/*! ../_util/unreachableException */ "./node_modules/antd/lib/_util/unreachableException.js"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var ButtonGroup = function ButtonGroup(props) {
  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var _classNames;

    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;

    var customizePrefixCls = props.prefixCls,
        size = props.size,
        className = props.className,
        others = __rest(props, ["prefixCls", "size", "className"]);

    var prefixCls = getPrefixCls('btn-group', customizePrefixCls); // large => lg
    // small => sm

    var sizeCls = '';

    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;

      case 'small':
        sizeCls = 'sm';
        break;

      case 'middle':
      case undefined:
        break;

      default:
        // eslint-disable-next-line no-console
        console.warn(new _unreachableException["default"](size));
    }

    var classes = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
    return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({}, others, {
      className: classes
    }));
  });
};

var _default = ButtonGroup;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/button/button.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/button/button.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertLegacyProps = convertLegacyProps;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _buttonGroup = _interopRequireDefault(__webpack_require__(/*! ./button-group */ "./node_modules/antd/lib/button/button-group.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _wave = _interopRequireDefault(__webpack_require__(/*! ../_util/wave */ "./node_modules/antd/lib/_util/wave.js"));

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _SizeContext = _interopRequireDefault(__webpack_require__(/*! ../config-provider/SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js"));

var _LoadingIcon = _interopRequireDefault(__webpack_require__(/*! ./LoadingIcon */ "./node_modules/antd/lib/button/LoadingIcon.js"));

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
/* eslint-disable react/button-has-type */


var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);

function isString(str) {
  return typeof str === 'string';
}

function isUnborderedButtonType(type) {
  return type === 'text' || type === 'link';
} // Insert one space between two chinese characters automatically.


function insertSpace(child, needInserted) {
  // Check the child if is undefined or null.
  if (child == null) {
    return;
  }

  var SPACE = needInserted ? ' ' : ''; // strictNullChecks oops.

  if (typeof child !== 'string' && typeof child !== 'number' && isString(child.type) && isTwoCNChar(child.props.children)) {
    return (0, _reactNode.cloneElement)(child, {
      children: child.props.children.split('').join(SPACE)
    });
  }

  if (typeof child === 'string') {
    if (isTwoCNChar(child)) {
      child = child.split('').join(SPACE);
    }

    return /*#__PURE__*/React.createElement("span", null, child);
  }

  return child;
}

function spaceChildren(children, needInserted) {
  var isPrevChildPure = false;
  var childList = [];
  React.Children.forEach(children, function (child) {
    var type = (0, _typeof2["default"])(child);
    var isCurrentChildPure = type === 'string' || type === 'number';

    if (isPrevChildPure && isCurrentChildPure) {
      var lastIndex = childList.length - 1;
      var lastChild = childList[lastIndex];
      childList[lastIndex] = "".concat(lastChild).concat(child);
    } else {
      childList.push(child);
    }

    isPrevChildPure = isCurrentChildPure;
  }); // Pass to React.Children.map to auto fill key

  return React.Children.map(childList, function (child) {
    return insertSpace(child, needInserted);
  });
}

var ButtonTypes = (0, _type.tuple)('default', 'primary', 'ghost', 'dashed', 'link', 'text');
var ButtonShapes = (0, _type.tuple)('circle', 'circle-outline', 'round');
var ButtonHTMLTypes = (0, _type.tuple)('submit', 'button', 'reset');

function convertLegacyProps(type) {
  if (type === 'danger') {
    return {
      danger: true
    };
  }

  return {
    type: type
  };
}

var InternalButton = function InternalButton(props, ref) {
  var _classNames;

  var loading = props.loading,
      customizePrefixCls = props.prefixCls,
      type = props.type,
      danger = props.danger,
      shape = props.shape,
      customizeSize = props.size,
      className = props.className,
      children = props.children,
      icon = props.icon,
      ghost = props.ghost,
      block = props.block,
      rest = __rest(props, ["loading", "prefixCls", "type", "danger", "shape", "size", "className", "children", "icon", "ghost", "block"]);

  var size = React.useContext(_SizeContext["default"]);

  var _React$useState = React.useState(!!loading),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      innerLoading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = React.useState(false),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      hasTwoCNChar = _React$useState4[0],
      setHasTwoCNChar = _React$useState4[1];

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      autoInsertSpaceInButton = _React$useContext.autoInsertSpaceInButton,
      direction = _React$useContext.direction;

  var buttonRef = ref || /*#__PURE__*/React.createRef();
  var delayTimeoutRef = React.useRef();

  var isNeedInserted = function isNeedInserted() {
    return React.Children.count(children) === 1 && !icon && !isUnborderedButtonType(type);
  };

  var fixTwoCNChar = function fixTwoCNChar() {
    // Fix for HOC usage like <FormatMessage />
    if (!buttonRef || !buttonRef.current || autoInsertSpaceInButton === false) {
      return;
    }

    var buttonText = buttonRef.current.textContent;

    if (isNeedInserted() && isTwoCNChar(buttonText)) {
      if (!hasTwoCNChar) {
        setHasTwoCNChar(true);
      }
    } else if (hasTwoCNChar) {
      setHasTwoCNChar(false);
    }
  }; // =============== Update Loading ===============


  var loadingOrDelay;

  if ((0, _typeof2["default"])(loading) === 'object' && loading.delay) {
    loadingOrDelay = loading.delay || true;
  } else {
    loadingOrDelay = !!loading;
  }

  React.useEffect(function () {
    clearTimeout(delayTimeoutRef.current);

    if (typeof loadingOrDelay === 'number') {
      delayTimeoutRef.current = window.setTimeout(function () {
        setLoading(loadingOrDelay);
      }, loadingOrDelay);
    } else {
      setLoading(loadingOrDelay);
    }
  }, [loadingOrDelay]);
  React.useEffect(function () {
    fixTwoCNChar();
  }, [buttonRef]);

  var handleClick = function handleClick(e) {
    var onClick = props.onClick;

    if (innerLoading) {
      return;
    }

    if (onClick) {
      onClick(e);
    }
  };

  (0, _devWarning["default"])(!(typeof icon === 'string' && icon.length > 2), 'Button', "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon, "` at https://ant.design/components/icon"));
  (0, _devWarning["default"])(!(ghost && isUnborderedButtonType(type)), 'Button', "`link` or `text` button can't be a `ghost` button.");
  var prefixCls = getPrefixCls('btn', customizePrefixCls);
  var autoInsertSpace = autoInsertSpaceInButton !== false; // large => lg
  // small => sm

  var sizeCls = '';

  switch (customizeSize || size) {
    case 'large':
      sizeCls = 'lg';
      break;

    case 'small':
      sizeCls = 'sm';
      break;

    default:
      break;
  }

  var iconType = innerLoading ? 'loading' : icon;
  var classes = (0, _classnames["default"])(prefixCls, className, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(type), type), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(shape), shape), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-icon-only"), !children && children !== 0 && iconType), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-background-ghost"), ghost && !isUnborderedButtonType(type)), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-loading"), innerLoading), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-two-chinese-chars"), hasTwoCNChar && autoInsertSpace), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-block"), block), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-dangerous"), !!danger), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames));
  var iconNode = icon && !innerLoading ? icon : /*#__PURE__*/React.createElement(_LoadingIcon["default"], {
    existIcon: !!icon,
    prefixCls: prefixCls,
    loading: !!innerLoading
  });
  var kids = children || children === 0 ? spaceChildren(children, isNeedInserted() && autoInsertSpace) : null;
  var linkButtonRestProps = (0, _omit["default"])(rest, ['htmlType', 'loading']);

  if (linkButtonRestProps.href !== undefined) {
    return /*#__PURE__*/React.createElement("a", (0, _extends2["default"])({}, linkButtonRestProps, {
      className: classes,
      onClick: handleClick,
      ref: buttonRef
    }), iconNode, kids);
  } // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.


  var _a = rest,
      htmlType = _a.htmlType,
      otherProps = __rest(_a, ["htmlType"]);

  var buttonNode = /*#__PURE__*/React.createElement("button", (0, _extends2["default"])({}, (0, _omit["default"])(otherProps, ['loading']), {
    type: htmlType,
    className: classes,
    onClick: handleClick,
    ref: buttonRef
  }), iconNode, kids);

  if (isUnborderedButtonType(type)) {
    return buttonNode;
  }

  return /*#__PURE__*/React.createElement(_wave["default"], null, buttonNode);
};

var Button = /*#__PURE__*/React.forwardRef(InternalButton);
Button.displayName = 'Button';
Button.defaultProps = {
  loading: false,
  ghost: false,
  block: false,
  htmlType: 'button'
};
Button.Group = _buttonGroup["default"];
Button.__ANT_BUTTON = true;
var _default = Button;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/button/index.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/button/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _button = _interopRequireDefault(__webpack_require__(/*! ./button */ "./node_modules/antd/lib/button/button.js"));

var _default = _button["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/calendar/locale/en_US.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/calendar/locale/en_US.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en_US = _interopRequireDefault(__webpack_require__(/*! ../../date-picker/locale/en_US */ "./node_modules/antd/lib/date-picker/locale/en_US.js"));

var _default = _en_US["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/checkbox/Checkbox.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/checkbox/Checkbox.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _rcCheckbox = _interopRequireDefault(__webpack_require__(/*! rc-checkbox */ "./node_modules/rc-checkbox/es/index.js"));

var _Group = __webpack_require__(/*! ./Group */ "./node_modules/antd/lib/checkbox/Group.js");

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var Checkbox = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(Checkbox, _React$PureComponent);

  var _super = (0, _createSuper2["default"])(Checkbox);

  function Checkbox() {
    var _this;

    (0, _classCallCheck2["default"])(this, Checkbox);
    _this = _super.apply(this, arguments);

    _this.saveCheckbox = function (node) {
      _this.rcCheckbox = node;
    };

    _this.renderCheckbox = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls,
          direction = _ref.direction;

      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize.props,
          context = _assertThisInitialize.context;

      var customizePrefixCls = props.prefixCls,
          className = props.className,
          children = props.children,
          indeterminate = props.indeterminate,
          style = props.style,
          onMouseEnter = props.onMouseEnter,
          onMouseLeave = props.onMouseLeave,
          restProps = __rest(props, ["prefixCls", "className", "children", "indeterminate", "style", "onMouseEnter", "onMouseLeave"]);

      var checkboxGroup = context;
      var prefixCls = getPrefixCls('checkbox', customizePrefixCls);
      var checkboxProps = (0, _extends2["default"])({}, restProps);

      if (checkboxGroup) {
        checkboxProps.onChange = function () {
          if (restProps.onChange) {
            restProps.onChange.apply(restProps, arguments);
          }

          checkboxGroup.toggleOption({
            label: children,
            value: props.value
          });
        };

        checkboxProps.name = checkboxGroup.name;
        checkboxProps.checked = checkboxGroup.value.indexOf(props.value) !== -1;
        checkboxProps.disabled = props.disabled || checkboxGroup.disabled;
      }

      var classString = (0, _classnames["default"])(className, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper"), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper-checked"), checkboxProps.checked), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper-disabled"), checkboxProps.disabled), _classNames));
      var checkboxClass = (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(prefixCls, "-indeterminate"), indeterminate));
      return (
        /*#__PURE__*/
        // eslint-disable-next-line jsx-a11y/label-has-associated-control
        React.createElement("label", {
          className: classString,
          style: style,
          onMouseEnter: onMouseEnter,
          onMouseLeave: onMouseLeave
        }, /*#__PURE__*/React.createElement(_rcCheckbox["default"], (0, _extends2["default"])({}, checkboxProps, {
          prefixCls: prefixCls,
          className: checkboxClass,
          ref: _this.saveCheckbox
        })), children !== undefined && /*#__PURE__*/React.createElement("span", null, children))
      );
    };

    return _this;
  }

  (0, _createClass2["default"])(Checkbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _a;

      var value = this.props.value;
      (_a = this.context) === null || _a === void 0 ? void 0 : _a.registerValue(value);
      (0, _devWarning["default"])('checked' in this.props || this.context || !('value' in this.props), 'Checkbox', '`value` is not a valid prop, do you mean `checked`?');
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref2) {
      var prevValue = _ref2.value;

      var _a, _b;

      var value = this.props.value;

      if (value !== prevValue) {
        (_a = this.context) === null || _a === void 0 ? void 0 : _a.cancelValue(prevValue);
        (_b = this.context) === null || _b === void 0 ? void 0 : _b.registerValue(value);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _a;

      var value = this.props.value;
      (_a = this.context) === null || _a === void 0 ? void 0 : _a.cancelValue(value);
    }
  }, {
    key: "focus",
    value: function focus() {
      this.rcCheckbox.focus();
    }
  }, {
    key: "blur",
    value: function blur() {
      this.rcCheckbox.blur();
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderCheckbox);
    }
  }]);
  return Checkbox;
}(React.PureComponent);

Checkbox.__ANT_CHECKBOX = true;
Checkbox.defaultProps = {
  indeterminate: false
};
Checkbox.contextType = _Group.GroupContext;
var _default = Checkbox;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/checkbox/Group.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/checkbox/Group.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GroupContext = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _Checkbox = _interopRequireDefault(__webpack_require__(/*! ./Checkbox */ "./node_modules/antd/lib/checkbox/Checkbox.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var GroupContext = /*#__PURE__*/React.createContext(null);
exports.GroupContext = GroupContext;

var CheckboxGroup = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inherits2["default"])(CheckboxGroup, _React$PureComponent);

  var _super = (0, _createSuper2["default"])(CheckboxGroup);

  function CheckboxGroup(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, CheckboxGroup);
    _this = _super.call(this, props);

    _this.cancelValue = function (value) {
      _this.setState(function (_ref) {
        var registeredValues = _ref.registeredValues;
        return {
          registeredValues: registeredValues.filter(function (val) {
            return val !== value;
          })
        };
      });
    };

    _this.registerValue = function (value) {
      _this.setState(function (_ref2) {
        var registeredValues = _ref2.registeredValues;
        return {
          registeredValues: [].concat((0, _toConsumableArray2["default"])(registeredValues), [value])
        };
      });
    };

    _this.toggleOption = function (option) {
      var registeredValues = _this.state.registeredValues;

      var optionIndex = _this.state.value.indexOf(option.value);

      var value = (0, _toConsumableArray2["default"])(_this.state.value);

      if (optionIndex === -1) {
        value.push(option.value);
      } else {
        value.splice(optionIndex, 1);
      }

      if (!('value' in _this.props)) {
        _this.setState({
          value: value
        });
      }

      var onChange = _this.props.onChange;

      if (onChange) {
        var options = _this.getOptions();

        onChange(value.filter(function (val) {
          return registeredValues.indexOf(val) !== -1;
        }).sort(function (a, b) {
          var indexA = options.findIndex(function (opt) {
            return opt.value === a;
          });
          var indexB = options.findIndex(function (opt) {
            return opt.value === b;
          });
          return indexA - indexB;
        }));
      }
    };

    _this.renderGroup = function (_ref3) {
      var getPrefixCls = _ref3.getPrefixCls,
          direction = _ref3.direction;

      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize.props,
          state = _assertThisInitialize.state;

      var customizePrefixCls = props.prefixCls,
          className = props.className,
          style = props.style,
          options = props.options,
          restProps = __rest(props, ["prefixCls", "className", "style", "options"]);

      var prefixCls = getPrefixCls('checkbox', customizePrefixCls);
      var groupPrefixCls = "".concat(prefixCls, "-group");
      var domProps = (0, _omit["default"])(restProps, ['children', 'defaultValue', 'value', 'onChange', 'disabled']);
      var children = props.children;

      if (options && options.length > 0) {
        children = _this.getOptions().map(function (option) {
          return /*#__PURE__*/React.createElement(_Checkbox["default"], {
            prefixCls: prefixCls,
            key: option.value.toString(),
            disabled: 'disabled' in option ? option.disabled : props.disabled,
            value: option.value,
            checked: state.value.indexOf(option.value) !== -1,
            onChange: option.onChange,
            className: "".concat(groupPrefixCls, "-item"),
            style: option.style
          }, option.label);
        });
      }

      var context = {
        toggleOption: _this.toggleOption,
        value: _this.state.value,
        disabled: _this.props.disabled,
        name: _this.props.name,
        // https://github.com/ant-design/ant-design/issues/16376
        registerValue: _this.registerValue,
        cancelValue: _this.cancelValue
      };
      var classString = (0, _classnames["default"])(groupPrefixCls, className, (0, _defineProperty2["default"])({}, "".concat(groupPrefixCls, "-rtl"), direction === 'rtl'));
      return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
        className: classString,
        style: style
      }, domProps), /*#__PURE__*/React.createElement(GroupContext.Provider, {
        value: context
      }, children));
    };

    _this.state = {
      value: props.value || props.defaultValue || [],
      registeredValues: []
    };
    return _this;
  }

  (0, _createClass2["default"])(CheckboxGroup, [{
    key: "getOptions",
    value: function getOptions() {
      var options = this.props.options; // https://github.com/Microsoft/TypeScript/issues/7960

      return options.map(function (option) {
        if (typeof option === 'string') {
          return {
            label: option,
            value: option
          };
        }

        return option;
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderGroup);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('value' in nextProps) {
        return {
          value: nextProps.value || []
        };
      }

      return null;
    }
  }]);
  return CheckboxGroup;
}(React.PureComponent);

CheckboxGroup.defaultProps = {
  options: []
};
var _default = CheckboxGroup;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/checkbox/index.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/checkbox/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Checkbox = _interopRequireDefault(__webpack_require__(/*! ./Checkbox */ "./node_modules/antd/lib/checkbox/Checkbox.js"));

var _Group = _interopRequireDefault(__webpack_require__(/*! ./Group */ "./node_modules/antd/lib/checkbox/Group.js"));

_Checkbox["default"].Group = _Group["default"];
var _default = _Checkbox["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/SizeContext.js":
/*!**************************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/SizeContext.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SizeContextProvider = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var SizeContext = /*#__PURE__*/React.createContext(undefined);

var SizeContextProvider = function SizeContextProvider(_ref) {
  var children = _ref.children,
      size = _ref.size;
  return /*#__PURE__*/React.createElement(SizeContext.Consumer, null, function (originSize) {
    return /*#__PURE__*/React.createElement(SizeContext.Provider, {
      value: size || originSize
    }, children);
  });
};

exports.SizeContextProvider = SizeContextProvider;
var _default = SizeContext;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/context.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/context.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withConfigConsumer = withConfigConsumer;
exports.ConfigConsumer = exports.ConfigContext = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _renderEmpty = _interopRequireDefault(__webpack_require__(/*! ./renderEmpty */ "./node_modules/antd/lib/config-provider/renderEmpty.js"));

var ConfigContext = /*#__PURE__*/React.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
    if (customizePrefixCls) return customizePrefixCls;
    return suffixCls ? "ant-".concat(suffixCls) : 'ant';
  },
  renderEmpty: _renderEmpty["default"]
});
exports.ConfigContext = ConfigContext;
var ConfigConsumer = ConfigContext.Consumer;
exports.ConfigConsumer = ConfigConsumer;

function withConfigConsumer(config) {
  return function withConfigConsumerFunc(Component) {
    // Wrap with ConfigConsumer. Since we need compatible with react 15, be care when using ref methods
    var SFC = function SFC(props) {
      return /*#__PURE__*/React.createElement(ConfigConsumer, null, function (configProps) {
        var basicPrefixCls = config.prefixCls;
        var getPrefixCls = configProps.getPrefixCls;
        var customizePrefixCls = props.prefixCls;
        var prefixCls = getPrefixCls(basicPrefixCls, customizePrefixCls);
        return /*#__PURE__*/React.createElement(Component, (0, _extends2["default"])({}, configProps, props, {
          prefixCls: prefixCls
        }));
      });
    };

    var cons = Component.constructor;
    var name = cons && cons.displayName || Component.name || 'Component';
    SFC.displayName = "withConfigConsumer(".concat(name, ")");
    return SFC;
  };
}

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/index.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ConfigConsumer", {
  enumerable: true,
  get: function get() {
    return _context.ConfigConsumer;
  }
});
Object.defineProperty(exports, "ConfigContext", {
  enumerable: true,
  get: function get() {
    return _context.ConfigContext;
  }
});
exports["default"] = exports.configConsumerProps = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcFieldForm = __webpack_require__(/*! rc-field-form */ "./node_modules/rc-field-form/es/index.js");

var _localeProvider = _interopRequireWildcard(__webpack_require__(/*! ../locale-provider */ "./node_modules/antd/lib/locale-provider/index.js"));

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _context = __webpack_require__(/*! ./context */ "./node_modules/antd/lib/config-provider/context.js");

var _SizeContext = __webpack_require__(/*! ./SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js");

var _message = _interopRequireDefault(__webpack_require__(/*! ../message */ "./node_modules/antd/lib/message/index.js"));

var _notification = _interopRequireDefault(__webpack_require__(/*! ../notification */ "./node_modules/antd/lib/notification/index.js"));

// TODO: remove this lint
// SFC has specified a displayName, but not worked.

/* eslint-disable react/display-name */
var configConsumerProps = ['getTargetContainer', 'getPopupContainer', 'rootPrefixCls', 'getPrefixCls', 'renderEmpty', 'csp', 'autoInsertSpaceInButton', 'locale', 'pageHeader'];
exports.configConsumerProps = configConsumerProps;

var ConfigProvider = function ConfigProvider(props) {
  React.useEffect(function () {
    if (props.direction) {
      _message["default"].config({
        rtl: props.direction === 'rtl'
      });

      _notification["default"].config({
        rtl: props.direction === 'rtl'
      });
    }
  }, [props.direction]);

  var getPrefixClsWrapper = function getPrefixClsWrapper(context) {
    return function (suffixCls, customizePrefixCls) {
      var prefixCls = props.prefixCls;
      if (customizePrefixCls) return customizePrefixCls;
      var mergedPrefixCls = prefixCls || context.getPrefixCls('');
      return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
    };
  };

  var renderProvider = function renderProvider(context, legacyLocale) {
    var children = props.children,
        getTargetContainer = props.getTargetContainer,
        getPopupContainer = props.getPopupContainer,
        renderEmpty = props.renderEmpty,
        csp = props.csp,
        autoInsertSpaceInButton = props.autoInsertSpaceInButton,
        form = props.form,
        input = props.input,
        locale = props.locale,
        pageHeader = props.pageHeader,
        componentSize = props.componentSize,
        direction = props.direction,
        space = props.space,
        virtual = props.virtual,
        dropdownMatchSelectWidth = props.dropdownMatchSelectWidth;
    var config = (0, _extends2["default"])((0, _extends2["default"])({}, context), {
      getPrefixCls: getPrefixClsWrapper(context),
      csp: csp,
      autoInsertSpaceInButton: autoInsertSpaceInButton,
      locale: locale || legacyLocale,
      direction: direction,
      space: space,
      virtual: virtual,
      dropdownMatchSelectWidth: dropdownMatchSelectWidth
    });

    if (getTargetContainer) {
      config.getTargetContainer = getTargetContainer;
    }

    if (getPopupContainer) {
      config.getPopupContainer = getPopupContainer;
    }

    if (renderEmpty) {
      config.renderEmpty = renderEmpty;
    }

    if (pageHeader) {
      config.pageHeader = pageHeader;
    }

    if (input) {
      config.input = input;
    }

    var childNode = children; // Additional Form provider

    var validateMessages = {};

    if (locale && locale.Form && locale.Form.defaultValidateMessages) {
      validateMessages = locale.Form.defaultValidateMessages;
    }

    if (form && form.validateMessages) {
      validateMessages = (0, _extends2["default"])((0, _extends2["default"])({}, validateMessages), form.validateMessages);
    }

    if (Object.keys(validateMessages).length > 0) {
      childNode = /*#__PURE__*/React.createElement(_rcFieldForm.FormProvider, {
        validateMessages: validateMessages
      }, children);
    }

    return /*#__PURE__*/React.createElement(_SizeContext.SizeContextProvider, {
      size: componentSize
    }, /*#__PURE__*/React.createElement(_context.ConfigContext.Provider, {
      value: config
    }, /*#__PURE__*/React.createElement(_localeProvider["default"], {
      locale: locale || legacyLocale,
      _ANT_MARK__: _localeProvider.ANT_MARK
    }, childNode)));
  };

  return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], null, function (_, __, legacyLocale) {
    return /*#__PURE__*/React.createElement(_context.ConfigConsumer, null, function (context) {
      return renderProvider(context, legacyLocale);
    });
  });
};

var _default = ConfigProvider;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/config-provider/renderEmpty.js":
/*!**************************************************************!*\
  !*** ./node_modules/antd/lib/config-provider/renderEmpty.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ../empty */ "./node_modules/antd/lib/empty/index.js"));

var _ = __webpack_require__(/*! . */ "./node_modules/antd/lib/config-provider/index.js");

var renderEmpty = function renderEmpty(componentName) {
  return /*#__PURE__*/React.createElement(_.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls;
    var prefix = getPrefixCls('empty');

    switch (componentName) {
      case 'Table':
      case 'List':
        return /*#__PURE__*/React.createElement(_empty["default"], {
          image: _empty["default"].PRESENTED_IMAGE_SIMPLE
        });

      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return /*#__PURE__*/React.createElement(_empty["default"], {
          image: _empty["default"].PRESENTED_IMAGE_SIMPLE,
          className: "".concat(prefix, "-small")
        });

      default:
        return /*#__PURE__*/React.createElement(_empty["default"], null);
    }
  });
};

var _default = renderEmpty;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/date-picker/locale/en_US.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/date-picker/locale/en_US.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _en_US = _interopRequireDefault(__webpack_require__(/*! rc-picker/lib/locale/en_US */ "./node_modules/rc-picker/lib/locale/en_US.js"));

var _en_US2 = _interopRequireDefault(__webpack_require__(/*! ../../time-picker/locale/en_US */ "./node_modules/antd/lib/time-picker/locale/en_US.js"));

// Merge into a locale object
var locale = {
  lang: (0, _extends2["default"])({
    placeholder: 'Select date',
    yearPlaceholder: 'Select year',
    quarterPlaceholder: 'Select quarter',
    monthPlaceholder: 'Select month',
    weekPlaceholder: 'Select week',
    rangePlaceholder: ['Start date', 'End date'],
    rangeYearPlaceholder: ['Start year', 'End year'],
    rangeMonthPlaceholder: ['Start month', 'End month'],
    rangeWeekPlaceholder: ['Start week', 'End week']
  }, _en_US["default"]),
  timePickerLocale: (0, _extends2["default"])({}, _en_US2["default"])
}; // All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json

var _default = locale;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/dropdown/dropdown-button.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/dropdown/dropdown-button.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _EllipsisOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/EllipsisOutlined */ "./node_modules/antd/node_modules/@ant-design/icons/EllipsisOutlined.js"));

var _button = _interopRequireDefault(__webpack_require__(/*! ../button */ "./node_modules/antd/lib/button/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _dropdown = _interopRequireDefault(__webpack_require__(/*! ./dropdown */ "./node_modules/antd/lib/dropdown/dropdown.js"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var ButtonGroup = _button["default"].Group;

var DropdownButton = function DropdownButton(props) {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var customizePrefixCls = props.prefixCls,
      type = props.type,
      disabled = props.disabled,
      onClick = props.onClick,
      htmlType = props.htmlType,
      children = props.children,
      className = props.className,
      overlay = props.overlay,
      trigger = props.trigger,
      align = props.align,
      visible = props.visible,
      onVisibleChange = props.onVisibleChange,
      placement = props.placement,
      getPopupContainer = props.getPopupContainer,
      href = props.href,
      _props$icon = props.icon,
      icon = _props$icon === void 0 ? /*#__PURE__*/React.createElement(_EllipsisOutlined["default"], null) : _props$icon,
      title = props.title,
      buttonsRender = props.buttonsRender,
      restProps = __rest(props, ["prefixCls", "type", "disabled", "onClick", "htmlType", "children", "className", "overlay", "trigger", "align", "visible", "onVisibleChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender"]);

  var prefixCls = getPrefixCls('dropdown-button', customizePrefixCls);
  var dropdownProps = {
    align: align,
    overlay: overlay,
    disabled: disabled,
    trigger: disabled ? [] : trigger,
    onVisibleChange: onVisibleChange,
    getPopupContainer: getPopupContainer || getContextPopupContainer
  };

  if ('visible' in props) {
    dropdownProps.visible = visible;
  }

  if ('placement' in props) {
    dropdownProps.placement = placement;
  } else {
    dropdownProps.placement = direction === 'rtl' ? 'bottomLeft' : 'bottomRight';
  }

  var leftButton = /*#__PURE__*/React.createElement(_button["default"], {
    type: type,
    disabled: disabled,
    onClick: onClick,
    htmlType: htmlType,
    href: href,
    title: title
  }, children);
  var rightButton = /*#__PURE__*/React.createElement(_button["default"], {
    type: type,
    icon: icon
  });

  var _buttonsRender = buttonsRender([leftButton, rightButton]),
      _buttonsRender2 = (0, _slicedToArray2["default"])(_buttonsRender, 2),
      leftButtonToRender = _buttonsRender2[0],
      rightButtonToRender = _buttonsRender2[1];

  return /*#__PURE__*/React.createElement(ButtonGroup, (0, _extends2["default"])({}, restProps, {
    className: (0, _classnames["default"])(prefixCls, className)
  }), leftButtonToRender, /*#__PURE__*/React.createElement(_dropdown["default"], dropdownProps, rightButtonToRender));
};

DropdownButton.__ANT_BUTTON = true;
DropdownButton.defaultProps = {
  type: 'default',
  buttonsRender: function buttonsRender(buttons) {
    return buttons;
  }
};
var _default = DropdownButton;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/dropdown/dropdown.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/dropdown/dropdown.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcDropdown = _interopRequireDefault(__webpack_require__(/*! rc-dropdown */ "./node_modules/rc-dropdown/es/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _RightOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/RightOutlined */ "./node_modules/antd/node_modules/@ant-design/icons/RightOutlined.js"));

var _dropdownButton = _interopRequireDefault(__webpack_require__(/*! ./dropdown-button */ "./node_modules/antd/lib/dropdown/dropdown-button.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _type = __webpack_require__(/*! ../_util/type */ "./node_modules/antd/lib/_util/type.js");

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

var Placements = (0, _type.tuple)('topLeft', 'topCenter', 'topRight', 'bottomLeft', 'bottomCenter', 'bottomRight');

var Dropdown = function Dropdown(props) {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var getTransitionName = function getTransitionName() {
    var _props$placement = props.placement,
        placement = _props$placement === void 0 ? '' : _props$placement,
        transitionName = props.transitionName;

    if (transitionName !== undefined) {
      return transitionName;
    }

    if (placement.indexOf('top') >= 0) {
      return 'slide-down';
    }

    return 'slide-up';
  };

  var renderOverlay = function renderOverlay(prefixCls) {
    // rc-dropdown already can process the function of overlay, but we have check logic here.
    // So we need render the element to check and pass back to rc-dropdown.
    var overlay = props.overlay;
    var overlayNode;

    if (typeof overlay === 'function') {
      overlayNode = overlay();
    } else {
      overlayNode = overlay;
    }

    overlayNode = React.Children.only(typeof overlayNode === 'string' ? /*#__PURE__*/React.createElement("span", null, "overlayNode") : overlayNode);
    var overlayProps = overlayNode.props; // Warning if use other mode

    (0, _devWarning["default"])(!overlayProps.mode || overlayProps.mode === 'vertical', 'Dropdown', "mode=\"".concat(overlayProps.mode, "\" is not supported for Dropdown's Menu.")); // menu cannot be selectable in dropdown defaultly
    // menu should be focusable in dropdown defaultly

    var _overlayProps$selecta = overlayProps.selectable,
        selectable = _overlayProps$selecta === void 0 ? false : _overlayProps$selecta,
        _overlayProps$focusab = overlayProps.focusable,
        focusable = _overlayProps$focusab === void 0 ? true : _overlayProps$focusab;
    var expandIcon = /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-menu-submenu-arrow")
    }, /*#__PURE__*/React.createElement(_RightOutlined["default"], {
      className: "".concat(prefixCls, "-menu-submenu-arrow-icon")
    }));
    var fixedModeOverlay = typeof overlayNode.type === 'string' ? overlayNode : (0, _reactNode.cloneElement)(overlayNode, {
      mode: 'vertical',
      selectable: selectable,
      focusable: focusable,
      expandIcon: expandIcon
    });
    return fixedModeOverlay;
  };

  var getPlacement = function getPlacement() {
    var placement = props.placement;

    if (placement !== undefined) {
      return placement;
    }

    return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  };

  var arrow = props.arrow,
      customizePrefixCls = props.prefixCls,
      children = props.children,
      trigger = props.trigger,
      disabled = props.disabled,
      getPopupContainer = props.getPopupContainer,
      overlayClassName = props.overlayClassName;
  var prefixCls = getPrefixCls('dropdown', customizePrefixCls);
  var child = React.Children.only(children);
  var dropdownTrigger = (0, _reactNode.cloneElement)(child, {
    className: (0, _classnames["default"])(child.props.className, "".concat(prefixCls, "-trigger"), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl')),
    disabled: disabled
  });
  var overlayClassNameCustomized = (0, _classnames["default"])(overlayClassName, (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-rtl"), direction === 'rtl'));
  var triggerActions = disabled ? [] : trigger;
  var alignPoint;

  if (triggerActions && triggerActions.indexOf('contextMenu') !== -1) {
    alignPoint = true;
  }

  return /*#__PURE__*/React.createElement(_rcDropdown["default"], (0, _extends2["default"])({
    arrow: arrow,
    alignPoint: alignPoint
  }, props, {
    overlayClassName: overlayClassNameCustomized,
    prefixCls: prefixCls,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    transitionName: getTransitionName(),
    trigger: triggerActions,
    overlay: function overlay() {
      return renderOverlay(prefixCls);
    },
    placement: getPlacement()
  }), dropdownTrigger);
};

Dropdown.Button = _dropdownButton["default"];
Dropdown.defaultProps = {
  mouseEnterDelay: 0.15,
  mouseLeaveDelay: 0.1
};
var _default = Dropdown;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/dropdown/index.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/dropdown/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dropdown = _interopRequireDefault(__webpack_require__(/*! ./dropdown */ "./node_modules/antd/lib/dropdown/dropdown.js"));

var _default = _dropdown["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/empty/empty.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/empty/empty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var Empty = function Empty() {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-default');
  return /*#__PURE__*/React.createElement("svg", {
    className: prefixCls,
    width: "184",
    height: "152",
    viewBox: "0 0 184 152",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(24 31.67)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "67.797",
    cy: "106.89",
    rx: "67.797",
    ry: "12.668"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-1"),
    d: "M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-2"),
    d: "M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",
    transform: "translate(13.56)"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-3"),
    d: "M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  }), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-4"),
    d: "M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  })), /*#__PURE__*/React.createElement("path", {
    className: "".concat(prefixCls, "-path-5"),
    d: "M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  }), /*#__PURE__*/React.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    transform: "translate(149.65 15.383)"
  }, /*#__PURE__*/React.createElement("ellipse", {
    cx: "20.654",
    cy: "3.167",
    rx: "2.849",
    ry: "2.815"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"
  }))));
};

var _default = Empty;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/empty/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/empty/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _LocaleReceiver = _interopRequireDefault(__webpack_require__(/*! ../locale-provider/LocaleReceiver */ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js"));

var _empty = _interopRequireDefault(__webpack_require__(/*! ./empty */ "./node_modules/antd/lib/empty/empty.js"));

var _simple = _interopRequireDefault(__webpack_require__(/*! ./simple */ "./node_modules/antd/lib/empty/simple.js"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var defaultEmptyImg = /*#__PURE__*/React.createElement(_empty["default"], null);
var simpleEmptyImg = /*#__PURE__*/React.createElement(_simple["default"], null);

var Empty = function Empty(props) {
  return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, function (_ref) {
    var getPrefixCls = _ref.getPrefixCls,
        direction = _ref.direction;

    var className = props.className,
        customizePrefixCls = props.prefixCls,
        _props$image = props.image,
        image = _props$image === void 0 ? defaultEmptyImg : _props$image,
        description = props.description,
        children = props.children,
        imageStyle = props.imageStyle,
        restProps = __rest(props, ["className", "prefixCls", "image", "description", "children", "imageStyle"]);

    return /*#__PURE__*/React.createElement(_LocaleReceiver["default"], {
      componentName: "Empty"
    }, function (locale) {
      var _classNames;

      var prefixCls = getPrefixCls('empty', customizePrefixCls);
      var des = typeof description !== 'undefined' ? description : locale.description;
      var alt = typeof des === 'string' ? des : 'empty';
      var imageNode = null;

      if (typeof image === 'string') {
        imageNode = /*#__PURE__*/React.createElement("img", {
          alt: alt,
          src: image
        });
      } else {
        imageNode = image;
      }

      return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
        className: (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-normal"), image === simpleEmptyImg), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className)
      }, restProps), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-image"),
        style: imageStyle
      }, imageNode), des && /*#__PURE__*/React.createElement("p", {
        className: "".concat(prefixCls, "-description")
      }, des), children && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-footer")
      }, children));
    });
  });
};

Empty.PRESENTED_IMAGE_DEFAULT = defaultEmptyImg;
Empty.PRESENTED_IMAGE_SIMPLE = simpleEmptyImg;
var _default = Empty;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/empty/simple.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/empty/simple.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var Simple = function Simple() {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var prefixCls = getPrefixCls('empty-img-simple');
  return /*#__PURE__*/React.createElement("svg", {
    className: prefixCls,
    width: "64",
    height: "41",
    viewBox: "0 0 64 41",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(0 1)",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("ellipse", {
    className: "".concat(prefixCls, "-ellipse"),
    cx: "32",
    cy: "33",
    rx: "32",
    ry: "7"
  }), /*#__PURE__*/React.createElement("g", {
    className: "".concat(prefixCls, "-g"),
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",
    className: "".concat(prefixCls, "-path")
  }))));
};

var _default = Simple;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/layout/Sider.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/layout/Sider.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SiderContext = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _BarsOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/BarsOutlined */ "./node_modules/antd/node_modules/@ant-design/icons/BarsOutlined.js"));

var _RightOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/RightOutlined */ "./node_modules/antd/node_modules/@ant-design/icons/RightOutlined.js"));

var _LeftOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/LeftOutlined */ "./node_modules/antd/node_modules/@ant-design/icons/LeftOutlined.js"));

var _layout = __webpack_require__(/*! ./layout */ "./node_modules/antd/lib/layout/layout.js");

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _isNumeric = _interopRequireDefault(__webpack_require__(/*! ../_util/isNumeric */ "./node_modules/antd/lib/_util/isNumeric.js"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var dimensionMaxMap = {
  xs: '479.98px',
  sm: '575.98px',
  md: '767.98px',
  lg: '991.98px',
  xl: '1199.98px',
  xxl: '1599.98px'
};
var SiderContext = /*#__PURE__*/React.createContext({});
exports.SiderContext = SiderContext;

var generateId = function () {
  var i = 0;
  return function () {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    i += 1;
    return "".concat(prefix).concat(i);
  };
}();

var InternalSider = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(InternalSider, _React$Component);

  var _super = (0, _createSuper2["default"])(InternalSider);

  function InternalSider(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, InternalSider);
    _this = _super.call(this, props);

    _this.responsiveHandler = function (mql) {
      _this.setState({
        below: mql.matches
      });

      var onBreakpoint = _this.props.onBreakpoint;

      if (onBreakpoint) {
        onBreakpoint(mql.matches);
      }

      if (_this.state.collapsed !== mql.matches) {
        _this.setCollapsed(mql.matches, 'responsive');
      }
    };

    _this.setCollapsed = function (collapsed, type) {
      if (!('collapsed' in _this.props)) {
        _this.setState({
          collapsed: collapsed
        });
      }

      var onCollapse = _this.props.onCollapse;

      if (onCollapse) {
        onCollapse(collapsed, type);
      }
    };

    _this.toggle = function () {
      var collapsed = !_this.state.collapsed;

      _this.setCollapsed(collapsed, 'clickTrigger');
    };

    _this.renderSider = function (_ref) {
      var _classNames;

      var getPrefixCls = _ref.getPrefixCls;

      var _a = _this.props,
          customizePrefixCls = _a.prefixCls,
          className = _a.className,
          theme = _a.theme,
          collapsible = _a.collapsible,
          reverseArrow = _a.reverseArrow,
          trigger = _a.trigger,
          style = _a.style,
          width = _a.width,
          collapsedWidth = _a.collapsedWidth,
          zeroWidthTriggerStyle = _a.zeroWidthTriggerStyle,
          children = _a.children,
          others = __rest(_a, ["prefixCls", "className", "theme", "collapsible", "reverseArrow", "trigger", "style", "width", "collapsedWidth", "zeroWidthTriggerStyle", "children"]);

      var _this$state = _this.state,
          collapsed = _this$state.collapsed,
          below = _this$state.below;
      var prefixCls = getPrefixCls('layout-sider', customizePrefixCls);
      var divProps = (0, _omit["default"])(others, ['collapsed', 'defaultCollapsed', 'onCollapse', 'breakpoint', 'onBreakpoint', 'siderHook', 'zeroWidthTriggerStyle']);
      var rawWidth = collapsed ? collapsedWidth : width; // use "px" as fallback unit for width

      var siderWidth = (0, _isNumeric["default"])(rawWidth) ? "".concat(rawWidth, "px") : String(rawWidth); // special trigger when collapsedWidth == 0

      var zeroWidthTrigger = parseFloat(String(collapsedWidth || 0)) === 0 ? /*#__PURE__*/React.createElement("span", {
        onClick: _this.toggle,
        className: (0, _classnames["default"])("".concat(prefixCls, "-zero-width-trigger"), "".concat(prefixCls, "-zero-width-trigger-").concat(reverseArrow ? 'right' : 'left')),
        style: zeroWidthTriggerStyle
      }, trigger || /*#__PURE__*/React.createElement(_BarsOutlined["default"], null)) : null;
      var iconObj = {
        expanded: reverseArrow ? /*#__PURE__*/React.createElement(_RightOutlined["default"], null) : /*#__PURE__*/React.createElement(_LeftOutlined["default"], null),
        collapsed: reverseArrow ? /*#__PURE__*/React.createElement(_LeftOutlined["default"], null) : /*#__PURE__*/React.createElement(_RightOutlined["default"], null)
      };
      var status = collapsed ? 'collapsed' : 'expanded';
      var defaultTrigger = iconObj[status];
      var triggerDom = trigger !== null ? zeroWidthTrigger || /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-trigger"),
        onClick: _this.toggle,
        style: {
          width: siderWidth
        }
      }, trigger || defaultTrigger) : null;
      var divStyle = (0, _extends2["default"])((0, _extends2["default"])({}, style), {
        flex: "0 0 ".concat(siderWidth),
        maxWidth: siderWidth,
        minWidth: siderWidth,
        width: siderWidth
      });
      var siderCls = (0, _classnames["default"])(className, prefixCls, "".concat(prefixCls, "-").concat(theme), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-collapsed"), !!collapsed), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-has-trigger"), collapsible && trigger !== null && !zeroWidthTrigger), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-below"), !!below), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-zero-width"), parseFloat(siderWidth) === 0), _classNames));
      return /*#__PURE__*/React.createElement("aside", (0, _extends2["default"])({
        className: siderCls
      }, divProps, {
        style: divStyle
      }), /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-children")
      }, children), collapsible || below && zeroWidthTrigger ? triggerDom : null);
    };

    _this.uniqueId = generateId('ant-sider-');
    var matchMedia;

    if (typeof window !== 'undefined') {
      matchMedia = window.matchMedia;
    }

    if (matchMedia && props.breakpoint && props.breakpoint in dimensionMaxMap) {
      _this.mql = matchMedia("(max-width: ".concat(dimensionMaxMap[props.breakpoint], ")"));
    }

    var collapsed;

    if ('collapsed' in props) {
      collapsed = props.collapsed;
    } else {
      collapsed = props.defaultCollapsed;
    }

    _this.state = {
      collapsed: collapsed,
      below: false
    };
    return _this;
  }

  (0, _createClass2["default"])(InternalSider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.mql) {
        this.mql.addListener(this.responsiveHandler);
        this.responsiveHandler(this.mql);
      }

      if (this.props.siderHook) {
        this.props.siderHook.addSider(this.uniqueId);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.mql) {
        this.mql.removeListener(this.responsiveHandler);
      }

      if (this.props.siderHook) {
        this.props.siderHook.removeSider(this.uniqueId);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var collapsed = this.state.collapsed;
      var collapsedWidth = this.props.collapsedWidth;
      return /*#__PURE__*/React.createElement(SiderContext.Provider, {
        value: {
          siderCollapsed: collapsed,
          collapsedWidth: collapsedWidth
        }
      }, /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderSider));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if ('collapsed' in nextProps) {
        return {
          collapsed: nextProps.collapsed
        };
      }

      return null;
    }
  }]);
  return InternalSider;
}(React.Component);

InternalSider.defaultProps = {
  collapsible: false,
  defaultCollapsed: false,
  reverseArrow: false,
  width: 200,
  collapsedWidth: 80,
  style: {},
  theme: 'dark'
}; // eslint-disable-next-line react/prefer-stateless-function

var Sider = /*#__PURE__*/function (_React$Component2) {
  (0, _inherits2["default"])(Sider, _React$Component2);

  var _super2 = (0, _createSuper2["default"])(Sider);

  function Sider() {
    (0, _classCallCheck2["default"])(this, Sider);
    return _super2.apply(this, arguments);
  }

  (0, _createClass2["default"])(Sider, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement(_layout.LayoutContext.Consumer, null, function (context) {
        return /*#__PURE__*/React.createElement(InternalSider, (0, _extends2["default"])({}, context, _this2.props));
      });
    }
  }]);
  return Sider;
}(React.Component);

exports["default"] = Sider;

/***/ }),

/***/ "./node_modules/antd/lib/layout/layout.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/layout/layout.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LayoutContext = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var LayoutContext = /*#__PURE__*/React.createContext({
  siderHook: {
    addSider: function addSider() {
      return null;
    },
    removeSider: function removeSider() {
      return null;
    }
  }
});
exports.LayoutContext = LayoutContext;

function generator(_ref) {
  var suffixCls = _ref.suffixCls,
      tagName = _ref.tagName,
      displayName = _ref.displayName;
  return function (BasicComponent) {
    var _a;

    return _a = /*#__PURE__*/function (_React$Component) {
      (0, _inherits2["default"])(Adapter, _React$Component);

      var _super = (0, _createSuper2["default"])(Adapter);

      function Adapter() {
        var _this;

        (0, _classCallCheck2["default"])(this, Adapter);
        _this = _super.apply(this, arguments);

        _this.renderComponent = function (_ref2) {
          var getPrefixCls = _ref2.getPrefixCls;
          var customizePrefixCls = _this.props.prefixCls;
          var prefixCls = getPrefixCls(suffixCls, customizePrefixCls);
          return /*#__PURE__*/React.createElement(BasicComponent, (0, _extends2["default"])({
            prefixCls: prefixCls,
            tagName: tagName
          }, _this.props));
        };

        return _this;
      }

      (0, _createClass2["default"])(Adapter, [{
        key: "render",
        value: function render() {
          return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderComponent);
        }
      }]);
      return Adapter;
    }(React.Component), _a.displayName = displayName, _a;
  };
}

var Basic = function Basic(props) {
  var prefixCls = props.prefixCls,
      className = props.className,
      children = props.children,
      tagName = props.tagName,
      others = __rest(props, ["prefixCls", "className", "children", "tagName"]);

  var classString = (0, _classnames["default"])(prefixCls, className);
  return /*#__PURE__*/React.createElement(tagName, (0, _extends2["default"])({
    className: classString
  }, others), children);
};

var BasicLayout = /*#__PURE__*/function (_React$Component2) {
  (0, _inherits2["default"])(BasicLayout, _React$Component2);

  var _super2 = (0, _createSuper2["default"])(BasicLayout);

  function BasicLayout() {
    var _this2;

    (0, _classCallCheck2["default"])(this, BasicLayout);
    _this2 = _super2.apply(this, arguments);
    _this2.state = {
      siders: []
    };

    _this2.renderComponent = function (_ref3) {
      var _classNames;

      var direction = _ref3.direction;

      var _a = _this2.props,
          prefixCls = _a.prefixCls,
          className = _a.className,
          children = _a.children,
          hasSider = _a.hasSider,
          Tag = _a.tagName,
          others = __rest(_a, ["prefixCls", "className", "children", "hasSider", "tagName"]);

      var classString = (0, _classnames["default"])(prefixCls, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-has-sider"), typeof hasSider === 'boolean' ? hasSider : _this2.state.siders.length > 0), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
      return /*#__PURE__*/React.createElement(LayoutContext.Provider, {
        value: {
          siderHook: _this2.getSiderHook()
        }
      }, /*#__PURE__*/React.createElement(Tag, (0, _extends2["default"])({
        className: classString
      }, others), children));
    };

    return _this2;
  }

  (0, _createClass2["default"])(BasicLayout, [{
    key: "getSiderHook",
    value: function getSiderHook() {
      var _this3 = this;

      return {
        addSider: function addSider(id) {
          _this3.setState(function (state) {
            return {
              siders: [].concat((0, _toConsumableArray2["default"])(state.siders), [id])
            };
          });
        },
        removeSider: function removeSider(id) {
          _this3.setState(function (state) {
            return {
              siders: state.siders.filter(function (currentId) {
                return currentId !== id;
              })
            };
          });
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderComponent);
    }
  }]);
  return BasicLayout;
}(React.Component);

var Layout = generator({
  suffixCls: 'layout',
  tagName: 'section',
  displayName: 'Layout'
})(BasicLayout);
var Header = generator({
  suffixCls: 'layout-header',
  tagName: 'header',
  displayName: 'Header'
})(Basic);
var Footer = generator({
  suffixCls: 'layout-footer',
  tagName: 'footer',
  displayName: 'Footer'
})(Basic);
var Content = generator({
  suffixCls: 'layout-content',
  tagName: 'main',
  displayName: 'Content'
})(Basic);
Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
var _default = Layout;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/LocaleReceiver.js":
/*!*****************************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/LocaleReceiver.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _default = _interopRequireDefault(__webpack_require__(/*! ./default */ "./node_modules/antd/lib/locale-provider/default.js"));

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./node_modules/antd/lib/locale-provider/context.js"));

var LocaleReceiver = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(LocaleReceiver, _React$Component);

  var _super = (0, _createSuper2["default"])(LocaleReceiver);

  function LocaleReceiver() {
    (0, _classCallCheck2["default"])(this, LocaleReceiver);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(LocaleReceiver, [{
    key: "getLocale",
    value: function getLocale() {
      var _this$props = this.props,
          componentName = _this$props.componentName,
          defaultLocale = _this$props.defaultLocale;
      var locale = defaultLocale || _default["default"][componentName || 'global'];
      var antLocale = this.context;
      var localeFromContext = componentName && antLocale ? antLocale[componentName] : {};
      return (0, _extends2["default"])((0, _extends2["default"])({}, typeof locale === 'function' ? locale() : locale), localeFromContext || {});
    }
  }, {
    key: "getLocaleCode",
    value: function getLocaleCode() {
      var antLocale = this.context;
      var localeCode = antLocale && antLocale.locale; // Had use LocaleProvide but didn't set locale

      if (antLocale && antLocale.exist && !localeCode) {
        return _default["default"].locale;
      }

      return localeCode;
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.getLocale(), this.getLocaleCode(), this.context);
    }
  }]);
  return LocaleReceiver;
}(React.Component);

exports["default"] = LocaleReceiver;
LocaleReceiver.defaultProps = {
  componentName: 'global'
};
LocaleReceiver.contextType = _context["default"];

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/context.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/context.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var LocaleContext = /*#__PURE__*/(0, _react.createContext)(undefined);
var _default = LocaleContext;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/default.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/default.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default2 = _interopRequireDefault(__webpack_require__(/*! ../locale/default */ "./node_modules/antd/lib/locale/default.js"));

var _default = _default2["default"];
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/locale-provider/index.js":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/locale-provider/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ANT_MARK = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _locale = __webpack_require__(/*! ../modal/locale */ "./node_modules/antd/lib/modal/locale.js");

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./node_modules/antd/lib/locale-provider/context.js"));

var ANT_MARK = 'internalMark';
exports.ANT_MARK = ANT_MARK;

var LocaleProvider = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(LocaleProvider, _React$Component);

  var _super = (0, _createSuper2["default"])(LocaleProvider);

  function LocaleProvider(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, LocaleProvider);
    _this = _super.call(this, props);
    (0, _locale.changeConfirmLocale)(props.locale && props.locale.Modal);
    (0, _devWarning["default"])(props._ANT_MARK__ === ANT_MARK, 'LocaleProvider', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale');
    return _this;
  }

  (0, _createClass2["default"])(LocaleProvider, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var locale = this.props.locale;

      if (prevProps.locale !== locale) {
        (0, _locale.changeConfirmLocale)(locale && locale.Modal);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      (0, _locale.changeConfirmLocale)();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          locale = _this$props.locale,
          children = _this$props.children;
      return /*#__PURE__*/React.createElement(_context["default"].Provider, {
        value: (0, _extends2["default"])((0, _extends2["default"])({}, locale), {
          exist: true
        })
      }, children);
    }
  }]);
  return LocaleProvider;
}(React.Component);

exports["default"] = LocaleProvider;
LocaleProvider.defaultProps = {
  locale: {}
};

/***/ }),

/***/ "./node_modules/antd/lib/locale/default.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/locale/default.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _en_US = _interopRequireDefault(__webpack_require__(/*! rc-pagination/lib/locale/en_US */ "./node_modules/rc-pagination/lib/locale/en_US.js"));

var _en_US2 = _interopRequireDefault(__webpack_require__(/*! ../date-picker/locale/en_US */ "./node_modules/antd/lib/date-picker/locale/en_US.js"));

var _en_US3 = _interopRequireDefault(__webpack_require__(/*! ../time-picker/locale/en_US */ "./node_modules/antd/lib/time-picker/locale/en_US.js"));

var _en_US4 = _interopRequireDefault(__webpack_require__(/*! ../calendar/locale/en_US */ "./node_modules/antd/lib/calendar/locale/en_US.js"));

/* eslint-disable no-template-curly-in-string */
var typeTemplate = '${label} is not a valid ${type}';
var localeValues = {
  locale: 'en',
  Pagination: _en_US["default"],
  DatePicker: _en_US2["default"],
  TimePicker: _en_US3["default"],
  Calendar: _en_US4["default"],
  global: {
    placeholder: 'Please select'
  },
  Table: {
    filterTitle: 'Filter menu',
    filterConfirm: 'OK',
    filterReset: 'Reset',
    filterEmptyText: 'No filters',
    selectAll: 'Select current page',
    selectInvert: 'Invert current page',
    selectionAll: 'Select all data',
    sortTitle: 'Sort',
    expand: 'Expand row',
    collapse: 'Collapse row',
    triggerDesc: 'Click sort by descend',
    triggerAsc: 'Click sort by ascend',
    cancelSort: 'Click to cancel sort'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancel',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancel'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remove',
    selectCurrent: 'Select current page',
    removeCurrent: 'Remove current page',
    selectAll: 'Select all data',
    removeAll: 'Remove all data',
    selectInvert: 'Invert current page'
  },
  Upload: {
    uploading: 'Uploading...',
    removeFile: 'Remove file',
    uploadError: 'Upload error',
    previewFile: 'Preview file',
    downloadFile: 'Download file'
  },
  Empty: {
    description: 'No Data'
  },
  Icon: {
    icon: 'icon'
  },
  Text: {
    edit: 'Edit',
    copy: 'Copy',
    copied: 'Copied',
    expand: 'Expand'
  },
  PageHeader: {
    back: 'Back'
  },
  Form: {
    defaultValidateMessages: {
      "default": 'Field validation error ${label}',
      required: 'Please enter ${label}',
      "enum": '${label} must be one of [${enum}]',
      whitespace: '${label} cannot be a blank character',
      date: {
        format: '${label} date format is invalid',
        parse: '${label} cannot be converted to a date',
        invalid: '${label} is an invalid date'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        "boolean": typeTemplate,
        integer: typeTemplate,
        "float": typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} must be ${len} characters',
        min: '${label} at least ${min} characters',
        max: '${label} up to ${max} characters',
        range: '${label} must be between ${min}-${max} characters'
      },
      number: {
        len: '${label} must be equal to ${len}',
        min: '${label} minimum value is ${min}',
        max: '${label} maximum value is ${max}',
        range: '${label} must be between ${min}-${max}'
      },
      array: {
        len: 'Must be ${len} ${label}',
        min: 'At least ${min} ${label}',
        max: 'At most ${max} ${label}',
        range: 'The amount of ${label} must be between ${min}-${max}'
      },
      pattern: {
        mismatch: '${label} does not match the pattern ${pattern}'
      }
    }
  }
};
var _default = localeValues;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/menu/MenuContext.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/menu/MenuContext.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var MenuContext = /*#__PURE__*/(0, _react.createContext)({
  inlineCollapsed: false
});
var _default = MenuContext;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/menu/MenuItem.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/menu/MenuItem.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcMenu = __webpack_require__(/*! rc-menu */ "./node_modules/rc-menu/es/index.js");

var _toArray = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/Children/toArray */ "./node_modules/rc-util/lib/Children/toArray.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _MenuContext = _interopRequireDefault(__webpack_require__(/*! ./MenuContext */ "./node_modules/antd/lib/menu/MenuContext.js"));

var _tooltip = _interopRequireDefault(__webpack_require__(/*! ../tooltip */ "./node_modules/antd/lib/tooltip/index.js"));

var _Sider = __webpack_require__(/*! ../layout/Sider */ "./node_modules/antd/lib/layout/Sider.js");

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var MenuItem = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(MenuItem, _React$Component);

  var _super = (0, _createSuper2["default"])(MenuItem);

  function MenuItem() {
    var _this;

    (0, _classCallCheck2["default"])(this, MenuItem);
    _this = _super.apply(this, arguments);

    _this.onKeyDown = function (e) {
      _this.menuItem.onKeyDown(e);
    };

    _this.saveMenuItem = function (menuItem) {
      _this.menuItem = menuItem;
    };

    _this.renderItem = function (_ref) {
      var siderCollapsed = _ref.siderCollapsed;
      var _this$props = _this.props,
          level = _this$props.level,
          className = _this$props.className,
          children = _this$props.children,
          rootPrefixCls = _this$props.rootPrefixCls;

      var _a = _this.props,
          title = _a.title,
          icon = _a.icon,
          danger = _a.danger,
          rest = __rest(_a, ["title", "icon", "danger"]);

      return /*#__PURE__*/React.createElement(_MenuContext["default"].Consumer, null, function (_ref2) {
        var _classNames;

        var inlineCollapsed = _ref2.inlineCollapsed,
            direction = _ref2.direction;
        var tooltipTitle = title;

        if (typeof title === 'undefined') {
          tooltipTitle = level === 1 ? children : '';
        } else if (title === false) {
          tooltipTitle = '';
        }

        var tooltipProps = {
          title: tooltipTitle
        };

        if (!siderCollapsed && !inlineCollapsed) {
          tooltipProps.title = null; // Reset `visible` to fix control mode tooltip display not correct
          // ref: https://github.com/ant-design/ant-design/issues/16742

          tooltipProps.visible = false;
        }

        var childrenLength = (0, _toArray["default"])(children).length;
        return /*#__PURE__*/React.createElement(_tooltip["default"], (0, _extends2["default"])({}, tooltipProps, {
          placement: direction === 'rtl' ? 'left' : 'right',
          overlayClassName: "".concat(rootPrefixCls, "-inline-collapsed-tooltip")
        }), /*#__PURE__*/React.createElement(_rcMenu.Item, (0, _extends2["default"])({}, rest, {
          className: (0, _classnames["default"])(className, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(rootPrefixCls, "-item-danger"), danger), (0, _defineProperty2["default"])(_classNames, "".concat(rootPrefixCls, "-item-only-child"), (icon ? childrenLength + 1 : childrenLength) === 1), _classNames)),
          title: title,
          ref: _this.saveMenuItem
        }), icon, _this.renderItemChildren(inlineCollapsed)));
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(MenuItem, [{
    key: "renderItemChildren",
    value: function renderItemChildren(inlineCollapsed) {
      var _this$props2 = this.props,
          icon = _this$props2.icon,
          children = _this$props2.children,
          level = _this$props2.level,
          rootPrefixCls = _this$props2.rootPrefixCls; // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
      // ref: https://github.com/ant-design/ant-design/pull/23456

      if (!icon || (0, _reactNode.isValidElement)(children) && children.type === 'span') {
        if (children && inlineCollapsed && level === 1 && typeof children === 'string') {
          return /*#__PURE__*/React.createElement("div", {
            className: "".concat(rootPrefixCls, "-inline-collapsed-noicon")
          }, children.charAt(0));
        }

        return children;
      }

      return /*#__PURE__*/React.createElement("span", null, children);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_Sider.SiderContext.Consumer, null, this.renderItem);
    }
  }]);
  return MenuItem;
}(React.Component);

exports["default"] = MenuItem;
MenuItem.isMenuItem = true;

/***/ }),

/***/ "./node_modules/antd/lib/menu/SubMenu.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/menu/SubMenu.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcMenu = __webpack_require__(/*! rc-menu */ "./node_modules/rc-menu/es/index.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _MenuContext = _interopRequireDefault(__webpack_require__(/*! ./MenuContext */ "./node_modules/antd/lib/menu/MenuContext.js"));

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

var SubMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(SubMenu, _React$Component);

  var _super = (0, _createSuper2["default"])(SubMenu);

  function SubMenu() {
    var _this;

    (0, _classCallCheck2["default"])(this, SubMenu);
    _this = _super.apply(this, arguments);

    _this.onKeyDown = function (e) {
      _this.subMenu.onKeyDown(e);
    };

    _this.saveSubMenu = function (subMenu) {
      _this.subMenu = subMenu;
    };

    return _this;
  }

  (0, _createClass2["default"])(SubMenu, [{
    key: "renderTitle",
    value: function renderTitle(inlineCollapsed) {
      var _this$props = this.props,
          icon = _this$props.icon,
          title = _this$props.title,
          level = _this$props.level,
          rootPrefixCls = _this$props.rootPrefixCls;

      if (!icon) {
        return inlineCollapsed && level === 1 && title && typeof title === 'string' ? /*#__PURE__*/React.createElement("div", {
          className: "".concat(rootPrefixCls, "-inline-collapsed-noicon")
        }, title.charAt(0)) : title;
      } // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
      // ref: https://github.com/ant-design/ant-design/pull/23456


      var titleIsSpan = (0, _reactNode.isValidElement)(title) && title.type === 'span';
      return /*#__PURE__*/React.createElement(React.Fragment, null, icon, titleIsSpan ? title : /*#__PURE__*/React.createElement("span", null, title));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          rootPrefixCls = _this$props2.rootPrefixCls,
          popupClassName = _this$props2.popupClassName;
      return /*#__PURE__*/React.createElement(_MenuContext["default"].Consumer, null, function (_ref) {
        var inlineCollapsed = _ref.inlineCollapsed,
            antdMenuTheme = _ref.antdMenuTheme;
        return /*#__PURE__*/React.createElement(_rcMenu.SubMenu, (0, _extends2["default"])({}, (0, _omit["default"])(_this2.props, ['icon']), {
          title: _this2.renderTitle(inlineCollapsed),
          ref: _this2.saveSubMenu,
          popupClassName: (0, _classnames["default"])(rootPrefixCls, "".concat(rootPrefixCls, "-").concat(antdMenuTheme), popupClassName)
        }));
      });
    }
  }]);
  return SubMenu;
}(React.Component);

SubMenu.contextType = _MenuContext["default"]; // fix issue:https://github.com/ant-design/ant-design/issues/8666

SubMenu.isSubMenu = 1;
var _default = SubMenu;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/menu/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/menu/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcMenu = _interopRequireWildcard(__webpack_require__(/*! rc-menu */ "./node_modules/rc-menu/es/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _SubMenu = _interopRequireDefault(__webpack_require__(/*! ./SubMenu */ "./node_modules/antd/lib/menu/SubMenu.js"));

var _MenuItem = _interopRequireDefault(__webpack_require__(/*! ./MenuItem */ "./node_modules/antd/lib/menu/MenuItem.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _Sider = __webpack_require__(/*! ../layout/Sider */ "./node_modules/antd/lib/layout/Sider.js");

var _motion = _interopRequireDefault(__webpack_require__(/*! ../_util/motion */ "./node_modules/antd/lib/_util/motion.js"));

var _MenuContext = _interopRequireDefault(__webpack_require__(/*! ./MenuContext */ "./node_modules/antd/lib/menu/MenuContext.js"));

var InternalMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(InternalMenu, _React$Component);

  var _super = (0, _createSuper2["default"])(InternalMenu);

  function InternalMenu(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, InternalMenu);
    _this = _super.call(this, props);

    _this.renderMenu = function (_ref) {
      var getPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls,
          direction = _ref.direction;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          className = _this$props.className,
          theme = _this$props.theme;
      var defaultMotions = {
        horizontal: {
          motionName: 'slide-up'
        },
        inline: _motion["default"],
        other: {
          motionName: 'zoom-big'
        }
      };
      var prefixCls = getPrefixCls('menu', customizePrefixCls);
      var menuClassName = (0, _classnames["default"])(className, "".concat(prefixCls, "-").concat(theme), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-inline-collapsed"), _this.getInlineCollapsed()));
      return /*#__PURE__*/React.createElement(_MenuContext["default"].Provider, {
        value: {
          inlineCollapsed: _this.getInlineCollapsed() || false,
          antdMenuTheme: theme,
          direction: direction
        }
      }, /*#__PURE__*/React.createElement(_rcMenu["default"], (0, _extends2["default"])({
        getPopupContainer: getPopupContainer
      }, _this.props, {
        className: menuClassName,
        prefixCls: prefixCls,
        direction: direction,
        defaultMotions: defaultMotions
      })));
    };

    (0, _devWarning["default"])(!('inlineCollapsed' in props && props.mode !== 'inline'), 'Menu', '`inlineCollapsed` should only be used when `mode` is inline.');
    (0, _devWarning["default"])(!(props.siderCollapsed !== undefined && 'inlineCollapsed' in props), 'Menu', '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.');
    return _this;
  }

  (0, _createClass2["default"])(InternalMenu, [{
    key: "getInlineCollapsed",
    value: function getInlineCollapsed() {
      var _this$props2 = this.props,
          inlineCollapsed = _this$props2.inlineCollapsed,
          siderCollapsed = _this$props2.siderCollapsed;

      if (siderCollapsed !== undefined) {
        return siderCollapsed;
      }

      return inlineCollapsed;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderMenu);
    }
  }]);
  return InternalMenu;
}(React.Component);

InternalMenu.defaultProps = {
  className: '',
  theme: 'light',
  focusable: false
}; // We should keep this as ref-able

var Menu = /*#__PURE__*/function (_React$Component2) {
  (0, _inherits2["default"])(Menu, _React$Component2);

  var _super2 = (0, _createSuper2["default"])(Menu);

  function Menu() {
    (0, _classCallCheck2["default"])(this, Menu);
    return _super2.apply(this, arguments);
  }

  (0, _createClass2["default"])(Menu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement(_Sider.SiderContext.Consumer, null, function (context) {
        return /*#__PURE__*/React.createElement(InternalMenu, (0, _extends2["default"])({}, _this2.props, context));
      });
    }
  }]);
  return Menu;
}(React.Component);

exports["default"] = Menu;
Menu.Divider = _rcMenu.Divider;
Menu.Item = _MenuItem["default"];
Menu.SubMenu = _SubMenu["default"];
Menu.ItemGroup = _rcMenu.ItemGroup;

/***/ }),

/***/ "./node_modules/antd/lib/message/index.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/message/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _rcNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification */ "./node_modules/rc-notification/es/index.js"));

var _LoadingOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/LoadingOutlined */ "./node_modules/antd/node_modules/@ant-design/icons/LoadingOutlined.js"));

var _ExclamationCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/ExclamationCircleFilled */ "./node_modules/antd/node_modules/@ant-design/icons/ExclamationCircleFilled.js"));

var _CloseCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleFilled */ "./node_modules/antd/node_modules/@ant-design/icons/CloseCircleFilled.js"));

var _CheckCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckCircleFilled */ "./node_modules/antd/node_modules/@ant-design/icons/CheckCircleFilled.js"));

var _InfoCircleFilled = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/InfoCircleFilled */ "./node_modules/antd/node_modules/@ant-design/icons/InfoCircleFilled.js"));

var defaultDuration = 3;
var defaultTop;
var messageInstance;
var key = 1;
var prefixCls = 'ant-message';
var transitionName = 'move-up';
var getContainer;
var maxCount;
var rtl = false;

function getMessageInstance(callback) {
  if (messageInstance) {
    callback(messageInstance);
    return;
  }

  _rcNotification["default"].newInstance({
    prefixCls: prefixCls,
    transitionName: transitionName,
    style: {
      top: defaultTop
    },
    getContainer: getContainer,
    maxCount: maxCount
  }, function (instance) {
    if (messageInstance) {
      callback(messageInstance);
      return;
    }

    messageInstance = instance;
    callback(instance);
  });
}

var iconMap = {
  info: _InfoCircleFilled["default"],
  success: _CheckCircleFilled["default"],
  error: _CloseCircleFilled["default"],
  warning: _ExclamationCircleFilled["default"],
  loading: _LoadingOutlined["default"]
};

function notice(args) {
  var _classNames;

  var duration = args.duration !== undefined ? args.duration : defaultDuration;
  var IconComponent = iconMap[args.type];
  var messageClass = (0, _classnames["default"])("".concat(prefixCls, "-custom-content"), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-").concat(args.type), args.type), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-rtl"), rtl === true), _classNames));
  var target = args.key || key++;
  var closePromise = new Promise(function (resolve) {
    var callback = function callback() {
      if (typeof args.onClose === 'function') {
        args.onClose();
      }

      return resolve(true);
    };

    getMessageInstance(function (instance) {
      instance.notice({
        key: target,
        duration: duration,
        style: args.style || {},
        className: args.className,
        content: /*#__PURE__*/React.createElement("div", {
          className: messageClass
        }, args.icon || IconComponent && /*#__PURE__*/React.createElement(IconComponent, null), /*#__PURE__*/React.createElement("span", null, args.content)),
        onClose: callback
      });
    });
  });

  var result = function result() {
    if (messageInstance) {
      messageInstance.removeNotice(target);
    }
  };

  result.then = function (filled, rejected) {
    return closePromise.then(filled, rejected);
  };

  result.promise = closePromise;
  return result;
}

function isArgsProps(content) {
  return Object.prototype.toString.call(content) === '[object Object]' && !!content.content;
}

var api = {
  open: notice,
  config: function config(options) {
    if (options.top !== undefined) {
      defaultTop = options.top;
      messageInstance = null; // delete messageInstance for new defaultTop
    }

    if (options.duration !== undefined) {
      defaultDuration = options.duration;
    }

    if (options.prefixCls !== undefined) {
      prefixCls = options.prefixCls;
    }

    if (options.getContainer !== undefined) {
      getContainer = options.getContainer;
    }

    if (options.transitionName !== undefined) {
      transitionName = options.transitionName;
      messageInstance = null; // delete messageInstance for new transitionName
    }

    if (options.maxCount !== undefined) {
      maxCount = options.maxCount;
      messageInstance = null;
    }

    if (options.rtl !== undefined) {
      rtl = options.rtl;
    }
  },
  destroy: function destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
    }
  }
};
['success', 'info', 'warning', 'error', 'loading'].forEach(function (type) {
  api[type] = function (content, duration, onClose) {
    if (isArgsProps(content)) {
      return api.open((0, _extends2["default"])((0, _extends2["default"])({}, content), {
        type: type
      }));
    }

    if (typeof duration === 'function') {
      onClose = duration;
      duration = undefined;
    }

    return api.open({
      content: content,
      duration: duration,
      type: type,
      onClose: onClose
    });
  };
});
api.warn = api.warning;
var _default = api;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/modal/locale.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/modal/locale.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeConfirmLocale = changeConfirmLocale;
exports.getConfirmLocale = getConfirmLocale;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _default = _interopRequireDefault(__webpack_require__(/*! ../locale/default */ "./node_modules/antd/lib/locale/default.js"));

var runtimeLocale = (0, _extends2["default"])({}, _default["default"].Modal);

function changeConfirmLocale(newLocale) {
  if (newLocale) {
    runtimeLocale = (0, _extends2["default"])((0, _extends2["default"])({}, runtimeLocale), newLocale);
  } else {
    runtimeLocale = (0, _extends2["default"])({}, _default["default"].Modal);
  }
}

function getConfirmLocale() {
  return runtimeLocale;
}

/***/ }),

/***/ "./node_modules/antd/lib/notification/hooks/useNotification.js":
/*!*********************************************************************!*\
  !*** ./node_modules/antd/lib/notification/hooks/useNotification.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createUseNotification;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification/lib/useNotification */ "./node_modules/rc-notification/lib/useNotification.js"));

var _configProvider = __webpack_require__(/*! ../../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

function createUseNotification(getNotificationInstance, getRCNoticeProps) {
  var useNotification = function useNotification() {
    // We can only get content by render
    var getPrefixCls; // We create a proxy to handle delay created instance

    var innerInstance = null;
    var proxy = {
      add: function add(noticeProps, holderCallback) {
        innerInstance === null || innerInstance === void 0 ? void 0 : innerInstance.component.add(noticeProps, holderCallback);
      }
    };

    var _useRCNotification = (0, _useNotification["default"])(proxy),
        _useRCNotification2 = (0, _slicedToArray2["default"])(_useRCNotification, 2),
        hookNotify = _useRCNotification2[0],
        holder = _useRCNotification2[1];

    function notify(args) {
      var customizePrefixCls = args.prefixCls;
      var mergedPrefixCls = getPrefixCls('notification', customizePrefixCls);
      getNotificationInstance((0, _extends2["default"])((0, _extends2["default"])({}, args), {
        prefixCls: mergedPrefixCls
      }), function (_ref) {
        var prefixCls = _ref.prefixCls,
            instance = _ref.instance;
        innerInstance = instance;
        hookNotify(getRCNoticeProps(args, prefixCls));
      });
    } // Fill functions


    var hookApiRef = React.useRef({});
    hookApiRef.current.open = notify;
    ['success', 'info', 'warning', 'error'].forEach(function (type) {
      hookApiRef.current[type] = function (args) {
        return hookApiRef.current.open((0, _extends2["default"])((0, _extends2["default"])({}, args), {
          type: type
        }));
      };
    });
    return [hookApiRef.current, /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, {
      key: "holder"
    }, function (context) {
      getPrefixCls = context.getPrefixCls;
      return holder;
    })];
  };

  return useNotification;
}

/***/ }),

/***/ "./node_modules/antd/lib/notification/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/notification/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcNotification = _interopRequireDefault(__webpack_require__(/*! rc-notification */ "./node_modules/rc-notification/es/index.js"));

var _CloseOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseOutlined */ "./node_modules/antd/node_modules/@ant-design/icons/CloseOutlined.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _CheckCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CheckCircleOutlined */ "./node_modules/antd/node_modules/@ant-design/icons/CheckCircleOutlined.js"));

var _CloseCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/CloseCircleOutlined */ "./node_modules/antd/node_modules/@ant-design/icons/CloseCircleOutlined.js"));

var _ExclamationCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/ExclamationCircleOutlined */ "./node_modules/antd/node_modules/@ant-design/icons/ExclamationCircleOutlined.js"));

var _InfoCircleOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/InfoCircleOutlined */ "./node_modules/antd/node_modules/@ant-design/icons/InfoCircleOutlined.js"));

var _useNotification = _interopRequireDefault(__webpack_require__(/*! ./hooks/useNotification */ "./node_modules/antd/lib/notification/hooks/useNotification.js"));

var notificationInstance = {};
var defaultDuration = 4.5;
var defaultTop = 24;
var defaultBottom = 24;
var defaultPrefixCls = 'ant-notification';
var defaultPlacement = 'topRight';
var defaultGetContainer;
var defaultCloseIcon;
var rtl = false;

function setNotificationConfig(options) {
  var duration = options.duration,
      placement = options.placement,
      bottom = options.bottom,
      top = options.top,
      getContainer = options.getContainer,
      closeIcon = options.closeIcon,
      prefixCls = options.prefixCls;

  if (prefixCls !== undefined) {
    defaultPrefixCls = prefixCls;
  }

  if (duration !== undefined) {
    defaultDuration = duration;
  }

  if (placement !== undefined) {
    defaultPlacement = placement;
  } else if (options.rtl) {
    defaultPlacement = 'topLeft';
  }

  if (bottom !== undefined) {
    defaultBottom = bottom;
  }

  if (top !== undefined) {
    defaultTop = top;
  }

  if (getContainer !== undefined) {
    defaultGetContainer = getContainer;
  }

  if (closeIcon !== undefined) {
    defaultCloseIcon = closeIcon;
  }

  if (options.rtl !== undefined) {
    rtl = options.rtl;
  }
}

function getPlacementStyle(placement) {
  var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultTop;
  var bottom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultBottom;
  var style;

  switch (placement) {
    case 'topLeft':
      style = {
        left: 0,
        top: top,
        bottom: 'auto'
      };
      break;

    case 'topRight':
      style = {
        right: 0,
        top: top,
        bottom: 'auto'
      };
      break;

    case 'bottomLeft':
      style = {
        left: 0,
        top: 'auto',
        bottom: bottom
      };
      break;

    default:
      style = {
        right: 0,
        top: 'auto',
        bottom: bottom
      };
      break;
  }

  return style;
}

function getNotificationInstance(args, callback) {
  var _args$placement = args.placement,
      placement = _args$placement === void 0 ? defaultPlacement : _args$placement,
      top = args.top,
      bottom = args.bottom,
      _args$getContainer = args.getContainer,
      getContainer = _args$getContainer === void 0 ? defaultGetContainer : _args$getContainer,
      _args$closeIcon = args.closeIcon,
      closeIcon = _args$closeIcon === void 0 ? defaultCloseIcon : _args$closeIcon;
  var outerPrefixCls = args.prefixCls || defaultPrefixCls;
  var prefixCls = "".concat(outerPrefixCls, "-notice");
  var cacheKey = "".concat(outerPrefixCls, "-").concat(placement);
  var cacheInstance = notificationInstance[cacheKey];

  if (cacheInstance) {
    Promise.resolve(cacheInstance).then(function (instance) {
      callback({
        prefixCls: prefixCls,
        instance: instance
      });
    });
    return;
  }

  var closeIconToRender = /*#__PURE__*/React.createElement("span", {
    className: "".concat(outerPrefixCls, "-close-x")
  }, closeIcon || /*#__PURE__*/React.createElement(_CloseOutlined["default"], {
    className: "".concat(outerPrefixCls, "-close-icon")
  }));
  var notificationClass = (0, _classnames["default"])("".concat(outerPrefixCls, "-").concat(placement), (0, _defineProperty2["default"])({}, "".concat(outerPrefixCls, "-rtl"), rtl === true));
  notificationInstance[cacheKey] = new Promise(function (resolve) {
    _rcNotification["default"].newInstance({
      prefixCls: outerPrefixCls,
      className: notificationClass,
      style: getPlacementStyle(placement, top, bottom),
      getContainer: getContainer,
      closeIcon: closeIconToRender
    }, function (notification) {
      resolve(notification);
      callback({
        prefixCls: prefixCls,
        instance: notification
      });
    });
  });
}

var typeToIcon = {
  success: _CheckCircleOutlined["default"],
  info: _InfoCircleOutlined["default"],
  error: _CloseCircleOutlined["default"],
  warning: _ExclamationCircleOutlined["default"]
};

function getRCNoticeProps(args, prefixCls) {
  var duration = args.duration === undefined ? defaultDuration : args.duration;
  var iconNode = null;

  if (args.icon) {
    iconNode = /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-icon")
    }, args.icon);
  } else if (args.type) {
    iconNode = /*#__PURE__*/React.createElement(typeToIcon[args.type] || null, {
      className: "".concat(prefixCls, "-icon ").concat(prefixCls, "-icon-").concat(args.type)
    });
  }

  var autoMarginTag = !args.description && iconNode ? /*#__PURE__*/React.createElement("span", {
    className: "".concat(prefixCls, "-message-single-line-auto-margin")
  }) : null;
  return {
    content: /*#__PURE__*/React.createElement("div", {
      className: iconNode ? "".concat(prefixCls, "-with-icon") : ''
    }, iconNode, /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-message")
    }, autoMarginTag, args.message), /*#__PURE__*/React.createElement("div", {
      className: "".concat(prefixCls, "-description")
    }, args.description), args.btn ? /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-btn")
    }, args.btn) : null),
    duration: duration,
    closable: true,
    onClose: args.onClose,
    onClick: args.onClick,
    key: args.key,
    style: args.style || {},
    className: args.className
  };
}

var api = {
  open: function open(args) {
    getNotificationInstance(args, function (_ref) {
      var prefixCls = _ref.prefixCls,
          instance = _ref.instance;
      instance.notice(getRCNoticeProps(args, prefixCls));
    });
  },
  close: function close(key) {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      return Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
        instance.removeNotice(key);
      });
    });
  },
  config: setNotificationConfig,
  destroy: function destroy() {
    Object.keys(notificationInstance).forEach(function (cacheKey) {
      Promise.resolve(notificationInstance[cacheKey]).then(function (instance) {
        instance.destroy();
      });
      delete notificationInstance[cacheKey]; // lgtm[js/missing-await]
    });
  }
};
['success', 'info', 'warning', 'error'].forEach(function (type) {
  api[type] = function (args) {
    return api.open((0, _extends2["default"])((0, _extends2["default"])({}, args), {
      type: type
    }));
  };
});
api.warn = api.warning;
api.useNotification = (0, _useNotification["default"])(getNotificationInstance, getRCNoticeProps);
var _default = api;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/radio/context.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/radio/context.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RadioGroupContextProvider = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var RadioGroupContext = /*#__PURE__*/React.createContext(null);
var RadioGroupContextProvider = RadioGroupContext.Provider;
exports.RadioGroupContextProvider = RadioGroupContextProvider;
var _default = RadioGroupContext;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/radio/group.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/radio/group.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _useMergedState3 = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/hooks/useMergedState */ "./node_modules/rc-util/lib/hooks/useMergedState.js"));

var _radio = _interopRequireDefault(__webpack_require__(/*! ./radio */ "./node_modules/antd/lib/radio/radio.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _SizeContext = _interopRequireDefault(__webpack_require__(/*! ../config-provider/SizeContext */ "./node_modules/antd/lib/config-provider/SizeContext.js"));

var _context = __webpack_require__(/*! ./context */ "./node_modules/antd/lib/radio/context.js");

var RadioGroup = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var size = React.useContext(_SizeContext["default"]);

  var _useMergedState = (0, _useMergedState3["default"])(props.defaultValue, {
    value: props.value
  }),
      _useMergedState2 = (0, _slicedToArray2["default"])(_useMergedState, 2),
      value = _useMergedState2[0],
      setValue = _useMergedState2[1];

  var onRadioChange = function onRadioChange(ev) {
    var lastValue = value;
    var val = ev.target.value;

    if (!('value' in props)) {
      setValue(val);
    }

    var onChange = props.onChange;

    if (onChange && val !== lastValue) {
      onChange(ev);
    }
  };

  var renderGroup = function renderGroup() {
    var _classNames;

    var customizePrefixCls = props.prefixCls,
        _props$className = props.className,
        className = _props$className === void 0 ? '' : _props$className,
        options = props.options,
        optionType = props.optionType,
        buttonStyle = props.buttonStyle,
        disabled = props.disabled,
        children = props.children,
        customizeSize = props.size,
        style = props.style,
        id = props.id,
        onMouseEnter = props.onMouseEnter,
        onMouseLeave = props.onMouseLeave;
    var prefixCls = getPrefixCls('radio', customizePrefixCls);
    var groupPrefixCls = "".concat(prefixCls, "-group");
    var childrenToRender = children; // 如果存在 options, 优先使用

    if (options && options.length > 0) {
      var optionsPrefixCls = optionType === 'button' ? "".concat(prefixCls, "-button") : prefixCls;
      childrenToRender = options.map(function (option) {
        if (typeof option === 'string') {
          // 此处类型自动推导为 string
          return /*#__PURE__*/React.createElement(_radio["default"], {
            ref: ref,
            key: option,
            prefixCls: optionsPrefixCls,
            disabled: disabled,
            value: option,
            checked: value === option
          }, option);
        } // 此处类型自动推导为 { label: string value: string }


        return /*#__PURE__*/React.createElement(_radio["default"], {
          ref: ref,
          key: "radio-group-value-options-".concat(option.value),
          prefixCls: optionsPrefixCls,
          disabled: option.disabled || disabled,
          value: option.value,
          checked: value === option.value,
          style: option.style
        }, option.label);
      });
    }

    var mergedSize = customizeSize || size;
    var classString = (0, _classnames["default"])(groupPrefixCls, "".concat(groupPrefixCls, "-").concat(buttonStyle), (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(groupPrefixCls, "-").concat(mergedSize), mergedSize), (0, _defineProperty2["default"])(_classNames, "".concat(groupPrefixCls, "-rtl"), direction === 'rtl'), _classNames), className);
    return /*#__PURE__*/React.createElement("div", {
      className: classString,
      style: style,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      id: id
    }, childrenToRender);
  };

  return /*#__PURE__*/React.createElement(_context.RadioGroupContextProvider, {
    value: {
      onChange: onRadioChange,
      value: value,
      disabled: props.disabled,
      name: props.name
    }
  }, renderGroup());
});
RadioGroup.defaultProps = {
  buttonStyle: 'outline'
};

var _default = /*#__PURE__*/React.memo(RadioGroup);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/radio/index.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/radio/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Group: true,
  Button: true
};
Object.defineProperty(exports, "Group", {
  enumerable: true,
  get: function get() {
    return _group["default"];
  }
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _radioButton["default"];
  }
});
exports["default"] = void 0;

var _radio = _interopRequireDefault(__webpack_require__(/*! ./radio */ "./node_modules/antd/lib/radio/radio.js"));

var _group = _interopRequireDefault(__webpack_require__(/*! ./group */ "./node_modules/antd/lib/radio/group.js"));

var _radioButton = _interopRequireDefault(__webpack_require__(/*! ./radioButton */ "./node_modules/antd/lib/radio/radioButton.js"));

var _interface = __webpack_require__(/*! ./interface */ "./node_modules/antd/lib/radio/interface.js");

Object.keys(_interface).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _interface[key];
    }
  });
});
var Radio = _radio["default"];
Radio.Button = _radioButton["default"];
Radio.Group = _group["default"];
var _default = Radio;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/radio/interface.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/radio/interface.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./node_modules/antd/lib/radio/radio.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/lib/radio/radio.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcCheckbox = _interopRequireDefault(__webpack_require__(/*! rc-checkbox */ "./node_modules/rc-checkbox/es/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./node_modules/antd/lib/radio/context.js"));

var _ref = __webpack_require__(/*! ../_util/ref */ "./node_modules/antd/lib/_util/ref.js");

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var InternalRadio = function InternalRadio(props, ref) {
  var _classNames;

  var context = React.useContext(_context["default"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var innerRef = React.useRef();
  var mergedRef = (0, _ref.composeRef)(ref, innerRef);
  React.useEffect(function () {
    (0, _devWarning["default"])(!('optionType' in props), 'Radio', '`optionType` is only support in Radio.Group.');
  }, []);

  var onChange = function onChange(e) {
    if (props.onChange) {
      props.onChange(e);
    }

    if (context === null || context === void 0 ? void 0 : context.onChange) {
      context.onChange(e);
    }
  };

  var customizePrefixCls = props.prefixCls,
      className = props.className,
      children = props.children,
      style = props.style,
      restProps = __rest(props, ["prefixCls", "className", "children", "style"]);

  var prefixCls = getPrefixCls('radio', customizePrefixCls);
  var radioProps = (0, _extends2["default"])({}, restProps);

  if (context) {
    radioProps.name = context.name;
    radioProps.onChange = onChange;
    radioProps.checked = props.value === context.value;
    radioProps.disabled = props.disabled || context.disabled;
  }

  var wrapperClassString = (0, _classnames["default"])(className, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper"), true), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper-checked"), radioProps.checked), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper-disabled"), radioProps.disabled), (0, _defineProperty2["default"])(_classNames, "".concat(prefixCls, "-wrapper-rtl"), direction === 'rtl'), _classNames));
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    React.createElement("label", {
      className: wrapperClassString,
      style: style,
      onMouseEnter: props.onMouseEnter,
      onMouseLeave: props.onMouseLeave
    }, /*#__PURE__*/React.createElement(_rcCheckbox["default"], (0, _extends2["default"])({}, radioProps, {
      prefixCls: prefixCls,
      ref: mergedRef
    })), children !== undefined ? /*#__PURE__*/React.createElement("span", null, children) : null)
  );
};

var Radio = /*#__PURE__*/React.forwardRef(InternalRadio);
Radio.displayName = 'Radio';
Radio.defaultProps = {
  type: 'radio'
};
var _default = Radio;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/radio/radioButton.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/radio/radioButton.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _radio = _interopRequireDefault(__webpack_require__(/*! ./radio */ "./node_modules/antd/lib/radio/radio.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _context = _interopRequireDefault(__webpack_require__(/*! ./context */ "./node_modules/antd/lib/radio/context.js"));

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var RadioButton = function RadioButton(props, ref) {
  var radioGroupContext = React.useContext(_context["default"]);

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls;

  var customizePrefixCls = props.prefixCls,
      radioProps = __rest(props, ["prefixCls"]);

  var prefixCls = getPrefixCls('radio-button', customizePrefixCls);

  if (radioGroupContext) {
    radioProps.checked = props.value === radioGroupContext.value;
    radioProps.disabled = props.disabled || radioGroupContext.disabled;
  }

  return /*#__PURE__*/React.createElement(_radio["default"], (0, _extends2["default"])({
    prefixCls: prefixCls
  }, radioProps, {
    type: "radio",
    ref: ref
  }));
};

var _default = /*#__PURE__*/React.forwardRef(RadioButton);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/table/hooks/useSelection.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/table/hooks/useSelection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useSelection;
exports.SELECTION_INVERT = exports.SELECTION_ALL = void 0;

var _toArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toArray */ "./node_modules/@babel/runtime/helpers/toArray.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _DownOutlined = _interopRequireDefault(__webpack_require__(/*! @ant-design/icons/DownOutlined */ "./node_modules/antd/node_modules/@ant-design/icons/DownOutlined.js"));

var _treeUtil = __webpack_require__(/*! rc-tree/lib/utils/treeUtil */ "./node_modules/rc-tree/lib/utils/treeUtil.js");

var _conductUtil = __webpack_require__(/*! rc-tree/lib/utils/conductUtil */ "./node_modules/rc-tree/lib/utils/conductUtil.js");

var _util = __webpack_require__(/*! rc-tree/lib/util */ "./node_modules/rc-tree/lib/util.js");

var _rcTable = __webpack_require__(/*! rc-table */ "./node_modules/rc-table/es/index.js");

var _useMergedState3 = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/hooks/useMergedState */ "./node_modules/rc-util/lib/hooks/useMergedState.js"));

var _checkbox = _interopRequireDefault(__webpack_require__(/*! ../../checkbox */ "./node_modules/antd/lib/checkbox/index.js"));

var _dropdown = _interopRequireDefault(__webpack_require__(/*! ../../dropdown */ "./node_modules/antd/lib/dropdown/index.js"));

var _menu = _interopRequireDefault(__webpack_require__(/*! ../../menu */ "./node_modules/antd/lib/menu/index.js"));

var _radio = _interopRequireDefault(__webpack_require__(/*! ../../radio */ "./node_modules/antd/lib/radio/index.js"));

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

// TODO: warning if use ajax!!!
var SELECTION_ALL = 'SELECT_ALL';
exports.SELECTION_ALL = SELECTION_ALL;
var SELECTION_INVERT = 'SELECT_INVERT';
exports.SELECTION_INVERT = SELECTION_INVERT;

function getFixedType(column) {
  return column && column.fixed;
}

function flattenData(data, childrenColumnName) {
  var list = [];
  (data || []).forEach(function (record) {
    list.push(record);

    if (childrenColumnName in record) {
      list = [].concat((0, _toConsumableArray2["default"])(list), (0, _toConsumableArray2["default"])(flattenData(record[childrenColumnName], childrenColumnName)));
    }
  });
  return list;
}

function useSelection(rowSelection, config) {
  var _ref = rowSelection || {},
      preserveSelectedRowKeys = _ref.preserveSelectedRowKeys,
      selectedRowKeys = _ref.selectedRowKeys,
      getCheckboxProps = _ref.getCheckboxProps,
      onSelectionChange = _ref.onChange,
      onSelect = _ref.onSelect,
      onSelectAll = _ref.onSelectAll,
      onSelectInvert = _ref.onSelectInvert,
      onSelectMultiple = _ref.onSelectMultiple,
      selectionColWidth = _ref.columnWidth,
      selectionType = _ref.type,
      selections = _ref.selections,
      fixed = _ref.fixed,
      customizeRenderCell = _ref.renderCell,
      hideSelectAll = _ref.hideSelectAll,
      _ref$checkStrictly = _ref.checkStrictly,
      checkStrictly = _ref$checkStrictly === void 0 ? true : _ref$checkStrictly;

  var prefixCls = config.prefixCls,
      data = config.data,
      pageData = config.pageData,
      getRecordByKey = config.getRecordByKey,
      getRowKey = config.getRowKey,
      expandType = config.expandType,
      childrenColumnName = config.childrenColumnName,
      tableLocale = config.locale,
      expandIconColumnIndex = config.expandIconColumnIndex,
      getPopupContainer = config.getPopupContainer; // ======================== Caches ========================

  var preserveRecordsRef = React.useRef(new Map()); // ========================= Keys =========================

  var _useMergedState = (0, _useMergedState3["default"])(selectedRowKeys || [], {
    value: selectedRowKeys
  }),
      _useMergedState2 = (0, _slicedToArray2["default"])(_useMergedState, 2),
      mergedSelectedKeys = _useMergedState2[0],
      setMergedSelectedKeys = _useMergedState2[1];

  var _useMemo = (0, React.useMemo)(function () {
    return checkStrictly ? {
      keyEntities: null
    } : (0, _treeUtil.convertDataToEntities)(data, undefined, getRowKey);
  }, [data, getRowKey, checkStrictly]),
      keyEntities = _useMemo.keyEntities; // Get flatten data


  var flattedData = (0, React.useMemo)(function () {
    return flattenData(pageData, childrenColumnName);
  }, [pageData, childrenColumnName]); // Get all checkbox props

  var checkboxPropsMap = (0, React.useMemo)(function () {
    var map = new Map();
    flattedData.forEach(function (record, index) {
      var key = getRowKey(record, index);
      var checkboxProps = (getCheckboxProps ? getCheckboxProps(record) : null) || {};
      map.set(key, checkboxProps);

      if ( true && ('checked' in checkboxProps || 'defaultChecked' in checkboxProps)) {
        (0, _devWarning["default"])(false, 'Table', 'Do not set `checked` or `defaultChecked` in `getCheckboxProps`. Please use `selectedRowKeys` instead.');
      }
    });
    return map;
  }, [flattedData, getRowKey, getCheckboxProps]);
  var isCheckboxDisabled = (0, React.useCallback)(function (r) {
    var _a;

    return !!((_a = checkboxPropsMap.get(getRowKey(r))) === null || _a === void 0 ? void 0 : _a.disabled);
  }, [checkboxPropsMap, getRowKey]);

  var _useMemo2 = (0, React.useMemo)(function () {
    if (checkStrictly) {
      return [mergedSelectedKeys, []];
    }

    var _conductCheck = (0, _conductUtil.conductCheck)(mergedSelectedKeys, true, keyEntities, isCheckboxDisabled),
        checkedKeys = _conductCheck.checkedKeys,
        halfCheckedKeys = _conductCheck.halfCheckedKeys;

    return [checkedKeys, halfCheckedKeys];
  }, [mergedSelectedKeys, checkStrictly, keyEntities, isCheckboxDisabled]),
      _useMemo3 = (0, _slicedToArray2["default"])(_useMemo2, 2),
      derivedSelectedKeys = _useMemo3[0],
      derivedHalfSelectedKeys = _useMemo3[1];

  var derivedSelectedKeySet = (0, React.useMemo)(function () {
    var keys = selectionType === 'radio' ? derivedSelectedKeys.slice(0, 1) : derivedSelectedKeys;
    return new Set(keys);
  }, [derivedSelectedKeys, selectionType]);
  var derivedHalfSelectedKeySet = (0, React.useMemo)(function () {
    return selectionType === 'radio' ? new Set() : new Set(derivedHalfSelectedKeys);
  }, [derivedHalfSelectedKeys, selectionType]); // Save last selected key to enable range selection

  var _useState = (0, React.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      lastSelectedKey = _useState2[0],
      setLastSelectedKey = _useState2[1]; // Reset if rowSelection reset


  React.useEffect(function () {
    if (!rowSelection) {
      setMergedSelectedKeys([]);
    }
  }, [!!rowSelection]);
  var setSelectedKeys = (0, React.useCallback)(function (keys) {
    var availableKeys;
    var records;

    if (preserveSelectedRowKeys) {
      // Keep key if mark as preserveSelectedRowKeys
      var newCache = new Map();
      availableKeys = keys;
      records = keys.map(function (key) {
        var record = getRecordByKey(key);

        if (!record && preserveRecordsRef.current.has(key)) {
          record = preserveRecordsRef.current.get(key);
        }

        newCache.set(key, record);
        return record;
      }); // Refresh to new cache

      preserveRecordsRef.current = newCache;
    } else {
      // Filter key which not exist in the `dataSource`
      availableKeys = [];
      records = [];
      keys.forEach(function (key) {
        var record = getRecordByKey(key);

        if (record !== undefined) {
          availableKeys.push(key);
          records.push(record);
        }
      });
    }

    setMergedSelectedKeys(availableKeys);

    if (onSelectionChange) {
      onSelectionChange(availableKeys, records);
    }
  }, [setMergedSelectedKeys, getRecordByKey, onSelectionChange, preserveSelectedRowKeys]); // ====================== Selections ======================
  // Trigger single `onSelect` event

  var triggerSingleSelection = (0, React.useCallback)(function (key, selected, keys, event) {
    if (onSelect) {
      var rows = keys.map(function (k) {
        return getRecordByKey(k);
      });
      onSelect(getRecordByKey(key), selected, rows, event);
    }

    setSelectedKeys(keys);
  }, [onSelect, getRecordByKey, setSelectedKeys]);
  var mergedSelections = (0, React.useMemo)(function () {
    if (!selections || hideSelectAll) {
      return null;
    }

    var selectionList = selections === true ? [SELECTION_ALL, SELECTION_INVERT] : selections;
    return selectionList.map(function (selection) {
      if (selection === SELECTION_ALL) {
        return {
          key: 'all',
          text: tableLocale.selectionAll,
          onSelect: function onSelect() {
            setSelectedKeys(data.map(function (record, index) {
              return getRowKey(record, index);
            }));
          }
        };
      }

      if (selection === SELECTION_INVERT) {
        return {
          key: 'invert',
          text: tableLocale.selectInvert,
          onSelect: function onSelect() {
            var keySet = new Set(derivedSelectedKeySet);
            pageData.forEach(function (record, index) {
              var key = getRowKey(record, index);

              if (keySet.has(key)) {
                keySet["delete"](key);
              } else {
                keySet.add(key);
              }
            });
            var keys = Array.from(keySet);
            setSelectedKeys(keys);

            if (onSelectInvert) {
              (0, _devWarning["default"])(false, 'Table', '`onSelectInvert` will be removed in future. Please use `onChange` instead.');
              onSelectInvert(keys);
            }
          }
        };
      }

      return selection;
    });
  }, [selections, derivedSelectedKeySet, pageData, getRowKey, onSelectInvert, setSelectedKeys]); // ======================= Columns ========================

  var transformColumns = (0, React.useCallback)(function (columns) {
    if (!rowSelection) {
      return columns;
    } // Support selection


    var keySet = new Set(derivedSelectedKeySet); // Record key only need check with enabled

    var recordKeys = flattedData.map(getRowKey).filter(function (key) {
      return !checkboxPropsMap.get(key).disabled;
    });
    var checkedCurrentAll = recordKeys.every(function (key) {
      return keySet.has(key);
    });
    var checkedCurrentSome = recordKeys.some(function (key) {
      return keySet.has(key);
    });

    var onSelectAllChange = function onSelectAllChange() {
      var changeKeys = [];

      if (checkedCurrentAll) {
        recordKeys.forEach(function (key) {
          keySet["delete"](key);
          changeKeys.push(key);
        });
      } else {
        recordKeys.forEach(function (key) {
          if (!keySet.has(key)) {
            keySet.add(key);
            changeKeys.push(key);
          }
        });
      }

      var keys = Array.from(keySet);
      setSelectedKeys(keys);

      if (onSelectAll) {
        onSelectAll(!checkedCurrentAll, keys.map(function (k) {
          return getRecordByKey(k);
        }), changeKeys.map(function (k) {
          return getRecordByKey(k);
        }));
      }
    }; // ===================== Render =====================
    // Title Cell


    var title;

    if (selectionType !== 'radio') {
      var customizeSelections;

      if (mergedSelections) {
        var menu = /*#__PURE__*/React.createElement(_menu["default"], {
          getPopupContainer: getPopupContainer
        }, mergedSelections.map(function (selection, index) {
          var key = selection.key,
              text = selection.text,
              onSelectionClick = selection.onSelect;
          return /*#__PURE__*/React.createElement(_menu["default"].Item, {
            key: key || index,
            onClick: function onClick() {
              if (onSelectionClick) {
                onSelectionClick(recordKeys);
              }
            }
          }, text);
        }));
        customizeSelections = /*#__PURE__*/React.createElement("div", {
          className: "".concat(prefixCls, "-selection-extra")
        }, /*#__PURE__*/React.createElement(_dropdown["default"], {
          overlay: menu,
          getPopupContainer: getPopupContainer
        }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(_DownOutlined["default"], null))));
      }

      var allDisabled = flattedData.every(function (record, index) {
        var key = getRowKey(record, index);
        var checkboxProps = checkboxPropsMap.get(key) || {};
        return checkboxProps.disabled;
      });
      title = !hideSelectAll && /*#__PURE__*/React.createElement("div", {
        className: "".concat(prefixCls, "-selection")
      }, /*#__PURE__*/React.createElement(_checkbox["default"], {
        checked: !allDisabled && !!flattedData.length && checkedCurrentAll,
        indeterminate: !checkedCurrentAll && checkedCurrentSome,
        onChange: onSelectAllChange,
        disabled: flattedData.length === 0 || allDisabled
      }), customizeSelections);
    } // Body Cell


    var renderCell;

    if (selectionType === 'radio') {
      renderCell = function renderCell(_, record, index) {
        var key = getRowKey(record, index);
        var checked = keySet.has(key);
        return {
          node: /*#__PURE__*/React.createElement(_radio["default"], (0, _extends2["default"])({}, checkboxPropsMap.get(key), {
            checked: checked,
            onClick: function onClick(e) {
              return e.stopPropagation();
            },
            onChange: function onChange(event) {
              if (!keySet.has(key)) {
                triggerSingleSelection(key, true, [key], event.nativeEvent);
              }
            }
          })),
          checked: checked
        };
      };
    } else {
      renderCell = function renderCell(_, record, index) {
        var key = getRowKey(record, index);
        var checked = keySet.has(key);
        var indeterminate = derivedHalfSelectedKeySet.has(key); // Record checked

        return {
          node: /*#__PURE__*/React.createElement(_checkbox["default"], (0, _extends2["default"])({}, checkboxPropsMap.get(key), {
            checked: checked,
            indeterminate: indeterminate,
            onClick: function onClick(e) {
              return e.stopPropagation();
            },
            onChange: function onChange(_ref2) {
              var nativeEvent = _ref2.nativeEvent;
              var shiftKey = nativeEvent.shiftKey;
              var startIndex = -1;
              var endIndex = -1; // Get range of this

              if (shiftKey && checkStrictly) {
                var pointKeys = new Set([lastSelectedKey, key]);
                recordKeys.some(function (recordKey, recordIndex) {
                  if (pointKeys.has(recordKey)) {
                    if (startIndex === -1) {
                      startIndex = recordIndex;
                    } else {
                      endIndex = recordIndex;
                      return true;
                    }
                  }

                  return false;
                });
              }

              if (endIndex !== -1 && startIndex !== endIndex && checkStrictly) {
                // Batch update selections
                var rangeKeys = recordKeys.slice(startIndex, endIndex + 1);
                var changedKeys = [];

                if (checked) {
                  rangeKeys.forEach(function (recordKey) {
                    if (keySet.has(recordKey)) {
                      changedKeys.push(recordKey);
                      keySet["delete"](recordKey);
                    }
                  });
                } else {
                  rangeKeys.forEach(function (recordKey) {
                    if (!keySet.has(recordKey)) {
                      changedKeys.push(recordKey);
                      keySet.add(recordKey);
                    }
                  });
                }

                var keys = Array.from(keySet);
                setSelectedKeys(keys);

                if (onSelectMultiple) {
                  onSelectMultiple(!checked, keys.map(function (recordKey) {
                    return getRecordByKey(recordKey);
                  }), changedKeys.map(function (recordKey) {
                    return getRecordByKey(recordKey);
                  }));
                }
              } else {
                // Single record selected
                var originCheckedKeys = derivedSelectedKeys;

                if (checkStrictly) {
                  var checkedKeys = checked ? (0, _util.arrDel)(originCheckedKeys, key) : (0, _util.arrAdd)(originCheckedKeys, key);
                  triggerSingleSelection(key, !checked, checkedKeys, nativeEvent);
                } else {
                  // Always fill first
                  var result = (0, _conductUtil.conductCheck)([].concat((0, _toConsumableArray2["default"])(originCheckedKeys), [key]), true, keyEntities, isCheckboxDisabled);
                  var _checkedKeys = result.checkedKeys,
                      halfCheckedKeys = result.halfCheckedKeys;
                  var nextCheckedKeys = _checkedKeys; // If remove, we do it again to correction

                  if (checked) {
                    var tempKeySet = new Set(_checkedKeys);
                    tempKeySet["delete"](key);
                    nextCheckedKeys = (0, _conductUtil.conductCheck)(Array.from(tempKeySet), {
                      checked: false,
                      halfCheckedKeys: halfCheckedKeys
                    }, keyEntities, isCheckboxDisabled).checkedKeys;
                  }

                  triggerSingleSelection(key, !checked, nextCheckedKeys, nativeEvent);
                }
              }

              setLastSelectedKey(key);
            }
          })),
          checked: checked
        };
      };
    }

    var renderSelectionCell = function renderSelectionCell(_, record, index) {
      var _renderCell = renderCell(_, record, index),
          node = _renderCell.node,
          checked = _renderCell.checked;

      if (customizeRenderCell) {
        return customizeRenderCell(checked, record, index, node);
      }

      return node;
    }; // Columns


    var selectionColumn = (0, _defineProperty2["default"])({
      width: selectionColWidth,
      className: "".concat(prefixCls, "-selection-column"),
      title: rowSelection.columnTitle || title,
      render: renderSelectionCell
    }, _rcTable.INTERNAL_COL_DEFINE, {
      className: "".concat(prefixCls, "-selection-col")
    });

    if (expandType === 'row' && columns.length && !expandIconColumnIndex) {
      var _columns = (0, _toArray2["default"])(columns),
          expandColumn = _columns[0],
          restColumns = _columns.slice(1);

      var selectionFixed = fixed || getFixedType(restColumns[0]);

      if (selectionFixed) {
        expandColumn.fixed = selectionFixed;
      }

      return [expandColumn, (0, _extends2["default"])((0, _extends2["default"])({}, selectionColumn), {
        fixed: selectionFixed
      })].concat((0, _toConsumableArray2["default"])(restColumns));
    }

    return [(0, _extends2["default"])((0, _extends2["default"])({}, selectionColumn), {
      fixed: fixed || getFixedType(columns[0])
    })].concat((0, _toConsumableArray2["default"])(columns));
  }, [getRowKey, flattedData, rowSelection, derivedSelectedKeys, derivedSelectedKeySet, derivedHalfSelectedKeySet, selectionColWidth, mergedSelections, expandType, lastSelectedKey, checkboxPropsMap, onSelectMultiple, triggerSingleSelection, isCheckboxDisabled]);
  return [transformColumns, derivedSelectedKeySet];
}

/***/ }),

/***/ "./node_modules/antd/lib/time-picker/locale/en_US.js":
/*!***********************************************************!*\
  !*** ./node_modules/antd/lib/time-picker/locale/en_US.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var locale = {
  placeholder: 'Select time',
  rangePlaceholder: ['Start time', 'End time']
};
var _default = locale;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/tooltip/index.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/tooltip/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcTooltip = _interopRequireDefault(__webpack_require__(/*! rc-tooltip */ "./node_modules/rc-tooltip/es/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _placements = _interopRequireDefault(__webpack_require__(/*! ./placements */ "./node_modules/antd/lib/tooltip/placements.js"));

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _colors = __webpack_require__(/*! ../_util/colors */ "./node_modules/antd/lib/_util/colors.js");

var splitObject = function splitObject(obj, keys) {
  var picked = {};
  var omitted = (0, _extends2["default"])({}, obj);
  keys.forEach(function (key) {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omitted[key];
    }
  });
  return {
    picked: picked,
    omitted: omitted
  };
};

var PresetColorRegex = new RegExp("^(".concat(_colors.PresetColorTypes.join('|'), ")(-inverse)?$")); // Fix Tooltip won't hide at disabled button
// mouse events don't trigger at disabled button in Chrome
// https://github.com/react-component/tooltip/issues/18

function getDisabledCompatibleChildren(element, prefixCls) {
  var elementType = element.type;

  if ((elementType.__ANT_BUTTON === true || elementType.__ANT_SWITCH === true || elementType.__ANT_CHECKBOX === true || element.type === 'button') && element.props.disabled) {
    // Pick some layout related style properties up to span
    // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
    var _splitObject = splitObject(element.props.style, ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']),
        picked = _splitObject.picked,
        omitted = _splitObject.omitted;

    var spanStyle = (0, _extends2["default"])((0, _extends2["default"])({
      display: 'inline-block'
    }, picked), {
      cursor: 'not-allowed',
      width: element.props.block ? '100%' : null
    });
    var buttonStyle = (0, _extends2["default"])((0, _extends2["default"])({}, omitted), {
      pointerEvents: 'none'
    });
    var child = (0, _reactNode.cloneElement)(element, {
      style: buttonStyle,
      className: null
    });
    return /*#__PURE__*/React.createElement("span", {
      style: spanStyle,
      className: (0, _classnames["default"])(element.props.className, "".concat(prefixCls, "-disabled-compatible-wrapper"))
    }, child);
  }

  return element;
}

var Tooltip = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames2;

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useState = React.useState(!!props.visible || !!props.defaultVisible),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  React.useEffect(function () {
    if ('visible' in props) {
      setVisible(props.visible);
    }
  }, [props.visible]);

  var isNoTitle = function isNoTitle() {
    var title = props.title,
        overlay = props.overlay;
    return !title && !overlay && title !== 0; // overlay for old version compatibility
  };

  var onVisibleChange = function onVisibleChange(vis) {
    if (!('visible' in props)) {
      setVisible(isNoTitle() ? false : vis);
    }

    if (props.onVisibleChange && !isNoTitle()) {
      props.onVisibleChange(vis);
    }
  };

  var getTooltipPlacements = function getTooltipPlacements() {
    var builtinPlacements = props.builtinPlacements,
        arrowPointAtCenter = props.arrowPointAtCenter,
        autoAdjustOverflow = props.autoAdjustOverflow;
    return builtinPlacements || (0, _placements["default"])({
      arrowPointAtCenter: arrowPointAtCenter,
      autoAdjustOverflow: autoAdjustOverflow
    });
  }; // 动态设置动画点


  var onPopupAlign = function onPopupAlign(domNode, align) {
    var placements = getTooltipPlacements(); // 当前返回的位置

    var placement = Object.keys(placements).filter(function (key) {
      return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
    })[0];

    if (!placement) {
      return;
    } // 根据当前坐标设置动画点


    var rect = domNode.getBoundingClientRect();
    var transformOrigin = {
      top: '50%',
      left: '50%'
    };

    if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
      transformOrigin.top = "".concat(rect.height - align.offset[1], "px");
    } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
      transformOrigin.top = "".concat(-align.offset[1], "px");
    }

    if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
      transformOrigin.left = "".concat(rect.width - align.offset[0], "px");
    } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
      transformOrigin.left = "".concat(-align.offset[0], "px");
    }

    domNode.style.transformOrigin = "".concat(transformOrigin.left, " ").concat(transformOrigin.top);
  };

  var getOverlay = function getOverlay() {
    var title = props.title,
        overlay = props.overlay;

    if (title === 0) {
      return title;
    }

    return overlay || title || '';
  };

  var customizePrefixCls = props.prefixCls,
      openClassName = props.openClassName,
      getPopupContainer = props.getPopupContainer,
      getTooltipContainer = props.getTooltipContainer,
      overlayClassName = props.overlayClassName,
      color = props.color,
      overlayInnerStyle = props.overlayInnerStyle;
  var children = props.children;
  var prefixCls = getPrefixCls('tooltip', customizePrefixCls);
  var tempVisible = visible; // Hide tooltip when there is no title

  if (!('visible' in props) && isNoTitle()) {
    tempVisible = false;
  }

  var child = getDisabledCompatibleChildren((0, _reactNode.isValidElement)(children) ? children : /*#__PURE__*/React.createElement("span", null, children), prefixCls);
  var childProps = child.props;
  var childCls = (0, _classnames["default"])(childProps.className, (0, _defineProperty2["default"])({}, openClassName || "".concat(prefixCls, "-open"), true));
  var customOverlayClassName = (0, _classnames["default"])(overlayClassName, (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-").concat(color), color && PresetColorRegex.test(color)), _classNames2));
  var formattedOverlayInnerStyle;
  var arrowContentStyle;

  if (color && !PresetColorRegex.test(color)) {
    formattedOverlayInnerStyle = (0, _extends2["default"])((0, _extends2["default"])({}, overlayInnerStyle), {
      background: color
    });
    arrowContentStyle = {
      background: color
    };
  }

  return /*#__PURE__*/React.createElement(_rcTooltip["default"], (0, _extends2["default"])({}, props, {
    prefixCls: prefixCls,
    overlayClassName: customOverlayClassName,
    getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
    ref: ref,
    builtinPlacements: getTooltipPlacements(),
    overlay: getOverlay(),
    visible: tempVisible,
    onVisibleChange: onVisibleChange,
    onPopupAlign: onPopupAlign,
    overlayInnerStyle: formattedOverlayInnerStyle,
    arrowContent: /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-arrow-content"),
      style: arrowContentStyle
    })
  }), tempVisible ? (0, _reactNode.cloneElement)(child, {
    className: childCls
  }) : child);
});
Tooltip.displayName = 'Tooltip';
Tooltip.defaultProps = {
  placement: 'top',
  transitionName: 'zoom-big-fast',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true
};
var _default = Tooltip;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/tooltip/placements.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/tooltip/placements.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOverflowOptions = getOverflowOptions;
exports["default"] = getPlacements;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _placements = __webpack_require__(/*! rc-tooltip/lib/placements */ "./node_modules/rc-tooltip/lib/placements.js");

var autoAdjustOverflowEnabled = {
  adjustX: 1,
  adjustY: 1
};
var autoAdjustOverflowDisabled = {
  adjustX: 0,
  adjustY: 0
};
var targetOffset = [0, 0];

function getOverflowOptions(autoAdjustOverflow) {
  if (typeof autoAdjustOverflow === 'boolean') {
    return autoAdjustOverflow ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
  }

  return (0, _extends2["default"])((0, _extends2["default"])({}, autoAdjustOverflowDisabled), autoAdjustOverflow);
}

function getPlacements(config) {
  var _config$arrowWidth = config.arrowWidth,
      arrowWidth = _config$arrowWidth === void 0 ? 5 : _config$arrowWidth,
      _config$horizontalArr = config.horizontalArrowShift,
      horizontalArrowShift = _config$horizontalArr === void 0 ? 16 : _config$horizontalArr,
      _config$verticalArrow = config.verticalArrowShift,
      verticalArrowShift = _config$verticalArrow === void 0 ? 8 : _config$verticalArrow,
      autoAdjustOverflow = config.autoAdjustOverflow;
  var placementMap = {
    left: {
      points: ['cr', 'cl'],
      offset: [-4, 0]
    },
    right: {
      points: ['cl', 'cr'],
      offset: [4, 0]
    },
    top: {
      points: ['bc', 'tc'],
      offset: [0, -4]
    },
    bottom: {
      points: ['tc', 'bc'],
      offset: [0, 4]
    },
    topLeft: {
      points: ['bl', 'tc'],
      offset: [-(horizontalArrowShift + arrowWidth), -4]
    },
    leftTop: {
      points: ['tr', 'cl'],
      offset: [-4, -(verticalArrowShift + arrowWidth)]
    },
    topRight: {
      points: ['br', 'tc'],
      offset: [horizontalArrowShift + arrowWidth, -4]
    },
    rightTop: {
      points: ['tl', 'cr'],
      offset: [4, -(verticalArrowShift + arrowWidth)]
    },
    bottomRight: {
      points: ['tr', 'bc'],
      offset: [horizontalArrowShift + arrowWidth, 4]
    },
    rightBottom: {
      points: ['bl', 'cr'],
      offset: [4, verticalArrowShift + arrowWidth]
    },
    bottomLeft: {
      points: ['tl', 'bc'],
      offset: [-(horizontalArrowShift + arrowWidth), 4]
    },
    leftBottom: {
      points: ['br', 'cl'],
      offset: [-4, verticalArrowShift + arrowWidth]
    }
  };
  Object.keys(placementMap).forEach(function (key) {
    placementMap[key] = config.arrowPointAtCenter ? (0, _extends2["default"])((0, _extends2["default"])({}, placementMap[key]), {
      overflow: getOverflowOptions(autoAdjustOverflow),
      targetOffset: targetOffset
    }) : (0, _extends2["default"])((0, _extends2["default"])({}, _placements.placements[key]), {
      overflow: getOverflowOptions(autoAdjustOverflow)
    });
    placementMap[key].ignoreShake = true;
  });
  return placementMap;
}

/***/ }),

/***/ "./node_modules/rc-animate/lib/CSSMotion.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-animate/lib/CSSMotion.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.genCSSMotion = genCSSMotion;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _findDOMNode = __webpack_require__(/*! rc-util/lib/Dom/findDOMNode */ "./node_modules/rc-util/lib/Dom/findDOMNode.js");

var _findDOMNode2 = _interopRequireDefault(_findDOMNode);

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _raf = __webpack_require__(/*! raf */ "./node_modules/raf/index.js");

var _raf2 = _interopRequireDefault(_raf);

var _motion = __webpack_require__(/*! ./util/motion */ "./node_modules/rc-animate/lib/util/motion.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/default-props-match-prop-types, react/no-multi-comp, react/prop-types */


var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';

/**
 * `transitionSupport` is used for none transition test case.
 * Default we use browser transition event support check.
 */
function genCSSMotion(config) {
  var transitionSupport = config;
  var forwardRef = !!_react2['default'].forwardRef;

  if (typeof config === 'object') {
    transitionSupport = config.transitionSupport;
    forwardRef = 'forwardRef' in config ? config.forwardRef : forwardRef;
  }

  function isSupportTransition(props) {
    return !!(props.motionName && transitionSupport);
  }

  var CSSMotion = function (_React$Component) {
    _inherits(CSSMotion, _React$Component);

    function CSSMotion() {
      _classCallCheck(this, CSSMotion);

      var _this = _possibleConstructorReturn(this, (CSSMotion.__proto__ || Object.getPrototypeOf(CSSMotion)).call(this));

      _this.onDomUpdate = function () {
        var _this$state = _this.state,
            status = _this$state.status,
            newStatus = _this$state.newStatus;
        var _this$props = _this.props,
            onAppearStart = _this$props.onAppearStart,
            onEnterStart = _this$props.onEnterStart,
            onLeaveStart = _this$props.onLeaveStart,
            onAppearActive = _this$props.onAppearActive,
            onEnterActive = _this$props.onEnterActive,
            onLeaveActive = _this$props.onLeaveActive,
            motionAppear = _this$props.motionAppear,
            motionEnter = _this$props.motionEnter,
            motionLeave = _this$props.motionLeave;


        if (!isSupportTransition(_this.props)) {
          return;
        }

        // Event injection
        var $ele = _this.getElement();
        if (_this.$cacheEle !== $ele) {
          _this.removeEventListener(_this.$cacheEle);
          _this.addEventListener($ele);
          _this.$cacheEle = $ele;
        }

        // Init status
        if (newStatus && status === STATUS_APPEAR && motionAppear) {
          _this.updateStatus(onAppearStart, null, null, function () {
            _this.updateActiveStatus(onAppearActive, STATUS_APPEAR);
          });
        } else if (newStatus && status === STATUS_ENTER && motionEnter) {
          _this.updateStatus(onEnterStart, null, null, function () {
            _this.updateActiveStatus(onEnterActive, STATUS_ENTER);
          });
        } else if (newStatus && status === STATUS_LEAVE && motionLeave) {
          _this.updateStatus(onLeaveStart, null, null, function () {
            _this.updateActiveStatus(onLeaveActive, STATUS_LEAVE);
          });
        }
      };

      _this.onMotionEnd = function (event) {
        var _this$state2 = _this.state,
            status = _this$state2.status,
            statusActive = _this$state2.statusActive;
        var _this$props2 = _this.props,
            onAppearEnd = _this$props2.onAppearEnd,
            onEnterEnd = _this$props2.onEnterEnd,
            onLeaveEnd = _this$props2.onLeaveEnd;

        if (status === STATUS_APPEAR && statusActive) {
          _this.updateStatus(onAppearEnd, { status: STATUS_NONE }, event);
        } else if (status === STATUS_ENTER && statusActive) {
          _this.updateStatus(onEnterEnd, { status: STATUS_NONE }, event);
        } else if (status === STATUS_LEAVE && statusActive) {
          _this.updateStatus(onLeaveEnd, { status: STATUS_NONE }, event);
        }
      };

      _this.setNodeRef = function (node) {
        var internalRef = _this.props.internalRef;

        _this.node = node;

        if (typeof internalRef === 'function') {
          internalRef(node);
        } else if (internalRef && 'current' in internalRef) {
          internalRef.current = node;
        }
      };

      _this.getElement = function () {
        try {
          return (0, _findDOMNode2['default'])(_this.node || _this);
        } catch (e) {
          /**
           * Fallback to cache element.
           * This is only happen when `motionDeadline` trigger but element removed.
           */
          return _this.$cacheEle;
        }
      };

      _this.addEventListener = function ($ele) {
        if (!$ele) return;

        $ele.addEventListener(_motion.transitionEndName, _this.onMotionEnd);
        $ele.addEventListener(_motion.animationEndName, _this.onMotionEnd);
      };

      _this.removeEventListener = function ($ele) {
        if (!$ele) return;

        $ele.removeEventListener(_motion.transitionEndName, _this.onMotionEnd);
        $ele.removeEventListener(_motion.animationEndName, _this.onMotionEnd);
      };

      _this.updateStatus = function (styleFunc, additionalState, event, callback) {
        var statusStyle = styleFunc ? styleFunc(_this.getElement(), event) : null;

        if (statusStyle === false || _this._destroyed) return;

        var nextStep = void 0;
        if (callback) {
          nextStep = function nextStep() {
            _this.nextFrame(callback);
          };
        }

        _this.setState(_extends({
          statusStyle: typeof statusStyle === 'object' ? statusStyle : null,
          newStatus: false
        }, additionalState), nextStep); // Trigger before next frame & after `componentDidMount`
      };

      _this.updateActiveStatus = function (styleFunc, currentStatus) {
        // `setState` use `postMessage` to trigger at the end of frame.
        // Let's use requestAnimationFrame to update new state in next frame.
        _this.nextFrame(function () {
          var status = _this.state.status;

          if (status !== currentStatus) return;

          var motionDeadline = _this.props.motionDeadline;


          _this.updateStatus(styleFunc, { statusActive: true });

          if (motionDeadline > 0) {
            setTimeout(function () {
              _this.onMotionEnd({
                deadline: true
              });
            }, motionDeadline);
          }
        });
      };

      _this.nextFrame = function (func) {
        _this.cancelNextFrame();
        _this.raf = (0, _raf2['default'])(func);
      };

      _this.cancelNextFrame = function () {
        if (_this.raf) {
          _raf2['default'].cancel(_this.raf);
          _this.raf = null;
        }
      };

      _this.state = {
        status: STATUS_NONE,
        statusActive: false,
        newStatus: false,
        statusStyle: null
      };
      _this.$cacheEle = null;
      _this.node = null;
      _this.raf = null;
      return _this;
    }

    _createClass(CSSMotion, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.onDomUpdate();
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.onDomUpdate();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._destroyed = true;
        this.removeEventListener(this.$cacheEle);
        this.cancelNextFrame();
      }
    }, {
      key: 'render',
      value: function render() {
        var _classNames;

        var _state = this.state,
            status = _state.status,
            statusActive = _state.statusActive,
            statusStyle = _state.statusStyle;
        var _props = this.props,
            children = _props.children,
            motionName = _props.motionName,
            visible = _props.visible,
            removeOnLeave = _props.removeOnLeave,
            leavedClassName = _props.leavedClassName,
            eventProps = _props.eventProps;


        if (!children) return null;

        if (status === STATUS_NONE || !isSupportTransition(this.props)) {
          if (visible) {
            return children(_extends({}, eventProps), this.setNodeRef);
          } else if (!removeOnLeave) {
            return children(_extends({}, eventProps, { className: leavedClassName }), this.setNodeRef);
          }

          return null;
        }

        return children(_extends({}, eventProps, {
          className: (0, _classnames2['default'])((_classNames = {}, _defineProperty(_classNames, (0, _motion.getTransitionName)(motionName, status), status !== STATUS_NONE), _defineProperty(_classNames, (0, _motion.getTransitionName)(motionName, status + '-active'), status !== STATUS_NONE && statusActive), _defineProperty(_classNames, motionName, typeof motionName === 'string'), _classNames)),
          style: statusStyle
        }), this.setNodeRef);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(props, _ref) {
        var prevProps = _ref.prevProps,
            prevStatus = _ref.status;

        if (!isSupportTransition(props)) return {};

        var visible = props.visible,
            motionAppear = props.motionAppear,
            motionEnter = props.motionEnter,
            motionLeave = props.motionLeave,
            motionLeaveImmediately = props.motionLeaveImmediately;

        var newState = {
          prevProps: props
        };

        // Clean up status if prop set to false
        if (prevStatus === STATUS_APPEAR && !motionAppear || prevStatus === STATUS_ENTER && !motionEnter || prevStatus === STATUS_LEAVE && !motionLeave) {
          newState.status = STATUS_NONE;
          newState.statusActive = false;
          newState.newStatus = false;
        }

        // Appear
        if (!prevProps && visible && motionAppear) {
          newState.status = STATUS_APPEAR;
          newState.statusActive = false;
          newState.newStatus = true;
        }

        // Enter
        if (prevProps && !prevProps.visible && visible && motionEnter) {
          newState.status = STATUS_ENTER;
          newState.statusActive = false;
          newState.newStatus = true;
        }

        // Leave
        if (prevProps && prevProps.visible && !visible && motionLeave || !prevProps && motionLeaveImmediately && !visible && motionLeave) {
          newState.status = STATUS_LEAVE;
          newState.statusActive = false;
          newState.newStatus = true;
        }

        return newState;
      }
    }]);

    return CSSMotion;
  }(_react2['default'].Component);

  CSSMotion.defaultProps = {
    visible: true,
    motionEnter: true,
    motionAppear: true,
    motionLeave: true,
    removeOnLeave: true
  };


  if (!forwardRef) {
    return CSSMotion;
  }

  return _react2['default'].forwardRef(function (props, ref) {
    return _react2['default'].createElement(CSSMotion, _extends({ internalRef: ref }, props));
  });
}

exports['default'] = genCSSMotion(_motion.supportTransition);

/***/ }),

/***/ "./node_modules/rc-animate/lib/util/motion.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-animate/lib/util/motion.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVendorPrefixes = getVendorPrefixes;
exports.getVendorPrefixedEventName = getVendorPrefixedEventName;
exports.getTransitionName = getTransitionName;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

// ================= Transition =================
// Event wrapper. Copy from react source code
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};

  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes['Webkit' + styleProp] = 'webkit' + eventName;
  prefixes['Moz' + styleProp] = 'moz' + eventName;
  prefixes['ms' + styleProp] = 'MS' + eventName;
  prefixes['O' + styleProp] = 'o' + eventName.toLowerCase();

  return prefixes;
}

function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };

  if (domSupport) {
    if (!('AnimationEvent' in win)) {
      delete prefixes.animationend.animation;
    }

    if (!('TransitionEvent' in win)) {
      delete prefixes.transitionend.transition;
    }
  }

  return prefixes;
}

var vendorPrefixes = getVendorPrefixes(canUseDOM, typeof window !== 'undefined' ? window : {});

var style = {};

if (canUseDOM) {
  style = document.createElement('div').style;
}

var prefixedEventNames = {};

function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }

  var prefixMap = vendorPrefixes[eventName];

  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;
    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];
      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }

  return '';
}

var animationEndName = exports.animationEndName = getVendorPrefixedEventName('animationend');
var transitionEndName = exports.transitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = exports.supportTransition = !!(animationEndName && transitionEndName);

function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;

  if (typeof transitionName === 'object') {
    var type = transitionType.replace(/-\w/g, function (match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }

  return transitionName + '-' + transitionType;
}

/***/ }),

/***/ "./node_modules/rc-notification/lib/Notice.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-notification/lib/Notice.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Notice = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Notice, _Component);

  var _super = _createSuper(Notice);

  function Notice() {
    var _this;

    (0, _classCallCheck2.default)(this, Notice);
    _this = _super.apply(this, arguments);
    _this.closeTimer = null;

    _this.close = function (e) {
      if (e) {
        e.stopPropagation();
      }

      _this.clearCloseTimer();

      var onClose = _this.props.onClose;

      if (onClose) {
        onClose();
      }
    };

    _this.startCloseTimer = function () {
      if (_this.props.duration) {
        _this.closeTimer = window.setTimeout(function () {
          _this.close();
        }, _this.props.duration * 1000);
      }
    };

    _this.clearCloseTimer = function () {
      if (_this.closeTimer) {
        clearTimeout(_this.closeTimer);
        _this.closeTimer = null;
      }
    };

    return _this;
  }

  (0, _createClass2.default)(Notice, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startCloseTimer();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.duration !== prevProps.duration || this.props.update) {
        this.restartCloseTimer();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.clearCloseTimer();
    }
  }, {
    key: "restartCloseTimer",
    value: function restartCloseTimer() {
      this.clearCloseTimer();
      this.startCloseTimer();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          prefixCls = _this$props.prefixCls,
          className = _this$props.className,
          closable = _this$props.closable,
          closeIcon = _this$props.closeIcon,
          style = _this$props.style,
          onClick = _this$props.onClick,
          children = _this$props.children,
          holder = _this$props.holder;
      var componentClass = "".concat(prefixCls, "-notice");
      var dataOrAriaAttributeProps = Object.keys(this.props).reduce(function (acc, key) {
        if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') {
          acc[key] = _this2.props[key];
        }

        return acc;
      }, {});

      var node = _react.default.createElement("div", Object.assign({
        className: (0, _classnames.default)(componentClass, className, (0, _defineProperty2.default)({}, "".concat(componentClass, "-closable"), closable)),
        style: style,
        onMouseEnter: this.clearCloseTimer,
        onMouseLeave: this.startCloseTimer,
        onClick: onClick
      }, dataOrAriaAttributeProps), _react.default.createElement("div", {
        className: "".concat(componentClass, "-content")
      }, children), closable ? _react.default.createElement("a", {
        tabIndex: 0,
        onClick: this.close,
        className: "".concat(componentClass, "-close")
      }, closeIcon || _react.default.createElement("span", {
        className: "".concat(componentClass, "-close-x")
      })) : null);

      if (holder) {
        return _reactDom.default.createPortal(node, holder);
      }

      return node;
    }
  }]);
  return Notice;
}(_react.Component);

exports.default = Notice;
Notice.defaultProps = {
  onClose: function onClose() {},
  duration: 1.5,
  style: {
    right: '50%'
  }
};

/***/ }),

/***/ "./node_modules/rc-notification/lib/useNotification.js":
/*!*************************************************************!*\
  !*** ./node_modules/rc-notification/lib/useNotification.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useNotification;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _Notice = _interopRequireDefault(__webpack_require__(/*! ./Notice */ "./node_modules/rc-notification/lib/Notice.js"));

function useNotification(notificationInstance) {
  var createdRef = React.useRef({});

  var _React$useState = React.useState([]),
      _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
      elements = _React$useState2[0],
      setElements = _React$useState2[1];

  function notify(noticeProps) {
    notificationInstance.add(noticeProps, function (div, props) {
      var key = props.key;

      if (div && !createdRef.current[key]) {
        var noticeEle = React.createElement(_Notice.default, Object.assign({}, props, {
          holder: div
        }));
        createdRef.current[key] = noticeEle;
        setElements(function (originElements) {
          return [].concat((0, _toConsumableArray2.default)(originElements), [noticeEle]);
        });
      }
    });
  }

  return [notify, React.createElement(React.Fragment, null, elements)];
}

/***/ }),

/***/ "./node_modules/rc-pagination/lib/locale/en_US.js":
/*!********************************************************!*\
  !*** ./node_modules/rc-pagination/lib/locale/en_US.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  // Options.jsx
  items_per_page: '/ page',
  jump_to: 'Go to',
  jump_to_confirm: 'confirm',
  page: '',
  // Pagination.jsx
  prev_page: 'Previous Page',
  next_page: 'Next Page',
  prev_5: 'Previous 5 Pages',
  next_5: 'Next 5 Pages',
  prev_3: 'Previous 3 Pages',
  next_3: 'Next 3 Pages'
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-picker/lib/locale/en_US.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-picker/lib/locale/en_US.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var locale = {
  locale: 'en_US',
  today: 'Today',
  now: 'Now',
  backToToday: 'Back to today',
  ok: 'Ok',
  clear: 'Clear',
  month: 'Month',
  year: 'Year',
  timeSelect: 'select time',
  dateSelect: 'select date',
  weekSelect: 'Choose a week',
  monthSelect: 'Choose a month',
  yearSelect: 'Choose a year',
  decadeSelect: 'Choose a decade',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Previous month (PageUp)',
  nextMonth: 'Next month (PageDown)',
  previousYear: 'Last year (Control + left)',
  nextYear: 'Next year (Control + right)',
  previousDecade: 'Last decade',
  nextDecade: 'Next decade',
  previousCentury: 'Last century',
  nextCentury: 'Next century'
};
var _default = locale;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-tooltip/lib/placements.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-tooltip/lib/placements.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.placements = void 0;
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};
exports.placements = placements;
var _default = placements;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-tree/lib/Indent.js":
/*!********************************************!*\
  !*** ./node_modules/rc-tree/lib/Indent.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var Indent = function Indent(_ref) {
  var prefixCls = _ref.prefixCls,
      level = _ref.level,
      isStart = _ref.isStart,
      isEnd = _ref.isEnd;

  if (!level) {
    return null;
  }

  var baseClassName = "".concat(prefixCls, "-indent-unit");
  var list = [];

  for (var i = 0; i < level; i += 1) {
    var _classNames;

    list.push(React.createElement("span", {
      key: i,
      className: (0, _classnames.default)(baseClassName, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(baseClassName, "-start"), isStart[i + 1]), (0, _defineProperty2.default)(_classNames, "".concat(baseClassName, "-end"), isEnd[i + 1]), _classNames))
    }));
  }

  return React.createElement("span", {
    "aria-hidden": "true",
    className: "".concat(prefixCls, "-indent")
  }, list);
};

var _default = Indent;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-tree/lib/TreeNode.js":
/*!**********************************************!*\
  !*** ./node_modules/rc-tree/lib/TreeNode.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InternalTreeNode = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _contextTypes = __webpack_require__(/*! ./contextTypes */ "./node_modules/rc-tree/lib/contextTypes.js");

var _util = __webpack_require__(/*! ./util */ "./node_modules/rc-tree/lib/util.js");

var _Indent = _interopRequireDefault(__webpack_require__(/*! ./Indent */ "./node_modules/rc-tree/lib/Indent.js"));

var _treeUtil = __webpack_require__(/*! ./utils/treeUtil */ "./node_modules/rc-tree/lib/utils/treeUtil.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ICON_OPEN = 'open';
var ICON_CLOSE = 'close';
var defaultTitle = '---';

var InternalTreeNode = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(InternalTreeNode, _React$Component);

  var _super = _createSuper(InternalTreeNode);

  function InternalTreeNode() {
    var _this;

    (0, _classCallCheck2.default)(this, InternalTreeNode);
    _this = _super.apply(this, arguments);
    _this.state = {
      dragNodeHighlight: false
    };

    _this.onSelectorClick = function (e) {
      // Click trigger before select/check operation
      var onNodeClick = _this.props.context.onNodeClick;
      onNodeClick(e, (0, _treeUtil.convertNodePropsToEventData)(_this.props));

      if (_this.isSelectable()) {
        _this.onSelect(e);
      } else {
        _this.onCheck(e);
      }
    };

    _this.onSelectorDoubleClick = function (e) {
      var onNodeDoubleClick = _this.props.context.onNodeDoubleClick;
      onNodeDoubleClick(e, (0, _treeUtil.convertNodePropsToEventData)(_this.props));
    };

    _this.onSelect = function (e) {
      if (_this.isDisabled()) return;
      var onNodeSelect = _this.props.context.onNodeSelect;
      e.preventDefault();
      onNodeSelect(e, (0, _treeUtil.convertNodePropsToEventData)(_this.props));
    };

    _this.onCheck = function (e) {
      if (_this.isDisabled()) return;
      var _this$props = _this.props,
          disableCheckbox = _this$props.disableCheckbox,
          checked = _this$props.checked;
      var onNodeCheck = _this.props.context.onNodeCheck;
      if (!_this.isCheckable() || disableCheckbox) return;
      e.preventDefault();
      var targetChecked = !checked;
      onNodeCheck(e, (0, _treeUtil.convertNodePropsToEventData)(_this.props), targetChecked);
    };

    _this.onMouseEnter = function (e) {
      var onNodeMouseEnter = _this.props.context.onNodeMouseEnter;
      onNodeMouseEnter(e, (0, _treeUtil.convertNodePropsToEventData)(_this.props));
    };

    _this.onMouseLeave = function (e) {
      var onNodeMouseLeave = _this.props.context.onNodeMouseLeave;
      onNodeMouseLeave(e, (0, _treeUtil.convertNodePropsToEventData)(_this.props));
    };

    _this.onContextMenu = function (e) {
      var onNodeContextMenu = _this.props.context.onNodeContextMenu;
      onNodeContextMenu(e, (0, _treeUtil.convertNodePropsToEventData)(_this.props));
    };

    _this.onDragStart = function (e) {
      var onNodeDragStart = _this.props.context.onNodeDragStart;
      e.stopPropagation();

      _this.setState({
        dragNodeHighlight: true
      });

      onNodeDragStart(e, (0, _assertThisInitialized2.default)(_this));

      try {
        // ie throw error
        // firefox-need-it
        e.dataTransfer.setData('text/plain', '');
      } catch (error) {// empty
      }
    };

    _this.onDragEnter = function (e) {
      var onNodeDragEnter = _this.props.context.onNodeDragEnter;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragEnter(e, (0, _assertThisInitialized2.default)(_this));
    };

    _this.onDragOver = function (e) {
      var onNodeDragOver = _this.props.context.onNodeDragOver;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragOver(e, (0, _assertThisInitialized2.default)(_this));
    };

    _this.onDragLeave = function (e) {
      var onNodeDragLeave = _this.props.context.onNodeDragLeave;
      e.stopPropagation();
      onNodeDragLeave(e, (0, _assertThisInitialized2.default)(_this));
    };

    _this.onDragEnd = function (e) {
      var onNodeDragEnd = _this.props.context.onNodeDragEnd;
      e.stopPropagation();

      _this.setState({
        dragNodeHighlight: false
      });

      onNodeDragEnd(e, (0, _assertThisInitialized2.default)(_this));
    };

    _this.onDrop = function (e) {
      var onNodeDrop = _this.props.context.onNodeDrop;
      e.preventDefault();
      e.stopPropagation();

      _this.setState({
        dragNodeHighlight: false
      });

      onNodeDrop(e, (0, _assertThisInitialized2.default)(_this));
    }; // Disabled item still can be switch


    _this.onExpand = function (e) {
      var onNodeExpand = _this.props.context.onNodeExpand;
      onNodeExpand(e, (0, _treeUtil.convertNodePropsToEventData)(_this.props));
    }; // Drag usage


    _this.setSelectHandle = function (node) {
      _this.selectHandle = node;
    };

    _this.getNodeState = function () {
      var expanded = _this.props.expanded;

      if (_this.isLeaf()) {
        return null;
      }

      return expanded ? ICON_OPEN : ICON_CLOSE;
    };

    _this.hasChildren = function () {
      var eventKey = _this.props.eventKey;
      var keyEntities = _this.props.context.keyEntities;

      var _ref = keyEntities[eventKey] || {},
          children = _ref.children;

      return !!(children || []).length;
    };

    _this.isLeaf = function () {
      var _this$props2 = _this.props,
          isLeaf = _this$props2.isLeaf,
          loaded = _this$props2.loaded;
      var loadData = _this.props.context.loadData;

      var hasChildren = _this.hasChildren();

      if (isLeaf === false) {
        return false;
      }

      return isLeaf || !loadData && !hasChildren || loadData && loaded && !hasChildren;
    };

    _this.isDisabled = function () {
      var disabled = _this.props.disabled;
      var treeDisabled = _this.props.context.disabled;
      return !!(treeDisabled || disabled);
    };

    _this.isCheckable = function () {
      var checkable = _this.props.checkable;
      var treeCheckable = _this.props.context.checkable; // Return false if tree or treeNode is not checkable

      if (!treeCheckable || checkable === false) return false;
      return treeCheckable;
    }; // Load data to avoid default expanded tree without data


    _this.syncLoadData = function (props) {
      var expanded = props.expanded,
          loading = props.loading,
          loaded = props.loaded;
      var _this$props$context = _this.props.context,
          loadData = _this$props$context.loadData,
          onNodeLoad = _this$props$context.onNodeLoad;
      if (loading) return; // read from state to avoid loadData at same time

      if (loadData && expanded && !_this.isLeaf()) {
        // We needn't reload data when has children in sync logic
        // It's only needed in node expanded
        if (!_this.hasChildren() && !loaded) {
          onNodeLoad((0, _treeUtil.convertNodePropsToEventData)(_this.props));
        }
      }
    }; // Switcher


    _this.renderSwitcher = function () {
      var _this$props3 = _this.props,
          expanded = _this$props3.expanded,
          switcherIconFromProps = _this$props3.switcherIcon;
      var _this$props$context2 = _this.props.context,
          prefixCls = _this$props$context2.prefixCls,
          switcherIconFromCtx = _this$props$context2.switcherIcon;
      var switcherIcon = switcherIconFromProps || switcherIconFromCtx;

      if (_this.isLeaf()) {
        return React.createElement("span", {
          className: (0, _classnames.default)("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher-noop"))
        }, typeof switcherIcon === 'function' ? switcherIcon(_objectSpread(_objectSpread({}, _this.props), {}, {
          isLeaf: true
        })) : switcherIcon);
      }

      var switcherCls = (0, _classnames.default)("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher_").concat(expanded ? ICON_OPEN : ICON_CLOSE));
      return React.createElement("span", {
        onClick: _this.onExpand,
        className: switcherCls
      }, typeof switcherIcon === 'function' ? switcherIcon(_objectSpread(_objectSpread({}, _this.props), {}, {
        isLeaf: false
      })) : switcherIcon);
    }; // Checkbox


    _this.renderCheckbox = function () {
      var _this$props4 = _this.props,
          checked = _this$props4.checked,
          halfChecked = _this$props4.halfChecked,
          disableCheckbox = _this$props4.disableCheckbox;
      var prefixCls = _this.props.context.prefixCls;

      var disabled = _this.isDisabled();

      var checkable = _this.isCheckable();

      if (!checkable) return null; // [Legacy] Custom element should be separate with `checkable` in future

      var $custom = typeof checkable !== 'boolean' ? checkable : null;
      return React.createElement("span", {
        className: (0, _classnames.default)("".concat(prefixCls, "-checkbox"), checked && "".concat(prefixCls, "-checkbox-checked"), !checked && halfChecked && "".concat(prefixCls, "-checkbox-indeterminate"), (disabled || disableCheckbox) && "".concat(prefixCls, "-checkbox-disabled")),
        onClick: _this.onCheck
      }, $custom);
    };

    _this.renderIcon = function () {
      var loading = _this.props.loading;
      var prefixCls = _this.props.context.prefixCls;
      return React.createElement("span", {
        className: (0, _classnames.default)("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__").concat(_this.getNodeState() || 'docu'), loading && "".concat(prefixCls, "-icon_loading"))
      });
    }; // Icon + Title


    _this.renderSelector = function () {
      var dragNodeHighlight = _this.state.dragNodeHighlight;
      var _this$props5 = _this.props,
          title = _this$props5.title,
          selected = _this$props5.selected,
          icon = _this$props5.icon,
          loading = _this$props5.loading,
          data = _this$props5.data;
      var _this$props$context3 = _this.props.context,
          prefixCls = _this$props$context3.prefixCls,
          showIcon = _this$props$context3.showIcon,
          treeIcon = _this$props$context3.icon,
          draggable = _this$props$context3.draggable,
          loadData = _this$props$context3.loadData;

      var disabled = _this.isDisabled();

      var wrapClass = "".concat(prefixCls, "-node-content-wrapper"); // Icon - Still show loading icon when loading without showIcon

      var $icon;

      if (showIcon) {
        var currentIcon = icon || treeIcon;
        $icon = currentIcon ? React.createElement("span", {
          className: (0, _classnames.default)("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__customize"))
        }, typeof currentIcon === 'function' ? currentIcon(_this.props) : currentIcon) : _this.renderIcon();
      } else if (loadData && loading) {
        $icon = _this.renderIcon();
      } // Title


      var $title = React.createElement("span", {
        className: "".concat(prefixCls, "-title")
      }, typeof title === 'function' ? title(data) : title);
      return React.createElement("span", {
        ref: _this.setSelectHandle,
        title: typeof title === 'string' ? title : '',
        className: (0, _classnames.default)("".concat(wrapClass), "".concat(wrapClass, "-").concat(_this.getNodeState() || 'normal'), !disabled && (selected || dragNodeHighlight) && "".concat(prefixCls, "-node-selected"), !disabled && draggable && 'draggable'),
        draggable: !disabled && draggable || undefined,
        "aria-grabbed": !disabled && draggable || undefined,
        onMouseEnter: _this.onMouseEnter,
        onMouseLeave: _this.onMouseLeave,
        onContextMenu: _this.onContextMenu,
        onClick: _this.onSelectorClick,
        onDoubleClick: _this.onSelectorDoubleClick,
        onDragStart: draggable ? _this.onDragStart : undefined
      }, $icon, $title);
    };

    return _this;
  } // Isomorphic needn't load data in server side


  (0, _createClass2.default)(InternalTreeNode, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.syncLoadData(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.syncLoadData(this.props);
    }
  }, {
    key: "isSelectable",
    value: function isSelectable() {
      var selectable = this.props.selectable;
      var treeSelectable = this.props.context.selectable; // Ignore when selectable is undefined or null

      if (typeof selectable === 'boolean') {
        return selectable;
      }

      return treeSelectable;
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props6 = this.props,
          eventKey = _this$props6.eventKey,
          className = _this$props6.className,
          style = _this$props6.style,
          dragOver = _this$props6.dragOver,
          dragOverGapTop = _this$props6.dragOverGapTop,
          dragOverGapBottom = _this$props6.dragOverGapBottom,
          isLeaf = _this$props6.isLeaf,
          isStart = _this$props6.isStart,
          isEnd = _this$props6.isEnd,
          expanded = _this$props6.expanded,
          selected = _this$props6.selected,
          checked = _this$props6.checked,
          halfChecked = _this$props6.halfChecked,
          loading = _this$props6.loading,
          domRef = _this$props6.domRef,
          active = _this$props6.active,
          onMouseMove = _this$props6.onMouseMove,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props6, ["eventKey", "className", "style", "dragOver", "dragOverGapTop", "dragOverGapBottom", "isLeaf", "isStart", "isEnd", "expanded", "selected", "checked", "halfChecked", "loading", "domRef", "active", "onMouseMove"]);
      var _this$props$context4 = this.props.context,
          prefixCls = _this$props$context4.prefixCls,
          filterTreeNode = _this$props$context4.filterTreeNode,
          draggable = _this$props$context4.draggable,
          keyEntities = _this$props$context4.keyEntities;
      var disabled = this.isDisabled();
      var dataOrAriaAttributeProps = (0, _util.getDataAndAria)(otherProps);

      var _ref2 = keyEntities[eventKey] || {},
          level = _ref2.level;

      var isEndNode = isEnd[isEnd.length - 1];
      return React.createElement("div", Object.assign({
        ref: domRef,
        className: (0, _classnames.default)(className, "".concat(prefixCls, "-treenode"), (_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-treenode-disabled"), disabled), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-treenode-switcher-").concat(expanded ? 'open' : 'close'), !isLeaf), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-treenode-checkbox-checked"), checked), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-treenode-checkbox-indeterminate"), halfChecked), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-treenode-selected"), selected), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-treenode-loading"), loading), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-treenode-active"), active), (0, _defineProperty2.default)(_classNames, "".concat(prefixCls, "-treenode-leaf-last"), isEndNode), (0, _defineProperty2.default)(_classNames, 'drag-over', !disabled && dragOver), (0, _defineProperty2.default)(_classNames, 'drag-over-gap-top', !disabled && dragOverGapTop), (0, _defineProperty2.default)(_classNames, 'drag-over-gap-bottom', !disabled && dragOverGapBottom), (0, _defineProperty2.default)(_classNames, 'filter-node', filterTreeNode && filterTreeNode((0, _treeUtil.convertNodePropsToEventData)(this.props))), _classNames)),
        style: style,
        onDragEnter: draggable ? this.onDragEnter : undefined,
        onDragOver: draggable ? this.onDragOver : undefined,
        onDragLeave: draggable ? this.onDragLeave : undefined,
        onDrop: draggable ? this.onDrop : undefined,
        onDragEnd: draggable ? this.onDragEnd : undefined,
        onMouseMove: onMouseMove
      }, dataOrAriaAttributeProps), React.createElement(_Indent.default, {
        prefixCls: prefixCls,
        level: level,
        isStart: isStart,
        isEnd: isEnd
      }), this.renderSwitcher(), this.renderCheckbox(), this.renderSelector());
    }
  }]);
  return InternalTreeNode;
}(React.Component);

exports.InternalTreeNode = InternalTreeNode;

var ContextTreeNode = function ContextTreeNode(props) {
  return React.createElement(_contextTypes.TreeContext.Consumer, null, function (context) {
    return React.createElement(InternalTreeNode, Object.assign({}, props, {
      context: context
    }));
  });
};

ContextTreeNode.displayName = 'TreeNode';
ContextTreeNode.defaultProps = {
  title: defaultTitle
};
ContextTreeNode.isTreeNode = 1;
var _default = ContextTreeNode;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-tree/lib/contextTypes.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-tree/lib/contextTypes.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeContext = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

/**
 * Webpack has bug for import loop, which is not the same behavior as ES module.
 * When util.js imports the TreeNode for tree generate will cause treeContextTypes be empty.
 */
var TreeContext = React.createContext(null);
exports.TreeContext = TreeContext;

/***/ }),

/***/ "./node_modules/rc-tree/lib/util.js":
/*!******************************************!*\
  !*** ./node_modules/rc-tree/lib/util.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrDel = arrDel;
exports.arrAdd = arrAdd;
exports.posToArr = posToArr;
exports.getPosition = getPosition;
exports.isTreeNode = isTreeNode;
exports.getDragNodesKeys = getDragNodesKeys;
exports.calcDropPosition = calcDropPosition;
exports.calcSelectedKeys = calcSelectedKeys;
exports.convertDataToTree = convertDataToTree;
exports.parseCheckedKeys = parseCheckedKeys;
exports.conductExpandParent = conductExpandParent;
exports.getDataAndAria = getDataAndAria;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/warning */ "./node_modules/rc-util/lib/warning.js"));

var _TreeNode = _interopRequireDefault(__webpack_require__(/*! ./TreeNode */ "./node_modules/rc-tree/lib/TreeNode.js"));

/**
 * Legacy code. Should avoid to use if you are new to import these code.
 */
var DRAG_SIDE_RANGE = 0.25;
var DRAG_MIN_GAP = 2;

function arrDel(list, value) {
  var clone = list.slice();
  var index = clone.indexOf(value);

  if (index >= 0) {
    clone.splice(index, 1);
  }

  return clone;
}

function arrAdd(list, value) {
  var clone = list.slice();

  if (clone.indexOf(value) === -1) {
    clone.push(value);
  }

  return clone;
}

function posToArr(pos) {
  return pos.split('-');
}

function getPosition(level, index) {
  return "".concat(level, "-").concat(index);
}

function isTreeNode(node) {
  return node && node.type && node.type.isTreeNode;
}

function getDragNodesKeys(dragNodeKey, keyEntities) {
  var dragNodesKeys = [dragNodeKey];
  var entity = keyEntities[dragNodeKey];

  function dig() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    list.forEach(function (_ref) {
      var key = _ref.key,
          children = _ref.children;
      dragNodesKeys.push(key);
      dig(children);
    });
  }

  dig(entity.children);
  return dragNodesKeys;
} // Only used when drag, not affect SSR.


function calcDropPosition(event, treeNode) {
  var clientY = event.clientY;

  var _treeNode$selectHandl = treeNode.selectHandle.getBoundingClientRect(),
      top = _treeNode$selectHandl.top,
      bottom = _treeNode$selectHandl.bottom,
      height = _treeNode$selectHandl.height;

  var des = Math.max(height * DRAG_SIDE_RANGE, DRAG_MIN_GAP);

  if (clientY <= top + des) {
    return -1;
  }

  if (clientY >= bottom - des) {
    return 1;
  }

  return 0;
}
/**
 * Return selectedKeys according with multiple prop
 * @param selectedKeys
 * @param props
 * @returns [string]
 */


function calcSelectedKeys(selectedKeys, props) {
  if (!selectedKeys) return undefined;
  var multiple = props.multiple;

  if (multiple) {
    return selectedKeys.slice();
  }

  if (selectedKeys.length) {
    return [selectedKeys[0]];
  }

  return selectedKeys;
}

var internalProcessProps = function internalProcessProps(props) {
  return props;
};

function convertDataToTree(treeData, processor) {
  if (!treeData) return [];

  var _ref2 = processor || {},
      _ref2$processProps = _ref2.processProps,
      processProps = _ref2$processProps === void 0 ? internalProcessProps : _ref2$processProps;

  var list = Array.isArray(treeData) ? treeData : [treeData];
  return list.map(function (_ref3) {
    var children = _ref3.children,
        props = (0, _objectWithoutProperties2.default)(_ref3, ["children"]);
    var childrenNodes = convertDataToTree(children, processor);
    return _react.default.createElement(_TreeNode.default, Object.assign({}, processProps(props)), childrenNodes);
  });
}
/**
 * Parse `checkedKeys` to { checkedKeys, halfCheckedKeys } style
 */


function parseCheckedKeys(keys) {
  if (!keys) {
    return null;
  } // Convert keys to object format


  var keyProps;

  if (Array.isArray(keys)) {
    // [Legacy] Follow the api doc
    keyProps = {
      checkedKeys: keys,
      halfCheckedKeys: undefined
    };
  } else if ((0, _typeof2.default)(keys) === 'object') {
    keyProps = {
      checkedKeys: keys.checked || undefined,
      halfCheckedKeys: keys.halfChecked || undefined
    };
  } else {
    (0, _warning.default)(false, '`checkedKeys` is not an array or an object');
    return null;
  }

  return keyProps;
}
/**
 * If user use `autoExpandParent` we should get the list of parent node
 * @param keyList
 * @param keyEntities
 */


function conductExpandParent(keyList, keyEntities) {
  var expandedKeys = new Set();

  function conductUp(key) {
    if (expandedKeys.has(key)) return;
    var entity = keyEntities[key];
    if (!entity) return;
    expandedKeys.add(key);
    var parent = entity.parent,
        node = entity.node;
    if (node.disabled) return;

    if (parent) {
      conductUp(parent.key);
    }
  }

  (keyList || []).forEach(function (key) {
    conductUp(key);
  });
  return (0, _toConsumableArray2.default)(expandedKeys);
}
/**
 * Returns only the data- and aria- key/value pairs
 */


function getDataAndAria(props) {
  var omitProps = {};
  Object.keys(props).forEach(function (key) {
    if (key.startsWith('data-') || key.startsWith('aria-')) {
      omitProps[key] = props[key];
    }
  });
  return omitProps;
}

/***/ }),

/***/ "./node_modules/rc-tree/lib/utils/conductUtil.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-tree/lib/utils/conductUtil.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCheckDisabled = isCheckDisabled;
exports.conductCheck = conductCheck;

var _warning = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/warning */ "./node_modules/rc-util/lib/warning.js"));

function removeFromCheckedKeys(halfCheckedKeys, checkedKeys) {
  var filteredKeys = new Set();
  halfCheckedKeys.forEach(function (key) {
    if (!checkedKeys.has(key)) {
      filteredKeys.add(key);
    }
  });
  return filteredKeys;
}

function isCheckDisabled(node) {
  var _ref = node || {},
      disabled = _ref.disabled,
      disableCheckbox = _ref.disableCheckbox,
      checkable = _ref.checkable;

  return !!(disabled || disableCheckbox) || checkable === false;
} // Fill miss keys


function fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys);
  var halfCheckedKeys = new Set(); // Add checked keys top to bottom

  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || new Set();
    entities.forEach(function (entity) {
      var key = entity.key,
          node = entity.node,
          _entity$children = entity.children,
          children = _entity$children === void 0 ? [] : _entity$children;

      if (checkedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
        children.filter(function (childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        }).forEach(function (childEntity) {
          checkedKeys.add(childEntity.key);
        });
      }
    });
  } // Add checked keys from bottom to top


  var visitedKeys = new Set();

  for (var _level = maxLevel; _level >= 0; _level -= 1) {
    var _entities = levelEntities.get(_level) || new Set();

    _entities.forEach(function (entity) {
      var parent = entity.parent,
          node = entity.node; // Skip if no need to check

      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      } // Skip if parent is disabled


      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }

      var allChecked = true;
      var partialChecked = false;
      (parent.children || []).filter(function (childEntity) {
        return !syntheticGetCheckDisabled(childEntity.node);
      }).forEach(function (_ref2) {
        var key = _ref2.key;
        var checked = checkedKeys.has(key);

        if (allChecked && !checked) {
          allChecked = false;
        }

        if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
          partialChecked = true;
        }
      });

      if (allChecked) {
        checkedKeys.add(parent.key);
      }

      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }

      visitedKeys.add(parent.key);
    });
  }

  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
} // Remove useless key


function cleanConductCheck(keys, halfKeys, levelEntities, maxLevel, syntheticGetCheckDisabled) {
  var checkedKeys = new Set(keys);
  var halfCheckedKeys = new Set(halfKeys); // Remove checked keys from top to bottom

  for (var level = 0; level <= maxLevel; level += 1) {
    var entities = levelEntities.get(level) || new Set();
    entities.forEach(function (entity) {
      var key = entity.key,
          node = entity.node,
          _entity$children2 = entity.children,
          children = _entity$children2 === void 0 ? [] : _entity$children2;

      if (!checkedKeys.has(key) && !halfCheckedKeys.has(key) && !syntheticGetCheckDisabled(node)) {
        children.filter(function (childEntity) {
          return !syntheticGetCheckDisabled(childEntity.node);
        }).forEach(function (childEntity) {
          checkedKeys.delete(childEntity.key);
        });
      }
    });
  } // Remove checked keys form bottom to top


  halfCheckedKeys = new Set();
  var visitedKeys = new Set();

  for (var _level2 = maxLevel; _level2 >= 0; _level2 -= 1) {
    var _entities2 = levelEntities.get(_level2) || new Set();

    _entities2.forEach(function (entity) {
      var parent = entity.parent,
          node = entity.node; // Skip if no need to check

      if (syntheticGetCheckDisabled(node) || !entity.parent || visitedKeys.has(entity.parent.key)) {
        return;
      } // Skip if parent is disabled


      if (syntheticGetCheckDisabled(entity.parent.node)) {
        visitedKeys.add(parent.key);
        return;
      }

      var allChecked = true;
      var partialChecked = false;
      (parent.children || []).filter(function (childEntity) {
        return !syntheticGetCheckDisabled(childEntity.node);
      }).forEach(function (_ref3) {
        var key = _ref3.key;
        var checked = checkedKeys.has(key);

        if (allChecked && !checked) {
          allChecked = false;
        }

        if (!partialChecked && (checked || halfCheckedKeys.has(key))) {
          partialChecked = true;
        }
      });

      if (!allChecked) {
        checkedKeys.delete(parent.key);
      }

      if (partialChecked) {
        halfCheckedKeys.add(parent.key);
      }

      visitedKeys.add(parent.key);
    });
  }

  return {
    checkedKeys: Array.from(checkedKeys),
    halfCheckedKeys: Array.from(removeFromCheckedKeys(halfCheckedKeys, checkedKeys))
  };
}
/**
 * Conduct with keys.
 * @param keyList current key list
 * @param keyEntities key - dataEntity map
 * @param mode `fill` to fill missing key, `clean` to remove useless key
 */


function conductCheck(keyList, checked, keyEntities, getCheckDisabled) {
  var warningMissKeys = [];
  var syntheticGetCheckDisabled;

  if (getCheckDisabled) {
    syntheticGetCheckDisabled = getCheckDisabled;
  } else {
    syntheticGetCheckDisabled = isCheckDisabled;
  } // We only handle exist keys


  var keys = new Set(keyList.filter(function (key) {
    var hasEntity = !!keyEntities[key];

    if (!hasEntity) {
      warningMissKeys.push(key);
    }

    return hasEntity;
  }));
  var levelEntities = new Map();
  var maxLevel = 0; // Convert entities by level for calculation

  Object.keys(keyEntities).forEach(function (key) {
    var entity = keyEntities[key];
    var level = entity.level;
    var levelSet = levelEntities.get(level);

    if (!levelSet) {
      levelSet = new Set();
      levelEntities.set(level, levelSet);
    }

    levelSet.add(entity);
    maxLevel = Math.max(maxLevel, level);
  });
  (0, _warning.default)(!warningMissKeys.length, "Tree missing follow keys: ".concat(warningMissKeys.slice(0, 100).map(function (key) {
    return "'".concat(key, "'");
  }).join(', ')));
  var result;

  if (checked === true) {
    result = fillConductCheck(keys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  } else {
    result = cleanConductCheck(keys, checked.halfCheckedKeys, levelEntities, maxLevel, syntheticGetCheckDisabled);
  }

  return result;
}

/***/ }),

/***/ "./node_modules/rc-tree/lib/utils/treeUtil.js":
/*!****************************************************!*\
  !*** ./node_modules/rc-tree/lib/utils/treeUtil.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getKey = getKey;
exports.warningWithoutKey = warningWithoutKey;
exports.convertTreeToData = convertTreeToData;
exports.flattenTreeData = flattenTreeData;
exports.traverseDataNodes = traverseDataNodes;
exports.convertDataToEntities = convertDataToEntities;
exports.getTreeNodeProps = getTreeNodeProps;
exports.convertNodePropsToEventData = convertNodePropsToEventData;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _toArray = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/Children/toArray */ "./node_modules/rc-util/lib/Children/toArray.js"));

var _warning = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/warning */ "./node_modules/rc-util/lib/warning.js"));

var _util = __webpack_require__(/*! ../util */ "./node_modules/rc-tree/lib/util.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function getKey(key, pos) {
  if (key !== null && key !== undefined) {
    return key;
  }

  return pos;
}
/**
 * Warning if TreeNode do not provides key
 */


function warningWithoutKey() {
  var treeData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var keys = new Map();

  function dig(list) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    (list || []).forEach(function (treeNode) {
      var key = treeNode.key,
          children = treeNode.children;
      (0, _warning.default)(key !== null && key !== undefined, "Tree node must have a certain key: [".concat(path).concat(key, "]"));
      var recordKey = String(key);
      (0, _warning.default)(!keys.has(recordKey) || key === null || key === undefined, "Same 'key' exist in the Tree: ".concat(recordKey));
      keys.set(recordKey, true);
      dig(children, "".concat(path).concat(recordKey, " > "));
    });
  }

  dig(treeData);
}
/**
 * Convert `children` of Tree into `treeData` structure.
 */


function convertTreeToData(rootNodes) {
  function dig(node) {
    var treeNodes = (0, _toArray.default)(node);
    return treeNodes.map(function (treeNode) {
      // Filter invalidate node
      if (!(0, _util.isTreeNode)(treeNode)) {
        (0, _warning.default)(!treeNode, 'Tree/TreeNode can only accept TreeNode as children.');
        return null;
      }

      var key = treeNode.key;
      var _treeNode$props = treeNode.props,
          children = _treeNode$props.children,
          rest = (0, _objectWithoutProperties2.default)(_treeNode$props, ["children"]);

      var dataNode = _objectSpread({
        key: key
      }, rest);

      var parsedChildren = dig(children);

      if (parsedChildren.length) {
        dataNode.children = parsedChildren;
      }

      return dataNode;
    }).filter(function (dataNode) {
      return dataNode;
    });
  }

  return dig(rootNodes);
}
/**
 * Flat nest tree data into flatten list. This is used for virtual list render.
 * @param treeNodeList Origin data node list
 * @param expandedKeys
 * need expanded keys, provides `true` means all expanded (used in `rc-tree-select`).
 */


function flattenTreeData() {
  var treeNodeList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var expandedKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var expandedKeySet = new Set(expandedKeys === true ? [] : expandedKeys);
  var flattenList = [];

  function dig(list) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return list.map(function (treeNode, index) {
      var pos = (0, _util.getPosition)(parent ? parent.pos : '0', index);
      var mergedKey = getKey(treeNode.key, pos); // Add FlattenDataNode into list

      var flattenNode = _objectSpread(_objectSpread({}, treeNode), {}, {
        parent: parent,
        pos: pos,
        children: null,
        data: treeNode,
        isStart: [].concat((0, _toConsumableArray2.default)(parent ? parent.isStart : []), [index === 0]),
        isEnd: [].concat((0, _toConsumableArray2.default)(parent ? parent.isEnd : []), [index === list.length - 1])
      });

      flattenList.push(flattenNode); // Loop treeNode children

      if (expandedKeys === true || expandedKeySet.has(mergedKey)) {
        flattenNode.children = dig(treeNode.children || [], flattenNode);
      } else {
        flattenNode.children = [];
      }

      return flattenNode;
    });
  }

  dig(treeNodeList);
  return flattenList;
}
/**
 * Traverse all the data by `treeData`.
 * Please not use it out of the `rc-tree` since we may refactor this code.
 */


function traverseDataNodes(dataNodes, callback, externalGetKey) {
  var syntheticGetKey;

  if (externalGetKey) {
    if (typeof externalGetKey === 'string') {
      syntheticGetKey = function syntheticGetKey(node) {
        return node[externalGetKey];
      };
    } else if (typeof externalGetKey === 'function') {
      syntheticGetKey = function syntheticGetKey(node) {
        return externalGetKey(node);
      };
    }
  } else {
    syntheticGetKey = function syntheticGetKey(node, pos) {
      return getKey(node.key, pos);
    };
  }

  function processNode(node, index, parent) {
    var children = node ? node.children : dataNodes;
    var pos = node ? (0, _util.getPosition)(parent.pos, index) : '0'; // Process node if is not root

    if (node) {
      var key = syntheticGetKey(node, pos);
      var data = {
        node: node,
        index: index,
        pos: pos,
        key: key,
        parentPos: parent.node ? parent.pos : null,
        level: parent.level + 1
      };
      callback(data);
    } // Process children node


    if (children) {
      children.forEach(function (subNode, subIndex) {
        processNode(subNode, subIndex, {
          node: node,
          pos: pos,
          level: parent ? parent.level + 1 : -1
        });
      });
    }
  }

  processNode(null);
}
/**
 * Convert `treeData` into entity records.
 */


function convertDataToEntities(dataNodes) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      initWrapper = _ref.initWrapper,
      processEntity = _ref.processEntity,
      onProcessFinished = _ref.onProcessFinished;

  var externalGetKey = arguments.length > 2 ? arguments[2] : undefined;
  var posEntities = {};
  var keyEntities = {};
  var wrapper = {
    posEntities: posEntities,
    keyEntities: keyEntities
  };

  if (initWrapper) {
    wrapper = initWrapper(wrapper) || wrapper;
  }

  traverseDataNodes(dataNodes, function (item) {
    var node = item.node,
        index = item.index,
        pos = item.pos,
        key = item.key,
        parentPos = item.parentPos,
        level = item.level;
    var entity = {
      node: node,
      index: index,
      key: key,
      pos: pos,
      level: level
    };
    var mergedKey = getKey(key, pos);
    posEntities[pos] = entity;
    keyEntities[mergedKey] = entity; // Fill children

    entity.parent = posEntities[parentPos];

    if (entity.parent) {
      entity.parent.children = entity.parent.children || [];
      entity.parent.children.push(entity);
    }

    if (processEntity) {
      processEntity(entity, wrapper);
    }
  }, externalGetKey);

  if (onProcessFinished) {
    onProcessFinished(wrapper);
  }

  return wrapper;
}
/**
 * Get TreeNode props with Tree props.
 */


function getTreeNodeProps(key, _ref2) {
  var expandedKeys = _ref2.expandedKeys,
      selectedKeys = _ref2.selectedKeys,
      loadedKeys = _ref2.loadedKeys,
      loadingKeys = _ref2.loadingKeys,
      checkedKeys = _ref2.checkedKeys,
      halfCheckedKeys = _ref2.halfCheckedKeys,
      dragOverNodeKey = _ref2.dragOverNodeKey,
      dropPosition = _ref2.dropPosition,
      keyEntities = _ref2.keyEntities;
  var entity = keyEntities[key];
  var treeNodeProps = {
    eventKey: key,
    expanded: expandedKeys.indexOf(key) !== -1,
    selected: selectedKeys.indexOf(key) !== -1,
    loaded: loadedKeys.indexOf(key) !== -1,
    loading: loadingKeys.indexOf(key) !== -1,
    checked: checkedKeys.indexOf(key) !== -1,
    halfChecked: halfCheckedKeys.indexOf(key) !== -1,
    pos: String(entity ? entity.pos : ''),
    // [Legacy] Drag props
    dragOver: dragOverNodeKey === key && dropPosition === 0,
    dragOverGapTop: dragOverNodeKey === key && dropPosition === -1,
    dragOverGapBottom: dragOverNodeKey === key && dropPosition === 1
  };
  return treeNodeProps;
}

function convertNodePropsToEventData(props) {
  var data = props.data,
      expanded = props.expanded,
      selected = props.selected,
      checked = props.checked,
      loaded = props.loaded,
      loading = props.loading,
      halfChecked = props.halfChecked,
      dragOver = props.dragOver,
      dragOverGapTop = props.dragOverGapTop,
      dragOverGapBottom = props.dragOverGapBottom,
      pos = props.pos,
      active = props.active;

  var eventData = _objectSpread(_objectSpread({}, data), {}, {
    expanded: expanded,
    selected: selected,
    checked: checked,
    loaded: loaded,
    loading: loading,
    halfChecked: halfChecked,
    dragOver: dragOver,
    dragOverGapTop: dragOverGapTop,
    dragOverGapBottom: dragOverGapBottom,
    pos: pos,
    active: active
  });

  if (!('props' in eventData)) {
    Object.defineProperty(eventData, 'props', {
      get: function get() {
        (0, _warning.default)(false, 'Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.');
        return props;
      }
    });
  }

  return eventData;
}

/***/ }),

/***/ "./node_modules/rc-util/lib/Children/toArray.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-util/lib/Children/toArray.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toArray;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toArray(children) {
  var ret = [];

  _react.default.Children.forEach(children, function (child) {
    if (child === undefined || child === null) {
      return;
    }

    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if ((0, _reactIs.isFragment)(child) && child.props) {
      ret = ret.concat(toArray(child.props.children));
    } else {
      ret.push(child);
    }
  });

  return ret;
}

/***/ }),

/***/ "./node_modules/rc-util/lib/Dom/findDOMNode.js":
/*!*****************************************************!*\
  !*** ./node_modules/rc-util/lib/Dom/findDOMNode.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = findDOMNode;

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Return if a node is a DOM node. Else will return by `findDOMNode`
 */
function findDOMNode(node) {
  if (node instanceof HTMLElement) {
    return node;
  }

  return _reactDom.default.findDOMNode(node);
}

/***/ }),

/***/ "./node_modules/rc-util/lib/hooks/useMergedState.js":
/*!**********************************************************!*\
  !*** ./node_modules/rc-util/lib/hooks/useMergedState.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useControlledState;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useControlledState(defaultStateValue, option) {
  var _ref = option || {},
      defaultValue = _ref.defaultValue,
      value = _ref.value,
      onChange = _ref.onChange,
      postState = _ref.postState;

  var _React$useState = React.useState(function () {
    if (value !== undefined) {
      return value;
    }

    if (defaultValue !== undefined) {
      return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
    }

    return typeof defaultStateValue === 'function' ? defaultStateValue() : defaultStateValue;
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      innerValue = _React$useState2[0],
      setInnerValue = _React$useState2[1];

  var mergedValue = value !== undefined ? value : innerValue;

  if (postState) {
    mergedValue = postState(mergedValue);
  }

  function triggerChange(newValue) {
    setInnerValue(newValue);

    if (mergedValue !== newValue && onChange) {
      onChange(newValue, mergedValue);
    }
  } // Effect of reset value to `undefined`


  var firstRenderRef = React.useRef(true);
  React.useEffect(function () {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    if (value === undefined) {
      setInnerValue(value);
    }
  }, [value]);
  return [mergedValue, triggerChange];
}

/***/ }),

/***/ "./src/pages/error/index.js":
/*!**********************************!*\
  !*** ./src/pages/error/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_table_hooks_useSelection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/table/hooks/useSelection */ "./node_modules/antd/lib/table/hooks/useSelection.js");
/* harmony import */ var antd_lib_table_hooks_useSelection__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table_hooks_useSelection__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Film_Focus_2\\film-focus-2\\src\\pages\\error\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // const status = new URLSearchParams(window.location.search).get("status")

function Error(props) {
  _s();

  const {
    0: status,
    1: setStatus
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setStatus(new URLSearchParams(window.location.search).get("status"));
  }, []);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, `Error: ${status}`));
}

_s(Error, "tpsJYZD8jGvSxAWB6nZgpMbSPh0=");

_c = Error;
/* harmony default export */ __webpack_exports__["default"] = (Error);

var _c;

$RefreshReg$(_c, "Error");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFudC1kZXNpZ24vY3NzLWFuaW1hdGlvbi9saWIvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL2NvbG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvZGV2V2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvaXNOdW1lcmljLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9fdXRpbC9tb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL3JhZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvcmVhY3ROb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9fdXRpbC9yZWYuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL191dGlsL3VucmVhY2hhYmxlRXhjZXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9fdXRpbC93YXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9idXR0b24vTG9hZGluZ0ljb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2J1dHRvbi9idXR0b24tZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2J1dHRvbi9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvY2FsZW5kYXIvbG9jYWxlL2VuX1VTLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jaGVja2JveC9DaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvY2hlY2tib3gvR3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NoZWNrYm94L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jb25maWctcHJvdmlkZXIvU2l6ZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NvbmZpZy1wcm92aWRlci9jb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jb25maWctcHJvdmlkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NvbmZpZy1wcm92aWRlci9yZW5kZXJFbXB0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZGF0ZS1waWNrZXIvbG9jYWxlL2VuX1VTLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9kcm9wZG93bi9kcm9wZG93bi1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2Ryb3Bkb3duL2Ryb3Bkb3duLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9kcm9wZG93bi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZW1wdHkvZW1wdHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2VtcHR5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9lbXB0eS9zaW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xheW91dC9TaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbGF5b3V0L2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL0xvY2FsZVJlY2VpdmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9sb2NhbGUtcHJvdmlkZXIvY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2xvY2FsZS1wcm92aWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbG9jYWxlL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21lbnUvTWVudUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21lbnUvTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21lbnUvU3ViTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbWVzc2FnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbW9kYWwvbG9jYWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9ub3RpZmljYXRpb24vaG9va3MvdXNlTm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9ub3RpZmljYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3JhZGlvL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3JhZGlvL2dyb3VwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9yYWRpby9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvcmFkaW8vcmFkaW8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3JhZGlvL3JhZGlvQnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi90YWJsZS9ob29rcy91c2VTZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3RpbWUtcGlja2VyL2xvY2FsZS9lbl9VUy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvdG9vbHRpcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvdG9vbHRpcC9wbGFjZW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1hbmltYXRlL2xpYi9DU1NNb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLWFuaW1hdGUvbGliL3V0aWwvbW90aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy1ub3RpZmljYXRpb24vbGliL05vdGljZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtbm90aWZpY2F0aW9uL2xpYi91c2VOb3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXBhZ2luYXRpb24vbGliL2xvY2FsZS9lbl9VUy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtcGlja2VyL2xpYi9sb2NhbGUvZW5fVVMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRvb2x0aXAvbGliL3BsYWNlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRyZWUvbGliL0luZGVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdHJlZS9saWIvVHJlZU5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRyZWUvbGliL2NvbnRleHRUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdHJlZS9saWIvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdHJlZS9saWIvdXRpbHMvY29uZHVjdFV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRyZWUvbGliL3V0aWxzL3RyZWVVdGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2xpYi9DaGlsZHJlbi90b0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2xpYi9Eb20vZmluZERPTU5vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXV0aWwvbGliL2hvb2tzL3VzZU1lcmdlZFN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9lcnJvci9pbmRleC5qcyJdLCJuYW1lcyI6WyJFcnJvciIsInByb3BzIiwic3RhdHVzIiwic2V0U3RhdHVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0gsMklBQTJJO0FBQzNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsNENBQTRDO0FBQzVDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRTtBQUMxRTtB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TyxDQUFDLGtFQUFxQjs7QUFFbkUsdUNBQXVDLG1CQUFPLENBQUMsMERBQVk7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFLEdBQUc7QUFDSDtBQUNBO0FBQ0EsMkJBQTJCLCtCQUErQjtBQUMxRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7Q0FHQTs7QUFFQSxTQUFTQSxLQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQTs7QUFDcEIsUUFBTTtBQUFBLE9BQUVDLE1BQUY7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLEVBQUQsQ0FBdEM7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RGLGFBQVMsQ0FBQyxJQUFJRyxlQUFKLENBQW9CQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQXBDLEVBQTRDQyxHQUE1QyxDQUFnRCxRQUFoRCxDQUFELENBQVQ7QUFDRCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNLFVBQVNSLE1BQU8sRUFBdEIsQ0FERixDQURGO0FBS0Q7O0dBWlFGLEs7O0tBQUFBLEs7QUFjTUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGVycm9yLmpzLmM4NmVmNWJhYTNiNWNlZjkwNTJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgU1RBUlRfRVZFTlRfTkFNRV9NQVAgPSB7XG4gIHRyYW5zaXRpb25zdGFydDoge1xuICAgIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uc3RhcnQnLFxuICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRUcmFuc2l0aW9uU3RhcnQnLFxuICAgIE1velRyYW5zaXRpb246ICdtb3pUcmFuc2l0aW9uU3RhcnQnLFxuICAgIE9UcmFuc2l0aW9uOiAnb1RyYW5zaXRpb25TdGFydCcsXG4gICAgbXNUcmFuc2l0aW9uOiAnTVNUcmFuc2l0aW9uU3RhcnQnXG4gIH0sXG5cbiAgYW5pbWF0aW9uc3RhcnQ6IHtcbiAgICBhbmltYXRpb246ICdhbmltYXRpb25zdGFydCcsXG4gICAgV2Via2l0QW5pbWF0aW9uOiAnd2Via2l0QW5pbWF0aW9uU3RhcnQnLFxuICAgIE1vekFuaW1hdGlvbjogJ21vekFuaW1hdGlvblN0YXJ0JyxcbiAgICBPQW5pbWF0aW9uOiAnb0FuaW1hdGlvblN0YXJ0JyxcbiAgICBtc0FuaW1hdGlvbjogJ01TQW5pbWF0aW9uU3RhcnQnXG4gIH1cbn07XG5cbnZhciBFTkRfRVZFTlRfTkFNRV9NQVAgPSB7XG4gIHRyYW5zaXRpb25lbmQ6IHtcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgV2Via2l0VHJhbnNpdGlvbjogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgIE1velRyYW5zaXRpb246ICdtb3pUcmFuc2l0aW9uRW5kJyxcbiAgICBPVHJhbnNpdGlvbjogJ29UcmFuc2l0aW9uRW5kJyxcbiAgICBtc1RyYW5zaXRpb246ICdNU1RyYW5zaXRpb25FbmQnXG4gIH0sXG5cbiAgYW5pbWF0aW9uZW5kOiB7XG4gICAgYW5pbWF0aW9uOiAnYW5pbWF0aW9uZW5kJyxcbiAgICBXZWJraXRBbmltYXRpb246ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgIE1vekFuaW1hdGlvbjogJ21vekFuaW1hdGlvbkVuZCcsXG4gICAgT0FuaW1hdGlvbjogJ29BbmltYXRpb25FbmQnLFxuICAgIG1zQW5pbWF0aW9uOiAnTVNBbmltYXRpb25FbmQnXG4gIH1cbn07XG5cbnZhciBzdGFydEV2ZW50cyA9IFtdO1xudmFyIGVuZEV2ZW50cyA9IFtdO1xuXG5mdW5jdGlvbiBkZXRlY3RFdmVudHMoKSB7XG4gIHZhciB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIHN0eWxlID0gdGVzdEVsLnN0eWxlO1xuXG4gIGlmICghKCdBbmltYXRpb25FdmVudCcgaW4gd2luZG93KSkge1xuICAgIGRlbGV0ZSBTVEFSVF9FVkVOVF9OQU1FX01BUC5hbmltYXRpb25zdGFydC5hbmltYXRpb247XG4gICAgZGVsZXRlIEVORF9FVkVOVF9OQU1FX01BUC5hbmltYXRpb25lbmQuYW5pbWF0aW9uO1xuICB9XG5cbiAgaWYgKCEoJ1RyYW5zaXRpb25FdmVudCcgaW4gd2luZG93KSkge1xuICAgIGRlbGV0ZSBTVEFSVF9FVkVOVF9OQU1FX01BUC50cmFuc2l0aW9uc3RhcnQudHJhbnNpdGlvbjtcbiAgICBkZWxldGUgRU5EX0VWRU5UX05BTUVfTUFQLnRyYW5zaXRpb25lbmQudHJhbnNpdGlvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHByb2Nlc3MoRVZFTlRfTkFNRV9NQVAsIGV2ZW50cykge1xuICAgIGZvciAodmFyIGJhc2VFdmVudE5hbWUgaW4gRVZFTlRfTkFNRV9NQVApIHtcbiAgICAgIGlmIChFVkVOVF9OQU1FX01BUC5oYXNPd25Qcm9wZXJ0eShiYXNlRXZlbnROYW1lKSkge1xuICAgICAgICB2YXIgYmFzZUV2ZW50cyA9IEVWRU5UX05BTUVfTUFQW2Jhc2VFdmVudE5hbWVdO1xuICAgICAgICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gYmFzZUV2ZW50cykge1xuICAgICAgICAgIGlmIChzdHlsZU5hbWUgaW4gc3R5bGUpIHtcbiAgICAgICAgICAgIGV2ZW50cy5wdXNoKGJhc2VFdmVudHNbc3R5bGVOYW1lXSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm9jZXNzKFNUQVJUX0VWRU5UX05BTUVfTUFQLCBzdGFydEV2ZW50cyk7XG4gIHByb2Nlc3MoRU5EX0VWRU5UX05BTUVfTUFQLCBlbmRFdmVudHMpO1xufVxuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICBkZXRlY3RFdmVudHMoKTtcbn1cblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xuICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudExpc3RlbmVyLCBmYWxzZSk7XG59XG5cbnZhciBUcmFuc2l0aW9uRXZlbnRzID0ge1xuICAvLyBTdGFydCBldmVudHNcbiAgc3RhcnRFdmVudHM6IHN0YXJ0RXZlbnRzLFxuXG4gIGFkZFN0YXJ0RXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkU3RhcnRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoc3RhcnRFdmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dChldmVudExpc3RlbmVyLCAwKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3RhcnRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc3RhcnRFdmVudCkge1xuICAgICAgYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBzdGFydEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcbiAgcmVtb3ZlU3RhcnRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVTdGFydEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnRMaXN0ZW5lcikge1xuICAgIGlmIChzdGFydEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3RhcnRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoc3RhcnRFdmVudCkge1xuICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBzdGFydEV2ZW50LCBldmVudExpc3RlbmVyKTtcbiAgICB9KTtcbiAgfSxcblxuXG4gIC8vIEVuZCBldmVudHNcbiAgZW5kRXZlbnRzOiBlbmRFdmVudHMsXG5cbiAgYWRkRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudExpc3RlbmVyKSB7XG4gICAgaWYgKGVuZEV2ZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGV2ZW50TGlzdGVuZXIsIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9LFxuICByZW1vdmVFbmRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TGlzdGVuZXIpIHtcbiAgICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZW5kRXZlbnQpIHtcbiAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBUcmFuc2l0aW9uRXZlbnRzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLlByZXNldENvbG9yVHlwZXMgPSBleHBvcnRzLlByZXNldFN0YXR1c0NvbG9yVHlwZXMgPSB2b2lkIDA7XG5cbnZhciBfdHlwZSA9IHJlcXVpcmUoXCIuL3R5cGVcIik7XG5cbnZhciBQcmVzZXRTdGF0dXNDb2xvclR5cGVzID0gKDAsIF90eXBlLnR1cGxlKSgnc3VjY2VzcycsICdwcm9jZXNzaW5nJywgJ2Vycm9yJywgJ2RlZmF1bHQnLCAnd2FybmluZycpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuXG5leHBvcnRzLlByZXNldFN0YXR1c0NvbG9yVHlwZXMgPSBQcmVzZXRTdGF0dXNDb2xvclR5cGVzO1xudmFyIFByZXNldENvbG9yVHlwZXMgPSAoMCwgX3R5cGUudHVwbGUpKCdwaW5rJywgJ3JlZCcsICd5ZWxsb3cnLCAnb3JhbmdlJywgJ2N5YW4nLCAnZ3JlZW4nLCAnYmx1ZScsICdwdXJwbGUnLCAnZ2Vla2JsdWUnLCAnbWFnZW50YScsICd2b2xjYW5vJywgJ2dvbGQnLCAnbGltZScpO1xuZXhwb3J0cy5QcmVzZXRDb2xvclR5cGVzID0gUHJlc2V0Q29sb3JUeXBlczsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInJlc2V0V2FybmVkXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF93YXJuaW5nLnJlc2V0V2FybmVkO1xuICB9XG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3dhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmMtdXRpbC9saWIvd2FybmluZ1wiKSk7XG5cbnZhciBfZGVmYXVsdCA9IGZ1bmN0aW9uIF9kZWZhdWx0KHZhbGlkLCBjb21wb25lbnQsIG1lc3NhZ2UpIHtcbiAgKDAsIF93YXJuaW5nW1wiZGVmYXVsdFwiXSkodmFsaWQsIFwiW2FudGQ6IFwiLmNvbmNhdChjb21wb25lbnQsIFwiXSBcIikuY29uY2F0KG1lc3NhZ2UpKTtcbn07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIGlzTnVtZXJpYyA9IGZ1bmN0aW9uIGlzTnVtZXJpYyh2YWx1ZSkge1xuICByZXR1cm4gIWlzTmFOKHBhcnNlRmxvYXQodmFsdWUpKSAmJiBpc0Zpbml0ZSh2YWx1ZSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBpc051bWVyaWM7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbi8vID09PT09PT09PT09PT09PT09PSBDb2xsYXBzZSBNb3Rpb24gPT09PT09PT09PT09PT09PT09XG52YXIgZ2V0Q29sbGFwc2VkSGVpZ2h0ID0gZnVuY3Rpb24gZ2V0Q29sbGFwc2VkSGVpZ2h0KCkge1xuICByZXR1cm4ge1xuICAgIGhlaWdodDogMCxcbiAgICBvcGFjaXR5OiAwXG4gIH07XG59O1xuXG52YXIgZ2V0UmVhbEhlaWdodCA9IGZ1bmN0aW9uIGdldFJlYWxIZWlnaHQobm9kZSkge1xuICByZXR1cm4ge1xuICAgIGhlaWdodDogbm9kZS5zY3JvbGxIZWlnaHQsXG4gICAgb3BhY2l0eTogMVxuICB9O1xufTtcblxudmFyIGdldEN1cnJlbnRIZWlnaHQgPSBmdW5jdGlvbiBnZXRDdXJyZW50SGVpZ2h0KG5vZGUpIHtcbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQ6IG5vZGUub2Zmc2V0SGVpZ2h0XG4gIH07XG59O1xuXG5mdW5jdGlvbiBza2lwT3BhY2l0eVRyYW5zaXRpb24oXywgZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LnByb3BlcnR5TmFtZSA9PT0gJ2hlaWdodCc7XG59XG5cbnZhciBjb2xsYXBzZU1vdGlvbiA9IHtcbiAgbW90aW9uTmFtZTogJ2FudC1tb3Rpb24tY29sbGFwc2UnLFxuICBvbkFwcGVhclN0YXJ0OiBnZXRDb2xsYXBzZWRIZWlnaHQsXG4gIG9uRW50ZXJTdGFydDogZ2V0Q29sbGFwc2VkSGVpZ2h0LFxuICBvbkFwcGVhckFjdGl2ZTogZ2V0UmVhbEhlaWdodCxcbiAgb25FbnRlckFjdGl2ZTogZ2V0UmVhbEhlaWdodCxcbiAgb25MZWF2ZVN0YXJ0OiBnZXRDdXJyZW50SGVpZ2h0LFxuICBvbkxlYXZlQWN0aXZlOiBnZXRDb2xsYXBzZWRIZWlnaHQsXG4gIG9uQXBwZWFyRW5kOiBza2lwT3BhY2l0eVRyYW5zaXRpb24sXG4gIG9uRW50ZXJFbmQ6IHNraXBPcGFjaXR5VHJhbnNpdGlvbixcbiAgb25MZWF2ZUVuZDogc2tpcE9wYWNpdHlUcmFuc2l0aW9uLFxuICBtb3Rpb25EZWFkbGluZTogNTAwXG59O1xudmFyIF9kZWZhdWx0ID0gY29sbGFwc2VNb3Rpb247XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gd3JhcHBlclJhZjtcblxudmFyIF9yYWYgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYWZcIikpO1xuXG52YXIgaWQgPSAwO1xudmFyIGlkcyA9IHt9OyAvLyBTdXBwb3J0IGNhbGwgcmFmIHdpdGggZGVsYXkgc3BlY2lmaWVkIGZyYW1lXG5cbmZ1bmN0aW9uIHdyYXBwZXJSYWYoY2FsbGJhY2spIHtcbiAgdmFyIGRlbGF5RnJhbWVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAxO1xuICB2YXIgbXlJZCA9IGlkKys7XG4gIHZhciByZXN0RnJhbWVzID0gZGVsYXlGcmFtZXM7XG5cbiAgZnVuY3Rpb24gaW50ZXJuYWxDYWxsYmFjaygpIHtcbiAgICByZXN0RnJhbWVzIC09IDE7XG5cbiAgICBpZiAocmVzdEZyYW1lcyA8PSAwKSB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgZGVsZXRlIGlkc1tteUlkXTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWRzW215SWRdID0gKDAsIF9yYWZbXCJkZWZhdWx0XCJdKShpbnRlcm5hbENhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBpZHNbbXlJZF0gPSAoMCwgX3JhZltcImRlZmF1bHRcIl0pKGludGVybmFsQ2FsbGJhY2spO1xuICByZXR1cm4gbXlJZDtcbn1cblxud3JhcHBlclJhZi5jYW5jZWwgPSBmdW5jdGlvbiBjYW5jZWwocGlkKSB7XG4gIGlmIChwaWQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gIF9yYWZbXCJkZWZhdWx0XCJdLmNhbmNlbChpZHNbcGlkXSk7XG5cbiAgZGVsZXRlIGlkc1twaWRdO1xufTtcblxud3JhcHBlclJhZi5pZHMgPSBpZHM7IC8vIGV4cG9ydCB0aGlzIGZvciB0ZXN0IHVzYWdlIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcGxhY2VFbGVtZW50ID0gcmVwbGFjZUVsZW1lbnQ7XG5leHBvcnRzLmNsb25lRWxlbWVudCA9IGNsb25lRWxlbWVudDtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBpc1ZhbGlkRWxlbWVudCA9IFJlYWN0LmlzVmFsaWRFbGVtZW50O1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudCA9IGlzVmFsaWRFbGVtZW50O1xuXG5mdW5jdGlvbiByZXBsYWNlRWxlbWVudChlbGVtZW50LCByZXBsYWNlbWVudCwgcHJvcHMpIHtcbiAgaWYgKCFpc1ZhbGlkRWxlbWVudChlbGVtZW50KSkgcmV0dXJuIHJlcGxhY2VtZW50O1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChlbGVtZW50LCB0eXBlb2YgcHJvcHMgPT09ICdmdW5jdGlvbicgPyBwcm9wcygpIDogcHJvcHMpO1xufVxuXG5mdW5jdGlvbiBjbG9uZUVsZW1lbnQoZWxlbWVudCwgcHJvcHMpIHtcbiAgcmV0dXJuIHJlcGxhY2VFbGVtZW50KGVsZW1lbnQsIGVsZW1lbnQsIHByb3BzKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmZpbGxSZWYgPSBmaWxsUmVmO1xuZXhwb3J0cy5jb21wb3NlUmVmID0gY29tcG9zZVJlZjtcblxudmFyIF90eXBlb2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIikpO1xuXG5mdW5jdGlvbiBmaWxsUmVmKHJlZiwgbm9kZSkge1xuICBpZiAodHlwZW9mIHJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJlZihub2RlKTtcbiAgfSBlbHNlIGlmICgoMCwgX3R5cGVvZjJbXCJkZWZhdWx0XCJdKShyZWYpID09PSAnb2JqZWN0JyAmJiByZWYgJiYgJ2N1cnJlbnQnIGluIHJlZikge1xuICAgIHJlZi5jdXJyZW50ID0gbm9kZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wb3NlUmVmKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVmcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICByZWZzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChub2RlKSB7XG4gICAgcmVmcy5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgIGZpbGxSZWYocmVmLCBub2RlKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudHVwbGVOdW0gPSBleHBvcnRzLnR1cGxlID0gdm9pZCAwO1xuXG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80NjE3NjE2NS93YXlzLXRvLWdldC1zdHJpbmctbGl0ZXJhbC10eXBlLW9mLWFycmF5LXZhbHVlcy13aXRob3V0LWVudW0tb3ZlcmhlYWRcbnZhciB0dXBsZSA9IGZ1bmN0aW9uIHR1cGxlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGFyZ3M7XG59O1xuXG5leHBvcnRzLnR1cGxlID0gdHVwbGU7XG5cbnZhciB0dXBsZU51bSA9IGZ1bmN0aW9uIHR1cGxlTnVtKCkge1xuICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gIH1cblxuICByZXR1cm4gYXJncztcbn07XG5cbmV4cG9ydHMudHVwbGVOdW0gPSB0dXBsZU51bTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpKTtcblxudmFyIFVucmVhY2hhYmxlRXhjZXB0aW9uID0gZnVuY3Rpb24gVW5yZWFjaGFibGVFeGNlcHRpb24odmFsdWUpIHtcbiAgKDAsIF9jbGFzc0NhbGxDaGVjazJbXCJkZWZhdWx0XCJdKSh0aGlzLCBVbnJlYWNoYWJsZUV4Y2VwdGlvbik7XG4gIHJldHVybiBuZXcgRXJyb3IoXCJ1bnJlYWNoYWJsZSBjYXNlOiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkodmFsdWUpKSk7XG59O1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFVucmVhY2hhYmxlRXhjZXB0aW9uOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIikpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIikpO1xuXG52YXIgX2Fzc2VydFRoaXNJbml0aWFsaXplZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKSk7XG5cbnZhciBfaW5oZXJpdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKSk7XG5cbnZhciBfY3JlYXRlU3VwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVTdXBlclwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpO1xuXG52YXIgX0V2ZW50ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vY3NzLWFuaW1hdGlvbi9saWIvRXZlbnRcIikpO1xuXG52YXIgX3JhZiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmFmXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBzdHlsZUZvclBlc3VkbzsgLy8gV2hlcmUgZWwgaXMgdGhlIERPTSBlbGVtZW50IHlvdSdkIGxpa2UgdG8gdGVzdCBmb3IgdmlzaWJpbGl0eVxuXG5mdW5jdGlvbiBpc0hpZGRlbihlbGVtZW50KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Rlc3QnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuICFlbGVtZW50IHx8IGVsZW1lbnQub2Zmc2V0UGFyZW50ID09PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc05vdEdyZXkoY29sb3IpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtZXNjYXBlXG4gIHZhciBtYXRjaCA9IChjb2xvciB8fCAnJykubWF0Y2goL3JnYmE/XFwoKFxcZCopLCAoXFxkKiksIChcXGQqKSgsIFtcXGQuXSopP1xcKS8pO1xuXG4gIGlmIChtYXRjaCAmJiBtYXRjaFsxXSAmJiBtYXRjaFsyXSAmJiBtYXRjaFszXSkge1xuICAgIHJldHVybiAhKG1hdGNoWzFdID09PSBtYXRjaFsyXSAmJiBtYXRjaFsyXSA9PT0gbWF0Y2hbM10pO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbnZhciBXYXZlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMyW1wiZGVmYXVsdFwiXSkoV2F2ZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9ICgwLCBfY3JlYXRlU3VwZXIyW1wiZGVmYXVsdFwiXSkoV2F2ZSk7XG5cbiAgZnVuY3Rpb24gV2F2ZSgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMltcImRlZmF1bHRcIl0pKHRoaXMsIFdhdmUpO1xuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgX3RoaXMuYW5pbWF0aW9uU3RhcnQgPSBmYWxzZTtcbiAgICBfdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcblxuICAgIF90aGlzLm9uQ2xpY2sgPSBmdW5jdGlvbiAobm9kZSwgd2F2ZUNvbG9yKSB7XG4gICAgICBpZiAoIW5vZGUgfHwgaXNIaWRkZW4obm9kZSkgfHwgbm9kZS5jbGFzc05hbWUuaW5kZXhPZignLWxlYXZlJykgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBpbnNlcnRFeHRyYU5vZGUgPSBfdGhpcy5wcm9wcy5pbnNlcnRFeHRyYU5vZGU7XG4gICAgICBfdGhpcy5leHRyYU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgdmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZSA9ICgwLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkMltcImRlZmF1bHRcIl0pKF90aGlzKSxcbiAgICAgICAgICBleHRyYU5vZGUgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemUuZXh0cmFOb2RlO1xuXG4gICAgICB2YXIgZ2V0UHJlZml4Q2xzID0gX3RoaXMuY29udGV4dC5nZXRQcmVmaXhDbHM7XG4gICAgICBleHRyYU5vZGUuY2xhc3NOYW1lID0gXCJcIi5jb25jYXQoZ2V0UHJlZml4Q2xzKCcnKSwgXCItY2xpY2stYW5pbWF0aW5nLW5vZGVcIik7XG5cbiAgICAgIHZhciBhdHRyaWJ1dGVOYW1lID0gX3RoaXMuZ2V0QXR0cmlidXRlTmFtZSgpO1xuXG4gICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCAndHJ1ZScpOyAvLyBOb3Qgd2hpdGUgb3IgdHJhbnNwYXJudCBvciBncmV5XG5cbiAgICAgIHN0eWxlRm9yUGVzdWRvID0gc3R5bGVGb3JQZXN1ZG8gfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgICAgaWYgKHdhdmVDb2xvciAmJiB3YXZlQ29sb3IgIT09ICcjZmZmZmZmJyAmJiB3YXZlQ29sb3IgIT09ICdyZ2IoMjU1LCAyNTUsIDI1NSknICYmIGlzTm90R3JleSh3YXZlQ29sb3IpICYmICEvcmdiYVxcKCg/OlxcZCosICl7M30wXFwpLy50ZXN0KHdhdmVDb2xvcikgJiYgLy8gYW55IHRyYW5zcGFyZW50IHJnYmEgY29sb3JcbiAgICAgIHdhdmVDb2xvciAhPT0gJ3RyYW5zcGFyZW50Jykge1xuICAgICAgICAvLyBBZGQgbm9uY2UgaWYgQ1NQIGV4aXN0XG4gICAgICAgIGlmIChfdGhpcy5jc3AgJiYgX3RoaXMuY3NwLm5vbmNlKSB7XG4gICAgICAgICAgc3R5bGVGb3JQZXN1ZG8ubm9uY2UgPSBfdGhpcy5jc3Aubm9uY2U7XG4gICAgICAgIH1cblxuICAgICAgICBleHRyYU5vZGUuc3R5bGUuYm9yZGVyQ29sb3IgPSB3YXZlQ29sb3I7XG4gICAgICAgIHN0eWxlRm9yUGVzdWRvLmlubmVySFRNTCA9IFwiXFxuICAgICAgW1wiLmNvbmNhdChnZXRQcmVmaXhDbHMoJycpLCBcIi1jbGljay1hbmltYXRpbmctd2l0aG91dC1leHRyYS1ub2RlPSd0cnVlJ106OmFmdGVyLCAuXCIpLmNvbmNhdChnZXRQcmVmaXhDbHMoJycpLCBcIi1jbGljay1hbmltYXRpbmctbm9kZSB7XFxuICAgICAgICAtLWFudGQtd2F2ZS1zaGFkb3ctY29sb3I6IFwiKS5jb25jYXQod2F2ZUNvbG9yLCBcIjtcXG4gICAgICB9XCIpO1xuXG4gICAgICAgIGlmICghZG9jdW1lbnQuYm9keS5jb250YWlucyhzdHlsZUZvclBlc3VkbykpIHtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0eWxlRm9yUGVzdWRvKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaW5zZXJ0RXh0cmFOb2RlKSB7XG4gICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoZXh0cmFOb2RlKTtcbiAgICAgIH1cblxuICAgICAgX0V2ZW50W1wiZGVmYXVsdFwiXS5hZGRTdGFydEV2ZW50TGlzdGVuZXIobm9kZSwgX3RoaXMub25UcmFuc2l0aW9uU3RhcnQpO1xuXG4gICAgICBfRXZlbnRbXCJkZWZhdWx0XCJdLmFkZEVuZEV2ZW50TGlzdGVuZXIobm9kZSwgX3RoaXMub25UcmFuc2l0aW9uRW5kKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25UcmFuc2l0aW9uU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKF90aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBub2RlID0gKDAsIF9yZWFjdERvbS5maW5kRE9NTm9kZSkoKDAsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQyW1wiZGVmYXVsdFwiXSkoX3RoaXMpKTtcblxuICAgICAgaWYgKCFlIHx8IGUudGFyZ2V0ICE9PSBub2RlIHx8IF90aGlzLmFuaW1hdGlvblN0YXJ0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXMucmVzZXRFZmZlY3Qobm9kZSk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoIWUgfHwgZS5hbmltYXRpb25OYW1lICE9PSAnZmFkZUVmZmVjdCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5yZXNldEVmZmVjdChlLnRhcmdldCk7XG4gICAgfTtcblxuICAgIF90aGlzLmJpbmRBbmltYXRpb25FdmVudCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBpZiAoIW5vZGUgfHwgIW5vZGUuZ2V0QXR0cmlidXRlIHx8IG5vZGUuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpIHx8IG5vZGUuY2xhc3NOYW1lLmluZGV4T2YoJ2Rpc2FibGVkJykgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBvbkNsaWNrID0gZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgIC8vIEZpeCByYWRpbyBidXR0b24gY2xpY2sgdHdpY2VcbiAgICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09ICdJTlBVVCcgfHwgaXNIaWRkZW4oZS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMucmVzZXRFZmZlY3Qobm9kZSk7IC8vIEdldCB3YXZlIGNvbG9yIGZyb20gdGFyZ2V0XG5cblxuICAgICAgICB2YXIgd2F2ZUNvbG9yID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5nZXRQcm9wZXJ0eVZhbHVlKCdib3JkZXItdG9wLWNvbG9yJykgfHwgLy8gRmlyZWZveCBDb21wYXRpYmxlXG4gICAgICAgIGdldENvbXB1dGVkU3R5bGUobm9kZSkuZ2V0UHJvcGVydHlWYWx1ZSgnYm9yZGVyLWNvbG9yJykgfHwgZ2V0Q29tcHV0ZWRTdHlsZShub2RlKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gICAgICAgIF90aGlzLmNsaWNrV2F2ZVRpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMub25DbGljayhub2RlLCB3YXZlQ29sb3IpO1xuICAgICAgICB9LCAwKTtcblxuICAgICAgICBfcmFmW1wiZGVmYXVsdFwiXS5jYW5jZWwoX3RoaXMuYW5pbWF0aW9uU3RhcnRJZCk7XG5cbiAgICAgICAgX3RoaXMuYW5pbWF0aW9uU3RhcnQgPSB0cnVlOyAvLyBSZW5kZXIgdG8gdHJpZ2dlciB0cmFuc2l0aW9uIGV2ZW50IGNvc3QgMyBmcmFtZXMuIExldCdzIGRlbGF5IDEwIGZyYW1lcyB0byByZXNldCB0aGlzLlxuXG4gICAgICAgIF90aGlzLmFuaW1hdGlvblN0YXJ0SWQgPSAoMCwgX3JhZltcImRlZmF1bHRcIl0pKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5hbmltYXRpb25TdGFydCA9IGZhbHNlO1xuICAgICAgICB9LCAxMCk7XG4gICAgICB9O1xuXG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljaywgdHJ1ZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICAgICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25DbGljaywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlcldhdmUgPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGNzcCA9IF9yZWYuY3NwO1xuICAgICAgdmFyIGNoaWxkcmVuID0gX3RoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgICBfdGhpcy5jc3AgPSBjc3A7XG4gICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MyW1wiZGVmYXVsdFwiXSkoV2F2ZSwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB2YXIgbm9kZSA9ICgwLCBfcmVhY3REb20uZmluZERPTU5vZGUpKHRoaXMpO1xuXG4gICAgICBpZiAoIW5vZGUgfHwgbm9kZS5ub2RlVHlwZSAhPT0gMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zdGFuY2UgPSB0aGlzLmJpbmRBbmltYXRpb25FdmVudChub2RlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5pbnN0YW5jZSkge1xuICAgICAgICB0aGlzLmluc3RhbmNlLmNhbmNlbCgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jbGlja1dhdmVUaW1lb3V0SWQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2xpY2tXYXZlVGltZW91dElkKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJnZXRBdHRyaWJ1dGVOYW1lXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEF0dHJpYnV0ZU5hbWUoKSB7XG4gICAgICB2YXIgZ2V0UHJlZml4Q2xzID0gdGhpcy5jb250ZXh0LmdldFByZWZpeENscztcbiAgICAgIHZhciBpbnNlcnRFeHRyYU5vZGUgPSB0aGlzLnByb3BzLmluc2VydEV4dHJhTm9kZTtcbiAgICAgIHJldHVybiBpbnNlcnRFeHRyYU5vZGUgPyBcIlwiLmNvbmNhdChnZXRQcmVmaXhDbHMoJycpLCBcIi1jbGljay1hbmltYXRpbmdcIikgOiBcIlwiLmNvbmNhdChnZXRQcmVmaXhDbHMoJycpLCBcIi1jbGljay1hbmltYXRpbmctd2l0aG91dC1leHRyYS1ub2RlXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZXNldEVmZmVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNldEVmZmVjdChub2RlKSB7XG4gICAgICBpZiAoIW5vZGUgfHwgbm9kZSA9PT0gdGhpcy5leHRyYU5vZGUgfHwgIShub2RlIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgaW5zZXJ0RXh0cmFOb2RlID0gdGhpcy5wcm9wcy5pbnNlcnRFeHRyYU5vZGU7XG4gICAgICB2YXIgYXR0cmlidXRlTmFtZSA9IHRoaXMuZ2V0QXR0cmlidXRlTmFtZSgpO1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgJ2ZhbHNlJyk7IC8vIGVkZ2UgaGFzIGJ1ZyBvbiBgcmVtb3ZlQXR0cmlidXRlYCAjMTQ0NjZcblxuICAgICAgaWYgKHN0eWxlRm9yUGVzdWRvKSB7XG4gICAgICAgIHN0eWxlRm9yUGVzdWRvLmlubmVySFRNTCA9ICcnO1xuICAgICAgfVxuXG4gICAgICBpZiAoaW5zZXJ0RXh0cmFOb2RlICYmIHRoaXMuZXh0cmFOb2RlICYmIG5vZGUuY29udGFpbnModGhpcy5leHRyYU5vZGUpKSB7XG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQodGhpcy5leHRyYU5vZGUpO1xuICAgICAgfVxuXG4gICAgICBfRXZlbnRbXCJkZWZhdWx0XCJdLnJlbW92ZVN0YXJ0RXZlbnRMaXN0ZW5lcihub2RlLCB0aGlzLm9uVHJhbnNpdGlvblN0YXJ0KTtcblxuICAgICAgX0V2ZW50W1wiZGVmYXVsdFwiXS5yZW1vdmVFbmRFdmVudExpc3RlbmVyKG5vZGUsIHRoaXMub25UcmFuc2l0aW9uRW5kKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyV2F2ZSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBXYXZlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFdhdmU7XG5XYXZlLmNvbnRleHRUeXBlID0gX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBMb2FkaW5nSWNvbjtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfQ1NTTW90aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtYW5pbWF0ZS9saWIvQ1NTTW90aW9uXCIpKTtcblxudmFyIF9Mb2FkaW5nT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9Mb2FkaW5nT3V0bGluZWRcIikpO1xuXG52YXIgZ2V0Q29sbGFwc2VkV2lkdGggPSBmdW5jdGlvbiBnZXRDb2xsYXBzZWRXaWR0aCgpIHtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogMCxcbiAgICBvcGFjaXR5OiAwLFxuICAgIHRyYW5zZm9ybTogJ3NjYWxlKDApJ1xuICB9O1xufTtcblxudmFyIGdldFJlYWxXaWR0aCA9IGZ1bmN0aW9uIGdldFJlYWxXaWR0aChub2RlKSB7XG4gIHJldHVybiB7XG4gICAgd2lkdGg6IG5vZGUuc2Nyb2xsV2lkdGgsXG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2Zvcm06ICdzY2FsZSgxKSdcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIExvYWRpbmdJY29uKF9yZWYpIHtcbiAgdmFyIHByZWZpeENscyA9IF9yZWYucHJlZml4Q2xzLFxuICAgICAgbG9hZGluZyA9IF9yZWYubG9hZGluZyxcbiAgICAgIGV4aXN0SWNvbiA9IF9yZWYuZXhpc3RJY29uO1xuICB2YXIgdmlzaWJsZSA9ICEhbG9hZGluZztcblxuICBpZiAoZXhpc3RJY29uKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbG9hZGluZy1pY29uXCIpXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0xvYWRpbmdPdXRsaW5lZFtcImRlZmF1bHRcIl0sIG51bGwpKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQ1NTTW90aW9uW1wiZGVmYXVsdFwiXSwge1xuICAgIHZpc2libGU6IHZpc2libGUgLy8gV2UgZG8gbm90IHJlYWxseSB1c2UgdGhpcyBtb3Rpb25OYW1lXG4gICAgLFxuICAgIG1vdGlvbk5hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbG9hZGluZy1pY29uLW1vdGlvblwiKSxcbiAgICByZW1vdmVPbkxlYXZlOiB0cnVlLFxuICAgIG9uQXBwZWFyU3RhcnQ6IGdldENvbGxhcHNlZFdpZHRoLFxuICAgIG9uQXBwZWFyQWN0aXZlOiBnZXRSZWFsV2lkdGgsXG4gICAgb25FbnRlclN0YXJ0OiBnZXRDb2xsYXBzZWRXaWR0aCxcbiAgICBvbkVudGVyQWN0aXZlOiBnZXRSZWFsV2lkdGgsXG4gICAgb25MZWF2ZVN0YXJ0OiBnZXRSZWFsV2lkdGgsXG4gICAgb25MZWF2ZUFjdGl2ZTogZ2V0Q29sbGFwc2VkV2lkdGhcbiAgfSwgZnVuY3Rpb24gKF9yZWYyLCByZWYpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gX3JlZjIuY2xhc3NOYW1lLFxuICAgICAgICBzdHlsZSA9IF9yZWYyLnN0eWxlO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxvYWRpbmctaWNvblwiKSxcbiAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgIHJlZjogcmVmXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0xvYWRpbmdPdXRsaW5lZFtcImRlZmF1bHRcIl0sIHtcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoY2xhc3NOYW1lKVxuICAgIH0pKTtcbiAgfSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfdW5yZWFjaGFibGVFeGNlcHRpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fdXRpbC91bnJlYWNoYWJsZUV4Y2VwdGlvblwiKSk7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgQnV0dG9uR3JvdXAgPSBmdW5jdGlvbiBCdXR0b25Hcm91cChwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscyxcbiAgICAgICAgZGlyZWN0aW9uID0gX3JlZi5kaXJlY3Rpb247XG5cbiAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICBvdGhlcnMgPSBfX3Jlc3QocHJvcHMsIFtcInByZWZpeENsc1wiLCBcInNpemVcIiwgXCJjbGFzc05hbWVcIl0pO1xuXG4gICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnYnRuLWdyb3VwJywgY3VzdG9taXplUHJlZml4Q2xzKTsgLy8gbGFyZ2UgPT4gbGdcbiAgICAvLyBzbWFsbCA9PiBzbVxuXG4gICAgdmFyIHNpemVDbHMgPSAnJztcblxuICAgIHN3aXRjaCAoc2l6ZSkge1xuICAgICAgY2FzZSAnbGFyZ2UnOlxuICAgICAgICBzaXplQ2xzID0gJ2xnJztcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3NtYWxsJzpcbiAgICAgICAgc2l6ZUNscyA9ICdzbSc7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdtaWRkbGUnOlxuICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgICBjb25zb2xlLndhcm4obmV3IF91bnJlYWNoYWJsZUV4Y2VwdGlvbltcImRlZmF1bHRcIl0oc2l6ZSkpO1xuICAgIH1cblxuICAgIHZhciBjbGFzc2VzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNpemVDbHMpLCBzaXplQ2xzKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgb3RoZXJzLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXNcbiAgICB9KSk7XG4gIH0pO1xufTtcblxudmFyIF9kZWZhdWx0ID0gQnV0dG9uR3JvdXA7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY29udmVydExlZ2FjeVByb3BzID0gY29udmVydExlZ2FjeVByb3BzO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpKTtcblxudmFyIF90eXBlb2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9vbWl0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwib21pdC5qc1wiKSk7XG5cbnZhciBfYnV0dG9uR3JvdXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2J1dHRvbi1ncm91cFwiKSk7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX3dhdmUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fdXRpbC93YXZlXCIpKTtcblxudmFyIF90eXBlID0gcmVxdWlyZShcIi4uL191dGlsL3R5cGVcIik7XG5cbnZhciBfZGV2V2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL2Rldldhcm5pbmdcIikpO1xuXG52YXIgX1NpemVDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyL1NpemVDb250ZXh0XCIpKTtcblxudmFyIF9Mb2FkaW5nSWNvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTG9hZGluZ0ljb25cIikpO1xuXG52YXIgX3JlYWN0Tm9kZSA9IHJlcXVpcmUoXCIuLi9fdXRpbC9yZWFjdE5vZGVcIik7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvYnV0dG9uLWhhcy10eXBlICovXG5cblxudmFyIHJ4VHdvQ05DaGFyID0gL15bXFx1NGUwMC1cXHU5ZmE1XXsyfSQvO1xudmFyIGlzVHdvQ05DaGFyID0gcnhUd29DTkNoYXIudGVzdC5iaW5kKHJ4VHdvQ05DaGFyKTtcblxuZnVuY3Rpb24gaXNTdHJpbmcoc3RyKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gaXNVbmJvcmRlcmVkQnV0dG9uVHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlID09PSAndGV4dCcgfHwgdHlwZSA9PT0gJ2xpbmsnO1xufSAvLyBJbnNlcnQgb25lIHNwYWNlIGJldHdlZW4gdHdvIGNoaW5lc2UgY2hhcmFjdGVycyBhdXRvbWF0aWNhbGx5LlxuXG5cbmZ1bmN0aW9uIGluc2VydFNwYWNlKGNoaWxkLCBuZWVkSW5zZXJ0ZWQpIHtcbiAgLy8gQ2hlY2sgdGhlIGNoaWxkIGlmIGlzIHVuZGVmaW5lZCBvciBudWxsLlxuICBpZiAoY2hpbGQgPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBTUEFDRSA9IG5lZWRJbnNlcnRlZCA/ICcgJyA6ICcnOyAvLyBzdHJpY3ROdWxsQ2hlY2tzIG9vcHMuXG5cbiAgaWYgKHR5cGVvZiBjaGlsZCAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIGNoaWxkICE9PSAnbnVtYmVyJyAmJiBpc1N0cmluZyhjaGlsZC50eXBlKSAmJiBpc1R3b0NOQ2hhcihjaGlsZC5wcm9wcy5jaGlsZHJlbikpIHtcbiAgICByZXR1cm4gKDAsIF9yZWFjdE5vZGUuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgICAgY2hpbGRyZW46IGNoaWxkLnByb3BzLmNoaWxkcmVuLnNwbGl0KCcnKS5qb2luKFNQQUNFKVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoaXNUd29DTkNoYXIoY2hpbGQpKSB7XG4gICAgICBjaGlsZCA9IGNoaWxkLnNwbGl0KCcnKS5qb2luKFNQQUNFKTtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGNoaWxkKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZDtcbn1cblxuZnVuY3Rpb24gc3BhY2VDaGlsZHJlbihjaGlsZHJlbiwgbmVlZEluc2VydGVkKSB7XG4gIHZhciBpc1ByZXZDaGlsZFB1cmUgPSBmYWxzZTtcbiAgdmFyIGNoaWxkTGlzdCA9IFtdO1xuICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICB2YXIgdHlwZSA9ICgwLCBfdHlwZW9mMltcImRlZmF1bHRcIl0pKGNoaWxkKTtcbiAgICB2YXIgaXNDdXJyZW50Q2hpbGRQdXJlID0gdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcic7XG5cbiAgICBpZiAoaXNQcmV2Q2hpbGRQdXJlICYmIGlzQ3VycmVudENoaWxkUHVyZSkge1xuICAgICAgdmFyIGxhc3RJbmRleCA9IGNoaWxkTGlzdC5sZW5ndGggLSAxO1xuICAgICAgdmFyIGxhc3RDaGlsZCA9IGNoaWxkTGlzdFtsYXN0SW5kZXhdO1xuICAgICAgY2hpbGRMaXN0W2xhc3RJbmRleF0gPSBcIlwiLmNvbmNhdChsYXN0Q2hpbGQpLmNvbmNhdChjaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoaWxkTGlzdC5wdXNoKGNoaWxkKTtcbiAgICB9XG5cbiAgICBpc1ByZXZDaGlsZFB1cmUgPSBpc0N1cnJlbnRDaGlsZFB1cmU7XG4gIH0pOyAvLyBQYXNzIHRvIFJlYWN0LkNoaWxkcmVuLm1hcCB0byBhdXRvIGZpbGwga2V5XG5cbiAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZExpc3QsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBpbnNlcnRTcGFjZShjaGlsZCwgbmVlZEluc2VydGVkKTtcbiAgfSk7XG59XG5cbnZhciBCdXR0b25UeXBlcyA9ICgwLCBfdHlwZS50dXBsZSkoJ2RlZmF1bHQnLCAncHJpbWFyeScsICdnaG9zdCcsICdkYXNoZWQnLCAnbGluaycsICd0ZXh0Jyk7XG52YXIgQnV0dG9uU2hhcGVzID0gKDAsIF90eXBlLnR1cGxlKSgnY2lyY2xlJywgJ2NpcmNsZS1vdXRsaW5lJywgJ3JvdW5kJyk7XG52YXIgQnV0dG9uSFRNTFR5cGVzID0gKDAsIF90eXBlLnR1cGxlKSgnc3VibWl0JywgJ2J1dHRvbicsICdyZXNldCcpO1xuXG5mdW5jdGlvbiBjb252ZXJ0TGVnYWN5UHJvcHModHlwZSkge1xuICBpZiAodHlwZSA9PT0gJ2RhbmdlcicpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGFuZ2VyOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZVxuICB9O1xufVxuXG52YXIgSW50ZXJuYWxCdXR0b24gPSBmdW5jdGlvbiBJbnRlcm5hbEJ1dHRvbihwcm9wcywgcmVmKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgbG9hZGluZyA9IHByb3BzLmxvYWRpbmcsXG4gICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICB0eXBlID0gcHJvcHMudHlwZSxcbiAgICAgIGRhbmdlciA9IHByb3BzLmRhbmdlcixcbiAgICAgIHNoYXBlID0gcHJvcHMuc2hhcGUsXG4gICAgICBjdXN0b21pemVTaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBpY29uID0gcHJvcHMuaWNvbixcbiAgICAgIGdob3N0ID0gcHJvcHMuZ2hvc3QsXG4gICAgICBibG9jayA9IHByb3BzLmJsb2NrLFxuICAgICAgcmVzdCA9IF9fcmVzdChwcm9wcywgW1wibG9hZGluZ1wiLCBcInByZWZpeENsc1wiLCBcInR5cGVcIiwgXCJkYW5nZXJcIiwgXCJzaGFwZVwiLCBcInNpemVcIiwgXCJjbGFzc05hbWVcIiwgXCJjaGlsZHJlblwiLCBcImljb25cIiwgXCJnaG9zdFwiLCBcImJsb2NrXCJdKTtcblxuICB2YXIgc2l6ZSA9IFJlYWN0LnVzZUNvbnRleHQoX1NpemVDb250ZXh0W1wiZGVmYXVsdFwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKCEhbG9hZGluZyksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gKDAsIF9zbGljZWRUb0FycmF5MltcImRlZmF1bHRcIl0pKF9SZWFjdCR1c2VTdGF0ZSwgMiksXG4gICAgICBpbm5lckxvYWRpbmcgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0TG9hZGluZyA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTMgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGU0ID0gKDAsIF9zbGljZWRUb0FycmF5MltcImRlZmF1bHRcIl0pKF9SZWFjdCR1c2VTdGF0ZTMsIDIpLFxuICAgICAgaGFzVHdvQ05DaGFyID0gX1JlYWN0JHVzZVN0YXRlNFswXSxcbiAgICAgIHNldEhhc1R3b0NOQ2hhciA9IF9SZWFjdCR1c2VTdGF0ZTRbMV07XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHMsXG4gICAgICBhdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmF1dG9JbnNlcnRTcGFjZUluQnV0dG9uLFxuICAgICAgZGlyZWN0aW9uID0gX1JlYWN0JHVzZUNvbnRleHQuZGlyZWN0aW9uO1xuXG4gIHZhciBidXR0b25SZWYgPSByZWYgfHwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZVJlZigpO1xuICB2YXIgZGVsYXlUaW1lb3V0UmVmID0gUmVhY3QudXNlUmVmKCk7XG5cbiAgdmFyIGlzTmVlZEluc2VydGVkID0gZnVuY3Rpb24gaXNOZWVkSW5zZXJ0ZWQoKSB7XG4gICAgcmV0dXJuIFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA9PT0gMSAmJiAhaWNvbiAmJiAhaXNVbmJvcmRlcmVkQnV0dG9uVHlwZSh0eXBlKTtcbiAgfTtcblxuICB2YXIgZml4VHdvQ05DaGFyID0gZnVuY3Rpb24gZml4VHdvQ05DaGFyKCkge1xuICAgIC8vIEZpeCBmb3IgSE9DIHVzYWdlIGxpa2UgPEZvcm1hdE1lc3NhZ2UgLz5cbiAgICBpZiAoIWJ1dHRvblJlZiB8fCAhYnV0dG9uUmVmLmN1cnJlbnQgfHwgYXV0b0luc2VydFNwYWNlSW5CdXR0b24gPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGJ1dHRvblRleHQgPSBidXR0b25SZWYuY3VycmVudC50ZXh0Q29udGVudDtcblxuICAgIGlmIChpc05lZWRJbnNlcnRlZCgpICYmIGlzVHdvQ05DaGFyKGJ1dHRvblRleHQpKSB7XG4gICAgICBpZiAoIWhhc1R3b0NOQ2hhcikge1xuICAgICAgICBzZXRIYXNUd29DTkNoYXIodHJ1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChoYXNUd29DTkNoYXIpIHtcbiAgICAgIHNldEhhc1R3b0NOQ2hhcihmYWxzZSk7XG4gICAgfVxuICB9OyAvLyA9PT09PT09PT09PT09PT0gVXBkYXRlIExvYWRpbmcgPT09PT09PT09PT09PT09XG5cblxuICB2YXIgbG9hZGluZ09yRGVsYXk7XG5cbiAgaWYgKCgwLCBfdHlwZW9mMltcImRlZmF1bHRcIl0pKGxvYWRpbmcpID09PSAnb2JqZWN0JyAmJiBsb2FkaW5nLmRlbGF5KSB7XG4gICAgbG9hZGluZ09yRGVsYXkgPSBsb2FkaW5nLmRlbGF5IHx8IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgbG9hZGluZ09yRGVsYXkgPSAhIWxvYWRpbmc7XG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGNsZWFyVGltZW91dChkZWxheVRpbWVvdXRSZWYuY3VycmVudCk7XG5cbiAgICBpZiAodHlwZW9mIGxvYWRpbmdPckRlbGF5ID09PSAnbnVtYmVyJykge1xuICAgICAgZGVsYXlUaW1lb3V0UmVmLmN1cnJlbnQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNldExvYWRpbmcobG9hZGluZ09yRGVsYXkpO1xuICAgICAgfSwgbG9hZGluZ09yRGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRMb2FkaW5nKGxvYWRpbmdPckRlbGF5KTtcbiAgICB9XG4gIH0sIFtsb2FkaW5nT3JEZWxheV0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGZpeFR3b0NOQ2hhcigpO1xuICB9LCBbYnV0dG9uUmVmXSk7XG5cbiAgdmFyIGhhbmRsZUNsaWNrID0gZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgIHZhciBvbkNsaWNrID0gcHJvcHMub25DbGljaztcblxuICAgIGlmIChpbm5lckxvYWRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob25DbGljaykge1xuICAgICAgb25DbGljayhlKTtcbiAgICB9XG4gIH07XG5cbiAgKDAsIF9kZXZXYXJuaW5nW1wiZGVmYXVsdFwiXSkoISh0eXBlb2YgaWNvbiA9PT0gJ3N0cmluZycgJiYgaWNvbi5sZW5ndGggPiAyKSwgJ0J1dHRvbicsIFwiYGljb25gIGlzIHVzaW5nIFJlYWN0Tm9kZSBpbnN0ZWFkIG9mIHN0cmluZyBuYW1pbmcgaW4gdjQuIFBsZWFzZSBjaGVjayBgXCIuY29uY2F0KGljb24sIFwiYCBhdCBodHRwczovL2FudC5kZXNpZ24vY29tcG9uZW50cy9pY29uXCIpKTtcbiAgKDAsIF9kZXZXYXJuaW5nW1wiZGVmYXVsdFwiXSkoIShnaG9zdCAmJiBpc1VuYm9yZGVyZWRCdXR0b25UeXBlKHR5cGUpKSwgJ0J1dHRvbicsIFwiYGxpbmtgIG9yIGB0ZXh0YCBidXR0b24gY2FuJ3QgYmUgYSBgZ2hvc3RgIGJ1dHRvbi5cIik7XG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2J0bicsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIHZhciBhdXRvSW5zZXJ0U3BhY2UgPSBhdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbiAhPT0gZmFsc2U7IC8vIGxhcmdlID0+IGxnXG4gIC8vIHNtYWxsID0+IHNtXG5cbiAgdmFyIHNpemVDbHMgPSAnJztcblxuICBzd2l0Y2ggKGN1c3RvbWl6ZVNpemUgfHwgc2l6ZSkge1xuICAgIGNhc2UgJ2xhcmdlJzpcbiAgICAgIHNpemVDbHMgPSAnbGcnO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdzbWFsbCc6XG4gICAgICBzaXplQ2xzID0gJ3NtJztcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgdmFyIGljb25UeXBlID0gaW5uZXJMb2FkaW5nID8gJ2xvYWRpbmcnIDogaWNvbjtcbiAgdmFyIGNsYXNzZXMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIGNsYXNzTmFtZSwgKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdCh0eXBlKSwgdHlwZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdChzaGFwZSksIHNoYXBlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHNpemVDbHMpLCBzaXplQ2xzKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pY29uLW9ubHlcIiksICFjaGlsZHJlbiAmJiBjaGlsZHJlbiAhPT0gMCAmJiBpY29uVHlwZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYmFja2dyb3VuZC1naG9zdFwiKSwgZ2hvc3QgJiYgIWlzVW5ib3JkZXJlZEJ1dHRvblR5cGUodHlwZSkpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWxvYWRpbmdcIiksIGlubmVyTG9hZGluZyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdHdvLWNoaW5lc2UtY2hhcnNcIiksIGhhc1R3b0NOQ2hhciAmJiBhdXRvSW5zZXJ0U3BhY2UpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWJsb2NrXCIpLCBibG9jayksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGFuZ2Vyb3VzXCIpLCAhIWRhbmdlciksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgX2NsYXNzTmFtZXMpKTtcbiAgdmFyIGljb25Ob2RlID0gaWNvbiAmJiAhaW5uZXJMb2FkaW5nID8gaWNvbiA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9Mb2FkaW5nSWNvbltcImRlZmF1bHRcIl0sIHtcbiAgICBleGlzdEljb246ICEhaWNvbixcbiAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICBsb2FkaW5nOiAhIWlubmVyTG9hZGluZ1xuICB9KTtcbiAgdmFyIGtpZHMgPSBjaGlsZHJlbiB8fCBjaGlsZHJlbiA9PT0gMCA/IHNwYWNlQ2hpbGRyZW4oY2hpbGRyZW4sIGlzTmVlZEluc2VydGVkKCkgJiYgYXV0b0luc2VydFNwYWNlKSA6IG51bGw7XG4gIHZhciBsaW5rQnV0dG9uUmVzdFByb3BzID0gKDAsIF9vbWl0W1wiZGVmYXVsdFwiXSkocmVzdCwgWydodG1sVHlwZScsICdsb2FkaW5nJ10pO1xuXG4gIGlmIChsaW5rQnV0dG9uUmVzdFByb3BzLmhyZWYgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImFcIiwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBsaW5rQnV0dG9uUmVzdFByb3BzLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICAgIHJlZjogYnV0dG9uUmVmXG4gICAgfSksIGljb25Ob2RlLCBraWRzKTtcbiAgfSAvLyBSZWFjdCBkb2VzIG5vdCByZWNvZ25pemUgdGhlIGBodG1sVHlwZWAgcHJvcCBvbiBhIERPTSBlbGVtZW50LiBIZXJlIHdlIHBpY2sgaXQgb3V0IG9mIGByZXN0YC5cblxuXG4gIHZhciBfYSA9IHJlc3QsXG4gICAgICBodG1sVHlwZSA9IF9hLmh0bWxUeXBlLFxuICAgICAgb3RoZXJQcm9wcyA9IF9fcmVzdChfYSwgW1wiaHRtbFR5cGVcIl0pO1xuXG4gIHZhciBidXR0b25Ob2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCAoMCwgX29taXRbXCJkZWZhdWx0XCJdKShvdGhlclByb3BzLCBbJ2xvYWRpbmcnXSksIHtcbiAgICB0eXBlOiBodG1sVHlwZSxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMsXG4gICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgcmVmOiBidXR0b25SZWZcbiAgfSksIGljb25Ob2RlLCBraWRzKTtcblxuICBpZiAoaXNVbmJvcmRlcmVkQnV0dG9uVHlwZSh0eXBlKSkge1xuICAgIHJldHVybiBidXR0b25Ob2RlO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF93YXZlW1wiZGVmYXVsdFwiXSwgbnVsbCwgYnV0dG9uTm9kZSk7XG59O1xuXG52YXIgQnV0dG9uID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoSW50ZXJuYWxCdXR0b24pO1xuQnV0dG9uLmRpc3BsYXlOYW1lID0gJ0J1dHRvbic7XG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICBsb2FkaW5nOiBmYWxzZSxcbiAgZ2hvc3Q6IGZhbHNlLFxuICBibG9jazogZmFsc2UsXG4gIGh0bWxUeXBlOiAnYnV0dG9uJ1xufTtcbkJ1dHRvbi5Hcm91cCA9IF9idXR0b25Hcm91cFtcImRlZmF1bHRcIl07XG5CdXR0b24uX19BTlRfQlVUVE9OID0gdHJ1ZTtcbnZhciBfZGVmYXVsdCA9IEJ1dHRvbjtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfYnV0dG9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9idXR0b25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSBfYnV0dG9uW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZW5fVVMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9kYXRlLXBpY2tlci9sb2NhbGUvZW5fVVNcIikpO1xuXG52YXIgX2RlZmF1bHQgPSBfZW5fVVNbXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKSk7XG5cbnZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemVkMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpKTtcblxudmFyIF9pbmhlcml0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpKTtcblxudmFyIF9jcmVhdGVTdXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZVN1cGVyXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfcmNDaGVja2JveCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLWNoZWNrYm94XCIpKTtcblxudmFyIF9Hcm91cCA9IHJlcXVpcmUoXCIuL0dyb3VwXCIpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9kZXZXYXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvZGV2V2FybmluZ1wiKSk7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgQ2hlY2tib3ggPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRQdXJlQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMyW1wiZGVmYXVsdFwiXSkoQ2hlY2tib3gsIF9SZWFjdCRQdXJlQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gKDAsIF9jcmVhdGVTdXBlcjJbXCJkZWZhdWx0XCJdKShDaGVja2JveCk7XG5cbiAgZnVuY3Rpb24gQ2hlY2tib3goKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazJbXCJkZWZhdWx0XCJdKSh0aGlzLCBDaGVja2JveCk7XG4gICAgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIF90aGlzLnNhdmVDaGVja2JveCA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy5yY0NoZWNrYm94ID0gbm9kZTtcbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyQ2hlY2tib3ggPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICB2YXIgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHMsXG4gICAgICAgICAgZGlyZWN0aW9uID0gX3JlZi5kaXJlY3Rpb247XG5cbiAgICAgIHZhciBfYXNzZXJ0VGhpc0luaXRpYWxpemUgPSAoMCwgX2Fzc2VydFRoaXNJbml0aWFsaXplZDJbXCJkZWZhdWx0XCJdKShfdGhpcyksXG4gICAgICAgICAgcHJvcHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemUucHJvcHMsXG4gICAgICAgICAgY29udGV4dCA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZS5jb250ZXh0O1xuXG4gICAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGluZGV0ZXJtaW5hdGUgPSBwcm9wcy5pbmRldGVybWluYXRlLFxuICAgICAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICAgICAgb25Nb3VzZUVudGVyID0gcHJvcHMub25Nb3VzZUVudGVyLFxuICAgICAgICAgIG9uTW91c2VMZWF2ZSA9IHByb3BzLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QocHJvcHMsIFtcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwiaW5kZXRlcm1pbmF0ZVwiLCBcInN0eWxlXCIsIFwib25Nb3VzZUVudGVyXCIsIFwib25Nb3VzZUxlYXZlXCJdKTtcblxuICAgICAgdmFyIGNoZWNrYm94R3JvdXAgPSBjb250ZXh0O1xuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnY2hlY2tib3gnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgdmFyIGNoZWNrYm94UHJvcHMgPSAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHJlc3RQcm9wcyk7XG5cbiAgICAgIGlmIChjaGVja2JveEdyb3VwKSB7XG4gICAgICAgIGNoZWNrYm94UHJvcHMub25DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHJlc3RQcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgcmVzdFByb3BzLm9uQ2hhbmdlLmFwcGx5KHJlc3RQcm9wcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjaGVja2JveEdyb3VwLnRvZ2dsZU9wdGlvbih7XG4gICAgICAgICAgICBsYWJlbDogY2hpbGRyZW4sXG4gICAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWVcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICBjaGVja2JveFByb3BzLm5hbWUgPSBjaGVja2JveEdyb3VwLm5hbWU7XG4gICAgICAgIGNoZWNrYm94UHJvcHMuY2hlY2tlZCA9IGNoZWNrYm94R3JvdXAudmFsdWUuaW5kZXhPZihwcm9wcy52YWx1ZSkgIT09IC0xO1xuICAgICAgICBjaGVja2JveFByb3BzLmRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQgfHwgY2hlY2tib3hHcm91cC5kaXNhYmxlZDtcbiAgICAgIH1cblxuICAgICAgdmFyIGNsYXNzU3RyaW5nID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoY2xhc3NOYW1lLCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi13cmFwcGVyXCIpLCB0cnVlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXdyYXBwZXItY2hlY2tlZFwiKSwgY2hlY2tib3hQcm9wcy5jaGVja2VkKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi13cmFwcGVyLWRpc2FibGVkXCIpLCBjaGVja2JveFByb3BzLmRpc2FibGVkKSwgX2NsYXNzTmFtZXMpKTtcbiAgICAgIHZhciBjaGVja2JveENsYXNzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pbmRldGVybWluYXRlXCIpLCBpbmRldGVybWluYXRlKSk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICAvKiNfX1BVUkVfXyovXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9sYWJlbC1oYXMtYXNzb2NpYXRlZC1jb250cm9sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc1N0cmluZyxcbiAgICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiBvbk1vdXNlRW50ZXIsXG4gICAgICAgICAgb25Nb3VzZUxlYXZlOiBvbk1vdXNlTGVhdmVcbiAgICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjQ2hlY2tib3hbXCJkZWZhdWx0XCJdLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGNoZWNrYm94UHJvcHMsIHtcbiAgICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgICBjbGFzc05hbWU6IGNoZWNrYm94Q2xhc3MsXG4gICAgICAgICAgcmVmOiBfdGhpcy5zYXZlQ2hlY2tib3hcbiAgICAgICAgfSkpLCBjaGlsZHJlbiAhPT0gdW5kZWZpbmVkICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBjaGlsZHJlbikpXG4gICAgICApO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMltcImRlZmF1bHRcIl0pKENoZWNrYm94LCBbe1xuICAgIGtleTogXCJjb21wb25lbnREaWRNb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHZhciBfYTtcblxuICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICAgIChfYSA9IHRoaXMuY29udGV4dCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlZ2lzdGVyVmFsdWUodmFsdWUpO1xuICAgICAgKDAsIF9kZXZXYXJuaW5nW1wiZGVmYXVsdFwiXSkoJ2NoZWNrZWQnIGluIHRoaXMucHJvcHMgfHwgdGhpcy5jb250ZXh0IHx8ICEoJ3ZhbHVlJyBpbiB0aGlzLnByb3BzKSwgJ0NoZWNrYm94JywgJ2B2YWx1ZWAgaXMgbm90IGEgdmFsaWQgcHJvcCwgZG8geW91IG1lYW4gYGNoZWNrZWRgPycpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKF9yZWYyKSB7XG4gICAgICB2YXIgcHJldlZhbHVlID0gX3JlZjIudmFsdWU7XG5cbiAgICAgIHZhciBfYSwgX2I7XG5cbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG5cbiAgICAgIGlmICh2YWx1ZSAhPT0gcHJldlZhbHVlKSB7XG4gICAgICAgIChfYSA9IHRoaXMuY29udGV4dCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbmNlbFZhbHVlKHByZXZWYWx1ZSk7XG4gICAgICAgIChfYiA9IHRoaXMuY29udGV4dCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnJlZ2lzdGVyVmFsdWUodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnRXaWxsVW5tb3VudFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHZhciBfYTtcblxuICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICAgIChfYSA9IHRoaXMuY29udGV4dCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbmNlbFZhbHVlKHZhbHVlKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZm9jdXNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9jdXMoKSB7XG4gICAgICB0aGlzLnJjQ2hlY2tib3guZm9jdXMoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiYmx1clwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBibHVyKCkge1xuICAgICAgdGhpcy5yY0NoZWNrYm94LmJsdXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyQ2hlY2tib3gpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQ2hlY2tib3g7XG59KFJlYWN0LlB1cmVDb21wb25lbnQpO1xuXG5DaGVja2JveC5fX0FOVF9DSEVDS0JPWCA9IHRydWU7XG5DaGVja2JveC5kZWZhdWx0UHJvcHMgPSB7XG4gIGluZGV0ZXJtaW5hdGU6IGZhbHNlXG59O1xuQ2hlY2tib3guY29udGV4dFR5cGUgPSBfR3JvdXAuR3JvdXBDb250ZXh0O1xudmFyIF9kZWZhdWx0ID0gQ2hlY2tib3g7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5Hcm91cENvbnRleHQgPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX3RvQ29uc3VtYWJsZUFycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXlcIikpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIikpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIikpO1xuXG52YXIgX2Fzc2VydFRoaXNJbml0aWFsaXplZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKSk7XG5cbnZhciBfaW5oZXJpdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKSk7XG5cbnZhciBfY3JlYXRlU3VwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVTdXBlclwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX29taXQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJvbWl0LmpzXCIpKTtcblxudmFyIF9DaGVja2JveCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vQ2hlY2tib3hcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBHcm91cENvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcbmV4cG9ydHMuR3JvdXBDb250ZXh0ID0gR3JvdXBDb250ZXh0O1xuXG52YXIgQ2hlY2tib3hHcm91cCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JFB1cmVDb21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czJbXCJkZWZhdWx0XCJdKShDaGVja2JveEdyb3VwLCBfUmVhY3QkUHVyZUNvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9ICgwLCBfY3JlYXRlU3VwZXIyW1wiZGVmYXVsdFwiXSkoQ2hlY2tib3hHcm91cCk7XG5cbiAgZnVuY3Rpb24gQ2hlY2tib3hHcm91cChwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgQ2hlY2tib3hHcm91cCk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG5cbiAgICBfdGhpcy5jYW5jZWxWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIHJlZ2lzdGVyZWRWYWx1ZXMgPSBfcmVmLnJlZ2lzdGVyZWRWYWx1ZXM7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVnaXN0ZXJlZFZhbHVlczogcmVnaXN0ZXJlZFZhbHVlcy5maWx0ZXIoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbCAhPT0gdmFsdWU7XG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZWdpc3RlclZhbHVlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgdmFyIHJlZ2lzdGVyZWRWYWx1ZXMgPSBfcmVmMi5yZWdpc3RlcmVkVmFsdWVzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHJlZ2lzdGVyZWRWYWx1ZXM6IFtdLmNvbmNhdCgoMCwgX3RvQ29uc3VtYWJsZUFycmF5MltcImRlZmF1bHRcIl0pKHJlZ2lzdGVyZWRWYWx1ZXMpLCBbdmFsdWVdKVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLnRvZ2dsZU9wdGlvbiA9IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgIHZhciByZWdpc3RlcmVkVmFsdWVzID0gX3RoaXMuc3RhdGUucmVnaXN0ZXJlZFZhbHVlcztcblxuICAgICAgdmFyIG9wdGlvbkluZGV4ID0gX3RoaXMuc3RhdGUudmFsdWUuaW5kZXhPZihvcHRpb24udmFsdWUpO1xuXG4gICAgICB2YXIgdmFsdWUgPSAoMCwgX3RvQ29uc3VtYWJsZUFycmF5MltcImRlZmF1bHRcIl0pKF90aGlzLnN0YXRlLnZhbHVlKTtcblxuICAgICAgaWYgKG9wdGlvbkluZGV4ID09PSAtMSkge1xuICAgICAgICB2YWx1ZS5wdXNoKG9wdGlvbi52YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZS5zcGxpY2Uob3B0aW9uSW5kZXgsIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoISgndmFsdWUnIGluIF90aGlzLnByb3BzKSkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgb25DaGFuZ2UgPSBfdGhpcy5wcm9wcy5vbkNoYW5nZTtcblxuICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gX3RoaXMuZ2V0T3B0aW9ucygpO1xuXG4gICAgICAgIG9uQ2hhbmdlKHZhbHVlLmZpbHRlcihmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgcmV0dXJuIHJlZ2lzdGVyZWRWYWx1ZXMuaW5kZXhPZih2YWwpICE9PSAtMTtcbiAgICAgICAgfSkuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIHZhciBpbmRleEEgPSBvcHRpb25zLmZpbmRJbmRleChmdW5jdGlvbiAob3B0KSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0LnZhbHVlID09PSBhO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhciBpbmRleEIgPSBvcHRpb25zLmZpbmRJbmRleChmdW5jdGlvbiAob3B0KSB7XG4gICAgICAgICAgICByZXR1cm4gb3B0LnZhbHVlID09PSBiO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBpbmRleEEgLSBpbmRleEI7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMucmVuZGVyR3JvdXAgPSBmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmMy5nZXRQcmVmaXhDbHMsXG4gICAgICAgICAgZGlyZWN0aW9uID0gX3JlZjMuZGlyZWN0aW9uO1xuXG4gICAgICB2YXIgX2Fzc2VydFRoaXNJbml0aWFsaXplID0gKDAsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQyW1wiZGVmYXVsdFwiXSkoX3RoaXMpLFxuICAgICAgICAgIHByb3BzID0gX2Fzc2VydFRoaXNJbml0aWFsaXplLnByb3BzLFxuICAgICAgICAgIHN0YXRlID0gX2Fzc2VydFRoaXNJbml0aWFsaXplLnN0YXRlO1xuXG4gICAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgICAgIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zLFxuICAgICAgICAgIHJlc3RQcm9wcyA9IF9fcmVzdChwcm9wcywgW1wicHJlZml4Q2xzXCIsIFwiY2xhc3NOYW1lXCIsIFwic3R5bGVcIiwgXCJvcHRpb25zXCJdKTtcblxuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnY2hlY2tib3gnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgdmFyIGdyb3VwUHJlZml4Q2xzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ncm91cFwiKTtcbiAgICAgIHZhciBkb21Qcm9wcyA9ICgwLCBfb21pdFtcImRlZmF1bHRcIl0pKHJlc3RQcm9wcywgWydjaGlsZHJlbicsICdkZWZhdWx0VmFsdWUnLCAndmFsdWUnLCAnb25DaGFuZ2UnLCAnZGlzYWJsZWQnXSk7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNoaWxkcmVuID0gX3RoaXMuZ2V0T3B0aW9ucygpLm1hcChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9DaGVja2JveFtcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgICAga2V5OiBvcHRpb24udmFsdWUudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIGRpc2FibGVkOiAnZGlzYWJsZWQnIGluIG9wdGlvbiA/IG9wdGlvbi5kaXNhYmxlZCA6IHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgICAgIGNoZWNrZWQ6IHN0YXRlLnZhbHVlLmluZGV4T2Yob3B0aW9uLnZhbHVlKSAhPT0gLTEsXG4gICAgICAgICAgICBvbkNoYW5nZTogb3B0aW9uLm9uQ2hhbmdlLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChncm91cFByZWZpeENscywgXCItaXRlbVwiKSxcbiAgICAgICAgICAgIHN0eWxlOiBvcHRpb24uc3R5bGVcbiAgICAgICAgICB9LCBvcHRpb24ubGFiZWwpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB7XG4gICAgICAgIHRvZ2dsZU9wdGlvbjogX3RoaXMudG9nZ2xlT3B0aW9uLFxuICAgICAgICB2YWx1ZTogX3RoaXMuc3RhdGUudmFsdWUsXG4gICAgICAgIGRpc2FibGVkOiBfdGhpcy5wcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgbmFtZTogX3RoaXMucHJvcHMubmFtZSxcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTYzNzZcbiAgICAgICAgcmVnaXN0ZXJWYWx1ZTogX3RoaXMucmVnaXN0ZXJWYWx1ZSxcbiAgICAgICAgY2FuY2VsVmFsdWU6IF90aGlzLmNhbmNlbFZhbHVlXG4gICAgICB9O1xuICAgICAgdmFyIGNsYXNzU3RyaW5nID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoZ3JvdXBQcmVmaXhDbHMsIGNsYXNzTmFtZSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSh7fSwgXCJcIi5jb25jYXQoZ3JvdXBQcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJykpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NTdHJpbmcsXG4gICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgfSwgZG9tUHJvcHMpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChHcm91cENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IGNvbnRleHRcbiAgICAgIH0sIGNoaWxkcmVuKSk7XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IHByb3BzLnZhbHVlIHx8IHByb3BzLmRlZmF1bHRWYWx1ZSB8fCBbXSxcbiAgICAgIHJlZ2lzdGVyZWRWYWx1ZXM6IFtdXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMltcImRlZmF1bHRcIl0pKENoZWNrYm94R3JvdXAsIFt7XG4gICAga2V5OiBcImdldE9wdGlvbnNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0T3B0aW9ucygpIHtcbiAgICAgIHZhciBvcHRpb25zID0gdGhpcy5wcm9wcy5vcHRpb25zOyAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvaXNzdWVzLzc5NjBcblxuICAgICAgcmV0dXJuIG9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxhYmVsOiBvcHRpb24sXG4gICAgICAgICAgICB2YWx1ZTogb3B0aW9uXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyR3JvdXApO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAoJ3ZhbHVlJyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2YWx1ZTogbmV4dFByb3BzLnZhbHVlIHx8IFtdXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQ2hlY2tib3hHcm91cDtcbn0oUmVhY3QuUHVyZUNvbXBvbmVudCk7XG5cbkNoZWNrYm94R3JvdXAuZGVmYXVsdFByb3BzID0ge1xuICBvcHRpb25zOiBbXVxufTtcbnZhciBfZGVmYXVsdCA9IENoZWNrYm94R3JvdXA7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX0NoZWNrYm94ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9DaGVja2JveFwiKSk7XG5cbnZhciBfR3JvdXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL0dyb3VwXCIpKTtcblxuX0NoZWNrYm94W1wiZGVmYXVsdFwiXS5Hcm91cCA9IF9Hcm91cFtcImRlZmF1bHRcIl07XG52YXIgX2RlZmF1bHQgPSBfQ2hlY2tib3hbXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5TaXplQ29udGV4dFByb3ZpZGVyID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgU2l6ZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh1bmRlZmluZWQpO1xuXG52YXIgU2l6ZUNvbnRleHRQcm92aWRlciA9IGZ1bmN0aW9uIFNpemVDb250ZXh0UHJvdmlkZXIoX3JlZikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuLFxuICAgICAgc2l6ZSA9IF9yZWYuc2l6ZTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNpemVDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAob3JpZ2luU2l6ZSkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTaXplQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IHNpemUgfHwgb3JpZ2luU2l6ZVxuICAgIH0sIGNoaWxkcmVuKTtcbiAgfSk7XG59O1xuXG5leHBvcnRzLlNpemVDb250ZXh0UHJvdmlkZXIgPSBTaXplQ29udGV4dFByb3ZpZGVyO1xudmFyIF9kZWZhdWx0ID0gU2l6ZUNvbnRleHQ7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMud2l0aENvbmZpZ0NvbnN1bWVyID0gd2l0aENvbmZpZ0NvbnN1bWVyO1xuZXhwb3J0cy5Db25maWdDb25zdW1lciA9IGV4cG9ydHMuQ29uZmlnQ29udGV4dCA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVuZGVyRW1wdHkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JlbmRlckVtcHR5XCIpKTtcblxudmFyIENvbmZpZ0NvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIC8vIFdlIHByb3ZpZGUgYSBkZWZhdWx0IGZ1bmN0aW9uIGZvciBDb250ZXh0IHdpdGhvdXQgcHJvdmlkZXJcbiAgZ2V0UHJlZml4Q2xzOiBmdW5jdGlvbiBnZXRQcmVmaXhDbHMoc3VmZml4Q2xzLCBjdXN0b21pemVQcmVmaXhDbHMpIHtcbiAgICBpZiAoY3VzdG9taXplUHJlZml4Q2xzKSByZXR1cm4gY3VzdG9taXplUHJlZml4Q2xzO1xuICAgIHJldHVybiBzdWZmaXhDbHMgPyBcImFudC1cIi5jb25jYXQoc3VmZml4Q2xzKSA6ICdhbnQnO1xuICB9LFxuICByZW5kZXJFbXB0eTogX3JlbmRlckVtcHR5W1wiZGVmYXVsdFwiXVxufSk7XG5leHBvcnRzLkNvbmZpZ0NvbnRleHQgPSBDb25maWdDb250ZXh0O1xudmFyIENvbmZpZ0NvbnN1bWVyID0gQ29uZmlnQ29udGV4dC5Db25zdW1lcjtcbmV4cG9ydHMuQ29uZmlnQ29uc3VtZXIgPSBDb25maWdDb25zdW1lcjtcblxuZnVuY3Rpb24gd2l0aENvbmZpZ0NvbnN1bWVyKGNvbmZpZykge1xuICByZXR1cm4gZnVuY3Rpb24gd2l0aENvbmZpZ0NvbnN1bWVyRnVuYyhDb21wb25lbnQpIHtcbiAgICAvLyBXcmFwIHdpdGggQ29uZmlnQ29uc3VtZXIuIFNpbmNlIHdlIG5lZWQgY29tcGF0aWJsZSB3aXRoIHJlYWN0IDE1LCBiZSBjYXJlIHdoZW4gdXNpbmcgcmVmIG1ldGhvZHNcbiAgICB2YXIgU0ZDID0gZnVuY3Rpb24gU0ZDKHByb3BzKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb25maWdQcm9wcykge1xuICAgICAgICB2YXIgYmFzaWNQcmVmaXhDbHMgPSBjb25maWcucHJlZml4Q2xzO1xuICAgICAgICB2YXIgZ2V0UHJlZml4Q2xzID0gY29uZmlnUHJvcHMuZ2V0UHJlZml4Q2xzO1xuICAgICAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzO1xuICAgICAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKGJhc2ljUHJlZml4Q2xzLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGNvbmZpZ1Byb3BzLCBwcm9wcywge1xuICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzXG4gICAgICAgIH0pKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgY29ucyA9IENvbXBvbmVudC5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgbmFtZSA9IGNvbnMgJiYgY29ucy5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcbiAgICBTRkMuZGlzcGxheU5hbWUgPSBcIndpdGhDb25maWdDb25zdW1lcihcIi5jb25jYXQobmFtZSwgXCIpXCIpO1xuICAgIHJldHVybiBTRkM7XG4gIH07XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29uZmlnQ29uc3VtZXJcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2NvbnRleHQuQ29uZmlnQ29uc3VtZXI7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ29uZmlnQ29udGV4dFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY29udGV4dC5Db25maWdDb250ZXh0O1xuICB9XG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5jb25maWdDb25zdW1lclByb3BzID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yY0ZpZWxkRm9ybSA9IHJlcXVpcmUoXCJyYy1maWVsZC1mb3JtXCIpO1xuXG52YXIgX2xvY2FsZVByb3ZpZGVyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL2xvY2FsZS1wcm92aWRlclwiKSk7XG5cbnZhciBfTG9jYWxlUmVjZWl2ZXIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9sb2NhbGUtcHJvdmlkZXIvTG9jYWxlUmVjZWl2ZXJcIikpO1xuXG52YXIgX2NvbnRleHQgPSByZXF1aXJlKFwiLi9jb250ZXh0XCIpO1xuXG52YXIgX1NpemVDb250ZXh0ID0gcmVxdWlyZShcIi4vU2l6ZUNvbnRleHRcIik7XG5cbnZhciBfbWVzc2FnZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL21lc3NhZ2VcIikpO1xuXG52YXIgX25vdGlmaWNhdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL25vdGlmaWNhdGlvblwiKSk7XG5cbi8vIFRPRE86IHJlbW92ZSB0aGlzIGxpbnRcbi8vIFNGQyBoYXMgc3BlY2lmaWVkIGEgZGlzcGxheU5hbWUsIGJ1dCBub3Qgd29ya2VkLlxuXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kaXNwbGF5LW5hbWUgKi9cbnZhciBjb25maWdDb25zdW1lclByb3BzID0gWydnZXRUYXJnZXRDb250YWluZXInLCAnZ2V0UG9wdXBDb250YWluZXInLCAncm9vdFByZWZpeENscycsICdnZXRQcmVmaXhDbHMnLCAncmVuZGVyRW1wdHknLCAnY3NwJywgJ2F1dG9JbnNlcnRTcGFjZUluQnV0dG9uJywgJ2xvY2FsZScsICdwYWdlSGVhZGVyJ107XG5leHBvcnRzLmNvbmZpZ0NvbnN1bWVyUHJvcHMgPSBjb25maWdDb25zdW1lclByb3BzO1xuXG52YXIgQ29uZmlnUHJvdmlkZXIgPSBmdW5jdGlvbiBDb25maWdQcm92aWRlcihwcm9wcykge1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChwcm9wcy5kaXJlY3Rpb24pIHtcbiAgICAgIF9tZXNzYWdlW1wiZGVmYXVsdFwiXS5jb25maWcoe1xuICAgICAgICBydGw6IHByb3BzLmRpcmVjdGlvbiA9PT0gJ3J0bCdcbiAgICAgIH0pO1xuXG4gICAgICBfbm90aWZpY2F0aW9uW1wiZGVmYXVsdFwiXS5jb25maWcoe1xuICAgICAgICBydGw6IHByb3BzLmRpcmVjdGlvbiA9PT0gJ3J0bCdcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3Byb3BzLmRpcmVjdGlvbl0pO1xuXG4gIHZhciBnZXRQcmVmaXhDbHNXcmFwcGVyID0gZnVuY3Rpb24gZ2V0UHJlZml4Q2xzV3JhcHBlcihjb250ZXh0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChzdWZmaXhDbHMsIGN1c3RvbWl6ZVByZWZpeENscykge1xuICAgICAgdmFyIHByZWZpeENscyA9IHByb3BzLnByZWZpeENscztcbiAgICAgIGlmIChjdXN0b21pemVQcmVmaXhDbHMpIHJldHVybiBjdXN0b21pemVQcmVmaXhDbHM7XG4gICAgICB2YXIgbWVyZ2VkUHJlZml4Q2xzID0gcHJlZml4Q2xzIHx8IGNvbnRleHQuZ2V0UHJlZml4Q2xzKCcnKTtcbiAgICAgIHJldHVybiBzdWZmaXhDbHMgPyBcIlwiLmNvbmNhdChtZXJnZWRQcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoc3VmZml4Q2xzKSA6IG1lcmdlZFByZWZpeENscztcbiAgICB9O1xuICB9O1xuXG4gIHZhciByZW5kZXJQcm92aWRlciA9IGZ1bmN0aW9uIHJlbmRlclByb3ZpZGVyKGNvbnRleHQsIGxlZ2FjeUxvY2FsZSkge1xuICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBnZXRUYXJnZXRDb250YWluZXIgPSBwcm9wcy5nZXRUYXJnZXRDb250YWluZXIsXG4gICAgICAgIGdldFBvcHVwQ29udGFpbmVyID0gcHJvcHMuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgIHJlbmRlckVtcHR5ID0gcHJvcHMucmVuZGVyRW1wdHksXG4gICAgICAgIGNzcCA9IHByb3BzLmNzcCxcbiAgICAgICAgYXV0b0luc2VydFNwYWNlSW5CdXR0b24gPSBwcm9wcy5hdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbixcbiAgICAgICAgZm9ybSA9IHByb3BzLmZvcm0sXG4gICAgICAgIGlucHV0ID0gcHJvcHMuaW5wdXQsXG4gICAgICAgIGxvY2FsZSA9IHByb3BzLmxvY2FsZSxcbiAgICAgICAgcGFnZUhlYWRlciA9IHByb3BzLnBhZ2VIZWFkZXIsXG4gICAgICAgIGNvbXBvbmVudFNpemUgPSBwcm9wcy5jb21wb25lbnRTaXplLFxuICAgICAgICBkaXJlY3Rpb24gPSBwcm9wcy5kaXJlY3Rpb24sXG4gICAgICAgIHNwYWNlID0gcHJvcHMuc3BhY2UsXG4gICAgICAgIHZpcnR1YWwgPSBwcm9wcy52aXJ0dWFsLFxuICAgICAgICBkcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSBwcm9wcy5kcm9wZG93bk1hdGNoU2VsZWN0V2lkdGg7XG4gICAgdmFyIGNvbmZpZyA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGNvbnRleHQpLCB7XG4gICAgICBnZXRQcmVmaXhDbHM6IGdldFByZWZpeENsc1dyYXBwZXIoY29udGV4dCksXG4gICAgICBjc3A6IGNzcCxcbiAgICAgIGF1dG9JbnNlcnRTcGFjZUluQnV0dG9uOiBhdXRvSW5zZXJ0U3BhY2VJbkJ1dHRvbixcbiAgICAgIGxvY2FsZTogbG9jYWxlIHx8IGxlZ2FjeUxvY2FsZSxcbiAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgICAgc3BhY2U6IHNwYWNlLFxuICAgICAgdmlydHVhbDogdmlydHVhbCxcbiAgICAgIGRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aDogZHJvcGRvd25NYXRjaFNlbGVjdFdpZHRoXG4gICAgfSk7XG5cbiAgICBpZiAoZ2V0VGFyZ2V0Q29udGFpbmVyKSB7XG4gICAgICBjb25maWcuZ2V0VGFyZ2V0Q29udGFpbmVyID0gZ2V0VGFyZ2V0Q29udGFpbmVyO1xuICAgIH1cblxuICAgIGlmIChnZXRQb3B1cENvbnRhaW5lcikge1xuICAgICAgY29uZmlnLmdldFBvcHVwQ29udGFpbmVyID0gZ2V0UG9wdXBDb250YWluZXI7XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlckVtcHR5KSB7XG4gICAgICBjb25maWcucmVuZGVyRW1wdHkgPSByZW5kZXJFbXB0eTtcbiAgICB9XG5cbiAgICBpZiAocGFnZUhlYWRlcikge1xuICAgICAgY29uZmlnLnBhZ2VIZWFkZXIgPSBwYWdlSGVhZGVyO1xuICAgIH1cblxuICAgIGlmIChpbnB1dCkge1xuICAgICAgY29uZmlnLmlucHV0ID0gaW5wdXQ7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkTm9kZSA9IGNoaWxkcmVuOyAvLyBBZGRpdGlvbmFsIEZvcm0gcHJvdmlkZXJcblxuICAgIHZhciB2YWxpZGF0ZU1lc3NhZ2VzID0ge307XG5cbiAgICBpZiAobG9jYWxlICYmIGxvY2FsZS5Gb3JtICYmIGxvY2FsZS5Gb3JtLmRlZmF1bHRWYWxpZGF0ZU1lc3NhZ2VzKSB7XG4gICAgICB2YWxpZGF0ZU1lc3NhZ2VzID0gbG9jYWxlLkZvcm0uZGVmYXVsdFZhbGlkYXRlTWVzc2FnZXM7XG4gICAgfVxuXG4gICAgaWYgKGZvcm0gJiYgZm9ybS52YWxpZGF0ZU1lc3NhZ2VzKSB7XG4gICAgICB2YWxpZGF0ZU1lc3NhZ2VzID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgdmFsaWRhdGVNZXNzYWdlcyksIGZvcm0udmFsaWRhdGVNZXNzYWdlcyk7XG4gICAgfVxuXG4gICAgaWYgKE9iamVjdC5rZXlzKHZhbGlkYXRlTWVzc2FnZXMpLmxlbmd0aCA+IDApIHtcbiAgICAgIGNoaWxkTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY0ZpZWxkRm9ybS5Gb3JtUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsaWRhdGVNZXNzYWdlczogdmFsaWRhdGVNZXNzYWdlc1xuICAgICAgfSwgY2hpbGRyZW4pO1xuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfU2l6ZUNvbnRleHQuU2l6ZUNvbnRleHRQcm92aWRlciwge1xuICAgICAgc2l6ZTogY29tcG9uZW50U2l6ZVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb250ZXh0LkNvbmZpZ0NvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgIHZhbHVlOiBjb25maWdcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfbG9jYWxlUHJvdmlkZXJbXCJkZWZhdWx0XCJdLCB7XG4gICAgICBsb2NhbGU6IGxvY2FsZSB8fCBsZWdhY3lMb2NhbGUsXG4gICAgICBfQU5UX01BUktfXzogX2xvY2FsZVByb3ZpZGVyLkFOVF9NQVJLXG4gICAgfSwgY2hpbGROb2RlKSkpO1xuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTG9jYWxlUmVjZWl2ZXJbXCJkZWZhdWx0XCJdLCBudWxsLCBmdW5jdGlvbiAoXywgX18sIGxlZ2FjeUxvY2FsZSkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29udGV4dC5Db25maWdDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIHJldHVybiByZW5kZXJQcm92aWRlcihjb250ZXh0LCBsZWdhY3lMb2NhbGUpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IENvbmZpZ1Byb3ZpZGVyO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9lbXB0eSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2VtcHR5XCIpKTtcblxudmFyIF8gPSByZXF1aXJlKFwiLlwiKTtcblxudmFyIHJlbmRlckVtcHR5ID0gZnVuY3Rpb24gcmVuZGVyRW1wdHkoY29tcG9uZW50TmFtZSkge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXy5Db25maWdDb25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICB2YXIgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHM7XG4gICAgdmFyIHByZWZpeCA9IGdldFByZWZpeENscygnZW1wdHknKTtcblxuICAgIHN3aXRjaCAoY29tcG9uZW50TmFtZSkge1xuICAgICAgY2FzZSAnVGFibGUnOlxuICAgICAgY2FzZSAnTGlzdCc6XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfZW1wdHlbXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgICAgaW1hZ2U6IF9lbXB0eVtcImRlZmF1bHRcIl0uUFJFU0VOVEVEX0lNQUdFX1NJTVBMRVxuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnU2VsZWN0JzpcbiAgICAgIGNhc2UgJ1RyZWVTZWxlY3QnOlxuICAgICAgY2FzZSAnQ2FzY2FkZXInOlxuICAgICAgY2FzZSAnVHJhbnNmZXInOlxuICAgICAgY2FzZSAnTWVudGlvbnMnOlxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2VtcHR5W1wiZGVmYXVsdFwiXSwge1xuICAgICAgICAgIGltYWdlOiBfZW1wdHlbXCJkZWZhdWx0XCJdLlBSRVNFTlRFRF9JTUFHRV9TSU1QTEUsXG4gICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXgsIFwiLXNtYWxsXCIpXG4gICAgICAgIH0pO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2VtcHR5W1wiZGVmYXVsdFwiXSwgbnVsbCk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IHJlbmRlckVtcHR5O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZW5fVVMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1waWNrZXIvbGliL2xvY2FsZS9lbl9VU1wiKSk7XG5cbnZhciBfZW5fVVMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vdGltZS1waWNrZXIvbG9jYWxlL2VuX1VTXCIpKTtcblxuLy8gTWVyZ2UgaW50byBhIGxvY2FsZSBvYmplY3RcbnZhciBsb2NhbGUgPSB7XG4gIGxhbmc6ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgcGxhY2Vob2xkZXI6ICdTZWxlY3QgZGF0ZScsXG4gICAgeWVhclBsYWNlaG9sZGVyOiAnU2VsZWN0IHllYXInLFxuICAgIHF1YXJ0ZXJQbGFjZWhvbGRlcjogJ1NlbGVjdCBxdWFydGVyJyxcbiAgICBtb250aFBsYWNlaG9sZGVyOiAnU2VsZWN0IG1vbnRoJyxcbiAgICB3ZWVrUGxhY2Vob2xkZXI6ICdTZWxlY3Qgd2VlaycsXG4gICAgcmFuZ2VQbGFjZWhvbGRlcjogWydTdGFydCBkYXRlJywgJ0VuZCBkYXRlJ10sXG4gICAgcmFuZ2VZZWFyUGxhY2Vob2xkZXI6IFsnU3RhcnQgeWVhcicsICdFbmQgeWVhciddLFxuICAgIHJhbmdlTW9udGhQbGFjZWhvbGRlcjogWydTdGFydCBtb250aCcsICdFbmQgbW9udGgnXSxcbiAgICByYW5nZVdlZWtQbGFjZWhvbGRlcjogWydTdGFydCB3ZWVrJywgJ0VuZCB3ZWVrJ11cbiAgfSwgX2VuX1VTW1wiZGVmYXVsdFwiXSksXG4gIHRpbWVQaWNrZXJMb2NhbGU6ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgX2VuX1VTMltcImRlZmF1bHRcIl0pXG59OyAvLyBBbGwgc2V0dGluZ3MgYXQ6XG4vLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2Jsb2IvbWFzdGVyL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvbG9jYWxlL2V4YW1wbGUuanNvblxuXG52YXIgX2RlZmF1bHQgPSBsb2NhbGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX0VsbGlwc2lzT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9FbGxpcHNpc091dGxpbmVkXCIpKTtcblxudmFyIF9idXR0b24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9idXR0b25cIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9kcm9wZG93biA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZHJvcGRvd25cIikpO1xuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIEJ1dHRvbkdyb3VwID0gX2J1dHRvbltcImRlZmF1bHRcIl0uR3JvdXA7XG5cbnZhciBEcm9wZG93bkJ1dHRvbiA9IGZ1bmN0aW9uIERyb3Bkb3duQnV0dG9uKHByb3BzKSB7XG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0Q29udGV4dFBvcHVwQ29udGFpbmVyID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHMsXG4gICAgICBkaXJlY3Rpb24gPSBfUmVhY3QkdXNlQ29udGV4dC5kaXJlY3Rpb247XG5cbiAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIG9uQ2xpY2sgPSBwcm9wcy5vbkNsaWNrLFxuICAgICAgaHRtbFR5cGUgPSBwcm9wcy5odG1sVHlwZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBvdmVybGF5ID0gcHJvcHMub3ZlcmxheSxcbiAgICAgIHRyaWdnZXIgPSBwcm9wcy50cmlnZ2VyLFxuICAgICAgYWxpZ24gPSBwcm9wcy5hbGlnbixcbiAgICAgIHZpc2libGUgPSBwcm9wcy52aXNpYmxlLFxuICAgICAgb25WaXNpYmxlQ2hhbmdlID0gcHJvcHMub25WaXNpYmxlQ2hhbmdlLFxuICAgICAgcGxhY2VtZW50ID0gcHJvcHMucGxhY2VtZW50LFxuICAgICAgZ2V0UG9wdXBDb250YWluZXIgPSBwcm9wcy5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgIGhyZWYgPSBwcm9wcy5ocmVmLFxuICAgICAgX3Byb3BzJGljb24gPSBwcm9wcy5pY29uLFxuICAgICAgaWNvbiA9IF9wcm9wcyRpY29uID09PSB2b2lkIDAgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfRWxsaXBzaXNPdXRsaW5lZFtcImRlZmF1bHRcIl0sIG51bGwpIDogX3Byb3BzJGljb24sXG4gICAgICB0aXRsZSA9IHByb3BzLnRpdGxlLFxuICAgICAgYnV0dG9uc1JlbmRlciA9IHByb3BzLmJ1dHRvbnNSZW5kZXIsXG4gICAgICByZXN0UHJvcHMgPSBfX3Jlc3QocHJvcHMsIFtcInByZWZpeENsc1wiLCBcInR5cGVcIiwgXCJkaXNhYmxlZFwiLCBcIm9uQ2xpY2tcIiwgXCJodG1sVHlwZVwiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3NOYW1lXCIsIFwib3ZlcmxheVwiLCBcInRyaWdnZXJcIiwgXCJhbGlnblwiLCBcInZpc2libGVcIiwgXCJvblZpc2libGVDaGFuZ2VcIiwgXCJwbGFjZW1lbnRcIiwgXCJnZXRQb3B1cENvbnRhaW5lclwiLCBcImhyZWZcIiwgXCJpY29uXCIsIFwidGl0bGVcIiwgXCJidXR0b25zUmVuZGVyXCJdKTtcblxuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdkcm9wZG93bi1idXR0b24nLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICB2YXIgZHJvcGRvd25Qcm9wcyA9IHtcbiAgICBhbGlnbjogYWxpZ24sXG4gICAgb3ZlcmxheTogb3ZlcmxheSxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgdHJpZ2dlcjogZGlzYWJsZWQgPyBbXSA6IHRyaWdnZXIsXG4gICAgb25WaXNpYmxlQ2hhbmdlOiBvblZpc2libGVDaGFuZ2UsXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyIHx8IGdldENvbnRleHRQb3B1cENvbnRhaW5lclxuICB9O1xuXG4gIGlmICgndmlzaWJsZScgaW4gcHJvcHMpIHtcbiAgICBkcm9wZG93blByb3BzLnZpc2libGUgPSB2aXNpYmxlO1xuICB9XG5cbiAgaWYgKCdwbGFjZW1lbnQnIGluIHByb3BzKSB7XG4gICAgZHJvcGRvd25Qcm9wcy5wbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gIH0gZWxzZSB7XG4gICAgZHJvcGRvd25Qcm9wcy5wbGFjZW1lbnQgPSBkaXJlY3Rpb24gPT09ICdydGwnID8gJ2JvdHRvbUxlZnQnIDogJ2JvdHRvbVJpZ2h0JztcbiAgfVxuXG4gIHZhciBsZWZ0QnV0dG9uID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2J1dHRvbltcImRlZmF1bHRcIl0sIHtcbiAgICB0eXBlOiB0eXBlLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICBvbkNsaWNrOiBvbkNsaWNrLFxuICAgIGh0bWxUeXBlOiBodG1sVHlwZSxcbiAgICBocmVmOiBocmVmLFxuICAgIHRpdGxlOiB0aXRsZVxuICB9LCBjaGlsZHJlbik7XG4gIHZhciByaWdodEJ1dHRvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9idXR0b25bXCJkZWZhdWx0XCJdLCB7XG4gICAgdHlwZTogdHlwZSxcbiAgICBpY29uOiBpY29uXG4gIH0pO1xuXG4gIHZhciBfYnV0dG9uc1JlbmRlciA9IGJ1dHRvbnNSZW5kZXIoW2xlZnRCdXR0b24sIHJpZ2h0QnV0dG9uXSksXG4gICAgICBfYnV0dG9uc1JlbmRlcjIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX2J1dHRvbnNSZW5kZXIsIDIpLFxuICAgICAgbGVmdEJ1dHRvblRvUmVuZGVyID0gX2J1dHRvbnNSZW5kZXIyWzBdLFxuICAgICAgcmlnaHRCdXR0b25Ub1JlbmRlciA9IF9idXR0b25zUmVuZGVyMlsxXTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uR3JvdXAsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgcmVzdFByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShwcmVmaXhDbHMsIGNsYXNzTmFtZSlcbiAgfSksIGxlZnRCdXR0b25Ub1JlbmRlciwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2Ryb3Bkb3duW1wiZGVmYXVsdFwiXSwgZHJvcGRvd25Qcm9wcywgcmlnaHRCdXR0b25Ub1JlbmRlcikpO1xufTtcblxuRHJvcGRvd25CdXR0b24uX19BTlRfQlVUVE9OID0gdHJ1ZTtcbkRyb3Bkb3duQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgdHlwZTogJ2RlZmF1bHQnLFxuICBidXR0b25zUmVuZGVyOiBmdW5jdGlvbiBidXR0b25zUmVuZGVyKGJ1dHRvbnMpIHtcbiAgICByZXR1cm4gYnV0dG9ucztcbiAgfVxufTtcbnZhciBfZGVmYXVsdCA9IERyb3Bkb3duQnV0dG9uO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmNEcm9wZG93biA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLWRyb3Bkb3duXCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfUmlnaHRPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL1JpZ2h0T3V0bGluZWRcIikpO1xuXG52YXIgX2Ryb3Bkb3duQnV0dG9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9kcm9wZG93bi1idXR0b25cIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9kZXZXYXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvZGV2V2FybmluZ1wiKSk7XG5cbnZhciBfdHlwZSA9IHJlcXVpcmUoXCIuLi9fdXRpbC90eXBlXCIpO1xuXG52YXIgX3JlYWN0Tm9kZSA9IHJlcXVpcmUoXCIuLi9fdXRpbC9yZWFjdE5vZGVcIik7XG5cbnZhciBQbGFjZW1lbnRzID0gKDAsIF90eXBlLnR1cGxlKSgndG9wTGVmdCcsICd0b3BDZW50ZXInLCAndG9wUmlnaHQnLCAnYm90dG9tTGVmdCcsICdib3R0b21DZW50ZXInLCAnYm90dG9tUmlnaHQnKTtcblxudmFyIERyb3Bkb3duID0gZnVuY3Rpb24gRHJvcGRvd24ocHJvcHMpIHtcbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRDb250ZXh0UG9wdXBDb250YWluZXIgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICB2YXIgZ2V0VHJhbnNpdGlvbk5hbWUgPSBmdW5jdGlvbiBnZXRUcmFuc2l0aW9uTmFtZSgpIHtcbiAgICB2YXIgX3Byb3BzJHBsYWNlbWVudCA9IHByb3BzLnBsYWNlbWVudCxcbiAgICAgICAgcGxhY2VtZW50ID0gX3Byb3BzJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gJycgOiBfcHJvcHMkcGxhY2VtZW50LFxuICAgICAgICB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnRyYW5zaXRpb25OYW1lO1xuXG4gICAgaWYgKHRyYW5zaXRpb25OYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cmFuc2l0aW9uTmFtZTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50LmluZGV4T2YoJ3RvcCcpID49IDApIHtcbiAgICAgIHJldHVybiAnc2xpZGUtZG93bic7XG4gICAgfVxuXG4gICAgcmV0dXJuICdzbGlkZS11cCc7XG4gIH07XG5cbiAgdmFyIHJlbmRlck92ZXJsYXkgPSBmdW5jdGlvbiByZW5kZXJPdmVybGF5KHByZWZpeENscykge1xuICAgIC8vIHJjLWRyb3Bkb3duIGFscmVhZHkgY2FuIHByb2Nlc3MgdGhlIGZ1bmN0aW9uIG9mIG92ZXJsYXksIGJ1dCB3ZSBoYXZlIGNoZWNrIGxvZ2ljIGhlcmUuXG4gICAgLy8gU28gd2UgbmVlZCByZW5kZXIgdGhlIGVsZW1lbnQgdG8gY2hlY2sgYW5kIHBhc3MgYmFjayB0byByYy1kcm9wZG93bi5cbiAgICB2YXIgb3ZlcmxheSA9IHByb3BzLm92ZXJsYXk7XG4gICAgdmFyIG92ZXJsYXlOb2RlO1xuXG4gICAgaWYgKHR5cGVvZiBvdmVybGF5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvdmVybGF5Tm9kZSA9IG92ZXJsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3ZlcmxheU5vZGUgPSBvdmVybGF5O1xuICAgIH1cblxuICAgIG92ZXJsYXlOb2RlID0gUmVhY3QuQ2hpbGRyZW4ub25seSh0eXBlb2Ygb3ZlcmxheU5vZGUgPT09ICdzdHJpbmcnID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIFwib3ZlcmxheU5vZGVcIikgOiBvdmVybGF5Tm9kZSk7XG4gICAgdmFyIG92ZXJsYXlQcm9wcyA9IG92ZXJsYXlOb2RlLnByb3BzOyAvLyBXYXJuaW5nIGlmIHVzZSBvdGhlciBtb2RlXG5cbiAgICAoMCwgX2Rldldhcm5pbmdbXCJkZWZhdWx0XCJdKSghb3ZlcmxheVByb3BzLm1vZGUgfHwgb3ZlcmxheVByb3BzLm1vZGUgPT09ICd2ZXJ0aWNhbCcsICdEcm9wZG93bicsIFwibW9kZT1cXFwiXCIuY29uY2F0KG92ZXJsYXlQcm9wcy5tb2RlLCBcIlxcXCIgaXMgbm90IHN1cHBvcnRlZCBmb3IgRHJvcGRvd24ncyBNZW51LlwiKSk7IC8vIG1lbnUgY2Fubm90IGJlIHNlbGVjdGFibGUgaW4gZHJvcGRvd24gZGVmYXVsdGx5XG4gICAgLy8gbWVudSBzaG91bGQgYmUgZm9jdXNhYmxlIGluIGRyb3Bkb3duIGRlZmF1bHRseVxuXG4gICAgdmFyIF9vdmVybGF5UHJvcHMkc2VsZWN0YSA9IG92ZXJsYXlQcm9wcy5zZWxlY3RhYmxlLFxuICAgICAgICBzZWxlY3RhYmxlID0gX292ZXJsYXlQcm9wcyRzZWxlY3RhID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vdmVybGF5UHJvcHMkc2VsZWN0YSxcbiAgICAgICAgX292ZXJsYXlQcm9wcyRmb2N1c2FiID0gb3ZlcmxheVByb3BzLmZvY3VzYWJsZSxcbiAgICAgICAgZm9jdXNhYmxlID0gX292ZXJsYXlQcm9wcyRmb2N1c2FiID09PSB2b2lkIDAgPyB0cnVlIDogX292ZXJsYXlQcm9wcyRmb2N1c2FiO1xuICAgIHZhciBleHBhbmRJY29uID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1tZW51LXN1Ym1lbnUtYXJyb3dcIilcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfUmlnaHRPdXRsaW5lZFtcImRlZmF1bHRcIl0sIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1tZW51LXN1Ym1lbnUtYXJyb3ctaWNvblwiKVxuICAgIH0pKTtcbiAgICB2YXIgZml4ZWRNb2RlT3ZlcmxheSA9IHR5cGVvZiBvdmVybGF5Tm9kZS50eXBlID09PSAnc3RyaW5nJyA/IG92ZXJsYXlOb2RlIDogKDAsIF9yZWFjdE5vZGUuY2xvbmVFbGVtZW50KShvdmVybGF5Tm9kZSwge1xuICAgICAgbW9kZTogJ3ZlcnRpY2FsJyxcbiAgICAgIHNlbGVjdGFibGU6IHNlbGVjdGFibGUsXG4gICAgICBmb2N1c2FibGU6IGZvY3VzYWJsZSxcbiAgICAgIGV4cGFuZEljb246IGV4cGFuZEljb25cbiAgICB9KTtcbiAgICByZXR1cm4gZml4ZWRNb2RlT3ZlcmxheTtcbiAgfTtcblxuICB2YXIgZ2V0UGxhY2VtZW50ID0gZnVuY3Rpb24gZ2V0UGxhY2VtZW50KCkge1xuICAgIHZhciBwbGFjZW1lbnQgPSBwcm9wcy5wbGFjZW1lbnQ7XG5cbiAgICBpZiAocGxhY2VtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBwbGFjZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAnYm90dG9tUmlnaHQnIDogJ2JvdHRvbUxlZnQnO1xuICB9O1xuXG4gIHZhciBhcnJvdyA9IHByb3BzLmFycm93LFxuICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIHRyaWdnZXIgPSBwcm9wcy50cmlnZ2VyLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGdldFBvcHVwQ29udGFpbmVyID0gcHJvcHMuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBvdmVybGF5Q2xhc3NOYW1lID0gcHJvcHMub3ZlcmxheUNsYXNzTmFtZTtcbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnZHJvcGRvd24nLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICB2YXIgY2hpbGQgPSBSZWFjdC5DaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgdmFyIGRyb3Bkb3duVHJpZ2dlciA9ICgwLCBfcmVhY3ROb2RlLmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGNoaWxkLnByb3BzLmNsYXNzTmFtZSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10cmlnZ2VyXCIpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKHt9LCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJykpLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZFxuICB9KTtcbiAgdmFyIG92ZXJsYXlDbGFzc05hbWVDdXN0b21pemVkID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkob3ZlcmxheUNsYXNzTmFtZSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpKTtcbiAgdmFyIHRyaWdnZXJBY3Rpb25zID0gZGlzYWJsZWQgPyBbXSA6IHRyaWdnZXI7XG4gIHZhciBhbGlnblBvaW50O1xuXG4gIGlmICh0cmlnZ2VyQWN0aW9ucyAmJiB0cmlnZ2VyQWN0aW9ucy5pbmRleE9mKCdjb250ZXh0TWVudScpICE9PSAtMSkge1xuICAgIGFsaWduUG9pbnQgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY0Ryb3Bkb3duW1wiZGVmYXVsdFwiXSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICBhcnJvdzogYXJyb3csXG4gICAgYWxpZ25Qb2ludDogYWxpZ25Qb2ludFxuICB9LCBwcm9wcywge1xuICAgIG92ZXJsYXlDbGFzc05hbWU6IG92ZXJsYXlDbGFzc05hbWVDdXN0b21pemVkLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lciB8fCBnZXRDb250ZXh0UG9wdXBDb250YWluZXIsXG4gICAgdHJhbnNpdGlvbk5hbWU6IGdldFRyYW5zaXRpb25OYW1lKCksXG4gICAgdHJpZ2dlcjogdHJpZ2dlckFjdGlvbnMsXG4gICAgb3ZlcmxheTogZnVuY3Rpb24gb3ZlcmxheSgpIHtcbiAgICAgIHJldHVybiByZW5kZXJPdmVybGF5KHByZWZpeENscyk7XG4gICAgfSxcbiAgICBwbGFjZW1lbnQ6IGdldFBsYWNlbWVudCgpXG4gIH0pLCBkcm9wZG93blRyaWdnZXIpO1xufTtcblxuRHJvcGRvd24uQnV0dG9uID0gX2Ryb3Bkb3duQnV0dG9uW1wiZGVmYXVsdFwiXTtcbkRyb3Bkb3duLmRlZmF1bHRQcm9wcyA9IHtcbiAgbW91c2VFbnRlckRlbGF5OiAwLjE1LFxuICBtb3VzZUxlYXZlRGVsYXk6IDAuMVxufTtcbnZhciBfZGVmYXVsdCA9IERyb3Bkb3duO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9kcm9wZG93biA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZHJvcGRvd25cIikpO1xuXG52YXIgX2RlZmF1bHQgPSBfZHJvcGRvd25bXCJkZWZhdWx0XCJdO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIEVtcHR5ID0gZnVuY3Rpb24gRW1wdHkoKSB7XG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0UHJlZml4Q2xzID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UHJlZml4Q2xzO1xuXG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2VtcHR5LWltZy1kZWZhdWx0Jyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCB7XG4gICAgY2xhc3NOYW1lOiBwcmVmaXhDbHMsXG4gICAgd2lkdGg6IFwiMTg0XCIsXG4gICAgaGVpZ2h0OiBcIjE1MlwiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDE4NCAxNTJcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgyNCAzMS42NylcIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImVsbGlwc2VcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1lbGxpcHNlXCIpLFxuICAgIGN4OiBcIjY3Ljc5N1wiLFxuICAgIGN5OiBcIjEwNi44OVwiLFxuICAgIHJ4OiBcIjY3Ljc5N1wiLFxuICAgIHJ5OiBcIjEyLjY2OFwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYXRoLTFcIiksXG4gICAgZDogXCJNMTIyLjAzNCA2OS42NzRMOTguMTA5IDQwLjIyOWMtMS4xNDgtMS4zODYtMi44MjYtMi4yMjUtNC41OTMtMi4yMjVoLTUxLjQ0Yy0xLjc2NiAwLTMuNDQ0LjgzOS00LjU5MiAyLjIyNUwxMy41NiA2OS42NzR2MTUuMzgzaDEwOC40NzVWNjkuNjc0elwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1wYXRoLTJcIiksXG4gICAgZDogXCJNMTAxLjUzNyA4Ni4yMTRMODAuNjMgNjEuMTAyYy0xLjAwMS0xLjIwNy0yLjUwNy0xLjg2Ny00LjA0OC0xLjg2N0gzMS43MjRjLTEuNTQgMC0zLjA0Ny42Ni00LjA0OCAxLjg2N0w2Ljc2OSA4Ni4yMTR2MTMuNzkyaDk0Ljc2OFY4Ni4yMTR6XCIsXG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgxMy41NilcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGF0aC0zXCIpLFxuICAgIGQ6IFwiTTMzLjgzIDBoNjcuOTMzYTQgNCAwIDAgMSA0IDR2OTMuMzQ0YTQgNCAwIDAgMS00IDRIMzMuODNhNCA0IDAgMCAxLTQtNFY0YTQgNCAwIDAgMSA0LTR6XCJcbiAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhdGgtNFwiKSxcbiAgICBkOiBcIk00Mi42NzggOS45NTNoNTAuMjM3YTIgMiAwIDAgMSAyIDJWMzYuOTFhMiAyIDAgMCAxLTIgMkg0Mi42NzhhMiAyIDAgMCAxLTItMlYxMS45NTNhMiAyIDAgMCAxIDItMnpNNDIuOTQgNDkuNzY3aDQ5LjcxM2EyLjI2MiAyLjI2MiAwIDEgMSAwIDQuNTI0SDQyLjk0YTIuMjYyIDIuMjYyIDAgMCAxIDAtNC41MjR6TTQyLjk0IDYxLjUzaDQ5LjcxM2EyLjI2MiAyLjI2MiAwIDEgMSAwIDQuNTI1SDQyLjk0YTIuMjYyIDIuMjYyIDAgMCAxIDAtNC41MjV6TTEyMS44MTMgMTA1LjAzMmMtLjc3NSAzLjA3MS0zLjQ5NyA1LjM2LTYuNzM1IDUuMzZIMjAuNTE1Yy0zLjIzOCAwLTUuOTYtMi4yOS02LjczNC01LjM2YTcuMzA5IDcuMzA5IDAgMCAxLS4yMjItMS43OVY2OS42NzVoMjYuMzE4YzIuOTA3IDAgNS4yNSAyLjQ0OCA1LjI1IDUuNDJ2LjA0YzAgMi45NzEgMi4zNyA1LjM3IDUuMjc3IDUuMzdoMzQuNzg1YzIuOTA3IDAgNS4yNzctMi40MjEgNS4yNzctNS4zOTNWNzUuMWMwLTIuOTcyIDIuMzQzLTUuNDI2IDUuMjUtNS40MjZoMjYuMzE4djMzLjU2OWMwIC42MTctLjA3NyAxLjIxNi0uMjIxIDEuNzg5elwiXG4gIH0pKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcGF0aC01XCIpLFxuICAgIGQ6IFwiTTE0OS4xMjEgMzMuMjkybC02LjgzIDIuNjVhMSAxIDAgMCAxLTEuMzE3LTEuMjNsMS45MzctNi4yMDdjLTIuNTg5LTIuOTQ0LTQuMTA5LTYuNTM0LTQuMTA5LTEwLjQwOEMxMzguODAyIDguMTAyIDE0OC45MiAwIDE2MS40MDIgMCAxNzMuODgxIDAgMTg0IDguMTAyIDE4NCAxOC4wOTdjMCA5Ljk5NS0xMC4xMTggMTguMDk3LTIyLjU5OSAxOC4wOTctNC41MjggMC04Ljc0NC0xLjA2Ni0xMi4yOC0yLjkwMnpcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJnXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZ1wiKSxcbiAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKDE0OS42NSAxNS4zODMpXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJlbGxpcHNlXCIsIHtcbiAgICBjeDogXCIyMC42NTRcIixcbiAgICBjeTogXCIzLjE2N1wiLFxuICAgIHJ4OiBcIjIuODQ5XCIsXG4gICAgcnk6IFwiMi44MTVcIlxuICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk01LjY5OCA1LjYzSDBMMi44OTguNzA0ek05LjI1OS43MDRoNC45ODVWNS42M0g5LjI1OXpcIlxuICB9KSkpKTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IEVtcHR5O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9Mb2NhbGVSZWNlaXZlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlclwiKSk7XG5cbnZhciBfZW1wdHkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2VtcHR5XCIpKTtcblxudmFyIF9zaW1wbGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NpbXBsZVwiKSk7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgZGVmYXVsdEVtcHR5SW1nID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2VtcHR5W1wiZGVmYXVsdFwiXSwgbnVsbCk7XG52YXIgc2ltcGxlRW1wdHlJbWcgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfc2ltcGxlW1wiZGVmYXVsdFwiXSwgbnVsbCk7XG5cbnZhciBFbXB0eSA9IGZ1bmN0aW9uIEVtcHR5KHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzLFxuICAgICAgICBkaXJlY3Rpb24gPSBfcmVmLmRpcmVjdGlvbjtcblxuICAgIHZhciBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgX3Byb3BzJGltYWdlID0gcHJvcHMuaW1hZ2UsXG4gICAgICAgIGltYWdlID0gX3Byb3BzJGltYWdlID09PSB2b2lkIDAgPyBkZWZhdWx0RW1wdHlJbWcgOiBfcHJvcHMkaW1hZ2UsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIGltYWdlU3R5bGUgPSBwcm9wcy5pbWFnZVN0eWxlLFxuICAgICAgICByZXN0UHJvcHMgPSBfX3Jlc3QocHJvcHMsIFtcImNsYXNzTmFtZVwiLCBcInByZWZpeENsc1wiLCBcImltYWdlXCIsIFwiZGVzY3JpcHRpb25cIiwgXCJjaGlsZHJlblwiLCBcImltYWdlU3R5bGVcIl0pO1xuXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9Mb2NhbGVSZWNlaXZlcltcImRlZmF1bHRcIl0sIHtcbiAgICAgIGNvbXBvbmVudE5hbWU6IFwiRW1wdHlcIlxuICAgIH0sIGZ1bmN0aW9uIChsb2NhbGUpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnZW1wdHknLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgdmFyIGRlcyA9IHR5cGVvZiBkZXNjcmlwdGlvbiAhPT0gJ3VuZGVmaW5lZCcgPyBkZXNjcmlwdGlvbiA6IGxvY2FsZS5kZXNjcmlwdGlvbjtcbiAgICAgIHZhciBhbHQgPSB0eXBlb2YgZGVzID09PSAnc3RyaW5nJyA/IGRlcyA6ICdlbXB0eSc7XG4gICAgICB2YXIgaW1hZ2VOb2RlID0gbnVsbDtcblxuICAgICAgaWYgKHR5cGVvZiBpbWFnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaW1hZ2VOb2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICAgIGFsdDogYWx0LFxuICAgICAgICAgIHNyYzogaW1hZ2VcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbWFnZU5vZGUgPSBpbWFnZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ub3JtYWxcIiksIGltYWdlID09PSBzaW1wbGVFbXB0eUltZyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItcnRsXCIpLCBkaXJlY3Rpb24gPT09ICdydGwnKSwgX2NsYXNzTmFtZXMpLCBjbGFzc05hbWUpXG4gICAgICB9LCByZXN0UHJvcHMpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pbWFnZVwiKSxcbiAgICAgICAgc3R5bGU6IGltYWdlU3R5bGVcbiAgICAgIH0sIGltYWdlTm9kZSksIGRlcyAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBcIiwge1xuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGVzY3JpcHRpb25cIilcbiAgICAgIH0sIGRlcyksIGNoaWxkcmVuICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWZvb3RlclwiKVxuICAgICAgfSwgY2hpbGRyZW4pKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5FbXB0eS5QUkVTRU5URURfSU1BR0VfREVGQVVMVCA9IGRlZmF1bHRFbXB0eUltZztcbkVtcHR5LlBSRVNFTlRFRF9JTUFHRV9TSU1QTEUgPSBzaW1wbGVFbXB0eUltZztcbnZhciBfZGVmYXVsdCA9IEVtcHR5O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIFNpbXBsZSA9IGZ1bmN0aW9uIFNpbXBsZSgpIHtcbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHM7XG5cbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnZW1wdHktaW1nLXNpbXBsZScpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgIGNsYXNzTmFtZTogcHJlZml4Q2xzLFxuICAgIHdpZHRoOiBcIjY0XCIsXG4gICAgaGVpZ2h0OiBcIjQxXCIsXG4gICAgdmlld0JveDogXCIwIDAgNjQgNDFcIixcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZ1wiLCB7XG4gICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZSgwIDEpXCIsXG4gICAgZmlsbDogXCJub25lXCIsXG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZWxsaXBzZVwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWVsbGlwc2VcIiksXG4gICAgY3g6IFwiMzJcIixcbiAgICBjeTogXCIzM1wiLFxuICAgIHJ4OiBcIjMyXCIsXG4gICAgcnk6IFwiN1wiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImdcIiwge1xuICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1nXCIpLFxuICAgIGZpbGxSdWxlOiBcIm5vbnplcm9cIlxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTU1IDEyLjc2TDQ0Ljg1NCAxLjI1OEM0NC4zNjcuNDc0IDQzLjY1NiAwIDQyLjkwNyAwSDIxLjA5M2MtLjc0OSAwLTEuNDYuNDc0LTEuOTQ3IDEuMjU3TDkgMTIuNzYxVjIyaDQ2di05LjI0elwiXG4gIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTQxLjYxMyAxNS45MzFjMC0xLjYwNS45OTQtMi45MyAyLjIyNy0yLjkzMUg1NXYxOC4xMzdDNTUgMzMuMjYgNTMuNjggMzUgNTIuMDUgMzVoLTQwLjFDMTAuMzIgMzUgOSAzMy4yNTkgOSAzMS4xMzdWMTNoMTEuMTZjMS4yMzMgMCAyLjIyNyAxLjMyMyAyLjIyNyAyLjkyOHYuMDIyYzAgMS42MDUgMS4wMDUgMi45MDEgMi4yMzcgMi45MDFoMTQuNzUyYzEuMjMyIDAgMi4yMzctMS4zMDggMi4yMzctMi45MTN2LS4wMDd6XCIsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXBhdGhcIilcbiAgfSkpKSk7XG59O1xuXG52YXIgX2RlZmF1bHQgPSBTaW1wbGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXhwb3J0cy5TaWRlckNvbnRleHQgPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIikpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIikpO1xuXG52YXIgX2luaGVyaXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIikpO1xuXG52YXIgX2NyZWF0ZVN1cGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlU3VwZXJcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9vbWl0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwib21pdC5qc1wiKSk7XG5cbnZhciBfQmFyc091dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQmFyc091dGxpbmVkXCIpKTtcblxudmFyIF9SaWdodE91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvUmlnaHRPdXRsaW5lZFwiKSk7XG5cbnZhciBfTGVmdE91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvTGVmdE91dGxpbmVkXCIpKTtcblxudmFyIF9sYXlvdXQgPSByZXF1aXJlKFwiLi9sYXlvdXRcIik7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX2lzTnVtZXJpYyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL2lzTnVtZXJpY1wiKSk7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgZGltZW5zaW9uTWF4TWFwID0ge1xuICB4czogJzQ3OS45OHB4JyxcbiAgc206ICc1NzUuOThweCcsXG4gIG1kOiAnNzY3Ljk4cHgnLFxuICBsZzogJzk5MS45OHB4JyxcbiAgeGw6ICcxMTk5Ljk4cHgnLFxuICB4eGw6ICcxNTk5Ljk4cHgnXG59O1xudmFyIFNpZGVyQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcbmV4cG9ydHMuU2lkZXJDb250ZXh0ID0gU2lkZXJDb250ZXh0O1xuXG52YXIgZ2VuZXJhdGVJZCA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGkgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcmVmaXggPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICcnO1xuICAgIGkgKz0gMTtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQocHJlZml4KS5jb25jYXQoaSk7XG4gIH07XG59KCk7XG5cbnZhciBJbnRlcm5hbFNpZGVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMyW1wiZGVmYXVsdFwiXSkoSW50ZXJuYWxTaWRlciwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9ICgwLCBfY3JlYXRlU3VwZXIyW1wiZGVmYXVsdFwiXSkoSW50ZXJuYWxTaWRlcik7XG5cbiAgZnVuY3Rpb24gSW50ZXJuYWxTaWRlcihwcm9wcykge1xuICAgIHZhciBfdGhpcztcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgSW50ZXJuYWxTaWRlcik7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG5cbiAgICBfdGhpcy5yZXNwb25zaXZlSGFuZGxlciA9IGZ1bmN0aW9uIChtcWwpIHtcbiAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgYmVsb3c6IG1xbC5tYXRjaGVzXG4gICAgICB9KTtcblxuICAgICAgdmFyIG9uQnJlYWtwb2ludCA9IF90aGlzLnByb3BzLm9uQnJlYWtwb2ludDtcblxuICAgICAgaWYgKG9uQnJlYWtwb2ludCkge1xuICAgICAgICBvbkJyZWFrcG9pbnQobXFsLm1hdGNoZXMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMuc3RhdGUuY29sbGFwc2VkICE9PSBtcWwubWF0Y2hlcykge1xuICAgICAgICBfdGhpcy5zZXRDb2xsYXBzZWQobXFsLm1hdGNoZXMsICdyZXNwb25zaXZlJyk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnNldENvbGxhcHNlZCA9IGZ1bmN0aW9uIChjb2xsYXBzZWQsIHR5cGUpIHtcbiAgICAgIGlmICghKCdjb2xsYXBzZWQnIGluIF90aGlzLnByb3BzKSkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY29sbGFwc2VkOiBjb2xsYXBzZWRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBvbkNvbGxhcHNlID0gX3RoaXMucHJvcHMub25Db2xsYXBzZTtcblxuICAgICAgaWYgKG9uQ29sbGFwc2UpIHtcbiAgICAgICAgb25Db2xsYXBzZShjb2xsYXBzZWQsIHR5cGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy50b2dnbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY29sbGFwc2VkID0gIV90aGlzLnN0YXRlLmNvbGxhcHNlZDtcblxuICAgICAgX3RoaXMuc2V0Q29sbGFwc2VkKGNvbGxhcHNlZCwgJ2NsaWNrVHJpZ2dlcicpO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZW5kZXJTaWRlciA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgICAgIHZhciBnZXRQcmVmaXhDbHMgPSBfcmVmLmdldFByZWZpeENscztcblxuICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gX2EucHJlZml4Q2xzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSxcbiAgICAgICAgICB0aGVtZSA9IF9hLnRoZW1lLFxuICAgICAgICAgIGNvbGxhcHNpYmxlID0gX2EuY29sbGFwc2libGUsXG4gICAgICAgICAgcmV2ZXJzZUFycm93ID0gX2EucmV2ZXJzZUFycm93LFxuICAgICAgICAgIHRyaWdnZXIgPSBfYS50cmlnZ2VyLFxuICAgICAgICAgIHN0eWxlID0gX2Euc3R5bGUsXG4gICAgICAgICAgd2lkdGggPSBfYS53aWR0aCxcbiAgICAgICAgICBjb2xsYXBzZWRXaWR0aCA9IF9hLmNvbGxhcHNlZFdpZHRoLFxuICAgICAgICAgIHplcm9XaWR0aFRyaWdnZXJTdHlsZSA9IF9hLnplcm9XaWR0aFRyaWdnZXJTdHlsZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLFxuICAgICAgICAgIG90aGVycyA9IF9fcmVzdChfYSwgW1wicHJlZml4Q2xzXCIsIFwiY2xhc3NOYW1lXCIsIFwidGhlbWVcIiwgXCJjb2xsYXBzaWJsZVwiLCBcInJldmVyc2VBcnJvd1wiLCBcInRyaWdnZXJcIiwgXCJzdHlsZVwiLCBcIndpZHRoXCIsIFwiY29sbGFwc2VkV2lkdGhcIiwgXCJ6ZXJvV2lkdGhUcmlnZ2VyU3R5bGVcIiwgXCJjaGlsZHJlblwiXSk7XG5cbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IF90aGlzLnN0YXRlLFxuICAgICAgICAgIGNvbGxhcHNlZCA9IF90aGlzJHN0YXRlLmNvbGxhcHNlZCxcbiAgICAgICAgICBiZWxvdyA9IF90aGlzJHN0YXRlLmJlbG93O1xuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnbGF5b3V0LXNpZGVyJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgICAgIHZhciBkaXZQcm9wcyA9ICgwLCBfb21pdFtcImRlZmF1bHRcIl0pKG90aGVycywgWydjb2xsYXBzZWQnLCAnZGVmYXVsdENvbGxhcHNlZCcsICdvbkNvbGxhcHNlJywgJ2JyZWFrcG9pbnQnLCAnb25CcmVha3BvaW50JywgJ3NpZGVySG9vaycsICd6ZXJvV2lkdGhUcmlnZ2VyU3R5bGUnXSk7XG4gICAgICB2YXIgcmF3V2lkdGggPSBjb2xsYXBzZWQgPyBjb2xsYXBzZWRXaWR0aCA6IHdpZHRoOyAvLyB1c2UgXCJweFwiIGFzIGZhbGxiYWNrIHVuaXQgZm9yIHdpZHRoXG5cbiAgICAgIHZhciBzaWRlcldpZHRoID0gKDAsIF9pc051bWVyaWNbXCJkZWZhdWx0XCJdKShyYXdXaWR0aCkgPyBcIlwiLmNvbmNhdChyYXdXaWR0aCwgXCJweFwiKSA6IFN0cmluZyhyYXdXaWR0aCk7IC8vIHNwZWNpYWwgdHJpZ2dlciB3aGVuIGNvbGxhcHNlZFdpZHRoID09IDBcblxuICAgICAgdmFyIHplcm9XaWR0aFRyaWdnZXIgPSBwYXJzZUZsb2F0KFN0cmluZyhjb2xsYXBzZWRXaWR0aCB8fCAwKSkgPT09IDAgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBvbkNsaWNrOiBfdGhpcy50b2dnbGUsXG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi16ZXJvLXdpZHRoLXRyaWdnZXJcIiksIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItemVyby13aWR0aC10cmlnZ2VyLVwiKS5jb25jYXQocmV2ZXJzZUFycm93ID8gJ3JpZ2h0JyA6ICdsZWZ0JykpLFxuICAgICAgICBzdHlsZTogemVyb1dpZHRoVHJpZ2dlclN0eWxlXG4gICAgICB9LCB0cmlnZ2VyIHx8IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9CYXJzT3V0bGluZWRbXCJkZWZhdWx0XCJdLCBudWxsKSkgOiBudWxsO1xuICAgICAgdmFyIGljb25PYmogPSB7XG4gICAgICAgIGV4cGFuZGVkOiByZXZlcnNlQXJyb3cgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfUmlnaHRPdXRsaW5lZFtcImRlZmF1bHRcIl0sIG51bGwpIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0xlZnRPdXRsaW5lZFtcImRlZmF1bHRcIl0sIG51bGwpLFxuICAgICAgICBjb2xsYXBzZWQ6IHJldmVyc2VBcnJvdyA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9MZWZ0T3V0bGluZWRbXCJkZWZhdWx0XCJdLCBudWxsKSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9SaWdodE91dGxpbmVkW1wiZGVmYXVsdFwiXSwgbnVsbClcbiAgICAgIH07XG4gICAgICB2YXIgc3RhdHVzID0gY29sbGFwc2VkID8gJ2NvbGxhcHNlZCcgOiAnZXhwYW5kZWQnO1xuICAgICAgdmFyIGRlZmF1bHRUcmlnZ2VyID0gaWNvbk9ialtzdGF0dXNdO1xuICAgICAgdmFyIHRyaWdnZXJEb20gPSB0cmlnZ2VyICE9PSBudWxsID8gemVyb1dpZHRoVHJpZ2dlciB8fCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10cmlnZ2VyXCIpLFxuICAgICAgICBvbkNsaWNrOiBfdGhpcy50b2dnbGUsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgd2lkdGg6IHNpZGVyV2lkdGhcbiAgICAgICAgfVxuICAgICAgfSwgdHJpZ2dlciB8fCBkZWZhdWx0VHJpZ2dlcikgOiBudWxsO1xuICAgICAgdmFyIGRpdlN0eWxlID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgc3R5bGUpLCB7XG4gICAgICAgIGZsZXg6IFwiMCAwIFwiLmNvbmNhdChzaWRlcldpZHRoKSxcbiAgICAgICAgbWF4V2lkdGg6IHNpZGVyV2lkdGgsXG4gICAgICAgIG1pbldpZHRoOiBzaWRlcldpZHRoLFxuICAgICAgICB3aWR0aDogc2lkZXJXaWR0aFxuICAgICAgfSk7XG4gICAgICB2YXIgc2lkZXJDbHMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShjbGFzc05hbWUsIHByZWZpeENscywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHRoZW1lKSwgKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY29sbGFwc2VkXCIpLCAhIWNvbGxhcHNlZCksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaGFzLXRyaWdnZXJcIiksIGNvbGxhcHNpYmxlICYmIHRyaWdnZXIgIT09IG51bGwgJiYgIXplcm9XaWR0aFRyaWdnZXIpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWJlbG93XCIpLCAhIWJlbG93KSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi16ZXJvLXdpZHRoXCIpLCBwYXJzZUZsb2F0KHNpZGVyV2lkdGgpID09PSAwKSwgX2NsYXNzTmFtZXMpKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImFzaWRlXCIsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgICAgIGNsYXNzTmFtZTogc2lkZXJDbHNcbiAgICAgIH0sIGRpdlByb3BzLCB7XG4gICAgICAgIHN0eWxlOiBkaXZTdHlsZVxuICAgICAgfSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNoaWxkcmVuXCIpXG4gICAgICB9LCBjaGlsZHJlbiksIGNvbGxhcHNpYmxlIHx8IGJlbG93ICYmIHplcm9XaWR0aFRyaWdnZXIgPyB0cmlnZ2VyRG9tIDogbnVsbCk7XG4gICAgfTtcblxuICAgIF90aGlzLnVuaXF1ZUlkID0gZ2VuZXJhdGVJZCgnYW50LXNpZGVyLScpO1xuICAgIHZhciBtYXRjaE1lZGlhO1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBtYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWE7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoTWVkaWEgJiYgcHJvcHMuYnJlYWtwb2ludCAmJiBwcm9wcy5icmVha3BvaW50IGluIGRpbWVuc2lvbk1heE1hcCkge1xuICAgICAgX3RoaXMubXFsID0gbWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IFwiLmNvbmNhdChkaW1lbnNpb25NYXhNYXBbcHJvcHMuYnJlYWtwb2ludF0sIFwiKVwiKSk7XG4gICAgfVxuXG4gICAgdmFyIGNvbGxhcHNlZDtcblxuICAgIGlmICgnY29sbGFwc2VkJyBpbiBwcm9wcykge1xuICAgICAgY29sbGFwc2VkID0gcHJvcHMuY29sbGFwc2VkO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb2xsYXBzZWQgPSBwcm9wcy5kZWZhdWx0Q29sbGFwc2VkO1xuICAgIH1cblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgY29sbGFwc2VkOiBjb2xsYXBzZWQsXG4gICAgICBiZWxvdzogZmFsc2VcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MyW1wiZGVmYXVsdFwiXSkoSW50ZXJuYWxTaWRlciwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5tcWwpIHtcbiAgICAgICAgdGhpcy5tcWwuYWRkTGlzdGVuZXIodGhpcy5yZXNwb25zaXZlSGFuZGxlcik7XG4gICAgICAgIHRoaXMucmVzcG9uc2l2ZUhhbmRsZXIodGhpcy5tcWwpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5zaWRlckhvb2spIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zaWRlckhvb2suYWRkU2lkZXIodGhpcy51bmlxdWVJZCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgaWYgKHRoaXMubXFsKSB7XG4gICAgICAgIHRoaXMubXFsLnJlbW92ZUxpc3RlbmVyKHRoaXMucmVzcG9uc2l2ZUhhbmRsZXIpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5zaWRlckhvb2spIHtcbiAgICAgICAgdGhpcy5wcm9wcy5zaWRlckhvb2sucmVtb3ZlU2lkZXIodGhpcy51bmlxdWVJZCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgY29sbGFwc2VkID0gdGhpcy5zdGF0ZS5jb2xsYXBzZWQ7XG4gICAgICB2YXIgY29sbGFwc2VkV2lkdGggPSB0aGlzLnByb3BzLmNvbGxhcHNlZFdpZHRoO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNpZGVyQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIHNpZGVyQ29sbGFwc2VkOiBjb2xsYXBzZWQsXG4gICAgICAgICAgY29sbGFwc2VkV2lkdGg6IGNvbGxhcHNlZFdpZHRoXG4gICAgICAgIH1cbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwgbnVsbCwgdGhpcy5yZW5kZXJTaWRlcikpO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiBcImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAoJ2NvbGxhcHNlZCcgaW4gbmV4dFByb3BzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgY29sbGFwc2VkOiBuZXh0UHJvcHMuY29sbGFwc2VkXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gSW50ZXJuYWxTaWRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuSW50ZXJuYWxTaWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbGxhcHNpYmxlOiBmYWxzZSxcbiAgZGVmYXVsdENvbGxhcHNlZDogZmFsc2UsXG4gIHJldmVyc2VBcnJvdzogZmFsc2UsXG4gIHdpZHRoOiAyMDAsXG4gIGNvbGxhcHNlZFdpZHRoOiA4MCxcbiAgc3R5bGU6IHt9LFxuICB0aGVtZTogJ2RhcmsnXG59OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJlZmVyLXN0YXRlbGVzcy1mdW5jdGlvblxuXG52YXIgU2lkZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQyKSB7XG4gICgwLCBfaW5oZXJpdHMyW1wiZGVmYXVsdFwiXSkoU2lkZXIsIF9SZWFjdCRDb21wb25lbnQyKTtcblxuICB2YXIgX3N1cGVyMiA9ICgwLCBfY3JlYXRlU3VwZXIyW1wiZGVmYXVsdFwiXSkoU2lkZXIpO1xuXG4gIGZ1bmN0aW9uIFNpZGVyKCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgU2lkZXIpO1xuICAgIHJldHVybiBfc3VwZXIyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMltcImRlZmF1bHRcIl0pKFNpZGVyLCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfbGF5b3V0LkxheW91dENvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJbnRlcm5hbFNpZGVyLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGNvbnRleHQsIF90aGlzMi5wcm9wcykpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTaWRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTaWRlcjsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4cG9ydHMuTGF5b3V0Q29udGV4dCA9IHZvaWQgMDtcblxudmFyIF90b0NvbnN1bWFibGVBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKSk7XG5cbnZhciBfaW5oZXJpdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKSk7XG5cbnZhciBfY3JlYXRlU3VwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVTdXBlclwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9fcmVzdCA9IHZvaWQgMCAmJiAodm9pZCAwKS5fX3Jlc3QgfHwgZnVuY3Rpb24gKHMsIGUpIHtcbiAgdmFyIHQgPSB7fTtcblxuICBmb3IgKHZhciBwIGluIHMpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApIHRbcF0gPSBzW3BdO1xuICB9XG5cbiAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKSB0W3BbaV1dID0gc1twW2ldXTtcbiAgfVxuICByZXR1cm4gdDtcbn07XG5cbnZhciBMYXlvdXRDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICBzaWRlckhvb2s6IHtcbiAgICBhZGRTaWRlcjogZnVuY3Rpb24gYWRkU2lkZXIoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICAgIHJlbW92ZVNpZGVyOiBmdW5jdGlvbiByZW1vdmVTaWRlcigpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufSk7XG5leHBvcnRzLkxheW91dENvbnRleHQgPSBMYXlvdXRDb250ZXh0O1xuXG5mdW5jdGlvbiBnZW5lcmF0b3IoX3JlZikge1xuICB2YXIgc3VmZml4Q2xzID0gX3JlZi5zdWZmaXhDbHMsXG4gICAgICB0YWdOYW1lID0gX3JlZi50YWdOYW1lLFxuICAgICAgZGlzcGxheU5hbWUgPSBfcmVmLmRpc3BsYXlOYW1lO1xuICByZXR1cm4gZnVuY3Rpb24gKEJhc2ljQ29tcG9uZW50KSB7XG4gICAgdmFyIF9hO1xuXG4gICAgcmV0dXJuIF9hID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgICAoMCwgX2luaGVyaXRzMltcImRlZmF1bHRcIl0pKEFkYXB0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgICB2YXIgX3N1cGVyID0gKDAsIF9jcmVhdGVTdXBlcjJbXCJkZWZhdWx0XCJdKShBZGFwdGVyKTtcblxuICAgICAgZnVuY3Rpb24gQWRhcHRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzO1xuXG4gICAgICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgQWRhcHRlcik7XG4gICAgICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgX3RoaXMucmVuZGVyQ29tcG9uZW50ID0gZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgdmFyIGdldFByZWZpeENscyA9IF9yZWYyLmdldFByZWZpeENscztcbiAgICAgICAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gX3RoaXMucHJvcHMucHJlZml4Q2xzO1xuICAgICAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoc3VmZml4Q2xzLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCYXNpY0NvbXBvbmVudCwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICAgICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICAgICAgdGFnTmFtZTogdGFnTmFtZVxuICAgICAgICAgIH0sIF90aGlzLnByb3BzKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICAoMCwgX2NyZWF0ZUNsYXNzMltcImRlZmF1bHRcIl0pKEFkYXB0ZXIsIFt7XG4gICAgICAgIGtleTogXCJyZW5kZXJcIixcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlckNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1dKTtcbiAgICAgIHJldHVybiBBZGFwdGVyO1xuICAgIH0oUmVhY3QuQ29tcG9uZW50KSwgX2EuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZSwgX2E7XG4gIH07XG59XG5cbnZhciBCYXNpYyA9IGZ1bmN0aW9uIEJhc2ljKHByb3BzKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgdGFnTmFtZSA9IHByb3BzLnRhZ05hbWUsXG4gICAgICBvdGhlcnMgPSBfX3Jlc3QocHJvcHMsIFtcInByZWZpeENsc1wiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwidGFnTmFtZVwiXSk7XG5cbiAgdmFyIGNsYXNzU3RyaW5nID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkocHJlZml4Q2xzLCBjbGFzc05hbWUpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICBjbGFzc05hbWU6IGNsYXNzU3RyaW5nXG4gIH0sIG90aGVycyksIGNoaWxkcmVuKTtcbn07XG5cbnZhciBCYXNpY0xheW91dCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudDIpIHtcbiAgKDAsIF9pbmhlcml0czJbXCJkZWZhdWx0XCJdKShCYXNpY0xheW91dCwgX1JlYWN0JENvbXBvbmVudDIpO1xuXG4gIHZhciBfc3VwZXIyID0gKDAsIF9jcmVhdGVTdXBlcjJbXCJkZWZhdWx0XCJdKShCYXNpY0xheW91dCk7XG5cbiAgZnVuY3Rpb24gQmFzaWNMYXlvdXQoKSB7XG4gICAgdmFyIF90aGlzMjtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgQmFzaWNMYXlvdXQpO1xuICAgIF90aGlzMiA9IF9zdXBlcjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBfdGhpczIuc3RhdGUgPSB7XG4gICAgICBzaWRlcnM6IFtdXG4gICAgfTtcblxuICAgIF90aGlzMi5yZW5kZXJDb21wb25lbnQgPSBmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgdmFyIGRpcmVjdGlvbiA9IF9yZWYzLmRpcmVjdGlvbjtcblxuICAgICAgdmFyIF9hID0gX3RoaXMyLnByb3BzLFxuICAgICAgICAgIHByZWZpeENscyA9IF9hLnByZWZpeENscyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbixcbiAgICAgICAgICBoYXNTaWRlciA9IF9hLmhhc1NpZGVyLFxuICAgICAgICAgIFRhZyA9IF9hLnRhZ05hbWUsXG4gICAgICAgICAgb3RoZXJzID0gX19yZXN0KF9hLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJjaGlsZHJlblwiLCBcImhhc1NpZGVyXCIsIFwidGFnTmFtZVwiXSk7XG5cbiAgICAgIHZhciBjbGFzc1N0cmluZyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHByZWZpeENscywgKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaGFzLXNpZGVyXCIpLCB0eXBlb2YgaGFzU2lkZXIgPT09ICdib29sZWFuJyA/IGhhc1NpZGVyIDogX3RoaXMyLnN0YXRlLnNpZGVycy5sZW5ndGggPiAwKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGF5b3V0Q29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIHNpZGVySG9vazogX3RoaXMyLmdldFNpZGVySG9vaygpXG4gICAgICAgIH1cbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRhZywgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc1N0cmluZ1xuICAgICAgfSwgb3RoZXJzKSwgY2hpbGRyZW4pKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MyW1wiZGVmYXVsdFwiXSkoQmFzaWNMYXlvdXQsIFt7XG4gICAga2V5OiBcImdldFNpZGVySG9va1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTaWRlckhvb2soKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWRkU2lkZXI6IGZ1bmN0aW9uIGFkZFNpZGVyKGlkKSB7XG4gICAgICAgICAgX3RoaXMzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgc2lkZXJzOiBbXS5jb25jYXQoKDAsIF90b0NvbnN1bWFibGVBcnJheTJbXCJkZWZhdWx0XCJdKShzdGF0ZS5zaWRlcnMpLCBbaWRdKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlU2lkZXI6IGZ1bmN0aW9uIHJlbW92ZVNpZGVyKGlkKSB7XG4gICAgICAgICAgX3RoaXMzLnNldFN0YXRlKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgc2lkZXJzOiBzdGF0ZS5zaWRlcnMuZmlsdGVyKGZ1bmN0aW9uIChjdXJyZW50SWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudElkICE9PSBpZDtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlckNvbXBvbmVudCk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBCYXNpY0xheW91dDtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxudmFyIExheW91dCA9IGdlbmVyYXRvcih7XG4gIHN1ZmZpeENsczogJ2xheW91dCcsXG4gIHRhZ05hbWU6ICdzZWN0aW9uJyxcbiAgZGlzcGxheU5hbWU6ICdMYXlvdXQnXG59KShCYXNpY0xheW91dCk7XG52YXIgSGVhZGVyID0gZ2VuZXJhdG9yKHtcbiAgc3VmZml4Q2xzOiAnbGF5b3V0LWhlYWRlcicsXG4gIHRhZ05hbWU6ICdoZWFkZXInLFxuICBkaXNwbGF5TmFtZTogJ0hlYWRlcidcbn0pKEJhc2ljKTtcbnZhciBGb290ZXIgPSBnZW5lcmF0b3Ioe1xuICBzdWZmaXhDbHM6ICdsYXlvdXQtZm9vdGVyJyxcbiAgdGFnTmFtZTogJ2Zvb3RlcicsXG4gIGRpc3BsYXlOYW1lOiAnRm9vdGVyJ1xufSkoQmFzaWMpO1xudmFyIENvbnRlbnQgPSBnZW5lcmF0b3Ioe1xuICBzdWZmaXhDbHM6ICdsYXlvdXQtY29udGVudCcsXG4gIHRhZ05hbWU6ICdtYWluJyxcbiAgZGlzcGxheU5hbWU6ICdDb250ZW50J1xufSkoQmFzaWMpO1xuTGF5b3V0LkhlYWRlciA9IEhlYWRlcjtcbkxheW91dC5Gb290ZXIgPSBGb290ZXI7XG5MYXlvdXQuQ29udGVudCA9IENvbnRlbnQ7XG52YXIgX2RlZmF1bHQgPSBMYXlvdXQ7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpKTtcblxudmFyIF9pbmhlcml0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpKTtcblxudmFyIF9jcmVhdGVTdXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZVN1cGVyXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9kZWZhdWx0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9kZWZhdWx0XCIpKTtcblxudmFyIF9jb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb250ZXh0XCIpKTtcblxudmFyIExvY2FsZVJlY2VpdmVyID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMyW1wiZGVmYXVsdFwiXSkoTG9jYWxlUmVjZWl2ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSAoMCwgX2NyZWF0ZVN1cGVyMltcImRlZmF1bHRcIl0pKExvY2FsZVJlY2VpdmVyKTtcblxuICBmdW5jdGlvbiBMb2NhbGVSZWNlaXZlcigpIHtcbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMltcImRlZmF1bHRcIl0pKHRoaXMsIExvY2FsZVJlY2VpdmVyKTtcbiAgICByZXR1cm4gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMltcImRlZmF1bHRcIl0pKExvY2FsZVJlY2VpdmVyLCBbe1xuICAgIGtleTogXCJnZXRMb2NhbGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TG9jYWxlKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjb21wb25lbnROYW1lID0gX3RoaXMkcHJvcHMuY29tcG9uZW50TmFtZSxcbiAgICAgICAgICBkZWZhdWx0TG9jYWxlID0gX3RoaXMkcHJvcHMuZGVmYXVsdExvY2FsZTtcbiAgICAgIHZhciBsb2NhbGUgPSBkZWZhdWx0TG9jYWxlIHx8IF9kZWZhdWx0W1wiZGVmYXVsdFwiXVtjb21wb25lbnROYW1lIHx8ICdnbG9iYWwnXTtcbiAgICAgIHZhciBhbnRMb2NhbGUgPSB0aGlzLmNvbnRleHQ7XG4gICAgICB2YXIgbG9jYWxlRnJvbUNvbnRleHQgPSBjb21wb25lbnROYW1lICYmIGFudExvY2FsZSA/IGFudExvY2FsZVtjb21wb25lbnROYW1lXSA6IHt9O1xuICAgICAgcmV0dXJuICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHR5cGVvZiBsb2NhbGUgPT09ICdmdW5jdGlvbicgPyBsb2NhbGUoKSA6IGxvY2FsZSksIGxvY2FsZUZyb21Db250ZXh0IHx8IHt9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0TG9jYWxlQ29kZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRMb2NhbGVDb2RlKCkge1xuICAgICAgdmFyIGFudExvY2FsZSA9IHRoaXMuY29udGV4dDtcbiAgICAgIHZhciBsb2NhbGVDb2RlID0gYW50TG9jYWxlICYmIGFudExvY2FsZS5sb2NhbGU7IC8vIEhhZCB1c2UgTG9jYWxlUHJvdmlkZSBidXQgZGlkbid0IHNldCBsb2NhbGVcblxuICAgICAgaWYgKGFudExvY2FsZSAmJiBhbnRMb2NhbGUuZXhpc3QgJiYgIWxvY2FsZUNvZGUpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0W1wiZGVmYXVsdFwiXS5sb2NhbGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsb2NhbGVDb2RlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4odGhpcy5nZXRMb2NhbGUoKSwgdGhpcy5nZXRMb2NhbGVDb2RlKCksIHRoaXMuY29udGV4dCk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBMb2NhbGVSZWNlaXZlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBMb2NhbGVSZWNlaXZlcjtcbkxvY2FsZVJlY2VpdmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY29tcG9uZW50TmFtZTogJ2dsb2JhbCdcbn07XG5Mb2NhbGVSZWNlaXZlci5jb250ZXh0VHlwZSA9IF9jb250ZXh0W1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgTG9jYWxlQ29udGV4dCA9IC8qI19fUFVSRV9fKi8oMCwgX3JlYWN0LmNyZWF0ZUNvbnRleHQpKHVuZGVmaW5lZCk7XG52YXIgX2RlZmF1bHQgPSBMb2NhbGVDb250ZXh0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9kZWZhdWx0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2xvY2FsZS9kZWZhdWx0XCIpKTtcblxudmFyIF9kZWZhdWx0ID0gX2RlZmF1bHQyW1wiZGVmYXVsdFwiXTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHBvcnRzLkFOVF9NQVJLID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpKTtcblxudmFyIF9pbmhlcml0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpKTtcblxudmFyIF9jcmVhdGVTdXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZVN1cGVyXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9kZXZXYXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvZGV2V2FybmluZ1wiKSk7XG5cbnZhciBfbG9jYWxlID0gcmVxdWlyZShcIi4uL21vZGFsL2xvY2FsZVwiKTtcblxudmFyIF9jb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb250ZXh0XCIpKTtcblxudmFyIEFOVF9NQVJLID0gJ2ludGVybmFsTWFyayc7XG5leHBvcnRzLkFOVF9NQVJLID0gQU5UX01BUks7XG5cbnZhciBMb2NhbGVQcm92aWRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMltcImRlZmF1bHRcIl0pKExvY2FsZVByb3ZpZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gKDAsIF9jcmVhdGVTdXBlcjJbXCJkZWZhdWx0XCJdKShMb2NhbGVQcm92aWRlcik7XG5cbiAgZnVuY3Rpb24gTG9jYWxlUHJvdmlkZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMltcImRlZmF1bHRcIl0pKHRoaXMsIExvY2FsZVByb3ZpZGVyKTtcbiAgICBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHByb3BzKTtcbiAgICAoMCwgX2xvY2FsZS5jaGFuZ2VDb25maXJtTG9jYWxlKShwcm9wcy5sb2NhbGUgJiYgcHJvcHMubG9jYWxlLk1vZGFsKTtcbiAgICAoMCwgX2Rldldhcm5pbmdbXCJkZWZhdWx0XCJdKShwcm9wcy5fQU5UX01BUktfXyA9PT0gQU5UX01BUkssICdMb2NhbGVQcm92aWRlcicsICdgTG9jYWxlUHJvdmlkZXJgIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgYGxvY2FsZWAgd2l0aCBgQ29uZmlnUHJvdmlkZXJgIGluc3RlYWQ6IGh0dHA6Ly91LmFudC5kZXNpZ24vbG9jYWxlJyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczJbXCJkZWZhdWx0XCJdKShMb2NhbGVQcm92aWRlciwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkVXBkYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIHZhciBsb2NhbGUgPSB0aGlzLnByb3BzLmxvY2FsZTtcblxuICAgICAgaWYgKHByZXZQcm9wcy5sb2NhbGUgIT09IGxvY2FsZSkge1xuICAgICAgICAoMCwgX2xvY2FsZS5jaGFuZ2VDb25maXJtTG9jYWxlKShsb2NhbGUgJiYgbG9jYWxlLk1vZGFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiY29tcG9uZW50V2lsbFVubW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAoMCwgX2xvY2FsZS5jaGFuZ2VDb25maXJtTG9jYWxlKSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBsb2NhbGUgPSBfdGhpcyRwcm9wcy5sb2NhbGUsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbjtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29udGV4dFtcImRlZmF1bHRcIl0uUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGxvY2FsZSksIHtcbiAgICAgICAgICBleGlzdDogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSwgY2hpbGRyZW4pO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTG9jYWxlUHJvdmlkZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTG9jYWxlUHJvdmlkZXI7XG5Mb2NhbGVQcm92aWRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGxvY2FsZToge31cbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZW5fVVMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy1wYWdpbmF0aW9uL2xpYi9sb2NhbGUvZW5fVVNcIikpO1xuXG52YXIgX2VuX1VTMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2RhdGUtcGlja2VyL2xvY2FsZS9lbl9VU1wiKSk7XG5cbnZhciBfZW5fVVMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdGltZS1waWNrZXIvbG9jYWxlL2VuX1VTXCIpKTtcblxudmFyIF9lbl9VUzQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9jYWxlbmRhci9sb2NhbGUvZW5fVVNcIikpO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby10ZW1wbGF0ZS1jdXJseS1pbi1zdHJpbmcgKi9cbnZhciB0eXBlVGVtcGxhdGUgPSAnJHtsYWJlbH0gaXMgbm90IGEgdmFsaWQgJHt0eXBlfSc7XG52YXIgbG9jYWxlVmFsdWVzID0ge1xuICBsb2NhbGU6ICdlbicsXG4gIFBhZ2luYXRpb246IF9lbl9VU1tcImRlZmF1bHRcIl0sXG4gIERhdGVQaWNrZXI6IF9lbl9VUzJbXCJkZWZhdWx0XCJdLFxuICBUaW1lUGlja2VyOiBfZW5fVVMzW1wiZGVmYXVsdFwiXSxcbiAgQ2FsZW5kYXI6IF9lbl9VUzRbXCJkZWZhdWx0XCJdLFxuICBnbG9iYWw6IHtcbiAgICBwbGFjZWhvbGRlcjogJ1BsZWFzZSBzZWxlY3QnXG4gIH0sXG4gIFRhYmxlOiB7XG4gICAgZmlsdGVyVGl0bGU6ICdGaWx0ZXIgbWVudScsXG4gICAgZmlsdGVyQ29uZmlybTogJ09LJyxcbiAgICBmaWx0ZXJSZXNldDogJ1Jlc2V0JyxcbiAgICBmaWx0ZXJFbXB0eVRleHQ6ICdObyBmaWx0ZXJzJyxcbiAgICBzZWxlY3RBbGw6ICdTZWxlY3QgY3VycmVudCBwYWdlJyxcbiAgICBzZWxlY3RJbnZlcnQ6ICdJbnZlcnQgY3VycmVudCBwYWdlJyxcbiAgICBzZWxlY3Rpb25BbGw6ICdTZWxlY3QgYWxsIGRhdGEnLFxuICAgIHNvcnRUaXRsZTogJ1NvcnQnLFxuICAgIGV4cGFuZDogJ0V4cGFuZCByb3cnLFxuICAgIGNvbGxhcHNlOiAnQ29sbGFwc2Ugcm93JyxcbiAgICB0cmlnZ2VyRGVzYzogJ0NsaWNrIHNvcnQgYnkgZGVzY2VuZCcsXG4gICAgdHJpZ2dlckFzYzogJ0NsaWNrIHNvcnQgYnkgYXNjZW5kJyxcbiAgICBjYW5jZWxTb3J0OiAnQ2xpY2sgdG8gY2FuY2VsIHNvcnQnXG4gIH0sXG4gIE1vZGFsOiB7XG4gICAgb2tUZXh0OiAnT0snLFxuICAgIGNhbmNlbFRleHQ6ICdDYW5jZWwnLFxuICAgIGp1c3RPa1RleHQ6ICdPSydcbiAgfSxcbiAgUG9wY29uZmlybToge1xuICAgIG9rVGV4dDogJ09LJyxcbiAgICBjYW5jZWxUZXh0OiAnQ2FuY2VsJ1xuICB9LFxuICBUcmFuc2Zlcjoge1xuICAgIHRpdGxlczogWycnLCAnJ10sXG4gICAgc2VhcmNoUGxhY2Vob2xkZXI6ICdTZWFyY2ggaGVyZScsXG4gICAgaXRlbVVuaXQ6ICdpdGVtJyxcbiAgICBpdGVtc1VuaXQ6ICdpdGVtcycsXG4gICAgcmVtb3ZlOiAnUmVtb3ZlJyxcbiAgICBzZWxlY3RDdXJyZW50OiAnU2VsZWN0IGN1cnJlbnQgcGFnZScsXG4gICAgcmVtb3ZlQ3VycmVudDogJ1JlbW92ZSBjdXJyZW50IHBhZ2UnLFxuICAgIHNlbGVjdEFsbDogJ1NlbGVjdCBhbGwgZGF0YScsXG4gICAgcmVtb3ZlQWxsOiAnUmVtb3ZlIGFsbCBkYXRhJyxcbiAgICBzZWxlY3RJbnZlcnQ6ICdJbnZlcnQgY3VycmVudCBwYWdlJ1xuICB9LFxuICBVcGxvYWQ6IHtcbiAgICB1cGxvYWRpbmc6ICdVcGxvYWRpbmcuLi4nLFxuICAgIHJlbW92ZUZpbGU6ICdSZW1vdmUgZmlsZScsXG4gICAgdXBsb2FkRXJyb3I6ICdVcGxvYWQgZXJyb3InLFxuICAgIHByZXZpZXdGaWxlOiAnUHJldmlldyBmaWxlJyxcbiAgICBkb3dubG9hZEZpbGU6ICdEb3dubG9hZCBmaWxlJ1xuICB9LFxuICBFbXB0eToge1xuICAgIGRlc2NyaXB0aW9uOiAnTm8gRGF0YSdcbiAgfSxcbiAgSWNvbjoge1xuICAgIGljb246ICdpY29uJ1xuICB9LFxuICBUZXh0OiB7XG4gICAgZWRpdDogJ0VkaXQnLFxuICAgIGNvcHk6ICdDb3B5JyxcbiAgICBjb3BpZWQ6ICdDb3BpZWQnLFxuICAgIGV4cGFuZDogJ0V4cGFuZCdcbiAgfSxcbiAgUGFnZUhlYWRlcjoge1xuICAgIGJhY2s6ICdCYWNrJ1xuICB9LFxuICBGb3JtOiB7XG4gICAgZGVmYXVsdFZhbGlkYXRlTWVzc2FnZXM6IHtcbiAgICAgIFwiZGVmYXVsdFwiOiAnRmllbGQgdmFsaWRhdGlvbiBlcnJvciAke2xhYmVsfScsXG4gICAgICByZXF1aXJlZDogJ1BsZWFzZSBlbnRlciAke2xhYmVsfScsXG4gICAgICBcImVudW1cIjogJyR7bGFiZWx9IG11c3QgYmUgb25lIG9mIFske2VudW19XScsXG4gICAgICB3aGl0ZXNwYWNlOiAnJHtsYWJlbH0gY2Fubm90IGJlIGEgYmxhbmsgY2hhcmFjdGVyJyxcbiAgICAgIGRhdGU6IHtcbiAgICAgICAgZm9ybWF0OiAnJHtsYWJlbH0gZGF0ZSBmb3JtYXQgaXMgaW52YWxpZCcsXG4gICAgICAgIHBhcnNlOiAnJHtsYWJlbH0gY2Fubm90IGJlIGNvbnZlcnRlZCB0byBhIGRhdGUnLFxuICAgICAgICBpbnZhbGlkOiAnJHtsYWJlbH0gaXMgYW4gaW52YWxpZCBkYXRlJ1xuICAgICAgfSxcbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIHN0cmluZzogdHlwZVRlbXBsYXRlLFxuICAgICAgICBtZXRob2Q6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgYXJyYXk6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgb2JqZWN0OiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIG51bWJlcjogdHlwZVRlbXBsYXRlLFxuICAgICAgICBkYXRlOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIFwiYm9vbGVhblwiOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIGludGVnZXI6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgXCJmbG9hdFwiOiB0eXBlVGVtcGxhdGUsXG4gICAgICAgIHJlZ2V4cDogdHlwZVRlbXBsYXRlLFxuICAgICAgICBlbWFpbDogdHlwZVRlbXBsYXRlLFxuICAgICAgICB1cmw6IHR5cGVUZW1wbGF0ZSxcbiAgICAgICAgaGV4OiB0eXBlVGVtcGxhdGVcbiAgICAgIH0sXG4gICAgICBzdHJpbmc6IHtcbiAgICAgICAgbGVuOiAnJHtsYWJlbH0gbXVzdCBiZSAke2xlbn0gY2hhcmFjdGVycycsXG4gICAgICAgIG1pbjogJyR7bGFiZWx9IGF0IGxlYXN0ICR7bWlufSBjaGFyYWN0ZXJzJyxcbiAgICAgICAgbWF4OiAnJHtsYWJlbH0gdXAgdG8gJHttYXh9IGNoYXJhY3RlcnMnLFxuICAgICAgICByYW5nZTogJyR7bGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke21pbn0tJHttYXh9IGNoYXJhY3RlcnMnXG4gICAgICB9LFxuICAgICAgbnVtYmVyOiB7XG4gICAgICAgIGxlbjogJyR7bGFiZWx9IG11c3QgYmUgZXF1YWwgdG8gJHtsZW59JyxcbiAgICAgICAgbWluOiAnJHtsYWJlbH0gbWluaW11bSB2YWx1ZSBpcyAke21pbn0nLFxuICAgICAgICBtYXg6ICcke2xhYmVsfSBtYXhpbXVtIHZhbHVlIGlzICR7bWF4fScsXG4gICAgICAgIHJhbmdlOiAnJHtsYWJlbH0gbXVzdCBiZSBiZXR3ZWVuICR7bWlufS0ke21heH0nXG4gICAgICB9LFxuICAgICAgYXJyYXk6IHtcbiAgICAgICAgbGVuOiAnTXVzdCBiZSAke2xlbn0gJHtsYWJlbH0nLFxuICAgICAgICBtaW46ICdBdCBsZWFzdCAke21pbn0gJHtsYWJlbH0nLFxuICAgICAgICBtYXg6ICdBdCBtb3N0ICR7bWF4fSAke2xhYmVsfScsXG4gICAgICAgIHJhbmdlOiAnVGhlIGFtb3VudCBvZiAke2xhYmVsfSBtdXN0IGJlIGJldHdlZW4gJHttaW59LSR7bWF4fSdcbiAgICAgIH0sXG4gICAgICBwYXR0ZXJuOiB7XG4gICAgICAgIG1pc21hdGNoOiAnJHtsYWJlbH0gZG9lcyBub3QgbWF0Y2ggdGhlIHBhdHRlcm4gJHtwYXR0ZXJufSdcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGVWYWx1ZXM7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cbnZhciBNZW51Q29udGV4dCA9IC8qI19fUFVSRV9fKi8oMCwgX3JlYWN0LmNyZWF0ZUNvbnRleHQpKHtcbiAgaW5saW5lQ29sbGFwc2VkOiBmYWxzZVxufSk7XG52YXIgX2RlZmF1bHQgPSBNZW51Q29udGV4dDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIikpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIikpO1xuXG52YXIgX2luaGVyaXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIikpO1xuXG52YXIgX2NyZWF0ZVN1cGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlU3VwZXJcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JjTWVudSA9IHJlcXVpcmUoXCJyYy1tZW51XCIpO1xuXG52YXIgX3RvQXJyYXkgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy11dGlsL2xpYi9DaGlsZHJlbi90b0FycmF5XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfTWVudUNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL01lbnVDb250ZXh0XCIpKTtcblxudmFyIF90b29sdGlwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vdG9vbHRpcFwiKSk7XG5cbnZhciBfU2lkZXIgPSByZXF1aXJlKFwiLi4vbGF5b3V0L1NpZGVyXCIpO1xuXG52YXIgX3JlYWN0Tm9kZSA9IHJlcXVpcmUoXCIuLi9fdXRpbC9yZWFjdE5vZGVcIik7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgTWVudUl0ZW0gPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czJbXCJkZWZhdWx0XCJdKShNZW51SXRlbSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9ICgwLCBfY3JlYXRlU3VwZXIyW1wiZGVmYXVsdFwiXSkoTWVudUl0ZW0pO1xuXG4gIGZ1bmN0aW9uIE1lbnVJdGVtKCkge1xuICAgIHZhciBfdGhpcztcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgTWVudUl0ZW0pO1xuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cbiAgICBfdGhpcy5vbktleURvd24gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgX3RoaXMubWVudUl0ZW0ub25LZXlEb3duKGUpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zYXZlTWVudUl0ZW0gPSBmdW5jdGlvbiAobWVudUl0ZW0pIHtcbiAgICAgIF90aGlzLm1lbnVJdGVtID0gbWVudUl0ZW07XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlckl0ZW0gPSBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIHNpZGVyQ29sbGFwc2VkID0gX3JlZi5zaWRlckNvbGxhcHNlZDtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGxldmVsID0gX3RoaXMkcHJvcHMubGV2ZWwsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgcm9vdFByZWZpeENscyA9IF90aGlzJHByb3BzLnJvb3RQcmVmaXhDbHM7XG5cbiAgICAgIHZhciBfYSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHRpdGxlID0gX2EudGl0bGUsXG4gICAgICAgICAgaWNvbiA9IF9hLmljb24sXG4gICAgICAgICAgZGFuZ2VyID0gX2EuZGFuZ2VyLFxuICAgICAgICAgIHJlc3QgPSBfX3Jlc3QoX2EsIFtcInRpdGxlXCIsIFwiaWNvblwiLCBcImRhbmdlclwiXSk7XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTWVudUNvbnRleHRbXCJkZWZhdWx0XCJdLkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICAgIHZhciBpbmxpbmVDb2xsYXBzZWQgPSBfcmVmMi5pbmxpbmVDb2xsYXBzZWQsXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBfcmVmMi5kaXJlY3Rpb247XG4gICAgICAgIHZhciB0b29sdGlwVGl0bGUgPSB0aXRsZTtcblxuICAgICAgICBpZiAodHlwZW9mIHRpdGxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRvb2x0aXBUaXRsZSA9IGxldmVsID09PSAxID8gY2hpbGRyZW4gOiAnJztcbiAgICAgICAgfSBlbHNlIGlmICh0aXRsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB0b29sdGlwVGl0bGUgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0b29sdGlwUHJvcHMgPSB7XG4gICAgICAgICAgdGl0bGU6IHRvb2x0aXBUaXRsZVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmICghc2lkZXJDb2xsYXBzZWQgJiYgIWlubGluZUNvbGxhcHNlZCkge1xuICAgICAgICAgIHRvb2x0aXBQcm9wcy50aXRsZSA9IG51bGw7IC8vIFJlc2V0IGB2aXNpYmxlYCB0byBmaXggY29udHJvbCBtb2RlIHRvb2x0aXAgZGlzcGxheSBub3QgY29ycmVjdFxuICAgICAgICAgIC8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvMTY3NDJcblxuICAgICAgICAgIHRvb2x0aXBQcm9wcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hpbGRyZW5MZW5ndGggPSAoMCwgX3RvQXJyYXlbXCJkZWZhdWx0XCJdKShjaGlsZHJlbikubGVuZ3RoO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3Rvb2x0aXBbXCJkZWZhdWx0XCJdLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHRvb2x0aXBQcm9wcywge1xuICAgICAgICAgIHBsYWNlbWVudDogZGlyZWN0aW9uID09PSAncnRsJyA/ICdsZWZ0JyA6ICdyaWdodCcsXG4gICAgICAgICAgb3ZlcmxheUNsYXNzTmFtZTogXCJcIi5jb25jYXQocm9vdFByZWZpeENscywgXCItaW5saW5lLWNvbGxhcHNlZC10b29sdGlwXCIpXG4gICAgICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfcmNNZW51Lkl0ZW0sICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgcmVzdCwge1xuICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoY2xhc3NOYW1lLCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocm9vdFByZWZpeENscywgXCItaXRlbS1kYW5nZXJcIiksIGRhbmdlciksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHJvb3RQcmVmaXhDbHMsIFwiLWl0ZW0tb25seS1jaGlsZFwiKSwgKGljb24gPyBjaGlsZHJlbkxlbmd0aCArIDEgOiBjaGlsZHJlbkxlbmd0aCkgPT09IDEpLCBfY2xhc3NOYW1lcykpLFxuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICByZWY6IF90aGlzLnNhdmVNZW51SXRlbVxuICAgICAgICB9KSwgaWNvbiwgX3RoaXMucmVuZGVySXRlbUNoaWxkcmVuKGlubGluZUNvbGxhcHNlZCkpKTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAoMCwgX2NyZWF0ZUNsYXNzMltcImRlZmF1bHRcIl0pKE1lbnVJdGVtLCBbe1xuICAgIGtleTogXCJyZW5kZXJJdGVtQ2hpbGRyZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVySXRlbUNoaWxkcmVuKGlubGluZUNvbGxhcHNlZCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaWNvbiA9IF90aGlzJHByb3BzMi5pY29uLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RoaXMkcHJvcHMyLmNoaWxkcmVuLFxuICAgICAgICAgIGxldmVsID0gX3RoaXMkcHJvcHMyLmxldmVsLFxuICAgICAgICAgIHJvb3RQcmVmaXhDbHMgPSBfdGhpcyRwcm9wczIucm9vdFByZWZpeENsczsgLy8gaW5saW5lLWNvbGxhcHNlZC5tZCBkZW1vIOS+nei1liBzcGFuIOadpemakOiXj+aWh+WtlyzmnIkgaWNvbiDlsZ7mgKfvvIzliJnlhoXpg6jljIXoo7nkuIDkuKogc3BhblxuICAgICAgLy8gcmVmOiBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL3B1bGwvMjM0NTZcblxuICAgICAgaWYgKCFpY29uIHx8ICgwLCBfcmVhY3ROb2RlLmlzVmFsaWRFbGVtZW50KShjaGlsZHJlbikgJiYgY2hpbGRyZW4udHlwZSA9PT0gJ3NwYW4nKSB7XG4gICAgICAgIGlmIChjaGlsZHJlbiAmJiBpbmxpbmVDb2xsYXBzZWQgJiYgbGV2ZWwgPT09IDEgJiYgdHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHJvb3RQcmVmaXhDbHMsIFwiLWlubGluZS1jb2xsYXBzZWQtbm9pY29uXCIpXG4gICAgICAgICAgfSwgY2hpbGRyZW4uY2hhckF0KDApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZHJlbjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX1NpZGVyLlNpZGVyQ29udGV4dC5Db25zdW1lciwgbnVsbCwgdGhpcy5yZW5kZXJJdGVtKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE1lbnVJdGVtO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IE1lbnVJdGVtO1xuTWVudUl0ZW0uaXNNZW51SXRlbSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIikpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIikpO1xuXG52YXIgX2luaGVyaXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIikpO1xuXG52YXIgX2NyZWF0ZVN1cGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlU3VwZXJcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JjTWVudSA9IHJlcXVpcmUoXCJyYy1tZW51XCIpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9vbWl0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwib21pdC5qc1wiKSk7XG5cbnZhciBfTWVudUNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL01lbnVDb250ZXh0XCIpKTtcblxudmFyIF9yZWFjdE5vZGUgPSByZXF1aXJlKFwiLi4vX3V0aWwvcmVhY3ROb2RlXCIpO1xuXG52YXIgU3ViTWVudSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMltcImRlZmF1bHRcIl0pKFN1Yk1lbnUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSAoMCwgX2NyZWF0ZVN1cGVyMltcImRlZmF1bHRcIl0pKFN1Yk1lbnUpO1xuXG4gIGZ1bmN0aW9uIFN1Yk1lbnUoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazJbXCJkZWZhdWx0XCJdKSh0aGlzLCBTdWJNZW51KTtcbiAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgX3RoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIF90aGlzLnN1Yk1lbnUub25LZXlEb3duKGUpO1xuICAgIH07XG5cbiAgICBfdGhpcy5zYXZlU3ViTWVudSA9IGZ1bmN0aW9uIChzdWJNZW51KSB7XG4gICAgICBfdGhpcy5zdWJNZW51ID0gc3ViTWVudTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczJbXCJkZWZhdWx0XCJdKShTdWJNZW51LCBbe1xuICAgIGtleTogXCJyZW5kZXJUaXRsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXJUaXRsZShpbmxpbmVDb2xsYXBzZWQpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaWNvbiA9IF90aGlzJHByb3BzLmljb24sXG4gICAgICAgICAgdGl0bGUgPSBfdGhpcyRwcm9wcy50aXRsZSxcbiAgICAgICAgICBsZXZlbCA9IF90aGlzJHByb3BzLmxldmVsLFxuICAgICAgICAgIHJvb3RQcmVmaXhDbHMgPSBfdGhpcyRwcm9wcy5yb290UHJlZml4Q2xzO1xuXG4gICAgICBpZiAoIWljb24pIHtcbiAgICAgICAgcmV0dXJuIGlubGluZUNvbGxhcHNlZCAmJiBsZXZlbCA9PT0gMSAmJiB0aXRsZSAmJiB0eXBlb2YgdGl0bGUgPT09ICdzdHJpbmcnID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocm9vdFByZWZpeENscywgXCItaW5saW5lLWNvbGxhcHNlZC1ub2ljb25cIilcbiAgICAgICAgfSwgdGl0bGUuY2hhckF0KDApKSA6IHRpdGxlO1xuICAgICAgfSAvLyBpbmxpbmUtY29sbGFwc2VkLm1kIGRlbW8g5L6d6LWWIHNwYW4g5p2l6ZqQ6JeP5paH5a2XLOaciSBpY29uIOWxnuaAp++8jOWImeWGhemDqOWMheijueS4gOS4qiBzcGFuXG4gICAgICAvLyByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vcHVsbC8yMzQ1NlxuXG5cbiAgICAgIHZhciB0aXRsZUlzU3BhbiA9ICgwLCBfcmVhY3ROb2RlLmlzVmFsaWRFbGVtZW50KSh0aXRsZSkgJiYgdGl0bGUudHlwZSA9PT0gJ3NwYW4nO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBpY29uLCB0aXRsZUlzU3BhbiA/IHRpdGxlIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIHRpdGxlKSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgcm9vdFByZWZpeENscyA9IF90aGlzJHByb3BzMi5yb290UHJlZml4Q2xzLFxuICAgICAgICAgIHBvcHVwQ2xhc3NOYW1lID0gX3RoaXMkcHJvcHMyLnBvcHVwQ2xhc3NOYW1lO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9NZW51Q29udGV4dFtcImRlZmF1bHRcIl0uQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBpbmxpbmVDb2xsYXBzZWQgPSBfcmVmLmlubGluZUNvbGxhcHNlZCxcbiAgICAgICAgICAgIGFudGRNZW51VGhlbWUgPSBfcmVmLmFudGRNZW51VGhlbWU7XG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfcmNNZW51LlN1Yk1lbnUsICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgKDAsIF9vbWl0W1wiZGVmYXVsdFwiXSkoX3RoaXMyLnByb3BzLCBbJ2ljb24nXSksIHtcbiAgICAgICAgICB0aXRsZTogX3RoaXMyLnJlbmRlclRpdGxlKGlubGluZUNvbGxhcHNlZCksXG4gICAgICAgICAgcmVmOiBfdGhpczIuc2F2ZVN1Yk1lbnUsXG4gICAgICAgICAgcG9wdXBDbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKHJvb3RQcmVmaXhDbHMsIFwiXCIuY29uY2F0KHJvb3RQcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoYW50ZE1lbnVUaGVtZSksIHBvcHVwQ2xhc3NOYW1lKVxuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFN1Yk1lbnU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cblN1Yk1lbnUuY29udGV4dFR5cGUgPSBfTWVudUNvbnRleHRbXCJkZWZhdWx0XCJdOyAvLyBmaXggaXNzdWU6aHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvODY2NlxuXG5TdWJNZW51LmlzU3ViTWVudSA9IDE7XG52YXIgX2RlZmF1bHQgPSBTdWJNZW51O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKSk7XG5cbnZhciBfaW5oZXJpdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKSk7XG5cbnZhciBfY3JlYXRlU3VwZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVTdXBlclwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmNNZW51ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJjLW1lbnVcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9TdWJNZW51ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9TdWJNZW51XCIpKTtcblxudmFyIF9NZW51SXRlbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTWVudUl0ZW1cIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9kZXZXYXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvZGV2V2FybmluZ1wiKSk7XG5cbnZhciBfU2lkZXIgPSByZXF1aXJlKFwiLi4vbGF5b3V0L1NpZGVyXCIpO1xuXG52YXIgX21vdGlvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL21vdGlvblwiKSk7XG5cbnZhciBfTWVudUNvbnRleHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL01lbnVDb250ZXh0XCIpKTtcblxudmFyIEludGVybmFsTWVudSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAoMCwgX2luaGVyaXRzMltcImRlZmF1bHRcIl0pKEludGVybmFsTWVudSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9ICgwLCBfY3JlYXRlU3VwZXIyW1wiZGVmYXVsdFwiXSkoSW50ZXJuYWxNZW51KTtcblxuICBmdW5jdGlvbiBJbnRlcm5hbE1lbnUocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMltcImRlZmF1bHRcIl0pKHRoaXMsIEludGVybmFsTWVudSk7XG4gICAgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzLCBwcm9wcyk7XG5cbiAgICBfdGhpcy5yZW5kZXJNZW51ID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBnZXRQb3B1cENvbnRhaW5lciA9IF9yZWYuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICAgICAgZ2V0UHJlZml4Q2xzID0gX3JlZi5nZXRQcmVmaXhDbHMsXG4gICAgICAgICAgZGlyZWN0aW9uID0gX3JlZi5kaXJlY3Rpb247XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBfdGhpcyRwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgICAgIHRoZW1lID0gX3RoaXMkcHJvcHMudGhlbWU7XG4gICAgICB2YXIgZGVmYXVsdE1vdGlvbnMgPSB7XG4gICAgICAgIGhvcml6b250YWw6IHtcbiAgICAgICAgICBtb3Rpb25OYW1lOiAnc2xpZGUtdXAnXG4gICAgICAgIH0sXG4gICAgICAgIGlubGluZTogX21vdGlvbltcImRlZmF1bHRcIl0sXG4gICAgICAgIG90aGVyOiB7XG4gICAgICAgICAgbW90aW9uTmFtZTogJ3pvb20tYmlnJ1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnbWVudScsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICB2YXIgbWVudUNsYXNzTmFtZSA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGNsYXNzTmFtZSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KHRoZW1lKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSh7fSwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pbmxpbmUtY29sbGFwc2VkXCIpLCBfdGhpcy5nZXRJbmxpbmVDb2xsYXBzZWQoKSkpO1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9NZW51Q29udGV4dFtcImRlZmF1bHRcIl0uUHJvdmlkZXIsIHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBpbmxpbmVDb2xsYXBzZWQ6IF90aGlzLmdldElubGluZUNvbGxhcHNlZCgpIHx8IGZhbHNlLFxuICAgICAgICAgIGFudGRNZW51VGhlbWU6IHRoZW1lLFxuICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgICAgIH1cbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY01lbnVbXCJkZWZhdWx0XCJdLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe1xuICAgICAgICBnZXRQb3B1cENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXJcbiAgICAgIH0sIF90aGlzLnByb3BzLCB7XG4gICAgICAgIGNsYXNzTmFtZTogbWVudUNsYXNzTmFtZSxcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uLFxuICAgICAgICBkZWZhdWx0TW90aW9uczogZGVmYXVsdE1vdGlvbnNcbiAgICAgIH0pKSk7XG4gICAgfTtcblxuICAgICgwLCBfZGV2V2FybmluZ1tcImRlZmF1bHRcIl0pKCEoJ2lubGluZUNvbGxhcHNlZCcgaW4gcHJvcHMgJiYgcHJvcHMubW9kZSAhPT0gJ2lubGluZScpLCAnTWVudScsICdgaW5saW5lQ29sbGFwc2VkYCBzaG91bGQgb25seSBiZSB1c2VkIHdoZW4gYG1vZGVgIGlzIGlubGluZS4nKTtcbiAgICAoMCwgX2Rldldhcm5pbmdbXCJkZWZhdWx0XCJdKSghKHByb3BzLnNpZGVyQ29sbGFwc2VkICE9PSB1bmRlZmluZWQgJiYgJ2lubGluZUNvbGxhcHNlZCcgaW4gcHJvcHMpLCAnTWVudScsICdgaW5saW5lQ29sbGFwc2VkYCBub3QgY29udHJvbCBNZW51IHVuZGVyIFNpZGVyLiBTaG91bGQgc2V0IGBjb2xsYXBzZWRgIG9uIFNpZGVyIGluc3RlYWQuJyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczJbXCJkZWZhdWx0XCJdKShJbnRlcm5hbE1lbnUsIFt7XG4gICAga2V5OiBcImdldElubGluZUNvbGxhcHNlZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbmxpbmVDb2xsYXBzZWQoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBpbmxpbmVDb2xsYXBzZWQgPSBfdGhpcyRwcm9wczIuaW5saW5lQ29sbGFwc2VkLFxuICAgICAgICAgIHNpZGVyQ29sbGFwc2VkID0gX3RoaXMkcHJvcHMyLnNpZGVyQ29sbGFwc2VkO1xuXG4gICAgICBpZiAoc2lkZXJDb2xsYXBzZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gc2lkZXJDb2xsYXBzZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBpbmxpbmVDb2xsYXBzZWQ7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInJlbmRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlck1lbnUpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gSW50ZXJuYWxNZW51O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5JbnRlcm5hbE1lbnUuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6ICcnLFxuICB0aGVtZTogJ2xpZ2h0JyxcbiAgZm9jdXNhYmxlOiBmYWxzZVxufTsgLy8gV2Ugc2hvdWxkIGtlZXAgdGhpcyBhcyByZWYtYWJsZVxuXG52YXIgTWVudSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudDIpIHtcbiAgKDAsIF9pbmhlcml0czJbXCJkZWZhdWx0XCJdKShNZW51LCBfUmVhY3QkQ29tcG9uZW50Mik7XG5cbiAgdmFyIF9zdXBlcjIgPSAoMCwgX2NyZWF0ZVN1cGVyMltcImRlZmF1bHRcIl0pKE1lbnUpO1xuXG4gIGZ1bmN0aW9uIE1lbnUoKSB7XG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazJbXCJkZWZhdWx0XCJdKSh0aGlzLCBNZW51KTtcbiAgICByZXR1cm4gX3N1cGVyMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczJbXCJkZWZhdWx0XCJdKShNZW51LCBbe1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfU2lkZXIuU2lkZXJDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW50ZXJuYWxNZW51LCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIF90aGlzMi5wcm9wcywgY29udGV4dCkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBNZW51O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IE1lbnU7XG5NZW51LkRpdmlkZXIgPSBfcmNNZW51LkRpdmlkZXI7XG5NZW51Lkl0ZW0gPSBfTWVudUl0ZW1bXCJkZWZhdWx0XCJdO1xuTWVudS5TdWJNZW51ID0gX1N1Yk1lbnVbXCJkZWZhdWx0XCJdO1xuTWVudS5JdGVtR3JvdXAgPSBfcmNNZW51Lkl0ZW1Hcm91cDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3JjTm90aWZpY2F0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtbm90aWZpY2F0aW9uXCIpKTtcblxudmFyIF9Mb2FkaW5nT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9Mb2FkaW5nT3V0bGluZWRcIikpO1xuXG52YXIgX0V4Y2xhbWF0aW9uQ2lyY2xlRmlsbGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvRXhjbGFtYXRpb25DaXJjbGVGaWxsZWRcIikpO1xuXG52YXIgX0Nsb3NlQ2lyY2xlRmlsbGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2xvc2VDaXJjbGVGaWxsZWRcIikpO1xuXG52YXIgX0NoZWNrQ2lyY2xlRmlsbGVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2hlY2tDaXJjbGVGaWxsZWRcIikpO1xuXG52YXIgX0luZm9DaXJjbGVGaWxsZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9JbmZvQ2lyY2xlRmlsbGVkXCIpKTtcblxudmFyIGRlZmF1bHREdXJhdGlvbiA9IDM7XG52YXIgZGVmYXVsdFRvcDtcbnZhciBtZXNzYWdlSW5zdGFuY2U7XG52YXIga2V5ID0gMTtcbnZhciBwcmVmaXhDbHMgPSAnYW50LW1lc3NhZ2UnO1xudmFyIHRyYW5zaXRpb25OYW1lID0gJ21vdmUtdXAnO1xudmFyIGdldENvbnRhaW5lcjtcbnZhciBtYXhDb3VudDtcbnZhciBydGwgPSBmYWxzZTtcblxuZnVuY3Rpb24gZ2V0TWVzc2FnZUluc3RhbmNlKGNhbGxiYWNrKSB7XG4gIGlmIChtZXNzYWdlSW5zdGFuY2UpIHtcbiAgICBjYWxsYmFjayhtZXNzYWdlSW5zdGFuY2UpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIF9yY05vdGlmaWNhdGlvbltcImRlZmF1bHRcIl0ubmV3SW5zdGFuY2Uoe1xuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIHRyYW5zaXRpb25OYW1lOiB0cmFuc2l0aW9uTmFtZSxcbiAgICBzdHlsZToge1xuICAgICAgdG9wOiBkZWZhdWx0VG9wXG4gICAgfSxcbiAgICBnZXRDb250YWluZXI6IGdldENvbnRhaW5lcixcbiAgICBtYXhDb3VudDogbWF4Q291bnRcbiAgfSwgZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgaWYgKG1lc3NhZ2VJbnN0YW5jZSkge1xuICAgICAgY2FsbGJhY2sobWVzc2FnZUluc3RhbmNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtZXNzYWdlSW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICBjYWxsYmFjayhpbnN0YW5jZSk7XG4gIH0pO1xufVxuXG52YXIgaWNvbk1hcCA9IHtcbiAgaW5mbzogX0luZm9DaXJjbGVGaWxsZWRbXCJkZWZhdWx0XCJdLFxuICBzdWNjZXNzOiBfQ2hlY2tDaXJjbGVGaWxsZWRbXCJkZWZhdWx0XCJdLFxuICBlcnJvcjogX0Nsb3NlQ2lyY2xlRmlsbGVkW1wiZGVmYXVsdFwiXSxcbiAgd2FybmluZzogX0V4Y2xhbWF0aW9uQ2lyY2xlRmlsbGVkW1wiZGVmYXVsdFwiXSxcbiAgbG9hZGluZzogX0xvYWRpbmdPdXRsaW5lZFtcImRlZmF1bHRcIl1cbn07XG5cbmZ1bmN0aW9uIG5vdGljZShhcmdzKSB7XG4gIHZhciBfY2xhc3NOYW1lcztcblxuICB2YXIgZHVyYXRpb24gPSBhcmdzLmR1cmF0aW9uICE9PSB1bmRlZmluZWQgPyBhcmdzLmR1cmF0aW9uIDogZGVmYXVsdER1cmF0aW9uO1xuICB2YXIgSWNvbkNvbXBvbmVudCA9IGljb25NYXBbYXJncy50eXBlXTtcbiAgdmFyIG1lc3NhZ2VDbGFzcyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY3VzdG9tLWNvbnRlbnRcIiksIChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoYXJncy50eXBlKSwgYXJncy50eXBlKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIHJ0bCA9PT0gdHJ1ZSksIF9jbGFzc05hbWVzKSk7XG4gIHZhciB0YXJnZXQgPSBhcmdzLmtleSB8fCBrZXkrKztcbiAgdmFyIGNsb3NlUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICBpZiAodHlwZW9mIGFyZ3Mub25DbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhcmdzLm9uQ2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSk7XG4gICAgfTtcblxuICAgIGdldE1lc3NhZ2VJbnN0YW5jZShmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgIGluc3RhbmNlLm5vdGljZSh7XG4gICAgICAgIGtleTogdGFyZ2V0LFxuICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgIHN0eWxlOiBhcmdzLnN0eWxlIHx8IHt9LFxuICAgICAgICBjbGFzc05hbWU6IGFyZ3MuY2xhc3NOYW1lLFxuICAgICAgICBjb250ZW50OiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBtZXNzYWdlQ2xhc3NcbiAgICAgICAgfSwgYXJncy5pY29uIHx8IEljb25Db21wb25lbnQgJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbkNvbXBvbmVudCwgbnVsbCksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCBhcmdzLmNvbnRlbnQpKSxcbiAgICAgICAgb25DbG9zZTogY2FsbGJhY2tcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICB2YXIgcmVzdWx0ID0gZnVuY3Rpb24gcmVzdWx0KCkge1xuICAgIGlmIChtZXNzYWdlSW5zdGFuY2UpIHtcbiAgICAgIG1lc3NhZ2VJbnN0YW5jZS5yZW1vdmVOb3RpY2UodGFyZ2V0KTtcbiAgICB9XG4gIH07XG5cbiAgcmVzdWx0LnRoZW4gPSBmdW5jdGlvbiAoZmlsbGVkLCByZWplY3RlZCkge1xuICAgIHJldHVybiBjbG9zZVByb21pc2UudGhlbihmaWxsZWQsIHJlamVjdGVkKTtcbiAgfTtcblxuICByZXN1bHQucHJvbWlzZSA9IGNsb3NlUHJvbWlzZTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gaXNBcmdzUHJvcHMoY29udGVudCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGNvbnRlbnQpID09PSAnW29iamVjdCBPYmplY3RdJyAmJiAhIWNvbnRlbnQuY29udGVudDtcbn1cblxudmFyIGFwaSA9IHtcbiAgb3Blbjogbm90aWNlLFxuICBjb25maWc6IGZ1bmN0aW9uIGNvbmZpZyhvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMudG9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGRlZmF1bHRUb3AgPSBvcHRpb25zLnRvcDtcbiAgICAgIG1lc3NhZ2VJbnN0YW5jZSA9IG51bGw7IC8vIGRlbGV0ZSBtZXNzYWdlSW5zdGFuY2UgZm9yIG5ldyBkZWZhdWx0VG9wXG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZHVyYXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgZGVmYXVsdER1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbjtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5wcmVmaXhDbHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcHJlZml4Q2xzID0gb3B0aW9ucy5wcmVmaXhDbHM7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuZ2V0Q29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGdldENvbnRhaW5lciA9IG9wdGlvbnMuZ2V0Q29udGFpbmVyO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLnRyYW5zaXRpb25OYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRyYW5zaXRpb25OYW1lID0gb3B0aW9ucy50cmFuc2l0aW9uTmFtZTtcbiAgICAgIG1lc3NhZ2VJbnN0YW5jZSA9IG51bGw7IC8vIGRlbGV0ZSBtZXNzYWdlSW5zdGFuY2UgZm9yIG5ldyB0cmFuc2l0aW9uTmFtZVxuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm1heENvdW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG1heENvdW50ID0gb3B0aW9ucy5tYXhDb3VudDtcbiAgICAgIG1lc3NhZ2VJbnN0YW5jZSA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMucnRsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJ0bCA9IG9wdGlvbnMucnRsO1xuICAgIH1cbiAgfSxcbiAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBpZiAobWVzc2FnZUluc3RhbmNlKSB7XG4gICAgICBtZXNzYWdlSW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgbWVzc2FnZUluc3RhbmNlID0gbnVsbDtcbiAgICB9XG4gIH1cbn07XG5bJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2Vycm9yJywgJ2xvYWRpbmcnXS5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gIGFwaVt0eXBlXSA9IGZ1bmN0aW9uIChjb250ZW50LCBkdXJhdGlvbiwgb25DbG9zZSkge1xuICAgIGlmIChpc0FyZ3NQcm9wcyhjb250ZW50KSkge1xuICAgICAgcmV0dXJuIGFwaS5vcGVuKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGNvbnRlbnQpLCB7XG4gICAgICAgIHR5cGU6IHR5cGVcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGR1cmF0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBvbkNsb3NlID0gZHVyYXRpb247XG4gICAgICBkdXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICByZXR1cm4gYXBpLm9wZW4oe1xuICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICBvbkNsb3NlOiBvbkNsb3NlXG4gICAgfSk7XG4gIH07XG59KTtcbmFwaS53YXJuID0gYXBpLndhcm5pbmc7XG52YXIgX2RlZmF1bHQgPSBhcGk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2hhbmdlQ29uZmlybUxvY2FsZSA9IGNoYW5nZUNvbmZpcm1Mb2NhbGU7XG5leHBvcnRzLmdldENvbmZpcm1Mb2NhbGUgPSBnZXRDb25maXJtTG9jYWxlO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbG9jYWxlL2RlZmF1bHRcIikpO1xuXG52YXIgcnVudGltZUxvY2FsZSA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgX2RlZmF1bHRbXCJkZWZhdWx0XCJdLk1vZGFsKTtcblxuZnVuY3Rpb24gY2hhbmdlQ29uZmlybUxvY2FsZShuZXdMb2NhbGUpIHtcbiAgaWYgKG5ld0xvY2FsZSkge1xuICAgIHJ1bnRpbWVMb2NhbGUgPSAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBydW50aW1lTG9jYWxlKSwgbmV3TG9jYWxlKTtcbiAgfSBlbHNlIHtcbiAgICBydW50aW1lTG9jYWxlID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBfZGVmYXVsdFtcImRlZmF1bHRcIl0uTW9kYWwpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldENvbmZpcm1Mb2NhbGUoKSB7XG4gIHJldHVybiBydW50aW1lTG9jYWxlO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gY3JlYXRlVXNlTm90aWZpY2F0aW9uO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfdXNlTm90aWZpY2F0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtbm90aWZpY2F0aW9uL2xpYi91c2VOb3RpZmljYXRpb25cIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uLy4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxuZnVuY3Rpb24gY3JlYXRlVXNlTm90aWZpY2F0aW9uKGdldE5vdGlmaWNhdGlvbkluc3RhbmNlLCBnZXRSQ05vdGljZVByb3BzKSB7XG4gIHZhciB1c2VOb3RpZmljYXRpb24gPSBmdW5jdGlvbiB1c2VOb3RpZmljYXRpb24oKSB7XG4gICAgLy8gV2UgY2FuIG9ubHkgZ2V0IGNvbnRlbnQgYnkgcmVuZGVyXG4gICAgdmFyIGdldFByZWZpeENsczsgLy8gV2UgY3JlYXRlIGEgcHJveHkgdG8gaGFuZGxlIGRlbGF5IGNyZWF0ZWQgaW5zdGFuY2VcblxuICAgIHZhciBpbm5lckluc3RhbmNlID0gbnVsbDtcbiAgICB2YXIgcHJveHkgPSB7XG4gICAgICBhZGQ6IGZ1bmN0aW9uIGFkZChub3RpY2VQcm9wcywgaG9sZGVyQ2FsbGJhY2spIHtcbiAgICAgICAgaW5uZXJJbnN0YW5jZSA9PT0gbnVsbCB8fCBpbm5lckluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbm5lckluc3RhbmNlLmNvbXBvbmVudC5hZGQobm90aWNlUHJvcHMsIGhvbGRlckNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIF91c2VSQ05vdGlmaWNhdGlvbiA9ICgwLCBfdXNlTm90aWZpY2F0aW9uW1wiZGVmYXVsdFwiXSkocHJveHkpLFxuICAgICAgICBfdXNlUkNOb3RpZmljYXRpb24yID0gKDAsIF9zbGljZWRUb0FycmF5MltcImRlZmF1bHRcIl0pKF91c2VSQ05vdGlmaWNhdGlvbiwgMiksXG4gICAgICAgIGhvb2tOb3RpZnkgPSBfdXNlUkNOb3RpZmljYXRpb24yWzBdLFxuICAgICAgICBob2xkZXIgPSBfdXNlUkNOb3RpZmljYXRpb24yWzFdO1xuXG4gICAgZnVuY3Rpb24gbm90aWZ5KGFyZ3MpIHtcbiAgICAgIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBhcmdzLnByZWZpeENscztcbiAgICAgIHZhciBtZXJnZWRQcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ25vdGlmaWNhdGlvbicsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gICAgICBnZXROb3RpZmljYXRpb25JbnN0YW5jZSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBhcmdzKSwge1xuICAgICAgICBwcmVmaXhDbHM6IG1lcmdlZFByZWZpeENsc1xuICAgICAgfSksIGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgICAgICAgIGluc3RhbmNlID0gX3JlZi5pbnN0YW5jZTtcbiAgICAgICAgaW5uZXJJbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICBob29rTm90aWZ5KGdldFJDTm90aWNlUHJvcHMoYXJncywgcHJlZml4Q2xzKSk7XG4gICAgICB9KTtcbiAgICB9IC8vIEZpbGwgZnVuY3Rpb25zXG5cblxuICAgIHZhciBob29rQXBpUmVmID0gUmVhY3QudXNlUmVmKHt9KTtcbiAgICBob29rQXBpUmVmLmN1cnJlbnQub3BlbiA9IG5vdGlmeTtcbiAgICBbJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2Vycm9yJ10uZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgaG9va0FwaVJlZi5jdXJyZW50W3R5cGVdID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIGhvb2tBcGlSZWYuY3VycmVudC5vcGVuKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGFyZ3MpLCB7XG4gICAgICAgICAgdHlwZTogdHlwZVxuICAgICAgICB9KSk7XG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBbaG9va0FwaVJlZi5jdXJyZW50LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29uc3VtZXIsIHtcbiAgICAgIGtleTogXCJob2xkZXJcIlxuICAgIH0sIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICBnZXRQcmVmaXhDbHMgPSBjb250ZXh0LmdldFByZWZpeENscztcbiAgICAgIHJldHVybiBob2xkZXI7XG4gICAgfSldO1xuICB9O1xuXG4gIHJldHVybiB1c2VOb3RpZmljYXRpb247XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JjTm90aWZpY2F0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtbm90aWZpY2F0aW9uXCIpKTtcblxudmFyIF9DbG9zZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2xvc2VPdXRsaW5lZFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX0NoZWNrQ2lyY2xlT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9DaGVja0NpcmNsZU91dGxpbmVkXCIpKTtcblxudmFyIF9DbG9zZUNpcmNsZU91dGxpbmVkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnMvQ2xvc2VDaXJjbGVPdXRsaW5lZFwiKSk7XG5cbnZhciBfRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0V4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZWRcIikpO1xuXG52YXIgX0luZm9DaXJjbGVPdXRsaW5lZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zL0luZm9DaXJjbGVPdXRsaW5lZFwiKSk7XG5cbnZhciBfdXNlTm90aWZpY2F0aW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9ob29rcy91c2VOb3RpZmljYXRpb25cIikpO1xuXG52YXIgbm90aWZpY2F0aW9uSW5zdGFuY2UgPSB7fTtcbnZhciBkZWZhdWx0RHVyYXRpb24gPSA0LjU7XG52YXIgZGVmYXVsdFRvcCA9IDI0O1xudmFyIGRlZmF1bHRCb3R0b20gPSAyNDtcbnZhciBkZWZhdWx0UHJlZml4Q2xzID0gJ2FudC1ub3RpZmljYXRpb24nO1xudmFyIGRlZmF1bHRQbGFjZW1lbnQgPSAndG9wUmlnaHQnO1xudmFyIGRlZmF1bHRHZXRDb250YWluZXI7XG52YXIgZGVmYXVsdENsb3NlSWNvbjtcbnZhciBydGwgPSBmYWxzZTtcblxuZnVuY3Rpb24gc2V0Tm90aWZpY2F0aW9uQ29uZmlnKG9wdGlvbnMpIHtcbiAgdmFyIGR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbixcbiAgICAgIHBsYWNlbWVudCA9IG9wdGlvbnMucGxhY2VtZW50LFxuICAgICAgYm90dG9tID0gb3B0aW9ucy5ib3R0b20sXG4gICAgICB0b3AgPSBvcHRpb25zLnRvcCxcbiAgICAgIGdldENvbnRhaW5lciA9IG9wdGlvbnMuZ2V0Q29udGFpbmVyLFxuICAgICAgY2xvc2VJY29uID0gb3B0aW9ucy5jbG9zZUljb24sXG4gICAgICBwcmVmaXhDbHMgPSBvcHRpb25zLnByZWZpeENscztcblxuICBpZiAocHJlZml4Q2xzICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0UHJlZml4Q2xzID0gcHJlZml4Q2xzO1xuICB9XG5cbiAgaWYgKGR1cmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0RHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgfVxuXG4gIGlmIChwbGFjZW1lbnQgIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHRQbGFjZW1lbnQgPSBwbGFjZW1lbnQ7XG4gIH0gZWxzZSBpZiAob3B0aW9ucy5ydGwpIHtcbiAgICBkZWZhdWx0UGxhY2VtZW50ID0gJ3RvcExlZnQnO1xuICB9XG5cbiAgaWYgKGJvdHRvbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGVmYXVsdEJvdHRvbSA9IGJvdHRvbTtcbiAgfVxuXG4gIGlmICh0b3AgIT09IHVuZGVmaW5lZCkge1xuICAgIGRlZmF1bHRUb3AgPSB0b3A7XG4gIH1cblxuICBpZiAoZ2V0Q29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICBkZWZhdWx0R2V0Q29udGFpbmVyID0gZ2V0Q29udGFpbmVyO1xuICB9XG5cbiAgaWYgKGNsb3NlSWNvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgZGVmYXVsdENsb3NlSWNvbiA9IGNsb3NlSWNvbjtcbiAgfVxuXG4gIGlmIChvcHRpb25zLnJ0bCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcnRsID0gb3B0aW9ucy5ydGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGxhY2VtZW50U3R5bGUocGxhY2VtZW50KSB7XG4gIHZhciB0b3AgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGRlZmF1bHRUb3A7XG4gIHZhciBib3R0b20gPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGRlZmF1bHRCb3R0b207XG4gIHZhciBzdHlsZTtcblxuICBzd2l0Y2ggKHBsYWNlbWVudCkge1xuICAgIGNhc2UgJ3RvcExlZnQnOlxuICAgICAgc3R5bGUgPSB7XG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHRvcDogdG9wLFxuICAgICAgICBib3R0b206ICdhdXRvJ1xuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAndG9wUmlnaHQnOlxuICAgICAgc3R5bGUgPSB7XG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgYm90dG9tOiAnYXV0bydcbiAgICAgIH07XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ2JvdHRvbUxlZnQnOlxuICAgICAgc3R5bGUgPSB7XG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHRvcDogJ2F1dG8nLFxuICAgICAgICBib3R0b206IGJvdHRvbVxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHN0eWxlID0ge1xuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdG9wOiAnYXV0bycsXG4gICAgICAgIGJvdHRvbTogYm90dG9tXG4gICAgICB9O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGdldE5vdGlmaWNhdGlvbkluc3RhbmNlKGFyZ3MsIGNhbGxiYWNrKSB7XG4gIHZhciBfYXJncyRwbGFjZW1lbnQgPSBhcmdzLnBsYWNlbWVudCxcbiAgICAgIHBsYWNlbWVudCA9IF9hcmdzJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gZGVmYXVsdFBsYWNlbWVudCA6IF9hcmdzJHBsYWNlbWVudCxcbiAgICAgIHRvcCA9IGFyZ3MudG9wLFxuICAgICAgYm90dG9tID0gYXJncy5ib3R0b20sXG4gICAgICBfYXJncyRnZXRDb250YWluZXIgPSBhcmdzLmdldENvbnRhaW5lcixcbiAgICAgIGdldENvbnRhaW5lciA9IF9hcmdzJGdldENvbnRhaW5lciA9PT0gdm9pZCAwID8gZGVmYXVsdEdldENvbnRhaW5lciA6IF9hcmdzJGdldENvbnRhaW5lcixcbiAgICAgIF9hcmdzJGNsb3NlSWNvbiA9IGFyZ3MuY2xvc2VJY29uLFxuICAgICAgY2xvc2VJY29uID0gX2FyZ3MkY2xvc2VJY29uID09PSB2b2lkIDAgPyBkZWZhdWx0Q2xvc2VJY29uIDogX2FyZ3MkY2xvc2VJY29uO1xuICB2YXIgb3V0ZXJQcmVmaXhDbHMgPSBhcmdzLnByZWZpeENscyB8fCBkZWZhdWx0UHJlZml4Q2xzO1xuICB2YXIgcHJlZml4Q2xzID0gXCJcIi5jb25jYXQob3V0ZXJQcmVmaXhDbHMsIFwiLW5vdGljZVwiKTtcbiAgdmFyIGNhY2hlS2V5ID0gXCJcIi5jb25jYXQob3V0ZXJQcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQocGxhY2VtZW50KTtcbiAgdmFyIGNhY2hlSW5zdGFuY2UgPSBub3RpZmljYXRpb25JbnN0YW5jZVtjYWNoZUtleV07XG5cbiAgaWYgKGNhY2hlSW5zdGFuY2UpIHtcbiAgICBQcm9taXNlLnJlc29sdmUoY2FjaGVJbnN0YW5jZSkudGhlbihmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIGluc3RhbmNlOiBpbnN0YW5jZVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNsb3NlSWNvblRvUmVuZGVyID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KG91dGVyUHJlZml4Q2xzLCBcIi1jbG9zZS14XCIpXG4gIH0sIGNsb3NlSWNvbiB8fCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfQ2xvc2VPdXRsaW5lZFtcImRlZmF1bHRcIl0sIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KG91dGVyUHJlZml4Q2xzLCBcIi1jbG9zZS1pY29uXCIpXG4gIH0pKTtcbiAgdmFyIG5vdGlmaWNhdGlvbkNsYXNzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoXCJcIi5jb25jYXQob3V0ZXJQcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQocGxhY2VtZW50KSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSh7fSwgXCJcIi5jb25jYXQob3V0ZXJQcmVmaXhDbHMsIFwiLXJ0bFwiKSwgcnRsID09PSB0cnVlKSk7XG4gIG5vdGlmaWNhdGlvbkluc3RhbmNlW2NhY2hlS2V5XSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgX3JjTm90aWZpY2F0aW9uW1wiZGVmYXVsdFwiXS5uZXdJbnN0YW5jZSh7XG4gICAgICBwcmVmaXhDbHM6IG91dGVyUHJlZml4Q2xzLFxuICAgICAgY2xhc3NOYW1lOiBub3RpZmljYXRpb25DbGFzcyxcbiAgICAgIHN0eWxlOiBnZXRQbGFjZW1lbnRTdHlsZShwbGFjZW1lbnQsIHRvcCwgYm90dG9tKSxcbiAgICAgIGdldENvbnRhaW5lcjogZ2V0Q29udGFpbmVyLFxuICAgICAgY2xvc2VJY29uOiBjbG9zZUljb25Ub1JlbmRlclxuICAgIH0sIGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcbiAgICAgIHJlc29sdmUobm90aWZpY2F0aW9uKTtcbiAgICAgIGNhbGxiYWNrKHtcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIGluc3RhbmNlOiBub3RpZmljYXRpb25cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn1cblxudmFyIHR5cGVUb0ljb24gPSB7XG4gIHN1Y2Nlc3M6IF9DaGVja0NpcmNsZU91dGxpbmVkW1wiZGVmYXVsdFwiXSxcbiAgaW5mbzogX0luZm9DaXJjbGVPdXRsaW5lZFtcImRlZmF1bHRcIl0sXG4gIGVycm9yOiBfQ2xvc2VDaXJjbGVPdXRsaW5lZFtcImRlZmF1bHRcIl0sXG4gIHdhcm5pbmc6IF9FeGNsYW1hdGlvbkNpcmNsZU91dGxpbmVkW1wiZGVmYXVsdFwiXVxufTtcblxuZnVuY3Rpb24gZ2V0UkNOb3RpY2VQcm9wcyhhcmdzLCBwcmVmaXhDbHMpIHtcbiAgdmFyIGR1cmF0aW9uID0gYXJncy5kdXJhdGlvbiA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdER1cmF0aW9uIDogYXJncy5kdXJhdGlvbjtcbiAgdmFyIGljb25Ob2RlID0gbnVsbDtcblxuICBpZiAoYXJncy5pY29uKSB7XG4gICAgaWNvbk5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWljb25cIilcbiAgICB9LCBhcmdzLmljb24pO1xuICB9IGVsc2UgaWYgKGFyZ3MudHlwZSkge1xuICAgIGljb25Ob2RlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQodHlwZVRvSWNvblthcmdzLnR5cGVdIHx8IG51bGwsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pY29uIFwiKS5jb25jYXQocHJlZml4Q2xzLCBcIi1pY29uLVwiKS5jb25jYXQoYXJncy50eXBlKVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIGF1dG9NYXJnaW5UYWcgPSAhYXJncy5kZXNjcmlwdGlvbiAmJiBpY29uTm9kZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW1lc3NhZ2Utc2luZ2xlLWxpbmUtYXV0by1tYXJnaW5cIilcbiAgfSkgOiBudWxsO1xuICByZXR1cm4ge1xuICAgIGNvbnRlbnQ6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogaWNvbk5vZGUgPyBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXdpdGgtaWNvblwiKSA6ICcnXG4gICAgfSwgaWNvbk5vZGUsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1tZXNzYWdlXCIpXG4gICAgfSwgYXV0b01hcmdpblRhZywgYXJncy5tZXNzYWdlKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRlc2NyaXB0aW9uXCIpXG4gICAgfSwgYXJncy5kZXNjcmlwdGlvbiksIGFyZ3MuYnRuID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1idG5cIilcbiAgICB9LCBhcmdzLmJ0bikgOiBudWxsKSxcbiAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgY2xvc2FibGU6IHRydWUsXG4gICAgb25DbG9zZTogYXJncy5vbkNsb3NlLFxuICAgIG9uQ2xpY2s6IGFyZ3Mub25DbGljayxcbiAgICBrZXk6IGFyZ3Mua2V5LFxuICAgIHN0eWxlOiBhcmdzLnN0eWxlIHx8IHt9LFxuICAgIGNsYXNzTmFtZTogYXJncy5jbGFzc05hbWVcbiAgfTtcbn1cblxudmFyIGFwaSA9IHtcbiAgb3BlbjogZnVuY3Rpb24gb3BlbihhcmdzKSB7XG4gICAgZ2V0Tm90aWZpY2F0aW9uSW5zdGFuY2UoYXJncywgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgICAgICBpbnN0YW5jZSA9IF9yZWYuaW5zdGFuY2U7XG4gICAgICBpbnN0YW5jZS5ub3RpY2UoZ2V0UkNOb3RpY2VQcm9wcyhhcmdzLCBwcmVmaXhDbHMpKTtcbiAgICB9KTtcbiAgfSxcbiAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKGtleSkge1xuICAgIE9iamVjdC5rZXlzKG5vdGlmaWNhdGlvbkluc3RhbmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChjYWNoZUtleSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShub3RpZmljYXRpb25JbnN0YW5jZVtjYWNoZUtleV0pLnRoZW4oZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgICAgIGluc3RhbmNlLnJlbW92ZU5vdGljZShrZXkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIGNvbmZpZzogc2V0Tm90aWZpY2F0aW9uQ29uZmlnLFxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIE9iamVjdC5rZXlzKG5vdGlmaWNhdGlvbkluc3RhbmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChjYWNoZUtleSkge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKG5vdGlmaWNhdGlvbkluc3RhbmNlW2NhY2hlS2V5XSkudGhlbihmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2UuZGVzdHJveSgpO1xuICAgICAgfSk7XG4gICAgICBkZWxldGUgbm90aWZpY2F0aW9uSW5zdGFuY2VbY2FjaGVLZXldOyAvLyBsZ3RtW2pzL21pc3NpbmctYXdhaXRdXG4gICAgfSk7XG4gIH1cbn07XG5bJ3N1Y2Nlc3MnLCAnaW5mbycsICd3YXJuaW5nJywgJ2Vycm9yJ10uZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICBhcGlbdHlwZV0gPSBmdW5jdGlvbiAoYXJncykge1xuICAgIHJldHVybiBhcGkub3BlbigoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBhcmdzKSwge1xuICAgICAgdHlwZTogdHlwZVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuYXBpLndhcm4gPSBhcGkud2FybmluZztcbmFwaS51c2VOb3RpZmljYXRpb24gPSAoMCwgX3VzZU5vdGlmaWNhdGlvbltcImRlZmF1bHRcIl0pKGdldE5vdGlmaWNhdGlvbkluc3RhbmNlLCBnZXRSQ05vdGljZVByb3BzKTtcbnZhciBfZGVmYXVsdCA9IGFwaTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGV4cG9ydHMuUmFkaW9Hcm91cENvbnRleHRQcm92aWRlciA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIFJhZGlvR3JvdXBDb250ZXh0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG52YXIgUmFkaW9Hcm91cENvbnRleHRQcm92aWRlciA9IFJhZGlvR3JvdXBDb250ZXh0LlByb3ZpZGVyO1xuZXhwb3J0cy5SYWRpb0dyb3VwQ29udGV4dFByb3ZpZGVyID0gUmFkaW9Hcm91cENvbnRleHRQcm92aWRlcjtcbnZhciBfZGVmYXVsdCA9IFJhZGlvR3JvdXBDb250ZXh0O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3VzZU1lcmdlZFN0YXRlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXV0aWwvbGliL2hvb2tzL3VzZU1lcmdlZFN0YXRlXCIpKTtcblxudmFyIF9yYWRpbyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmFkaW9cIikpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9TaXplQ29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlci9TaXplQ29udGV4dFwiKSk7XG5cbnZhciBfY29udGV4dCA9IHJlcXVpcmUoXCIuL2NvbnRleHRcIik7XG5cbnZhciBSYWRpb0dyb3VwID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHMsXG4gICAgICBkaXJlY3Rpb24gPSBfUmVhY3QkdXNlQ29udGV4dC5kaXJlY3Rpb247XG5cbiAgdmFyIHNpemUgPSBSZWFjdC51c2VDb250ZXh0KF9TaXplQ29udGV4dFtcImRlZmF1bHRcIl0pO1xuXG4gIHZhciBfdXNlTWVyZ2VkU3RhdGUgPSAoMCwgX3VzZU1lcmdlZFN0YXRlM1tcImRlZmF1bHRcIl0pKHByb3BzLmRlZmF1bHRWYWx1ZSwge1xuICAgIHZhbHVlOiBwcm9wcy52YWx1ZVxuICB9KSxcbiAgICAgIF91c2VNZXJnZWRTdGF0ZTIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX3VzZU1lcmdlZFN0YXRlLCAyKSxcbiAgICAgIHZhbHVlID0gX3VzZU1lcmdlZFN0YXRlMlswXSxcbiAgICAgIHNldFZhbHVlID0gX3VzZU1lcmdlZFN0YXRlMlsxXTtcblxuICB2YXIgb25SYWRpb0NoYW5nZSA9IGZ1bmN0aW9uIG9uUmFkaW9DaGFuZ2UoZXYpIHtcbiAgICB2YXIgbGFzdFZhbHVlID0gdmFsdWU7XG4gICAgdmFyIHZhbCA9IGV2LnRhcmdldC52YWx1ZTtcblxuICAgIGlmICghKCd2YWx1ZScgaW4gcHJvcHMpKSB7XG4gICAgICBzZXRWYWx1ZSh2YWwpO1xuICAgIH1cblxuICAgIHZhciBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlO1xuXG4gICAgaWYgKG9uQ2hhbmdlICYmIHZhbCAhPT0gbGFzdFZhbHVlKSB7XG4gICAgICBvbkNoYW5nZShldik7XG4gICAgfVxuICB9O1xuXG4gIHZhciByZW5kZXJHcm91cCA9IGZ1bmN0aW9uIHJlbmRlckdyb3VwKCkge1xuICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgIHZhciBjdXN0b21pemVQcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIF9wcm9wcyRjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIGNsYXNzTmFtZSA9IF9wcm9wcyRjbGFzc05hbWUgPT09IHZvaWQgMCA/ICcnIDogX3Byb3BzJGNsYXNzTmFtZSxcbiAgICAgICAgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMsXG4gICAgICAgIG9wdGlvblR5cGUgPSBwcm9wcy5vcHRpb25UeXBlLFxuICAgICAgICBidXR0b25TdHlsZSA9IHByb3BzLmJ1dHRvblN0eWxlLFxuICAgICAgICBkaXNhYmxlZCA9IHByb3BzLmRpc2FibGVkLFxuICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBjdXN0b21pemVTaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgICAgaWQgPSBwcm9wcy5pZCxcbiAgICAgICAgb25Nb3VzZUVudGVyID0gcHJvcHMub25Nb3VzZUVudGVyLFxuICAgICAgICBvbk1vdXNlTGVhdmUgPSBwcm9wcy5vbk1vdXNlTGVhdmU7XG4gICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygncmFkaW8nLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgIHZhciBncm91cFByZWZpeENscyA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZ3JvdXBcIik7XG4gICAgdmFyIGNoaWxkcmVuVG9SZW5kZXIgPSBjaGlsZHJlbjsgLy8g5aaC5p6c5a2Y5ZyoIG9wdGlvbnMsIOS8mOWFiOS9v+eUqFxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgb3B0aW9uc1ByZWZpeENscyA9IG9wdGlvblR5cGUgPT09ICdidXR0b24nID8gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1idXR0b25cIikgOiBwcmVmaXhDbHM7XG4gICAgICBjaGlsZHJlblRvUmVuZGVyID0gb3B0aW9ucy5tYXAoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAvLyDmraTlpITnsbvlnovoh6rliqjmjqjlr7zkuLogc3RyaW5nXG4gICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yYWRpb1tcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgICAgIHJlZjogcmVmLFxuICAgICAgICAgICAga2V5OiBvcHRpb24sXG4gICAgICAgICAgICBwcmVmaXhDbHM6IG9wdGlvbnNQcmVmaXhDbHMsXG4gICAgICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICAgICAgICB2YWx1ZTogb3B0aW9uLFxuICAgICAgICAgICAgY2hlY2tlZDogdmFsdWUgPT09IG9wdGlvblxuICAgICAgICAgIH0sIG9wdGlvbik7XG4gICAgICAgIH0gLy8g5q2k5aSE57G75Z6L6Ieq5Yqo5o6o5a+85Li6IHsgbGFiZWw6IHN0cmluZyB2YWx1ZTogc3RyaW5nIH1cblxuXG4gICAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfcmFkaW9bXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgICAgcmVmOiByZWYsXG4gICAgICAgICAga2V5OiBcInJhZGlvLWdyb3VwLXZhbHVlLW9wdGlvbnMtXCIuY29uY2F0KG9wdGlvbi52YWx1ZSksXG4gICAgICAgICAgcHJlZml4Q2xzOiBvcHRpb25zUHJlZml4Q2xzLFxuICAgICAgICAgIGRpc2FibGVkOiBvcHRpb24uZGlzYWJsZWQgfHwgZGlzYWJsZWQsXG4gICAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgICBjaGVja2VkOiB2YWx1ZSA9PT0gb3B0aW9uLnZhbHVlLFxuICAgICAgICAgIHN0eWxlOiBvcHRpb24uc3R5bGVcbiAgICAgICAgfSwgb3B0aW9uLmxhYmVsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBtZXJnZWRTaXplID0gY3VzdG9taXplU2l6ZSB8fCBzaXplO1xuICAgIHZhciBjbGFzc1N0cmluZyA9ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGdyb3VwUHJlZml4Q2xzLCBcIlwiLmNvbmNhdChncm91cFByZWZpeENscywgXCItXCIpLmNvbmNhdChidXR0b25TdHlsZSksIChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChncm91cFByZWZpeENscywgXCItXCIpLmNvbmNhdChtZXJnZWRTaXplKSwgbWVyZ2VkU2l6ZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KGdyb3VwUHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCBfY2xhc3NOYW1lcyksIGNsYXNzTmFtZSk7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NTdHJpbmcsXG4gICAgICBzdHlsZTogc3R5bGUsXG4gICAgICBvbk1vdXNlRW50ZXI6IG9uTW91c2VFbnRlcixcbiAgICAgIG9uTW91c2VMZWF2ZTogb25Nb3VzZUxlYXZlLFxuICAgICAgaWQ6IGlkXG4gICAgfSwgY2hpbGRyZW5Ub1JlbmRlcik7XG4gIH07XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb250ZXh0LlJhZGlvR3JvdXBDb250ZXh0UHJvdmlkZXIsIHtcbiAgICB2YWx1ZToge1xuICAgICAgb25DaGFuZ2U6IG9uUmFkaW9DaGFuZ2UsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBkaXNhYmxlZDogcHJvcHMuZGlzYWJsZWQsXG4gICAgICBuYW1lOiBwcm9wcy5uYW1lXG4gICAgfVxuICB9LCByZW5kZXJHcm91cCgpKTtcbn0pO1xuUmFkaW9Hcm91cC5kZWZhdWx0UHJvcHMgPSB7XG4gIGJ1dHRvblN0eWxlOiAnb3V0bGluZSdcbn07XG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9SZWFjdC5tZW1vKFJhZGlvR3JvdXApO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBfZXhwb3J0TmFtZXMgPSB7XG4gIEdyb3VwOiB0cnVlLFxuICBCdXR0b246IHRydWVcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJHcm91cFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfZ3JvdXBbXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkJ1dHRvblwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfcmFkaW9CdXR0b25bXCJkZWZhdWx0XCJdO1xuICB9XG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JhZGlvID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9yYWRpb1wiKSk7XG5cbnZhciBfZ3JvdXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2dyb3VwXCIpKTtcblxudmFyIF9yYWRpb0J1dHRvbiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vcmFkaW9CdXR0b25cIikpO1xuXG52YXIgX2ludGVyZmFjZSA9IHJlcXVpcmUoXCIuL2ludGVyZmFjZVwiKTtcblxuT2JqZWN0LmtleXMoX2ludGVyZmFjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIGlmIChrZXkgPT09IFwiZGVmYXVsdFwiIHx8IGtleSA9PT0gXCJfX2VzTW9kdWxlXCIpIHJldHVybjtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChfZXhwb3J0TmFtZXMsIGtleSkpIHJldHVybjtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gX2ludGVyZmFjZVtrZXldO1xuICAgIH1cbiAgfSk7XG59KTtcbnZhciBSYWRpbyA9IF9yYWRpb1tcImRlZmF1bHRcIl07XG5SYWRpby5CdXR0b24gPSBfcmFkaW9CdXR0b25bXCJkZWZhdWx0XCJdO1xuUmFkaW8uR3JvdXAgPSBfZ3JvdXBbXCJkZWZhdWx0XCJdO1xudmFyIF9kZWZhdWx0ID0gUmFkaW87XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yY0NoZWNrYm94ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtY2hlY2tib3hcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfY29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29udGV4dFwiKSk7XG5cbnZhciBfcmVmID0gcmVxdWlyZShcIi4uL191dGlsL3JlZlwiKTtcblxudmFyIF9kZXZXYXJuaW5nID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vX3V0aWwvZGV2V2FybmluZ1wiKSk7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgSW50ZXJuYWxSYWRpbyA9IGZ1bmN0aW9uIEludGVybmFsUmFkaW8ocHJvcHMsIHJlZikge1xuICB2YXIgX2NsYXNzTmFtZXM7XG5cbiAgdmFyIGNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb250ZXh0W1wiZGVmYXVsdFwiXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHMsXG4gICAgICBkaXJlY3Rpb24gPSBfUmVhY3QkdXNlQ29udGV4dC5kaXJlY3Rpb247XG5cbiAgdmFyIGlubmVyUmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIHZhciBtZXJnZWRSZWYgPSAoMCwgX3JlZi5jb21wb3NlUmVmKShyZWYsIGlubmVyUmVmKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAoMCwgX2Rldldhcm5pbmdbXCJkZWZhdWx0XCJdKSghKCdvcHRpb25UeXBlJyBpbiBwcm9wcyksICdSYWRpbycsICdgb3B0aW9uVHlwZWAgaXMgb25seSBzdXBwb3J0IGluIFJhZGlvLkdyb3VwLicpO1xuICB9LCBbXSk7XG5cbiAgdmFyIG9uQ2hhbmdlID0gZnVuY3Rpb24gb25DaGFuZ2UoZSkge1xuICAgIGlmIChwcm9wcy5vbkNoYW5nZSkge1xuICAgICAgcHJvcHMub25DaGFuZ2UoZSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQgPT09IG51bGwgfHwgY29udGV4dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29udGV4dC5vbkNoYW5nZSkge1xuICAgICAgY29udGV4dC5vbkNoYW5nZShlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgcmVzdFByb3BzID0gX19yZXN0KHByb3BzLCBbXCJwcmVmaXhDbHNcIiwgXCJjbGFzc05hbWVcIiwgXCJjaGlsZHJlblwiLCBcInN0eWxlXCJdKTtcblxuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdyYWRpbycsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIHZhciByYWRpb1Byb3BzID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCByZXN0UHJvcHMpO1xuXG4gIGlmIChjb250ZXh0KSB7XG4gICAgcmFkaW9Qcm9wcy5uYW1lID0gY29udGV4dC5uYW1lO1xuICAgIHJhZGlvUHJvcHMub25DaGFuZ2UgPSBvbkNoYW5nZTtcbiAgICByYWRpb1Byb3BzLmNoZWNrZWQgPSBwcm9wcy52YWx1ZSA9PT0gY29udGV4dC52YWx1ZTtcbiAgICByYWRpb1Byb3BzLmRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQgfHwgY29udGV4dC5kaXNhYmxlZDtcbiAgfVxuXG4gIHZhciB3cmFwcGVyQ2xhc3NTdHJpbmcgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShjbGFzc05hbWUsIChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXdyYXBwZXJcIiksIHRydWUpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXdyYXBwZXItY2hlY2tlZFwiKSwgcmFkaW9Qcm9wcy5jaGVja2VkKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi13cmFwcGVyLWRpc2FibGVkXCIpLCByYWRpb1Byb3BzLmRpc2FibGVkKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi13cmFwcGVyLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksIF9jbGFzc05hbWVzKSk7XG4gIHJldHVybiAoXG4gICAgLyojX19QVVJFX18qL1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBqc3gtYTExeS9sYWJlbC1oYXMtYXNzb2NpYXRlZC1jb250cm9sXG4gICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogd3JhcHBlckNsYXNzU3RyaW5nLFxuICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgb25Nb3VzZUVudGVyOiBwcm9wcy5vbk1vdXNlRW50ZXIsXG4gICAgICBvbk1vdXNlTGVhdmU6IHByb3BzLm9uTW91c2VMZWF2ZVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY0NoZWNrYm94W1wiZGVmYXVsdFwiXSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCByYWRpb1Byb3BzLCB7XG4gICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgIHJlZjogbWVyZ2VkUmVmXG4gICAgfSkpLCBjaGlsZHJlbiAhPT0gdW5kZWZpbmVkID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGNoaWxkcmVuKSA6IG51bGwpXG4gICk7XG59O1xuXG52YXIgUmFkaW8gPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihJbnRlcm5hbFJhZGlvKTtcblJhZGlvLmRpc3BsYXlOYW1lID0gJ1JhZGlvJztcblJhZGlvLmRlZmF1bHRQcm9wcyA9IHtcbiAgdHlwZTogJ3JhZGlvJ1xufTtcbnZhciBfZGVmYXVsdCA9IFJhZGlvO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmFkaW8gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JhZGlvXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfY29udGV4dCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vY29udGV4dFwiKSk7XG5cbnZhciBfX3Jlc3QgPSB2b2lkIDAgJiYgKHZvaWQgMCkuX19yZXN0IHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gIHZhciB0ID0ge307XG5cbiAgZm9yICh2YXIgcCBpbiBzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKSB0W3BdID0gc1twXTtcbiAgfVxuXG4gIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSkgdFtwW2ldXSA9IHNbcFtpXV07XG4gIH1cbiAgcmV0dXJuIHQ7XG59O1xuXG52YXIgUmFkaW9CdXR0b24gPSBmdW5jdGlvbiBSYWRpb0J1dHRvbihwcm9wcywgcmVmKSB7XG4gIHZhciByYWRpb0dyb3VwQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbnRleHRbXCJkZWZhdWx0XCJdKTtcblxuICB2YXIgX1JlYWN0JHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KF9jb25maWdQcm92aWRlci5Db25maWdDb250ZXh0KSxcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscztcblxuICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgcmFkaW9Qcm9wcyA9IF9fcmVzdChwcm9wcywgW1wicHJlZml4Q2xzXCJdKTtcblxuICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdyYWRpby1idXR0b24nLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuXG4gIGlmIChyYWRpb0dyb3VwQ29udGV4dCkge1xuICAgIHJhZGlvUHJvcHMuY2hlY2tlZCA9IHByb3BzLnZhbHVlID09PSByYWRpb0dyb3VwQ29udGV4dC52YWx1ZTtcbiAgICByYWRpb1Byb3BzLmRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQgfHwgcmFkaW9Hcm91cENvbnRleHQuZGlzYWJsZWQ7XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JhZGlvW1wiZGVmYXVsdFwiXSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICBwcmVmaXhDbHM6IHByZWZpeENsc1xuICB9LCByYWRpb1Byb3BzLCB7XG4gICAgdHlwZTogXCJyYWRpb1wiLFxuICAgIHJlZjogcmVmXG4gIH0pKTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKFJhZGlvQnV0dG9uKTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHVzZVNlbGVjdGlvbjtcbmV4cG9ydHMuU0VMRUNUSU9OX0lOVkVSVCA9IGV4cG9ydHMuU0VMRUNUSU9OX0FMTCA9IHZvaWQgMDtcblxudmFyIF90b0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9BcnJheVwiKSk7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpKTtcblxudmFyIF90b0NvbnN1bWFibGVBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9Eb3duT3V0bGluZWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9Eb3duT3V0bGluZWRcIikpO1xuXG52YXIgX3RyZWVVdGlsID0gcmVxdWlyZShcInJjLXRyZWUvbGliL3V0aWxzL3RyZWVVdGlsXCIpO1xuXG52YXIgX2NvbmR1Y3RVdGlsID0gcmVxdWlyZShcInJjLXRyZWUvbGliL3V0aWxzL2NvbmR1Y3RVdGlsXCIpO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKFwicmMtdHJlZS9saWIvdXRpbFwiKTtcblxudmFyIF9yY1RhYmxlID0gcmVxdWlyZShcInJjLXRhYmxlXCIpO1xuXG52YXIgX3VzZU1lcmdlZFN0YXRlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXV0aWwvbGliL2hvb2tzL3VzZU1lcmdlZFN0YXRlXCIpKTtcblxudmFyIF9jaGVja2JveCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL2NoZWNrYm94XCIpKTtcblxudmFyIF9kcm9wZG93biA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL2Ryb3Bkb3duXCIpKTtcblxudmFyIF9tZW51ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vLi4vbWVudVwiKSk7XG5cbnZhciBfcmFkaW8gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi8uLi9yYWRpb1wiKSk7XG5cbnZhciBfZGV2V2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uLy4uL191dGlsL2Rldldhcm5pbmdcIikpO1xuXG4vLyBUT0RPOiB3YXJuaW5nIGlmIHVzZSBhamF4ISEhXG52YXIgU0VMRUNUSU9OX0FMTCA9ICdTRUxFQ1RfQUxMJztcbmV4cG9ydHMuU0VMRUNUSU9OX0FMTCA9IFNFTEVDVElPTl9BTEw7XG52YXIgU0VMRUNUSU9OX0lOVkVSVCA9ICdTRUxFQ1RfSU5WRVJUJztcbmV4cG9ydHMuU0VMRUNUSU9OX0lOVkVSVCA9IFNFTEVDVElPTl9JTlZFUlQ7XG5cbmZ1bmN0aW9uIGdldEZpeGVkVHlwZShjb2x1bW4pIHtcbiAgcmV0dXJuIGNvbHVtbiAmJiBjb2x1bW4uZml4ZWQ7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5EYXRhKGRhdGEsIGNoaWxkcmVuQ29sdW1uTmFtZSkge1xuICB2YXIgbGlzdCA9IFtdO1xuICAoZGF0YSB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbiAocmVjb3JkKSB7XG4gICAgbGlzdC5wdXNoKHJlY29yZCk7XG5cbiAgICBpZiAoY2hpbGRyZW5Db2x1bW5OYW1lIGluIHJlY29yZCkge1xuICAgICAgbGlzdCA9IFtdLmNvbmNhdCgoMCwgX3RvQ29uc3VtYWJsZUFycmF5MltcImRlZmF1bHRcIl0pKGxpc3QpLCAoMCwgX3RvQ29uc3VtYWJsZUFycmF5MltcImRlZmF1bHRcIl0pKGZsYXR0ZW5EYXRhKHJlY29yZFtjaGlsZHJlbkNvbHVtbk5hbWVdLCBjaGlsZHJlbkNvbHVtbk5hbWUpKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGxpc3Q7XG59XG5cbmZ1bmN0aW9uIHVzZVNlbGVjdGlvbihyb3dTZWxlY3Rpb24sIGNvbmZpZykge1xuICB2YXIgX3JlZiA9IHJvd1NlbGVjdGlvbiB8fCB7fSxcbiAgICAgIHByZXNlcnZlU2VsZWN0ZWRSb3dLZXlzID0gX3JlZi5wcmVzZXJ2ZVNlbGVjdGVkUm93S2V5cyxcbiAgICAgIHNlbGVjdGVkUm93S2V5cyA9IF9yZWYuc2VsZWN0ZWRSb3dLZXlzLFxuICAgICAgZ2V0Q2hlY2tib3hQcm9wcyA9IF9yZWYuZ2V0Q2hlY2tib3hQcm9wcyxcbiAgICAgIG9uU2VsZWN0aW9uQ2hhbmdlID0gX3JlZi5vbkNoYW5nZSxcbiAgICAgIG9uU2VsZWN0ID0gX3JlZi5vblNlbGVjdCxcbiAgICAgIG9uU2VsZWN0QWxsID0gX3JlZi5vblNlbGVjdEFsbCxcbiAgICAgIG9uU2VsZWN0SW52ZXJ0ID0gX3JlZi5vblNlbGVjdEludmVydCxcbiAgICAgIG9uU2VsZWN0TXVsdGlwbGUgPSBfcmVmLm9uU2VsZWN0TXVsdGlwbGUsXG4gICAgICBzZWxlY3Rpb25Db2xXaWR0aCA9IF9yZWYuY29sdW1uV2lkdGgsXG4gICAgICBzZWxlY3Rpb25UeXBlID0gX3JlZi50eXBlLFxuICAgICAgc2VsZWN0aW9ucyA9IF9yZWYuc2VsZWN0aW9ucyxcbiAgICAgIGZpeGVkID0gX3JlZi5maXhlZCxcbiAgICAgIGN1c3RvbWl6ZVJlbmRlckNlbGwgPSBfcmVmLnJlbmRlckNlbGwsXG4gICAgICBoaWRlU2VsZWN0QWxsID0gX3JlZi5oaWRlU2VsZWN0QWxsLFxuICAgICAgX3JlZiRjaGVja1N0cmljdGx5ID0gX3JlZi5jaGVja1N0cmljdGx5LFxuICAgICAgY2hlY2tTdHJpY3RseSA9IF9yZWYkY2hlY2tTdHJpY3RseSA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9yZWYkY2hlY2tTdHJpY3RseTtcblxuICB2YXIgcHJlZml4Q2xzID0gY29uZmlnLnByZWZpeENscyxcbiAgICAgIGRhdGEgPSBjb25maWcuZGF0YSxcbiAgICAgIHBhZ2VEYXRhID0gY29uZmlnLnBhZ2VEYXRhLFxuICAgICAgZ2V0UmVjb3JkQnlLZXkgPSBjb25maWcuZ2V0UmVjb3JkQnlLZXksXG4gICAgICBnZXRSb3dLZXkgPSBjb25maWcuZ2V0Um93S2V5LFxuICAgICAgZXhwYW5kVHlwZSA9IGNvbmZpZy5leHBhbmRUeXBlLFxuICAgICAgY2hpbGRyZW5Db2x1bW5OYW1lID0gY29uZmlnLmNoaWxkcmVuQ29sdW1uTmFtZSxcbiAgICAgIHRhYmxlTG9jYWxlID0gY29uZmlnLmxvY2FsZSxcbiAgICAgIGV4cGFuZEljb25Db2x1bW5JbmRleCA9IGNvbmZpZy5leHBhbmRJY29uQ29sdW1uSW5kZXgsXG4gICAgICBnZXRQb3B1cENvbnRhaW5lciA9IGNvbmZpZy5nZXRQb3B1cENvbnRhaW5lcjsgLy8gPT09PT09PT09PT09PT09PT09PT09PT09IENhY2hlcyA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgcHJlc2VydmVSZWNvcmRzUmVmID0gUmVhY3QudXNlUmVmKG5ldyBNYXAoKSk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT0gS2V5cyA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIF91c2VNZXJnZWRTdGF0ZSA9ICgwLCBfdXNlTWVyZ2VkU3RhdGUzW1wiZGVmYXVsdFwiXSkoc2VsZWN0ZWRSb3dLZXlzIHx8IFtdLCB7XG4gICAgdmFsdWU6IHNlbGVjdGVkUm93S2V5c1xuICB9KSxcbiAgICAgIF91c2VNZXJnZWRTdGF0ZTIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX3VzZU1lcmdlZFN0YXRlLCAyKSxcbiAgICAgIG1lcmdlZFNlbGVjdGVkS2V5cyA9IF91c2VNZXJnZWRTdGF0ZTJbMF0sXG4gICAgICBzZXRNZXJnZWRTZWxlY3RlZEtleXMgPSBfdXNlTWVyZ2VkU3RhdGUyWzFdO1xuXG4gIHZhciBfdXNlTWVtbyA9ICgwLCBSZWFjdC51c2VNZW1vKShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNoZWNrU3RyaWN0bHkgPyB7XG4gICAgICBrZXlFbnRpdGllczogbnVsbFxuICAgIH0gOiAoMCwgX3RyZWVVdGlsLmNvbnZlcnREYXRhVG9FbnRpdGllcykoZGF0YSwgdW5kZWZpbmVkLCBnZXRSb3dLZXkpO1xuICB9LCBbZGF0YSwgZ2V0Um93S2V5LCBjaGVja1N0cmljdGx5XSksXG4gICAgICBrZXlFbnRpdGllcyA9IF91c2VNZW1vLmtleUVudGl0aWVzOyAvLyBHZXQgZmxhdHRlbiBkYXRhXG5cblxuICB2YXIgZmxhdHRlZERhdGEgPSAoMCwgUmVhY3QudXNlTWVtbykoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmbGF0dGVuRGF0YShwYWdlRGF0YSwgY2hpbGRyZW5Db2x1bW5OYW1lKTtcbiAgfSwgW3BhZ2VEYXRhLCBjaGlsZHJlbkNvbHVtbk5hbWVdKTsgLy8gR2V0IGFsbCBjaGVja2JveCBwcm9wc1xuXG4gIHZhciBjaGVja2JveFByb3BzTWFwID0gKDAsIFJlYWN0LnVzZU1lbW8pKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWFwID0gbmV3IE1hcCgpO1xuICAgIGZsYXR0ZWREYXRhLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCwgaW5kZXgpIHtcbiAgICAgIHZhciBrZXkgPSBnZXRSb3dLZXkocmVjb3JkLCBpbmRleCk7XG4gICAgICB2YXIgY2hlY2tib3hQcm9wcyA9IChnZXRDaGVja2JveFByb3BzID8gZ2V0Q2hlY2tib3hQcm9wcyhyZWNvcmQpIDogbnVsbCkgfHwge307XG4gICAgICBtYXAuc2V0KGtleSwgY2hlY2tib3hQcm9wcyk7XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICgnY2hlY2tlZCcgaW4gY2hlY2tib3hQcm9wcyB8fCAnZGVmYXVsdENoZWNrZWQnIGluIGNoZWNrYm94UHJvcHMpKSB7XG4gICAgICAgICgwLCBfZGV2V2FybmluZ1tcImRlZmF1bHRcIl0pKGZhbHNlLCAnVGFibGUnLCAnRG8gbm90IHNldCBgY2hlY2tlZGAgb3IgYGRlZmF1bHRDaGVja2VkYCBpbiBgZ2V0Q2hlY2tib3hQcm9wc2AuIFBsZWFzZSB1c2UgYHNlbGVjdGVkUm93S2V5c2AgaW5zdGVhZC4nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbWFwO1xuICB9LCBbZmxhdHRlZERhdGEsIGdldFJvd0tleSwgZ2V0Q2hlY2tib3hQcm9wc10pO1xuICB2YXIgaXNDaGVja2JveERpc2FibGVkID0gKDAsIFJlYWN0LnVzZUNhbGxiYWNrKShmdW5jdGlvbiAocikge1xuICAgIHZhciBfYTtcblxuICAgIHJldHVybiAhISgoX2EgPSBjaGVja2JveFByb3BzTWFwLmdldChnZXRSb3dLZXkocikpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZGlzYWJsZWQpO1xuICB9LCBbY2hlY2tib3hQcm9wc01hcCwgZ2V0Um93S2V5XSk7XG5cbiAgdmFyIF91c2VNZW1vMiA9ICgwLCBSZWFjdC51c2VNZW1vKShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNoZWNrU3RyaWN0bHkpIHtcbiAgICAgIHJldHVybiBbbWVyZ2VkU2VsZWN0ZWRLZXlzLCBbXV07XG4gICAgfVxuXG4gICAgdmFyIF9jb25kdWN0Q2hlY2sgPSAoMCwgX2NvbmR1Y3RVdGlsLmNvbmR1Y3RDaGVjaykobWVyZ2VkU2VsZWN0ZWRLZXlzLCB0cnVlLCBrZXlFbnRpdGllcywgaXNDaGVja2JveERpc2FibGVkKSxcbiAgICAgICAgY2hlY2tlZEtleXMgPSBfY29uZHVjdENoZWNrLmNoZWNrZWRLZXlzLFxuICAgICAgICBoYWxmQ2hlY2tlZEtleXMgPSBfY29uZHVjdENoZWNrLmhhbGZDaGVja2VkS2V5cztcblxuICAgIHJldHVybiBbY2hlY2tlZEtleXMsIGhhbGZDaGVja2VkS2V5c107XG4gIH0sIFttZXJnZWRTZWxlY3RlZEtleXMsIGNoZWNrU3RyaWN0bHksIGtleUVudGl0aWVzLCBpc0NoZWNrYm94RGlzYWJsZWRdKSxcbiAgICAgIF91c2VNZW1vMyA9ICgwLCBfc2xpY2VkVG9BcnJheTJbXCJkZWZhdWx0XCJdKShfdXNlTWVtbzIsIDIpLFxuICAgICAgZGVyaXZlZFNlbGVjdGVkS2V5cyA9IF91c2VNZW1vM1swXSxcbiAgICAgIGRlcml2ZWRIYWxmU2VsZWN0ZWRLZXlzID0gX3VzZU1lbW8zWzFdO1xuXG4gIHZhciBkZXJpdmVkU2VsZWN0ZWRLZXlTZXQgPSAoMCwgUmVhY3QudXNlTWVtbykoZnVuY3Rpb24gKCkge1xuICAgIHZhciBrZXlzID0gc2VsZWN0aW9uVHlwZSA9PT0gJ3JhZGlvJyA/IGRlcml2ZWRTZWxlY3RlZEtleXMuc2xpY2UoMCwgMSkgOiBkZXJpdmVkU2VsZWN0ZWRLZXlzO1xuICAgIHJldHVybiBuZXcgU2V0KGtleXMpO1xuICB9LCBbZGVyaXZlZFNlbGVjdGVkS2V5cywgc2VsZWN0aW9uVHlwZV0pO1xuICB2YXIgZGVyaXZlZEhhbGZTZWxlY3RlZEtleVNldCA9ICgwLCBSZWFjdC51c2VNZW1vKShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHNlbGVjdGlvblR5cGUgPT09ICdyYWRpbycgPyBuZXcgU2V0KCkgOiBuZXcgU2V0KGRlcml2ZWRIYWxmU2VsZWN0ZWRLZXlzKTtcbiAgfSwgW2Rlcml2ZWRIYWxmU2VsZWN0ZWRLZXlzLCBzZWxlY3Rpb25UeXBlXSk7IC8vIFNhdmUgbGFzdCBzZWxlY3RlZCBrZXkgdG8gZW5hYmxlIHJhbmdlIHNlbGVjdGlvblxuXG4gIHZhciBfdXNlU3RhdGUgPSAoMCwgUmVhY3QudXNlU3RhdGUpKG51bGwpLFxuICAgICAgX3VzZVN0YXRlMiA9ICgwLCBfc2xpY2VkVG9BcnJheTJbXCJkZWZhdWx0XCJdKShfdXNlU3RhdGUsIDIpLFxuICAgICAgbGFzdFNlbGVjdGVkS2V5ID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldExhc3RTZWxlY3RlZEtleSA9IF91c2VTdGF0ZTJbMV07IC8vIFJlc2V0IGlmIHJvd1NlbGVjdGlvbiByZXNldFxuXG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXJvd1NlbGVjdGlvbikge1xuICAgICAgc2V0TWVyZ2VkU2VsZWN0ZWRLZXlzKFtdKTtcbiAgICB9XG4gIH0sIFshIXJvd1NlbGVjdGlvbl0pO1xuICB2YXIgc2V0U2VsZWN0ZWRLZXlzID0gKDAsIFJlYWN0LnVzZUNhbGxiYWNrKShmdW5jdGlvbiAoa2V5cykge1xuICAgIHZhciBhdmFpbGFibGVLZXlzO1xuICAgIHZhciByZWNvcmRzO1xuXG4gICAgaWYgKHByZXNlcnZlU2VsZWN0ZWRSb3dLZXlzKSB7XG4gICAgICAvLyBLZWVwIGtleSBpZiBtYXJrIGFzIHByZXNlcnZlU2VsZWN0ZWRSb3dLZXlzXG4gICAgICB2YXIgbmV3Q2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgICBhdmFpbGFibGVLZXlzID0ga2V5cztcbiAgICAgIHJlY29yZHMgPSBrZXlzLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciByZWNvcmQgPSBnZXRSZWNvcmRCeUtleShrZXkpO1xuXG4gICAgICAgIGlmICghcmVjb3JkICYmIHByZXNlcnZlUmVjb3Jkc1JlZi5jdXJyZW50LmhhcyhrZXkpKSB7XG4gICAgICAgICAgcmVjb3JkID0gcHJlc2VydmVSZWNvcmRzUmVmLmN1cnJlbnQuZ2V0KGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDYWNoZS5zZXQoa2V5LCByZWNvcmQpO1xuICAgICAgICByZXR1cm4gcmVjb3JkO1xuICAgICAgfSk7IC8vIFJlZnJlc2ggdG8gbmV3IGNhY2hlXG5cbiAgICAgIHByZXNlcnZlUmVjb3Jkc1JlZi5jdXJyZW50ID0gbmV3Q2FjaGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEZpbHRlciBrZXkgd2hpY2ggbm90IGV4aXN0IGluIHRoZSBgZGF0YVNvdXJjZWBcbiAgICAgIGF2YWlsYWJsZUtleXMgPSBbXTtcbiAgICAgIHJlY29yZHMgPSBbXTtcbiAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciByZWNvcmQgPSBnZXRSZWNvcmRCeUtleShrZXkpO1xuXG4gICAgICAgIGlmIChyZWNvcmQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGF2YWlsYWJsZUtleXMucHVzaChrZXkpO1xuICAgICAgICAgIHJlY29yZHMucHVzaChyZWNvcmQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRNZXJnZWRTZWxlY3RlZEtleXMoYXZhaWxhYmxlS2V5cyk7XG5cbiAgICBpZiAob25TZWxlY3Rpb25DaGFuZ2UpIHtcbiAgICAgIG9uU2VsZWN0aW9uQ2hhbmdlKGF2YWlsYWJsZUtleXMsIHJlY29yZHMpO1xuICAgIH1cbiAgfSwgW3NldE1lcmdlZFNlbGVjdGVkS2V5cywgZ2V0UmVjb3JkQnlLZXksIG9uU2VsZWN0aW9uQ2hhbmdlLCBwcmVzZXJ2ZVNlbGVjdGVkUm93S2V5c10pOyAvLyA9PT09PT09PT09PT09PT09PT09PT09IFNlbGVjdGlvbnMgPT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBUcmlnZ2VyIHNpbmdsZSBgb25TZWxlY3RgIGV2ZW50XG5cbiAgdmFyIHRyaWdnZXJTaW5nbGVTZWxlY3Rpb24gPSAoMCwgUmVhY3QudXNlQ2FsbGJhY2spKGZ1bmN0aW9uIChrZXksIHNlbGVjdGVkLCBrZXlzLCBldmVudCkge1xuICAgIGlmIChvblNlbGVjdCkge1xuICAgICAgdmFyIHJvd3MgPSBrZXlzLm1hcChmdW5jdGlvbiAoaykge1xuICAgICAgICByZXR1cm4gZ2V0UmVjb3JkQnlLZXkoayk7XG4gICAgICB9KTtcbiAgICAgIG9uU2VsZWN0KGdldFJlY29yZEJ5S2V5KGtleSksIHNlbGVjdGVkLCByb3dzLCBldmVudCk7XG4gICAgfVxuXG4gICAgc2V0U2VsZWN0ZWRLZXlzKGtleXMpO1xuICB9LCBbb25TZWxlY3QsIGdldFJlY29yZEJ5S2V5LCBzZXRTZWxlY3RlZEtleXNdKTtcbiAgdmFyIG1lcmdlZFNlbGVjdGlvbnMgPSAoMCwgUmVhY3QudXNlTWVtbykoZnVuY3Rpb24gKCkge1xuICAgIGlmICghc2VsZWN0aW9ucyB8fCBoaWRlU2VsZWN0QWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgc2VsZWN0aW9uTGlzdCA9IHNlbGVjdGlvbnMgPT09IHRydWUgPyBbU0VMRUNUSU9OX0FMTCwgU0VMRUNUSU9OX0lOVkVSVF0gOiBzZWxlY3Rpb25zO1xuICAgIHJldHVybiBzZWxlY3Rpb25MaXN0Lm1hcChmdW5jdGlvbiAoc2VsZWN0aW9uKSB7XG4gICAgICBpZiAoc2VsZWN0aW9uID09PSBTRUxFQ1RJT05fQUxMKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2V5OiAnYWxsJyxcbiAgICAgICAgICB0ZXh0OiB0YWJsZUxvY2FsZS5zZWxlY3Rpb25BbGwsXG4gICAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KCkge1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRLZXlzKGRhdGEubWFwKGZ1bmN0aW9uIChyZWNvcmQsIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBnZXRSb3dLZXkocmVjb3JkLCBpbmRleCk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoc2VsZWN0aW9uID09PSBTRUxFQ1RJT05fSU5WRVJUKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2V5OiAnaW52ZXJ0JyxcbiAgICAgICAgICB0ZXh0OiB0YWJsZUxvY2FsZS5zZWxlY3RJbnZlcnQsXG4gICAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIG9uU2VsZWN0KCkge1xuICAgICAgICAgICAgdmFyIGtleVNldCA9IG5ldyBTZXQoZGVyaXZlZFNlbGVjdGVkS2V5U2V0KTtcbiAgICAgICAgICAgIHBhZ2VEYXRhLmZvckVhY2goZnVuY3Rpb24gKHJlY29yZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgdmFyIGtleSA9IGdldFJvd0tleShyZWNvcmQsIGluZGV4KTtcblxuICAgICAgICAgICAgICBpZiAoa2V5U2V0LmhhcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAga2V5U2V0W1wiZGVsZXRlXCJdKGtleSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAga2V5U2V0LmFkZChrZXkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBrZXlzID0gQXJyYXkuZnJvbShrZXlTZXQpO1xuICAgICAgICAgICAgc2V0U2VsZWN0ZWRLZXlzKGtleXMpO1xuXG4gICAgICAgICAgICBpZiAob25TZWxlY3RJbnZlcnQpIHtcbiAgICAgICAgICAgICAgKDAsIF9kZXZXYXJuaW5nW1wiZGVmYXVsdFwiXSkoZmFsc2UsICdUYWJsZScsICdgb25TZWxlY3RJbnZlcnRgIHdpbGwgYmUgcmVtb3ZlZCBpbiBmdXR1cmUuIFBsZWFzZSB1c2UgYG9uQ2hhbmdlYCBpbnN0ZWFkLicpO1xuICAgICAgICAgICAgICBvblNlbGVjdEludmVydChrZXlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZWxlY3Rpb247XG4gICAgfSk7XG4gIH0sIFtzZWxlY3Rpb25zLCBkZXJpdmVkU2VsZWN0ZWRLZXlTZXQsIHBhZ2VEYXRhLCBnZXRSb3dLZXksIG9uU2VsZWN0SW52ZXJ0LCBzZXRTZWxlY3RlZEtleXNdKTsgLy8gPT09PT09PT09PT09PT09PT09PT09PT0gQ29sdW1ucyA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgdHJhbnNmb3JtQ29sdW1ucyA9ICgwLCBSZWFjdC51c2VDYWxsYmFjaykoZnVuY3Rpb24gKGNvbHVtbnMpIHtcbiAgICBpZiAoIXJvd1NlbGVjdGlvbikge1xuICAgICAgcmV0dXJuIGNvbHVtbnM7XG4gICAgfSAvLyBTdXBwb3J0IHNlbGVjdGlvblxuXG5cbiAgICB2YXIga2V5U2V0ID0gbmV3IFNldChkZXJpdmVkU2VsZWN0ZWRLZXlTZXQpOyAvLyBSZWNvcmQga2V5IG9ubHkgbmVlZCBjaGVjayB3aXRoIGVuYWJsZWRcblxuICAgIHZhciByZWNvcmRLZXlzID0gZmxhdHRlZERhdGEubWFwKGdldFJvd0tleSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiAhY2hlY2tib3hQcm9wc01hcC5nZXQoa2V5KS5kaXNhYmxlZDtcbiAgICB9KTtcbiAgICB2YXIgY2hlY2tlZEN1cnJlbnRBbGwgPSByZWNvcmRLZXlzLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBrZXlTZXQuaGFzKGtleSk7XG4gICAgfSk7XG4gICAgdmFyIGNoZWNrZWRDdXJyZW50U29tZSA9IHJlY29yZEtleXMuc29tZShmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4ga2V5U2V0LmhhcyhrZXkpO1xuICAgIH0pO1xuXG4gICAgdmFyIG9uU2VsZWN0QWxsQ2hhbmdlID0gZnVuY3Rpb24gb25TZWxlY3RBbGxDaGFuZ2UoKSB7XG4gICAgICB2YXIgY2hhbmdlS2V5cyA9IFtdO1xuXG4gICAgICBpZiAoY2hlY2tlZEN1cnJlbnRBbGwpIHtcbiAgICAgICAgcmVjb3JkS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBrZXlTZXRbXCJkZWxldGVcIl0oa2V5KTtcbiAgICAgICAgICBjaGFuZ2VLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWNvcmRLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgIGlmICgha2V5U2V0LmhhcyhrZXkpKSB7XG4gICAgICAgICAgICBrZXlTZXQuYWRkKGtleSk7XG4gICAgICAgICAgICBjaGFuZ2VLZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIga2V5cyA9IEFycmF5LmZyb20oa2V5U2V0KTtcbiAgICAgIHNldFNlbGVjdGVkS2V5cyhrZXlzKTtcblxuICAgICAgaWYgKG9uU2VsZWN0QWxsKSB7XG4gICAgICAgIG9uU2VsZWN0QWxsKCFjaGVja2VkQ3VycmVudEFsbCwga2V5cy5tYXAoZnVuY3Rpb24gKGspIHtcbiAgICAgICAgICByZXR1cm4gZ2V0UmVjb3JkQnlLZXkoayk7XG4gICAgICAgIH0pLCBjaGFuZ2VLZXlzLm1hcChmdW5jdGlvbiAoaykge1xuICAgICAgICAgIHJldHVybiBnZXRSZWNvcmRCeUtleShrKTtcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH07IC8vID09PT09PT09PT09PT09PT09PT09PSBSZW5kZXIgPT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gVGl0bGUgQ2VsbFxuXG5cbiAgICB2YXIgdGl0bGU7XG5cbiAgICBpZiAoc2VsZWN0aW9uVHlwZSAhPT0gJ3JhZGlvJykge1xuICAgICAgdmFyIGN1c3RvbWl6ZVNlbGVjdGlvbnM7XG5cbiAgICAgIGlmIChtZXJnZWRTZWxlY3Rpb25zKSB7XG4gICAgICAgIHZhciBtZW51ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX21lbnVbXCJkZWZhdWx0XCJdLCB7XG4gICAgICAgICAgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyXG4gICAgICAgIH0sIG1lcmdlZFNlbGVjdGlvbnMubWFwKGZ1bmN0aW9uIChzZWxlY3Rpb24sIGluZGV4KSB7XG4gICAgICAgICAgdmFyIGtleSA9IHNlbGVjdGlvbi5rZXksXG4gICAgICAgICAgICAgIHRleHQgPSBzZWxlY3Rpb24udGV4dCxcbiAgICAgICAgICAgICAgb25TZWxlY3Rpb25DbGljayA9IHNlbGVjdGlvbi5vblNlbGVjdDtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX21lbnVbXCJkZWZhdWx0XCJdLkl0ZW0sIHtcbiAgICAgICAgICAgIGtleToga2V5IHx8IGluZGV4LFxuICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgICAgICAgaWYgKG9uU2VsZWN0aW9uQ2xpY2spIHtcbiAgICAgICAgICAgICAgICBvblNlbGVjdGlvbkNsaWNrKHJlY29yZEtleXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgdGV4dCk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgY3VzdG9taXplU2VsZWN0aW9ucyA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2VsZWN0aW9uLWV4dHJhXCIpXG4gICAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9kcm9wZG93bltcImRlZmF1bHRcIl0sIHtcbiAgICAgICAgICBvdmVybGF5OiBtZW51LFxuICAgICAgICAgIGdldFBvcHVwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lclxuICAgICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX0Rvd25PdXRsaW5lZFtcImRlZmF1bHRcIl0sIG51bGwpKSkpO1xuICAgICAgfVxuXG4gICAgICB2YXIgYWxsRGlzYWJsZWQgPSBmbGF0dGVkRGF0YS5ldmVyeShmdW5jdGlvbiAocmVjb3JkLCBpbmRleCkge1xuICAgICAgICB2YXIga2V5ID0gZ2V0Um93S2V5KHJlY29yZCwgaW5kZXgpO1xuICAgICAgICB2YXIgY2hlY2tib3hQcm9wcyA9IGNoZWNrYm94UHJvcHNNYXAuZ2V0KGtleSkgfHwge307XG4gICAgICAgIHJldHVybiBjaGVja2JveFByb3BzLmRpc2FibGVkO1xuICAgICAgfSk7XG4gICAgICB0aXRsZSA9ICFoaWRlU2VsZWN0QWxsICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXNlbGVjdGlvblwiKVxuICAgICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX2NoZWNrYm94W1wiZGVmYXVsdFwiXSwge1xuICAgICAgICBjaGVja2VkOiAhYWxsRGlzYWJsZWQgJiYgISFmbGF0dGVkRGF0YS5sZW5ndGggJiYgY2hlY2tlZEN1cnJlbnRBbGwsXG4gICAgICAgIGluZGV0ZXJtaW5hdGU6ICFjaGVja2VkQ3VycmVudEFsbCAmJiBjaGVja2VkQ3VycmVudFNvbWUsXG4gICAgICAgIG9uQ2hhbmdlOiBvblNlbGVjdEFsbENoYW5nZSxcbiAgICAgICAgZGlzYWJsZWQ6IGZsYXR0ZWREYXRhLmxlbmd0aCA9PT0gMCB8fCBhbGxEaXNhYmxlZFxuICAgICAgfSksIGN1c3RvbWl6ZVNlbGVjdGlvbnMpO1xuICAgIH0gLy8gQm9keSBDZWxsXG5cblxuICAgIHZhciByZW5kZXJDZWxsO1xuXG4gICAgaWYgKHNlbGVjdGlvblR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgIHJlbmRlckNlbGwgPSBmdW5jdGlvbiByZW5kZXJDZWxsKF8sIHJlY29yZCwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGtleSA9IGdldFJvd0tleShyZWNvcmQsIGluZGV4KTtcbiAgICAgICAgdmFyIGNoZWNrZWQgPSBrZXlTZXQuaGFzKGtleSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbm9kZTogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JhZGlvW1wiZGVmYXVsdFwiXSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBjaGVja2JveFByb3BzTWFwLmdldChrZXkpLCB7XG4gICAgICAgICAgICBjaGVja2VkOiBjaGVja2VkLFxuICAgICAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xuICAgICAgICAgICAgICBpZiAoIWtleVNldC5oYXMoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRyaWdnZXJTaW5nbGVTZWxlY3Rpb24oa2V5LCB0cnVlLCBba2V5XSwgZXZlbnQubmF0aXZlRXZlbnQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpLFxuICAgICAgICAgIGNoZWNrZWQ6IGNoZWNrZWRcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbmRlckNlbGwgPSBmdW5jdGlvbiByZW5kZXJDZWxsKF8sIHJlY29yZCwgaW5kZXgpIHtcbiAgICAgICAgdmFyIGtleSA9IGdldFJvd0tleShyZWNvcmQsIGluZGV4KTtcbiAgICAgICAgdmFyIGNoZWNrZWQgPSBrZXlTZXQuaGFzKGtleSk7XG4gICAgICAgIHZhciBpbmRldGVybWluYXRlID0gZGVyaXZlZEhhbGZTZWxlY3RlZEtleVNldC5oYXMoa2V5KTsgLy8gUmVjb3JkIGNoZWNrZWRcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5vZGU6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jaGVja2JveFtcImRlZmF1bHRcIl0sICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgY2hlY2tib3hQcm9wc01hcC5nZXQoa2V5KSwge1xuICAgICAgICAgICAgY2hlY2tlZDogY2hlY2tlZCxcbiAgICAgICAgICAgIGluZGV0ZXJtaW5hdGU6IGluZGV0ZXJtaW5hdGUsXG4gICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKF9yZWYyKSB7XG4gICAgICAgICAgICAgIHZhciBuYXRpdmVFdmVudCA9IF9yZWYyLm5hdGl2ZUV2ZW50O1xuICAgICAgICAgICAgICB2YXIgc2hpZnRLZXkgPSBuYXRpdmVFdmVudC5zaGlmdEtleTtcbiAgICAgICAgICAgICAgdmFyIHN0YXJ0SW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgdmFyIGVuZEluZGV4ID0gLTE7IC8vIEdldCByYW5nZSBvZiB0aGlzXG5cbiAgICAgICAgICAgICAgaWYgKHNoaWZ0S2V5ICYmIGNoZWNrU3RyaWN0bHkpIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnRLZXlzID0gbmV3IFNldChbbGFzdFNlbGVjdGVkS2V5LCBrZXldKTtcbiAgICAgICAgICAgICAgICByZWNvcmRLZXlzLnNvbWUoZnVuY3Rpb24gKHJlY29yZEtleSwgcmVjb3JkSW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChwb2ludEtleXMuaGFzKHJlY29yZEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJ0SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhcnRJbmRleCA9IHJlY29yZEluZGV4O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGVuZEluZGV4ID0gcmVjb3JkSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGVuZEluZGV4ICE9PSAtMSAmJiBzdGFydEluZGV4ICE9PSBlbmRJbmRleCAmJiBjaGVja1N0cmljdGx5KSB7XG4gICAgICAgICAgICAgICAgLy8gQmF0Y2ggdXBkYXRlIHNlbGVjdGlvbnNcbiAgICAgICAgICAgICAgICB2YXIgcmFuZ2VLZXlzID0gcmVjb3JkS2V5cy5zbGljZShzdGFydEluZGV4LCBlbmRJbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIHZhciBjaGFuZ2VkS2V5cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJhbmdlS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleVNldC5oYXMocmVjb3JkS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZWRLZXlzLnB1c2gocmVjb3JkS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICBrZXlTZXRbXCJkZWxldGVcIl0ocmVjb3JkS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJhbmdlS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChyZWNvcmRLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFrZXlTZXQuaGFzKHJlY29yZEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VkS2V5cy5wdXNoKHJlY29yZEtleSk7XG4gICAgICAgICAgICAgICAgICAgICAga2V5U2V0LmFkZChyZWNvcmRLZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIga2V5cyA9IEFycmF5LmZyb20oa2V5U2V0KTtcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZEtleXMoa2V5cyk7XG5cbiAgICAgICAgICAgICAgICBpZiAob25TZWxlY3RNdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgICAgb25TZWxlY3RNdWx0aXBsZSghY2hlY2tlZCwga2V5cy5tYXAoZnVuY3Rpb24gKHJlY29yZEtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVjb3JkQnlLZXkocmVjb3JkS2V5KTtcbiAgICAgICAgICAgICAgICAgIH0pLCBjaGFuZ2VkS2V5cy5tYXAoZnVuY3Rpb24gKHJlY29yZEtleSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0UmVjb3JkQnlLZXkocmVjb3JkS2V5KTtcbiAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gU2luZ2xlIHJlY29yZCBzZWxlY3RlZFxuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5DaGVja2VkS2V5cyA9IGRlcml2ZWRTZWxlY3RlZEtleXM7XG5cbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tTdHJpY3RseSkge1xuICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrZWRLZXlzID0gY2hlY2tlZCA/ICgwLCBfdXRpbC5hcnJEZWwpKG9yaWdpbkNoZWNrZWRLZXlzLCBrZXkpIDogKDAsIF91dGlsLmFyckFkZCkob3JpZ2luQ2hlY2tlZEtleXMsIGtleSk7XG4gICAgICAgICAgICAgICAgICB0cmlnZ2VyU2luZ2xlU2VsZWN0aW9uKGtleSwgIWNoZWNrZWQsIGNoZWNrZWRLZXlzLCBuYXRpdmVFdmVudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vIEFsd2F5cyBmaWxsIGZpcnN0XG4gICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gKDAsIF9jb25kdWN0VXRpbC5jb25kdWN0Q2hlY2spKFtdLmNvbmNhdCgoMCwgX3RvQ29uc3VtYWJsZUFycmF5MltcImRlZmF1bHRcIl0pKG9yaWdpbkNoZWNrZWRLZXlzKSwgW2tleV0pLCB0cnVlLCBrZXlFbnRpdGllcywgaXNDaGVja2JveERpc2FibGVkKTtcbiAgICAgICAgICAgICAgICAgIHZhciBfY2hlY2tlZEtleXMgPSByZXN1bHQuY2hlY2tlZEtleXMsXG4gICAgICAgICAgICAgICAgICAgICAgaGFsZkNoZWNrZWRLZXlzID0gcmVzdWx0LmhhbGZDaGVja2VkS2V5cztcbiAgICAgICAgICAgICAgICAgIHZhciBuZXh0Q2hlY2tlZEtleXMgPSBfY2hlY2tlZEtleXM7IC8vIElmIHJlbW92ZSwgd2UgZG8gaXQgYWdhaW4gdG8gY29ycmVjdGlvblxuXG4gICAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcEtleVNldCA9IG5ldyBTZXQoX2NoZWNrZWRLZXlzKTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcEtleVNldFtcImRlbGV0ZVwiXShrZXkpO1xuICAgICAgICAgICAgICAgICAgICBuZXh0Q2hlY2tlZEtleXMgPSAoMCwgX2NvbmR1Y3RVdGlsLmNvbmR1Y3RDaGVjaykoQXJyYXkuZnJvbSh0ZW1wS2V5U2V0KSwge1xuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgIGhhbGZDaGVja2VkS2V5czogaGFsZkNoZWNrZWRLZXlzXG4gICAgICAgICAgICAgICAgICAgIH0sIGtleUVudGl0aWVzLCBpc0NoZWNrYm94RGlzYWJsZWQpLmNoZWNrZWRLZXlzO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0cmlnZ2VyU2luZ2xlU2VsZWN0aW9uKGtleSwgIWNoZWNrZWQsIG5leHRDaGVja2VkS2V5cywgbmF0aXZlRXZlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHNldExhc3RTZWxlY3RlZEtleShrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKSxcbiAgICAgICAgICBjaGVja2VkOiBjaGVja2VkXG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH1cblxuICAgIHZhciByZW5kZXJTZWxlY3Rpb25DZWxsID0gZnVuY3Rpb24gcmVuZGVyU2VsZWN0aW9uQ2VsbChfLCByZWNvcmQsIGluZGV4KSB7XG4gICAgICB2YXIgX3JlbmRlckNlbGwgPSByZW5kZXJDZWxsKF8sIHJlY29yZCwgaW5kZXgpLFxuICAgICAgICAgIG5vZGUgPSBfcmVuZGVyQ2VsbC5ub2RlLFxuICAgICAgICAgIGNoZWNrZWQgPSBfcmVuZGVyQ2VsbC5jaGVja2VkO1xuXG4gICAgICBpZiAoY3VzdG9taXplUmVuZGVyQ2VsbCkge1xuICAgICAgICByZXR1cm4gY3VzdG9taXplUmVuZGVyQ2VsbChjaGVja2VkLCByZWNvcmQsIGluZGV4LCBub2RlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfTsgLy8gQ29sdW1uc1xuXG5cbiAgICB2YXIgc2VsZWN0aW9uQ29sdW1uID0gKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSh7XG4gICAgICB3aWR0aDogc2VsZWN0aW9uQ29sV2lkdGgsXG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2VsZWN0aW9uLWNvbHVtblwiKSxcbiAgICAgIHRpdGxlOiByb3dTZWxlY3Rpb24uY29sdW1uVGl0bGUgfHwgdGl0bGUsXG4gICAgICByZW5kZXI6IHJlbmRlclNlbGVjdGlvbkNlbGxcbiAgICB9LCBfcmNUYWJsZS5JTlRFUk5BTF9DT0xfREVGSU5FLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc2VsZWN0aW9uLWNvbFwiKVxuICAgIH0pO1xuXG4gICAgaWYgKGV4cGFuZFR5cGUgPT09ICdyb3cnICYmIGNvbHVtbnMubGVuZ3RoICYmICFleHBhbmRJY29uQ29sdW1uSW5kZXgpIHtcbiAgICAgIHZhciBfY29sdW1ucyA9ICgwLCBfdG9BcnJheTJbXCJkZWZhdWx0XCJdKShjb2x1bW5zKSxcbiAgICAgICAgICBleHBhbmRDb2x1bW4gPSBfY29sdW1uc1swXSxcbiAgICAgICAgICByZXN0Q29sdW1ucyA9IF9jb2x1bW5zLnNsaWNlKDEpO1xuXG4gICAgICB2YXIgc2VsZWN0aW9uRml4ZWQgPSBmaXhlZCB8fCBnZXRGaXhlZFR5cGUocmVzdENvbHVtbnNbMF0pO1xuXG4gICAgICBpZiAoc2VsZWN0aW9uRml4ZWQpIHtcbiAgICAgICAgZXhwYW5kQ29sdW1uLmZpeGVkID0gc2VsZWN0aW9uRml4ZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbZXhwYW5kQ29sdW1uLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBzZWxlY3Rpb25Db2x1bW4pLCB7XG4gICAgICAgIGZpeGVkOiBzZWxlY3Rpb25GaXhlZFxuICAgICAgfSldLmNvbmNhdCgoMCwgX3RvQ29uc3VtYWJsZUFycmF5MltcImRlZmF1bHRcIl0pKHJlc3RDb2x1bW5zKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFsoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBzZWxlY3Rpb25Db2x1bW4pLCB7XG4gICAgICBmaXhlZDogZml4ZWQgfHwgZ2V0Rml4ZWRUeXBlKGNvbHVtbnNbMF0pXG4gICAgfSldLmNvbmNhdCgoMCwgX3RvQ29uc3VtYWJsZUFycmF5MltcImRlZmF1bHRcIl0pKGNvbHVtbnMpKTtcbiAgfSwgW2dldFJvd0tleSwgZmxhdHRlZERhdGEsIHJvd1NlbGVjdGlvbiwgZGVyaXZlZFNlbGVjdGVkS2V5cywgZGVyaXZlZFNlbGVjdGVkS2V5U2V0LCBkZXJpdmVkSGFsZlNlbGVjdGVkS2V5U2V0LCBzZWxlY3Rpb25Db2xXaWR0aCwgbWVyZ2VkU2VsZWN0aW9ucywgZXhwYW5kVHlwZSwgbGFzdFNlbGVjdGVkS2V5LCBjaGVja2JveFByb3BzTWFwLCBvblNlbGVjdE11bHRpcGxlLCB0cmlnZ2VyU2luZ2xlU2VsZWN0aW9uLCBpc0NoZWNrYm94RGlzYWJsZWRdKTtcbiAgcmV0dXJuIFt0cmFuc2Zvcm1Db2x1bW5zLCBkZXJpdmVkU2VsZWN0ZWRLZXlTZXRdO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgbG9jYWxlID0ge1xuICBwbGFjZWhvbGRlcjogJ1NlbGVjdCB0aW1lJyxcbiAgcmFuZ2VQbGFjZWhvbGRlcjogWydTdGFydCB0aW1lJywgJ0VuZCB0aW1lJ11cbn07XG52YXIgX2RlZmF1bHQgPSBsb2NhbGU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5XCIpKTtcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmNUb29sdGlwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtdG9vbHRpcFwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX3BsYWNlbWVudHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BsYWNlbWVudHNcIikpO1xuXG52YXIgX3JlYWN0Tm9kZSA9IHJlcXVpcmUoXCIuLi9fdXRpbC9yZWFjdE5vZGVcIik7XG5cbnZhciBfY29uZmlnUHJvdmlkZXIgPSByZXF1aXJlKFwiLi4vY29uZmlnLXByb3ZpZGVyXCIpO1xuXG52YXIgX2NvbG9ycyA9IHJlcXVpcmUoXCIuLi9fdXRpbC9jb2xvcnNcIik7XG5cbnZhciBzcGxpdE9iamVjdCA9IGZ1bmN0aW9uIHNwbGl0T2JqZWN0KG9iaiwga2V5cykge1xuICB2YXIgcGlja2VkID0ge307XG4gIHZhciBvbWl0dGVkID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBvYmopO1xuICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChvYmogJiYga2V5IGluIG9iaikge1xuICAgICAgcGlja2VkW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIGRlbGV0ZSBvbWl0dGVkW2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwaWNrZWQ6IHBpY2tlZCxcbiAgICBvbWl0dGVkOiBvbWl0dGVkXG4gIH07XG59O1xuXG52YXIgUHJlc2V0Q29sb3JSZWdleCA9IG5ldyBSZWdFeHAoXCJeKFwiLmNvbmNhdChfY29sb3JzLlByZXNldENvbG9yVHlwZXMuam9pbignfCcpLCBcIikoLWludmVyc2UpPyRcIikpOyAvLyBGaXggVG9vbHRpcCB3b24ndCBoaWRlIGF0IGRpc2FibGVkIGJ1dHRvblxuLy8gbW91c2UgZXZlbnRzIGRvbid0IHRyaWdnZXIgYXQgZGlzYWJsZWQgYnV0dG9uIGluIENocm9tZVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0LWNvbXBvbmVudC90b29sdGlwL2lzc3Vlcy8xOFxuXG5mdW5jdGlvbiBnZXREaXNhYmxlZENvbXBhdGlibGVDaGlsZHJlbihlbGVtZW50LCBwcmVmaXhDbHMpIHtcbiAgdmFyIGVsZW1lbnRUeXBlID0gZWxlbWVudC50eXBlO1xuXG4gIGlmICgoZWxlbWVudFR5cGUuX19BTlRfQlVUVE9OID09PSB0cnVlIHx8IGVsZW1lbnRUeXBlLl9fQU5UX1NXSVRDSCA9PT0gdHJ1ZSB8fCBlbGVtZW50VHlwZS5fX0FOVF9DSEVDS0JPWCA9PT0gdHJ1ZSB8fCBlbGVtZW50LnR5cGUgPT09ICdidXR0b24nKSAmJiBlbGVtZW50LnByb3BzLmRpc2FibGVkKSB7XG4gICAgLy8gUGljayBzb21lIGxheW91dCByZWxhdGVkIHN0eWxlIHByb3BlcnRpZXMgdXAgdG8gc3BhblxuICAgIC8vIFByZXZlbnQgbGF5b3V0IGJ1Z3MgbGlrZSBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL2lzc3Vlcy81MjU0XG4gICAgdmFyIF9zcGxpdE9iamVjdCA9IHNwbGl0T2JqZWN0KGVsZW1lbnQucHJvcHMuc3R5bGUsIFsncG9zaXRpb24nLCAnbGVmdCcsICdyaWdodCcsICd0b3AnLCAnYm90dG9tJywgJ2Zsb2F0JywgJ2Rpc3BsYXknLCAnekluZGV4J10pLFxuICAgICAgICBwaWNrZWQgPSBfc3BsaXRPYmplY3QucGlja2VkLFxuICAgICAgICBvbWl0dGVkID0gX3NwbGl0T2JqZWN0Lm9taXR0ZWQ7XG5cbiAgICB2YXIgc3BhblN0eWxlID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ1xuICAgIH0sIHBpY2tlZCksIHtcbiAgICAgIGN1cnNvcjogJ25vdC1hbGxvd2VkJyxcbiAgICAgIHdpZHRoOiBlbGVtZW50LnByb3BzLmJsb2NrID8gJzEwMCUnIDogbnVsbFxuICAgIH0pO1xuICAgIHZhciBidXR0b25TdHlsZSA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIG9taXR0ZWQpLCB7XG4gICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZSdcbiAgICB9KTtcbiAgICB2YXIgY2hpbGQgPSAoMCwgX3JlYWN0Tm9kZS5jbG9uZUVsZW1lbnQpKGVsZW1lbnQsIHtcbiAgICAgIHN0eWxlOiBidXR0b25TdHlsZSxcbiAgICAgIGNsYXNzTmFtZTogbnVsbFxuICAgIH0pO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgc3R5bGU6IHNwYW5TdHlsZSxcbiAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoZWxlbWVudC5wcm9wcy5jbGFzc05hbWUsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItZGlzYWJsZWQtY29tcGF0aWJsZS13cmFwcGVyXCIpKVxuICAgIH0sIGNoaWxkKTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG52YXIgVG9vbHRpcCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gIHZhciBfY2xhc3NOYW1lczI7XG5cbiAgdmFyIF9SZWFjdCR1c2VDb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChfY29uZmlnUHJvdmlkZXIuQ29uZmlnQ29udGV4dCksXG4gICAgICBnZXRDb250ZXh0UG9wdXBDb250YWluZXIgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgIGdldFByZWZpeENscyA9IF9SZWFjdCR1c2VDb250ZXh0LmdldFByZWZpeENscyxcbiAgICAgIGRpcmVjdGlvbiA9IF9SZWFjdCR1c2VDb250ZXh0LmRpcmVjdGlvbjtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoISFwcm9wcy52aXNpYmxlIHx8ICEhcHJvcHMuZGVmYXVsdFZpc2libGUpLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9ICgwLCBfc2xpY2VkVG9BcnJheTJbXCJkZWZhdWx0XCJdKShfUmVhY3QkdXNlU3RhdGUsIDIpLFxuICAgICAgdmlzaWJsZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRWaXNpYmxlID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICgndmlzaWJsZScgaW4gcHJvcHMpIHtcbiAgICAgIHNldFZpc2libGUocHJvcHMudmlzaWJsZSk7XG4gICAgfVxuICB9LCBbcHJvcHMudmlzaWJsZV0pO1xuXG4gIHZhciBpc05vVGl0bGUgPSBmdW5jdGlvbiBpc05vVGl0bGUoKSB7XG4gICAgdmFyIHRpdGxlID0gcHJvcHMudGl0bGUsXG4gICAgICAgIG92ZXJsYXkgPSBwcm9wcy5vdmVybGF5O1xuICAgIHJldHVybiAhdGl0bGUgJiYgIW92ZXJsYXkgJiYgdGl0bGUgIT09IDA7IC8vIG92ZXJsYXkgZm9yIG9sZCB2ZXJzaW9uIGNvbXBhdGliaWxpdHlcbiAgfTtcblxuICB2YXIgb25WaXNpYmxlQ2hhbmdlID0gZnVuY3Rpb24gb25WaXNpYmxlQ2hhbmdlKHZpcykge1xuICAgIGlmICghKCd2aXNpYmxlJyBpbiBwcm9wcykpIHtcbiAgICAgIHNldFZpc2libGUoaXNOb1RpdGxlKCkgPyBmYWxzZSA6IHZpcyk7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLm9uVmlzaWJsZUNoYW5nZSAmJiAhaXNOb1RpdGxlKCkpIHtcbiAgICAgIHByb3BzLm9uVmlzaWJsZUNoYW5nZSh2aXMpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgZ2V0VG9vbHRpcFBsYWNlbWVudHMgPSBmdW5jdGlvbiBnZXRUb29sdGlwUGxhY2VtZW50cygpIHtcbiAgICB2YXIgYnVpbHRpblBsYWNlbWVudHMgPSBwcm9wcy5idWlsdGluUGxhY2VtZW50cyxcbiAgICAgICAgYXJyb3dQb2ludEF0Q2VudGVyID0gcHJvcHMuYXJyb3dQb2ludEF0Q2VudGVyLFxuICAgICAgICBhdXRvQWRqdXN0T3ZlcmZsb3cgPSBwcm9wcy5hdXRvQWRqdXN0T3ZlcmZsb3c7XG4gICAgcmV0dXJuIGJ1aWx0aW5QbGFjZW1lbnRzIHx8ICgwLCBfcGxhY2VtZW50c1tcImRlZmF1bHRcIl0pKHtcbiAgICAgIGFycm93UG9pbnRBdENlbnRlcjogYXJyb3dQb2ludEF0Q2VudGVyLFxuICAgICAgYXV0b0FkanVzdE92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3dcbiAgICB9KTtcbiAgfTsgLy8g5Yqo5oCB6K6+572u5Yqo55S754K5XG5cblxuICB2YXIgb25Qb3B1cEFsaWduID0gZnVuY3Rpb24gb25Qb3B1cEFsaWduKGRvbU5vZGUsIGFsaWduKSB7XG4gICAgdmFyIHBsYWNlbWVudHMgPSBnZXRUb29sdGlwUGxhY2VtZW50cygpOyAvLyDlvZPliY3ov5Tlm57nmoTkvY3nva5cblxuICAgIHZhciBwbGFjZW1lbnQgPSBPYmplY3Qua2V5cyhwbGFjZW1lbnRzKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0dXJuIHBsYWNlbWVudHNba2V5XS5wb2ludHNbMF0gPT09IGFsaWduLnBvaW50c1swXSAmJiBwbGFjZW1lbnRzW2tleV0ucG9pbnRzWzFdID09PSBhbGlnbi5wb2ludHNbMV07XG4gICAgfSlbMF07XG5cbiAgICBpZiAoIXBsYWNlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8g5qC55o2u5b2T5YmN5Z2Q5qCH6K6+572u5Yqo55S754K5XG5cblxuICAgIHZhciByZWN0ID0gZG9tTm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgdHJhbnNmb3JtT3JpZ2luID0ge1xuICAgICAgdG9wOiAnNTAlJyxcbiAgICAgIGxlZnQ6ICc1MCUnXG4gICAgfTtcblxuICAgIGlmIChwbGFjZW1lbnQuaW5kZXhPZigndG9wJykgPj0gMCB8fCBwbGFjZW1lbnQuaW5kZXhPZignQm90dG9tJykgPj0gMCkge1xuICAgICAgdHJhbnNmb3JtT3JpZ2luLnRvcCA9IFwiXCIuY29uY2F0KHJlY3QuaGVpZ2h0IC0gYWxpZ24ub2Zmc2V0WzFdLCBcInB4XCIpO1xuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50LmluZGV4T2YoJ1RvcCcpID49IDAgfHwgcGxhY2VtZW50LmluZGV4T2YoJ2JvdHRvbScpID49IDApIHtcbiAgICAgIHRyYW5zZm9ybU9yaWdpbi50b3AgPSBcIlwiLmNvbmNhdCgtYWxpZ24ub2Zmc2V0WzFdLCBcInB4XCIpO1xuICAgIH1cblxuICAgIGlmIChwbGFjZW1lbnQuaW5kZXhPZignbGVmdCcpID49IDAgfHwgcGxhY2VtZW50LmluZGV4T2YoJ1JpZ2h0JykgPj0gMCkge1xuICAgICAgdHJhbnNmb3JtT3JpZ2luLmxlZnQgPSBcIlwiLmNvbmNhdChyZWN0LndpZHRoIC0gYWxpZ24ub2Zmc2V0WzBdLCBcInB4XCIpO1xuICAgIH0gZWxzZSBpZiAocGxhY2VtZW50LmluZGV4T2YoJ3JpZ2h0JykgPj0gMCB8fCBwbGFjZW1lbnQuaW5kZXhPZignTGVmdCcpID49IDApIHtcbiAgICAgIHRyYW5zZm9ybU9yaWdpbi5sZWZ0ID0gXCJcIi5jb25jYXQoLWFsaWduLm9mZnNldFswXSwgXCJweFwiKTtcbiAgICB9XG5cbiAgICBkb21Ob2RlLnN0eWxlLnRyYW5zZm9ybU9yaWdpbiA9IFwiXCIuY29uY2F0KHRyYW5zZm9ybU9yaWdpbi5sZWZ0LCBcIiBcIikuY29uY2F0KHRyYW5zZm9ybU9yaWdpbi50b3ApO1xuICB9O1xuXG4gIHZhciBnZXRPdmVybGF5ID0gZnVuY3Rpb24gZ2V0T3ZlcmxheSgpIHtcbiAgICB2YXIgdGl0bGUgPSBwcm9wcy50aXRsZSxcbiAgICAgICAgb3ZlcmxheSA9IHByb3BzLm92ZXJsYXk7XG5cbiAgICBpZiAodGl0bGUgPT09IDApIHtcbiAgICAgIHJldHVybiB0aXRsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gb3ZlcmxheSB8fCB0aXRsZSB8fCAnJztcbiAgfTtcblxuICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgb3BlbkNsYXNzTmFtZSA9IHByb3BzLm9wZW5DbGFzc05hbWUsXG4gICAgICBnZXRQb3B1cENvbnRhaW5lciA9IHByb3BzLmdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgZ2V0VG9vbHRpcENvbnRhaW5lciA9IHByb3BzLmdldFRvb2x0aXBDb250YWluZXIsXG4gICAgICBvdmVybGF5Q2xhc3NOYW1lID0gcHJvcHMub3ZlcmxheUNsYXNzTmFtZSxcbiAgICAgIGNvbG9yID0gcHJvcHMuY29sb3IsXG4gICAgICBvdmVybGF5SW5uZXJTdHlsZSA9IHByb3BzLm92ZXJsYXlJbm5lclN0eWxlO1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygndG9vbHRpcCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIHZhciB0ZW1wVmlzaWJsZSA9IHZpc2libGU7IC8vIEhpZGUgdG9vbHRpcCB3aGVuIHRoZXJlIGlzIG5vIHRpdGxlXG5cbiAgaWYgKCEoJ3Zpc2libGUnIGluIHByb3BzKSAmJiBpc05vVGl0bGUoKSkge1xuICAgIHRlbXBWaXNpYmxlID0gZmFsc2U7XG4gIH1cblxuICB2YXIgY2hpbGQgPSBnZXREaXNhYmxlZENvbXBhdGlibGVDaGlsZHJlbigoMCwgX3JlYWN0Tm9kZS5pc1ZhbGlkRWxlbWVudCkoY2hpbGRyZW4pID8gY2hpbGRyZW4gOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgY2hpbGRyZW4pLCBwcmVmaXhDbHMpO1xuICB2YXIgY2hpbGRQcm9wcyA9IGNoaWxkLnByb3BzO1xuICB2YXIgY2hpbGRDbHMgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShjaGlsZFByb3BzLmNsYXNzTmFtZSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTJbXCJkZWZhdWx0XCJdKSh7fSwgb3BlbkNsYXNzTmFtZSB8fCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW9wZW5cIiksIHRydWUpKTtcbiAgdmFyIGN1c3RvbU92ZXJsYXlDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShvdmVybGF5Q2xhc3NOYW1lLCAoX2NsYXNzTmFtZXMyID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLXJ0bFwiKSwgZGlyZWN0aW9uID09PSAncnRsJyksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMyLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLVwiKS5jb25jYXQoY29sb3IpLCBjb2xvciAmJiBQcmVzZXRDb2xvclJlZ2V4LnRlc3QoY29sb3IpKSwgX2NsYXNzTmFtZXMyKSk7XG4gIHZhciBmb3JtYXR0ZWRPdmVybGF5SW5uZXJTdHlsZTtcbiAgdmFyIGFycm93Q29udGVudFN0eWxlO1xuXG4gIGlmIChjb2xvciAmJiAhUHJlc2V0Q29sb3JSZWdleC50ZXN0KGNvbG9yKSkge1xuICAgIGZvcm1hdHRlZE92ZXJsYXlJbm5lclN0eWxlID0gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgb3ZlcmxheUlubmVyU3R5bGUpLCB7XG4gICAgICBiYWNrZ3JvdW5kOiBjb2xvclxuICAgIH0pO1xuICAgIGFycm93Q29udGVudFN0eWxlID0ge1xuICAgICAgYmFja2dyb3VuZDogY29sb3JcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9yY1Rvb2x0aXBbXCJkZWZhdWx0XCJdLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHByb3BzLCB7XG4gICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgb3ZlcmxheUNsYXNzTmFtZTogY3VzdG9tT3ZlcmxheUNsYXNzTmFtZSxcbiAgICBnZXRUb29sdGlwQ29udGFpbmVyOiBnZXRQb3B1cENvbnRhaW5lciB8fCBnZXRUb29sdGlwQ29udGFpbmVyIHx8IGdldENvbnRleHRQb3B1cENvbnRhaW5lcixcbiAgICByZWY6IHJlZixcbiAgICBidWlsdGluUGxhY2VtZW50czogZ2V0VG9vbHRpcFBsYWNlbWVudHMoKSxcbiAgICBvdmVybGF5OiBnZXRPdmVybGF5KCksXG4gICAgdmlzaWJsZTogdGVtcFZpc2libGUsXG4gICAgb25WaXNpYmxlQ2hhbmdlOiBvblZpc2libGVDaGFuZ2UsXG4gICAgb25Qb3B1cEFsaWduOiBvblBvcHVwQWxpZ24sXG4gICAgb3ZlcmxheUlubmVyU3R5bGU6IGZvcm1hdHRlZE92ZXJsYXlJbm5lclN0eWxlLFxuICAgIGFycm93Q29udGVudDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hcnJvdy1jb250ZW50XCIpLFxuICAgICAgc3R5bGU6IGFycm93Q29udGVudFN0eWxlXG4gICAgfSlcbiAgfSksIHRlbXBWaXNpYmxlID8gKDAsIF9yZWFjdE5vZGUuY2xvbmVFbGVtZW50KShjaGlsZCwge1xuICAgIGNsYXNzTmFtZTogY2hpbGRDbHNcbiAgfSkgOiBjaGlsZCk7XG59KTtcblRvb2x0aXAuZGlzcGxheU5hbWUgPSAnVG9vbHRpcCc7XG5Ub29sdGlwLmRlZmF1bHRQcm9wcyA9IHtcbiAgcGxhY2VtZW50OiAndG9wJyxcbiAgdHJhbnNpdGlvbk5hbWU6ICd6b29tLWJpZy1mYXN0JyxcbiAgbW91c2VFbnRlckRlbGF5OiAwLjEsXG4gIG1vdXNlTGVhdmVEZWxheTogMC4xLFxuICBhcnJvd1BvaW50QXRDZW50ZXI6IGZhbHNlLFxuICBhdXRvQWRqdXN0T3ZlcmZsb3c6IHRydWVcbn07XG52YXIgX2RlZmF1bHQgPSBUb29sdGlwO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldE92ZXJmbG93T3B0aW9ucyA9IGdldE92ZXJmbG93T3B0aW9ucztcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZ2V0UGxhY2VtZW50cztcblxudmFyIF9leHRlbmRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKSk7XG5cbnZhciBfcGxhY2VtZW50cyA9IHJlcXVpcmUoXCJyYy10b29sdGlwL2xpYi9wbGFjZW1lbnRzXCIpO1xuXG52YXIgYXV0b0FkanVzdE92ZXJmbG93RW5hYmxlZCA9IHtcbiAgYWRqdXN0WDogMSxcbiAgYWRqdXN0WTogMVxufTtcbnZhciBhdXRvQWRqdXN0T3ZlcmZsb3dEaXNhYmxlZCA9IHtcbiAgYWRqdXN0WDogMCxcbiAgYWRqdXN0WTogMFxufTtcbnZhciB0YXJnZXRPZmZzZXQgPSBbMCwgMF07XG5cbmZ1bmN0aW9uIGdldE92ZXJmbG93T3B0aW9ucyhhdXRvQWRqdXN0T3ZlcmZsb3cpIHtcbiAgaWYgKHR5cGVvZiBhdXRvQWRqdXN0T3ZlcmZsb3cgPT09ICdib29sZWFuJykge1xuICAgIHJldHVybiBhdXRvQWRqdXN0T3ZlcmZsb3cgPyBhdXRvQWRqdXN0T3ZlcmZsb3dFbmFibGVkIDogYXV0b0FkanVzdE92ZXJmbG93RGlzYWJsZWQ7XG4gIH1cblxuICByZXR1cm4gKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKCgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgYXV0b0FkanVzdE92ZXJmbG93RGlzYWJsZWQpLCBhdXRvQWRqdXN0T3ZlcmZsb3cpO1xufVxuXG5mdW5jdGlvbiBnZXRQbGFjZW1lbnRzKGNvbmZpZykge1xuICB2YXIgX2NvbmZpZyRhcnJvd1dpZHRoID0gY29uZmlnLmFycm93V2lkdGgsXG4gICAgICBhcnJvd1dpZHRoID0gX2NvbmZpZyRhcnJvd1dpZHRoID09PSB2b2lkIDAgPyA1IDogX2NvbmZpZyRhcnJvd1dpZHRoLFxuICAgICAgX2NvbmZpZyRob3Jpem9udGFsQXJyID0gY29uZmlnLmhvcml6b250YWxBcnJvd1NoaWZ0LFxuICAgICAgaG9yaXpvbnRhbEFycm93U2hpZnQgPSBfY29uZmlnJGhvcml6b250YWxBcnIgPT09IHZvaWQgMCA/IDE2IDogX2NvbmZpZyRob3Jpem9udGFsQXJyLFxuICAgICAgX2NvbmZpZyR2ZXJ0aWNhbEFycm93ID0gY29uZmlnLnZlcnRpY2FsQXJyb3dTaGlmdCxcbiAgICAgIHZlcnRpY2FsQXJyb3dTaGlmdCA9IF9jb25maWckdmVydGljYWxBcnJvdyA9PT0gdm9pZCAwID8gOCA6IF9jb25maWckdmVydGljYWxBcnJvdyxcbiAgICAgIGF1dG9BZGp1c3RPdmVyZmxvdyA9IGNvbmZpZy5hdXRvQWRqdXN0T3ZlcmZsb3c7XG4gIHZhciBwbGFjZW1lbnRNYXAgPSB7XG4gICAgbGVmdDoge1xuICAgICAgcG9pbnRzOiBbJ2NyJywgJ2NsJ10sXG4gICAgICBvZmZzZXQ6IFstNCwgMF1cbiAgICB9LFxuICAgIHJpZ2h0OiB7XG4gICAgICBwb2ludHM6IFsnY2wnLCAnY3InXSxcbiAgICAgIG9mZnNldDogWzQsIDBdXG4gICAgfSxcbiAgICB0b3A6IHtcbiAgICAgIHBvaW50czogWydiYycsICd0YyddLFxuICAgICAgb2Zmc2V0OiBbMCwgLTRdXG4gICAgfSxcbiAgICBib3R0b206IHtcbiAgICAgIHBvaW50czogWyd0YycsICdiYyddLFxuICAgICAgb2Zmc2V0OiBbMCwgNF1cbiAgICB9LFxuICAgIHRvcExlZnQ6IHtcbiAgICAgIHBvaW50czogWydibCcsICd0YyddLFxuICAgICAgb2Zmc2V0OiBbLShob3Jpem9udGFsQXJyb3dTaGlmdCArIGFycm93V2lkdGgpLCAtNF1cbiAgICB9LFxuICAgIGxlZnRUb3A6IHtcbiAgICAgIHBvaW50czogWyd0cicsICdjbCddLFxuICAgICAgb2Zmc2V0OiBbLTQsIC0odmVydGljYWxBcnJvd1NoaWZ0ICsgYXJyb3dXaWR0aCldXG4gICAgfSxcbiAgICB0b3BSaWdodDoge1xuICAgICAgcG9pbnRzOiBbJ2JyJywgJ3RjJ10sXG4gICAgICBvZmZzZXQ6IFtob3Jpem9udGFsQXJyb3dTaGlmdCArIGFycm93V2lkdGgsIC00XVxuICAgIH0sXG4gICAgcmlnaHRUb3A6IHtcbiAgICAgIHBvaW50czogWyd0bCcsICdjciddLFxuICAgICAgb2Zmc2V0OiBbNCwgLSh2ZXJ0aWNhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoKV1cbiAgICB9LFxuICAgIGJvdHRvbVJpZ2h0OiB7XG4gICAgICBwb2ludHM6IFsndHInLCAnYmMnXSxcbiAgICAgIG9mZnNldDogW2hvcml6b250YWxBcnJvd1NoaWZ0ICsgYXJyb3dXaWR0aCwgNF1cbiAgICB9LFxuICAgIHJpZ2h0Qm90dG9tOiB7XG4gICAgICBwb2ludHM6IFsnYmwnLCAnY3InXSxcbiAgICAgIG9mZnNldDogWzQsIHZlcnRpY2FsQXJyb3dTaGlmdCArIGFycm93V2lkdGhdXG4gICAgfSxcbiAgICBib3R0b21MZWZ0OiB7XG4gICAgICBwb2ludHM6IFsndGwnLCAnYmMnXSxcbiAgICAgIG9mZnNldDogWy0oaG9yaXpvbnRhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoKSwgNF1cbiAgICB9LFxuICAgIGxlZnRCb3R0b206IHtcbiAgICAgIHBvaW50czogWydicicsICdjbCddLFxuICAgICAgb2Zmc2V0OiBbLTQsIHZlcnRpY2FsQXJyb3dTaGlmdCArIGFycm93V2lkdGhdXG4gICAgfVxuICB9O1xuICBPYmplY3Qua2V5cyhwbGFjZW1lbnRNYXApLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHBsYWNlbWVudE1hcFtrZXldID0gY29uZmlnLmFycm93UG9pbnRBdENlbnRlciA/ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHBsYWNlbWVudE1hcFtrZXldKSwge1xuICAgICAgb3ZlcmZsb3c6IGdldE92ZXJmbG93T3B0aW9ucyhhdXRvQWRqdXN0T3ZlcmZsb3cpLFxuICAgICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgICB9KSA6ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIF9wbGFjZW1lbnRzLnBsYWNlbWVudHNba2V5XSksIHtcbiAgICAgIG92ZXJmbG93OiBnZXRPdmVyZmxvd09wdGlvbnMoYXV0b0FkanVzdE92ZXJmbG93KVxuICAgIH0pO1xuICAgIHBsYWNlbWVudE1hcFtrZXldLmlnbm9yZVNoYWtlID0gdHJ1ZTtcbiAgfSk7XG4gIHJldHVybiBwbGFjZW1lbnRNYXA7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5leHBvcnRzLmdlbkNTU01vdGlvbiA9IGdlbkNTU01vdGlvbjtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2ZpbmRET01Ob2RlID0gcmVxdWlyZSgncmMtdXRpbC9saWIvRG9tL2ZpbmRET01Ob2RlJyk7XG5cbnZhciBfZmluZERPTU5vZGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmluZERPTU5vZGUpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5cbnZhciBfY2xhc3NuYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jbGFzc25hbWVzKTtcblxudmFyIF9yYWYgPSByZXF1aXJlKCdyYWYnKTtcblxudmFyIF9yYWYyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFmKTtcblxudmFyIF9tb3Rpb24gPSByZXF1aXJlKCcuL3V0aWwvbW90aW9uJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfSAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9kZWZhdWx0LXByb3BzLW1hdGNoLXByb3AtdHlwZXMsIHJlYWN0L25vLW11bHRpLWNvbXAsIHJlYWN0L3Byb3AtdHlwZXMgKi9cblxuXG52YXIgU1RBVFVTX05PTkUgPSAnbm9uZSc7XG52YXIgU1RBVFVTX0FQUEVBUiA9ICdhcHBlYXInO1xudmFyIFNUQVRVU19FTlRFUiA9ICdlbnRlcic7XG52YXIgU1RBVFVTX0xFQVZFID0gJ2xlYXZlJztcblxuLyoqXG4gKiBgdHJhbnNpdGlvblN1cHBvcnRgIGlzIHVzZWQgZm9yIG5vbmUgdHJhbnNpdGlvbiB0ZXN0IGNhc2UuXG4gKiBEZWZhdWx0IHdlIHVzZSBicm93c2VyIHRyYW5zaXRpb24gZXZlbnQgc3VwcG9ydCBjaGVjay5cbiAqL1xuZnVuY3Rpb24gZ2VuQ1NTTW90aW9uKGNvbmZpZykge1xuICB2YXIgdHJhbnNpdGlvblN1cHBvcnQgPSBjb25maWc7XG4gIHZhciBmb3J3YXJkUmVmID0gISFfcmVhY3QyWydkZWZhdWx0J10uZm9yd2FyZFJlZjtcblxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ29iamVjdCcpIHtcbiAgICB0cmFuc2l0aW9uU3VwcG9ydCA9IGNvbmZpZy50cmFuc2l0aW9uU3VwcG9ydDtcbiAgICBmb3J3YXJkUmVmID0gJ2ZvcndhcmRSZWYnIGluIGNvbmZpZyA/IGNvbmZpZy5mb3J3YXJkUmVmIDogZm9yd2FyZFJlZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3VwcG9ydFRyYW5zaXRpb24ocHJvcHMpIHtcbiAgICByZXR1cm4gISEocHJvcHMubW90aW9uTmFtZSAmJiB0cmFuc2l0aW9uU3VwcG9ydCk7XG4gIH1cblxuICB2YXIgQ1NTTW90aW9uID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoQ1NTTW90aW9uLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIENTU01vdGlvbigpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDU1NNb3Rpb24pO1xuXG4gICAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ1NTTW90aW9uLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ1NTTW90aW9uKSkuY2FsbCh0aGlzKSk7XG5cbiAgICAgIF90aGlzLm9uRG9tVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMkc3RhdGUgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIHN0YXR1cyA9IF90aGlzJHN0YXRlLnN0YXR1cyxcbiAgICAgICAgICAgIG5ld1N0YXR1cyA9IF90aGlzJHN0YXRlLm5ld1N0YXR1cztcbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgICBvbkFwcGVhclN0YXJ0ID0gX3RoaXMkcHJvcHMub25BcHBlYXJTdGFydCxcbiAgICAgICAgICAgIG9uRW50ZXJTdGFydCA9IF90aGlzJHByb3BzLm9uRW50ZXJTdGFydCxcbiAgICAgICAgICAgIG9uTGVhdmVTdGFydCA9IF90aGlzJHByb3BzLm9uTGVhdmVTdGFydCxcbiAgICAgICAgICAgIG9uQXBwZWFyQWN0aXZlID0gX3RoaXMkcHJvcHMub25BcHBlYXJBY3RpdmUsXG4gICAgICAgICAgICBvbkVudGVyQWN0aXZlID0gX3RoaXMkcHJvcHMub25FbnRlckFjdGl2ZSxcbiAgICAgICAgICAgIG9uTGVhdmVBY3RpdmUgPSBfdGhpcyRwcm9wcy5vbkxlYXZlQWN0aXZlLFxuICAgICAgICAgICAgbW90aW9uQXBwZWFyID0gX3RoaXMkcHJvcHMubW90aW9uQXBwZWFyLFxuICAgICAgICAgICAgbW90aW9uRW50ZXIgPSBfdGhpcyRwcm9wcy5tb3Rpb25FbnRlcixcbiAgICAgICAgICAgIG1vdGlvbkxlYXZlID0gX3RoaXMkcHJvcHMubW90aW9uTGVhdmU7XG5cblxuICAgICAgICBpZiAoIWlzU3VwcG9ydFRyYW5zaXRpb24oX3RoaXMucHJvcHMpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXZlbnQgaW5qZWN0aW9uXG4gICAgICAgIHZhciAkZWxlID0gX3RoaXMuZ2V0RWxlbWVudCgpO1xuICAgICAgICBpZiAoX3RoaXMuJGNhY2hlRWxlICE9PSAkZWxlKSB7XG4gICAgICAgICAgX3RoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihfdGhpcy4kY2FjaGVFbGUpO1xuICAgICAgICAgIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIoJGVsZSk7XG4gICAgICAgICAgX3RoaXMuJGNhY2hlRWxlID0gJGVsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgc3RhdHVzXG4gICAgICAgIGlmIChuZXdTdGF0dXMgJiYgc3RhdHVzID09PSBTVEFUVVNfQVBQRUFSICYmIG1vdGlvbkFwcGVhcikge1xuICAgICAgICAgIF90aGlzLnVwZGF0ZVN0YXR1cyhvbkFwcGVhclN0YXJ0LCBudWxsLCBudWxsLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVBY3RpdmVTdGF0dXMob25BcHBlYXJBY3RpdmUsIFNUQVRVU19BUFBFQVIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld1N0YXR1cyAmJiBzdGF0dXMgPT09IFNUQVRVU19FTlRFUiAmJiBtb3Rpb25FbnRlcikge1xuICAgICAgICAgIF90aGlzLnVwZGF0ZVN0YXR1cyhvbkVudGVyU3RhcnQsIG51bGwsIG51bGwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZUFjdGl2ZVN0YXR1cyhvbkVudGVyQWN0aXZlLCBTVEFUVVNfRU5URVIpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld1N0YXR1cyAmJiBzdGF0dXMgPT09IFNUQVRVU19MRUFWRSAmJiBtb3Rpb25MZWF2ZSkge1xuICAgICAgICAgIF90aGlzLnVwZGF0ZVN0YXR1cyhvbkxlYXZlU3RhcnQsIG51bGwsIG51bGwsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZUFjdGl2ZVN0YXR1cyhvbkxlYXZlQWN0aXZlLCBTVEFUVVNfTEVBVkUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vbk1vdGlvbkVuZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX3RoaXMkc3RhdGUyID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgICBzdGF0dXMgPSBfdGhpcyRzdGF0ZTIuc3RhdHVzLFxuICAgICAgICAgICAgc3RhdHVzQWN0aXZlID0gX3RoaXMkc3RhdGUyLnN0YXR1c0FjdGl2ZTtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgICAgb25BcHBlYXJFbmQgPSBfdGhpcyRwcm9wczIub25BcHBlYXJFbmQsXG4gICAgICAgICAgICBvbkVudGVyRW5kID0gX3RoaXMkcHJvcHMyLm9uRW50ZXJFbmQsXG4gICAgICAgICAgICBvbkxlYXZlRW5kID0gX3RoaXMkcHJvcHMyLm9uTGVhdmVFbmQ7XG5cbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gU1RBVFVTX0FQUEVBUiAmJiBzdGF0dXNBY3RpdmUpIHtcbiAgICAgICAgICBfdGhpcy51cGRhdGVTdGF0dXMob25BcHBlYXJFbmQsIHsgc3RhdHVzOiBTVEFUVVNfTk9ORSB9LCBldmVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBTVEFUVVNfRU5URVIgJiYgc3RhdHVzQWN0aXZlKSB7XG4gICAgICAgICAgX3RoaXMudXBkYXRlU3RhdHVzKG9uRW50ZXJFbmQsIHsgc3RhdHVzOiBTVEFUVVNfTk9ORSB9LCBldmVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSBTVEFUVVNfTEVBVkUgJiYgc3RhdHVzQWN0aXZlKSB7XG4gICAgICAgICAgX3RoaXMudXBkYXRlU3RhdHVzKG9uTGVhdmVFbmQsIHsgc3RhdHVzOiBTVEFUVVNfTk9ORSB9LCBldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNldE5vZGVSZWYgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICB2YXIgaW50ZXJuYWxSZWYgPSBfdGhpcy5wcm9wcy5pbnRlcm5hbFJlZjtcblxuICAgICAgICBfdGhpcy5ub2RlID0gbm9kZTtcblxuICAgICAgICBpZiAodHlwZW9mIGludGVybmFsUmVmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaW50ZXJuYWxSZWYobm9kZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaW50ZXJuYWxSZWYgJiYgJ2N1cnJlbnQnIGluIGludGVybmFsUmVmKSB7XG4gICAgICAgICAgaW50ZXJuYWxSZWYuY3VycmVudCA9IG5vZGU7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmdldEVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuICgwLCBfZmluZERPTU5vZGUyWydkZWZhdWx0J10pKF90aGlzLm5vZGUgfHwgX3RoaXMpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogRmFsbGJhY2sgdG8gY2FjaGUgZWxlbWVudC5cbiAgICAgICAgICAgKiBUaGlzIGlzIG9ubHkgaGFwcGVuIHdoZW4gYG1vdGlvbkRlYWRsaW5lYCB0cmlnZ2VyIGJ1dCBlbGVtZW50IHJlbW92ZWQuXG4gICAgICAgICAgICovXG4gICAgICAgICAgcmV0dXJuIF90aGlzLiRjYWNoZUVsZTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICgkZWxlKSB7XG4gICAgICAgIGlmICghJGVsZSkgcmV0dXJuO1xuXG4gICAgICAgICRlbGUuYWRkRXZlbnRMaXN0ZW5lcihfbW90aW9uLnRyYW5zaXRpb25FbmROYW1lLCBfdGhpcy5vbk1vdGlvbkVuZCk7XG4gICAgICAgICRlbGUuYWRkRXZlbnRMaXN0ZW5lcihfbW90aW9uLmFuaW1hdGlvbkVuZE5hbWUsIF90aGlzLm9uTW90aW9uRW5kKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbiAoJGVsZSkge1xuICAgICAgICBpZiAoISRlbGUpIHJldHVybjtcblxuICAgICAgICAkZWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoX21vdGlvbi50cmFuc2l0aW9uRW5kTmFtZSwgX3RoaXMub25Nb3Rpb25FbmQpO1xuICAgICAgICAkZWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoX21vdGlvbi5hbmltYXRpb25FbmROYW1lLCBfdGhpcy5vbk1vdGlvbkVuZCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy51cGRhdGVTdGF0dXMgPSBmdW5jdGlvbiAoc3R5bGVGdW5jLCBhZGRpdGlvbmFsU3RhdGUsIGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgc3RhdHVzU3R5bGUgPSBzdHlsZUZ1bmMgPyBzdHlsZUZ1bmMoX3RoaXMuZ2V0RWxlbWVudCgpLCBldmVudCkgOiBudWxsO1xuXG4gICAgICAgIGlmIChzdGF0dXNTdHlsZSA9PT0gZmFsc2UgfHwgX3RoaXMuX2Rlc3Ryb3llZCkgcmV0dXJuO1xuXG4gICAgICAgIHZhciBuZXh0U3RlcCA9IHZvaWQgMDtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgbmV4dFN0ZXAgPSBmdW5jdGlvbiBuZXh0U3RlcCgpIHtcbiAgICAgICAgICAgIF90aGlzLm5leHRGcmFtZShjYWxsYmFjayk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKF9leHRlbmRzKHtcbiAgICAgICAgICBzdGF0dXNTdHlsZTogdHlwZW9mIHN0YXR1c1N0eWxlID09PSAnb2JqZWN0JyA/IHN0YXR1c1N0eWxlIDogbnVsbCxcbiAgICAgICAgICBuZXdTdGF0dXM6IGZhbHNlXG4gICAgICAgIH0sIGFkZGl0aW9uYWxTdGF0ZSksIG5leHRTdGVwKTsgLy8gVHJpZ2dlciBiZWZvcmUgbmV4dCBmcmFtZSAmIGFmdGVyIGBjb21wb25lbnREaWRNb3VudGBcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnVwZGF0ZUFjdGl2ZVN0YXR1cyA9IGZ1bmN0aW9uIChzdHlsZUZ1bmMsIGN1cnJlbnRTdGF0dXMpIHtcbiAgICAgICAgLy8gYHNldFN0YXRlYCB1c2UgYHBvc3RNZXNzYWdlYCB0byB0cmlnZ2VyIGF0IHRoZSBlbmQgb2YgZnJhbWUuXG4gICAgICAgIC8vIExldCdzIHVzZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgdG8gdXBkYXRlIG5ldyBzdGF0ZSBpbiBuZXh0IGZyYW1lLlxuICAgICAgICBfdGhpcy5uZXh0RnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBzdGF0dXMgPSBfdGhpcy5zdGF0ZS5zdGF0dXM7XG5cbiAgICAgICAgICBpZiAoc3RhdHVzICE9PSBjdXJyZW50U3RhdHVzKSByZXR1cm47XG5cbiAgICAgICAgICB2YXIgbW90aW9uRGVhZGxpbmUgPSBfdGhpcy5wcm9wcy5tb3Rpb25EZWFkbGluZTtcblxuXG4gICAgICAgICAgX3RoaXMudXBkYXRlU3RhdHVzKHN0eWxlRnVuYywgeyBzdGF0dXNBY3RpdmU6IHRydWUgfSk7XG5cbiAgICAgICAgICBpZiAobW90aW9uRGVhZGxpbmUgPiAwKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgX3RoaXMub25Nb3Rpb25FbmQoe1xuICAgICAgICAgICAgICAgIGRlYWRsaW5lOiB0cnVlXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgbW90aW9uRGVhZGxpbmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5uZXh0RnJhbWUgPSBmdW5jdGlvbiAoZnVuYykge1xuICAgICAgICBfdGhpcy5jYW5jZWxOZXh0RnJhbWUoKTtcbiAgICAgICAgX3RoaXMucmFmID0gKDAsIF9yYWYyWydkZWZhdWx0J10pKGZ1bmMpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuY2FuY2VsTmV4dEZyYW1lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMucmFmKSB7XG4gICAgICAgICAgX3JhZjJbJ2RlZmF1bHQnXS5jYW5jZWwoX3RoaXMucmFmKTtcbiAgICAgICAgICBfdGhpcy5yYWYgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgc3RhdHVzOiBTVEFUVVNfTk9ORSxcbiAgICAgICAgc3RhdHVzQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgbmV3U3RhdHVzOiBmYWxzZSxcbiAgICAgICAgc3RhdHVzU3R5bGU6IG51bGxcbiAgICAgIH07XG4gICAgICBfdGhpcy4kY2FjaGVFbGUgPSBudWxsO1xuICAgICAgX3RoaXMubm9kZSA9IG51bGw7XG4gICAgICBfdGhpcy5yYWYgPSBudWxsO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDU1NNb3Rpb24sIFt7XG4gICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMub25Eb21VcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgdGhpcy5vbkRvbVVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuJGNhY2hlRWxlKTtcbiAgICAgICAgdGhpcy5jYW5jZWxOZXh0RnJhbWUoKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF9jbGFzc05hbWVzO1xuXG4gICAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgc3RhdHVzID0gX3N0YXRlLnN0YXR1cyxcbiAgICAgICAgICAgIHN0YXR1c0FjdGl2ZSA9IF9zdGF0ZS5zdGF0dXNBY3RpdmUsXG4gICAgICAgICAgICBzdGF0dXNTdHlsZSA9IF9zdGF0ZS5zdGF0dXNTdHlsZTtcbiAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICAgIG1vdGlvbk5hbWUgPSBfcHJvcHMubW90aW9uTmFtZSxcbiAgICAgICAgICAgIHZpc2libGUgPSBfcHJvcHMudmlzaWJsZSxcbiAgICAgICAgICAgIHJlbW92ZU9uTGVhdmUgPSBfcHJvcHMucmVtb3ZlT25MZWF2ZSxcbiAgICAgICAgICAgIGxlYXZlZENsYXNzTmFtZSA9IF9wcm9wcy5sZWF2ZWRDbGFzc05hbWUsXG4gICAgICAgICAgICBldmVudFByb3BzID0gX3Byb3BzLmV2ZW50UHJvcHM7XG5cblxuICAgICAgICBpZiAoIWNoaWxkcmVuKSByZXR1cm4gbnVsbDtcblxuICAgICAgICBpZiAoc3RhdHVzID09PSBTVEFUVVNfTk9ORSB8fCAhaXNTdXBwb3J0VHJhbnNpdGlvbih0aGlzLnByb3BzKSkge1xuICAgICAgICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2hpbGRyZW4oX2V4dGVuZHMoe30sIGV2ZW50UHJvcHMpLCB0aGlzLnNldE5vZGVSZWYpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoIXJlbW92ZU9uTGVhdmUpIHtcbiAgICAgICAgICAgIHJldHVybiBjaGlsZHJlbihfZXh0ZW5kcyh7fSwgZXZlbnRQcm9wcywgeyBjbGFzc05hbWU6IGxlYXZlZENsYXNzTmFtZSB9KSwgdGhpcy5zZXROb2RlUmVmKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaGlsZHJlbihfZXh0ZW5kcyh7fSwgZXZlbnRQcm9wcywge1xuICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzMlsnZGVmYXVsdCddKSgoX2NsYXNzTmFtZXMgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCAoMCwgX21vdGlvbi5nZXRUcmFuc2l0aW9uTmFtZSkobW90aW9uTmFtZSwgc3RhdHVzKSwgc3RhdHVzICE9PSBTVEFUVVNfTk9ORSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NOYW1lcywgKDAsIF9tb3Rpb24uZ2V0VHJhbnNpdGlvbk5hbWUpKG1vdGlvbk5hbWUsIHN0YXR1cyArICctYWN0aXZlJyksIHN0YXR1cyAhPT0gU1RBVFVTX05PTkUgJiYgc3RhdHVzQWN0aXZlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc05hbWVzLCBtb3Rpb25OYW1lLCB0eXBlb2YgbW90aW9uTmFtZSA9PT0gJ3N0cmluZycpLCBfY2xhc3NOYW1lcykpLFxuICAgICAgICAgIHN0eWxlOiBzdGF0dXNTdHlsZVxuICAgICAgICB9KSwgdGhpcy5zZXROb2RlUmVmKTtcbiAgICAgIH1cbiAgICB9XSwgW3tcbiAgICAgIGtleTogJ2dldERlcml2ZWRTdGF0ZUZyb21Qcm9wcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBfcmVmKSB7XG4gICAgICAgIHZhciBwcmV2UHJvcHMgPSBfcmVmLnByZXZQcm9wcyxcbiAgICAgICAgICAgIHByZXZTdGF0dXMgPSBfcmVmLnN0YXR1cztcblxuICAgICAgICBpZiAoIWlzU3VwcG9ydFRyYW5zaXRpb24ocHJvcHMpKSByZXR1cm4ge307XG5cbiAgICAgICAgdmFyIHZpc2libGUgPSBwcm9wcy52aXNpYmxlLFxuICAgICAgICAgICAgbW90aW9uQXBwZWFyID0gcHJvcHMubW90aW9uQXBwZWFyLFxuICAgICAgICAgICAgbW90aW9uRW50ZXIgPSBwcm9wcy5tb3Rpb25FbnRlcixcbiAgICAgICAgICAgIG1vdGlvbkxlYXZlID0gcHJvcHMubW90aW9uTGVhdmUsXG4gICAgICAgICAgICBtb3Rpb25MZWF2ZUltbWVkaWF0ZWx5ID0gcHJvcHMubW90aW9uTGVhdmVJbW1lZGlhdGVseTtcblxuICAgICAgICB2YXIgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgcHJldlByb3BzOiBwcm9wc1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIENsZWFuIHVwIHN0YXR1cyBpZiBwcm9wIHNldCB0byBmYWxzZVxuICAgICAgICBpZiAocHJldlN0YXR1cyA9PT0gU1RBVFVTX0FQUEVBUiAmJiAhbW90aW9uQXBwZWFyIHx8IHByZXZTdGF0dXMgPT09IFNUQVRVU19FTlRFUiAmJiAhbW90aW9uRW50ZXIgfHwgcHJldlN0YXR1cyA9PT0gU1RBVFVTX0xFQVZFICYmICFtb3Rpb25MZWF2ZSkge1xuICAgICAgICAgIG5ld1N0YXRlLnN0YXR1cyA9IFNUQVRVU19OT05FO1xuICAgICAgICAgIG5ld1N0YXRlLnN0YXR1c0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIG5ld1N0YXRlLm5ld1N0YXR1cyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXBwZWFyXG4gICAgICAgIGlmICghcHJldlByb3BzICYmIHZpc2libGUgJiYgbW90aW9uQXBwZWFyKSB7XG4gICAgICAgICAgbmV3U3RhdGUuc3RhdHVzID0gU1RBVFVTX0FQUEVBUjtcbiAgICAgICAgICBuZXdTdGF0ZS5zdGF0dXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICBuZXdTdGF0ZS5uZXdTdGF0dXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRW50ZXJcbiAgICAgICAgaWYgKHByZXZQcm9wcyAmJiAhcHJldlByb3BzLnZpc2libGUgJiYgdmlzaWJsZSAmJiBtb3Rpb25FbnRlcikge1xuICAgICAgICAgIG5ld1N0YXRlLnN0YXR1cyA9IFNUQVRVU19FTlRFUjtcbiAgICAgICAgICBuZXdTdGF0ZS5zdGF0dXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICBuZXdTdGF0ZS5uZXdTdGF0dXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGVhdmVcbiAgICAgICAgaWYgKHByZXZQcm9wcyAmJiBwcmV2UHJvcHMudmlzaWJsZSAmJiAhdmlzaWJsZSAmJiBtb3Rpb25MZWF2ZSB8fCAhcHJldlByb3BzICYmIG1vdGlvbkxlYXZlSW1tZWRpYXRlbHkgJiYgIXZpc2libGUgJiYgbW90aW9uTGVhdmUpIHtcbiAgICAgICAgICBuZXdTdGF0ZS5zdGF0dXMgPSBTVEFUVVNfTEVBVkU7XG4gICAgICAgICAgbmV3U3RhdGUuc3RhdHVzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgbmV3U3RhdGUubmV3U3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdTdGF0ZTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gQ1NTTW90aW9uO1xuICB9KF9yZWFjdDJbJ2RlZmF1bHQnXS5Db21wb25lbnQpO1xuXG4gIENTU01vdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdmlzaWJsZTogdHJ1ZSxcbiAgICBtb3Rpb25FbnRlcjogdHJ1ZSxcbiAgICBtb3Rpb25BcHBlYXI6IHRydWUsXG4gICAgbW90aW9uTGVhdmU6IHRydWUsXG4gICAgcmVtb3ZlT25MZWF2ZTogdHJ1ZVxuICB9O1xuXG5cbiAgaWYgKCFmb3J3YXJkUmVmKSB7XG4gICAgcmV0dXJuIENTU01vdGlvbjtcbiAgfVxuXG4gIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChDU1NNb3Rpb24sIF9leHRlbmRzKHsgaW50ZXJuYWxSZWY6IHJlZiB9LCBwcm9wcykpO1xuICB9KTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gZ2VuQ1NTTW90aW9uKF9tb3Rpb24uc3VwcG9ydFRyYW5zaXRpb24pOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0VmVuZG9yUHJlZml4ZXMgPSBnZXRWZW5kb3JQcmVmaXhlcztcbmV4cG9ydHMuZ2V0VmVuZG9yUHJlZml4ZWRFdmVudE5hbWUgPSBnZXRWZW5kb3JQcmVmaXhlZEV2ZW50TmFtZTtcbmV4cG9ydHMuZ2V0VHJhbnNpdGlvbk5hbWUgPSBnZXRUcmFuc2l0aW9uTmFtZTtcbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG4vLyA9PT09PT09PT09PT09PT09PSBUcmFuc2l0aW9uID09PT09PT09PT09PT09PT09XG4vLyBFdmVudCB3cmFwcGVyLiBDb3B5IGZyb20gcmVhY3Qgc291cmNlIGNvZGVcbmZ1bmN0aW9uIG1ha2VQcmVmaXhNYXAoc3R5bGVQcm9wLCBldmVudE5hbWUpIHtcbiAgdmFyIHByZWZpeGVzID0ge307XG5cbiAgcHJlZml4ZXNbc3R5bGVQcm9wLnRvTG93ZXJDYXNlKCldID0gZXZlbnROYW1lLnRvTG93ZXJDYXNlKCk7XG4gIHByZWZpeGVzWydXZWJraXQnICsgc3R5bGVQcm9wXSA9ICd3ZWJraXQnICsgZXZlbnROYW1lO1xuICBwcmVmaXhlc1snTW96JyArIHN0eWxlUHJvcF0gPSAnbW96JyArIGV2ZW50TmFtZTtcbiAgcHJlZml4ZXNbJ21zJyArIHN0eWxlUHJvcF0gPSAnTVMnICsgZXZlbnROYW1lO1xuICBwcmVmaXhlc1snTycgKyBzdHlsZVByb3BdID0gJ28nICsgZXZlbnROYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgcmV0dXJuIHByZWZpeGVzO1xufVxuXG5mdW5jdGlvbiBnZXRWZW5kb3JQcmVmaXhlcyhkb21TdXBwb3J0LCB3aW4pIHtcbiAgdmFyIHByZWZpeGVzID0ge1xuICAgIGFuaW1hdGlvbmVuZDogbWFrZVByZWZpeE1hcCgnQW5pbWF0aW9uJywgJ0FuaW1hdGlvbkVuZCcpLFxuICAgIHRyYW5zaXRpb25lbmQ6IG1ha2VQcmVmaXhNYXAoJ1RyYW5zaXRpb24nLCAnVHJhbnNpdGlvbkVuZCcpXG4gIH07XG5cbiAgaWYgKGRvbVN1cHBvcnQpIHtcbiAgICBpZiAoISgnQW5pbWF0aW9uRXZlbnQnIGluIHdpbikpIHtcbiAgICAgIGRlbGV0ZSBwcmVmaXhlcy5hbmltYXRpb25lbmQuYW5pbWF0aW9uO1xuICAgIH1cblxuICAgIGlmICghKCdUcmFuc2l0aW9uRXZlbnQnIGluIHdpbikpIHtcbiAgICAgIGRlbGV0ZSBwcmVmaXhlcy50cmFuc2l0aW9uZW5kLnRyYW5zaXRpb247XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByZWZpeGVzO1xufVxuXG52YXIgdmVuZG9yUHJlZml4ZXMgPSBnZXRWZW5kb3JQcmVmaXhlcyhjYW5Vc2VET00sIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDoge30pO1xuXG52YXIgc3R5bGUgPSB7fTtcblxuaWYgKGNhblVzZURPTSkge1xuICBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLnN0eWxlO1xufVxuXG52YXIgcHJlZml4ZWRFdmVudE5hbWVzID0ge307XG5cbmZ1bmN0aW9uIGdldFZlbmRvclByZWZpeGVkRXZlbnROYW1lKGV2ZW50TmFtZSkge1xuICBpZiAocHJlZml4ZWRFdmVudE5hbWVzW2V2ZW50TmFtZV0pIHtcbiAgICByZXR1cm4gcHJlZml4ZWRFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gIH1cblxuICB2YXIgcHJlZml4TWFwID0gdmVuZG9yUHJlZml4ZXNbZXZlbnROYW1lXTtcblxuICBpZiAocHJlZml4TWFwKSB7XG4gICAgdmFyIHN0eWxlUHJvcExpc3QgPSBPYmplY3Qua2V5cyhwcmVmaXhNYXApO1xuICAgIHZhciBsZW4gPSBzdHlsZVByb3BMaXN0Lmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSArPSAxKSB7XG4gICAgICB2YXIgc3R5bGVQcm9wID0gc3R5bGVQcm9wTGlzdFtpXTtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocHJlZml4TWFwLCBzdHlsZVByb3ApICYmIHN0eWxlUHJvcCBpbiBzdHlsZSkge1xuICAgICAgICBwcmVmaXhlZEV2ZW50TmFtZXNbZXZlbnROYW1lXSA9IHByZWZpeE1hcFtzdHlsZVByb3BdO1xuICAgICAgICByZXR1cm4gcHJlZml4ZWRFdmVudE5hbWVzW2V2ZW50TmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgYW5pbWF0aW9uRW5kTmFtZSA9IGV4cG9ydHMuYW5pbWF0aW9uRW5kTmFtZSA9IGdldFZlbmRvclByZWZpeGVkRXZlbnROYW1lKCdhbmltYXRpb25lbmQnKTtcbnZhciB0cmFuc2l0aW9uRW5kTmFtZSA9IGV4cG9ydHMudHJhbnNpdGlvbkVuZE5hbWUgPSBnZXRWZW5kb3JQcmVmaXhlZEV2ZW50TmFtZSgndHJhbnNpdGlvbmVuZCcpO1xudmFyIHN1cHBvcnRUcmFuc2l0aW9uID0gZXhwb3J0cy5zdXBwb3J0VHJhbnNpdGlvbiA9ICEhKGFuaW1hdGlvbkVuZE5hbWUgJiYgdHJhbnNpdGlvbkVuZE5hbWUpO1xuXG5mdW5jdGlvbiBnZXRUcmFuc2l0aW9uTmFtZSh0cmFuc2l0aW9uTmFtZSwgdHJhbnNpdGlvblR5cGUpIHtcbiAgaWYgKCF0cmFuc2l0aW9uTmFtZSkgcmV0dXJuIG51bGw7XG5cbiAgaWYgKHR5cGVvZiB0cmFuc2l0aW9uTmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgdHlwZSA9IHRyYW5zaXRpb25UeXBlLnJlcGxhY2UoLy1cXHcvZywgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICByZXR1cm4gbWF0Y2hbMV0udG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHJhbnNpdGlvbk5hbWVbdHlwZV07XG4gIH1cblxuICByZXR1cm4gdHJhbnNpdGlvbk5hbWUgKyAnLScgKyB0cmFuc2l0aW9uVHlwZTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKSk7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2syID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzc1wiKSk7XG5cbnZhciBfaW5oZXJpdHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKSk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIikpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2ZcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yZWFjdERvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgdmFyIFN1cGVyID0gKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoRGVyaXZlZCksIHJlc3VsdDsgaWYgKGhhc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QpIHsgdmFyIE5ld1RhcmdldCA9ICgwLCBfZ2V0UHJvdG90eXBlT2YyLmRlZmF1bHQpKHRoaXMpLmNvbnN0cnVjdG9yOyByZXN1bHQgPSBSZWZsZWN0LmNvbnN0cnVjdChTdXBlciwgYXJndW1lbnRzLCBOZXdUYXJnZXQpOyB9IGVsc2UgeyByZXN1bHQgPSBTdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9IHJldHVybiAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yLmRlZmF1bHQpKHRoaXMsIHJlc3VsdCk7IH07IH1cblxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlOyBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlOyBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlOyB0cnkgeyBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyByZXR1cm4gdHJ1ZTsgfSBjYXRjaCAoZSkgeyByZXR1cm4gZmFsc2U7IH0gfVxuXG52YXIgTm90aWNlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMyLmRlZmF1bHQpKE5vdGljZSwgX0NvbXBvbmVudCk7XG5cbiAgdmFyIF9zdXBlciA9IF9jcmVhdGVTdXBlcihOb3RpY2UpO1xuXG4gIGZ1bmN0aW9uIE5vdGljZSgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMi5kZWZhdWx0KSh0aGlzLCBOb3RpY2UpO1xuICAgIF90aGlzID0gX3N1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgX3RoaXMuY2xvc2VUaW1lciA9IG51bGw7XG5cbiAgICBfdGhpcy5jbG9zZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZSkge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5jbGVhckNsb3NlVGltZXIoKTtcblxuICAgICAgdmFyIG9uQ2xvc2UgPSBfdGhpcy5wcm9wcy5vbkNsb3NlO1xuXG4gICAgICBpZiAob25DbG9zZSkge1xuICAgICAgICBvbkNsb3NlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnN0YXJ0Q2xvc2VUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5wcm9wcy5kdXJhdGlvbikge1xuICAgICAgICBfdGhpcy5jbG9zZVRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLmNsb3NlKCk7XG4gICAgICAgIH0sIF90aGlzLnByb3BzLmR1cmF0aW9uICogMTAwMCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLmNsZWFyQ2xvc2VUaW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5jbG9zZVRpbWVyKSB7XG4gICAgICAgIGNsZWFyVGltZW91dChfdGhpcy5jbG9zZVRpbWVyKTtcbiAgICAgICAgX3RoaXMuY2xvc2VUaW1lciA9IG51bGw7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MyLmRlZmF1bHQpKE5vdGljZSwgW3tcbiAgICBrZXk6IFwiY29tcG9uZW50RGlkTW91bnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICB0aGlzLnN0YXJ0Q2xvc2VUaW1lcigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjb21wb25lbnREaWRVcGRhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcykge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZHVyYXRpb24gIT09IHByZXZQcm9wcy5kdXJhdGlvbiB8fCB0aGlzLnByb3BzLnVwZGF0ZSkge1xuICAgICAgICB0aGlzLnJlc3RhcnRDbG9zZVRpbWVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5jbGVhckNsb3NlVGltZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVzdGFydENsb3NlVGltZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVzdGFydENsb3NlVGltZXIoKSB7XG4gICAgICB0aGlzLmNsZWFyQ2xvc2VUaW1lcigpO1xuICAgICAgdGhpcy5zdGFydENsb3NlVGltZXIoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzLnByZWZpeENscyxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgICAgY2xvc2FibGUgPSBfdGhpcyRwcm9wcy5jbG9zYWJsZSxcbiAgICAgICAgICBjbG9zZUljb24gPSBfdGhpcyRwcm9wcy5jbG9zZUljb24sXG4gICAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wcy5zdHlsZSxcbiAgICAgICAgICBvbkNsaWNrID0gX3RoaXMkcHJvcHMub25DbGljayxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIGhvbGRlciA9IF90aGlzJHByb3BzLmhvbGRlcjtcbiAgICAgIHZhciBjb21wb25lbnRDbGFzcyA9IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItbm90aWNlXCIpO1xuICAgICAgdmFyIGRhdGFPckFyaWFBdHRyaWJ1dGVQcm9wcyA9IE9iamVjdC5rZXlzKHRoaXMucHJvcHMpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgaWYgKGtleS5zdWJzdHIoMCwgNSkgPT09ICdkYXRhLScgfHwga2V5LnN1YnN0cigwLCA1KSA9PT0gJ2FyaWEtJyB8fCBrZXkgPT09ICdyb2xlJykge1xuICAgICAgICAgIGFjY1trZXldID0gX3RoaXMyLnByb3BzW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwge30pO1xuXG4gICAgICB2YXIgbm9kZSA9IF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKGNvbXBvbmVudENsYXNzLCBjbGFzc05hbWUsICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKHt9LCBcIlwiLmNvbmNhdChjb21wb25lbnRDbGFzcywgXCItY2xvc2FibGVcIiksIGNsb3NhYmxlKSksXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgb25Nb3VzZUVudGVyOiB0aGlzLmNsZWFyQ2xvc2VUaW1lcixcbiAgICAgICAgb25Nb3VzZUxlYXZlOiB0aGlzLnN0YXJ0Q2xvc2VUaW1lcixcbiAgICAgICAgb25DbGljazogb25DbGlja1xuICAgICAgfSwgZGF0YU9yQXJpYUF0dHJpYnV0ZVByb3BzKSwgX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQoY29tcG9uZW50Q2xhc3MsIFwiLWNvbnRlbnRcIilcbiAgICAgIH0sIGNoaWxkcmVuKSwgY2xvc2FibGUgPyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgICAgIHRhYkluZGV4OiAwLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmNsb3NlLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KGNvbXBvbmVudENsYXNzLCBcIi1jbG9zZVwiKVxuICAgICAgfSwgY2xvc2VJY29uIHx8IF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChjb21wb25lbnRDbGFzcywgXCItY2xvc2UteFwiKVxuICAgICAgfSkpIDogbnVsbCk7XG5cbiAgICAgIGlmIChob2xkZXIpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdERvbS5kZWZhdWx0LmNyZWF0ZVBvcnRhbChub2RlLCBob2xkZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE5vdGljZTtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IE5vdGljZTtcbk5vdGljZS5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uQ2xvc2U6IGZ1bmN0aW9uIG9uQ2xvc2UoKSB7fSxcbiAgZHVyYXRpb246IDEuNSxcbiAgc3R5bGU6IHtcbiAgICByaWdodDogJzUwJSdcbiAgfVxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1c2VOb3RpZmljYXRpb247XG5cbnZhciBfdG9Db25zdW1hYmxlQXJyYXkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b0NvbnN1bWFibGVBcnJheVwiKSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX05vdGljZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vTm90aWNlXCIpKTtcblxuZnVuY3Rpb24gdXNlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbkluc3RhbmNlKSB7XG4gIHZhciBjcmVhdGVkUmVmID0gUmVhY3QudXNlUmVmKHt9KTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoW10pLFxuICAgICAgX1JlYWN0JHVzZVN0YXRlMiA9ICgwLCBfc2xpY2VkVG9BcnJheTIuZGVmYXVsdCkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIGVsZW1lbnRzID0gX1JlYWN0JHVzZVN0YXRlMlswXSxcbiAgICAgIHNldEVsZW1lbnRzID0gX1JlYWN0JHVzZVN0YXRlMlsxXTtcblxuICBmdW5jdGlvbiBub3RpZnkobm90aWNlUHJvcHMpIHtcbiAgICBub3RpZmljYXRpb25JbnN0YW5jZS5hZGQobm90aWNlUHJvcHMsIGZ1bmN0aW9uIChkaXYsIHByb3BzKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHMua2V5O1xuXG4gICAgICBpZiAoZGl2ICYmICFjcmVhdGVkUmVmLmN1cnJlbnRba2V5XSkge1xuICAgICAgICB2YXIgbm90aWNlRWxlID0gUmVhY3QuY3JlYXRlRWxlbWVudChfTm90aWNlLmRlZmF1bHQsIE9iamVjdC5hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgaG9sZGVyOiBkaXZcbiAgICAgICAgfSkpO1xuICAgICAgICBjcmVhdGVkUmVmLmN1cnJlbnRba2V5XSA9IG5vdGljZUVsZTtcbiAgICAgICAgc2V0RWxlbWVudHMoZnVuY3Rpb24gKG9yaWdpbkVsZW1lbnRzKSB7XG4gICAgICAgICAgcmV0dXJuIFtdLmNvbmNhdCgoMCwgX3RvQ29uc3VtYWJsZUFycmF5Mi5kZWZhdWx0KShvcmlnaW5FbGVtZW50cyksIFtub3RpY2VFbGVdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gW25vdGlmeSwgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgZWxlbWVudHMpXTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfZGVmYXVsdCA9IHtcbiAgLy8gT3B0aW9ucy5qc3hcbiAgaXRlbXNfcGVyX3BhZ2U6ICcvIHBhZ2UnLFxuICBqdW1wX3RvOiAnR28gdG8nLFxuICBqdW1wX3RvX2NvbmZpcm06ICdjb25maXJtJyxcbiAgcGFnZTogJycsXG4gIC8vIFBhZ2luYXRpb24uanN4XG4gIHByZXZfcGFnZTogJ1ByZXZpb3VzIFBhZ2UnLFxuICBuZXh0X3BhZ2U6ICdOZXh0IFBhZ2UnLFxuICBwcmV2XzU6ICdQcmV2aW91cyA1IFBhZ2VzJyxcbiAgbmV4dF81OiAnTmV4dCA1IFBhZ2VzJyxcbiAgcHJldl8zOiAnUHJldmlvdXMgMyBQYWdlcycsXG4gIG5leHRfMzogJ05leHQgMyBQYWdlcydcbn07XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBsb2NhbGUgPSB7XG4gIGxvY2FsZTogJ2VuX1VTJyxcbiAgdG9kYXk6ICdUb2RheScsXG4gIG5vdzogJ05vdycsXG4gIGJhY2tUb1RvZGF5OiAnQmFjayB0byB0b2RheScsXG4gIG9rOiAnT2snLFxuICBjbGVhcjogJ0NsZWFyJyxcbiAgbW9udGg6ICdNb250aCcsXG4gIHllYXI6ICdZZWFyJyxcbiAgdGltZVNlbGVjdDogJ3NlbGVjdCB0aW1lJyxcbiAgZGF0ZVNlbGVjdDogJ3NlbGVjdCBkYXRlJyxcbiAgd2Vla1NlbGVjdDogJ0Nob29zZSBhIHdlZWsnLFxuICBtb250aFNlbGVjdDogJ0Nob29zZSBhIG1vbnRoJyxcbiAgeWVhclNlbGVjdDogJ0Nob29zZSBhIHllYXInLFxuICBkZWNhZGVTZWxlY3Q6ICdDaG9vc2UgYSBkZWNhZGUnLFxuICB5ZWFyRm9ybWF0OiAnWVlZWScsXG4gIGRhdGVGb3JtYXQ6ICdNL0QvWVlZWScsXG4gIGRheUZvcm1hdDogJ0QnLFxuICBkYXRlVGltZUZvcm1hdDogJ00vRC9ZWVlZIEhIOm1tOnNzJyxcbiAgbW9udGhCZWZvcmVZZWFyOiB0cnVlLFxuICBwcmV2aW91c01vbnRoOiAnUHJldmlvdXMgbW9udGggKFBhZ2VVcCknLFxuICBuZXh0TW9udGg6ICdOZXh0IG1vbnRoIChQYWdlRG93biknLFxuICBwcmV2aW91c1llYXI6ICdMYXN0IHllYXIgKENvbnRyb2wgKyBsZWZ0KScsXG4gIG5leHRZZWFyOiAnTmV4dCB5ZWFyIChDb250cm9sICsgcmlnaHQpJyxcbiAgcHJldmlvdXNEZWNhZGU6ICdMYXN0IGRlY2FkZScsXG4gIG5leHREZWNhZGU6ICdOZXh0IGRlY2FkZScsXG4gIHByZXZpb3VzQ2VudHVyeTogJ0xhc3QgY2VudHVyeScsXG4gIG5leHRDZW50dXJ5OiAnTmV4dCBjZW50dXJ5J1xufTtcbnZhciBfZGVmYXVsdCA9IGxvY2FsZTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZXhwb3J0cy5wbGFjZW1lbnRzID0gdm9pZCAwO1xudmFyIGF1dG9BZGp1c3RPdmVyZmxvdyA9IHtcbiAgYWRqdXN0WDogMSxcbiAgYWRqdXN0WTogMVxufTtcbnZhciB0YXJnZXRPZmZzZXQgPSBbMCwgMF07XG52YXIgcGxhY2VtZW50cyA9IHtcbiAgbGVmdDoge1xuICAgIHBvaW50czogWydjcicsICdjbCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbLTQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ2NsJywgJ2NyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFs0LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3A6IHtcbiAgICBwb2ludHM6IFsnYmMnLCAndGMnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBib3R0b206IHtcbiAgICBwb2ludHM6IFsndGMnLCAnYmMnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHRvcExlZnQ6IHtcbiAgICBwb2ludHM6IFsnYmwnLCAndGwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBsZWZ0VG9wOiB7XG4gICAgcG9pbnRzOiBbJ3RyJywgJ3RsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFstNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wUmlnaHQ6IHtcbiAgICBwb2ludHM6IFsnYnInLCAndHInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC00XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICByaWdodFRvcDoge1xuICAgIHBvaW50czogWyd0bCcsICd0ciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgYm90dG9tUmlnaHQ6IHtcbiAgICBwb2ludHM6IFsndHInLCAnYnInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHJpZ2h0Qm90dG9tOiB7XG4gICAgcG9pbnRzOiBbJ2JsJywgJ2JyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFs0LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBib3R0b21MZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ3RsJywgJ2JsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBsZWZ0Qm90dG9tOiB7XG4gICAgcG9pbnRzOiBbJ2JyJywgJ2JsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFstNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfVxufTtcbmV4cG9ydHMucGxhY2VtZW50cyA9IHBsYWNlbWVudHM7XG52YXIgX2RlZmF1bHQgPSBwbGFjZW1lbnRzO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIEluZGVudCA9IGZ1bmN0aW9uIEluZGVudChfcmVmKSB7XG4gIHZhciBwcmVmaXhDbHMgPSBfcmVmLnByZWZpeENscyxcbiAgICAgIGxldmVsID0gX3JlZi5sZXZlbCxcbiAgICAgIGlzU3RhcnQgPSBfcmVmLmlzU3RhcnQsXG4gICAgICBpc0VuZCA9IF9yZWYuaXNFbmQ7XG5cbiAgaWYgKCFsZXZlbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIGJhc2VDbGFzc05hbWUgPSBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWluZGVudC11bml0XCIpO1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGV2ZWw7IGkgKz0gMSkge1xuICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgIGxpc3QucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBrZXk6IGksXG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShiYXNlQ2xhc3NOYW1lLCAoX2NsYXNzTmFtZXMgPSB7fSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KGJhc2VDbGFzc05hbWUsIFwiLXN0YXJ0XCIpLCBpc1N0YXJ0W2kgKyAxXSksICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChiYXNlQ2xhc3NOYW1lLCBcIi1lbmRcIiksIGlzRW5kW2kgKyAxXSksIF9jbGFzc05hbWVzKSlcbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIFwiYXJpYS1oaWRkZW5cIjogXCJ0cnVlXCIsXG4gICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWluZGVudFwiKVxuICB9LCBsaXN0KTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IEluZGVudDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMuSW50ZXJuYWxUcmVlTm9kZSA9IHZvaWQgMDtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpKTtcblxudmFyIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWRcIikpO1xuXG52YXIgX2luaGVyaXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIikpO1xuXG52YXIgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCIpKTtcblxudmFyIF9nZXRQcm90b3R5cGVPZjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2dldFByb3RvdHlwZU9mXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfY29udGV4dFR5cGVzID0gcmVxdWlyZShcIi4vY29udGV4dFR5cGVzXCIpO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuXG52YXIgX0luZGVudCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vSW5kZW50XCIpKTtcblxudmFyIF90cmVlVXRpbCA9IHJlcXVpcmUoXCIuL3V0aWxzL3RyZWVVdGlsXCIpO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlU3VwZXIoRGVyaXZlZCkgeyB2YXIgaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCA9IF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKTsgcmV0dXJuIGZ1bmN0aW9uIF9jcmVhdGVTdXBlckludGVybmFsKCkgeyB2YXIgU3VwZXIgPSAoMCwgX2dldFByb3RvdHlwZU9mMi5kZWZhdWx0KShEZXJpdmVkKSwgcmVzdWx0OyBpZiAoaGFzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCkgeyB2YXIgTmV3VGFyZ2V0ID0gKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkodGhpcykuY29uc3RydWN0b3I7IHJlc3VsdCA9IFJlZmxlY3QuY29uc3RydWN0KFN1cGVyLCBhcmd1bWVudHMsIE5ld1RhcmdldCk7IH0gZWxzZSB7IHJlc3VsdCA9IFN1cGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH0gcmV0dXJuICgwLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjIuZGVmYXVsdCkodGhpcywgcmVzdWx0KTsgfTsgfVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7IGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7IGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7IHRyeSB7IERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7IHJldHVybiB0cnVlOyB9IGNhdGNoIChlKSB7IHJldHVybiBmYWxzZTsgfSB9XG5cbnZhciBJQ09OX09QRU4gPSAnb3Blbic7XG52YXIgSUNPTl9DTE9TRSA9ICdjbG9zZSc7XG52YXIgZGVmYXVsdFRpdGxlID0gJy0tLSc7XG5cbnZhciBJbnRlcm5hbFRyZWVOb2RlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMyLmRlZmF1bHQpKEludGVybmFsVHJlZU5vZGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSBfY3JlYXRlU3VwZXIoSW50ZXJuYWxUcmVlTm9kZSk7XG5cbiAgZnVuY3Rpb24gSW50ZXJuYWxUcmVlTm9kZSgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMi5kZWZhdWx0KSh0aGlzLCBJbnRlcm5hbFRyZWVOb2RlKTtcbiAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgZHJhZ05vZGVIaWdobGlnaHQ6IGZhbHNlXG4gICAgfTtcblxuICAgIF90aGlzLm9uU2VsZWN0b3JDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAvLyBDbGljayB0cmlnZ2VyIGJlZm9yZSBzZWxlY3QvY2hlY2sgb3BlcmF0aW9uXG4gICAgICB2YXIgb25Ob2RlQ2xpY2sgPSBfdGhpcy5wcm9wcy5jb250ZXh0Lm9uTm9kZUNsaWNrO1xuICAgICAgb25Ob2RlQ2xpY2soZSwgKDAsIF90cmVlVXRpbC5jb252ZXJ0Tm9kZVByb3BzVG9FdmVudERhdGEpKF90aGlzLnByb3BzKSk7XG5cbiAgICAgIGlmIChfdGhpcy5pc1NlbGVjdGFibGUoKSkge1xuICAgICAgICBfdGhpcy5vblNlbGVjdChlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF90aGlzLm9uQ2hlY2soZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uU2VsZWN0b3JEb3VibGVDbGljayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgb25Ob2RlRG91YmxlQ2xpY2sgPSBfdGhpcy5wcm9wcy5jb250ZXh0Lm9uTm9kZURvdWJsZUNsaWNrO1xuICAgICAgb25Ob2RlRG91YmxlQ2xpY2soZSwgKDAsIF90cmVlVXRpbC5jb252ZXJ0Tm9kZVByb3BzVG9FdmVudERhdGEpKF90aGlzLnByb3BzKSk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uU2VsZWN0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChfdGhpcy5pc0Rpc2FibGVkKCkpIHJldHVybjtcbiAgICAgIHZhciBvbk5vZGVTZWxlY3QgPSBfdGhpcy5wcm9wcy5jb250ZXh0Lm9uTm9kZVNlbGVjdDtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIG9uTm9kZVNlbGVjdChlLCAoMCwgX3RyZWVVdGlsLmNvbnZlcnROb2RlUHJvcHNUb0V2ZW50RGF0YSkoX3RoaXMucHJvcHMpKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25DaGVjayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoX3RoaXMuaXNEaXNhYmxlZCgpKSByZXR1cm47XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBkaXNhYmxlQ2hlY2tib3ggPSBfdGhpcyRwcm9wcy5kaXNhYmxlQ2hlY2tib3gsXG4gICAgICAgICAgY2hlY2tlZCA9IF90aGlzJHByb3BzLmNoZWNrZWQ7XG4gICAgICB2YXIgb25Ob2RlQ2hlY2sgPSBfdGhpcy5wcm9wcy5jb250ZXh0Lm9uTm9kZUNoZWNrO1xuICAgICAgaWYgKCFfdGhpcy5pc0NoZWNrYWJsZSgpIHx8IGRpc2FibGVDaGVja2JveCkgcmV0dXJuO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIHRhcmdldENoZWNrZWQgPSAhY2hlY2tlZDtcbiAgICAgIG9uTm9kZUNoZWNrKGUsICgwLCBfdHJlZVV0aWwuY29udmVydE5vZGVQcm9wc1RvRXZlbnREYXRhKShfdGhpcy5wcm9wcyksIHRhcmdldENoZWNrZWQpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbk1vdXNlRW50ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG9uTm9kZU1vdXNlRW50ZXIgPSBfdGhpcy5wcm9wcy5jb250ZXh0Lm9uTm9kZU1vdXNlRW50ZXI7XG4gICAgICBvbk5vZGVNb3VzZUVudGVyKGUsICgwLCBfdHJlZVV0aWwuY29udmVydE5vZGVQcm9wc1RvRXZlbnREYXRhKShfdGhpcy5wcm9wcykpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbk1vdXNlTGVhdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG9uTm9kZU1vdXNlTGVhdmUgPSBfdGhpcy5wcm9wcy5jb250ZXh0Lm9uTm9kZU1vdXNlTGVhdmU7XG4gICAgICBvbk5vZGVNb3VzZUxlYXZlKGUsICgwLCBfdHJlZVV0aWwuY29udmVydE5vZGVQcm9wc1RvRXZlbnREYXRhKShfdGhpcy5wcm9wcykpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkNvbnRleHRNZW51ID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBvbk5vZGVDb250ZXh0TWVudSA9IF90aGlzLnByb3BzLmNvbnRleHQub25Ob2RlQ29udGV4dE1lbnU7XG4gICAgICBvbk5vZGVDb250ZXh0TWVudShlLCAoMCwgX3RyZWVVdGlsLmNvbnZlcnROb2RlUHJvcHNUb0V2ZW50RGF0YSkoX3RoaXMucHJvcHMpKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25EcmFnU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG9uTm9kZURyYWdTdGFydCA9IF90aGlzLnByb3BzLmNvbnRleHQub25Ob2RlRHJhZ1N0YXJ0O1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcmFnTm9kZUhpZ2hsaWdodDogdHJ1ZVxuICAgICAgfSk7XG5cbiAgICAgIG9uTm9kZURyYWdTdGFydChlLCAoMCwgX2Fzc2VydFRoaXNJbml0aWFsaXplZDIuZGVmYXVsdCkoX3RoaXMpKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gaWUgdGhyb3cgZXJyb3JcbiAgICAgICAgLy8gZmlyZWZveC1uZWVkLWl0XG4gICAgICAgIGUuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCAnJyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikgey8vIGVtcHR5XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uRHJhZ0VudGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBvbk5vZGVEcmFnRW50ZXIgPSBfdGhpcy5wcm9wcy5jb250ZXh0Lm9uTm9kZURyYWdFbnRlcjtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBvbk5vZGVEcmFnRW50ZXIoZSwgKDAsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQyLmRlZmF1bHQpKF90aGlzKSk7XG4gICAgfTtcblxuICAgIF90aGlzLm9uRHJhZ092ZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG9uTm9kZURyYWdPdmVyID0gX3RoaXMucHJvcHMuY29udGV4dC5vbk5vZGVEcmFnT3ZlcjtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBvbk5vZGVEcmFnT3ZlcihlLCAoMCwgX2Fzc2VydFRoaXNJbml0aWFsaXplZDIuZGVmYXVsdCkoX3RoaXMpKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25EcmFnTGVhdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG9uTm9kZURyYWdMZWF2ZSA9IF90aGlzLnByb3BzLmNvbnRleHQub25Ob2RlRHJhZ0xlYXZlO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIG9uTm9kZURyYWdMZWF2ZShlLCAoMCwgX2Fzc2VydFRoaXNJbml0aWFsaXplZDIuZGVmYXVsdCkoX3RoaXMpKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25EcmFnRW5kID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBvbk5vZGVEcmFnRW5kID0gX3RoaXMucHJvcHMuY29udGV4dC5vbk5vZGVEcmFnRW5kO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICBkcmFnTm9kZUhpZ2hsaWdodDogZmFsc2VcbiAgICAgIH0pO1xuXG4gICAgICBvbk5vZGVEcmFnRW5kKGUsICgwLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkMi5kZWZhdWx0KShfdGhpcykpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbkRyb3AgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIG9uTm9kZURyb3AgPSBfdGhpcy5wcm9wcy5jb250ZXh0Lm9uTm9kZURyb3A7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGRyYWdOb2RlSGlnaGxpZ2h0OiBmYWxzZVxuICAgICAgfSk7XG5cbiAgICAgIG9uTm9kZURyb3AoZSwgKDAsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQyLmRlZmF1bHQpKF90aGlzKSk7XG4gICAgfTsgLy8gRGlzYWJsZWQgaXRlbSBzdGlsbCBjYW4gYmUgc3dpdGNoXG5cblxuICAgIF90aGlzLm9uRXhwYW5kID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBvbk5vZGVFeHBhbmQgPSBfdGhpcy5wcm9wcy5jb250ZXh0Lm9uTm9kZUV4cGFuZDtcbiAgICAgIG9uTm9kZUV4cGFuZChlLCAoMCwgX3RyZWVVdGlsLmNvbnZlcnROb2RlUHJvcHNUb0V2ZW50RGF0YSkoX3RoaXMucHJvcHMpKTtcbiAgICB9OyAvLyBEcmFnIHVzYWdlXG5cblxuICAgIF90aGlzLnNldFNlbGVjdEhhbmRsZSA9IGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICBfdGhpcy5zZWxlY3RIYW5kbGUgPSBub2RlO1xuICAgIH07XG5cbiAgICBfdGhpcy5nZXROb2RlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZXhwYW5kZWQgPSBfdGhpcy5wcm9wcy5leHBhbmRlZDtcblxuICAgICAgaWYgKF90aGlzLmlzTGVhZigpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZXhwYW5kZWQgPyBJQ09OX09QRU4gOiBJQ09OX0NMT1NFO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYXNDaGlsZHJlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBldmVudEtleSA9IF90aGlzLnByb3BzLmV2ZW50S2V5O1xuICAgICAgdmFyIGtleUVudGl0aWVzID0gX3RoaXMucHJvcHMuY29udGV4dC5rZXlFbnRpdGllcztcblxuICAgICAgdmFyIF9yZWYgPSBrZXlFbnRpdGllc1tldmVudEtleV0gfHwge30sXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuXG4gICAgICByZXR1cm4gISEoY2hpbGRyZW4gfHwgW10pLmxlbmd0aDtcbiAgICB9O1xuXG4gICAgX3RoaXMuaXNMZWFmID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGlzTGVhZiA9IF90aGlzJHByb3BzMi5pc0xlYWYsXG4gICAgICAgICAgbG9hZGVkID0gX3RoaXMkcHJvcHMyLmxvYWRlZDtcbiAgICAgIHZhciBsb2FkRGF0YSA9IF90aGlzLnByb3BzLmNvbnRleHQubG9hZERhdGE7XG5cbiAgICAgIHZhciBoYXNDaGlsZHJlbiA9IF90aGlzLmhhc0NoaWxkcmVuKCk7XG5cbiAgICAgIGlmIChpc0xlYWYgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlzTGVhZiB8fCAhbG9hZERhdGEgJiYgIWhhc0NoaWxkcmVuIHx8IGxvYWREYXRhICYmIGxvYWRlZCAmJiAhaGFzQ2hpbGRyZW47XG4gICAgfTtcblxuICAgIF90aGlzLmlzRGlzYWJsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZGlzYWJsZWQgPSBfdGhpcy5wcm9wcy5kaXNhYmxlZDtcbiAgICAgIHZhciB0cmVlRGlzYWJsZWQgPSBfdGhpcy5wcm9wcy5jb250ZXh0LmRpc2FibGVkO1xuICAgICAgcmV0dXJuICEhKHRyZWVEaXNhYmxlZCB8fCBkaXNhYmxlZCk7XG4gICAgfTtcblxuICAgIF90aGlzLmlzQ2hlY2thYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNoZWNrYWJsZSA9IF90aGlzLnByb3BzLmNoZWNrYWJsZTtcbiAgICAgIHZhciB0cmVlQ2hlY2thYmxlID0gX3RoaXMucHJvcHMuY29udGV4dC5jaGVja2FibGU7IC8vIFJldHVybiBmYWxzZSBpZiB0cmVlIG9yIHRyZWVOb2RlIGlzIG5vdCBjaGVja2FibGVcblxuICAgICAgaWYgKCF0cmVlQ2hlY2thYmxlIHx8IGNoZWNrYWJsZSA9PT0gZmFsc2UpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cmVlQ2hlY2thYmxlO1xuICAgIH07IC8vIExvYWQgZGF0YSB0byBhdm9pZCBkZWZhdWx0IGV4cGFuZGVkIHRyZWUgd2l0aG91dCBkYXRhXG5cblxuICAgIF90aGlzLnN5bmNMb2FkRGF0YSA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgdmFyIGV4cGFuZGVkID0gcHJvcHMuZXhwYW5kZWQsXG4gICAgICAgICAgbG9hZGluZyA9IHByb3BzLmxvYWRpbmcsXG4gICAgICAgICAgbG9hZGVkID0gcHJvcHMubG9hZGVkO1xuICAgICAgdmFyIF90aGlzJHByb3BzJGNvbnRleHQgPSBfdGhpcy5wcm9wcy5jb250ZXh0LFxuICAgICAgICAgIGxvYWREYXRhID0gX3RoaXMkcHJvcHMkY29udGV4dC5sb2FkRGF0YSxcbiAgICAgICAgICBvbk5vZGVMb2FkID0gX3RoaXMkcHJvcHMkY29udGV4dC5vbk5vZGVMb2FkO1xuICAgICAgaWYgKGxvYWRpbmcpIHJldHVybjsgLy8gcmVhZCBmcm9tIHN0YXRlIHRvIGF2b2lkIGxvYWREYXRhIGF0IHNhbWUgdGltZVxuXG4gICAgICBpZiAobG9hZERhdGEgJiYgZXhwYW5kZWQgJiYgIV90aGlzLmlzTGVhZigpKSB7XG4gICAgICAgIC8vIFdlIG5lZWRuJ3QgcmVsb2FkIGRhdGEgd2hlbiBoYXMgY2hpbGRyZW4gaW4gc3luYyBsb2dpY1xuICAgICAgICAvLyBJdCdzIG9ubHkgbmVlZGVkIGluIG5vZGUgZXhwYW5kZWRcbiAgICAgICAgaWYgKCFfdGhpcy5oYXNDaGlsZHJlbigpICYmICFsb2FkZWQpIHtcbiAgICAgICAgICBvbk5vZGVMb2FkKCgwLCBfdHJlZVV0aWwuY29udmVydE5vZGVQcm9wc1RvRXZlbnREYXRhKShfdGhpcy5wcm9wcykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTsgLy8gU3dpdGNoZXJcblxuXG4gICAgX3RoaXMucmVuZGVyU3dpdGNoZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgZXhwYW5kZWQgPSBfdGhpcyRwcm9wczMuZXhwYW5kZWQsXG4gICAgICAgICAgc3dpdGNoZXJJY29uRnJvbVByb3BzID0gX3RoaXMkcHJvcHMzLnN3aXRjaGVySWNvbjtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyRjb250ZXh0MiA9IF90aGlzLnByb3BzLmNvbnRleHQsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMkY29udGV4dDIucHJlZml4Q2xzLFxuICAgICAgICAgIHN3aXRjaGVySWNvbkZyb21DdHggPSBfdGhpcyRwcm9wcyRjb250ZXh0Mi5zd2l0Y2hlckljb247XG4gICAgICB2YXIgc3dpdGNoZXJJY29uID0gc3dpdGNoZXJJY29uRnJvbVByb3BzIHx8IHN3aXRjaGVySWNvbkZyb21DdHg7XG5cbiAgICAgIGlmIChfdGhpcy5pc0xlYWYoKSkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc3dpdGNoZXJcIiksIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc3dpdGNoZXItbm9vcFwiKSlcbiAgICAgICAgfSwgdHlwZW9mIHN3aXRjaGVySWNvbiA9PT0gJ2Z1bmN0aW9uJyA/IHN3aXRjaGVySWNvbihfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIF90aGlzLnByb3BzKSwge30sIHtcbiAgICAgICAgICBpc0xlYWY6IHRydWVcbiAgICAgICAgfSkpIDogc3dpdGNoZXJJY29uKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN3aXRjaGVyQ2xzID0gKDAsIF9jbGFzc25hbWVzLmRlZmF1bHQpKFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc3dpdGNoZXJcIiksIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItc3dpdGNoZXJfXCIpLmNvbmNhdChleHBhbmRlZCA/IElDT05fT1BFTiA6IElDT05fQ0xPU0UpKTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIG9uQ2xpY2s6IF90aGlzLm9uRXhwYW5kLFxuICAgICAgICBjbGFzc05hbWU6IHN3aXRjaGVyQ2xzXG4gICAgICB9LCB0eXBlb2Ygc3dpdGNoZXJJY29uID09PSAnZnVuY3Rpb24nID8gc3dpdGNoZXJJY29uKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgX3RoaXMucHJvcHMpLCB7fSwge1xuICAgICAgICBpc0xlYWY6IGZhbHNlXG4gICAgICB9KSkgOiBzd2l0Y2hlckljb24pO1xuICAgIH07IC8vIENoZWNrYm94XG5cblxuICAgIF90aGlzLnJlbmRlckNoZWNrYm94ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGNoZWNrZWQgPSBfdGhpcyRwcm9wczQuY2hlY2tlZCxcbiAgICAgICAgICBoYWxmQ2hlY2tlZCA9IF90aGlzJHByb3BzNC5oYWxmQ2hlY2tlZCxcbiAgICAgICAgICBkaXNhYmxlQ2hlY2tib3ggPSBfdGhpcyRwcm9wczQuZGlzYWJsZUNoZWNrYm94O1xuICAgICAgdmFyIHByZWZpeENscyA9IF90aGlzLnByb3BzLmNvbnRleHQucHJlZml4Q2xzO1xuXG4gICAgICB2YXIgZGlzYWJsZWQgPSBfdGhpcy5pc0Rpc2FibGVkKCk7XG5cbiAgICAgIHZhciBjaGVja2FibGUgPSBfdGhpcy5pc0NoZWNrYWJsZSgpO1xuXG4gICAgICBpZiAoIWNoZWNrYWJsZSkgcmV0dXJuIG51bGw7IC8vIFtMZWdhY3ldIEN1c3RvbSBlbGVtZW50IHNob3VsZCBiZSBzZXBhcmF0ZSB3aXRoIGBjaGVja2FibGVgIGluIGZ1dHVyZVxuXG4gICAgICB2YXIgJGN1c3RvbSA9IHR5cGVvZiBjaGVja2FibGUgIT09ICdib29sZWFuJyA/IGNoZWNrYWJsZSA6IG51bGw7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNoZWNrYm94XCIpLCBjaGVja2VkICYmIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItY2hlY2tib3gtY2hlY2tlZFwiKSwgIWNoZWNrZWQgJiYgaGFsZkNoZWNrZWQgJiYgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1jaGVja2JveC1pbmRldGVybWluYXRlXCIpLCAoZGlzYWJsZWQgfHwgZGlzYWJsZUNoZWNrYm94KSAmJiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWNoZWNrYm94LWRpc2FibGVkXCIpKSxcbiAgICAgICAgb25DbGljazogX3RoaXMub25DaGVja1xuICAgICAgfSwgJGN1c3RvbSk7XG4gICAgfTtcblxuICAgIF90aGlzLnJlbmRlckljb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbG9hZGluZyA9IF90aGlzLnByb3BzLmxvYWRpbmc7XG4gICAgICB2YXIgcHJlZml4Q2xzID0gX3RoaXMucHJvcHMuY29udGV4dC5wcmVmaXhDbHM7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWljb25FbGVcIiksIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaWNvbl9fXCIpLmNvbmNhdChfdGhpcy5nZXROb2RlU3RhdGUoKSB8fCAnZG9jdScpLCBsb2FkaW5nICYmIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaWNvbl9sb2FkaW5nXCIpKVxuICAgICAgfSk7XG4gICAgfTsgLy8gSWNvbiArIFRpdGxlXG5cblxuICAgIF90aGlzLnJlbmRlclNlbGVjdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGRyYWdOb2RlSGlnaGxpZ2h0ID0gX3RoaXMuc3RhdGUuZHJhZ05vZGVIaWdobGlnaHQ7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgdGl0bGUgPSBfdGhpcyRwcm9wczUudGl0bGUsXG4gICAgICAgICAgc2VsZWN0ZWQgPSBfdGhpcyRwcm9wczUuc2VsZWN0ZWQsXG4gICAgICAgICAgaWNvbiA9IF90aGlzJHByb3BzNS5pY29uLFxuICAgICAgICAgIGxvYWRpbmcgPSBfdGhpcyRwcm9wczUubG9hZGluZyxcbiAgICAgICAgICBkYXRhID0gX3RoaXMkcHJvcHM1LmRhdGE7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMkY29udGV4dDMgPSBfdGhpcy5wcm9wcy5jb250ZXh0LFxuICAgICAgICAgIHByZWZpeENscyA9IF90aGlzJHByb3BzJGNvbnRleHQzLnByZWZpeENscyxcbiAgICAgICAgICBzaG93SWNvbiA9IF90aGlzJHByb3BzJGNvbnRleHQzLnNob3dJY29uLFxuICAgICAgICAgIHRyZWVJY29uID0gX3RoaXMkcHJvcHMkY29udGV4dDMuaWNvbixcbiAgICAgICAgICBkcmFnZ2FibGUgPSBfdGhpcyRwcm9wcyRjb250ZXh0My5kcmFnZ2FibGUsXG4gICAgICAgICAgbG9hZERhdGEgPSBfdGhpcyRwcm9wcyRjb250ZXh0My5sb2FkRGF0YTtcblxuICAgICAgdmFyIGRpc2FibGVkID0gX3RoaXMuaXNEaXNhYmxlZCgpO1xuXG4gICAgICB2YXIgd3JhcENsYXNzID0gXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ub2RlLWNvbnRlbnQtd3JhcHBlclwiKTsgLy8gSWNvbiAtIFN0aWxsIHNob3cgbG9hZGluZyBpY29uIHdoZW4gbG9hZGluZyB3aXRob3V0IHNob3dJY29uXG5cbiAgICAgIHZhciAkaWNvbjtcblxuICAgICAgaWYgKHNob3dJY29uKSB7XG4gICAgICAgIHZhciBjdXJyZW50SWNvbiA9IGljb24gfHwgdHJlZUljb247XG4gICAgICAgICRpY29uID0gY3VycmVudEljb24gPyBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXMuZGVmYXVsdCkoXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1pY29uRWxlXCIpLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWljb25fX2N1c3RvbWl6ZVwiKSlcbiAgICAgICAgfSwgdHlwZW9mIGN1cnJlbnRJY29uID09PSAnZnVuY3Rpb24nID8gY3VycmVudEljb24oX3RoaXMucHJvcHMpIDogY3VycmVudEljb24pIDogX3RoaXMucmVuZGVySWNvbigpO1xuICAgICAgfSBlbHNlIGlmIChsb2FkRGF0YSAmJiBsb2FkaW5nKSB7XG4gICAgICAgICRpY29uID0gX3RoaXMucmVuZGVySWNvbigpO1xuICAgICAgfSAvLyBUaXRsZVxuXG5cbiAgICAgIHZhciAkdGl0bGUgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10aXRsZVwiKVxuICAgICAgfSwgdHlwZW9mIHRpdGxlID09PSAnZnVuY3Rpb24nID8gdGl0bGUoZGF0YSkgOiB0aXRsZSk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICByZWY6IF90aGlzLnNldFNlbGVjdEhhbmRsZSxcbiAgICAgICAgdGl0bGU6IHR5cGVvZiB0aXRsZSA9PT0gJ3N0cmluZycgPyB0aXRsZSA6ICcnLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShcIlwiLmNvbmNhdCh3cmFwQ2xhc3MpLCBcIlwiLmNvbmNhdCh3cmFwQ2xhc3MsIFwiLVwiKS5jb25jYXQoX3RoaXMuZ2V0Tm9kZVN0YXRlKCkgfHwgJ25vcm1hbCcpLCAhZGlzYWJsZWQgJiYgKHNlbGVjdGVkIHx8IGRyYWdOb2RlSGlnaGxpZ2h0KSAmJiBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLW5vZGUtc2VsZWN0ZWRcIiksICFkaXNhYmxlZCAmJiBkcmFnZ2FibGUgJiYgJ2RyYWdnYWJsZScpLFxuICAgICAgICBkcmFnZ2FibGU6ICFkaXNhYmxlZCAmJiBkcmFnZ2FibGUgfHwgdW5kZWZpbmVkLFxuICAgICAgICBcImFyaWEtZ3JhYmJlZFwiOiAhZGlzYWJsZWQgJiYgZHJhZ2dhYmxlIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgb25Nb3VzZUVudGVyOiBfdGhpcy5vbk1vdXNlRW50ZXIsXG4gICAgICAgIG9uTW91c2VMZWF2ZTogX3RoaXMub25Nb3VzZUxlYXZlLFxuICAgICAgICBvbkNvbnRleHRNZW51OiBfdGhpcy5vbkNvbnRleHRNZW51LFxuICAgICAgICBvbkNsaWNrOiBfdGhpcy5vblNlbGVjdG9yQ2xpY2ssXG4gICAgICAgIG9uRG91YmxlQ2xpY2s6IF90aGlzLm9uU2VsZWN0b3JEb3VibGVDbGljayxcbiAgICAgICAgb25EcmFnU3RhcnQ6IGRyYWdnYWJsZSA/IF90aGlzLm9uRHJhZ1N0YXJ0IDogdW5kZWZpbmVkXG4gICAgICB9LCAkaWNvbiwgJHRpdGxlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9IC8vIElzb21vcnBoaWMgbmVlZG4ndCBsb2FkIGRhdGEgaW4gc2VydmVyIHNpZGVcblxuXG4gICgwLCBfY3JlYXRlQ2xhc3MyLmRlZmF1bHQpKEludGVybmFsVHJlZU5vZGUsIFt7XG4gICAga2V5OiBcImNvbXBvbmVudERpZE1vdW50XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5zeW5jTG9hZERhdGEodGhpcy5wcm9wcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNvbXBvbmVudERpZFVwZGF0ZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICB0aGlzLnN5bmNMb2FkRGF0YSh0aGlzLnByb3BzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNTZWxlY3RhYmxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzU2VsZWN0YWJsZSgpIHtcbiAgICAgIHZhciBzZWxlY3RhYmxlID0gdGhpcy5wcm9wcy5zZWxlY3RhYmxlO1xuICAgICAgdmFyIHRyZWVTZWxlY3RhYmxlID0gdGhpcy5wcm9wcy5jb250ZXh0LnNlbGVjdGFibGU7IC8vIElnbm9yZSB3aGVuIHNlbGVjdGFibGUgaXMgdW5kZWZpbmVkIG9yIG51bGxcblxuICAgICAgaWYgKHR5cGVvZiBzZWxlY3RhYmxlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGFibGU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cmVlU2VsZWN0YWJsZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgdmFyIF90aGlzJHByb3BzNiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZXZlbnRLZXkgPSBfdGhpcyRwcm9wczYuZXZlbnRLZXksXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHM2LmNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzNi5zdHlsZSxcbiAgICAgICAgICBkcmFnT3ZlciA9IF90aGlzJHByb3BzNi5kcmFnT3ZlcixcbiAgICAgICAgICBkcmFnT3ZlckdhcFRvcCA9IF90aGlzJHByb3BzNi5kcmFnT3ZlckdhcFRvcCxcbiAgICAgICAgICBkcmFnT3ZlckdhcEJvdHRvbSA9IF90aGlzJHByb3BzNi5kcmFnT3ZlckdhcEJvdHRvbSxcbiAgICAgICAgICBpc0xlYWYgPSBfdGhpcyRwcm9wczYuaXNMZWFmLFxuICAgICAgICAgIGlzU3RhcnQgPSBfdGhpcyRwcm9wczYuaXNTdGFydCxcbiAgICAgICAgICBpc0VuZCA9IF90aGlzJHByb3BzNi5pc0VuZCxcbiAgICAgICAgICBleHBhbmRlZCA9IF90aGlzJHByb3BzNi5leHBhbmRlZCxcbiAgICAgICAgICBzZWxlY3RlZCA9IF90aGlzJHByb3BzNi5zZWxlY3RlZCxcbiAgICAgICAgICBjaGVja2VkID0gX3RoaXMkcHJvcHM2LmNoZWNrZWQsXG4gICAgICAgICAgaGFsZkNoZWNrZWQgPSBfdGhpcyRwcm9wczYuaGFsZkNoZWNrZWQsXG4gICAgICAgICAgbG9hZGluZyA9IF90aGlzJHByb3BzNi5sb2FkaW5nLFxuICAgICAgICAgIGRvbVJlZiA9IF90aGlzJHByb3BzNi5kb21SZWYsXG4gICAgICAgICAgYWN0aXZlID0gX3RoaXMkcHJvcHM2LmFjdGl2ZSxcbiAgICAgICAgICBvbk1vdXNlTW92ZSA9IF90aGlzJHByb3BzNi5vbk1vdXNlTW92ZSxcbiAgICAgICAgICBvdGhlclByb3BzID0gKDAsIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIuZGVmYXVsdCkoX3RoaXMkcHJvcHM2LCBbXCJldmVudEtleVwiLCBcImNsYXNzTmFtZVwiLCBcInN0eWxlXCIsIFwiZHJhZ092ZXJcIiwgXCJkcmFnT3ZlckdhcFRvcFwiLCBcImRyYWdPdmVyR2FwQm90dG9tXCIsIFwiaXNMZWFmXCIsIFwiaXNTdGFydFwiLCBcImlzRW5kXCIsIFwiZXhwYW5kZWRcIiwgXCJzZWxlY3RlZFwiLCBcImNoZWNrZWRcIiwgXCJoYWxmQ2hlY2tlZFwiLCBcImxvYWRpbmdcIiwgXCJkb21SZWZcIiwgXCJhY3RpdmVcIiwgXCJvbk1vdXNlTW92ZVwiXSk7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMkY29udGV4dDQgPSB0aGlzLnByb3BzLmNvbnRleHQsXG4gICAgICAgICAgcHJlZml4Q2xzID0gX3RoaXMkcHJvcHMkY29udGV4dDQucHJlZml4Q2xzLFxuICAgICAgICAgIGZpbHRlclRyZWVOb2RlID0gX3RoaXMkcHJvcHMkY29udGV4dDQuZmlsdGVyVHJlZU5vZGUsXG4gICAgICAgICAgZHJhZ2dhYmxlID0gX3RoaXMkcHJvcHMkY29udGV4dDQuZHJhZ2dhYmxlLFxuICAgICAgICAgIGtleUVudGl0aWVzID0gX3RoaXMkcHJvcHMkY29udGV4dDQua2V5RW50aXRpZXM7XG4gICAgICB2YXIgZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoKTtcbiAgICAgIHZhciBkYXRhT3JBcmlhQXR0cmlidXRlUHJvcHMgPSAoMCwgX3V0aWwuZ2V0RGF0YUFuZEFyaWEpKG90aGVyUHJvcHMpO1xuXG4gICAgICB2YXIgX3JlZjIgPSBrZXlFbnRpdGllc1tldmVudEtleV0gfHwge30sXG4gICAgICAgICAgbGV2ZWwgPSBfcmVmMi5sZXZlbDtcblxuICAgICAgdmFyIGlzRW5kTm9kZSA9IGlzRW5kW2lzRW5kLmxlbmd0aCAtIDFdO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHJlZjogZG9tUmVmLFxuICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lcy5kZWZhdWx0KShjbGFzc05hbWUsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdHJlZW5vZGVcIiksIChfY2xhc3NOYW1lcyA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10cmVlbm9kZS1kaXNhYmxlZFwiKSwgZGlzYWJsZWQpLCAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10cmVlbm9kZS1zd2l0Y2hlci1cIikuY29uY2F0KGV4cGFuZGVkID8gJ29wZW4nIDogJ2Nsb3NlJyksICFpc0xlYWYpLCAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10cmVlbm9kZS1jaGVja2JveC1jaGVja2VkXCIpLCBjaGVja2VkKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdHJlZW5vZGUtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZVwiKSwgaGFsZkNoZWNrZWQpLCAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10cmVlbm9kZS1zZWxlY3RlZFwiKSwgc2VsZWN0ZWQpLCAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10cmVlbm9kZS1sb2FkaW5nXCIpLCBsb2FkaW5nKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItdHJlZW5vZGUtYWN0aXZlXCIpLCBhY3RpdmUpLCAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShfY2xhc3NOYW1lcywgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi10cmVlbm9kZS1sZWFmLWxhc3RcIiksIGlzRW5kTm9kZSksICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKF9jbGFzc05hbWVzLCAnZHJhZy1vdmVyJywgIWRpc2FibGVkICYmIGRyYWdPdmVyKSwgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkoX2NsYXNzTmFtZXMsICdkcmFnLW92ZXItZ2FwLXRvcCcsICFkaXNhYmxlZCAmJiBkcmFnT3ZlckdhcFRvcCksICgwLCBfZGVmaW5lUHJvcGVydHkyLmRlZmF1bHQpKF9jbGFzc05hbWVzLCAnZHJhZy1vdmVyLWdhcC1ib3R0b20nLCAhZGlzYWJsZWQgJiYgZHJhZ092ZXJHYXBCb3R0b20pLCAoMCwgX2RlZmluZVByb3BlcnR5Mi5kZWZhdWx0KShfY2xhc3NOYW1lcywgJ2ZpbHRlci1ub2RlJywgZmlsdGVyVHJlZU5vZGUgJiYgZmlsdGVyVHJlZU5vZGUoKDAsIF90cmVlVXRpbC5jb252ZXJ0Tm9kZVByb3BzVG9FdmVudERhdGEpKHRoaXMucHJvcHMpKSksIF9jbGFzc05hbWVzKSksXG4gICAgICAgIHN0eWxlOiBzdHlsZSxcbiAgICAgICAgb25EcmFnRW50ZXI6IGRyYWdnYWJsZSA/IHRoaXMub25EcmFnRW50ZXIgOiB1bmRlZmluZWQsXG4gICAgICAgIG9uRHJhZ092ZXI6IGRyYWdnYWJsZSA/IHRoaXMub25EcmFnT3ZlciA6IHVuZGVmaW5lZCxcbiAgICAgICAgb25EcmFnTGVhdmU6IGRyYWdnYWJsZSA/IHRoaXMub25EcmFnTGVhdmUgOiB1bmRlZmluZWQsXG4gICAgICAgIG9uRHJvcDogZHJhZ2dhYmxlID8gdGhpcy5vbkRyb3AgOiB1bmRlZmluZWQsXG4gICAgICAgIG9uRHJhZ0VuZDogZHJhZ2dhYmxlID8gdGhpcy5vbkRyYWdFbmQgOiB1bmRlZmluZWQsXG4gICAgICAgIG9uTW91c2VNb3ZlOiBvbk1vdXNlTW92ZVxuICAgICAgfSwgZGF0YU9yQXJpYUF0dHJpYnV0ZVByb3BzKSwgUmVhY3QuY3JlYXRlRWxlbWVudChfSW5kZW50LmRlZmF1bHQsIHtcbiAgICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICAgIGxldmVsOiBsZXZlbCxcbiAgICAgICAgaXNTdGFydDogaXNTdGFydCxcbiAgICAgICAgaXNFbmQ6IGlzRW5kXG4gICAgICB9KSwgdGhpcy5yZW5kZXJTd2l0Y2hlcigpLCB0aGlzLnJlbmRlckNoZWNrYm94KCksIHRoaXMucmVuZGVyU2VsZWN0b3IoKSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBJbnRlcm5hbFRyZWVOb2RlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5leHBvcnRzLkludGVybmFsVHJlZU5vZGUgPSBJbnRlcm5hbFRyZWVOb2RlO1xuXG52YXIgQ29udGV4dFRyZWVOb2RlID0gZnVuY3Rpb24gQ29udGV4dFRyZWVOb2RlKHByb3BzKSB7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KF9jb250ZXh0VHlwZXMuVHJlZUNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW50ZXJuYWxUcmVlTm9kZSwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgIGNvbnRleHQ6IGNvbnRleHRcbiAgICB9KSk7XG4gIH0pO1xufTtcblxuQ29udGV4dFRyZWVOb2RlLmRpc3BsYXlOYW1lID0gJ1RyZWVOb2RlJztcbkNvbnRleHRUcmVlTm9kZS5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlOiBkZWZhdWx0VGl0bGVcbn07XG5Db250ZXh0VHJlZU5vZGUuaXNUcmVlTm9kZSA9IDE7XG52YXIgX2RlZmF1bHQgPSBDb250ZXh0VHJlZU5vZGU7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuVHJlZUNvbnRleHQgPSB2b2lkIDA7XG5cbnZhciBSZWFjdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbi8qKlxuICogV2VicGFjayBoYXMgYnVnIGZvciBpbXBvcnQgbG9vcCwgd2hpY2ggaXMgbm90IHRoZSBzYW1lIGJlaGF2aW9yIGFzIEVTIG1vZHVsZS5cbiAqIFdoZW4gdXRpbC5qcyBpbXBvcnRzIHRoZSBUcmVlTm9kZSBmb3IgdHJlZSBnZW5lcmF0ZSB3aWxsIGNhdXNlIHRyZWVDb250ZXh0VHlwZXMgYmUgZW1wdHkuXG4gKi9cbnZhciBUcmVlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5leHBvcnRzLlRyZWVDb250ZXh0ID0gVHJlZUNvbnRleHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5hcnJEZWwgPSBhcnJEZWw7XG5leHBvcnRzLmFyckFkZCA9IGFyckFkZDtcbmV4cG9ydHMucG9zVG9BcnIgPSBwb3NUb0FycjtcbmV4cG9ydHMuZ2V0UG9zaXRpb24gPSBnZXRQb3NpdGlvbjtcbmV4cG9ydHMuaXNUcmVlTm9kZSA9IGlzVHJlZU5vZGU7XG5leHBvcnRzLmdldERyYWdOb2Rlc0tleXMgPSBnZXREcmFnTm9kZXNLZXlzO1xuZXhwb3J0cy5jYWxjRHJvcFBvc2l0aW9uID0gY2FsY0Ryb3BQb3NpdGlvbjtcbmV4cG9ydHMuY2FsY1NlbGVjdGVkS2V5cyA9IGNhbGNTZWxlY3RlZEtleXM7XG5leHBvcnRzLmNvbnZlcnREYXRhVG9UcmVlID0gY29udmVydERhdGFUb1RyZWU7XG5leHBvcnRzLnBhcnNlQ2hlY2tlZEtleXMgPSBwYXJzZUNoZWNrZWRLZXlzO1xuZXhwb3J0cy5jb25kdWN0RXhwYW5kUGFyZW50ID0gY29uZHVjdEV4cGFuZFBhcmVudDtcbmV4cG9ydHMuZ2V0RGF0YUFuZEFyaWEgPSBnZXREYXRhQW5kQXJpYTtcblxudmFyIF90b0NvbnN1bWFibGVBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpKTtcblxudmFyIF90eXBlb2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIikpO1xuXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIikpO1xuXG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3dhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy11dGlsL2xpYi93YXJuaW5nXCIpKTtcblxudmFyIF9UcmVlTm9kZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vVHJlZU5vZGVcIikpO1xuXG4vKipcbiAqIExlZ2FjeSBjb2RlLiBTaG91bGQgYXZvaWQgdG8gdXNlIGlmIHlvdSBhcmUgbmV3IHRvIGltcG9ydCB0aGVzZSBjb2RlLlxuICovXG52YXIgRFJBR19TSURFX1JBTkdFID0gMC4yNTtcbnZhciBEUkFHX01JTl9HQVAgPSAyO1xuXG5mdW5jdGlvbiBhcnJEZWwobGlzdCwgdmFsdWUpIHtcbiAgdmFyIGNsb25lID0gbGlzdC5zbGljZSgpO1xuICB2YXIgaW5kZXggPSBjbG9uZS5pbmRleE9mKHZhbHVlKTtcblxuICBpZiAoaW5kZXggPj0gMCkge1xuICAgIGNsb25lLnNwbGljZShpbmRleCwgMSk7XG4gIH1cblxuICByZXR1cm4gY2xvbmU7XG59XG5cbmZ1bmN0aW9uIGFyckFkZChsaXN0LCB2YWx1ZSkge1xuICB2YXIgY2xvbmUgPSBsaXN0LnNsaWNlKCk7XG5cbiAgaWYgKGNsb25lLmluZGV4T2YodmFsdWUpID09PSAtMSkge1xuICAgIGNsb25lLnB1c2godmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIGNsb25lO1xufVxuXG5mdW5jdGlvbiBwb3NUb0Fycihwb3MpIHtcbiAgcmV0dXJuIHBvcy5zcGxpdCgnLScpO1xufVxuXG5mdW5jdGlvbiBnZXRQb3NpdGlvbihsZXZlbCwgaW5kZXgpIHtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KGxldmVsLCBcIi1cIikuY29uY2F0KGluZGV4KTtcbn1cblxuZnVuY3Rpb24gaXNUcmVlTm9kZShub2RlKSB7XG4gIHJldHVybiBub2RlICYmIG5vZGUudHlwZSAmJiBub2RlLnR5cGUuaXNUcmVlTm9kZTtcbn1cblxuZnVuY3Rpb24gZ2V0RHJhZ05vZGVzS2V5cyhkcmFnTm9kZUtleSwga2V5RW50aXRpZXMpIHtcbiAgdmFyIGRyYWdOb2Rlc0tleXMgPSBbZHJhZ05vZGVLZXldO1xuICB2YXIgZW50aXR5ID0ga2V5RW50aXRpZXNbZHJhZ05vZGVLZXldO1xuXG4gIGZ1bmN0aW9uIGRpZygpIHtcbiAgICB2YXIgbGlzdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG4gICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIga2V5ID0gX3JlZi5rZXksXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICAgICAgZHJhZ05vZGVzS2V5cy5wdXNoKGtleSk7XG4gICAgICBkaWcoY2hpbGRyZW4pO1xuICAgIH0pO1xuICB9XG5cbiAgZGlnKGVudGl0eS5jaGlsZHJlbik7XG4gIHJldHVybiBkcmFnTm9kZXNLZXlzO1xufSAvLyBPbmx5IHVzZWQgd2hlbiBkcmFnLCBub3QgYWZmZWN0IFNTUi5cblxuXG5mdW5jdGlvbiBjYWxjRHJvcFBvc2l0aW9uKGV2ZW50LCB0cmVlTm9kZSkge1xuICB2YXIgY2xpZW50WSA9IGV2ZW50LmNsaWVudFk7XG5cbiAgdmFyIF90cmVlTm9kZSRzZWxlY3RIYW5kbCA9IHRyZWVOb2RlLnNlbGVjdEhhbmRsZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHRvcCA9IF90cmVlTm9kZSRzZWxlY3RIYW5kbC50b3AsXG4gICAgICBib3R0b20gPSBfdHJlZU5vZGUkc2VsZWN0SGFuZGwuYm90dG9tLFxuICAgICAgaGVpZ2h0ID0gX3RyZWVOb2RlJHNlbGVjdEhhbmRsLmhlaWdodDtcblxuICB2YXIgZGVzID0gTWF0aC5tYXgoaGVpZ2h0ICogRFJBR19TSURFX1JBTkdFLCBEUkFHX01JTl9HQVApO1xuXG4gIGlmIChjbGllbnRZIDw9IHRvcCArIGRlcykge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIGlmIChjbGllbnRZID49IGJvdHRvbSAtIGRlcykge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgcmV0dXJuIDA7XG59XG4vKipcbiAqIFJldHVybiBzZWxlY3RlZEtleXMgYWNjb3JkaW5nIHdpdGggbXVsdGlwbGUgcHJvcFxuICogQHBhcmFtIHNlbGVjdGVkS2V5c1xuICogQHBhcmFtIHByb3BzXG4gKiBAcmV0dXJucyBbc3RyaW5nXVxuICovXG5cblxuZnVuY3Rpb24gY2FsY1NlbGVjdGVkS2V5cyhzZWxlY3RlZEtleXMsIHByb3BzKSB7XG4gIGlmICghc2VsZWN0ZWRLZXlzKSByZXR1cm4gdW5kZWZpbmVkO1xuICB2YXIgbXVsdGlwbGUgPSBwcm9wcy5tdWx0aXBsZTtcblxuICBpZiAobXVsdGlwbGUpIHtcbiAgICByZXR1cm4gc2VsZWN0ZWRLZXlzLnNsaWNlKCk7XG4gIH1cblxuICBpZiAoc2VsZWN0ZWRLZXlzLmxlbmd0aCkge1xuICAgIHJldHVybiBbc2VsZWN0ZWRLZXlzWzBdXTtcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RlZEtleXM7XG59XG5cbnZhciBpbnRlcm5hbFByb2Nlc3NQcm9wcyA9IGZ1bmN0aW9uIGludGVybmFsUHJvY2Vzc1Byb3BzKHByb3BzKSB7XG4gIHJldHVybiBwcm9wcztcbn07XG5cbmZ1bmN0aW9uIGNvbnZlcnREYXRhVG9UcmVlKHRyZWVEYXRhLCBwcm9jZXNzb3IpIHtcbiAgaWYgKCF0cmVlRGF0YSkgcmV0dXJuIFtdO1xuXG4gIHZhciBfcmVmMiA9IHByb2Nlc3NvciB8fCB7fSxcbiAgICAgIF9yZWYyJHByb2Nlc3NQcm9wcyA9IF9yZWYyLnByb2Nlc3NQcm9wcyxcbiAgICAgIHByb2Nlc3NQcm9wcyA9IF9yZWYyJHByb2Nlc3NQcm9wcyA9PT0gdm9pZCAwID8gaW50ZXJuYWxQcm9jZXNzUHJvcHMgOiBfcmVmMiRwcm9jZXNzUHJvcHM7XG5cbiAgdmFyIGxpc3QgPSBBcnJheS5pc0FycmF5KHRyZWVEYXRhKSA/IHRyZWVEYXRhIDogW3RyZWVEYXRhXTtcbiAgcmV0dXJuIGxpc3QubWFwKGZ1bmN0aW9uIChfcmVmMykge1xuICAgIHZhciBjaGlsZHJlbiA9IF9yZWYzLmNoaWxkcmVuLFxuICAgICAgICBwcm9wcyA9ICgwLCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMyLmRlZmF1bHQpKF9yZWYzLCBbXCJjaGlsZHJlblwiXSk7XG4gICAgdmFyIGNoaWxkcmVuTm9kZXMgPSBjb252ZXJ0RGF0YVRvVHJlZShjaGlsZHJlbiwgcHJvY2Vzc29yKTtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfVHJlZU5vZGUuZGVmYXVsdCwgT2JqZWN0LmFzc2lnbih7fSwgcHJvY2Vzc1Byb3BzKHByb3BzKSksIGNoaWxkcmVuTm9kZXMpO1xuICB9KTtcbn1cbi8qKlxuICogUGFyc2UgYGNoZWNrZWRLZXlzYCB0byB7IGNoZWNrZWRLZXlzLCBoYWxmQ2hlY2tlZEtleXMgfSBzdHlsZVxuICovXG5cblxuZnVuY3Rpb24gcGFyc2VDaGVja2VkS2V5cyhrZXlzKSB7XG4gIGlmICgha2V5cykge1xuICAgIHJldHVybiBudWxsO1xuICB9IC8vIENvbnZlcnQga2V5cyB0byBvYmplY3QgZm9ybWF0XG5cblxuICB2YXIga2V5UHJvcHM7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoa2V5cykpIHtcbiAgICAvLyBbTGVnYWN5XSBGb2xsb3cgdGhlIGFwaSBkb2NcbiAgICBrZXlQcm9wcyA9IHtcbiAgICAgIGNoZWNrZWRLZXlzOiBrZXlzLFxuICAgICAgaGFsZkNoZWNrZWRLZXlzOiB1bmRlZmluZWRcbiAgICB9O1xuICB9IGVsc2UgaWYgKCgwLCBfdHlwZW9mMi5kZWZhdWx0KShrZXlzKSA9PT0gJ29iamVjdCcpIHtcbiAgICBrZXlQcm9wcyA9IHtcbiAgICAgIGNoZWNrZWRLZXlzOiBrZXlzLmNoZWNrZWQgfHwgdW5kZWZpbmVkLFxuICAgICAgaGFsZkNoZWNrZWRLZXlzOiBrZXlzLmhhbGZDaGVja2VkIHx8IHVuZGVmaW5lZFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgKDAsIF93YXJuaW5nLmRlZmF1bHQpKGZhbHNlLCAnYGNoZWNrZWRLZXlzYCBpcyBub3QgYW4gYXJyYXkgb3IgYW4gb2JqZWN0Jyk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ga2V5UHJvcHM7XG59XG4vKipcbiAqIElmIHVzZXIgdXNlIGBhdXRvRXhwYW5kUGFyZW50YCB3ZSBzaG91bGQgZ2V0IHRoZSBsaXN0IG9mIHBhcmVudCBub2RlXG4gKiBAcGFyYW0ga2V5TGlzdFxuICogQHBhcmFtIGtleUVudGl0aWVzXG4gKi9cblxuXG5mdW5jdGlvbiBjb25kdWN0RXhwYW5kUGFyZW50KGtleUxpc3QsIGtleUVudGl0aWVzKSB7XG4gIHZhciBleHBhbmRlZEtleXMgPSBuZXcgU2V0KCk7XG5cbiAgZnVuY3Rpb24gY29uZHVjdFVwKGtleSkge1xuICAgIGlmIChleHBhbmRlZEtleXMuaGFzKGtleSkpIHJldHVybjtcbiAgICB2YXIgZW50aXR5ID0ga2V5RW50aXRpZXNba2V5XTtcbiAgICBpZiAoIWVudGl0eSkgcmV0dXJuO1xuICAgIGV4cGFuZGVkS2V5cy5hZGQoa2V5KTtcbiAgICB2YXIgcGFyZW50ID0gZW50aXR5LnBhcmVudCxcbiAgICAgICAgbm9kZSA9IGVudGl0eS5ub2RlO1xuICAgIGlmIChub2RlLmRpc2FibGVkKSByZXR1cm47XG5cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBjb25kdWN0VXAocGFyZW50LmtleSk7XG4gICAgfVxuICB9XG5cbiAgKGtleUxpc3QgfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGNvbmR1Y3RVcChrZXkpO1xuICB9KTtcbiAgcmV0dXJuICgwLCBfdG9Db25zdW1hYmxlQXJyYXkyLmRlZmF1bHQpKGV4cGFuZGVkS2V5cyk7XG59XG4vKipcbiAqIFJldHVybnMgb25seSB0aGUgZGF0YS0gYW5kIGFyaWEtIGtleS92YWx1ZSBwYWlyc1xuICovXG5cblxuZnVuY3Rpb24gZ2V0RGF0YUFuZEFyaWEocHJvcHMpIHtcbiAgdmFyIG9taXRQcm9wcyA9IHt9O1xuICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleS5zdGFydHNXaXRoKCdkYXRhLScpIHx8IGtleS5zdGFydHNXaXRoKCdhcmlhLScpKSB7XG4gICAgICBvbWl0UHJvcHNba2V5XSA9IHByb3BzW2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG9taXRQcm9wcztcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmlzQ2hlY2tEaXNhYmxlZCA9IGlzQ2hlY2tEaXNhYmxlZDtcbmV4cG9ydHMuY29uZHVjdENoZWNrID0gY29uZHVjdENoZWNrO1xuXG52YXIgX3dhcm5pbmcgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyYy11dGlsL2xpYi93YXJuaW5nXCIpKTtcblxuZnVuY3Rpb24gcmVtb3ZlRnJvbUNoZWNrZWRLZXlzKGhhbGZDaGVja2VkS2V5cywgY2hlY2tlZEtleXMpIHtcbiAgdmFyIGZpbHRlcmVkS2V5cyA9IG5ldyBTZXQoKTtcbiAgaGFsZkNoZWNrZWRLZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghY2hlY2tlZEtleXMuaGFzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkS2V5cy5hZGQoa2V5KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZmlsdGVyZWRLZXlzO1xufVxuXG5mdW5jdGlvbiBpc0NoZWNrRGlzYWJsZWQobm9kZSkge1xuICB2YXIgX3JlZiA9IG5vZGUgfHwge30sXG4gICAgICBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICBkaXNhYmxlQ2hlY2tib3ggPSBfcmVmLmRpc2FibGVDaGVja2JveCxcbiAgICAgIGNoZWNrYWJsZSA9IF9yZWYuY2hlY2thYmxlO1xuXG4gIHJldHVybiAhIShkaXNhYmxlZCB8fCBkaXNhYmxlQ2hlY2tib3gpIHx8IGNoZWNrYWJsZSA9PT0gZmFsc2U7XG59IC8vIEZpbGwgbWlzcyBrZXlzXG5cblxuZnVuY3Rpb24gZmlsbENvbmR1Y3RDaGVjayhrZXlzLCBsZXZlbEVudGl0aWVzLCBtYXhMZXZlbCwgc3ludGhldGljR2V0Q2hlY2tEaXNhYmxlZCkge1xuICB2YXIgY2hlY2tlZEtleXMgPSBuZXcgU2V0KGtleXMpO1xuICB2YXIgaGFsZkNoZWNrZWRLZXlzID0gbmV3IFNldCgpOyAvLyBBZGQgY2hlY2tlZCBrZXlzIHRvcCB0byBib3R0b21cblxuICBmb3IgKHZhciBsZXZlbCA9IDA7IGxldmVsIDw9IG1heExldmVsOyBsZXZlbCArPSAxKSB7XG4gICAgdmFyIGVudGl0aWVzID0gbGV2ZWxFbnRpdGllcy5nZXQobGV2ZWwpIHx8IG5ldyBTZXQoKTtcbiAgICBlbnRpdGllcy5mb3JFYWNoKGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgICAgIHZhciBrZXkgPSBlbnRpdHkua2V5LFxuICAgICAgICAgIG5vZGUgPSBlbnRpdHkubm9kZSxcbiAgICAgICAgICBfZW50aXR5JGNoaWxkcmVuID0gZW50aXR5LmNoaWxkcmVuLFxuICAgICAgICAgIGNoaWxkcmVuID0gX2VudGl0eSRjaGlsZHJlbiA9PT0gdm9pZCAwID8gW10gOiBfZW50aXR5JGNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hlY2tlZEtleXMuaGFzKGtleSkgJiYgIXN5bnRoZXRpY0dldENoZWNrRGlzYWJsZWQobm9kZSkpIHtcbiAgICAgICAgY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjaGlsZEVudGl0eSkge1xuICAgICAgICAgIHJldHVybiAhc3ludGhldGljR2V0Q2hlY2tEaXNhYmxlZChjaGlsZEVudGl0eS5ub2RlKTtcbiAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGRFbnRpdHkpIHtcbiAgICAgICAgICBjaGVja2VkS2V5cy5hZGQoY2hpbGRFbnRpdHkua2V5KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gLy8gQWRkIGNoZWNrZWQga2V5cyBmcm9tIGJvdHRvbSB0byB0b3BcblxuXG4gIHZhciB2aXNpdGVkS2V5cyA9IG5ldyBTZXQoKTtcblxuICBmb3IgKHZhciBfbGV2ZWwgPSBtYXhMZXZlbDsgX2xldmVsID49IDA7IF9sZXZlbCAtPSAxKSB7XG4gICAgdmFyIF9lbnRpdGllcyA9IGxldmVsRW50aXRpZXMuZ2V0KF9sZXZlbCkgfHwgbmV3IFNldCgpO1xuXG4gICAgX2VudGl0aWVzLmZvckVhY2goZnVuY3Rpb24gKGVudGl0eSkge1xuICAgICAgdmFyIHBhcmVudCA9IGVudGl0eS5wYXJlbnQsXG4gICAgICAgICAgbm9kZSA9IGVudGl0eS5ub2RlOyAvLyBTa2lwIGlmIG5vIG5lZWQgdG8gY2hlY2tcblxuICAgICAgaWYgKHN5bnRoZXRpY0dldENoZWNrRGlzYWJsZWQobm9kZSkgfHwgIWVudGl0eS5wYXJlbnQgfHwgdmlzaXRlZEtleXMuaGFzKGVudGl0eS5wYXJlbnQua2V5KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IC8vIFNraXAgaWYgcGFyZW50IGlzIGRpc2FibGVkXG5cblxuICAgICAgaWYgKHN5bnRoZXRpY0dldENoZWNrRGlzYWJsZWQoZW50aXR5LnBhcmVudC5ub2RlKSkge1xuICAgICAgICB2aXNpdGVkS2V5cy5hZGQocGFyZW50LmtleSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGFsbENoZWNrZWQgPSB0cnVlO1xuICAgICAgdmFyIHBhcnRpYWxDaGVja2VkID0gZmFsc2U7XG4gICAgICAocGFyZW50LmNoaWxkcmVuIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24gKGNoaWxkRW50aXR5KSB7XG4gICAgICAgIHJldHVybiAhc3ludGhldGljR2V0Q2hlY2tEaXNhYmxlZChjaGlsZEVudGl0eS5ub2RlKTtcbiAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgIHZhciBrZXkgPSBfcmVmMi5rZXk7XG4gICAgICAgIHZhciBjaGVja2VkID0gY2hlY2tlZEtleXMuaGFzKGtleSk7XG5cbiAgICAgICAgaWYgKGFsbENoZWNrZWQgJiYgIWNoZWNrZWQpIHtcbiAgICAgICAgICBhbGxDaGVja2VkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBhcnRpYWxDaGVja2VkICYmIChjaGVja2VkIHx8IGhhbGZDaGVja2VkS2V5cy5oYXMoa2V5KSkpIHtcbiAgICAgICAgICBwYXJ0aWFsQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoYWxsQ2hlY2tlZCkge1xuICAgICAgICBjaGVja2VkS2V5cy5hZGQocGFyZW50LmtleSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJ0aWFsQ2hlY2tlZCkge1xuICAgICAgICBoYWxmQ2hlY2tlZEtleXMuYWRkKHBhcmVudC5rZXkpO1xuICAgICAgfVxuXG4gICAgICB2aXNpdGVkS2V5cy5hZGQocGFyZW50LmtleSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNoZWNrZWRLZXlzOiBBcnJheS5mcm9tKGNoZWNrZWRLZXlzKSxcbiAgICBoYWxmQ2hlY2tlZEtleXM6IEFycmF5LmZyb20ocmVtb3ZlRnJvbUNoZWNrZWRLZXlzKGhhbGZDaGVja2VkS2V5cywgY2hlY2tlZEtleXMpKVxuICB9O1xufSAvLyBSZW1vdmUgdXNlbGVzcyBrZXlcblxuXG5mdW5jdGlvbiBjbGVhbkNvbmR1Y3RDaGVjayhrZXlzLCBoYWxmS2V5cywgbGV2ZWxFbnRpdGllcywgbWF4TGV2ZWwsIHN5bnRoZXRpY0dldENoZWNrRGlzYWJsZWQpIHtcbiAgdmFyIGNoZWNrZWRLZXlzID0gbmV3IFNldChrZXlzKTtcbiAgdmFyIGhhbGZDaGVja2VkS2V5cyA9IG5ldyBTZXQoaGFsZktleXMpOyAvLyBSZW1vdmUgY2hlY2tlZCBrZXlzIGZyb20gdG9wIHRvIGJvdHRvbVxuXG4gIGZvciAodmFyIGxldmVsID0gMDsgbGV2ZWwgPD0gbWF4TGV2ZWw7IGxldmVsICs9IDEpIHtcbiAgICB2YXIgZW50aXRpZXMgPSBsZXZlbEVudGl0aWVzLmdldChsZXZlbCkgfHwgbmV3IFNldCgpO1xuICAgIGVudGl0aWVzLmZvckVhY2goZnVuY3Rpb24gKGVudGl0eSkge1xuICAgICAgdmFyIGtleSA9IGVudGl0eS5rZXksXG4gICAgICAgICAgbm9kZSA9IGVudGl0eS5ub2RlLFxuICAgICAgICAgIF9lbnRpdHkkY2hpbGRyZW4yID0gZW50aXR5LmNoaWxkcmVuLFxuICAgICAgICAgIGNoaWxkcmVuID0gX2VudGl0eSRjaGlsZHJlbjIgPT09IHZvaWQgMCA/IFtdIDogX2VudGl0eSRjaGlsZHJlbjI7XG5cbiAgICAgIGlmICghY2hlY2tlZEtleXMuaGFzKGtleSkgJiYgIWhhbGZDaGVja2VkS2V5cy5oYXMoa2V5KSAmJiAhc3ludGhldGljR2V0Q2hlY2tEaXNhYmxlZChub2RlKSkge1xuICAgICAgICBjaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGNoaWxkRW50aXR5KSB7XG4gICAgICAgICAgcmV0dXJuICFzeW50aGV0aWNHZXRDaGVja0Rpc2FibGVkKGNoaWxkRW50aXR5Lm5vZGUpO1xuICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZEVudGl0eSkge1xuICAgICAgICAgIGNoZWNrZWRLZXlzLmRlbGV0ZShjaGlsZEVudGl0eS5rZXkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSAvLyBSZW1vdmUgY2hlY2tlZCBrZXlzIGZvcm0gYm90dG9tIHRvIHRvcFxuXG5cbiAgaGFsZkNoZWNrZWRLZXlzID0gbmV3IFNldCgpO1xuICB2YXIgdmlzaXRlZEtleXMgPSBuZXcgU2V0KCk7XG5cbiAgZm9yICh2YXIgX2xldmVsMiA9IG1heExldmVsOyBfbGV2ZWwyID49IDA7IF9sZXZlbDIgLT0gMSkge1xuICAgIHZhciBfZW50aXRpZXMyID0gbGV2ZWxFbnRpdGllcy5nZXQoX2xldmVsMikgfHwgbmV3IFNldCgpO1xuXG4gICAgX2VudGl0aWVzMi5mb3JFYWNoKGZ1bmN0aW9uIChlbnRpdHkpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBlbnRpdHkucGFyZW50LFxuICAgICAgICAgIG5vZGUgPSBlbnRpdHkubm9kZTsgLy8gU2tpcCBpZiBubyBuZWVkIHRvIGNoZWNrXG5cbiAgICAgIGlmIChzeW50aGV0aWNHZXRDaGVja0Rpc2FibGVkKG5vZGUpIHx8ICFlbnRpdHkucGFyZW50IHx8IHZpc2l0ZWRLZXlzLmhhcyhlbnRpdHkucGFyZW50LmtleSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBTa2lwIGlmIHBhcmVudCBpcyBkaXNhYmxlZFxuXG5cbiAgICAgIGlmIChzeW50aGV0aWNHZXRDaGVja0Rpc2FibGVkKGVudGl0eS5wYXJlbnQubm9kZSkpIHtcbiAgICAgICAgdmlzaXRlZEtleXMuYWRkKHBhcmVudC5rZXkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBhbGxDaGVja2VkID0gdHJ1ZTtcbiAgICAgIHZhciBwYXJ0aWFsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgKHBhcmVudC5jaGlsZHJlbiB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uIChjaGlsZEVudGl0eSkge1xuICAgICAgICByZXR1cm4gIXN5bnRoZXRpY0dldENoZWNrRGlzYWJsZWQoY2hpbGRFbnRpdHkubm9kZSk7XG4gICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgICB2YXIga2V5ID0gX3JlZjMua2V5O1xuICAgICAgICB2YXIgY2hlY2tlZCA9IGNoZWNrZWRLZXlzLmhhcyhrZXkpO1xuXG4gICAgICAgIGlmIChhbGxDaGVja2VkICYmICFjaGVja2VkKSB7XG4gICAgICAgICAgYWxsQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFwYXJ0aWFsQ2hlY2tlZCAmJiAoY2hlY2tlZCB8fCBoYWxmQ2hlY2tlZEtleXMuaGFzKGtleSkpKSB7XG4gICAgICAgICAgcGFydGlhbENoZWNrZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFhbGxDaGVja2VkKSB7XG4gICAgICAgIGNoZWNrZWRLZXlzLmRlbGV0ZShwYXJlbnQua2V5KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBhcnRpYWxDaGVja2VkKSB7XG4gICAgICAgIGhhbGZDaGVja2VkS2V5cy5hZGQocGFyZW50LmtleSk7XG4gICAgICB9XG5cbiAgICAgIHZpc2l0ZWRLZXlzLmFkZChwYXJlbnQua2V5KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2hlY2tlZEtleXM6IEFycmF5LmZyb20oY2hlY2tlZEtleXMpLFxuICAgIGhhbGZDaGVja2VkS2V5czogQXJyYXkuZnJvbShyZW1vdmVGcm9tQ2hlY2tlZEtleXMoaGFsZkNoZWNrZWRLZXlzLCBjaGVja2VkS2V5cykpXG4gIH07XG59XG4vKipcbiAqIENvbmR1Y3Qgd2l0aCBrZXlzLlxuICogQHBhcmFtIGtleUxpc3QgY3VycmVudCBrZXkgbGlzdFxuICogQHBhcmFtIGtleUVudGl0aWVzIGtleSAtIGRhdGFFbnRpdHkgbWFwXG4gKiBAcGFyYW0gbW9kZSBgZmlsbGAgdG8gZmlsbCBtaXNzaW5nIGtleSwgYGNsZWFuYCB0byByZW1vdmUgdXNlbGVzcyBrZXlcbiAqL1xuXG5cbmZ1bmN0aW9uIGNvbmR1Y3RDaGVjayhrZXlMaXN0LCBjaGVja2VkLCBrZXlFbnRpdGllcywgZ2V0Q2hlY2tEaXNhYmxlZCkge1xuICB2YXIgd2FybmluZ01pc3NLZXlzID0gW107XG4gIHZhciBzeW50aGV0aWNHZXRDaGVja0Rpc2FibGVkO1xuXG4gIGlmIChnZXRDaGVja0Rpc2FibGVkKSB7XG4gICAgc3ludGhldGljR2V0Q2hlY2tEaXNhYmxlZCA9IGdldENoZWNrRGlzYWJsZWQ7XG4gIH0gZWxzZSB7XG4gICAgc3ludGhldGljR2V0Q2hlY2tEaXNhYmxlZCA9IGlzQ2hlY2tEaXNhYmxlZDtcbiAgfSAvLyBXZSBvbmx5IGhhbmRsZSBleGlzdCBrZXlzXG5cblxuICB2YXIga2V5cyA9IG5ldyBTZXQoa2V5TGlzdC5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBoYXNFbnRpdHkgPSAhIWtleUVudGl0aWVzW2tleV07XG5cbiAgICBpZiAoIWhhc0VudGl0eSkge1xuICAgICAgd2FybmluZ01pc3NLZXlzLnB1c2goa2V5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzRW50aXR5O1xuICB9KSk7XG4gIHZhciBsZXZlbEVudGl0aWVzID0gbmV3IE1hcCgpO1xuICB2YXIgbWF4TGV2ZWwgPSAwOyAvLyBDb252ZXJ0IGVudGl0aWVzIGJ5IGxldmVsIGZvciBjYWxjdWxhdGlvblxuXG4gIE9iamVjdC5rZXlzKGtleUVudGl0aWVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgZW50aXR5ID0ga2V5RW50aXRpZXNba2V5XTtcbiAgICB2YXIgbGV2ZWwgPSBlbnRpdHkubGV2ZWw7XG4gICAgdmFyIGxldmVsU2V0ID0gbGV2ZWxFbnRpdGllcy5nZXQobGV2ZWwpO1xuXG4gICAgaWYgKCFsZXZlbFNldCkge1xuICAgICAgbGV2ZWxTZXQgPSBuZXcgU2V0KCk7XG4gICAgICBsZXZlbEVudGl0aWVzLnNldChsZXZlbCwgbGV2ZWxTZXQpO1xuICAgIH1cblxuICAgIGxldmVsU2V0LmFkZChlbnRpdHkpO1xuICAgIG1heExldmVsID0gTWF0aC5tYXgobWF4TGV2ZWwsIGxldmVsKTtcbiAgfSk7XG4gICgwLCBfd2FybmluZy5kZWZhdWx0KSghd2FybmluZ01pc3NLZXlzLmxlbmd0aCwgXCJUcmVlIG1pc3NpbmcgZm9sbG93IGtleXM6IFwiLmNvbmNhdCh3YXJuaW5nTWlzc0tleXMuc2xpY2UoMCwgMTAwKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBcIidcIi5jb25jYXQoa2V5LCBcIidcIik7XG4gIH0pLmpvaW4oJywgJykpKTtcbiAgdmFyIHJlc3VsdDtcblxuICBpZiAoY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgIHJlc3VsdCA9IGZpbGxDb25kdWN0Q2hlY2soa2V5cywgbGV2ZWxFbnRpdGllcywgbWF4TGV2ZWwsIHN5bnRoZXRpY0dldENoZWNrRGlzYWJsZWQpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGNsZWFuQ29uZHVjdENoZWNrKGtleXMsIGNoZWNrZWQuaGFsZkNoZWNrZWRLZXlzLCBsZXZlbEVudGl0aWVzLCBtYXhMZXZlbCwgc3ludGhldGljR2V0Q2hlY2tEaXNhYmxlZCk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZ2V0S2V5ID0gZ2V0S2V5O1xuZXhwb3J0cy53YXJuaW5nV2l0aG91dEtleSA9IHdhcm5pbmdXaXRob3V0S2V5O1xuZXhwb3J0cy5jb252ZXJ0VHJlZVRvRGF0YSA9IGNvbnZlcnRUcmVlVG9EYXRhO1xuZXhwb3J0cy5mbGF0dGVuVHJlZURhdGEgPSBmbGF0dGVuVHJlZURhdGE7XG5leHBvcnRzLnRyYXZlcnNlRGF0YU5vZGVzID0gdHJhdmVyc2VEYXRhTm9kZXM7XG5leHBvcnRzLmNvbnZlcnREYXRhVG9FbnRpdGllcyA9IGNvbnZlcnREYXRhVG9FbnRpdGllcztcbmV4cG9ydHMuZ2V0VHJlZU5vZGVQcm9wcyA9IGdldFRyZWVOb2RlUHJvcHM7XG5leHBvcnRzLmNvbnZlcnROb2RlUHJvcHNUb0V2ZW50RGF0YSA9IGNvbnZlcnROb2RlUHJvcHNUb0V2ZW50RGF0YTtcblxudmFyIF90b0NvbnN1bWFibGVBcnJheTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvQ29uc3VtYWJsZUFycmF5XCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9vYmplY3RXaXRob3V0UHJvcGVydGllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCIpKTtcblxudmFyIF90b0FycmF5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtdXRpbC9saWIvQ2hpbGRyZW4vdG9BcnJheVwiKSk7XG5cbnZhciBfd2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXV0aWwvbGliL3dhcm5pbmdcIikpO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKFwiLi4vdXRpbFwiKTtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gZ2V0S2V5KGtleSwgcG9zKSB7XG4gIGlmIChrZXkgIT09IG51bGwgJiYga2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgcmV0dXJuIHBvcztcbn1cbi8qKlxuICogV2FybmluZyBpZiBUcmVlTm9kZSBkbyBub3QgcHJvdmlkZXMga2V5XG4gKi9cblxuXG5mdW5jdGlvbiB3YXJuaW5nV2l0aG91dEtleSgpIHtcbiAgdmFyIHRyZWVEYXRhID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcbiAgdmFyIGtleXMgPSBuZXcgTWFwKCk7XG5cbiAgZnVuY3Rpb24gZGlnKGxpc3QpIHtcbiAgICB2YXIgcGF0aCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJyc7XG4gICAgKGxpc3QgfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKHRyZWVOb2RlKSB7XG4gICAgICB2YXIga2V5ID0gdHJlZU5vZGUua2V5LFxuICAgICAgICAgIGNoaWxkcmVuID0gdHJlZU5vZGUuY2hpbGRyZW47XG4gICAgICAoMCwgX3dhcm5pbmcuZGVmYXVsdCkoa2V5ICE9PSBudWxsICYmIGtleSAhPT0gdW5kZWZpbmVkLCBcIlRyZWUgbm9kZSBtdXN0IGhhdmUgYSBjZXJ0YWluIGtleTogW1wiLmNvbmNhdChwYXRoKS5jb25jYXQoa2V5LCBcIl1cIikpO1xuICAgICAgdmFyIHJlY29yZEtleSA9IFN0cmluZyhrZXkpO1xuICAgICAgKDAsIF93YXJuaW5nLmRlZmF1bHQpKCFrZXlzLmhhcyhyZWNvcmRLZXkpIHx8IGtleSA9PT0gbnVsbCB8fCBrZXkgPT09IHVuZGVmaW5lZCwgXCJTYW1lICdrZXknIGV4aXN0IGluIHRoZSBUcmVlOiBcIi5jb25jYXQocmVjb3JkS2V5KSk7XG4gICAgICBrZXlzLnNldChyZWNvcmRLZXksIHRydWUpO1xuICAgICAgZGlnKGNoaWxkcmVuLCBcIlwiLmNvbmNhdChwYXRoKS5jb25jYXQocmVjb3JkS2V5LCBcIiA+IFwiKSk7XG4gICAgfSk7XG4gIH1cblxuICBkaWcodHJlZURhdGEpO1xufVxuLyoqXG4gKiBDb252ZXJ0IGBjaGlsZHJlbmAgb2YgVHJlZSBpbnRvIGB0cmVlRGF0YWAgc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gY29udmVydFRyZWVUb0RhdGEocm9vdE5vZGVzKSB7XG4gIGZ1bmN0aW9uIGRpZyhub2RlKSB7XG4gICAgdmFyIHRyZWVOb2RlcyA9ICgwLCBfdG9BcnJheS5kZWZhdWx0KShub2RlKTtcbiAgICByZXR1cm4gdHJlZU5vZGVzLm1hcChmdW5jdGlvbiAodHJlZU5vZGUpIHtcbiAgICAgIC8vIEZpbHRlciBpbnZhbGlkYXRlIG5vZGVcbiAgICAgIGlmICghKDAsIF91dGlsLmlzVHJlZU5vZGUpKHRyZWVOb2RlKSkge1xuICAgICAgICAoMCwgX3dhcm5pbmcuZGVmYXVsdCkoIXRyZWVOb2RlLCAnVHJlZS9UcmVlTm9kZSBjYW4gb25seSBhY2NlcHQgVHJlZU5vZGUgYXMgY2hpbGRyZW4uJyk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIga2V5ID0gdHJlZU5vZGUua2V5O1xuICAgICAgdmFyIF90cmVlTm9kZSRwcm9wcyA9IHRyZWVOb2RlLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3RyZWVOb2RlJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIHJlc3QgPSAoMCwgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzMi5kZWZhdWx0KShfdHJlZU5vZGUkcHJvcHMsIFtcImNoaWxkcmVuXCJdKTtcblxuICAgICAgdmFyIGRhdGFOb2RlID0gX29iamVjdFNwcmVhZCh7XG4gICAgICAgIGtleToga2V5XG4gICAgICB9LCByZXN0KTtcblxuICAgICAgdmFyIHBhcnNlZENoaWxkcmVuID0gZGlnKGNoaWxkcmVuKTtcblxuICAgICAgaWYgKHBhcnNlZENoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBkYXRhTm9kZS5jaGlsZHJlbiA9IHBhcnNlZENoaWxkcmVuO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YU5vZGU7XG4gICAgfSkuZmlsdGVyKGZ1bmN0aW9uIChkYXRhTm9kZSkge1xuICAgICAgcmV0dXJuIGRhdGFOb2RlO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGRpZyhyb290Tm9kZXMpO1xufVxuLyoqXG4gKiBGbGF0IG5lc3QgdHJlZSBkYXRhIGludG8gZmxhdHRlbiBsaXN0LiBUaGlzIGlzIHVzZWQgZm9yIHZpcnR1YWwgbGlzdCByZW5kZXIuXG4gKiBAcGFyYW0gdHJlZU5vZGVMaXN0IE9yaWdpbiBkYXRhIG5vZGUgbGlzdFxuICogQHBhcmFtIGV4cGFuZGVkS2V5c1xuICogbmVlZCBleHBhbmRlZCBrZXlzLCBwcm92aWRlcyBgdHJ1ZWAgbWVhbnMgYWxsIGV4cGFuZGVkICh1c2VkIGluIGByYy10cmVlLXNlbGVjdGApLlxuICovXG5cblxuZnVuY3Rpb24gZmxhdHRlblRyZWVEYXRhKCkge1xuICB2YXIgdHJlZU5vZGVMaXN0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbXTtcbiAgdmFyIGV4cGFuZGVkS2V5cyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogW107XG4gIHZhciBleHBhbmRlZEtleVNldCA9IG5ldyBTZXQoZXhwYW5kZWRLZXlzID09PSB0cnVlID8gW10gOiBleHBhbmRlZEtleXMpO1xuICB2YXIgZmxhdHRlbkxpc3QgPSBbXTtcblxuICBmdW5jdGlvbiBkaWcobGlzdCkge1xuICAgIHZhciBwYXJlbnQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gICAgcmV0dXJuIGxpc3QubWFwKGZ1bmN0aW9uICh0cmVlTm9kZSwgaW5kZXgpIHtcbiAgICAgIHZhciBwb3MgPSAoMCwgX3V0aWwuZ2V0UG9zaXRpb24pKHBhcmVudCA/IHBhcmVudC5wb3MgOiAnMCcsIGluZGV4KTtcbiAgICAgIHZhciBtZXJnZWRLZXkgPSBnZXRLZXkodHJlZU5vZGUua2V5LCBwb3MpOyAvLyBBZGQgRmxhdHRlbkRhdGFOb2RlIGludG8gbGlzdFxuXG4gICAgICB2YXIgZmxhdHRlbk5vZGUgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHRyZWVOb2RlKSwge30sIHtcbiAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgIHBvczogcG9zLFxuICAgICAgICBjaGlsZHJlbjogbnVsbCxcbiAgICAgICAgZGF0YTogdHJlZU5vZGUsXG4gICAgICAgIGlzU3RhcnQ6IFtdLmNvbmNhdCgoMCwgX3RvQ29uc3VtYWJsZUFycmF5Mi5kZWZhdWx0KShwYXJlbnQgPyBwYXJlbnQuaXNTdGFydCA6IFtdKSwgW2luZGV4ID09PSAwXSksXG4gICAgICAgIGlzRW5kOiBbXS5jb25jYXQoKDAsIF90b0NvbnN1bWFibGVBcnJheTIuZGVmYXVsdCkocGFyZW50ID8gcGFyZW50LmlzRW5kIDogW10pLCBbaW5kZXggPT09IGxpc3QubGVuZ3RoIC0gMV0pXG4gICAgICB9KTtcblxuICAgICAgZmxhdHRlbkxpc3QucHVzaChmbGF0dGVuTm9kZSk7IC8vIExvb3AgdHJlZU5vZGUgY2hpbGRyZW5cblxuICAgICAgaWYgKGV4cGFuZGVkS2V5cyA9PT0gdHJ1ZSB8fCBleHBhbmRlZEtleVNldC5oYXMobWVyZ2VkS2V5KSkge1xuICAgICAgICBmbGF0dGVuTm9kZS5jaGlsZHJlbiA9IGRpZyh0cmVlTm9kZS5jaGlsZHJlbiB8fCBbXSwgZmxhdHRlbk5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmxhdHRlbk5vZGUuY2hpbGRyZW4gPSBbXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZsYXR0ZW5Ob2RlO1xuICAgIH0pO1xuICB9XG5cbiAgZGlnKHRyZWVOb2RlTGlzdCk7XG4gIHJldHVybiBmbGF0dGVuTGlzdDtcbn1cbi8qKlxuICogVHJhdmVyc2UgYWxsIHRoZSBkYXRhIGJ5IGB0cmVlRGF0YWAuXG4gKiBQbGVhc2Ugbm90IHVzZSBpdCBvdXQgb2YgdGhlIGByYy10cmVlYCBzaW5jZSB3ZSBtYXkgcmVmYWN0b3IgdGhpcyBjb2RlLlxuICovXG5cblxuZnVuY3Rpb24gdHJhdmVyc2VEYXRhTm9kZXMoZGF0YU5vZGVzLCBjYWxsYmFjaywgZXh0ZXJuYWxHZXRLZXkpIHtcbiAgdmFyIHN5bnRoZXRpY0dldEtleTtcblxuICBpZiAoZXh0ZXJuYWxHZXRLZXkpIHtcbiAgICBpZiAodHlwZW9mIGV4dGVybmFsR2V0S2V5ID09PSAnc3RyaW5nJykge1xuICAgICAgc3ludGhldGljR2V0S2V5ID0gZnVuY3Rpb24gc3ludGhldGljR2V0S2V5KG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGVbZXh0ZXJuYWxHZXRLZXldO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHRlcm5hbEdldEtleSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgc3ludGhldGljR2V0S2V5ID0gZnVuY3Rpb24gc3ludGhldGljR2V0S2V5KG5vZGUpIHtcbiAgICAgICAgcmV0dXJuIGV4dGVybmFsR2V0S2V5KG5vZGUpO1xuICAgICAgfTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgc3ludGhldGljR2V0S2V5ID0gZnVuY3Rpb24gc3ludGhldGljR2V0S2V5KG5vZGUsIHBvcykge1xuICAgICAgcmV0dXJuIGdldEtleShub2RlLmtleSwgcG9zKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gcHJvY2Vzc05vZGUobm9kZSwgaW5kZXgsIHBhcmVudCkge1xuICAgIHZhciBjaGlsZHJlbiA9IG5vZGUgPyBub2RlLmNoaWxkcmVuIDogZGF0YU5vZGVzO1xuICAgIHZhciBwb3MgPSBub2RlID8gKDAsIF91dGlsLmdldFBvc2l0aW9uKShwYXJlbnQucG9zLCBpbmRleCkgOiAnMCc7IC8vIFByb2Nlc3Mgbm9kZSBpZiBpcyBub3Qgcm9vdFxuXG4gICAgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBrZXkgPSBzeW50aGV0aWNHZXRLZXkobm9kZSwgcG9zKTtcbiAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIHBvczogcG9zLFxuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgcGFyZW50UG9zOiBwYXJlbnQubm9kZSA/IHBhcmVudC5wb3MgOiBudWxsLFxuICAgICAgICBsZXZlbDogcGFyZW50LmxldmVsICsgMVxuICAgICAgfTtcbiAgICAgIGNhbGxiYWNrKGRhdGEpO1xuICAgIH0gLy8gUHJvY2VzcyBjaGlsZHJlbiBub2RlXG5cblxuICAgIGlmIChjaGlsZHJlbikge1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoc3ViTm9kZSwgc3ViSW5kZXgpIHtcbiAgICAgICAgcHJvY2Vzc05vZGUoc3ViTm9kZSwgc3ViSW5kZXgsIHtcbiAgICAgICAgICBub2RlOiBub2RlLFxuICAgICAgICAgIHBvczogcG9zLFxuICAgICAgICAgIGxldmVsOiBwYXJlbnQgPyBwYXJlbnQubGV2ZWwgKyAxIDogLTFcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcm9jZXNzTm9kZShudWxsKTtcbn1cbi8qKlxuICogQ29udmVydCBgdHJlZURhdGFgIGludG8gZW50aXR5IHJlY29yZHMuXG4gKi9cblxuXG5mdW5jdGlvbiBjb252ZXJ0RGF0YVRvRW50aXRpZXMoZGF0YU5vZGVzKSB7XG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fSxcbiAgICAgIGluaXRXcmFwcGVyID0gX3JlZi5pbml0V3JhcHBlcixcbiAgICAgIHByb2Nlc3NFbnRpdHkgPSBfcmVmLnByb2Nlc3NFbnRpdHksXG4gICAgICBvblByb2Nlc3NGaW5pc2hlZCA9IF9yZWYub25Qcm9jZXNzRmluaXNoZWQ7XG5cbiAgdmFyIGV4dGVybmFsR2V0S2V5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgPyBhcmd1bWVudHNbMl0gOiB1bmRlZmluZWQ7XG4gIHZhciBwb3NFbnRpdGllcyA9IHt9O1xuICB2YXIga2V5RW50aXRpZXMgPSB7fTtcbiAgdmFyIHdyYXBwZXIgPSB7XG4gICAgcG9zRW50aXRpZXM6IHBvc0VudGl0aWVzLFxuICAgIGtleUVudGl0aWVzOiBrZXlFbnRpdGllc1xuICB9O1xuXG4gIGlmIChpbml0V3JhcHBlcikge1xuICAgIHdyYXBwZXIgPSBpbml0V3JhcHBlcih3cmFwcGVyKSB8fCB3cmFwcGVyO1xuICB9XG5cbiAgdHJhdmVyc2VEYXRhTm9kZXMoZGF0YU5vZGVzLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgIHZhciBub2RlID0gaXRlbS5ub2RlLFxuICAgICAgICBpbmRleCA9IGl0ZW0uaW5kZXgsXG4gICAgICAgIHBvcyA9IGl0ZW0ucG9zLFxuICAgICAgICBrZXkgPSBpdGVtLmtleSxcbiAgICAgICAgcGFyZW50UG9zID0gaXRlbS5wYXJlbnRQb3MsXG4gICAgICAgIGxldmVsID0gaXRlbS5sZXZlbDtcbiAgICB2YXIgZW50aXR5ID0ge1xuICAgICAgbm9kZTogbm9kZSxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGtleToga2V5LFxuICAgICAgcG9zOiBwb3MsXG4gICAgICBsZXZlbDogbGV2ZWxcbiAgICB9O1xuICAgIHZhciBtZXJnZWRLZXkgPSBnZXRLZXkoa2V5LCBwb3MpO1xuICAgIHBvc0VudGl0aWVzW3Bvc10gPSBlbnRpdHk7XG4gICAga2V5RW50aXRpZXNbbWVyZ2VkS2V5XSA9IGVudGl0eTsgLy8gRmlsbCBjaGlsZHJlblxuXG4gICAgZW50aXR5LnBhcmVudCA9IHBvc0VudGl0aWVzW3BhcmVudFBvc107XG5cbiAgICBpZiAoZW50aXR5LnBhcmVudCkge1xuICAgICAgZW50aXR5LnBhcmVudC5jaGlsZHJlbiA9IGVudGl0eS5wYXJlbnQuY2hpbGRyZW4gfHwgW107XG4gICAgICBlbnRpdHkucGFyZW50LmNoaWxkcmVuLnB1c2goZW50aXR5KTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzc0VudGl0eSkge1xuICAgICAgcHJvY2Vzc0VudGl0eShlbnRpdHksIHdyYXBwZXIpO1xuICAgIH1cbiAgfSwgZXh0ZXJuYWxHZXRLZXkpO1xuXG4gIGlmIChvblByb2Nlc3NGaW5pc2hlZCkge1xuICAgIG9uUHJvY2Vzc0ZpbmlzaGVkKHdyYXBwZXIpO1xuICB9XG5cbiAgcmV0dXJuIHdyYXBwZXI7XG59XG4vKipcbiAqIEdldCBUcmVlTm9kZSBwcm9wcyB3aXRoIFRyZWUgcHJvcHMuXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRUcmVlTm9kZVByb3BzKGtleSwgX3JlZjIpIHtcbiAgdmFyIGV4cGFuZGVkS2V5cyA9IF9yZWYyLmV4cGFuZGVkS2V5cyxcbiAgICAgIHNlbGVjdGVkS2V5cyA9IF9yZWYyLnNlbGVjdGVkS2V5cyxcbiAgICAgIGxvYWRlZEtleXMgPSBfcmVmMi5sb2FkZWRLZXlzLFxuICAgICAgbG9hZGluZ0tleXMgPSBfcmVmMi5sb2FkaW5nS2V5cyxcbiAgICAgIGNoZWNrZWRLZXlzID0gX3JlZjIuY2hlY2tlZEtleXMsXG4gICAgICBoYWxmQ2hlY2tlZEtleXMgPSBfcmVmMi5oYWxmQ2hlY2tlZEtleXMsXG4gICAgICBkcmFnT3Zlck5vZGVLZXkgPSBfcmVmMi5kcmFnT3Zlck5vZGVLZXksXG4gICAgICBkcm9wUG9zaXRpb24gPSBfcmVmMi5kcm9wUG9zaXRpb24sXG4gICAgICBrZXlFbnRpdGllcyA9IF9yZWYyLmtleUVudGl0aWVzO1xuICB2YXIgZW50aXR5ID0ga2V5RW50aXRpZXNba2V5XTtcbiAgdmFyIHRyZWVOb2RlUHJvcHMgPSB7XG4gICAgZXZlbnRLZXk6IGtleSxcbiAgICBleHBhbmRlZDogZXhwYW5kZWRLZXlzLmluZGV4T2Yoa2V5KSAhPT0gLTEsXG4gICAgc2VsZWN0ZWQ6IHNlbGVjdGVkS2V5cy5pbmRleE9mKGtleSkgIT09IC0xLFxuICAgIGxvYWRlZDogbG9hZGVkS2V5cy5pbmRleE9mKGtleSkgIT09IC0xLFxuICAgIGxvYWRpbmc6IGxvYWRpbmdLZXlzLmluZGV4T2Yoa2V5KSAhPT0gLTEsXG4gICAgY2hlY2tlZDogY2hlY2tlZEtleXMuaW5kZXhPZihrZXkpICE9PSAtMSxcbiAgICBoYWxmQ2hlY2tlZDogaGFsZkNoZWNrZWRLZXlzLmluZGV4T2Yoa2V5KSAhPT0gLTEsXG4gICAgcG9zOiBTdHJpbmcoZW50aXR5ID8gZW50aXR5LnBvcyA6ICcnKSxcbiAgICAvLyBbTGVnYWN5XSBEcmFnIHByb3BzXG4gICAgZHJhZ092ZXI6IGRyYWdPdmVyTm9kZUtleSA9PT0ga2V5ICYmIGRyb3BQb3NpdGlvbiA9PT0gMCxcbiAgICBkcmFnT3ZlckdhcFRvcDogZHJhZ092ZXJOb2RlS2V5ID09PSBrZXkgJiYgZHJvcFBvc2l0aW9uID09PSAtMSxcbiAgICBkcmFnT3ZlckdhcEJvdHRvbTogZHJhZ092ZXJOb2RlS2V5ID09PSBrZXkgJiYgZHJvcFBvc2l0aW9uID09PSAxXG4gIH07XG4gIHJldHVybiB0cmVlTm9kZVByb3BzO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0Tm9kZVByb3BzVG9FdmVudERhdGEocHJvcHMpIHtcbiAgdmFyIGRhdGEgPSBwcm9wcy5kYXRhLFxuICAgICAgZXhwYW5kZWQgPSBwcm9wcy5leHBhbmRlZCxcbiAgICAgIHNlbGVjdGVkID0gcHJvcHMuc2VsZWN0ZWQsXG4gICAgICBjaGVja2VkID0gcHJvcHMuY2hlY2tlZCxcbiAgICAgIGxvYWRlZCA9IHByb3BzLmxvYWRlZCxcbiAgICAgIGxvYWRpbmcgPSBwcm9wcy5sb2FkaW5nLFxuICAgICAgaGFsZkNoZWNrZWQgPSBwcm9wcy5oYWxmQ2hlY2tlZCxcbiAgICAgIGRyYWdPdmVyID0gcHJvcHMuZHJhZ092ZXIsXG4gICAgICBkcmFnT3ZlckdhcFRvcCA9IHByb3BzLmRyYWdPdmVyR2FwVG9wLFxuICAgICAgZHJhZ092ZXJHYXBCb3R0b20gPSBwcm9wcy5kcmFnT3ZlckdhcEJvdHRvbSxcbiAgICAgIHBvcyA9IHByb3BzLnBvcyxcbiAgICAgIGFjdGl2ZSA9IHByb3BzLmFjdGl2ZTtcblxuICB2YXIgZXZlbnREYXRhID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBkYXRhKSwge30sIHtcbiAgICBleHBhbmRlZDogZXhwYW5kZWQsXG4gICAgc2VsZWN0ZWQ6IHNlbGVjdGVkLFxuICAgIGNoZWNrZWQ6IGNoZWNrZWQsXG4gICAgbG9hZGVkOiBsb2FkZWQsXG4gICAgbG9hZGluZzogbG9hZGluZyxcbiAgICBoYWxmQ2hlY2tlZDogaGFsZkNoZWNrZWQsXG4gICAgZHJhZ092ZXI6IGRyYWdPdmVyLFxuICAgIGRyYWdPdmVyR2FwVG9wOiBkcmFnT3ZlckdhcFRvcCxcbiAgICBkcmFnT3ZlckdhcEJvdHRvbTogZHJhZ092ZXJHYXBCb3R0b20sXG4gICAgcG9zOiBwb3MsXG4gICAgYWN0aXZlOiBhY3RpdmVcbiAgfSk7XG5cbiAgaWYgKCEoJ3Byb3BzJyBpbiBldmVudERhdGEpKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV2ZW50RGF0YSwgJ3Byb3BzJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICgwLCBfd2FybmluZy5kZWZhdWx0KShmYWxzZSwgJ1NlY29uZCBwYXJhbSByZXR1cm4gZnJvbSBldmVudCBpcyBub2RlIGRhdGEgaW5zdGVhZCBvZiBUcmVlTm9kZSBpbnN0YW5jZS4gUGxlYXNlIHJlYWQgdmFsdWUgZGlyZWN0bHkgaW5zdGVhZCBvZiByZWFkaW5nIGZyb20gYHByb3BzYC4nKTtcbiAgICAgICAgcmV0dXJuIHByb3BzO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGV2ZW50RGF0YTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRvQXJyYXk7XG5cbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5cbnZhciBfcmVhY3RJcyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICB2YXIgcmV0ID0gW107XG5cbiAgX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkID09PSB1bmRlZmluZWQgfHwgY2hpbGQgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgIHJldCA9IHJldC5jb25jYXQodG9BcnJheShjaGlsZCkpO1xuICAgIH0gZWxzZSBpZiAoKDAsIF9yZWFjdElzLmlzRnJhZ21lbnQpKGNoaWxkKSAmJiBjaGlsZC5wcm9wcykge1xuICAgICAgcmV0ID0gcmV0LmNvbmNhdCh0b0FycmF5KGNoaWxkLnByb3BzLmNoaWxkcmVuKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldC5wdXNoKGNoaWxkKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZXQ7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmaW5kRE9NTm9kZTtcblxudmFyIF9yZWFjdERvbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0LWRvbVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogUmV0dXJuIGlmIGEgbm9kZSBpcyBhIERPTSBub2RlLiBFbHNlIHdpbGwgcmV0dXJuIGJ5IGBmaW5kRE9NTm9kZWBcbiAqL1xuZnVuY3Rpb24gZmluZERPTU5vZGUobm9kZSkge1xuICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICByZXR1cm4gX3JlYWN0RG9tLmRlZmF1bHQuZmluZERPTU5vZGUobm9kZSk7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVzZUNvbnRyb2xsZWRTdGF0ZTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkgeyBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7IHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHsgcmV0dXJuIGNhY2hlOyB9OyByZXR1cm4gY2FjaGU7IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHsgcmV0dXJuIHsgZGVmYXVsdDogb2JqIH07IH0gdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7IGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkgeyByZXR1cm4gY2FjaGUuZ2V0KG9iaik7IH0gdmFyIG5ld09iaiA9IHt9OyB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7IGZvciAodmFyIGtleSBpbiBvYmopIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHsgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7IGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTsgfSBlbHNlIHsgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IGlmIChjYWNoZSkgeyBjYWNoZS5zZXQob2JqLCBuZXdPYmopOyB9IHJldHVybiBuZXdPYmo7IH1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxuZnVuY3Rpb24gdXNlQ29udHJvbGxlZFN0YXRlKGRlZmF1bHRTdGF0ZVZhbHVlLCBvcHRpb24pIHtcbiAgdmFyIF9yZWYgPSBvcHRpb24gfHwge30sXG4gICAgICBkZWZhdWx0VmFsdWUgPSBfcmVmLmRlZmF1bHRWYWx1ZSxcbiAgICAgIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIG9uQ2hhbmdlID0gX3JlZi5vbkNoYW5nZSxcbiAgICAgIHBvc3RTdGF0ZSA9IF9yZWYucG9zdFN0YXRlO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAoZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZGVmYXVsdFZhbHVlID09PSAnZnVuY3Rpb24nID8gZGVmYXVsdFZhbHVlKCkgOiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiBkZWZhdWx0U3RhdGVWYWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IGRlZmF1bHRTdGF0ZVZhbHVlKCkgOiBkZWZhdWx0U3RhdGVWYWx1ZTtcbiAgfSksXG4gICAgICBfUmVhY3QkdXNlU3RhdGUyID0gX3NsaWNlZFRvQXJyYXkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIGlubmVyVmFsdWUgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0SW5uZXJWYWx1ZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIG1lcmdlZFZhbHVlID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDogaW5uZXJWYWx1ZTtcblxuICBpZiAocG9zdFN0YXRlKSB7XG4gICAgbWVyZ2VkVmFsdWUgPSBwb3N0U3RhdGUobWVyZ2VkVmFsdWUpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJpZ2dlckNoYW5nZShuZXdWYWx1ZSkge1xuICAgIHNldElubmVyVmFsdWUobmV3VmFsdWUpO1xuXG4gICAgaWYgKG1lcmdlZFZhbHVlICE9PSBuZXdWYWx1ZSAmJiBvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UobmV3VmFsdWUsIG1lcmdlZFZhbHVlKTtcbiAgICB9XG4gIH0gLy8gRWZmZWN0IG9mIHJlc2V0IHZhbHVlIHRvIGB1bmRlZmluZWRgXG5cblxuICB2YXIgZmlyc3RSZW5kZXJSZWYgPSBSZWFjdC51c2VSZWYodHJ1ZSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGZpcnN0UmVuZGVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIGZpcnN0UmVuZGVyUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2V0SW5uZXJWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICB9LCBbdmFsdWVdKTtcbiAgcmV0dXJuIFttZXJnZWRWYWx1ZSwgdHJpZ2dlckNoYW5nZV07XG59IiwiaW1wb3J0IHVzZVNlbGVjdGlvbiBmcm9tICdhbnRkL2xpYi90YWJsZS9ob29rcy91c2VTZWxlY3Rpb24nO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vLyBjb25zdCBzdGF0dXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldChcInN0YXR1c1wiKVxyXG5cclxuZnVuY3Rpb24gRXJyb3IocHJvcHMpIHtcclxuICBjb25zdCBbIHN0YXR1cywgc2V0U3RhdHVzIF0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0U3RhdHVzKG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCkuZ2V0KFwic3RhdHVzXCIpKTtcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMj57YEVycm9yOiAke3N0YXR1c31gfTwvaDI+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVycm9yOyJdLCJzb3VyY2VSb290IjoiIn0=