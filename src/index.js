/**
 * Use algorithm from stackoverflow to
 * generate gradient color from color1 to color2 in n steps
 * https://stackoverflow.com/questions/22607043/color-gradient-algorithm/39924008#39924008
 * @author Evan Lu <evanlu361425@gmail.com>
 * @version 1.0.0
 */

const GenGradientColor = require('./gen-gradient-color');
const util = require('./util');

if (typeof window !== 'undefined') {
  window.GenGradientColor = GenGradientColor;
}

module.exports = {
  GenGradientColor,
  util,
};
