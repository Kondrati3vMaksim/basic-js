const { NotImplementedError } = require("../lib");

const chainMaker = {
  result: [],

  getLength() {
    return this.result.length;
  },

  addLink(value = "") {
    this.result.push(value);
    return this;
  },

  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.result.length
    ) {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.result.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.result.reverse();
    return this;
  },

  finishChain() {
    const str = this.result
      .map((item) => {
        if (item === "") {
          return "( )";
        }

        return `( ${String(item)} )`;
      })
      .join("~~");

    this.result = [];
    return str;
  },
};

module.exports = {
  chainMaker,
};
