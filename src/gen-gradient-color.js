const util = require('./util');
const CONST = require('./constant');

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
class GenGradientColor {
  /**
   * @constructor
   * @param {(string|number[])} color1 - String represent color code, Array represent RGB data
   * @param {(string|number[])} color2
   * @param {number} steps - Number of steps, it can set dynamically
   */
  constructor(color1 = null, color2 = null, steps = 0) {
    this.steps = steps;

    if (color1 && color2) {
      this.setColors(color1, color2);
    }
  }

  // Public

  /**
   * Generate all colors in gradient
   * You must set color1 and color2 first
   * @param {number} steps
   * @return {array}
   */
  gens(steps) {
    this.steps = +steps - 1;
    return [...Array(steps).keys()].map((step) => this.gen(step));
  }

  /**
   * Generate color in gradient
   * @param {number} step 0-index
   * @param {number} steps
   * @return {string} hex - Hex code
   */
  gen(step, steps) {
    if (steps !== undefined) {
      this.steps = steps;
    }

    if (!this.steps || !step) {
      return util.rgb2hex(this.color1);
    }

    step /= this.steps;

    let colors = this.linear1.map((l1, i) => util.lerp(l1, this.linear2[i], step));
    const sum = colors.reduce((total, color) => total + color, 0);

    if (sum != 0) {
      const intensity = Math.pow(util.lerp(this.bias1, this.bias2, step), CONST.rGAMMA) / sum;
      colors = colors.map((color) => color * intensity);
    }

    return util.rgb2hex(util.linear2rgb(colors));
  }

  // Setter

  /**
   * set steps
   * @param {number} steps
   */
  setSteps(steps) {
    this.steps = steps;
  }

  /**
   * set color, linear value, bright value
   * @param {string|array} color1
   * @param {string|array} color2
   */
  setColors(color1, color2) {
    this.color1 = util.color2rgb(color1);
    this.color2 = util.color2rgb(color2);
    this.linear1 = util.rgb2linear(this.color1);
    this.linear2 = util.rgb2linear(this.color2);
    this.bias1 = Math.pow(this.linear1.reduce((carry, v) => carry + v, 0), CONST.GAMMA);
    this.bias2 = Math.pow(this.linear2.reduce((carry, v) => carry + v, 0), CONST.GAMMA);
  }
}

module.exports = GenGradientColor;
