var convert = require('lib/lodash/fp/convert'),
    func = convert('negate', require('lib/lodash/negate'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
