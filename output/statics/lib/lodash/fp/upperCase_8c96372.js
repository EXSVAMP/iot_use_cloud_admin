var convert = require('lib/lodash/fp/convert'),
    func = convert('upperCase', require('lib/lodash/upperCase'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
