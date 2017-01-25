var convert = require('lib/lodash/fp/convert'),
    func = convert('isWeakMap', require('lib/lodash/isWeakMap'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
