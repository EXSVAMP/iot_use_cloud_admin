var convert = require('lib/lodash/fp/convert'),
    func = convert('isArrayLikeObject', require('lib/lodash/isArrayLikeObject'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
