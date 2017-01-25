var baseIsEqual = require('lib/lodash/_baseIsEqual'),
    get = require('lib/lodash/get'),
    hasIn = require('lib/lodash/hasIn'),
    isKey = require('lib/lodash/_isKey'),
    isStrictComparable = require('lib/lodash/_isStrictComparable'),
    matchesStrictComparable = require('lib/lodash/_matchesStrictComparable'),
    toKey = require('lib/lodash/_toKey');

/** Used to compose bitmasks for comparison styles. */
var UNORDERED_COMPARE_FLAG = 1,
    PARTIAL_COMPARE_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
  };
}

module.exports = baseMatchesProperty;
