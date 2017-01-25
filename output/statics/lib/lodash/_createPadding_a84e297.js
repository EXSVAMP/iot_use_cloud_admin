var baseRepeat = require('lib/lodash/_baseRepeat'),
    baseToString = require('lib/lodash/_baseToString'),
    castSlice = require('lib/lodash/_castSlice'),
    reHasComplexSymbol = require('lib/lodash/_reHasComplexSymbol'),
    stringSize = require('lib/lodash/_stringSize'),
    stringToArray = require('lib/lodash/_stringToArray');

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil;

/**
 * Creates the padding for `string` based on `length`. The `chars` string
 * is truncated if the number of characters exceeds `length`.
 *
 * @private
 * @param {number} length The padding length.
 * @param {string} [chars=' '] The string used as padding.
 * @returns {string} Returns the padding for `string`.
 */
function createPadding(length, chars) {
  chars = chars === undefined ? ' ' : baseToString(chars);

  var charsLength = chars.length;
  if (charsLength < 2) {
    return charsLength ? baseRepeat(chars, length) : chars;
  }
  var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
  return reHasComplexSymbol.test(chars)
    ? castSlice(stringToArray(result), 0, length).join('')
    : result.slice(0, length);
}

module.exports = createPadding;
