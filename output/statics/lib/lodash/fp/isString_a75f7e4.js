var convert = require('lib/lodash/fp/convert'),
    func = convert('isString', require('lib/lodash/isString'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
