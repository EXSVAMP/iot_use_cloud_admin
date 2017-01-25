var convert = require('lib/lodash/fp/convert'),
    func = convert('isObjectLike', require('lib/lodash/isObjectLike'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
