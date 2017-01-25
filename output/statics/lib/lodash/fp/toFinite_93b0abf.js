var convert = require('lib/lodash/fp/convert'),
    func = convert('toFinite', require('lib/lodash/toFinite'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
