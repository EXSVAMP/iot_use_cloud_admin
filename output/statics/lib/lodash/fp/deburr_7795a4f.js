var convert = require('lib/lodash/fp/convert'),
    func = convert('deburr', require('lib/lodash/deburr'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
