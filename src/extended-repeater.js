const { NotImplementedError } = require("../lib");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options = {}) {
  let newStr = "";

  const repeatTimes = options.repeatTimes ?? 1;
  const separator = String(options.separator ?? "+");
  const addition =
    options.addition === undefined ? "" : String(options.addition);
  const additionRepeatTimes = options.additionRepeatTimes ?? 1;
  const additionSeparator = String(options.additionSeparator ?? "|");

  for (let i = 0; i < repeatTimes; i++) {
    if (i > 0) {
      newStr += separator;
    }

    newStr += String(str);

    for (let j = 0; j < additionRepeatTimes; j++) {
      if (j > 0) {
        newStr += additionSeparator;
      }

      newStr += addition;
    }
  }

  return newStr;
}

module.exports = {
  repeater,
};
