var convert = require('lib/lodash/fp/convert'),
    func = convert('toSafeInteger', require('lib/lodash/toSafeInteger'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
