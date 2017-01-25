var convert = require('lib/lodash/fp/convert'),
    func = convert('toNumber', require('lib/lodash/toNumber'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
