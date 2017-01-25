var convert = require('lib/lodash/fp/convert'),
    func = convert('isNumber', require('lib/lodash/isNumber'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
