const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let res = [];
  let array = [];
  arr.forEach(function (el, i, ar) {
    if (el > 0) {
      array.push(el);
      array.sort((a, b) => a - b);
    }
  });
  arr.forEach(function (el, i, arr) {
    if (el < 0) {
      res.push(-1);
    } else {
      res.push(array.shift());
    }
  });
  return res;
}

module.exports = {
  sortByHeight,
};
