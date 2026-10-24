const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];

  const commands = new Set([
    "--double-next",
    "--double-prev",
    "--discard-next",
    "--discard-prev",
  ]);

  for (let i = 0; i < arr.length; i++) {
    if (commands.has(arr[i])) {
      continue;
    }

    let copies = 1;

    if (arr[i - 1] === "--discard-next") {
      copies = 0;
    } else {
      if (arr[i - 1] === "--double-next") {
        copies++;
      }

      if (arr[i + 1] === "--double-prev") {
        copies++;
      }

      if (arr[i + 1] === "--discard-prev") {
        copies--;
      }
    }

    for (let j = 0; j < copies; j++) {
      result.push(arr[i]);
    }
  }

  return result;
}

module.exports = {
  transform
};
