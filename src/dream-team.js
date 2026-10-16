const { NotImplementedError } = require("../lib");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const char = [];
  if (!Array.isArray(members)) {
    return false;
  }

  members.forEach((item) => {
    if (typeof item !== "string") {
      return;
    }
    const firstChar = item.trim();
    if (firstChar === "") {
      return;
    }
    char.push(firstChar[0].toUpperCase());
  });
  return char.sort((a, b) => a.localeCompare(b)).join("");
}

module.exports = {
  createDreamTeam,
};
