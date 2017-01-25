var convert = require('lib/lodash/fp/convert'),
    func = convert('toUpper', require('lib/lodash/toUpper'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
