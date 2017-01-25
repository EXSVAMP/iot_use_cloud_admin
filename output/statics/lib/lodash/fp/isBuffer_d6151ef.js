var convert = require('lib/lodash/fp/convert'),
    func = convert('isBuffer', require('lib/lodash/isBuffer'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
