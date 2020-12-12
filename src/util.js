const CONST = require('./constant');

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
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!result) {
    throw new TypeError('Hex code is invalid please follow #?????? which ? is an hex number');
  }

  return [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16),
  ];
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
    return color.map((el) => +el);
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
  return '#' + rgb.map((c) => {
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
  return rgb.map((x) =>
    x <= CONST.C1 ?
      x / CONST.L2 / 255. :
      Math.pow((x / 255. + CONST.L1) / (1 + CONST.L1), CONST.RATIO),
  );
}

/**
 * Returns a sRGB value in the range [0,255]
 * for linear input in [0,1]
 * @param {number[]} linear
 * @return {number[]}
 */
function linear2rgb(linear) {
  return linear.map((x) =>
    Math.round(255.9999 * (
      x <= CONST.C2 ?
        CONST.L2 * x :
        (1 + CONST.L1) * Math.pow(x, 1 / CONST.RATIO) - CONST.L1
    )),
  );
}

module.exports = {
  isString,
  hex2rgb,
  color2rgb,
  lerp,
  rgb2hex,
  rgb2linear,
  linear2rgb,
};
