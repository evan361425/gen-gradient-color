/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constant.js":
/*!*************************!*\
  !*** ./src/constant.js ***!
  \*************************/
/***/ ((module) => {

eval("var GAMMA = 0.43;\nvar L1 = 0.055;\nvar L2 = 12.92;\nvar C1 = 10.31475;\nvar C2 = 0.0031308;\nvar RATIO = 2.4;\nvar rGAMMA = 1 / GAMMA;\nmodule.exports = {\n  GAMMA: GAMMA,\n  L1: L1,\n  L2: L2,\n  C1: C1,\n  C2: C2,\n  RATIO: RATIO,\n  rGAMMA: rGAMMA\n};\n\n//# sourceURL=webpack://gen-gradient-color/./src/constant.js?");

/***/ }),

/***/ "./src/gen-gradient-color.js":
/*!***********************************!*\
  !*** ./src/gen-gradient-color.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nvar CONST = __webpack_require__(/*! ./constant */ \"./src/constant.js\");\n/**\n * ------------------------------------------------------------------------\n * Class Definition\n * ------------------------------------------------------------------------\n */\n\n\nvar GenGradientColor = /*#__PURE__*/function () {\n  /**\n   * @constructor\n   * @param {(string|number[])} color1 - String represent color code, Array represent RGB data\n   * @param {(string|number[])} color2\n   * @param {number} steps - Number of steps, it can set dynamically\n   */\n  function GenGradientColor() {\n    var color1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n    var color2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n    var steps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n\n    _classCallCheck(this, GenGradientColor);\n\n    this.steps = steps;\n\n    if (color1 && color2) {\n      this.setColors(color1, color2);\n    }\n  } // Public\n\n  /**\n   * Generate all colors in gradient\n   * You must set color1 and color2 first\n   * @param {number} steps\n   * @return {array}\n   */\n\n\n  _createClass(GenGradientColor, [{\n    key: \"gens\",\n    value: function gens(steps) {\n      var _this = this;\n\n      steps = +steps;\n      this.steps = steps - 1;\n      return _toConsumableArray(Array(steps).keys()).map(function (i) {\n        return _this.gen(i);\n      });\n    }\n    /**\n     * Generate color in gradient\n     * @param {number} step 0-index\n     * @param {number} steps\n     * @return {string} hex - Hex code\n     */\n\n  }, {\n    key: \"gen\",\n    value: function gen(step, steps) {\n      var _this2 = this;\n\n      if (steps !== undefined) {\n        this.steps = steps;\n      }\n\n      if (!this.steps || !step) {\n        return util.rgb2hex(this.color1);\n      }\n\n      step /= this.steps;\n      var colors = this.linear1.map(function (l1, i) {\n        return util.lerp(l1, _this2.linear2[i], step);\n      });\n      var sum = colors.reduce(function (total, color) {\n        return total + color;\n      }, 0);\n\n      if (sum != 0) {\n        var intensity = Math.pow(util.lerp(this.bias1, this.bias2, step), CONST.rGAMMA) / sum;\n        colors = colors.map(function (color) {\n          return color * intensity;\n        });\n      }\n\n      return util.rgb2hex(util.linear2rgb(colors));\n    } // Setter\n\n    /**\n     * set steps\n     * @param {number} steps\n     */\n\n  }, {\n    key: \"setSteps\",\n    value: function setSteps(steps) {\n      this.steps = steps;\n    }\n    /**\n     * set color, linear value, bright value\n     * @param {string|array} color1\n     * @param {string|array} color2\n     */\n\n  }, {\n    key: \"setColors\",\n    value: function setColors(color1, color2) {\n      this.color1 = util.color2rgb(color1);\n      this.color2 = util.color2rgb(color2);\n      this.linear1 = util.rgb2linear(this.color1);\n      this.linear2 = util.rgb2linear(this.color2);\n      this.bias1 = Math.pow(this.linear1.reduce(function (carry, v) {\n        return carry + v;\n      }, 0), CONST.GAMMA);\n      this.bias2 = Math.pow(this.linear2.reduce(function (carry, v) {\n        return carry + v;\n      }, 0), CONST.GAMMA);\n    }\n  }]);\n\n  return GenGradientColor;\n}();\n\nmodule.exports = GenGradientColor;\n\n//# sourceURL=webpack://gen-gradient-color/./src/gen-gradient-color.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\n * Use algorithm from stackoverflow to\n * generate gradient color from color1 to color2 in n steps\n * https://stackoverflow.com/questions/22607043/color-gradient-algorithm/39924008#39924008\n * @author Evan Lu <evanlu361425@gmail.com>\n * @version 1.0.0\n */\nvar GenGradientColor = __webpack_require__(/*! ./gen-gradient-color */ \"./src/gen-gradient-color.js\");\n\nvar util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nif (typeof window !== 'undefined') {\n  window.GenGradientColor = GenGradientColor;\n}\n\nmodule.exports = {\n  GenGradientColor: GenGradientColor,\n  util: util\n};\n\n//# sourceURL=webpack://gen-gradient-color/./src/index.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var CONST = __webpack_require__(/*! ./constant */ \"./src/constant.js\");\n/**\n * Check is input a string\n * @param {mixed} value\n * @return {boolean}\n */\n\n\nfunction isString(value) {\n  return typeof value === 'string' || value instanceof String;\n}\n/**\n * String hex code to RGB number array\n * @param {string} hex - Hex code\n * @return {number[]} - Array of RGB\n */\n\n\nfunction hex2rgb(hex) {\n  var rgb = hex.match(hex.length > 4 ? /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i : /^#?([a-f\\d]{1})([a-f\\d]{1})([a-f\\d]{1})$/i);\n\n  if (!rgb) {\n    throw new TypeError('Hex code is invalid which should be 3/6 digits');\n  }\n\n  var rgbArray = hex.length > 4 ? [rgb[1], rgb[2], rgb[3]] : [rgb[1].repeat(2), rgb[2].repeat(2), rgb[3].repeat(2)];\n  return rgbArray.map(function (color) {\n    return parseInt(color, 16);\n  });\n}\n/**\n * Return array of rgb\n * @param {string|array} color\n * @return {array}\n */\n\n\nfunction color2rgb(color) {\n  if (isString(color)) {\n    return hex2rgb(color);\n  } else if (Array.isArray(color)) {\n    return color.map(sanitizeColor);\n  }\n\n  throw new TypeError('Color must be string or array');\n}\n/**\n * Get the Linear intERPolation between two value\n * @param {number} x - First var\n * @param {number} y - Second var\n * @param {number} p - Probability\n * @return {number}\n */\n\n\nfunction lerp(x, y, p) {\n  return x * (1 - p) + y * p;\n}\n/**\n * String hex code to RGB number array\n * @param {number[]|string} rgb\n * @return {string} - Hex code\n */\n\n\nfunction rgb2hex(rgb) {\n  if (isString(rgb)) {\n    rgb = color2rgb(rgb);\n  } else if (!Array.isArray(rgb)) {\n    throw new TypeError('RGB must be array or string');\n  }\n\n  return '#' + rgb.map(sanitizeColor).map(function (color) {\n    return color.toString(16).padStart(2, '0');\n  }).join('');\n}\n/**\n * Returns a linear value in the range [0,1]\n * for sRGB input in [0,255].\n * @param {number[]|string} rgb\n * @return {number[]}\n */\n\n\nfunction rgb2linear(rgb) {\n  if (isString(rgb)) {\n    rgb = color2rgb(rgb);\n  } else if (!Array.isArray(rgb)) {\n    throw new TypeError('RGB must be array or string');\n  }\n\n  return rgb.map(function (x) {\n    return x <= CONST.C1 ? x / CONST.L2 / 255.0 : Math.pow((x / 255.0 + CONST.L1) / (1 + CONST.L1), CONST.RATIO);\n  });\n}\n/**\n * Returns a sRGB value in the range [0,255]\n * for linear input in [0,1]\n * @param {number[]} linear\n * @return {number[]}\n */\n\n\nfunction linear2rgb(linear) {\n  return linear.map(function (x) {\n    return Math.round(255.9999 * (x <= CONST.C2 ? CONST.L2 * x : (1 + CONST.L1) * Math.pow(x, 1 / CONST.RATIO) - CONST.L1));\n  });\n}\n/**\n * Sanitize color to 0-255\n * @param  {mixed} color\n * @return {number}\n */\n\n\nfunction sanitizeColor(color) {\n  var result = Math.min(255, Math.abs(+color));\n  return isNaN(result) ? 0 : result;\n}\n\nmodule.exports = {\n  isString: isString,\n  hex2rgb: hex2rgb,\n  color2rgb: color2rgb,\n  lerp: lerp,\n  rgb2hex: rgb2hex,\n  rgb2linear: rgb2linear,\n  linear2rgb: linear2rgb\n};\n\n//# sourceURL=webpack://gen-gradient-color/./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.js");
/******/ })()
;