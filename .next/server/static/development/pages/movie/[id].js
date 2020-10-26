module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/movieDetails/MovieDetails.scss":
/*!*******************************************************!*\
  !*** ./src/components/movieDetails/MovieDetails.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/movieDetails/movieDetails.js":
/*!*****************************************************!*\
  !*** ./src/components/movieDetails/movieDetails.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MovieDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MovieDetails_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieDetails.scss */ "./src/components/movieDetails/MovieDetails.scss");
/* harmony import */ var _MovieDetails_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MovieDetails_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Film_Focus_2\\film-focus-2\\src\\components\\movieDetails\\movieDetails.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function MovieDetails(props) {
  const {
    movie
  } = props;
  const {
    0: showModal,
    1: setShowModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const poster = "https://image.tmdb.org/t/p/w600_and_h900_bestv2" + (movie === null || movie === void 0 ? void 0 : movie.poster_path);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("img", {
    className: "details-poster",
    src: poster,
    alt: "poster",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, movie.title));
}

/***/ }),

/***/ "./src/config/appconfig.js":
/*!*********************************!*\
  !*** ./src/config/appconfig.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let appconfig = {
  filmFocusEndpoint: "http://localhost:5000",
  tmdbEndpoint: "https://api.themoviedb.org/3"
};
/* harmony default export */ __webpack_exports__["default"] = (appconfig);

/***/ }),

/***/ "./src/config/keys.js":
/*!****************************!*\
  !*** ./src/config/keys.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const keys = {
  tmdbKey: "c794333156e1c095f41f92e128c002df"
};
/* harmony default export */ __webpack_exports__["default"] = (keys);

/***/ }),

/***/ "./src/pages/movie/[id]/index.js":
/*!***************************************!*\
  !*** ./src/pages/movie/[id]/index.js ***!
  \***************************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/movies */ "./src/services/movies.js");
/* harmony import */ var _components_movieDetails_movieDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/movieDetails/movieDetails */ "./src/components/movieDetails/movieDetails.js");
var _jsxFileName = "C:\\Film_Focus_2\\film-focus-2\\src\\pages\\movie\\[id]\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Movie(props) {
  const {
    0: movie,
    1: setMovie
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    id
  } = router.query;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getMovieDetails();
  }, []);

  async function getMovieDetails() {
    let response = await _services_movies__WEBPACK_IMPORTED_MODULE_2__["default"].getMovieDetails(id);
    setMovie(response.data);
    setLoading(false);
  }

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(_components_movieDetails_movieDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {
    movie: movie,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }));
}

async function getServerSideProps(context) {
  return {
    props: {}
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Movie);

/***/ }),

/***/ "./src/services/globalService.ts":
/*!***************************************!*\
  !*** ./src/services/globalService.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
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
    window.open(`${window.location.origin}/error?status=${statusCode}`, "_self");
  }

  handle401(error) {
    sessionStorage.clear();
    this.redirect(error.status);
  }

  handleDefault(error) {
    console.log(error);
  }

}

const globalService = new GlobalService();
/* harmony default export */ __webpack_exports__["default"] = (globalService);

/***/ }),

/***/ "./src/services/movies.js":
/*!********************************!*\
  !*** ./src/services/movies.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/appconfig */ "./src/config/appconfig.js");
/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/keys */ "./src/config/keys.js");
/* harmony import */ var _globalService_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalService.ts */ "./src/services/globalService.ts");



const keyString = `?api_key=${_config_keys__WEBPACK_IMPORTED_MODULE_1__["default"].tmdbKey}`;

class MovieService {
  async getPopularMovies() {
    return _globalService_ts__WEBPACK_IMPORTED_MODULE_2__["default"].get(`/movie/now_playing${keyString}`);
  }

  async getMovieDetails(id) {
    return _globalService_ts__WEBPACK_IMPORTED_MODULE_2__["default"].get(`${_config_appconfig__WEBPACK_IMPORTED_MODULE_0__["default"].tmdbEndpoint}/movie/${id}${keyString}`);
  }

}

