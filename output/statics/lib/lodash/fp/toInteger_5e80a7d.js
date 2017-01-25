var convert = require('lib/lodash/fp/convert'),
    func = convert('toInteger', require('lib/lodash/toInteger'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
