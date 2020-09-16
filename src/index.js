/**
 * Use algorithm from stackoverflow to 
 * generate gradient color from color1 to color2 in n steps
 * https://stackoverflow.com/questions/22607043/color-gradient-algorithm/39924008#39924008
 * @author Evan Lu <evanlu361425@gmail.com>
 * @version 1.0.0
 */
 
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const GAMMA  = 0.43
const L1     = 0.055
const L2     = 12.92
const C1     = 10.31475
const C2     = 0.0031308
const RATIO  = 2.4
const rGAMMA = 1 / GAMMA

/**
 * ------------------------------------------------------------------------
 * Useful functions
 * ------------------------------------------------------------------------
 */

/**
 * Wheather input is string
 * @param {mixed} value
 * @return {boolean}
 */
function isString(value) {
	return typeof value === 'string' || value instanceof String
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
	return [
		parseInt(result[1], 16),
		parseInt(result[2], 16),
		parseInt(result[3], 16)
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
		return color.map(el => +el)
	}
	throw new TypeError('Color must be string or array')
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
	return '#' + rgb.map(c => {
		c = Math.min(255, Math.abs(c)).toString(16);
		return c.length == 1 ? '0' + c : c;
	}).join('')
}

/**
 * Returns a linear value in the range [0,1]
 * for sRGB input in [0,255].
 * @param {number[]} rgb
 * @return {number[]}
 */
function rgb2linear(rgb) {
	return rgb.map(x =>
		x <= C1 
			? x / L2 / 255.
			: Math.pow((x / 255. + L1) / (1 + L1), RATIO)
	)
}

/**
 * Returns a sRGB value in the range [0,255]
 * for linear input in [0,1]
 * @param {number[]} linear
 * @return {number[]}
 */
function linear2rgb(linear) {
	return linear.map(x =>
		Math.round(255.9999 * (
			x <= C2
				? L2 * x 
				: (1 + L1) * Math.pow(x, 1 / RATIO) - L1
		))
	)
}

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class genGradientColor {
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
		this.steps = steps
		return [...Array(steps).keys()].map(i => this.gen(i));
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
			return rgb2hex(this.C1);
		}

		step /= this.steps;

		let colors = this.L1.map(
			(l1, i) => lerp(l1, this.L2[i], step)
		);
		let sum = colors.reduce((total, color) => total+color, 0)

		if (sum != 0) {
			const intensity = Math.pow(lerp(this.B1, this.B2, step), rGAMMA) / sum;
			colors = colors.map(color => color * intensity);
		}

		return rgb2hex(linear2rgb(colors));
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
		this.C1 = color2rgb(color1)
		this.C2 = color2rgb(color2)
		this.L1 = rgb2linear(this.C1);
		this.L2 = rgb2linear(this.C2);
		this.B1 = Math.pow(this.L1.reduce((carry, v) => carry+v, 0), GAMMA);
		this.B2 = Math.pow(this.L2.reduce((carry, v) => carry+v, 0), GAMMA);
	}
}

export default genGradientColor
