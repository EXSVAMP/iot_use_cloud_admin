var convert = require('lib/lodash/fp/convert'),
    func = convert('nthArg', require('lib/lodash/nthArg'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
