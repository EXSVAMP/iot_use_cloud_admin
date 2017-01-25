var convert = require('lib/lodash/fp/convert'),
    func = convert('upperFirst', require('lib/lodash/upperFirst'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
