var convert = require('lib/lodash/fp/convert'),
    func = convert('isArrayLike', require('lib/lodash/isArrayLike'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
