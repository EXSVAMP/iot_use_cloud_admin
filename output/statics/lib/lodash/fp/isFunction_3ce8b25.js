var convert = require('lib/lodash/fp/convert'),
    func = convert('isFunction', require('lib/lodash/isFunction'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
