var convert = require('lib/lodash/fp/convert'),
    func = convert('isWeakSet', require('lib/lodash/isWeakSet'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
