var getNative = require('lib/lodash/_getNative'),
    root = require('lib/lodash/_root');

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;
