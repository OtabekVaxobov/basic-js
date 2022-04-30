const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return '';
  let last = str[0];
  let cnt = 0;
  let result = '';
  str = str + '_';
  str.split('').forEach((item) => {
    if (last === item) {
      cnt++;
    } else {
      result += cnt === 1 ? last : cnt + last;
      cnt = 1;
      last = item;
    }
  });
  return result;
}

module.exports = {
  encodeLine,
};
