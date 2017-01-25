var convert = require('lib/lodash/fp/convert'),
    func = convert('camelCase', require('lib/lodash/camelCase'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
