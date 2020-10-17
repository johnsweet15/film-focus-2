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
  console.log(router);
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
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(_components_movieDetails_movieDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {
    movie: movie,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
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

/***/ "./src/services/movies.js":
/*!********************************!*\
  !*** ./src/services/movies.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ "./src/services/service.js");
/* harmony import */ var _config_appconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/appconfig */ "./src/config/appconfig.js");
/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/keys */ "./src/config/keys.js");



const keyString = `?api_key=${_config_keys__WEBPACK_IMPORTED_MODULE_2__["default"].tmdbKey}`;

class MovieService {
  async getPopularMovies() {
    return _service__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_config_appconfig__WEBPACK_IMPORTED_MODULE_1__["default"].tmdbEndpoint}/movie/now_playing${keyString}`);
  }

  async getMovieDetails(id) {
    return _service__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${_config_appconfig__WEBPACK_IMPORTED_MODULE_1__["default"].tmdbEndpoint}/movie/${id}${keyString}`);
  }

}

const movieService = new MovieService();
/* harmony default export */ __webpack_exports__["default"] = (movieService);

/***/ }),

/***/ "./src/services/service.js":
/*!*********************************!*\
  !*** ./src/services/service.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);


const service = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({});
const serviceUtil = {
  get: function get(url, config) {
    return new Promise(async (res, rej) => {
      let response = await service.get(url, config);
      res(response);
    }).catch(error => {
      var _error$response, _error$response$data;

      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.error);
    });
  },
  post: function post(url, data, config) {
    return new Promise(async (res, rej) => {
      let response = await service.post(url, data, config);
      res(response);
    }).catch(error => {
      var _error$response2, _error$response2$data;

      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(error === null || error === void 0 ? void 0 : (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.error);
    });
  }
};
/* harmony default export */ __webpack_exports__["default"] = (serviceUtil);

/***/ }),