const movieService = new MovieService();
/* harmony default export */ __webpack_exports__["default"] = (movieService);

/***/ }),

/***/ 4:
/*!*********************************************!*\
  !*** multi ./src/pages/movie/[id]/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Film_Focus_2\film-focus-2\src\pages\movie\[id]\index.js */"./src/pages/movie/[id]/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW92aWVEZXRhaWxzL21vdmllRGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2FwcGNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL21vdmllLy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvZ2xvYmFsU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvbW92aWVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIk1vdmllRGV0YWlscyIsInByb3BzIiwibW92aWUiLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJ1c2VTdGF0ZSIsInBvc3RlciIsInBvc3Rlcl9wYXRoIiwidGl0bGUiLCJhcHBjb25maWciLCJmaWxtRm9jdXNFbmRwb2ludCIsInRtZGJFbmRwb2ludCIsImtleXMiLCJ0bWRiS2V5IiwiTW92aWUiLCJzZXRNb3ZpZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwiaWQiLCJxdWVyeSIsInVzZUVmZmVjdCIsImdldE1vdmllRGV0YWlscyIsInJlc3BvbnNlIiwiTW92aWVTZXJ2aWNlIiwiZGF0YSIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJHbG9iYWxTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJzZXJ2aWNlIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsIl90aGlzIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsImNhbGxFcnJvckhhbmRsZXIiLCJnZXQiLCJ1cmwiLCJyZXMiLCJyZWoiLCJwb3N0Iiwic3RhdHVzIiwiaGFuZGxlNDAxIiwiaGFuZGxlRGVmYXVsdCIsInJlZGlyZWN0Iiwic3RhdHVzQ29kZSIsIndpbmRvdyIsIm9wZW4iLCJsb2NhdGlvbiIsIm9yaWdpbiIsInNlc3Npb25TdG9yYWdlIiwiY2xlYXIiLCJjb25zb2xlIiwibG9nIiwiZ2xvYmFsU2VydmljZSIsImtleVN0cmluZyIsImdldFBvcHVsYXJNb3ZpZXMiLCJtb3ZpZVNlcnZpY2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFFZSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUMxQyxRQUFNO0FBQUVDO0FBQUYsTUFBWUQsS0FBbEI7QUFD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InNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL01vdmllRGV0YWlscy5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllRGV0YWlscyhwcm9wcykge1xyXG4gIGNvbnN0IHsgbW92aWUgfSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgcG9zdGVyID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC93NjAwX2FuZF9oOTAwX2Jlc3R2MlwiICsgbW92aWU/LnBvc3Rlcl9wYXRoO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aW1nIGNsYXNzTmFtZT1cImRldGFpbHMtcG9zdGVyXCIgc3JjPXtwb3N0ZXJ9IGFsdD1cInBvc3RlclwiIC8+XHJcbiAgICAgIDxoMj57bW92aWUudGl0bGV9PC9oMj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSIsImxldCBhcHBjb25maWcgPSB7XHJcbiAgZmlsbUZvY3VzRW5kcG9pbnQ6IFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwXCIsXHJcbiAgdG1kYkVuZHBvaW50OiBcImh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzNcIlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwY29uZmlnO1xyXG4iLCJjb25zdCBrZXlzID0ge1xyXG4gIHRtZGJLZXk6IFwiYzc5NDMzMzE1NmUxYzA5NWY0MWY5MmUxMjhjMDAyZGZcIlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBrZXlzOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBNb3ZpZVNlcnZpY2UgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL21vdmllc1wiO1xyXG5pbXBvcnQgTW92aWVEZXRhaWxzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbW92aWVEZXRhaWxzL21vdmllRGV0YWlscyc7XHJcblxyXG5mdW5jdGlvbiBNb3ZpZShwcm9wcykge1xyXG4gIGNvbnN0IFttb3ZpZSwgc2V0TW92aWVdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRNb3ZpZURldGFpbHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldE1vdmllRGV0YWlscygpIHtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IE1vdmllU2VydmljZS5nZXRNb3ZpZURldGFpbHMoaWQpO1xyXG4gICAgc2V0TW92aWUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TW92aWVEZXRhaWxzIG1vdmllPXttb3ZpZX0gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7fSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllOyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBhcHBjb25maWcgZnJvbSBcIi4uL2NvbmZpZy9hcHBjb25maWdcIjtcclxuXHJcbmNsYXNzIEdsb2JhbFNlcnZpY2Uge1xyXG4gIFt4OiBzdHJpbmddOiBhbnk7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNlcnZpY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgICBiYXNlVVJMOiBhcHBjb25maWcudG1kYkVuZHBvaW50LFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzO1xyXG4gICAgdGhpcy5zZXJ2aWNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShmdW5jdGlvbihjb25maWcpIHtcclxuICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICB9KVxyXG5cclxuICAgIHRoaXMuc2VydmljZS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgIF90aGlzLmNhbGxFcnJvckhhbmRsZXIoZXJyb3IucmVzcG9uc2UpXHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0KHVybCwgY29uZmlnKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlcywgcmVqKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5zZXJ2aWNlLmdldCh1cmwsIGNvbmZpZyk7XHJcbiAgICAgICAgcmVzKHJlc3BvbnNlKTtcclxuICAgICAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgICAgIHJlaigpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcG9zdCh1cmwsIGRhdGEsIGNvbmZpZykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXMsIHJlaikgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHRoaXMuc2VydmljZS5wb3N0KHVybCwgZGF0YSwgY29uZmlnKTtcclxuICAgICAgICByZXMocmVzcG9uc2UpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlaigpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxsRXJyb3JIYW5kbGVyKGVycm9yKSB7XHJcbiAgICBzd2l0Y2goZXJyb3Iuc3RhdHVzKSB7XHJcbiAgICAgIGNhc2UgNDAxOlxyXG4gICAgICAgIHRoaXMuaGFuZGxlNDAxKGVycm9yKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aGlzLmhhbmRsZURlZmF1bHQoZXJyb3IpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZWRpcmVjdChzdGF0dXNDb2RlKSB7XHJcbiAgICB3aW5kb3cub3BlbihgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9lcnJvcj9zdGF0dXM9JHtzdGF0dXNDb2RlfWAsIFwiX3NlbGZcIilcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlNDAxKGVycm9yKSB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgdGhpcy5yZWRpcmVjdChlcnJvci5zdGF0dXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVEZWZhdWx0KGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGdsb2JhbFNlcnZpY2UgPSBuZXcgR2xvYmFsU2VydmljZSgpO1xyXG5leHBvcnQgZGVmYXVsdCBnbG9iYWxTZXJ2aWNlOyIsImltcG9ydCBhcHBjb25maWcgZnJvbSBcIi4uL2NvbmZpZy9hcHBjb25maWdcIjtcclxuaW1wb3J0IGtleXMgZnJvbSBcIi4uL2NvbmZpZy9rZXlzXCI7XHJcbmltcG9ydCBzZXJ2aWNlIGZyb20gJy4vZ2xvYmFsU2VydmljZS50cyc7XHJcblxyXG5jb25zdCBrZXlTdHJpbmcgPSBgP2FwaV9rZXk9JHtrZXlzLnRtZGJLZXl9YDtcclxuXHJcbmNsYXNzIE1vdmllU2VydmljZSB7XHJcbiAgYXN5bmMgZ2V0UG9wdWxhck1vdmllcygpIHtcclxuICAgIHJldHVybiBzZXJ2aWNlLmdldChgL21vdmllL25vd19wbGF5aW5nJHtrZXlTdHJpbmd9YCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRNb3ZpZURldGFpbHMoaWQpIHtcclxuICAgIHJldHVybiBzZXJ2aWNlLmdldChgJHthcHBjb25maWcudG1kYkVuZHBvaW50fS9tb3ZpZS8ke2lkfSR7a2V5U3RyaW5nfWApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbW92aWVTZXJ2aWNlID0gbmV3IE1vdmllU2VydmljZSgpO1xyXG5leHBvcnQgZGVmYXVsdCBtb3ZpZVNlcnZpY2U7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==