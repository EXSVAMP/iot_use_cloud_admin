var convert = require('lib/lodash/fp/convert'),
    func = convert('identity', require('lib/lodash/identity'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
