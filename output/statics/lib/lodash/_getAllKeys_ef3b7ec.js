var baseGetAllKeys = require('lib/lodash/_baseGetAllKeys'),
    getSymbols = require('lib/lodash/_getSymbols'),
    keys = require('lib/lodash/keys');

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;
