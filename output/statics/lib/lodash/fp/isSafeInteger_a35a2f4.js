var convert = require('lib/lodash/fp/convert'),
    func = convert('isSafeInteger', require('lib/lodash/isSafeInteger'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
