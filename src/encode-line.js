const { NotImplementedError } = require("../lib");

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
  let arr = str.split("");
  let newStr = "";
  let count = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      count += 1;
    } else {
      count === 1 ? (newStr += arr[i]) : (newStr += count + arr[i]);
      count = 1;
    }
  }
  return newStr;
}

module.exports = {
  encodeLine,
};
