var convert = require('lib/lodash/fp/convert'),
    func = convert('isSet', require('lib/lodash/isSet'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
