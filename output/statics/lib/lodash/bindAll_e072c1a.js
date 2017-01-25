var arrayEach = require('lib/lodash/_arrayEach'),
    baseFlatten = require('lib/lodash/_baseFlatten'),
    bind = require('lib/lodash/bind'),
    rest = require('lib/lodash/rest'),
    toKey = require('lib/lodash/_toKey');

/**
 * Binds methods of an object to the object itself, overwriting the existing
 * method.
 *
 * **Note:** This method doesn't set the "length" property of bound functions.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {Object} object The object to bind and assign the bound methods to.
 * @param {...(string|string[])} methodNames The object method names to bind.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var view = {
 *   'label': 'docs',
 *   'onClick': function() {
 *     console.log('clicked ' + this.label);
 *   }
 * };
 *
 * _.bindAll(view, 'onClick');
 * jQuery(element).on('click', view.onClick);
 * // => Logs 'clicked docs' when clicked.
 */
var bindAll = rest(function(object, methodNames) {
  arrayEach(baseFlatten(methodNames, 1), function(key) {
    key = toKey(key);
    object[key] = bind(object[key], object);
  });
  return object;
});

module.exports = bindAll;
