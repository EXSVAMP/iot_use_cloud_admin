var convert = require('lib/lodash/fp/convert'),
    func = convert('snakeCase', require('lib/lodash/snakeCase'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
