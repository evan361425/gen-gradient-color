/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * Use algorithm from stackoverflow to\n * generate gradient color from color1 to color2 in n steps\n * https://stackoverflow.com/questions/22607043/color-gradient-algorithm/39924008#39924008\n * @author Evan Lu <evanlu361425@gmail.com>\n * @version 1.0.0\n */\n\n/**\n * ------------------------------------------------------------------------\n * Constants\n * ------------------------------------------------------------------------\n */\nvar GAMMA = 0.43;\nvar L1 = 0.055;\nvar L2 = 12.92;\nvar C1 = 10.31475;\nvar C2 = 0.0031308;\nvar RATIO = 2.4;\nvar rGAMMA = 1 / GAMMA;\n/**\n * ------------------------------------------------------------------------\n * Useful functions\n * ------------------------------------------------------------------------\n */\n\n/**\n * Wheather input is string\n * @param {mixed} value\n * @return {boolean}\n */\n\nfunction isString(value) {\n  return typeof value === 'string' || value instanceof String;\n}\n/**\n * String hex code to RGB number array\n * @param {string} hex - Hex code\n * @return {number[]} - Array of RGB\n */\n\n\nfunction hex2rgb(hex) {\n  var result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(hex);\n\n  if (!result) {\n    throw new TypeError('Hex code is invalid please follow #?????? which ? is an hex number');\n  }\n\n  return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];\n}\n/**\n * Return array of rgb\n * @param {string|array} color\n * @return {array}\n */\n\n\nfunction color2rgb(color) {\n  if (isString(color)) {\n    return hex2rgb(color);\n  } else if (Array.isArray(color)) {\n    return color.map(function (el) {\n      return +el;\n    });\n  }\n\n  throw new TypeError('Color must be string or array');\n}\n/**\n * Get the Linear intERPolation between two value\n * @param {number} x - First var\n * @param {number} y - Second var\n * @param {number} p - Probability\n * @return {number}\n */\n\n\nfunction lerp(x, y, p) {\n  return x * (1 - p) + y * p;\n}\n/**\n * String hex code to RGB number array\n * @param {number[]} rgb\n * @return {string} - Hex code\n */\n\n\nfunction rgb2hex(rgb) {\n  return '#' + rgb.map(function (c) {\n    c = Math.min(255, Math.abs(c)).toString(16);\n    return c.length == 1 ? '0' + c : c;\n  }).join('');\n}\n/**\n * Returns a linear value in the range [0,1]\n * for sRGB input in [0,255].\n * @param {number[]} rgb\n * @return {number[]}\n */\n\n\nfunction rgb2linear(rgb) {\n  return rgb.map(function (x) {\n    return x <= C1 ? x / L2 / 255. : Math.pow((x / 255. + L1) / (1 + L1), RATIO);\n  });\n}\n/**\n * Returns a sRGB value in the range [0,255]\n * for linear input in [0,1]\n * @param {number[]} linear\n * @return {number[]}\n */\n\n\nfunction linear2rgb(linear) {\n  return linear.map(function (x) {\n    return Math.round(255.9999 * (x <= C2 ? L2 * x : (1 + L1) * Math.pow(x, 1 / RATIO) - L1));\n  });\n}\n/**\n * ------------------------------------------------------------------------\n * Class Definition\n * ------------------------------------------------------------------------\n */\n\n\nvar genGradientColor = /*#__PURE__*/function () {\n  /**\n   * @constructor\n   * @param {(string|number[])} color1 - String represent color code, Array represent RGB data\n   * @param {(string|number[])} color2\n   * @param {number} steps - Number of steps, it can set dynamically\n   */\n  function genGradientColor() {\n    var color1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'e74c3c';\n    var color2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '3498eb';\n    var steps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n\n    _classCallCheck(this, genGradientColor);\n\n    this.steps = steps;\n    this.setColors(color1, color2);\n  } // Public\n\n  /**\n   * Generate all colors in gradient\n   * You must set color1 and color2 first\n   * @param {number} steps\n   * @return {array}\n   */\n\n\n  _createClass(genGradientColor, [{\n    key: \"gens\",\n    value: function gens(steps) {\n      var _this = this;\n\n      steps = +steps;\n      this.steps = steps;\n      return _toConsumableArray(Array(steps).keys()).map(function (i) {\n        return _this.gen(i);\n      });\n    }\n    /**\n     * Generate color in gradient\n     * @param {number} step 0-index\n     * @param {number} steps\n     * @return {string} hex - Hex code\n     */\n\n  }, {\n    key: \"gen\",\n    value: function gen(step, steps) {\n      var _this2 = this;\n\n      if (steps !== undefined) {\n        this.steps = steps;\n      }\n\n      if (!this.steps || !step) {\n        return rgb2hex(this.C1);\n      }\n\n      step /= this.steps;\n      var colors = this.L1.map(function (l1, i) {\n        return lerp(l1, _this2.L2[i], step);\n      });\n      var sum = colors.reduce(function (total, color) {\n        return total + color;\n      }, 0);\n\n      if (sum != 0) {\n        var intensity = Math.pow(lerp(this.B1, this.B2, step), rGAMMA) / sum;\n        colors = colors.map(function (color) {\n          return color * intensity;\n        });\n      }\n\n      return rgb2hex(linear2rgb(colors));\n    } // Setter\n\n    /**\n     * set steps\n     * @param {number} steps\n     */\n\n  }, {\n    key: \"setSteps\",\n    value: function setSteps(steps) {\n      this.steps = steps;\n    }\n    /**\n     * set color, linear value, bright value\n     * @param {string|array} color1\n     * @param {string|array} color2\n     */\n\n  }, {\n    key: \"setColors\",\n    value: function setColors(color1, color2) {\n      this.C1 = color2rgb(color1);\n      this.C2 = color2rgb(color2);\n      this.L1 = rgb2linear(this.C1);\n      this.L2 = rgb2linear(this.C2);\n      this.B1 = Math.pow(this.L1.reduce(function (carry, v) {\n        return carry + v;\n      }, 0), GAMMA);\n      this.B2 = Math.pow(this.L2.reduce(function (carry, v) {\n        return carry + v;\n      }, 0), GAMMA);\n    }\n  }]);\n\n  return genGradientColor;\n}();\n\nwindow.genGradientColor = genGradientColor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (genGradientColor);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });