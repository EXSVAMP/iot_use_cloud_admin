var apply = require('lib/lodash/_apply'),
    arrayMap = require('lib/lodash/_arrayMap'),
    baseFlatten = require('lib/lodash/_baseFlatten'),
    baseIteratee = require('lib/lodash/_baseIteratee'),
    baseUnary = require('lib/lodash/_baseUnary'),
    isArray = require('lib/lodash/isArray'),
    isFlattenableIteratee = require('lib/lodash/_isFlattenableIteratee'),
    rest = require('lib/lodash/rest');

/**
 * Creates a function like `_.over`.
 *
 * @private
 * @param {Function} arrayFunc The function to iterate over iteratees.
 * @returns {Function} Returns the new over function.
 */
function createOver(arrayFunc) {
  return rest(function(iteratees) {
    iteratees = (iteratees.length == 1 && isArray(iteratees[0]))
      ? arrayMap(iteratees[0], baseUnary(baseIteratee))
      : arrayMap(baseFlatten(iteratees, 1, isFlattenableIteratee), baseUnary(baseIteratee));

    return rest(function(args) {
      var thisArg = this;
      return arrayFunc(iteratees, function(iteratee) {
        return apply(iteratee, thisArg, args);
      });
    });
  });
}

module.exports = createOver;
