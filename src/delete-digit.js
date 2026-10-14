const { NotImplementedError } = require("../lib");

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
  const arr = String(n).split("");
  const first = [];

  for (let i = 0; i < arr.length; i++) {
    const digit = arr.slice(0, i).concat(arr.slice(i + 1));
    const num = Number(digit.join(""));
    first.push(num);
  }
  return Math.max(...first);
}

module.exports = {
  deleteDigit,
};