/***/ 4:
/*!*********************************************!*\
  !*** multi ./src/pages/movie/[id]/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Film_Focus_2\film-focus-2\src\pages\movie\[id]\index.js */"./src/pages/movie/[id]/index.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW92aWVEZXRhaWxzL21vdmllRGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2FwcGNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29uZmlnL2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL21vdmllLy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvbW92aWVzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9zZXJ2aWNlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJNb3ZpZURldGFpbHMiLCJwcm9wcyIsIm1vdmllIiwicG9zdGVyIiwicG9zdGVyX3BhdGgiLCJ0aXRsZSIsImFwcGNvbmZpZyIsImZpbG1Gb2N1c0VuZHBvaW50IiwidG1kYkVuZHBvaW50Iiwia2V5cyIsInRtZGJLZXkiLCJNb3ZpZSIsInNldE1vdmllIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJpZCIsInF1ZXJ5IiwidXNlRWZmZWN0IiwiZ2V0TW92aWVEZXRhaWxzIiwicmVzcG9uc2UiLCJNb3ZpZVNlcnZpY2UiLCJkYXRhIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImtleVN0cmluZyIsImdldFBvcHVsYXJNb3ZpZXMiLCJzZXJ2aWNlIiwiZ2V0IiwibW92aWVTZXJ2aWNlIiwiYXhpb3MiLCJjcmVhdGUiLCJzZXJ2aWNlVXRpbCIsInVybCIsImNvbmZpZyIsIlByb21pc2UiLCJyZXMiLCJyZWoi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Q0FBSDtBQUNELEtBSE0sRUFHSmtCLEtBSEksQ0FHR0MsS0FBRCxJQUFXO0FBQUE7O0FBQ2xCQyxrREFBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQsYUFBY0EsS0FBZCwwQ0FBY0EsS0FBSyxDQUFFbkIsUUFBckIsNEVBQWMsZ0JBQWlCRSxJQUEvQix5REFBYyxxQkFBdUJpQixLQUFyQztBQUNELEtBTE0sQ0FBUDtBQU1ELEdBUmlCO0FBU2xCRSxNQUFJLEVBQUUsU0FBU0EsSUFBVCxDQUFjUixHQUFkLEVBQW1CWCxJQUFuQixFQUF5QlksTUFBekIsRUFBaUM7QUFDckMsV0FBTyxJQUFJQyxPQUFKLENBQVksT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ3JDLFVBQUlqQixRQUFRLEdBQUcsTUFBTU8sT0FBTyxDQUFDYyxJQUFSLENBQWFSLEdBQWIsRUFBa0JYLElBQWxCLEVBQXdCWSxNQUF4QixDQUFyQjtBQUNBRSxTQUFHLENBQUNoQixRQUFELENBQUg7QUFDRCxLQUhNLEVBR0prQixLQUhJLENBR0dDLEtBQUQsSUFBVztBQUFBOztBQUNsQkMsa0RBQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkLGFBQWNBLEtBQWQsMkNBQWNBLEtBQUssQ0FBRW5CLFFBQXJCLDhFQUFjLGlCQUFpQkUsSUFBL0IsMERBQWMsc0JBQXVCaUIsS0FBckM7QUFDRCxLQUxNLENBQVA7QUFNRDtBQWhCaUIsQ0FBcEI7QUFtQmVQLDBFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxtb3ZpZVxcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL01vdmllRGV0YWlscy5zY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllRGV0YWlscyhwcm9wcykge1xyXG4gIGNvbnN0IHsgbW92aWUgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHBvc3RlciA9XHJcbiAgICBcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c2MDBfYW5kX2g5MDBfYmVzdHYyXCIgKyBtb3ZpZT8ucG9zdGVyX3BhdGg7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZGV0YWlscy1wb3N0ZXJcIiBzcmM9e3Bvc3Rlcn0gYWx0PVwicG9zdGVyXCIgLz5cclxuICAgICAgPGgyPnttb3ZpZS50aXRsZX08L2gyPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59IiwibGV0IGFwcGNvbmZpZyA9IHtcclxuICBmaWxtRm9jdXNFbmRwb2ludDogXCJodHRwOi8vbG9jYWxob3N0OjUwMDBcIixcclxuICB0bWRiRW5kcG9pbnQ6IFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvM1wiXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhcHBjb25maWc7XHJcbiIsImNvbnN0IGtleXMgPSB7XHJcbiAgdG1kYktleTogXCJjNzk0MzMzMTU2ZTFjMDk1ZjQxZjkyZTEyOGMwMDJkZlwiXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGtleXM7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE1vdmllU2VydmljZSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvbW92aWVzXCI7XHJcbmltcG9ydCBNb3ZpZURldGFpbHMgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9tb3ZpZURldGFpbHMvbW92aWVEZXRhaWxzJztcclxuXHJcbmZ1bmN0aW9uIE1vdmllKHByb3BzKSB7XHJcbiAgY29uc3QgW21vdmllLCBzZXRNb3ZpZV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnNvbGUubG9nKHJvdXRlcilcclxuICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRNb3ZpZURldGFpbHMoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldE1vdmllRGV0YWlscygpIHtcclxuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IE1vdmllU2VydmljZS5nZXRNb3ZpZURldGFpbHMoaWQpO1xyXG4gICAgc2V0TW92aWUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TW92aWVEZXRhaWxzIG1vdmllPXttb3ZpZX0gLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7fSxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllOyIsImltcG9ydCBzZXJ2aWNlIGZyb20gXCIuL3NlcnZpY2VcIjtcclxuaW1wb3J0IGFwcGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnL2FwcGNvbmZpZ1wiO1xyXG5pbXBvcnQga2V5cyBmcm9tIFwiLi4vY29uZmlnL2tleXNcIjtcclxuXHJcbmNvbnN0IGtleVN0cmluZyA9IGA/YXBpX2tleT0ke2tleXMudG1kYktleX1gO1xyXG5cclxuY2xhc3MgTW92aWVTZXJ2aWNlIHtcclxuICBhc3luYyBnZXRQb3B1bGFyTW92aWVzKCkge1xyXG4gICAgcmV0dXJuIHNlcnZpY2UuZ2V0KGAke2FwcGNvbmZpZy50bWRiRW5kcG9pbnR9L21vdmllL25vd19wbGF5aW5nJHtrZXlTdHJpbmd9YCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRNb3ZpZURldGFpbHMoaWQpIHtcclxuICAgIHJldHVybiBzZXJ2aWNlLmdldChgJHthcHBjb25maWcudG1kYkVuZHBvaW50fS9tb3ZpZS8ke2lkfSR7a2V5U3RyaW5nfWApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbW92aWVTZXJ2aWNlID0gbmV3IE1vdmllU2VydmljZSgpO1xyXG5leHBvcnQgZGVmYXVsdCBtb3ZpZVNlcnZpY2U7IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IHNlcnZpY2UgPSBheGlvcy5jcmVhdGUoe30pO1xyXG5cclxuY29uc3Qgc2VydmljZVV0aWwgPSB7XHJcbiAgZ2V0OiBmdW5jdGlvbiBnZXQodXJsLCBjb25maWcpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzLCByZWopID0+IHtcclxuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgc2VydmljZS5nZXQodXJsLCBjb25maWcpO1xyXG4gICAgICByZXMocmVzcG9uc2UpO1xyXG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoZXJyb3I/LnJlc3BvbnNlPy5kYXRhPy5lcnJvcik7XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIHBvc3Q6IGZ1bmN0aW9uIHBvc3QodXJsLCBkYXRhLCBjb25maWcpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzLCByZWopID0+IHtcclxuICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgc2VydmljZS5wb3N0KHVybCwgZGF0YSwgY29uZmlnKTtcclxuICAgICAgcmVzKHJlc3BvbnNlKTtcclxuICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKGVycm9yPy5yZXNwb25zZT8uZGF0YT8uZXJyb3IpO1xyXG4gICAgfSk7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNlcnZpY2VVdGlsO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=