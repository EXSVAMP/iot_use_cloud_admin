var convert = require('lib/lodash/fp/convert'),
    func = convert('lowerCase', require('lib/lodash/lowerCase'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
