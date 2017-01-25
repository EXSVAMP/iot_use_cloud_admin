var convert = require('lib/lodash/fp/convert'),
    func = convert('noop', require('lib/lodash/noop'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
