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
  constructor(color1 = 'e74c3c', color2 = '3498eb', steps = 0) {
    this.steps = steps;
    this.setColors(color1, color2);
  }

  // Public

  /**
   * Generate all colors in gradient
   * You must set color1 and color2 first
   * @param {number} steps
   * @return {array}
   */
  gens(steps) {
    steps = +steps;
    this.steps = steps - 1;
    return [...Array(steps).keys()].map((i) => this.gen(i));
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
      return util.rgb2hex(this.C1);
    }

    step /= this.steps;

    let colors = this.L1.map(
      (l1, i) => util.lerp(l1, this.L2[`${i}`], step),
    );
    const sum = colors.reduce((total, color) => total + color, 0);

    if (sum != 0) {
      const intensity = Math.pow(util.lerp(this.B1, this.B2, step), CONST.rGAMMA) / sum;
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
    this.C1 = util.color2rgb(color1);
    this.C2 = util.color2rgb(color2);
    this.L1 = util.rgb2linear(this.C1);
    this.L2 = util.rgb2linear(this.C2);
    this.B1 = Math.pow(this.L1.reduce((carry, v) => carry + v, 0), CONST.GAMMA);
    this.B2 = Math.pow(this.L2.reduce((carry, v) => carry + v, 0), CONST.GAMMA);
  }
}

module.exports = GenGradientColor;