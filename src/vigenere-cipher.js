const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isNormal) {
    this.normal = isNormal;
  }
  encrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const upperText = text.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = "";
    let k = 0;
    for (let i = 0; i < text.length; i++) {
      if (alphabet.includes(upperText[i])) {
        const keyChar = k % key.length;
        const indexText = alphabet.indexOf(upperText[i]);
        const keyIndex = alphabet.indexOf(upperKey[keyChar]);
        let newIndex = indexText + keyIndex;
        if (newIndex > 25) {
          newIndex = newIndex % alphabet.length;
        }
        result += alphabet[newIndex];
        k++;
      } else {
        result += upperText[i];
      }
    }
    if (this.normal === false) {
      return result.split("").reverse().join("");
    }
    return result;
  }

  decrypt(text, key) {
    if (text === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const upperText = text.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = "";
    let k = 0;
    for (let i = 0; i < text.length; i++) {
      if (alphabet.includes(upperText[i])) {
        const keyChar = k % key.length;
        const indexText = alphabet.indexOf(upperText[i]);
        const keyIndex = alphabet.indexOf(upperKey[keyChar]);
        let newIndex = indexText - keyIndex;
        if (newIndex < 0) {
          newIndex = newIndex + alphabet.length;
        }
        result += alphabet[newIndex];
        k++;
      } else {
        result += upperText[i];
      }
    }
    if (this.normal === false) {
      return result.split("").reverse().join("");
    }
    return result;
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
