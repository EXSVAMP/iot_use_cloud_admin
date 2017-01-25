var convert = require('lib/lodash/fp/convert'),
    func = convert('isObject', require('lib/lodash/isObject'), require('lib/lodash/fp/_falseOptions'));

func.placeholder = require('lib/lodash/fp/placeholder');
module.exports = func;
