var convert = require('lib/lodash/fp/convert'),
    func = convert('isSymbol', require('lib/lodash/isSymbol'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
