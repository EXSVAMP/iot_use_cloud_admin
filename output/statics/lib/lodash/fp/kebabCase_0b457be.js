var convert = require('lib/lodash/fp/convert'),
    func = convert('kebabCase', require('lib/lodash/kebabCase'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
