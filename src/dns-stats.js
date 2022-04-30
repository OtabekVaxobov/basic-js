const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dns = {};
  domains.forEach((el) => {
    let arr = el.split('.').reverse();
    for (let i = 1; i < arr.length + 1; i++) {
      let a = `.${[...arr].splice(0, i).join('.')}`;
      a in dns ? (dns[a] += 1) : (dns[a] = 1);
    }
  });
  return dns;
}

module.exports = {
  getDNSStats,
};
