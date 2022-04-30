const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  n = String(n).split('');
  let max = 0;
  n.forEach(function (_el, i, arr) {
    let arrCopy = [...arr];
    arrCopy.splice(i, 1);
    let x = Number(arrCopy.join(''));
    x > max ? (max = x) : x;
  });
  return max;
}

module.exports = {
  deleteDigit,
};
