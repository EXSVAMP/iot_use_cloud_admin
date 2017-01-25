var convert = require('lib/lodash/fp/convert'),
    func = convert('lowerFirst', require('lib/lodash/lowerFirst'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
