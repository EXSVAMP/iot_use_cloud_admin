var baseHas = require('lib/lodash/_baseHas'),
    castPath = require('lib/lodash/_castPath'),
    isKey = require('lib/lodash/_isKey'),
    last = require('lib/lodash/last'),
    parent = require('lib/lodash/_parent'),
    toKey = require('lib/lodash/_toKey');

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);
  object = parent(object, path);

  var key = toKey(last(path));
  return !(object != null && baseHas(object, key)) || delete object[key];
}

module.exports = baseUnset;
