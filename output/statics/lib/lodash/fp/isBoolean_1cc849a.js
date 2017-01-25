var convert = require('lib/lodash/fp/convert'),
    func = convert('isBoolean', require('lib/lodash/isBoolean'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
