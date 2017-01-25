var convert = require('lib/lodash/fp/convert'),
    func = convert('isDate', require('lib/lodash/isDate'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
