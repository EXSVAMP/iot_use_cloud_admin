var convert = require('lib/lodash/fp/convert'),
    func = convert('compact', require('lib/lodash/compact'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
