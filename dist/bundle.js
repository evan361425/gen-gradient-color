/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constant.js":
/*!*************************!*\
  !*** ./src/constant.js ***!
  \*************************/
/***/ ((module) => {

var GAMMA = 0.43;
var L1 = 0.055;
var L2 = 12.92;
var C1 = 10.31475;
var C2 = 0.0031308;
var RATIO = 2.4;
var rGAMMA = 1 / GAMMA;
module.exports = {
  GAMMA: GAMMA,
  L1: L1,
  L2: L2,
  C1: C1,
  C2: C2,
  RATIO: RATIO,
  rGAMMA: rGAMMA
};

/***/ }),

/***/ "./src/gen-gradient-color.js":
/*!***********************************!*\
  !*** ./src/gen-gradient-color.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var util = __webpack_require__(/*! ./util */ "./src/util.js");

var CONST = __webpack_require__(/*! ./constant */ "./src/constant.js");
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */


var GenGradientColor = /*#__PURE__*/function () {
  /**
   * @constructor
   * @param {(string|number[])} color1 - String represent color code, Array represent RGB data
   * @param {(string|number[])} color2
   * @param {number} steps - Number of steps, it can set dynamically
   */
  function GenGradientColor() {
    var color1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'e74c3c';
    var color2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '3498eb';
    var steps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, GenGradientColor);

    this.steps = steps;
    this.setColors(color1, color2);
  } // Public

  /**
   * Generate all colors in gradient
   * You must set color1 and color2 first
   * @param {number} steps
   * @return {array}
   */


  _createClass(GenGradientColor, [{
    key: "gens",
    value: function gens(steps) {
      var _this = this;

      steps = +steps;
      this.steps = steps - 1;
      return _toConsumableArray(Array(steps).keys()).map(function (i) {
        return _this.gen(i);
      });
    }
    /**
     * Generate color in gradient
     * @param {number} step 0-index
     * @param {number} steps
     * @return {string} hex - Hex code
     */

  }, {
    key: "gen",
    value: function gen(step, steps) {
      var _this2 = this;

      if (steps !== undefined) {
        this.steps = steps;
      }

      if (!this.steps || !step) {
        return util.rgb2hex(this.C1);
      }

      step /= this.steps;
      var colors = this.L1.map(function (l1, i) {
        return util.lerp(l1, _this2.L2["".concat(i)], step);
      });
      var sum = colors.reduce(function (total, color) {
        return total + color;
      }, 0);

      if (sum != 0) {
        var intensity = Math.pow(util.lerp(this.B1, this.B2, step), CONST.rGAMMA) / sum;
        colors = colors.map(function (color) {
          return color * intensity;
        });
      }

      return util.rgb2hex(util.linear2rgb(colors));
    } // Setter

    /**
     * set steps
     * @param {number} steps
     */

  }, {
    key: "setSteps",
    value: function setSteps(steps) {
      this.steps = steps;
    }
    /**
     * set color, linear value, bright value
     * @param {string|array} color1
     * @param {string|array} color2
     */

  }, {
    key: "setColors",
    value: function setColors(color1, color2) {
      this.C1 = util.color2rgb(color1);
      this.C2 = util.color2rgb(color2);
      this.L1 = util.rgb2linear(this.C1);
      this.L2 = util.rgb2linear(this.C2);
      this.B1 = Math.pow(this.L1.reduce(function (carry, v) {
        return carry + v;
      }, 0), CONST.GAMMA);
      this.B2 = Math.pow(this.L2.reduce(function (carry, v) {
        return carry + v;
      }, 0), CONST.GAMMA);
    }
  }]);

  return GenGradientColor;
}();

module.exports = GenGradientColor;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Use algorithm from stackoverflow to
 * generate gradient color from color1 to color2 in n steps
 * https://stackoverflow.com/questions/22607043/color-gradient-algorithm/39924008#39924008
 * @author Evan Lu <evanlu361425@gmail.com>
 * @version 1.0.0
 */
var GenGradientColor = __webpack_require__(/*! ./gen-gradient-color */ "./src/gen-gradient-color.js");

var util = __webpack_require__(/*! ./util */ "./src/util.js");

if (window) {
  window.GenGradientColor = GenGradientColor;
}

module.exports = {
  GenGradientColor: GenGradientColor,
  util: util
};

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var CONST = __webpack_require__(/*! ./constant */ "./src/constant.js");
/**
 * Wheather input is string
 * @param {mixed} value
 * @return {boolean}
 */


function isString(value) {
  return typeof value === 'string' || value instanceof String;
}
/**
 * String hex code to RGB number array
 * @param {string} hex - Hex code
 * @return {number[]} - Array of RGB
 */


function hex2rgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!result) {
    throw new TypeError('Hex code is invalid please follow #?????? which ? is an hex number');
  }

  return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
}
/**
 * Return array of rgb
 * @param {string|array} color
 * @return {array}
 */


function color2rgb(color) {
  if (isString(color)) {
    return hex2rgb(color);
  } else if (Array.isArray(color)) {
    return color.map(function (el) {
      return +el;
    });
  }

  throw new TypeError('Color must be string or array');
}
/**
 * Get the Linear intERPolation between two value
 * @param {number} x - First var
 * @param {number} y - Second var
 * @param {number} p - Probability
 * @return {number}
 */


function lerp(x, y, p) {
  return x * (1 - p) + y * p;
}
/**
 * String hex code to RGB number array
 * @param {number[]} rgb
 * @return {string} - Hex code
 */


function rgb2hex(rgb) {
  return '#' + rgb.map(function (c) {
    c = Math.min(255, Math.abs(c)).toString(16);
    return c.length == 1 ? '0' + c : c;
  }).join('');
}
/**
 * Returns a linear value in the range [0,1]
 * for sRGB input in [0,255].
 * @param {number[]} rgb
 * @return {number[]}
 */


function rgb2linear(rgb) {
  return rgb.map(function (x) {
    return x <= CONST.C1 ? x / CONST.L2 / 255. : Math.pow((x / 255. + CONST.L1) / (1 + CONST.L1), CONST.RATIO);
  });
}
/**
 * Returns a sRGB value in the range [0,255]
 * for linear input in [0,1]
 * @param {number[]} linear
 * @return {number[]}
 */


function linear2rgb(linear) {
  return linear.map(function (x) {
    return Math.round(255.9999 * (x <= CONST.C2 ? CONST.L2 * x : (1 + CONST.L1) * Math.pow(x, 1 / CONST.RATIO) - CONST.L1));
  });
}

module.exports = {
  isString: isString,
  hex2rgb: hex2rgb,
  color2rgb: color2rgb,
  lerp: lerp,
  rgb2hex: rgb2hex,
  rgb2linear: rgb2linear,
  linear2rgb: linear2rgb
};

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
//# sourceMappingURL=bundle.js.map