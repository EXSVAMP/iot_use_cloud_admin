var ListCache = require('lib/lodash/_ListCache'),
    stackClear = require('lib/lodash/_stackClear'),
    stackDelete = require('lib/lodash/_stackDelete'),
    stackGet = require('lib/lodash/_stackGet'),
    stackHas = require('lib/lodash/_stackHas'),
    stackSet = require('lib/lodash/_stackSet');

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  this.__data__ = new ListCache(entries);
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;
