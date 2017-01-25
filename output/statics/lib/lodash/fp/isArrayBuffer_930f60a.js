var convert = require('lib/lodash/fp/convert'),
    func = convert('isArrayBuffer', require('lib/lodash/isArrayBuffer'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
