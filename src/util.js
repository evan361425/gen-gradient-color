const CONST = require('./constant');

/**
 * Check is input a string
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
  const rgb = hex.match(hex.length > 4 ?
    /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i :
    /^#?([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i);

  if (!rgb) {
    throw new TypeError('Hex code is invalid which should be 3/6 digits');
  }
  const rgbArray = hex.length > 4 ?
    [rgb[1], rgb[2], rgb[3]] :
    [rgb[1].repeat(2), rgb[2].repeat(2), rgb[3].repeat(2)];

  return rgbArray.map((color) => parseInt(color, 16));
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
    return color.map(sanitizeColor);
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
 * @param {number[]|string} rgb
 * @return {string} - Hex code
 */
function rgb2hex(rgb) {
  if (isString(rgb)) {
    rgb = color2rgb(rgb);
  } else if (!Array.isArray(rgb)) {
    throw new TypeError('RGB must be array or string');
  }

  return '#' + rgb
    .map(sanitizeColor)
    .map((color) => color.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * Returns a linear value in the range [0,1]
 * for sRGB input in [0,255].
 * @param {number[]|string} rgb
 * @return {number[]}
 */
function rgb2linear(rgb) {
  if (isString(rgb)) {
    rgb = color2rgb(rgb);
  } else if (!Array.isArray(rgb)) {
    throw new TypeError('RGB must be array or string');
  }

  return rgb.map((x) =>
    x <= CONST.C1 ?
      x / CONST.L2 / 255.0 :
      Math.pow((x / 255.0 + CONST.L1) / (1 + CONST.L1), CONST.RATIO),
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

/**
 * Sanitize color to 0-255
 * @param  {mixed} color
 * @return {number}
 */
function sanitizeColor(color) {
  const result = Math.min(255, Math.abs(+color));
  return isNaN(result) ? 0 : result;
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
