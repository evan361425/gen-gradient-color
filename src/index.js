/**
 * Main logic: https://stackoverflow.com/questions/22607043/color-gradient-algorithm/39924008#39924008
 *
 * And other helper method.
 *
 * @author Shueh Chou Lu <evanlu361425@gmail.com>
 * @version 1.0.4
 */

const GenGradientColor = require('./gen-gradient-color');
const util = require('./util');

if (typeof window !== 'undefined') {
  window.GenGradientColor = GenGradientColor;
  window.GenGradientColor.util = util;
}

module.exports = {
  GenGradientColor,
  util,
};
