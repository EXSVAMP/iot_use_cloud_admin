var baseGetAllKeys = require('lib/lodash/_baseGetAllKeys'),
    getSymbolsIn = require('lib/lodash/_getSymbolsIn'),
    keysIn = require('lib/lodash/keysIn');

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;
