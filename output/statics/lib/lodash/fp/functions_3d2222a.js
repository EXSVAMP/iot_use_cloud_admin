var convert = require('lib/lodash/fp/convert'),
    func = convert('functions', require('lib/lodash/functions'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
